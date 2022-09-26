import axios from 'axios';

const getPokemons = async (limit, offset) => {
	const response = axios
		.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
		.then((response) => {
			const data = response.data.results.map(({ name }) =>
				getPokemonByName(name)
			);
			return Promise.all(data);
		})
		.catch((error) => {
			console.log(
				'🚀 ~ file: index.js ~ line 32 ~ getPokemonByName ~ error ~ Request Pokemon by Name Error',
				error
			);
		});
	return response;
};

const getPokemonByName = async (name) => {
	const response = axios
		.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.log(
				'🚀 ~ file: index.js ~ line 32 ~ getPokemonByName ~ error ~ Request Pokemon by Name Error',
				error
			);
		});
	return response;
};

export { getPokemons, getPokemonByName };
