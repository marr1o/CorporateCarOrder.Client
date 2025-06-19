import "./AccountInfoForm.css";
import "./../../FormBase.css";

const AccountInfoForm: React.FC = () => {
    const updateUser = (e: React.FormEvent) => {
        e.preventDefault();
    }
    
    return (
        <form id="account_info_form" className="form_base" onSubmit={(e: React.FormEvent) => updateUser(e)}>
            <div className="acc_info_wrapper">
                <div className="input_wrapper">
                    <p>Получить информацию об аккаунте</p>                    
                </div>
                <input type="submit" className="submit_button" value="Получить"/>             
            </div>
        </form>
    );
}

export default AccountInfoForm;