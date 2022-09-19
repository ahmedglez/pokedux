import axios from 'axios';

const getPokemons = async () => {
	const response = axios
		.get('https://pokeapi.co/api/v2/pokemon?limit=50')
		.then((response) => {
			return response.data.results;
		})
		.catch((error) => {
			console.log(error);
		});
	return response;
};

export { getPokemons };
