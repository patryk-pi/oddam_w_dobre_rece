import {
    StyledActionButtons,
    StyledLoginForm,
} from "./styles/LoginForm.styled";

const SignupForm = () => {
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
                    <div>
                        <label htmlFor="password">Powtórz hasło</label>
                        <input type="password" />
                    </div>
                </main>
                <StyledActionButtons>
                    <a href="/login">Zaloguj się</a>
                    <button type="submit">Zarejestruj się</button>
                </StyledActionButtons>
            </form>
        </StyledLoginForm>
    );
};
export default SignupForm;
