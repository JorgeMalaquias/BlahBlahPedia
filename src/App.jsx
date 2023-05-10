import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './style/global-style';
import { Subscription } from './pages/subscription';
import { MainScreen } from './pages/main-screen';
import { useSelector } from 'react-redux';

export default function App() {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Subscription />} />
        <Route path="/main-screen" element={<MainScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

