import TextBuilder from "@/presentation/components/ui/TextBuilder"
import {
    Root,
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
                    <TextBuilder
                        globalStyle={{
                            fontSize: '60px'
                        }}
                        builders={[
                            [
                                "Hi, i'am"
                            ],
                            [
                                " Vitor",
                                {
                                    color: '--secondary-light-color'
                                }
                            ]
                        ]}
                    />
                </WelcomeIntroArea>
            </Welcome>
        </Root>
    )
}

export default Home