const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			access_token: null,
			vehicles: [],
			planets: [],
			people: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			login: async (email, password) => {
				const options = {
					headers: { "Content-Type": "application/json" },
					method: "POST",
					body: JSON.stringify({ email, password })
				};
				const res = await fetch(`${process.env.SWAPIURL}/login`, options);
				const data = await res.json();
				setStore({ access_token: data.access_token, favorites: data.user.favorites });

				return data;
			},
			loadPeople: () => {
				fetch(`${process.env.SWAPIURL}/people`)
					.then(res => res.json())
					.then(data => setStore({ people: data }))
					.catch(error => console.log("error cargando people", error));
			},

			loadPlanets: () => {
				fetch(`${process.env.SWAPIURL}/planet`)
					.then(res => res.json())
					.then(data => setStore({ planets: data }))
					.catch(error => console.log("error cargando planets", error));
				//.catch(err => console.error(err));
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
                */
			},
			loadVehicles: () => {
				fetch(`${process.env.SWAPIURL}/vehicles`)
					.then(res => res.json())
					.then(data => setStore({ vehicles: data }))
					.catch(error => console.log("error cargando vehicles", error));
				//.catch(err => console.error(err));
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
                */
			},
			deletefav: target => {
				console.log(target);
				const store = getStore();
				fetch(`${process.env.SWAPIURL}/favorite/${target}`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${store.access_token}`
					}
				})
					// const newfav = store.favorites.filter(f => f.name != target.name);
					.then(() => getActions().loadFavorite());
			},
			loadFavorite: () => {
				const store = getStore();
				fetch(`${process.env.SWAPIURL}/users/favorites`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${store.access_token}`
					}
				})
					.then(res => res.json())
					.then(data => setStore({ favorites: data.favorites }))
					.catch(error => console.log("error cargando favorites", error));
			},
			addFavorite: target => {
				const store = getStore();
				fetch(`${process.env.SWAPIURL}/users/favorites`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${store.access_token}`
					},
					body: JSON.stringify({ name: target.name })
				})
					// const newfav = store.favorites.filter(f => f.name != target.name);
					.then(() => getActions().loadFavorite());
			}
		}
	};
};

export default getState;
