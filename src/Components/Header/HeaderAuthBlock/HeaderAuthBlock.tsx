import { useAppDispatch, useAppSelector } from "../../../customHooks";
import { PageActionTypes, PagesEnum } from "../../../enums/Enums";
import "./HeaderAuthBlock.css";

const HeaderAuthBlock: React.FC = () => {
    const dispatch = useAppDispatch();
    const page = useAppSelector(state => state.page.page);

    function setPage(page: PagesEnum) {
        dispatch({ type: PageActionTypes.SET_PAGE, payload: page });
    }

    return (
        <div className="auth_buttons">            
            {page !== PagesEnum.AUTH &&
                <button className="button_auth" onClick={() => setPage(PagesEnum.AUTH)}>Вход</button>
            }
            {page !== PagesEnum.HOME &&
                <button className="button_home" onClick={() => setPage(PagesEnum.HOME)}>На главную</button>                
            }
            {page !== PagesEnum.REG &&
                <button className="button_reg" onClick={() => setPage(PagesEnum.REG)}>Регистрация</button>
            }
        </div>          
    );
}

export default HeaderAuthBlock;