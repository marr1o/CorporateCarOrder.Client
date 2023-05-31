import { useAppDispatch } from "../../customHooks";
import { PageActionTypes, PagesEnum } from "../../enums/Enums";
import "./Header.css";
import HeaderAuthBlock from "./HeaderAuthBlock/HeaderAuthBlock";

type HeaderProps = { }

const Header: React.FC<HeaderProps> = () => {
    const dispatch = useAppDispatch();

    function SetPage(page: PagesEnum ) {
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
                <a onClick={() => SetPage(PagesEnum.HOME)}>
                    <img className="logo" src="/assets/logo.png" alt="logo"/>                    
                </a>
                <nav>
                    <a href="">Заказать</a>
                    <a href="">О нас</a>
                    <a href="">Услуги</a>
                    <a href="">Связаться</a>
                </nav>
                <HeaderAuthBlock></HeaderAuthBlock>
            </div>
        </header>
    );
}

export default Header;