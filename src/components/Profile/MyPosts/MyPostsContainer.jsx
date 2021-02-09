import React from 'react'
import { addPostCreator, changePostCreator } from '../../../redux/profileReducer'
import MyPosts from './MyPosts'

function MyPostsContainer(props) {

   let onAddPost = (text) => {
      if (text !== '') {
         props.store.dispatch(addPostCreator(text))
      }
   }

   let onChangePost = (text) => {
      props.store.dispatch(changePostCreator(text))
   }

   return (
      <MyPosts changePost={onChangePost} addPost={onAddPost} profiles={props.store.getState().profilePage.profiles} myPostTextarea={props.store.getState().profilePage.myPostTextarea} />
   );
}

export default MyPostsContainer;