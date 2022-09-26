import { useSelector } from 'react-redux';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import CarouselComponent from './Carousel';
import '../styles/components/PokemonDetails.css';

const PokemonDetails = () => {
	const pokemon = useSelector((state) => state.pokemon);
	const loading = useSelector((state) => state.loading);


	return (
		<Card
			className='pokemon-details'
			loading={loading}
			title={pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
			cover={<CarouselComponent sprites={pokemon.sprites} />}>
			<Meta
				description={
					<div>
						<p>Specie: {pokemon.species.name}</p>
						<p>
							{' '}
							Type:{' '}
							{pokemon.types.map((type, index) => {
								if (index === pokemon.types.length - 1) {
									return type.type.name;
								} else {
									return type.type.name + ', ';
								}
							})}
						</p>
						<p>Weight: {pokemon.weight} cm</p>
						<p>Height: {pokemon.height} cm</p>
						<p>
							Habilities:{' '}
							{pokemon.abilities.map((item, index) => {
								console.log(
									'🚀 ~ file: PokemonDetails.jsx ~ line 66 ~ {pokemon.abilities.map ~ item',
									item
								);

								if (index === pokemon.abilities.length - 1) {
									return item.ability.name;
								} else {
									return item.ability.name + ', ';
								}
							})}
						</p>
					</div>
				}
			/>
		</Card>
	);
};

export default PokemonDetails;
