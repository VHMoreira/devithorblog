import { LogoWhite, MenuIcon } from "@/presentation/components/ui/Icons"
import Link from "next/link"
import { Header, IconButton, LogoArea, Navbar, NavbarArea, NavItem } from "./styles"

type Props = {
    page: 'home' | 'articles' | 'videos'
}

const HeaderUI: React.FC<Props> = ({ page }) => {
    return (
        <Header>
            <LogoArea>
                <LogoWhite width="100%" height="100%" />
            </LogoArea>
            <NavbarArea>
                <Navbar>
                    <Link href='/'>
                        <NavItem selected={page === 'home'}>
                            Home
                        </NavItem>
                    </Link>
                    <Link href='/articles'>
                        <NavItem selected={page === 'articles'}>
                            Articles
                        </NavItem>
                    </Link>
                    <Link href='/videos'>
                        <NavItem selected={page === 'videos'}>
                            Videos
                        </NavItem>
                    </Link>
                </Navbar>
                <IconButton>
                    <MenuIcon />
                </IconButton>
            </NavbarArea>
        </Header>
    )
}

export default HeaderUI