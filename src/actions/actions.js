import { SET_POKEMONS, SET_FAVORITE } from './types';

const setPokemons = (payload) => ({
	type: SET_POKEMONS,
	payload,
});

const setFavorite = (payload) => ({
	type: SET_FAVORITE,
	payload,
});

export { setPokemons, setFavorite };
