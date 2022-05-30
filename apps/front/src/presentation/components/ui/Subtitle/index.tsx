import { PropsWithChildren } from "react"
import { Text } from "./styles"

type Props = {}

const SubtitleUI: React.FC<PropsWithChildren<Props>> = ({ children }) => {
    return (
        <Text>
            {children}
        </Text>
    )
}

export default SubtitleUI