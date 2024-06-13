import { StyledLoginForm } from "./styles/LoginForm.styled";

const SignupForm = () => {
    return (
        <StyledLoginForm>
            <form>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="password">Hasło</label>
                    <input type="password" />
                </div>
                <div>
                    <label htmlFor="password">Powtórz hasło</label>
                    <input type="password" />
                </div>
            </form>
        </StyledLoginForm>
    );
};
export default SignupForm;
