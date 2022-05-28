import { LogoWhite } from "@/presentation/components/ui/Icons"
import Link from "next/link"
import { Header, LogoArea, Navbar, NavbarArea, NavItem } from "./styles"

type Props = {
    page: 'home' | 'articles' | 'videos'
    isMobile?: boolean
}

const HeaderUI: React.FC<Props> = ({ page, isMobile }) => {
    return (
        <Header>
            <LogoArea>
                <LogoWhite width="100%" height="100%" />
            </LogoArea>
            <NavbarArea>
                {!isMobile ? <Navbar>
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
                </Navbar> : "MenuMobile"}
            </NavbarArea>
        </Header>
    )
}

export default HeaderUI