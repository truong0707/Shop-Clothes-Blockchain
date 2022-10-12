import React, { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from './page/Home';
import NavBar from './components/NavBar';
import { useSelector } from 'react-redux';
import DetailProduct from './page/DetailProduct';
import Footer from './components/Footer';
import Shop from './page/Shop';
import Blog from './page/Blog';
import NotFound from './page/NotFound';
import useEth from './store/context/EthContext/useEth';
import Testblockchain from './components/Testblockchain';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AuthContextProvider } from './store/context/AuthContext';
import Protected from './components/Protected';
import Profile from './page/Profile';

export interface StateStore {
  userLogin: {
    loading: boolean;
    userInfo: {
      name?: string;
    };
    error: boolean;
  };
}

function App() {
  const [user, setUser] = useState(true);
  const getuser = useSelector((state: StateStore) => state.userLogin.userInfo);
  const { state } = useEth();

  useEffect(() => {
    if (getuser === null && getuser === undefined) {
      setUser(false);
    } else {
      setUser(true);
    }
  }, [getuser, user]);

  return (
    <AuthContextProvider>
      <div className="App">
        <Router>
          <NavBar children={undefined} />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/profile"
              element={
                <Protected>
                  <Profile />
                </Protected>
              }
            />
            <Route path="/login" element={'Login'} />
            <Route path="/register" element={'regiter'} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/blog" element={<Blog />} />
            <Route
              path="/detail-product/:productId"
              element={user ? <DetailProduct /> : <Navigate to="/login" />}
            />
            <Route path="*" element={<NotFound />} />
            <Route path="/test-blockhain" element={<Testblockchain />} />
          </Routes>

          <Footer />
        </Router>
      </div>
    </AuthContextProvider>
  );
}

export default App;
