import React from 'react';
import { Input } from 'antd';
import '../styles/components/Searcher.css';

const Searcher = () => {
	return (
		<Input.Search
			className='searcher'
			placeholder='input search text'
            onChange={(value) => console.log(value.target.value)}
			onSearch={(value) => console.log(value)}            
			enterButton
		/>
	);
};

export default Searcher;
