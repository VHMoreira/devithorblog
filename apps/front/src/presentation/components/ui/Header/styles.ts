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
    width: 100%;
    height: 70px;
    background-color: #67678A;
    display: grid;
    grid-template-columns: minmax(100px, 200px) repeat(5, 1fr);
    grid-template-areas: 
        '${HeaderAreas.LOGO} ${HeaderAreas.EMPTY} ${HeaderAreas.EMPTY} ${HeaderAreas.NAVBAR} ${HeaderAreas.NAVBAR} ${HeaderAreas.NAVBAR}';
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
`

export const Navbar = styled.nav`
    display: inline-flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: flex-end;
    gap: 20px
`

export const NavItem = styled.a<NavItemProps>`
    color: #FEFEFE;
    font-size: 20px;
    text-decoration: none;

    ${({ selected }) => selected && css`
        font-weight: bold;
        color: #BEAA63;
    `}
`