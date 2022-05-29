import styled, { css } from 'styled-components'

enum HeaderAreas {
    LOGO = 'logo',
    NAVBAR = 'navbar',
    EMPTY = 'empty'
}

type NavItemProps = {
    selected?: boolean
}

export const Header = styled.header`
    position: sticky;
    top: 0;
    margin-top: 15px;
    z-index: 1;
    width: 100%;
    height: 70px;
    background-color: var(--principal-color);
    display: grid;
    grid-template-columns: minmax(100px, 200px) repeat(5, 1fr);
    grid-template-areas: 
        '${HeaderAreas.LOGO} ${HeaderAreas.EMPTY} ${HeaderAreas.EMPTY} ${HeaderAreas.NAVBAR} ${HeaderAreas.NAVBAR} ${HeaderAreas.NAVBAR}';

    &::before{
        content: '';
        width: 100%;
        height: 15px;
        top: 0;
        position: fixed;
        background-color: var(--principal-color);
        overflow: visible;
    }
`

export const LogoArea = styled.div`
    grid-area: ${HeaderAreas.LOGO};
    svg {
        padding: 0px 20px;
    }
`

export const NavbarArea = styled.div`
    grid-area: ${HeaderAreas.NAVBAR};
    padding: 0 20px;
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
`

export const Navbar = styled.nav`
    display: inline-flex;
    height: 100%;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;

    @media screen and (max-width: 800px){
        display: none;
    }
`

export const NavItem = styled.a<NavItemProps>`
    color: var(--light-color);
    opacity: 0.7;
    font-size: 20px;
    width: 75px;
    text-align: center;
    border-bottom: 2px solid transparent;
    transition: opacity 250ms ease-in-out;

    &:hover{
        opacity: 1;
    }


    &:after{
        display: block;
        content: '';
        transition: transform 250ms ease-in-out;
        ${({ selected }) => selected
        ? css`transform: scaleX(1)`
        : css`transform: scaleX(0)`
    };  
        border-bottom: 2px solid var(--secondary-color);
    }

    ${({ selected }) => selected && css`
        opacity: 1;
        font-weight: bold;
    `}
`

export const IconButton = styled.button`
    display: flex;
    width: auto;
    align-items: center;
    flex-wrap: wrap;
    background-color: transparent;
    
    svg{
        width: 50px;
        height: 50px;
        fill: var(--light-color);
    }

    p{
        flex: 1;
    }

    @media screen and (min-width: 800px){
        display: none;
    }
`