import { PropsWithChildren } from "react"
import { Text } from "./styles"

type Props = {}

const HighlighterUI: React.FC<PropsWithChildren<Props>> = ({ children }) => {
    return (
        <Text>
            {children}
        </Text>
    )
}

export default HighlighterUI