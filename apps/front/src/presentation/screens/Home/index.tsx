import {
    AccentText,
    IntroSubtitle,
    IntroTitle,
    Root,
    TextWrapper,
    Welcome,
    WelcomeImage,
    WelcomeImageArea,
    WelcomeIntroArea
} from "./styles"

const Home: React.FC = () => {
    return (
        <Root>
            <Welcome>
                <WelcomeImageArea>
                    <WelcomeImage src='static/images/developer.svg' alt="developer image" />
                </WelcomeImageArea>
                <WelcomeIntroArea>
                    <TextWrapper>
                        <IntroTitle>
                            Hi, my name is <AccentText>Vitor!</AccentText>
                        </IntroTitle>
                        <IntroSubtitle>
                            A <AccentText>Front-End Developer</AccentText> who can make your <AccentText>ideas</AccentText> come true <AccentText>:)</AccentText>
                        </IntroSubtitle>
                    </TextWrapper>
                </WelcomeIntroArea>
            </Welcome>
        </Root>
    )
}

export default Home