import PokemonCard from './PokemonCard';
import NoResults from './NoResults';
import '../styles/components/PokemonList.css';

const PokemonList = ({ pokemons }) => {
	return (
		<div className='pokemon-list'>
			{pokemons.length > 0 ? (
				pokemons.map((pokemon) => (
					<PokemonCard key={pokemon.name} pokemon={pokemon} />
				))
			) : (
				<NoResults />
			)}
		</div>
	);
};

export default PokemonList;
