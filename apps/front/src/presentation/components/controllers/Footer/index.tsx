import { FooterUI } from "@/presentation/components/ui"
import { useMemo } from "react"

const HeaderController: React.FC = () => {
    const year = useMemo(() => {
        const date = new Date()
        return date.getFullYear()
    }, [])

    return <FooterUI year={year} />
}

export default HeaderController