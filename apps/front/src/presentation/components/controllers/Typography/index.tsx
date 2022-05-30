import { PropsWithChildren } from "react"
import { HighlighterUI, ParagraphUI, SubtitleUI, TitleUI } from "@/presentation/components/ui"

type Props = {
    type?: 'paragraph' | 'title' | 'subtitle' | 'highlighter'
}

const TypographyController: React.FC<PropsWithChildren<Props>> = ({ type, children }) => {

    if (type === 'highlighter') {
        return (
            <HighlighterUI>
                {children}
            </HighlighterUI>
        )
    }

    if (type === 'subtitle') {
        return (
            <SubtitleUI>
                {children}
            </SubtitleUI>
        )
    }

    if (type === 'title') {
        return (
            <TitleUI>
                {children}
            </TitleUI>
        )
    }

    return (
        <ParagraphUI>
            {children}
        </ParagraphUI>
    )
}

export default TypographyController