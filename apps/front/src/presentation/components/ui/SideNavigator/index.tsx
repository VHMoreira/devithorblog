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
}

const SideNavigatorUI: React.FC<PropsWithChildren<Props>> = ({ children, navItems }) => {
    return (
        <Wrapper>
            <ContentArea>
                {children}
            </ContentArea>
            <NavigatorArea>
                <SideNavbar>
                    {navItems.map(({ href, label }) => (
                        <Link key={href} href={href}>
                            <NavItem>{label}</NavItem>
                        </Link>
                    ))}
                </SideNavbar>
            </NavigatorArea>
        </Wrapper>
    )
}

export default SideNavigatorUI