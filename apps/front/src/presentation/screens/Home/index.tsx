import { SideNavigator, Typography } from "@/presentation/components"
import {
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
                        <Typography type="title">
                            Hi, my name is <Typography type="highlighter">Vitor!</Typography>
                        </Typography>
                        <Typography type="subtitle">
                            A <Typography type="highlighter">Front-End Developer</Typography> who can make your <Typography type="highlighter">ideas</Typography> come true <Typography type="highlighter">:)</Typography>
                        </Typography>
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
                <Welcome id="about">
                    <WelcomeImageArea>
                        {/* <WelcomeImage src='https://media-exp1.licdn.com/dms/image/C4D03AQEBhZyNaE3mcg/profile-displayphoto-shrink_400_400/0/1638037520539?e=1659571200&v=beta&t=xfwEsAtkWi4yy_a4820Oevll6Saizw1FV7Nk62as_Lc' alt="profile image" /> */}
                    </WelcomeImageArea>
                    <WelcomeIntroArea>
                        <TextWrapper>
                            <Typography type="title">
                                Hi, my name is <Typography type="highlighter">Vitor!</Typography>
                            </Typography>
                            <Typography type="subtitle">
                                A <Typography type="highlighter">Front-End Developer</Typography> who can make your <Typography type="highlighter">ideas</Typography> come true <Typography type="highlighter">:)</Typography>
                            </Typography>
                        </TextWrapper>
                    </WelcomeIntroArea>
                </Welcome>
                <div id="projects"></div>
                <div id="contacts"></div>
            </SideNavigator>
        </Root>
    )
}

export default Home