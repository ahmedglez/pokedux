import { Modal } from 'antd';
import PokemonDetails from '../components/PokemonDetails';
import { setPokemon } from '../actions/actions';
import { useDispatch, useSelector } from 'react-redux';

const PokeModal = () => {
	const dispatch = useDispatch();
	const modal = useSelector((state) => state.modal);

	const handleOk = () => {
		dispatch({ type: 'CLOSE_MODAL' });
		setPokemon(null);
	};

	const handleCancel = () => {
		dispatch({ type: 'CLOSE_MODAL' });
		setPokemon(null);
	};

	return (
		<>
			<Modal
				title='Pokemon Details'
				open={modal}
				onOk={handleOk}
				onCancel={handleCancel}
                style={{
                    top: 20,
                 }}>
				<PokemonDetails />
			</Modal>
		</>
	);
};

export default PokeModal;
