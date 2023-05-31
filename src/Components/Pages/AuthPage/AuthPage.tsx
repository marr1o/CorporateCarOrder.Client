import AuthForm from "../../Forms/Forms/AuthForm/AuthForm";
import "./AuthPage.css";

type AuthPageProps = { }

const AuthPage: React.FC<AuthPageProps> = () => {
    return (
        <main id="auth_page">
            <section id="auth_form_section">
                <AuthForm></AuthForm>
            </section>            
        </main>
    );
}

export default AuthPage;