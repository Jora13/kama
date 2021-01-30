import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter, Route } from 'react-router-dom';
import state from './redux/state';


function App(props) {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="page_wrap">
          <Sidebar />
          <div className="content">
            <Route path="/profile" render={() => <Profile profiles={props.state.profiles} addPost={props.addPost} changePost={props.changePost} myPostTextarea={state.myPostTextarea} />} />
            <Route path="/dialogs" render={() => <Dialogs dialogs={props.state.dialogState.dialogs} messages={props.state.dialogState.messages} />} />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
