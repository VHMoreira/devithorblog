import styled, { css } from "styled-components"

type NavItemProps = {
    selected?: boolean
}

export const Menu = styled.menu`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    width: 500px;
    max-width: 45%;
    border: 1px solid var(--glass-grey-color);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background-color: var(--light-color);
    display: flex;
    flex-direction: column;
    box-shadow: -5px 0px 22px 0px var(--glass-grey-color);
`

export const MenuHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 10px;
    border-bottom: 1px solid var(--glass-grey-color);
`

export const MenuItem = styled.li`
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid var(--glass-grey-color);
`

type IconButtonProps = {
    iconSize?: `${number}px` | `${number}rem` | `${number}%`
}

export const IconButton = styled.button<IconButtonProps>`
    display: flex;
    width: auto;
    align-items: center;
    flex-wrap: wrap;
    background-color: transparent;
    
    svg{
        width: ${({ iconSize }) => iconSize ?? '50px'};
        height: ${({ iconSize }) => iconSize ?? '50px'};
        fill: var(--secondary-color);
    }

    p{
        flex: 1;
    }

    @media screen and (min-width: 800px){
        display: none;
    }
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