import styled from 'styled-components'

enum HeaderAreas {
    LOGO = 'logo',
    NAVBAR = 'navbar',
    EMPTY = 'empty'
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