import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFavorite, setPokemon, setModal } from '../actions/actions';
import { Card, Button } from 'antd';
import Meta from 'antd/lib/card/Meta';
import '../styles/components/PokemonCard.css';
import { StarOutlined, StarFilled } from '@ant-design/icons';
import { Spin } from 'antd';

const PokemonCard = ({ pokemon }) => {
	const [isFavorite, setIsFavorite] = useState(false);
	const {loading} = useSelector((state) => state);
	const dispatch = useDispatch();

	const handleFav = () => {
		setIsFavorite(!isFavorite);
		dispatch(setFavorite(pokemon));
	};

	const handleClick = () => {
		dispatch(setPokemon(pokemon));
		dispatch(setModal(true));
	};

	return (
		<Card
			onClick={() => handleClick()}
			className='pokemon-card'
			title={pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
			cover={
				loading ? (
					<Spin />
				) : (
					<img alt={pokemon.name} src={pokemon.sprites.front_default} />
				)
			}
			actions={[
				<Button
					className='fav-button'
					icon={
						isFavorite ? <StarFilled /> : <StarOutlined className='filled' />
					}
					id={pokemon ? `pokemon-star${pokemon.id}` : null}
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
							<p>
								{' '}
								<span className='pokemon-card__span'>Abilities:</span>
								{pokemon.abilities.map((item, index) => {
									if (index === pokemon.abilities.length - 1) {
										return (
											item.ability.name[0].toUpperCase() +
											item.ability.name.slice(1)
										);
									} else {
										return (
											item.ability.name[0].toUpperCase() +
											item.ability.name.slice(1) +
											', '
										);
									}
								})}
							</p>
							<p>
								{' '}
								<span className='pokemon-card__span'>Type:</span>{' '}
								{pokemon.types.map((item, index) => {
									if (index === pokemon.types.length - 1) {
										return (
											item.type.name[0].toUpperCase() + item.type.name.slice(1)
										);
									} else {
										return (
											item.type.name[0].toUpperCase() +
											item.type.name.slice(1) +
											', '
										);
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
