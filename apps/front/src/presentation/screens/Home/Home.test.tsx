import { render } from '@testing-library/react'
import Home from '@/presentation/screens/Home'

describe('Home Screen Component', () => {
    it('Should show Hello World text', () => {
        const { getByText } = render(<Home />)

        const element = getByText('Hello World')

        expect(element).toBeDefined()
    })
})