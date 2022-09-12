import './App.css';
import Profile from './components/Profile';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Dialogs from './components/dialogs/Dialogs';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/setings/Settings';
import Friends from './components/friends/Friends';


const App = (props) => {
  return (
    <div className='container'>
      <div className='app-wrapper'>
        <Header />
        <Navbar state={props.state.navbar} />
        <div className='content'>
          <Routes>
            <Route path='/profile/*' element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
            <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage} addMessage={props.addMessage} updateNewMessageText={props.updateNewMessageText} />} />
            <Route path='/news/*' element={<News />} />
            <Route path='/music/*' element={<Music />} />
            <Route path='/settings/*' element={<Settings />} />
            <Route path='/friends/*' element={<Friends />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}


export default App;
