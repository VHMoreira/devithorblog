import { PropsWithChildren } from "react"
import { SideNavigatorUI } from "@/presentation/components/ui"

type NavItem = {
    href: string
    label: string
}

type Props = {
    navItems: NavItem[]
}

const SideNavigatorController: React.FC<PropsWithChildren<Props>> = ({ navItems, children }) => {

    return (
        <SideNavigatorUI navItems={navItems}>
            {children}
        </SideNavigatorUI>
    )
}

export default SideNavigatorController