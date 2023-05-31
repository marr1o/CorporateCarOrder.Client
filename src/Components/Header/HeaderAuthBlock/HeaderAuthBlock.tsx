import { useAppDispatch, useAppSelector } from "../../../customHooks";
import { PageActionTypes, PagesEnum } from "../../../enums/Enums";
import "./HeaderAuthBlock.css";

const HeaderAuthBlock: React.FC = () => {
    const dispatch = useAppDispatch();
    const page = useAppSelector(state => state.page.page);

    function SetPage(page: PagesEnum) {
        dispatch({ type: PageActionTypes.SET_PAGE, payload: page });
    }

    return (
        <div className="auth_buttons">            
            {page !== PagesEnum.AUTH &&
                <button className="button_auth" onClick={() => SetPage(PagesEnum.AUTH)}>Вход</button>
            }
            {page !== PagesEnum.HOME &&
                <button className="button_home" onClick={() => SetPage(PagesEnum.HOME)}>На главную</button>                
            }
            {page !== PagesEnum.REG &&
                <button className="button_reg" onClick={() => SetPage(PagesEnum.REG)}>Регистрация</button>
            }
        </div>          
    );
}

export default HeaderAuthBlock;