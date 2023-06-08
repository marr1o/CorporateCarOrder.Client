const CarsReqSection: React.FC = () => {
    return (
        <section id="section_requests-cars">
            <h2>Действия с автомобилями</h2>
            <form className="form_base" id="cars_req_form-all">
                <h3>Получить все автомобили</h3>
                <input type="submit" className="basic_button" value="Получить"/>
                <table>
                    <thead>
                        <th>ID</th>
                        <th>Автомобиль</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                <div className="table_grid">
                                    <div className="item">Название:</div>
                                    <div className="item">Wolkswagen Polo Sedan</div>
                                    <div className="item">Номер:</div>
                                    <div className="item">1111 AA-1</div>
                                    <div className="item">Тип:</div>
                                    <div className="item">PASSENGER_COMFORT</div>
                                    <div className="item">Статус:</div>
                                    <div className="item">FREE</div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <form className="form_base" id="cars_req_form-info">
                <h3>Получить информацию о машине</h3>
                <div className="input_wrapper">
                    <input type="text" placeholder="ID..."/>
                </div>
                <input type="submit" className="basic_button" value="Получить"/>
                <table>
                    <thead>
                        <th>ID</th>
                        <th>Автомобиль</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                <div className="table_grid">
                                    <div className="item">Название:</div>
                                    <div className="item">Wolkswagen Polo Sedan</div>
                                    <div className="item">Номер:</div>
                                    <div className="item">1111 AA-1</div>
                                    <div className="item">Тип:</div>
                                    <div className="item">PASSENGER_COMFORT</div>
                                    <div className="item">Статус:</div>
                                    <div className="item">FREE</div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <form className="form_base" id="cars_req_form-create">
                <h3>Добавить машину</h3>
                <div className="input_wrapper">
                    <p>Название</p>
                    <input type="text" placeholder="Wolkswagen..."/>
                </div>
                <div className="input_wrapper">
                    <p>Номер</p>
                    <input type="text" placeholder="1111 АА-1"/>
                </div>
                <div className="input_wrapper">
                    <p>Тип</p>
                    <select name="category_select" id="category_select">
                        <option value="">Тип 1</option>
                        <option value="">Тип 1</option>
                        <option value="">Тип 1</option>
                    </select>
                </div>
                <input type="submit" className="basic_button" value="Назначить"/>
            </form>
            <form className="form_base" id="cars_req_form-update">
                <h3>Обновить данные машины</h3>
                <div className="update_wrapper">
                    <div className="input_wrapper">
                        <p>Название</p>
                        <input type="text" placeholder="Wolkswagen..."/>
                    </div>
                    <button className="basic_button">Обновить поле</button>
                </div>
                <div className="update_wrapper">
                    <div className="input_wrapper">
                        <p>Номер</p>
                        <input type="text" placeholder="1111 АА-1"/>
                    </div>
                    <button className="basic_button">Обновить поле</button>
                </div>
                <div className="update_wrapper">
                    <div className="input_wrapper">
                        <p>Тип</p>
                        <select name="category_select" id="category_select">
                            <option value="">Тип 1</option>
                            <option value="">Тип 2</option>
                            <option value="">Тип 3</option>
                        </select>
                    </div>
                    <button className="basic_button">Обновить поле</button>
                </div>
            </form>
            <form className="form_base" id="cars_req_form-delete">
                <h3>Удалить машину</h3>
                <div className="input_wrapper">
                    <input type="text" placeholder="ID..."/>
                </div>
                <input type="submit" className="basic_button" value="Удалить"/>
            </form>
        </section>
    );
}

export default CarsReqSection;