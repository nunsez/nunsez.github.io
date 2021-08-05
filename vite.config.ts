import { UserConfig } from 'vite'
import prefresh from '@prefresh/vite'

const viteConfig: UserConfig = {
    esbuild: {
        jsxFactory: 'h',
        jsxFragment: 'Fragment',
        jsxInject: `import { h, Fragment } from 'preact'`,
    },
    plugins: [prefresh()],
}

export default viteConfig
