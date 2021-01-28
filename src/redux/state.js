import { rerenderTree } from '../render'

let state = {
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
}
window.state = state
export let addPost = (postMessage) => {
   let obj = {
      id: state.profiles.length + 1,
      name: 'Jora',
      message: postMessage
   }
   state.profiles.push(obj)
   state.myPostTextarea = ''
   rerenderTree(state)
}

export let changePost = (letterTextarea) => {
   state.myPostTextarea = letterTextarea
   rerenderTree(state)
}

export default state