import styled from 'styled-components'

export type CSSSizeMetrics = `${number}px` | `${number}%` | `${number}rem`

export type TextProps = {
    textAlignment?: string
    color?: string
    fontSize?: CSSSizeMetrics
    fontWeight?: string | number
}

export const Text = styled.p<TextProps>`
    text-align: ${({ textAlignment }) => textAlignment ? textAlignment : 'start'};
    color: var(${({ color }) => color ? color : '--light-color'});
    font-size: ${({ fontSize }) => fontSize ? fontSize : '10px'};
    font-weight: ${({ fontWeight }) => fontWeight ? fontWeight : 500};
    white-space: pre;
`