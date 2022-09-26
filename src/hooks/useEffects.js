import { useEffect } from 'react';
import { getPokemons } from '../api';

const useInitialFetch = (limit, offset, c1, c2, c3) => {
	useEffect(() => {
		const fetchPokemons = async () => {
			const data = await getPokemons(limit, offset);
			c1(c2(data));
			c3(data);
		};
		fetchPokemons();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};

const useNullSearchedValue = (searchedValue, pokemonsSearch, pokemons, c1) => {
	useEffect(() => {
		if (searchedValue !== '' && pokemonsSearch.length > 0) {
			c1(pokemonsSearch);
		} else {
			c1(pokemons);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pokemonsSearch, searchedValue]);
};

export { useInitialFetch, useNullSearchedValue };
