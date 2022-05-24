import { render } from '@testing-library/react'
import About from '@/presentation/screens/About'

describe('About Screen Component', () => {
    it('Should show Hello World text', () => {
        const { getByText } = render(<About />)

        const element = getByText('About')

        expect(element).toBeDefined()
    })
})