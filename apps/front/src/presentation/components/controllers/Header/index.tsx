import { HeaderUI } from "@/presentation/components/ui"
import { useRouter } from "next/router"
import { useMemo } from "react"

type Pages = 'home' | 'about' | 'articles' | 'videos'

const HeaderController: React.FC = () => {
    const { route } = useRouter()

    const getSelectedNavItem = useMemo((): Pages => {
        if (route === '/about') {
            return 'about'
        }

        if (route === '/articles') {
            return 'articles'
        }

        if (route === '/videos') {
            return 'videos'
        }

        return 'home'
    }, [route])

    return <HeaderUI page={getSelectedNavItem} />
}

export default HeaderController