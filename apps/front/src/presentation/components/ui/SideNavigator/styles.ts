import styled from 'styled-components'

enum WrapperAreas {
    NAVIGATOR = "navigator",
    CONTENT = "content"
}

export const Wrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 100px;
    grid-template-areas: '${WrapperAreas.CONTENT} ${WrapperAreas.NAVIGATOR}';

    @media screen and (max-width: 800px){
        grid-template-columns:auto;
        grid-template-areas: '${WrapperAreas.CONTENT}';
    }
`

export const ContentArea = styled.div`
    grid-area: ${WrapperAreas.CONTENT};
    background-color: var(--principal-color);
`

export const NavigatorArea = styled.div`
    grid-area: ${WrapperAreas.NAVIGATOR};
    background-color: var(--principal-color);
    
    @media screen and (max-width: 800px){
        display: none;
    }
`

export const SideNavbar = styled.nav`
    position: sticky;
    height: 200px;
    top: calc(50% - 100px);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
`

export const NavItem = styled.a`
    color: var(--light-color);
    opacity: 0.7;
    font-size: 20px;
    border-bottom: 2px solid transparent;
    transition: opacity 250ms ease-in-out;

    &:hover{
        opacity: 1;
    }
`

