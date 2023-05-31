import './App.css';

import { useAppSelector } from './customHooks';
import { PagesEnum } from './enums/Enums';

import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import HomePage from './Components/Pages/HomePage/HomePage';
import AuthPage from './Components/Pages/AuthPage/AuthPage';
import RegPage from './Components/Pages/RegPage/RegPage';

function App() {
  const page = useAppSelector(state => state.page.page);

  return (
    <>
      <Header></Header>
      {page === PagesEnum.HOME &&
        <HomePage></HomePage>
      }
      {page === PagesEnum.AUTH &&
        <AuthPage></AuthPage>
      }
      {page === PagesEnum.REG &&
        <RegPage></RegPage>
      }
      <Footer></Footer>
    </>
  );
}

export default App;
