"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from utils import APIException, generate_sitemap
from admin import setup_admin
from models import db, User, Planet, People, Favorite
#from models import Person

from flask_jwt_extended import create_access_token, JWTManager, get_jwt_identity, jwt_required

app = Flask(__name__)
app.url_map.strict_slashes = False
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DB_CONNECTION_STRING')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Setup the Flask-JWT-Extended extension
app.config["JWT_SECRET_KEY"] = os.environ.get('JWT_SECRET_KEY')
jwt = JWTManager(app)

MIGRATE = Migrate(app, db)
db.init_app(app)
CORS(app)
setup_admin(app)

@app.route("/signup", methods=["POST"])
def signup():
    body = request.get_json()

    if body is None:
            raise APIException("You need to specify the request body as a json object", status_code=400)
    email = body['email']
    emailExist = User.query.filter_by(email = email)
    if emailExist is not None:
         raise APIException("This email is already signup, please try a different one or recover your password", status_code=400)
    newUser = User(username=body['username'], email=body['email'], password=body['password'])
    db.session.add(newUser)
    db.session.commit()
    userID = newUser.id
    access_token = create_access_token(identity=userID)
    return jsonify(access_token=access_token)

# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@app.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email, password=password).first()
    if user == None:
      return jsonify({"msg": "Bad username or password"}), 401
    userID = user.id
    access_token = create_access_token(identity=userID)
    return jsonify(access_token=access_token, user=user.serialize())

# Protect a route with jwt_required, which will kick out requests
# without a valid JWT present.
@app.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@app.route('/')
def sitemap():
    return generate_sitemap(app)

@app.route('/users', methods=['GET'])
def get_All_Users():
    users = User.query.all() 
    all_users = list(map(lambda x: x.serialize(), users))

    return jsonify(all_users), 200

@app.route('/favorite/<int:favorite_id>', methods=['DELETE'])
#Delete favorite with the id = favorite_id.
def delete_favorites(favorite_id):
    favorite = Favorite.query.get(favorite_id)
    if favorite is None:
        raise APIException('Favorite not found', status_code=404)
    db.session.delete(favorite)
    db.session.commit()
    return f"The favorite with id number {favorite_id} has been eliminated", 200


@app.route('/users/favorites', methods=['GET', 'POST'])
@jwt_required()
#Get all the favorites that belong to the user with the id = user_id.
def get_User_favorites():
    current_user = get_jwt_identity()
    print("*****", current_user)
    # userFav = Favorite.query.filter_by(user_id=id).first()
    # uf = {}
    if request.method == 'GET':
      user1 = User.query.get(current_user)
    #   userfav = user1.favorites
    #   for x in userfav:
    #     uf["name"] = x
      print("USER FAVORITES" , user1.favorites)
      return jsonify(user1.serialize()), 200

    if request.method == 'POST':
      body = request.get_json()
      newFav = Favorite(name=body['name'], user_id=current_user)
      db.session.add(newFav)
      db.session.commit()
      return "ok", 200

    return "Invalid Method", 404

@app.route('/people', methods=['GET'])
def get_All_People():
    people = People.query.all() 
    all_people = list(map(lambda x: x.serialize(), people))
   
    return jsonify(all_people), 200
# this only runs if `$ python src/main.py` is executed

@app.route('/people/<int:id>', methods=['GET'])
def get_single_People(id):
    singlepeople = People.query.filter_by(id=id).first()
    #single_people = list(map(lambda x: x.to_dic(), singlepeople))
    if singlepeople is None:
        raise APIException("there is no person with that ID", 404)
    return jsonify(singlepeople.to_dic()), 200
# this only runs if `$ python src/main.py` is executed

@app.route('/planet/<int:id>', methods=['GET'])
def get_single_Planet(id):
    singleplanet = Planet.query.filter_by(id=id).first()
    #single_people = list(map(lambda x: x.to_dic(), singlepeople))
    if singleplanet is None:
        raise APIException("there is no person with that ID", 404)
    return jsonify(singleplanet.to_dic()), 200
# this only runs if `$ python src/main.py` is executed

@app.route('/planet', methods=['GET'])
def get_All_Planet():
    planet = Planet.query.all() 
    all_planet = list(map(lambda x: x.serialize(), planet))

    return jsonify(all_planet), 200
# this only runs if `$ python src/main.py` is executed

if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3000))
    app.run(host='0.0.0.0', port=PORT, debug=False)
