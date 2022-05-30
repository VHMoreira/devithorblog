import Link from "next/link"
import { createPortal } from "react-dom"
import { CloseIcon, MenuIcon } from "../Icons"
import { Menu, IconButton, MenuHeader, MenuItem } from "./styles"

type Props = {
    isOpen: boolean
    onClose: () => void
    onOpen: () => void
}

const ModalUI: React.FC<Props> = ({ isOpen, onClose, onOpen }) => {
    return (
        <>
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