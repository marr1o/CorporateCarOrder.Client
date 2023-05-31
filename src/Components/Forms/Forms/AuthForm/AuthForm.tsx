import "./AuthForm.css";
import "./../../FormBase.css";

const AuthForm: React.FC = () => {
    return (
        <form id="auth_form" className="form_base">
            <h2>Добро пожаловать!</h2>
            <div className="inputs_wrapper">
                <div className="input_wrapper">
                    <p>Телефон</p>
                    <input type="text" placeholder="+375295555555"/>
                </div>
                <div className="input_wrapper">
                    <p>Пароль</p>
                    <input type="password" placeholder="Пароль..."/>
                </div>                   
            </div>
            <input type="submit" className="submit_button" value="Войти"/>
        </form>
    );
}

export default AuthForm;