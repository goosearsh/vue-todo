import { createApp } from 'vue'
import App from './App'
import UI from '@/components/UI/index.js'

const app = createApp(App)

UI.forEach(component => app.component(component.name, component))


app.mount('#app')
