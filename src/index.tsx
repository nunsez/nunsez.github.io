import { render } from 'preact'

import './styles'
import { App } from './components/App'

const el = document.getElementById('app')

if (el) {
    render(<App />, el)
}
