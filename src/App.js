import { useEffect } from 'react';
import { connect } from 'react-redux';

import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';

import { getPokemons } from './api';
import { setPokemons as setPokemonsAction } from './actions/actions';

import logo from './assets/svg/logo.svg';
import './styles/App.css';

function App({ pokemons, setPokemons }) {
	useEffect(() => {
		const fetchPokemons = async () => {
			const data = await getPokemons();
			setPokemons(data);
		};
		fetchPokemons();
	}, [setPokemons]);

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

const mapStateToProps = (state) => {
	return {
		pokemons: state.pokemons,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		setPokemons: (payload) => dispatch(setPokemonsAction(payload)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
