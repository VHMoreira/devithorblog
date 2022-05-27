import { Text, TextProps } from "./styles"

type Builder = [string, TextProps] | [string]

type Props = {
    builders: Builder[]
    globalStyle?: TextProps
}

const TextBuilder: React.FC<Props> = ({ builders, globalStyle }) => {
    return (
        <>
            {builders.map(([text, style], index) =>
                <Text
                    key={index}
                    {...globalStyle}
                    {...style}
                >
                    {text}
                </Text>
            )}
        </>
    )
}

export default TextBuilder