import { SideNavigator, Typography } from "@/presentation/components"
import {
    About,
    AboutImage,
    AboutImageArea,
    AboutTextArea,
    AboutTitleArea,
    Root,
    SectionTitle,
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
                    <Typography type="title">
                        Hi, my name is <Typography type="highlighter">Vitor!</Typography>
                    </Typography>
                    <Typography type="subtitle">
                        A <Typography type="highlighter">Front-End Developer</Typography> who can make your <Typography type="highlighter">ideas</Typography> come true <Typography type="highlighter">:)</Typography>
                    </Typography>
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
                <About id="about">
                    <AboutTitleArea>
                        <SectionTitle>About</SectionTitle>
                    </AboutTitleArea>
                    <AboutImageArea>
                        <AboutImage src='https://media-exp1.licdn.com/dms/image/C4D03AQEBhZyNaE3mcg/profile-displayphoto-shrink_400_400/0/1638037520539?e=1659571200&v=beta&t=xfwEsAtkWi4yy_a4820Oevll6Saizw1FV7Nk62as_Lc' alt="profile image" />
                    </AboutImageArea>
                    <AboutTextArea>
                        <Typography>
                            <Typography type="highlighter">Graduated in Computer Science</Typography> on CESUPA, i am a Software Developer which is in field since 2018.
                        </Typography>
                        <Typography>
                            I have experience with a large variety of technologies, which i would like to highlight <Typography type="highlighter">ReactJS and React Native for Front-End and Mobile</Typography>,
                            also Java using Spring Boot and Node.js for Back-End.
                        </Typography>
                        <Typography>
                            Nowadays i am a <Typography type="highlighter">Front-End Developer at Americanas S.A.</Typography> and i am focused in develop my <Typography type="highlighter">Software Enginnering knowledge,
                                Systems Architecture, TDD, UX/UI Design and Front-End Systems optimization</Typography>.
                        </Typography>
                        <Typography>
                            My main goal now is to help my team every day, but in future i intend to be an good example as teammate and person and this why i study even more day after day.
                        </Typography>
                    </AboutTextArea>
                </About>
                <div id="projects"></div>
                <div id="contacts"></div>
            </SideNavigator>
        </Root>
    )
}

export default Home