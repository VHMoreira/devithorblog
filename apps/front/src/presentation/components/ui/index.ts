import dynamic from 'next/dynamic'
export { default as HeaderUI } from './Header'
export { default as FooterUI } from './Footer'
export { default as SideNavigatorUI } from './SideNavigator'
export { default as TitleUI } from './Title'
export { default as SubtitleUI } from './Subtitle'
export { default as ParagraphUI } from './Paragraph'
export { default as HighlighterUI } from './Highlighter'

export const MenuUI = dynamic(
    () => import('./Menu'),
    { ssr: false }
)