import styled from 'styled-components'

export const Root = styled.main`
    width: 100%;
`

enum WelcomeAreas {
    INTRO = "intro",
    IMAGE = "image"
}

export const Welcome = styled.section`
    width: 100%;
    padding: 20px;

    background-color: var(--principal-color);
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas: 
        '${WelcomeAreas.IMAGE} ${WelcomeAreas.IMAGE} ${WelcomeAreas.IMAGE} ${WelcomeAreas.INTRO} ${WelcomeAreas.INTRO}';

    @media screen and (max-width: 800px){
        grid-template-columns: auto;
        grid-template-areas: 
        '${WelcomeAreas.IMAGE}' 
        '${WelcomeAreas.INTRO}';
    }
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
    display: flex;
    flex-direction: column;
    justify-content: center;
`

enum AboutAreas {
    TITLE = "title",
    TEXT = "text",
    EMPTY = "empty",
    IMAGE = "image"
}

export const About = styled.section`
    width: 100%;
    padding: 20px;

    background-color: var(--principal-color);
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas: 
        '${AboutAreas.TITLE} ${AboutAreas.EMPTY} ${AboutAreas.EMPTY} ${AboutAreas.EMPTY} ${AboutAreas.EMPTY}'
        '${AboutAreas.IMAGE} ${AboutAreas.TEXT} ${AboutAreas.TEXT} ${AboutAreas.TEXT} ${AboutAreas.TEXT}';

    @media screen and (max-width: 800px){
        grid-template-columns: auto;
        grid-template-areas: 
        '${AboutAreas.TITLE}'
        '${AboutAreas.IMAGE}' 
        '${AboutAreas.TEXT}';
    }
`

export const AboutTitleArea = styled.article`
    grid-area: ${AboutAreas.TITLE};
    width: 100%;
    display: flex;
    align-items: center;
`

export const SectionTitle = styled.h2`
    font-size: 2rem;
    padding: 20px 0;
    white-space: pre-wrap;
    color: var(--light-color);
`

export const AboutImageArea = styled.article`
    grid-area: ${AboutAreas.IMAGE};
    width: 100%;
`

export const AboutImage = styled.img`
    min-width: 200px;
    max-width: 100%;
    border-radius: 10px;

    @media screen and (max-width: 800px){
        width: 100%;
    }
`

export const AboutTextArea = styled.aside`
    grid-area: ${AboutAreas.TEXT};
    width: 100%;
    height: 100%;
    padding: 0 40px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 800px){
        margin-top: 20px;
        padding: 0;
    }
`

export const TextWrapper = styled.article`
    margin: 20px 0 30px 0;
    width: 100%;
`