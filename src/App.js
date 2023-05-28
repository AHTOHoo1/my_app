import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/setings/Settings';
import Friends from './components/friends/Friends';
import FindUsersContainer from './components/find_users/FindUsersContainer';
import HeaderContainer from './components/HeaderContainer';
import React, { Component, Suspense } from 'react';
import { compose } from 'redux';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './redux/app_reducer';
import Preloader from './components/common/preloader/Preloader';
import store from './redux/redux_store';

const DialogsContainer = React.lazy(() => import('./components/dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/ProfileContainer'));
const Login = React.lazy(() => import('./components/login/Login'))

class App extends Component {

  catchAllUnhandledErrors = (reason, promis) => {
    alert("some error")
  }

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
  }

  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
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
            <Suspense fallback={<div><Preloader/></div>} >
              <Routes>
                <Route exact path='/' element={<Navigate to={'/profile'} />} />
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
                <Route path='*' element={<div>404 not found</div>} />
              </Routes>
            </Suspense>
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

let AppContainer = compose(

  connect(mapStateToProps, { initializeApp }))(App);


const MainApp = (props) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL} >
      <Provider store={store}>
        <AppContainer state={store.getState()} />
      </Provider>
    </BrowserRouter>
  )
}

export default MainApp;
