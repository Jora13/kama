import React from 'react'

function Post(props) {



   return (
      <>
         <div className="element">
            <div className="element_avatar">
               <img src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="" />
            </div>
            <div className="element_text">
               {props.message}
               <div className="element_Author">
                  {props.name}
               </div>
               <div className="like">Liked: {props.likecount}</div>
            </div>

         </div>
      </>
   );
}

export default Post