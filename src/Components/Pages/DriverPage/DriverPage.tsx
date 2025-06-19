import { useState } from "react";
import "./DriverPage.css";
import OrderTableItem from "../AnalyticPage/OrdersReqSection/OrderTableItem/OrderTableItem";

const DriverPage: React.FC = () => {
    const [hasOrder, setHasOrder] = useState<boolean>(false);
    const [showHistory, setShowHistory] = useState<boolean>(false);

    const leftPageClick = () => {

    }

    const rightPageClick = () => {
        
    }

    return (
        <main id="driver_page">
            <section id="section_current_order">
                <div>
                    <h2>Текущий заказ</h2>
                    <hr />
                    <div className="form_base">
                        {hasOrder ?
                            <table>
                                <thead>
                                    <th>ID</th>
                                    <th>Заказ</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <OrderTableItem></OrderTableItem>
                                    </tr>
                                </tbody>
                            </table>
                            :
                            <div className="div_no_orders">
                                <p>Текущих заказов нет.</p>
                            </div>
                        }
                    </div>
                </div>
                <div>
                    <button disabled={!hasOrder} className="basic_button">Начать</button>                    
                    <p>Перед началом поездки нажмите кнопку "Начать".</p>
                </div>
            </section>
            <section className="section_history">
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
        </main>
    );
}

export default DriverPage;