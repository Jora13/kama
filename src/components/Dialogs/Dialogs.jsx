import React from 'react'
import { addDialogCreator, changeDialogCreator } from '../../redux/dialogsReducer';
import DialogItem from './DialogItem';
import DialogMessage from './DialogMessage';



function Dialogs(props) {

   let state = props.store.getState().dialogState

   let dialogitems = state.dialogs.map((d) => {
      return (<DialogItem name={d.name} id={d.id} key={d.id} />)
   })

   let messages = state.messages.map((m) => {
      return (<DialogMessage message={m.message} id={m.id} key={m.id} />)
   })

   let newDialogElement = React.createRef()

   let updateTextarea = () => {
      let text = newDialogElement.current.value
      props.dispatch(changeDialogCreator(text))
   }

   let addDialogMessage = () => {
      let text = newDialogElement.current.value
      if (text !== '') {
         props.dispatch(addDialogCreator(text))
         newDialogElement.current.value = ''
      }
   }

   return (
      <>
         <p className="title">
            Dialogs
         </p>
         <div className="dialogs">
            <div className="dialogs_chats_menu">
               <ul>
                  {dialogitems}
               </ul>
            </div>
            <div className="dialogs_content">
               <div className="dialogs_content_message">
                  <div className="dialogs_content_user">
                     <div className="dialogs_content_img">
                        <img src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="" />
                     </div>
                     <div className="dialogs_content_name">
                        UserName
                     </div>
                  </div>
                  <div className="dialogs_content_text">
                     {messages}
                  </div>
               </div>
               <div className="dialogs_form">

                  <div className="profile_post_form">
                     <textarea name="" onChange={updateTextarea} ref={newDialogElement}></textarea>
                     <button className="btn" onClick={addDialogMessage}>Отправить</button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default Dialogs;