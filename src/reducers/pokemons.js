import {
	SET_POKEMONS,
	SET_POKEMON,
	SET_LOADING,
	SET_ERROR,
	SET_FAVORITE,
	SET_MODAL,
	CLOSE_MODAL,
	SET_POKEMONS_SEARCH,
	SET_SEARCHED_VALUE,
	SET_LIMIT,
	SET_OFFSET,
} from '../actions/types';

const initialState = {
	pokemons: [],
	pokemon: {},
	loading: false,
	error: null,
	favorites: [],
	modal: false,
	pokemonsSearch: [],
	searchedValue: '',
	limit: 10,
	offset: 0,
};

export const pokemonsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_POKEMONS:
			return {
				...state,
				pokemons: action.payload,
			};
		case SET_POKEMON:
			console.log(action.payload);
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
			console.log(
				'🚀 ~ file: pokemons.js ~ line 48 ~ pokemonsReducer ~ newFavoritesList',
				newFavoritesList
			);
			return {
				...state,
				pokemons: newPokemonList,
				favorites: newFavoritesList,
			};
		case SET_MODAL:
			console.log(action.payload);
			return {
				...state,
				modal: action.payload,
			};
		case CLOSE_MODAL:
			return {
				...state,
				modal: false,
			};
		case SET_POKEMONS_SEARCH:
			return {
				...state,
				pokemonsSearch:
					action.payload.length === 0 ? [] : [action.payload],
			};
		case SET_SEARCHED_VALUE:
			return {
				...state,
				searchedValue: action.payload,
			};
		case SET_LIMIT:
			return {
				...state,
				limit: action.payload,
			};
		case SET_OFFSET:
			return {
				...state,
				offset: action.payload,
			};

		default:
			return state;
	}
};
