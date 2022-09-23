import React from 'react';
import sad_pikachu from '../assets/img/sad_pikachu.png';

const NoResults = () => {
	return (
		<div className='no-results'>
			<div className='no-results_img'>
				<img src={sad_pikachu} alt='No Results' />
			</div>
		</div>
	);
};

export default NoResults;
