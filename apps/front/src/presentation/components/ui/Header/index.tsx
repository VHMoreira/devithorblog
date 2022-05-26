import { LogoWhite } from "@/presentation/components/ui/Icons"
import { Header, LogoArea, Navbar, NavbarArea, NavItem } from "./styles"

const HeaderUI: React.FC = () => {
    return (
        <Header>
            <LogoArea>
                <LogoWhite width="100%" height="100%" />
            </LogoArea>
            <NavbarArea>
                <Navbar>
                    <NavItem href='/'>Home</NavItem>
                    <NavItem href='/about'>About</NavItem>
                    <NavItem href='/articles'>Articles</NavItem>
                    <NavItem href='/videos'>Videos</NavItem>
                </Navbar>
            </NavbarArea>
        </Header>
    )
}

export default HeaderUI