import { useState, useEffect } from 'react';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import '../styles/components/PokemonCard.css';
import { StarOutlined } from '@ant-design/icons';
import axios from 'axios';
import { Spin } from 'antd';

const PokemonCard = ({ pokemon }) => {
	const { name, url } = pokemon;
	const [pokemonData, setPokemonData] = useState(null);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const fetchPokemonData = async () => {
			const response = await axios.get(url);
			setPokemonData(response.data);
			setLoading(false);
		};
		fetchPokemonData();
	}, [url]);

	const handleFav = () => {
		const element = document.getElementById(`pokemon-star${pokemonData.id}`)
			.firstChild.firstChild;
		element.classList.toggle('pokemon-card__star--active');
		element.classList.toggle('active');
	};

	return (
		<Card
			loading={loading}
			className='pokemon-card'
			title={name[0].toUpperCase() + name.slice(1)}
			cover={
				loading ? (
					<Spin />
				) : (
					<img alt={name} src={pokemonData.sprites.front_default} />
				)
			}
			actions={[
				<StarOutlined
					id={pokemonData ? `pokemon-star${pokemonData.id}` : null}
					key='star'
					onClick={() => handleFav()}
				/>,
			]}>
			<Meta
				description={
					loading ? (
						<Spin />
					) : (
						<div>
							<p>Specie: {pokemonData.species.name}</p>
							<p>
								{' '}
								Type:{' '}
								{pokemonData.types.map((type, index) => {
									if (index === pokemonData.types.length - 1) {
										return type.type.name;
									} else {
										return type.type.name + ', ';
									}
								})}
							</p>
						</div>
					)
				}
			/>
		</Card>
	);
};

export default PokemonCard;
