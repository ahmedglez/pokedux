import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../actions/actions';
import { Card, Button } from 'antd';
import Meta from 'antd/lib/card/Meta';
import '../styles/components/PokemonCard.css';
import { StarOutlined, StarFilled } from '@ant-design/icons';
import axios from 'axios';
import { Spin } from 'antd';

const PokemonCard = ({ pokemon }) => {
	const { name, url } = pokemon;
	const [pokemonData, setPokemonData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [isFavorite, setIsFavorite] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchPokemonData = async () => {
			const response = await axios.get(url);
			setPokemonData(response.data);
			setLoading(false);
		};
		fetchPokemonData();
	}, [url]);

	const handleFav = () => {
		setIsFavorite(!isFavorite);
		dispatch(setFavorite(pokemonData));
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
				<Button
					className='fav-button'
					icon={
						isFavorite ? <StarFilled /> : <StarOutlined className='filled' />
					}
					id={pokemonData ? `pokemon-star${pokemonData.id}` : null}
					onClick={() => handleFav()}></Button>,
			]}>
			<Meta
				description={
					loading ? (
						<div className='loader-container'>
							<Spin className='spin' spinning size='large' />
						</div>
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
