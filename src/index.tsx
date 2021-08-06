import i18next from 'i18next'
import { render } from 'preact'

import './styles/index.scss'
import { App } from './App'
import i18nextInit from './i18n'

const init = async () => {
    await i18nextInit()

    render(<App />, document.body)
}

init()
