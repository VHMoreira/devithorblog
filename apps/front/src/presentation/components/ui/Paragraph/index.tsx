import { PropsWithChildren } from "react"
import { Text } from "./styles"

type Props = {}

const ParagraphUI: React.FC<PropsWithChildren<Props>> = ({ children }) => {
    return (
        <Text>
            {children}
        </Text>
    )
}

export default ParagraphUI