import { useEffect } from 'react';

import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';

import { getPokemonsWithDetails } from './actions/actions';
import { useSelector, useDispatch } from 'react-redux';

import logo from './assets/svg/logo.svg';
import './styles/App.css';

function App() {
	const pokemons = useSelector((state) => state.pokemons);
	const dispatch = useDispatch();

	useEffect(() => {
		getPokemonsWithDetails(pokemons)(dispatch);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
			</header>
			<Searcher />
			<PokemonList pokemons={pokemons} />
		</div>
	);
}

export default App;
