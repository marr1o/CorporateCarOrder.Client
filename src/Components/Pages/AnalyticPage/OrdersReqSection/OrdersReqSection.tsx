import OrderTableItem from "./OrderTableItem/OrderTableItem";

const OrdersReqSection: React.FC = () => {
    return (
        <section id="section_requests-orders">
            <h2>Действия с заказами</h2>
            <form className="form_base" id="orders_req_form-all">
                <h3>Получить историю заказов</h3>
                <input type="submit" className="basic_button" value="Получить"/>
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
            </form>
        </section>
    );
}

export default OrdersReqSection;