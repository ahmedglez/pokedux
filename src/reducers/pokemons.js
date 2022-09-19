import {
	SET_POKEMONS,
	SET_POKEMON,
	SET_LOADING,
	SET_ERROR,
} from '../actions/types';

const initialState = {
	pokemons: [],
	pokemon: {},
	loading: false,
	error: null,
};

export const pokemonsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_POKEMONS:
			return {
				...state,
				pokemons: action.payload,
			};
		case SET_POKEMON:
			return {
				...state,
				pokemon: action.payload,
			};
		case SET_LOADING:
			return {
				...state,
				loading: action.payload,
			};
		case SET_ERROR:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};
