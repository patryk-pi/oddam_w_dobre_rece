import { StyledLoginForm } from "./styles/LoginForm.styled";

const LoginForm = () => {
    return (
        <StyledLoginForm>
            <form>
                <label htmlFor="email">Email</label>
                <input type="text" />
                <label htmlFor="password">Hasło</label>
                <input type="password" />
            </form>
        </StyledLoginForm>
    );
};
export default LoginForm;
