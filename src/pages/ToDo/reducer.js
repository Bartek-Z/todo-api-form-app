export const initialState = [];

export const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD':
			return [...state, action.payload];
		case 'DELETE':
			return [...state.filter((item) => item.id !== action.payload)];
		default:
			return state;
	}
};
