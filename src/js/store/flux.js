const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			vehicles: [],
			planets: [],
			people: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction

			loadPeople: () => {
				fetch(`https://swapi.dev/api/people/`)
					.then(res => res.json())
					.then(data => setStore({ people: data.results }));
			},

			loadPlanets: () => {
				fetch("https://swapi.dev/api/planets/")
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }));
				//.catch(err => console.error(err));
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
                */
			},
			loadVehicles: () => {
				fetch("https://swapi.dev/api/vehicles/")
					.then(res => res.json())
					.then(data => setStore({ vehicles: data.results }));
				//.catch(err => console.error(err));
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
                */
			},
			deletefav: target => {
				const store = getStore();
				const newfav = store.favorites.filter(f => f.name != target.name);

				console.log(target);
				console.log(newfav);
				console.log("se activo el borrado");
				setStore({ favorites: newfav });
			},
			addFavorite: fav => {
				const store = getStore();

				setStore({ favorites: [...store.favorites, fav] });
			}
		}
	};
};

export default getState;
