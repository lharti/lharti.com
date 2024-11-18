import { render } from '@testing-library/react'
import React from 'react'
import Home from './page'

describe('<Home />', () => {
    it('should render', () => {
        expect.assertions(1)

        const { container } = render(<Home />)

        expect(container).toMatchSnapshot()
    })
})
