import "./AccountForm.css";
import "./../../FormBase.css";

const AccountForm: React.FC = () => {
    const updateUser = (e: React.FormEvent) => {
        e.preventDefault();
    }
    
    return (
        <form id="account_form" className="form_base" onSubmit={(e: React.FormEvent) => updateUser(e)}>
            <div className="inputs_wrapper">
                <div className="input_wrapper">
                    <p>Email</p>
                    <input type="text" placeholder="example@gmail.com"/>
                </div>
                <div className="input_wrapper">
                    <p>Имя</p>
                    <input type="password" placeholder="Фамилия Имя Отчество..."/>
                </div>
                <div className="passwords_wrapper">
                    <div className="input_wrapper">
                        <p>Старый пароль</p>
                        <input type="password" placeholder="Старый пароль..."/>
                    </div>
                    <div className="input_wrapper">
                        <p>Новый пароль</p>
                        <input type="password" placeholder="Новый пароль..."/>
                    </div>
                </div>             
            </div>
            <input type="submit" className="submit_button" value="Сохранить"/>
        </form>
    );
}

export default AccountForm;