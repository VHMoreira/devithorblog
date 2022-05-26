import { Header } from "@/presentation/components"
import { PropsWithChildren } from "react"

const Default: React.FC<PropsWithChildren<any>> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default Default