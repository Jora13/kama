import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
   return (
      <>
         <div className="profile_posts">
            <ProfileInfo />
            <div className="profile">
               <MyPostsContainer store={props.store} profiles={props.profiles} dispatch={props.dispatch} myPostTextarea={props.myPostTextarea} />
            </div>
         </div>
      </>
   );
}

export default Profile;