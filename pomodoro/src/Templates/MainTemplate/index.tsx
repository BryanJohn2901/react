import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Logo from "../../components/Logo";
import Menu from "../../components/Menu";

type MainTemplateprops = {
    children: React.ReactNode
}

export default function MainTemplate({ children }: MainTemplateprops) {
    return (
        <>
            <Container>
                <Logo />
            </Container>

            <Container>
                <Menu />
            </Container>

            {children}

            <Container>
                <Footer />
            </Container>
        </>
    )
}
