import Navigation from "../components/Navigation";
import AuthHeader from "../components/AuthHeader";
import LoginForm from "../components/LoginForm";

const LoginScreen = () => {
    return (
        <div>
            <Navigation />
            <AuthHeader action="Zaloguj się" />
            <LoginForm />
        </div>
    );
};
export default LoginScreen;
