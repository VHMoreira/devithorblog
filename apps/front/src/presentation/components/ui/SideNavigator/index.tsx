import Link from "next/link"
import { PropsWithChildren } from "react"
import {
    ContentArea,
    NavigatorArea,
    NavItem,
    SideNavbar,
    Wrapper
} from "./styles"

type NavItem = {
    href: string
    label: string
}

type Props = {
    navItems: NavItem[]
    isMobile?: boolean
}

const SideNavigatorUI: React.FC<PropsWithChildren<Props>> = ({ children, navItems, isMobile }) => {
    return (
        <Wrapper>
            <ContentArea>
                {children}
            </ContentArea>
            {!isMobile ? (
                <NavigatorArea>
                    <SideNavbar>
                        {navItems.map(({ href, label }) => (
                            <Link key={href} href={href}>
                                <NavItem>{label}</NavItem>
                            </Link>
                        ))}
                    </SideNavbar>
                </NavigatorArea>
            ) : null}
        </Wrapper>
    )
}

export default SideNavigatorUI