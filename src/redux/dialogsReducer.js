const CHANGE_DIALOG = 'CHANGE-DIALOG'
const ADD_DIALOG = 'ADD-DIALOG'

const dialogsReducer = (state, action) => {
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