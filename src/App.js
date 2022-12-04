import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/setings/Settings';
import Friends from './components/friends/Friends';
import DialogsContainer from './components/dialogs/DialogsContainer';
import FindUsersContainer from './components/find_users/FindUsersContainer';
import ProfileContainer from './components/ProfileContainer';
import HeaderContainer from './components/HeaderContainer';


const App = (props) => {
  return (
    <div className='container'>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar state={props.state.navbar} />
        <div className='content'>
          <Routes>
            <Route path='/profile' element={<ProfileContainer />} >
              <Route path=':userId' element={<ProfileContainer />} />
            </Route>
            <Route path='/dialogs/*' element={<DialogsContainer />} />
            <Route path='/news/*' element={<News />} />
            <Route path='/music/*' element={<Music />} />
            <Route path='/find_users/*' element={<FindUsersContainer />} />
            <Route path='/settings/*' element={<Settings />} />
            <Route path='/friends/*' element={<Friends />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}


export default App;
