import "./OrderPage.css";
import "./../FormBase.css";
import OrderForm from "./OrderForm/OrderForm";
import { useState } from "react";

const OrderPage: React.FC = () => {
    const [showHistory, setShowHistory] = useState<boolean>(false);
    
    const leftPageClick = () => {

    }

    const rightPageClick = () => {
        
    }

    return (
        <main id="order_page">
            <section className="section_history" id="section_order_history">
                <h2>История заказов</h2>
                <hr />
                {!showHistory &&
                    <button className="basic_button" onClick={() => setShowHistory(true)}>Посмотреть</button>                    
                }
                {showHistory &&
                    <article>                    
                        {/* <div className="orders_wrapper">
                            <p>Вы пока не совершили ни одного заказа.</p>
                        </div> */}
                        <div>
                            <table>
                                <thead>
                                    <th>ID</th>
                                    <th>Из</th>
                                    <th>В</th>
                                    <th>Цена</th>
                                    <th>Автомобиль</th>
                                    <th>Тип</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Пр. Дзержинского, 4Б</td>
                                        <td>Ул. Ленина, 35</td>
                                        <td>20 BYN</td>
                                        <td>Wolkswagen Polo Sedan</td>
                                        <td>TAXI</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Пр. Победителей, 13</td>
                                        <td>Логойский тр., 14</td>
                                        <td>30 BYN</td>
                                        <td>Daewoo Nexia</td>
                                        <td>DELIVERY SMALL</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Пр. Независимости, 180</td>
                                        <td>Ул. Сталеваров, 65</td>
                                        <td>42 BYN</td>
                                        <td>Wolkswagen Polo Sedan</td>
                                        <td>TAXI</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="pagination_wrapper">
                            <button className="button-left" onClick={() => leftPageClick()}></button>
                            <button className="button-right" onClick={() => rightPageClick()}></button>
                        </div>                 
                    </article>                    
                }
            </section>
            <section id="section_order_instruction">
                <h2>Как заказать?</h2>
                <div>
                    <p>Все очень просто!</p>
                    <ul>
                        <li>Для начала, запоните форму ниже. В поле "Начальный адрес" введите точный адрес места, откуда начнется поездка.
                            В поле "Конечный адрес" добавьте точный адрес, куда необходимо ехать.
                        </li>
                        <li>При необходимости добавить дополнительную точку нажмите на кнопку "Добавить адрес" и введите точный адрес промежуточной точки.</li>
                        <li>Выберите тип поездки в выпадающем списке.</li>
                        <li>Если вы хотите, вы можете оставить сообщение водителя. Поле необязательное для заполнения.</li>
                        <li>Вы можете посчитать предварительную стоимость заказа по нажатию на кнопку "Рассчитать"</li>
                        <li>После рассчета заказа у вас появится возможность оформить заказ, оплатив его.</li>
                    </ul>
                    <p>Мы стремимся к улучшению нашего обсуживания, улучшению и упрощению сайта, чтобы все было интуитивно понятным для всех пользователей.
                        Если у вас есть прелождения или вопросы, вы можете отправить их нам с помощью формы на гравной странице.
                    </p>                    
                </div>
            </section>
            <section id="section_order_order">
                <h2>Оформление заказа</h2>
                <hr />
                <OrderForm></OrderForm>
            </section>    
        </main>
    );
}

export default OrderPage;

