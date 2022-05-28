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
    display: flex;
    align-items: center;
    justify-content: center;
`

export const WelcomeImage = styled.img`
    width: 100%;
    max-width: 900px;
    max-height: 100%;
`

export const WelcomeIntroArea = styled.aside`
    grid-area: ${WelcomeAreas.INTRO};
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const TextWrapper = styled.article`
    padding: 10px;
    max-width: 600px;
    min-width: 300px;
`

export const IntroTitle = styled.h1`
    font-size: 60px;
    white-space: pre-wrap;
    color: var(--light-color);
`

export const IntroSubtitle = styled.h4`
    margin-top: 10px;
    font-size: 30px;
    white-space: pre-wrap;
    color: var(--light-color);
`

export const AccentText = styled.span`
    color: var(--secondary-color);
`