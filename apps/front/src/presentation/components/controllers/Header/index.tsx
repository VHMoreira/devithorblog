import { HeaderUI } from "@/presentation/components/ui"
import { useRouter } from "next/router"
import { useCallback, useMemo, useState } from "react"

type Pages = 'home' | 'articles' | 'videos'

const HeaderController: React.FC = () => {
    const { route } = useRouter()
    const [openMenuMobile, setOpenMenuMobile] = useState(false)

    const getSelectedNavItem = useMemo((): Pages => {
        if (route === '/articles') {
            return 'articles'
        }

        if (route === '/videos') {
            return 'videos'
        }

        return 'home'
    }, [route])

    const handleCloseMobileMenu = useCallback(() => {
        setOpenMenuMobile(false)
    }, [])

    const handleOpenMobileMenu = useCallback(() => {
        setOpenMenuMobile(true)
    }, [])

    return <HeaderUI
        page={getSelectedNavItem}
        isOpen={openMenuMobile}
        onClose={handleCloseMobileMenu}
        onOpen={handleOpenMobileMenu}
    />
}

export default HeaderController