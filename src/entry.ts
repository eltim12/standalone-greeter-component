import { createApp, h } from 'vue'
import Greeter from './components/Greeter.vue'

type GreeterProps = {
  message: string
  buttonText?: string
}

export const GreeterLib = {
  init(selector: string, props: GreeterProps) {
    const mountEl = document.querySelector(selector)
    if (!mountEl) {
      console.error(`Element ${selector} not found`)
      return
    }

    const app = createApp({
      render: () => h(Greeter, props)
    })

    app.mount(mountEl)
  }
}

// @ts-ignore
window.GreeterLib = GreeterLib
