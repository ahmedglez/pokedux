import React from 'react';
import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { getPokemonByName } from '../api';
import { setPokemonsSearch, setSearchedValue } from '../actions/actions';
import '../styles/components/Searcher.css';

const Searcher = () => {
	const dispatch = useDispatch();

	const handleSearch = (e) => {
		const value = e.toString().toLowerCase();
		const fetchPokemon = async () => {
			const data = await getPokemonByName(value);
			dispatch(setPokemonsSearch(data));
		};
		fetchPokemon();
	};

	const onInputChange = (e) => {
		console.log(e.target.value);
		dispatch(setSearchedValue(e.target.value));
		if (e.target.value === '') {
			dispatch(setPokemonsSearch([]));
		}
	};

	return (
		<Input.Search
			className='searcher'
			placeholder='input search text'
			onSearch={(value) => handleSearch(value)}
			onChange={(e) => onInputChange(e)}
			enterButton
		/>
	);
};

export default Searcher;
