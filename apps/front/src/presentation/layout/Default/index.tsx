import { Header, Footer } from "@/presentation/components"
import { PropsWithChildren } from "react"

const Default: React.FC<PropsWithChildren<any>> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Default