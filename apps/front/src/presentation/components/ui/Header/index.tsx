import { LogoWhite } from "@/presentation/components/ui/Icons"
import Link from "next/link"
import { MenuMobileUI } from "@/presentation/components/ui"
import { Header, LogoArea, Navbar, NavbarArea, NavItem } from "./styles"

type Props = {
    page: 'home' | 'articles' | 'videos'
    isOpen: boolean
    onClose: () => void
    onOpen: () => void
}

const HeaderUI: React.FC<Props> = ({ isOpen, page, onClose, onOpen }) => {
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
                <MenuMobileUI isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
            </NavbarArea>
        </Header>
    )
}

export default HeaderUI