const ADD_POST = 'ADD-POST'
const CHANGE_POST = 'CHANGE-POST'
const CHANGE_DIALOG = 'CHANGE-DIALOG'
const ADD_DIALOG = 'ADD-DIALOG'

let store = {
   _state: {
      dialogState: {
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
      },
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
   },

   _callSubscriber() {
      console.log('state rerender');
   },

   getState() {
      return this._state
   },

   //Получаем rerenderEntireTree из index.js
   subscribe(observer) {
      this._callSubscriber = observer
   },

   dispatch(action) {
      if (action.type === ADD_POST) {
         let obj = {
            id: this._state.profiles.length + 1,
            name: 'Jora',
            message: action.postMessage
         }
         this._state.profiles.push(obj)
         this._state.myPostTextarea = ''
         this._callSubscriber()
      } else if (action.type === CHANGE_POST) {
         this._state.myPostTextarea = action.letterTextarea
         this._callSubscriber()
      } else if (action.type === ADD_DIALOG) {
         let body = this._state.dialogState.newDialogText
         this._state.dialogState.newDialogText = ''
         this._state.dialogState.messages.push({
            id: this._state.dialogState.messages.length + 1,
            message: body
         })
         this._callSubscriber()
      } else if (action.type === CHANGE_DIALOG) {
         this._state.dialogState.newDialogText = action.body
         this._callSubscriber()
      }
   }
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



window.store = store


export default store