import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter, Route } from 'react-router-dom';
import state from './redux/store';
import DialogsContainer from './components/Dialogs/DialogsContainer';


function App(props) {

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="page_wrap">
          <Sidebar />
          <div className="content">
            <Route path="/profile" render={() => <Profile store={props.store} />}
            />
            <Route path="/dialogs" render={() => <DialogsContainer store={props.store} />} />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
