import { useAppDispatch, useAppSelector } from "../../../customHooks";
import { AuthTypes, PageActionTypes, PagesEnum } from "../../../enums/Enums";
import "./HomePage.css";

const HomePage: React.FC = () => {
    const dispatch = useAppDispatch();
    const authType = useAppSelector(state => state.auth.authType);

    const setPage = (page: PagesEnum) => {
        dispatch({ type: PageActionTypes.SET_PAGE, payload: page });
    }

    const orderButtonClick = () => {
        authType === AuthTypes.USER ?
        setPage(PagesEnum.ORDER) :
        setPage(PagesEnum.AUTH);
    }

    return (
        <main id="home_page">
            <section id="section_welcome">
                <div className="blackout">
                    <h1>Corporate Car Order</h1>
                    <h2>Заказ любых автомобилей с любой целью в любое время и в любое место.</h2>
                    <button className="start_button" onClick={() => orderButtonClick()}>Заказать</button> 
                </div>
            </section>
            <section id="section_about">
                <div className="about_content">
                    <h2>О нас</h2>
                    <hr />
                    <p>У вас стоит задача отвезти большую группу людей на мероприятие? Или, может быть, вам необходимо доставить большое количество груза в опреденное место? 
                        Или этот груз вовсе не большой, а совсем маленький? А может быть, у вас завтра свадьба, и вам нужно заказать лемузин для вашей невесты? 
                        Или вы хотели бы просто заказать такси, чтобы доехать домой? Во всем этом вам поможет наш сайт.
                    </p>
                    <p><b>Corporate Car Order</b> - может предоставить вам автомобиль на любой вкус и цвет, любого размера и в любом количестве по приятным ценам.
                        Если вам нужно заказать автомобиль, то вы пришли по адресу.
                    </p>
                </div>
                <div className="about_picture"></div>
            </section>
            <section id="section_services">
                <div className="blackout_2">
                    <h2>Наши услуги</h2>
                    <hr />
                    <ul className="services_list">
                        <li>Предоставляем грузовые автомобили для доставки груза среднего размера.</li>
                        <li>Предоставляем фуры для доставки грузов больших размеров.</li>
                        <li>Доставлем небольшие грузы на легковых автомобилях</li>
                        <li>Предоставляем автомобили в качестве такси эконом-, среднего и бизнес-класса.</li>
                        <li>Имеем возможность предоставлять большое количество легковых автомобилей для транспортировки группы людей на массовые мероприятия.</li>
                        <li>Предоставляем лимузины на свадьбы.</li>
                    </ul>
                </div>
            </section>
            <section id="section_contact">
                <h2>Связаться с нами</h2>
                <hr />
                <div className="contact_content">
                    <form>
                        <input type="tel" placeholder="Номер телефона..."/>
                        <input type="text" placeholder="Имя..."/>
                        <textarea placeholder="Вопрос..."/>
                        <input className="basic_button" type="submit" value="Оставить заявку"/>
                    </form>
                    <div>
                        <p>Если у вас возникли вопросы, или вам необходима консультация, вы можете связаться с нами, заполнив и отправив форму.</p>
                        <p>Либо вы можете отправить нам электронное письмо на следующий адрес:</p>
                        <div className="contacts">
                            <div className="contacts_email">
                                <img src="assets/email_icon.png" alt="email" />
                                <a href="">corporatecarorder@gmail.com</a>
                            </div>
                        </div>
                        <p>
                            <b>
                                <i>И мы свяжемся с вами в ближайшее время.</i>
                            </b>
                        </p>                    
                    </div>
                </div>
            </section>
        </main>
    );
}

export default HomePage;