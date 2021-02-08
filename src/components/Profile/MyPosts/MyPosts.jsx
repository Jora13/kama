import React from 'react'
import { addPostCreator, changePostCreator } from '../../../redux/profileReducer'
import Post from './Post/Post'

function MyPosts(props) {


   let myposts = props.profiles.map(p => {
      return (<Post message={p.message} name={p.name} likecount={p.likecount} key={p.id} />)
   })

   let newPostElement = React.createRef()//Создаем ссылку на элемент textarea

   let onAddPost = () => {
      let text = newPostElement.current.value
      if (text !== '') {
         props.dispatch(addPostCreator(text))
         newPostElement.current.value = ''
      }
   }

   let onChangePost = () => {
      let text = newPostElement.current.value
      props.dispatch(changePostCreator(text))
   }

   return (
      <>
         <div className="profile_posts_units">
            {myposts}
         </div>

         <div className="profile_post_form">
            <textarea name="" ref={newPostElement}
               onChange={onChangePost} value={props.myPostTextarea}>
            </textarea>
            <button className="btn" onClick={onAddPost}>Отправить</button>
         </div>
      </>
   );
}

export default MyPosts;