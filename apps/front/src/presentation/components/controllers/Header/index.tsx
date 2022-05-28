import { useViewportWidth } from "@/presentation/hooks"
import { HeaderUI } from "@/presentation/components/ui"
import { useRouter } from "next/router"
import { useMemo } from "react"

type Pages = 'home' | 'articles' | 'videos'

const HeaderController: React.FC = () => {
    const { route } = useRouter()
    const width = useViewportWidth()

    const isMobile = useMemo(() => width < 800, [width])

    const getSelectedNavItem = useMemo((): Pages => {
        if (route === '/articles') {
            return 'articles'
        }

        if (route === '/videos') {
            return 'videos'
        }

        return 'home'
    }, [route])

    return <HeaderUI page={getSelectedNavItem} isMobile={isMobile} />
}

export default HeaderController