import { SideNavigator } from "@/presentation/components"
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
            <SideNavigator
                navItems={[
                    {
                        href: '/#about',
                        label: 'About'
                    },
                    {
                        href: '/#projects',
                        label: 'Projects'
                    },
                    {
                        href: '/#contacts',
                        label: 'Contacts'
                    }
                ]}
            >
                <div id="projects"></div>
                <div id="about"></div>
                <div id="contacts"></div>
            </SideNavigator>
        </Root>
    )
}

export default Home