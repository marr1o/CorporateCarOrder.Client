import "./RegForm.css";
import "./../../FormBase.css";

const RegForm: React.FC = () => {
    return (
        <form id="reg_form" className="form_base">
            <h2>Регистрация</h2>
            <div className="inputs_wrapper">
                <div className="input_wrapper">
                    <p>Email</p>
                    <input type="text" placeholder="example@gmail.com"/>
                </div>
                <div className="input_wrapper">
                    <p>Телефон</p>
                    <input type="text" placeholder="+375295555555"/>
                </div>
                <div className="input_wrapper">
                    <p>Имя</p>
                    <input type="text" placeholder="Фамилия Имя Отчество..."/>
                </div>
                <div className="input_wrapper">
                    <p>Пароль</p>
                    <input type="password" placeholder="Пароль..."/>
                </div>           
            </div>
            <input type="submit" className="submit_button" value="Зарегистрироваться"/>
        </form>
    );
}

export default RegForm;