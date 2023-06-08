const OrderTableItem: React.FC = () => {
    return (
        <td>
            <div className="table_grid">
                <div className="item">Создан:</div>
                <div className="item">11.11.1111</div>
                <div className="item">ID водителя:</div>
                <div className="item">1</div>
                <div className="item">Из:</div>
                <div className="item">
                    <div className="table_grid">
                        <div className="smaill_item">Адрес:</div>
                        <div className="smaill_item">Независимости, 333</div>
                        <div className="smaill_item">Опоздание:</div>
                        <div className="smaill_item">0 м</div>
                        <div className="smaill_item">Длительность:</div>
                        <div className="smaill_item">20 м</div>
                    </div>
                </div>
                <div className="item">В:</div>
                <div className="item">
                    <div className="table_grid">
                        <div className="small_item">Адрес:</div>
                        <div className="small_item">Коласа, 222</div>
                        <div className="small_item">Опоздание:</div>
                        <div className="small_item">0 м</div>
                        <div className="small_item">Длительность:</div>
                        <div className="small_item">20 м</div>
                    </div>
                </div>
                <div className="item">Статус:</div>
                <div className="item">Создан</div>
                <div className="item">Расстояние:</div>
                <div className="item">5 км</div>
                <div className="item">Продолжительность:</div>
                <div className="item">20 м</div>
                <div className="item">Сообщение:</div>
                <div className="item">-</div>
                <div className="item">Обновлен:</div>
                <div className="item">11.11.1111</div>
                <div className="item">Создан:</div>
                <div className="item">11.11.1111</div>
                <div className="item">Завершен:</div>
                <div className="item">11.11.1111</div>
                <div className="item">Тип:</div>
                <div className="item">TAXI</div>
            </div>
        </td>
    );
}

export default OrderTableItem;