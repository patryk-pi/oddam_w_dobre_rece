import {
    StyledNavigation,
    StyledLogin,
    StyledLinks,
} from "./styles/Navigation.styled";
import theme from "./styles/Theme";

interface Link {
    sectionName: string;
    link: string;
}

const navigationLinks: Link[] = [
    {
        sectionName: "Start",
        link: "#start",
    },
    {
        sectionName: "O co chodzi?",
        link: "#hero",
    },
    {
        sectionName: "O nas",
        link: "#about",
    },
    {
        sectionName: "Fundacja i organizacje",
        link: "#fundations",
    },
    {
        sectionName: "Kontakt",
        link: "#contact",
    },
];

const Navigation = () => {
    return (
        <StyledNavigation>
            <StyledLogin theme={theme}>
                <li>
                    <a>Zaloguj</a>
                </li>

                <li>
                    <a>Załóż konto</a>
                </li>
            </StyledLogin>
            <StyledLinks>
                {navigationLinks.map((el, i) => (
                    <li key={i}>
                        <a href={el.link}>{el.sectionName}</a>
                    </li>
                ))}
            </StyledLinks>
        </StyledNavigation>
    );
};
export default Navigation;
