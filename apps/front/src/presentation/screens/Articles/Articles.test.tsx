import { render } from '@testing-library/react'
import Articles from '@/presentation/screens/Articles'

describe('Articles Screen Component', () => {
    it('Should show Hello World text', () => {
        const { getByText } = render(<Articles />)

        const element = getByText('Articles')

        expect(element).toBeDefined()
    })
})