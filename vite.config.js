import { 
    defineConfig, 
    loadEnv 
} from 'vite'
import { 
    format,
    resolve // Le pasamos una ubicación relativa y nos devuelve la absoluta.
} from 'path'

export default defineConfig(({
    command,
    mode
}) => {
    const env = loadEnv(mode, process.cwd())

    // console.log(command, mode)
    // console.log(env.VITE_NAME)
    // console.log(env.VITE_PORT)

    if(mode === 'development'){
        console.log('\nModo desarrollo...\n')

        return({
            server: {
                port: parseInt(env.VITE_PORT)
            }
        })
    }

    console.log('\nModo producción...\n')

    return({
        build: {
            lib: {
                entry: resolve(__dirname, 'lib', 'main.js'),
                name: 'demo',
                fileName: (format) => `demo.${format}.js`
            }
        }
    })

    /*
    // otherpage
    return({
        build: {
            rollupOptions: {
                input: {
                    main: resolve(__dirname, 'index.html'),
                    other: resolve(__dirname, 'otherpage', 'index.html')
                }
            }
        }
    })
    */
})

/*
export default {
    server: {
        port: 8080
    }
}
*/

/*
export default defineConfig({
    server: {
        port: 8080
    }
})
*/