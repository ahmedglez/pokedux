import {
	SET_POKEMONS,
	SET_FAVORITE,
	SET_POKEMON,
	SET_MODAL,
	CLOSE_MODAL,
	SET_POKEMONS_SEARCH,
	SET_ERROR,
	SET_LOADING,
	SET_SEARCHED_VALUE,
	SET_LIMIT,
	SET_OFFSET,
} from './types';

const setPokemons = (payload) => ({
	type: SET_POKEMONS,
	payload,
});

const setPokemon = (payload) => ({
	type: SET_POKEMON,
	payload,
});

const setFavorite = (payload) => ({
	type: SET_FAVORITE,
	payload,
});

const setModal = (payload) => ({
	type: SET_MODAL,
	payload,
});

const closeModal = () => ({
	type: CLOSE_MODAL,
});

const setPokemonsSearch = (payload) => ({
	type: SET_POKEMONS_SEARCH,
	payload,
});

const setError = (payload) => ({
	type: SET_ERROR,
	payload,
});

const setLoading = (payload) => ({
	type: SET_LOADING,
	payload,
});

const setSearchedValue = (payload) => ({
	type: SET_SEARCHED_VALUE,
	payload,
});

const setLimit = (payload) => ({
	type: SET_LIMIT,
	payload,
});

const setOffset = (payload) => ({
	type: SET_OFFSET,
	payload,
});

export {
	setPokemons,
	setFavorite,
	setPokemon,
	setModal,
	closeModal,
	setPokemonsSearch,
	setError,
	setLoading,
	setSearchedValue,
	setLimit,
	setOffset,
};
