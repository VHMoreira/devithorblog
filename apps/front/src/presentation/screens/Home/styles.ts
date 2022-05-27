import styled from 'styled-components'

export const Root = styled.main`
    width: 100%;
    height: 200vh;
`

enum WelcomeAreas {
    INTRO = "intro",
    IMAGE = "image"
}

export const Welcome = styled.section`
    width: 100%;
    height: 85vh;

    background-color: var(--principal-color);
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas: 
        '${WelcomeAreas.IMAGE} ${WelcomeAreas.IMAGE} ${WelcomeAreas.IMAGE} ${WelcomeAreas.INTRO} ${WelcomeAreas.INTRO}';
`

export const WelcomeImageArea = styled.article`
    grid-area: ${WelcomeAreas.IMAGE};
    width: 100%;
    height: 100%;
`

export const WelcomeImage = styled.img`
    width: 100%;
    height: 100%;
`

export const WelcomeIntroArea = styled.aside`
    grid-area: ${WelcomeAreas.INTRO};
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`