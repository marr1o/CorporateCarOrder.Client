import RegForm from "../../Forms/Forms/RegForm/RegForm";
import "./RegPage.css";

type RegPageProps = { }

const RegPage: React.FC<RegPageProps> = () => {
    return (
        <main id="reg_page">
            <section id="reg_form_section">
                <RegForm></RegForm>
            </section>            
        </main>
    );
}

export default RegPage;