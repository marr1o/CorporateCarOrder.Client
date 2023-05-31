import { useAppSelector } from "../../customHooks";
import { PagesEnum } from "../../enums/Enums";
import "./Footer.css";

const Footer: React.FC = () => {
    const page = useAppSelector(state => state.page.page);
    let footerBackground = (page === PagesEnum.AUTH || page === PagesEnum.REG) ?
        "rgb(5, 2, 12)" :
        "linear-gradient(to top, rgb(15, 15, 15), rgb(25, 25, 25))";

    return (
        <footer style={{ background: footerBackground }}>
            <div className="footer_contacts">
                <h3>Контакты</h3>
                <div>
                    <img src="assets/email_icon.png" alt="email" />
                    <a href="">corporatecarorder@gmail.com</a>
                </div>
                <div>
                    <img src="assets/phone_icon.png" alt="phone" />
                    <a href="">+375 (29) 555-5555</a>
                </div>
            </div>
            <div className="footer_navigation">
                <h3>Содержание</h3>
                <nav>
                    <a href="">Зарегистрироваться</a>
                    <a href="">Заказать автомобиль</a>
                    <a href="">О нас</a>
                    <a href="">Услуги</a>
                    <a href="">Связаться с нами</a>
                    <a href="">FAQ</a>
                </nav>
            </div>
            <div>
                <a href="#section_welcome">
                    <img className="logo" src="/assets/logo_white.png" alt="logo" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;