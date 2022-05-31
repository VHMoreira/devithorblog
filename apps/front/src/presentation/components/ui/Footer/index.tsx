import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/presentation/components/ui/Icons"
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
                    <SocialLink target="_blank" href="https://twitter.com/vhmoreir">
                        <TwitterIcon />
                    </SocialLink>
                    <SocialLink target="_blank" href="https://www.linkedin.com/in/vhmoreiras">
                        <LinkedinIcon />
                    </SocialLink>
                    <SocialLink target="_blank" href="https://github.com/VHMoreira">
                        <GithubIcon />
                    </SocialLink>
                </SocialNavbar>
            </SocialNavigationArea>
        </Footer>
    )
}

export default FooterUI