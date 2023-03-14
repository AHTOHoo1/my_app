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
import Login from './components/login/Login';
import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app_reducer';
import Preloader from './components/common/preloader/Preloader';


class App extends Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className='container'>
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar state={this.props.state} />
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
              <Route path='/login/*' element={<Login />} />
            </Routes>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state.navbar,
  initialized: state.app.initialized
})

export default compose(
  
  connect(mapStateToProps, { initializeApp }))(App);
