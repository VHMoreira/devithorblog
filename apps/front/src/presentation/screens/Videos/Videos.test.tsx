import { render } from '@testing-library/react'
import Videos from '@/presentation/screens/Videos'

describe('Videos Screen Component', () => {
    it('Should show Hello World text', () => {
        const { getByText } = render(<Videos />)

        const element = getByText('Videos')

        expect(element).toBeDefined()
    })
})