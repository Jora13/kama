import React from 'react'
import { addDialogCreator, changeDialogCreator } from '../../redux/dialogsReducer';
import DialogItem from './DialogItem';
import DialogMessage from './DialogMessage';
import Dialogs from './Dialogs';



function DialogsContainer(props) {

   let state = props.store.getState().dialogState

   let updateTextarea = (text) => {
      props.store.dispatch(changeDialogCreator(text))
   }

   let addDialogMessage = (text) => {
      if (text !== '') {
         props.store.dispatch(addDialogCreator(text))
      }
   }

   return (
      <Dialogs dialogState={props.store.getState().dialogState} updateNewMessage={updateTextarea} sendMessage={addDialogMessage} />
   );
}

export default DialogsContainer;