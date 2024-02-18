import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './layouts/BaseLayout';
import AboutPage from './views/About/AboutPage';
import HomePage from './views/Home/HomePage';
import ProfilePage from './views/Profile/ProfilePage';
import LoginPage from './views/login/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
