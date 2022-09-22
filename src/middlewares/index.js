const logger = (store) => (next) => (action) => {
	console.group(action.type);
	console.log('The action: ', action);
	const returnValue = next(action);
	console.log('The new state: ', store.getState());
	console.groupEnd();
	return returnValue;
};

const featuring = (store) => (next) => (actionInfo) => {
	const featured = [
		{
			name: 'Juan Francisco',
			url: 'https://pokeapi.co/api/v2/pokemon/25/',
		},
		...actionInfo.action.payload,
	];
	const updatedActionInfo = {
		...actionInfo,
		action: {
			...actionInfo.action,
			payload: featured,
		},
	};
	return next(updatedActionInfo);
};

export { logger, featuring };
