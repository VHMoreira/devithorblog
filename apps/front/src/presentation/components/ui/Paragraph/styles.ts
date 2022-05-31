import styled from 'styled-components'

export const Text = styled.p`
    font-size: 1.35rem;
    line-height: 1.75rem;
    word-spacing: 0.25rem;
    white-space: pre-wrap;
    color: var(--light-color);

    &+&{
        margin-top: 10px;
    }
`