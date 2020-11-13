import {
	SET_USERS,
	SET_CURRENT_PAGE
} from './types';

const initailState = {
	users: [],
	pages: 0,
	currentPage: 0,
	usersOnPage: 5,
	usersLength: 0
};

export const reducer = (state = initailState, { type, payload }) => {
	switch (type) {
		case SET_USERS: {
			let pages = 0;
			let users = [];

			if (!!payload.length) {
				users = payload;
				pages = Math.ceil(
					payload.length / state.usersOnPage
				);
			}

			return {
				...state,
				users,
				pages,
				usersLength: users.length
			};
		}

		case SET_CURRENT_PAGE: {
			return {
				...state,
				currentPage: payload
			}
		}

		default: {
			return state;
		}
	}
};