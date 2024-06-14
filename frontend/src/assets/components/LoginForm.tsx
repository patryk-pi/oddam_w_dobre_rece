import {
    StyledActionButtons,
    StyledLoginForm,
} from "./styles/LoginForm.styled";

const LoginForm = () => {
    return (
        <StyledLoginForm>
            <form>
                <main>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="password">Hasło</label>
                        <input type="password" />
                    </div>
                </main>
                <StyledActionButtons>
                    <a href="/signup">Zarejestruj się</a>
                    <button type="submit">Zaloguj się</button>
                </StyledActionButtons>
            </form>
        </StyledLoginForm>
    );
};
export default LoginForm;
