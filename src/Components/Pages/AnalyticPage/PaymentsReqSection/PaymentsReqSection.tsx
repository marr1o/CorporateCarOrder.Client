const PaymentsReqSection: React.FC = () => {
    return (
        <section id="section_requests-payments">
            <h2>Действия с платежами</h2>
            <form className="form_base" id="payments_req_form-all">
                <h3>Получить все платежи</h3>
                <input type="submit" className="basic_button" value="Получить"/>
                <table>
                    <thead>
                        <th>ID</th>
                        <th>Платеж</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                <div className="table_grid">
                                    <div className="item">ID плательщика:</div>
                                    <div className="item">1</div>
                                    <div className="item">Сеть:</div>
                                    <div className="item">PayPal</div>
                                    <div className="item">Статус:</div>
                                    <div className="item">Оплачено</div>
                                    <div className="item">Сумма:</div>
                                    <div className="item">50 р</div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <form className="form_base" id="payments_req_form-info">
                <h3>Получить информацию о платеже</h3>
                <div className="input_wrapper">
                    <input type="text" placeholder="ID..."/>
                </div>
                <input type="submit" className="basic_button" value="Получить"/>
                <table>
                    <thead>
                        <th>ID</th>
                        <th>Платеж</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                <div className="table_grid">
                                    <div className="item">ID плательщика:</div>
                                    <div className="item">1</div>
                                    <div className="item">Сеть:</div>
                                    <div className="item">PayPal</div>
                                    <div className="item">Статус:</div>
                                    <div className="item">Оплачено</div>
                                    <div className="item">Сумма:</div>
                                    <div className="item">50 р</div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </section>
    );
}

export default PaymentsReqSection;