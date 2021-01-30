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

   getState() {
      return this._state
   },

   _callSubscriber() {
      console.log('state rerender');
   },

   addPost(postMessage) {
      let obj = {
         id: this._state.profiles.length + 1,
         name: 'Jora',
         message: postMessage
      }
      this._state.profiles.push(obj)
      this._state.myPostTextarea = ''
      this._callSubscriber()
   },

   changePost(letterTextarea) {
      this._state.myPostTextarea = letterTextarea
      this._callSubscriber()
   },

   //Получаем rerenderEntireTree из index.js
   subscribe(observer) {
      this._callSubscriber = observer
   }
}



window.store = store


export default store