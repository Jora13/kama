const CHANGE_DIALOG = 'CHANGE-DIALOG'
const ADD_DIALOG = 'ADD-DIALOG'

let initialStore = {
	dialogs: [
		{
			id: 1,
			name: 'Vera'
		},
		{
			id: 2,
			name: 'Nadegda'
		},
		{
			id: 3,
			name: 'Irina'
		}
	],
	messages: [
		{
			id: 1,
			message: 'my name is Vera'
		},
		{
			id: 2,
			message: 'my name is Nadegda'
		},
		{
			id: 3,
			message: 'my name is Irina'
		}
	],
	newDialogText: ""
}

const dialogsReducer = (state = initialStore, action) => {
	switch (action.type) {
		case ADD_DIALOG:
			let body = state.newDialogText
			state.newDialogText = ''
			state.messages.push({
				id: state.messages.length + 1,
				message: body
			})
			return state
		case CHANGE_DIALOG:
			state.newDialogText = action.body
			return state
		default:
			return state
	}


	return state
}

export const addDialogCreator = (text) => (
	{
		type: ADD_DIALOG,
		body: text
	}
)

export const changeDialogCreator = (text) => (
	{
		type: CHANGE_DIALOG,
		body: text
	}
)

export default dialogsReducer