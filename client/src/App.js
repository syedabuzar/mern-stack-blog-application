import { useState } from 'react';
import Login from './components/account/Login';
import Home from './components/home/Home';
import Header from './components/header/Header';
import DataProvider from './context/DataProvider';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';

const PrivateRoute = ({ userAuthenticated, ...props }) => {
  // const token = sessionStorage.getItem('accessToken');
  return userAuthenticated ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate replace to='/login' />
  );
};

function App() {
  const [userAuthenticated, isUserAuthenticated] = useState(false);
  return (
    <DataProvider>
      <BrowserRouter>
        <div style={{ marginTop: '64px' }}>
          <Routes>
            <Route
              path='/login'
              element={<Login isUserAuthenticated={isUserAuthenticated} />}
            />
            <Route
              path='/'
              element={<PrivateRoute userAuthenticated={userAuthenticated} />}
            >
              <Route path='/' element={<Home />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
