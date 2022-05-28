import { FooterUI } from "@/presentation/components/ui"
import { useMemo } from "react"

const FooterController: React.FC = () => {
    const year = useMemo(() => {
        const date = new Date()
        return date.getFullYear()
    }, [])

    return <FooterUI year={year} />
}

export default FooterController