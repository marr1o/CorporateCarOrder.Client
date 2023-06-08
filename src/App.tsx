import './App.css';

import { useAppSelector } from './customHooks';
import { AuthTypes, PagesEnum } from './enums/Enums';

import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import HomePage from './Components/Pages/HomePage/HomePage';
import AuthPage from './Components/Pages/AuthPage/AuthPage';
import RegPage from './Components/Pages/RegPage/RegPage';
import AccountPage from './Components/Pages/AccountPage/AccountPage';
import OrderPage from './Components/Pages/OrderPage/OrderPage';
import DriverPage from './Components/Pages/DriverPage/DriverPage';
import AnalyticPage from './Components/Pages/AnalyticPage/AnalyticPage';

function App() {
  const page = useAppSelector(state => state.page.page);
  const authType = useAppSelector(state => state.auth.authType);

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
      {page === PagesEnum.ACCOUNT && authType !== AuthTypes.NONE &&
        <AccountPage></AccountPage>
      }
      {page === PagesEnum.ORDER && 
        <OrderPage></OrderPage>
      }
      {page === PagesEnum.DRIVER &&
        <DriverPage></DriverPage>
      }
      {page === PagesEnum.ANALYTIC &&
        <AnalyticPage></AnalyticPage>
      }
      <Footer></Footer>
    </>
  );
}

export default App;
