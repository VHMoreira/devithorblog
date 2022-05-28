import styled from "styled-components"

enum FooterAreas {
    COPYRIGHT = 'copyright',
    SOCIAL_LINKS = 'social_links',
    EMPTY = 'empty'
}

export const Footer = styled.footer`
    width: 100%;
    height: 170px;
    padding: 0 20px;
    background-color: var(--principal-color);
    display: grid;
    grid-template-columns: minmax(200px, 300px) repeat(5, 1fr);
    grid-template-areas: 
        '${FooterAreas.COPYRIGHT} ${FooterAreas.EMPTY} ${FooterAreas.EMPTY} ${FooterAreas.EMPTY} ${FooterAreas.SOCIAL_LINKS} ${FooterAreas.SOCIAL_LINKS}';

    @media screen and (max-width: 800px){
        grid-template-columns: auto;
        grid-template-rows: repeat(2, 1fr);
        grid-template-areas: 
                '${FooterAreas.SOCIAL_LINKS}'
                '${FooterAreas.COPYRIGHT}';
    }
`

export const CopyrightArea = styled.div`
    grid-area: ${FooterAreas.COPYRIGHT};
    display: flex;
    align-items: center;

    @media screen and (max-width: 800px){
        justify-content: center;
    }
`

export const Copyright = styled.p`
    color: var(--light-color);
    font-size: 20px;
    opacity: 0.4;
    transition: opacity 250ms ease-in-out, color 250ms ease-in-out;

    &:hover{
        opacity: 1;
        color: var(--secondary-color);
    }
`

export const SocialNavigationArea = styled.div`
    grid-area: ${FooterAreas.SOCIAL_LINKS};
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SocialNavbar = styled.nav`
    display: inline-flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;

    @media screen and (max-width: 800px){
        justify-content: center;
    }
`

export const SocialLink = styled.a`
    transition: background-color 250ms ease-in-out;
    min-width: 50px;
    height: 50px;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--glass-grey-color);

    svg {
        width: 100%;
        height: 100%;
        fill: var(--light-color);
        padding: 10px;
    }

    &:hover {
        background-color: var(--secondary-color);
    }
`