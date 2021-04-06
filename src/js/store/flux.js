const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			characters: [],
			starships: [],
			planets: [],
			details:[],
		},
		actions: {
			addFavorites: favorito => {
				const store = getStore();
				const { favorites } = store;
				favorites.push(favorito);
				setStore({
					favorites: favorites
				});
			},
			deleteFavorites: index => {
				const store = getStore();
				const { favorites } = store;
				favorites.splice(index, 1);
				setStore({
					favorites: favorites
				});
			},
			getCharacters: async () => {
				//const store = getStore();
				const optionsPerfil = {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
				};
				const respId = await fetch("https://swapi.dev/api/people/",optionsPerfil);
				const datos = await respId.json();
				console.log(datos);
				setStore({characters: datos.results,});				
			},
			getPlanets: async () => {
				//const store = getStore();
				const optionsPerfil = {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
				};
				const resp_planetsId = await fetch("https://swapi.dev/api/planets/",optionsPerfil);
				const datos_planets = await resp_planetsId.json();
				console.log(datos_planets);
				setStore({planets: datos_planets.results,});
			},
			getstarships: async () => {
				//const store = getStore();
				const optionsPerfil = {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
				};
				const resp_starships = await fetch("https://swapi.dev/api/starships/",optionsPerfil);
				const datos_starships = await resp_starships.json();
				console.log(datos_starships);
				setStore({starships: datos_starships.results,});
			},
			getDetails: (index) => {
				fetch(
					"https://www.swapi.tech/api/people/" + index + "/")
				.then((resp) => resp.json())
				.then((data) => setStore({ details: data }))
				.catch((error) => console.warn(error));
			},
		},
	};
};

export default getState;