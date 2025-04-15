import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import myStyles from './example.module.css'
import { user } from './data.json'

const modules = import.meta.glob('./modules/*.ts')

for(let key in modules){
    modules[key]().then((module) => {
        console.log(module)
    })
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>¡Hola, mundo!</h1>
<img src="${viteLogo}" class="logo" alt="Vite logo" />
<img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />

<br /><br />
<button 
    id="mybtn"
    onclick="alert('¡Hola, mundo!')"
>Example</button>

<br /><br />
<pre>${JSON.stringify(user, null, 2)}</pre>
`
const myButton = document.getElementById('mybtn');

if(myButton){
    myButton.className = myStyles.mybtn
}