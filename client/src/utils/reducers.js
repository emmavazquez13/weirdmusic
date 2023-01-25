import { useReducer } from 'react';

import { UPDATE_GROUPS } from './actions';

export const reducer = (state, action) => {
	switch (action.type) {
		case UPDATE_GROUPS:
			return {
				...state,
				conversations: [...action.conversations],
			};

		default:
			return {
				state,
			};
	}
};

export function useChatReducer(initialState) {
	return useReducer(reducer, initialState);
}
