import Link from "next/link"
import { createPortal } from "react-dom"
import { CloseIcon, MenuIcon } from "../Icons"
import { Menu, IconButton, MenuHeader, MenuItem, Navbar, NavItem } from "./styles"

type Props = {
    page: 'home' | 'articles' | 'videos'
    isOpen: boolean
    onClose: () => void
    onOpen: () => void
}

const ModalUI: React.FC<Props> = ({ isOpen, onClose, onOpen, page }) => {
    return (
        <>
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
            <IconButton onClick={onOpen}>
                <MenuIcon />
            </IconButton>
            {
                isOpen ? (
                    createPortal(
                        <Menu>
                            <MenuHeader>
                                <IconButton iconSize="20px" onClick={onClose}>
                                    <CloseIcon />
                                </IconButton>
                            </MenuHeader>
                            <MenuItem>
                                <Link href="/">
                                    Home
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link href="/articles">
                                    Articles
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link href="/videos">
                                    Videos
                                </Link>
                            </MenuItem>
                        </Menu>
                        , document.getElementById("__next") ?? document.body
                    )
                ) : null
            }
        </>
    )
}

export default ModalUI