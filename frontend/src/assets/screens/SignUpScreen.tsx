import Navigation from "../components/Navigation";
import AuthHeader from "../components/AuthHeader";
import SignupForm from "../components/SignupForm";

const SignUpScreen = () => {
    return (
        <div>
            <Navigation />
            <AuthHeader action="Zarejestruj się" />
            <SignupForm />
        </div>
    );
};
export default SignUpScreen;
