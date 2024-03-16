interface NavigationLink {
    sectionName: string;
    link: string;
}

const navigationLinks: NavigationLink[] = [
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
        <div>
            <ul>
                <li>
                    <button>Zaloguj</button>
                </li>

                <li>
                    <button>Załóż konto</button>
                </li>
            </ul>
            <ul>
                {navigationLinks.map((el, i) => (
                    <li key={i}>
                        <a href={el.link}>{el.sectionName}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Navigation;
