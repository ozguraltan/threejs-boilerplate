import vitePluginString from 'vite-plugin-string'
import {defineConfig} from 'vite'
import path from 'path'

const dirname = path.resolve()

export default defineConfig({
    root: 'src',
    publicDir: '../public',
    resolve: {
        alias: [
            {
                find: '@',
                replacement: path.resolve(__dirname, 'src')
            }

        ]
    },
    build:
        {
            outDir: '../dist',
            emptyOutDir: true,
            sourcemap: true
        },
    plugins: [vitePluginString()]
})