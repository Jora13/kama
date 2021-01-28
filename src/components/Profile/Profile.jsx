import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
   return (
      <>
         <div className="profile_posts">
            <ProfileInfo />
            <div className="profile">
               <MyPosts profiles={props.profiles} addPost={props.addPost} changePost={props.changePost} myPostTextarea={props.myPostTextarea} />
            </div>
         </div>
      </>
   );
}

export default Profile;