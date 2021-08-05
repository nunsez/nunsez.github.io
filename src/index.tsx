import i18next from 'i18next'
import { render } from 'preact'

import './styles/index.scss'
import { App } from './App'
import i18nextInit from './i18n'

import { I18nContext } from './i18nContext'

const init = async () => {
    const i18n = await i18nextInit()

    render(
        <I18nContext.Provider value={{ i18n }}>
            <App />
        </I18nContext.Provider>,
        document.body,
    )
}

init()
