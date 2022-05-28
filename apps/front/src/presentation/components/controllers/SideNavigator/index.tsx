import { PropsWithChildren, useMemo } from "react"
import { SideNavigatorUI } from "@/presentation/components/ui"
import { useViewportWidth } from "@/presentation/hooks"

type NavItem = {
    href: string
    label: string
}

type Props = {
    navItems: NavItem[]
}

const SideNavigatorController: React.FC<PropsWithChildren<Props>> = ({ navItems, children }) => {
    const width = useViewportWidth()

    const isMobile = useMemo(() => width < 800, [width])

    return (
        <SideNavigatorUI navItems={navItems} isMobile={isMobile}>
            {children}
        </SideNavigatorUI>
    )
}

export default SideNavigatorController