import { GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "@/presentation/components/ui/Icons"
import { Copyright, CopyrightArea, Footer, SocialLink, SocialNavbar, SocialNavigationArea } from "./styles"

type Props = {
    year: string | number
}

const FooterUI: React.FC<Props> = ({ year }) => {
    return (
        <Footer>
            <CopyrightArea>
                <Copyright>© {year} Vitor Henrique</Copyright>
            </CopyrightArea>
            <SocialNavigationArea>
                <SocialNavbar>
                    <SocialLink>
                        <TwitterIcon />
                    </SocialLink>
                    <SocialLink>
                        <LinkedinIcon />
                    </SocialLink>
                    <SocialLink>
                        <InstagramIcon />
                    </SocialLink>
                    <SocialLink>
                        <GithubIcon />
                    </SocialLink>
                </SocialNavbar>
            </SocialNavigationArea>
        </Footer>
    )
}

export default FooterUI