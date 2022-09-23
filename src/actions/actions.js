<<<<<<< HEAD
import { SET_POKEMONS } from './types';
import { getPokemons } from '../api';
=======
import { SET_POKEMONS, SET_FAVORITE } from './types';
>>>>>>> gh-pages

const setPokemons = (payload) => ({
	type: SET_POKEMONS,
	payload,
});

<<<<<<< HEAD
const getPokemonsWithDetails = (pokemons) => async (dispatch) => {
	pokemons = await getPokemons();
	dispatch(setPokemons(pokemons));
};

export { setPokemons, getPokemonsWithDetails };
=======
const setFavorite = (payload) => ({
	type: SET_FAVORITE,
	payload,
});

export { setPokemons, setFavorite };
>>>>>>> gh-pages
