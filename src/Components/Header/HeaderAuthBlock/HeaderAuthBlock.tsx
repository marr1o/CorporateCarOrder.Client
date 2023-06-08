import { useAppDispatch, useAppSelector } from "../../../customHooks";
import { AuthActionTypes, AuthTypes, PageActionTypes, PagesEnum } from "../../../enums/Enums";
import "./HeaderAuthBlock.css";

const HeaderAuthBlock: React.FC = () => {
    const dispatch = useAppDispatch();
    const page = useAppSelector(state => state.page.page);
    const authType = useAppSelector(state => state.auth.authType);

    function setPage(page: PagesEnum) {
        dispatch({ type: PageActionTypes.SET_PAGE, payload: page });
    }

    function setAuthType(newAuthType: AuthTypes) {
        dispatch({ type: AuthActionTypes.SET_AUTH, payload: newAuthType })
    }

    return (
        <div className="auth_buttons">            
            {page !== PagesEnum.AUTH && authType === AuthTypes.NONE &&
                <button className="basic_button" onClick={() => setPage(PagesEnum.AUTH)}>Вход</button>
            }
            {page !== PagesEnum.REG && authType === AuthTypes.NONE &&
                <button className="button_reg" onClick={() => setPage(PagesEnum.REG)}>Регистрация</button>
            }
            {authType !== AuthTypes.NONE &&
                <>
                    <input type="checkbox" id="profile_checkbox"/>
                    <div className="profile_button_wrapper">
                        <label htmlFor="profile_checkbox" className="profile_button">
                            <div></div>    
                        </label>
                        <p>+375445555555</p>                
                    </div>
                    <div className="profile_nav">
                        <nav>
                            <label htmlFor="profile_checkbox" onClick={() => {
                                setPage(PagesEnum.ACCOUNT);
                            }}>Ваш профиль</label>
                            
                            <label htmlFor="profile_checkbox" onClick={() => {
                                setAuthType(AuthTypes.NONE);
                                setPage(PagesEnum.HOME);
                            }}>Выйти</label>
                        </nav>
                    </div>           
                </>
            }
        </div>          
    );
}

export default HeaderAuthBlock;