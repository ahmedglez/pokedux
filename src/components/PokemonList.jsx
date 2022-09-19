import PokemonCard from './PokemonCard';
import '../styles/components/PokemonList.css';

const PokemonList = ({ pokemons }) => {
	return (
		<div className='pokemon-list'>
			{pokemons.map((pokemon) => (
				<PokemonCard key={pokemon.name} pokemon={pokemon} />
			))}	
		</div>
	);
};

export default PokemonList;
