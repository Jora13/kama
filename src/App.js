import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter, Route } from 'react-router-dom';
import state from './redux/store';


function App(props) {

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="page_wrap">
          <Sidebar />
          <div className="content">
            <Route path="/profile" render={() => <Profile
              profiles={props.state.profilePage.profiles}
              dispatch={props.dispatch}
              myPostTextarea={props.state.profilePage.myPostTextarea} />}
            />
            <Route path="/dialogs" render={() => <Dialogs store={props.store} dispatch={props.dispatch} />} />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
