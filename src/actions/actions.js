import { SET_POKEMONS } from './types';
import { getPokemons } from '../api';

const setPokemons = (payload) => ({
	type: SET_POKEMONS,
	payload,
});

const getPokemonsWithDetails = (pokemons) => async (dispatch) => {
	pokemons = await getPokemons();
	dispatch(setPokemons(pokemons));
};

export { setPokemons, getPokemonsWithDetails };
