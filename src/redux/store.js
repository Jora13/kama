import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"
import sidebarReducer from "./sidebarReducer"


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

      profilePage: {
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
      sidebar: {

      }
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

      this._state.profilePage = profileReducer(this._state.profilePage, action)
      this._state.dialogState = dialogsReducer(this._state.dialogState, action)
      this._state.sidebar = sidebarReducer(this._state.sidebar, action)
      this._callSubscriber()

   }
}




window.store = store


export default store