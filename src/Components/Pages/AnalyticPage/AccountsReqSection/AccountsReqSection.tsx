import { Categories } from "../../../../enums/Enums";

const AccountsReqSection: React.FC = () => {
    return (
        <section id="section_requests-accounts">
            <h2>Действия с аккаунтами</h2>
            <form className="form_base" id="accounts_req_form-all">
                <h3>Получить все аккаунты</h3>
                <input type="submit" className="basic_button" value="Получить"/>
                <table>
                    <thead>
                        <th>ID</th>
                        <th>Аккаунт</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                <div className="table_grid">
                                    <div className="item">Создан:</div>
                                    <div className="item">11.11.1111</div>
                                    <div className="item">Почта:</div>
                                    <div className="item">email@email.com</div>
                                    <div className="item">Имя:</div>
                                    <div className="item">Чвк Чвк Редан</div>
                                    <div className="item">Телефон:</div>
                                    <div className="item">+375295555555</div>
                                    <div className="item">Ср. оценка:</div>
                                    <div className="item">2,3</div>
                                    <div className="item">Статус:</div>
                                    <div className="item">Создан</div>
                                    <div className="item">Обновлен:</div>
                                    <div className="item">22.22.2222</div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <form className="form_base" id="accounts_req_form-info">
                <h3>Получить информацию об аккаунте</h3>
                <div className="input_wrapper">
                    <input type="text" placeholder="ID..."/>
                </div>
                <input type="submit" className="basic_button" value="Получить"/>
                <table>
                    <thead>
                        <th>ID</th>
                        <th>Аккаунт</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                <div className="table_grid">
                                    <div className="item">Создан:</div>
                                    <div className="item">11.11.1111</div>
                                    <div className="item">Почта:</div>
                                    <div className="item">email@email.com</div>
                                    <div className="item">Имя:</div>
                                    <div className="item">Чвк Чвк Редан</div>
                                    <div className="item">Телефон:</div>
                                    <div className="item">+375295555555</div>
                                    <div className="item">Ср. оценка:</div>
                                    <div className="item">2,3</div>
                                    <div className="item">Статус:</div>
                                    <div className="item">Создан</div>
                                    <div className="item">Обновлен:</div>
                                    <div className="item">22.22.2222</div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <form className="form_base" id="accounts_req_form-delete">
                <h3>Удалить аккаунт</h3>
                <div className="input_wrapper">
                    <input type="text" placeholder="ID..."/>
                </div>
                <input type="submit" className="basic_button" value="Удалить"/>
            </form>
            <form className="form_base" id="accounts_req_form-create">
                <h3>Назначить водителя</h3>
                <div className="input_wrapper">
                    <p>Имя</p>
                    <input type="text" placeholder="Фамилия Имя Отчество..."/>
                </div>
                <div className="input_wrapper">
                    <p>Телефон</p>
                    <input type="text" placeholder="+375295555555"/>
                </div>
                <div className="input_wrapper">
                    <p>Пароль</p>
                    <input type="text" placeholder="Пароль..."/>
                </div>
                <div className="input_wrapper">
                    <p>Почта</p>
                    <input type="text" placeholder="example@gmail.com"/>
                </div>
                <div className="input_wrapper">
                    <p>Категория</p>
                    <select name="category_select" id="category_select">
                        <option value={Categories.A}>A</option>
                        <option value={Categories.B}>B</option>
                        <option value={Categories.C}>C</option>
                        <option value={Categories.D}>D</option>
                        <option value={Categories.M}>M</option>
                    </select>
                </div>
                <input type="submit" className="basic_button" value="Назначить"/>
            </form>
        </section>
    );
}

export default AccountsReqSection;