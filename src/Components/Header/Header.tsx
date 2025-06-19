import { useAppDispatch, useAppSelector } from "../../customHooks";
import { AuthTypes, PageActionTypes, PagesEnum } from "../../enums/Enums";
import "./Header.css";
import HeaderAuthBlock from "./HeaderAuthBlock/HeaderAuthBlock";

type HeaderProps = { }

const Header: React.FC<HeaderProps> = () => {
    const page = useAppSelector(state => state.page.page);
    const authType = useAppSelector(state => state.auth.authType);
    const dispatch = useAppDispatch();

    function setPage(page: PagesEnum ) {
        dispatch({ type: PageActionTypes.SET_PAGE, payload: page });
    }

    return (
        <header>
            <div className="contacts_wrapper">
                <div className="contacts">
                    <div>
                        <img src="assets/email_icon.png" alt="email" />
                        <a href="">corporatecarorder@gmail.com</a>
                    </div>
                    <div>
                        <img src="assets/phone_icon.png" alt="phone" />
                        <a href="">+375 (29) 555-5555</a>
                    </div>
                </div>
                <h3>Мы всегда на связи!</h3>
            </div>
            <div className="main_header_info">
                <a onClick={() => setPage(PagesEnum.HOME)}>
                    <img className="logo" src="/assets/logo.png" alt="logo"/>                    
                </a>
                <nav>
                    {page !== PagesEnum.HOME &&
                        <a className="a_to_home" onClick={(e: React.MouseEvent) => {
                                e.preventDefault();
                                setPage(PagesEnum.HOME);
                            }
                        }>На главную</a>     
                    }
                    {page !== PagesEnum.ANALYTIC && authType === AuthTypes.ANALYTIC &&
                        <a className="a_to_home" onClick={(e: React.MouseEvent) => {
                                e.preventDefault();
                                setPage(PagesEnum.ANALYTIC);
                            }
                        }>Управлять</a>     
                    }
                    {page === PagesEnum.HOME &&
                        <>
                            <a href="#section_welcome">Заказать</a>
                            <a href="#section_about">О нас</a>
                            <a href="#section_services">Услуги</a>
                            <a href="#section_contact">Связаться</a>
                        </>
                    }
                    {page === PagesEnum.ORDER &&
                        <>
                            <a href="#section_order_history">История</a>
                            <a href="#section_order_instruction">Инструкция</a>
                            <a href="#section_order_order">Заказать</a>
                        </>
                    }
                    {page === PagesEnum.ANALYTIC &&
                        <>
                            <a href="#section_requests-accounts">Аккаунты</a>
                            <a href="#section_requests-cars">Машины</a>
                            <a href="#section_requests-orders">Заказы</a>
                            <a href="#section_requests-payments">Платежи</a>
                        </>
                    }
                </nav>
                <HeaderAuthBlock></HeaderAuthBlock>
            </div>
        </header>
    );
}

export default Header;