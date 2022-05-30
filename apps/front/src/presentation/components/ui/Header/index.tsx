import { LogoWhite } from "@/presentation/components/ui/Icons"
import { MenuUI } from "@/presentation/components/ui"
import { Header, LogoArea, NavbarArea } from "./styles"

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
                <MenuUI isOpen={isOpen} onClose={onClose} onOpen={onOpen} page={page} />
            </NavbarArea>
        </Header>
    )
}

export default HeaderUI