import dynamic from 'next/dynamic'
export { default as HeaderUI } from './Header'
export { default as FooterUI } from './Footer'
export { default as SideNavigatorUI } from './SideNavigator'

export const MenuUI = dynamic(
    () => import('./Menu'),
    { ssr: false }
)