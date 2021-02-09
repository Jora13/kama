const ADD_POST = 'ADD-POST'
const CHANGE_POST = 'CHANGE-POST'

let initialStore = {
	profiles: [
		{
			id: 1,
			name: 'Jora',
			message: 'Hi! How are you?',
			likecount: '1'
		},
		{
			id: 2,
			name: 'Jora',
			message: 'i am very well.',
			likecount: '2'
		},
		{
			id: 3,
			name: 'Jora',
			message: 'i am very well.'
		},
	],
	myPostTextarea: ''
}

const profileReducer = (state = initialStore, action) => {
	switch (action.type) {
		case ADD_POST:
			let obj = {
				id: state.profiles.length + 1,
				name: 'Jora',
				message: action.postMessage
			}
			state.profiles.push(obj)
			state.profiles.myPostTextarea = ''
			return state
		case CHANGE_POST:
			state.myPostTextarea = action.letterTextarea
			return state
		default:
			return state
	}


	return state
}

export const addPostCreator = (text) => (
	{
		type: ADD_POST,
		postMessage: text
	}
)

export const changePostCreator = (text) => (
	{
		type: CHANGE_POST,
		letterTextarea: text
	}
)

export default profileReducer