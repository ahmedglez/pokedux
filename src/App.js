import { useState } from 'react';

import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import PokeModal from './containers/Modal';

import { setPokemons } from './actions/actions';
import { useSelector, useDispatch } from 'react-redux';
import { useInitialFetch, useNullSearchedValue } from './hooks/useEffects';

import logo from './assets/svg/logo.svg';
import './styles/App.css';

function App() {
	const { limit, offset, searchedValue, pokemons, pokemonsSearch } =
		useSelector((state) => state);
	const dispatch = useDispatch();
	const [pokemonList, setPokemonList] = useState([]);

	useInitialFetch(limit, offset, dispatch, setPokemons, setPokemonList);
	useNullSearchedValue(searchedValue, pokemonsSearch, pokemons, setPokemonList);

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
			</header>
			<PokeModal />
			<Searcher />
			<PokemonList pokemons={pokemonList} />
		</div>
	);
}

export default App;
