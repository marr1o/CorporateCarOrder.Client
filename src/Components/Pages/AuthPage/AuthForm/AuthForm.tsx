import "./AuthForm.css";
import "./../../FormBase.css";
import { AuthActionTypes, AuthTypes, PageActionTypes, PagesEnum } from "../../../../enums/Enums";
import { useAppDispatch } from "../../../../customHooks";
import { useState } from "react";

const AuthForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const [supposedAuthType, setSupposedAuthType] = useState<AuthTypes>(AuthTypes.USER);

    const authorizeUser = (e: React.FormEvent) => {
        e.preventDefault();

        dispatch({ type: AuthActionTypes.SET_AUTH, payload: supposedAuthType });
        
        switch (supposedAuthType) {
            case AuthTypes.DRIVER:
                dispatch({ type: PageActionTypes.SET_PAGE, payload: PagesEnum.DRIVER });
                break;
            case AuthTypes.ANALYTIC:
                dispatch({ type: PageActionTypes.SET_PAGE, payload: PagesEnum.ANALYTIC });
                break;
            default: 
                dispatch({ type: PageActionTypes.SET_PAGE, payload: PagesEnum.HOME });
                break;
        }
    }
    
    return (
        <form id="auth_form" className="form_base" onSubmit={(e: React.FormEvent) => authorizeUser(e)}>
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
                <div className="auth_type_wrapper">
                    <div className="radio_wrapper">
                        <input onChange={() => setSupposedAuthType(AuthTypes.USER)} 
                            type="radio" id="radio-user" name="auth_type_radios" defaultChecked/>
                        <label htmlFor="radio-user">Я заказчик</label>
                    </div>
                    <div className="radio_wrapper">
                        <input onChange={() => setSupposedAuthType(AuthTypes.DRIVER)} 
                            type="radio" id="radio-driver" name="auth_type_radios"/>
                        <label htmlFor="radio-driver">Я водитель</label>
                    </div>
                    <div className="radio_wrapper">
                        <input onChange={() => setSupposedAuthType(AuthTypes.ANALYTIC)} 
                            type="radio" id="radio-analytic" name="auth_type_radios"/>
                        <label htmlFor="radio-analytic">Я администратор</label>
                    </div>
                </div>          
            </div>
            <input type="submit" className="submit_button" value="Войти"/>
        </form>
    );
}

export default AuthForm;