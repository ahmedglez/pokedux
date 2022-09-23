import {
	SET_POKEMONS,
	SET_POKEMON,
	SET_LOADING,
	SET_ERROR,
	SET_FAVORITE,
} from '../actions/types';

const initialState = {
	pokemons: [],
	pokemon: {},
	loading: false,
	error: null,
	favorites: [],
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
		case SET_FAVORITE:
			const newPokemonList = [...state.pokemons];
			const currentPokemonIndex = newPokemonList.findIndex(
				(pokemon) => pokemon.id === action.payload.id
			);			
			newPokemonList[currentPokemonIndex].favorite =
				!newPokemonList[currentPokemonIndex].favorite;
			const newFavoritesList = [...state.favorites];
			newFavoritesList.push(newPokemonList[currentPokemonIndex]);
			console.log("🚀 ~ file: pokemons.js ~ line 48 ~ pokemonsReducer ~ newFavoritesList", newFavoritesList)
			return {
				...state,
				pokemons: newPokemonList,
				favorites: newFavoritesList,
			};
		default:
			return state;
	}
};
