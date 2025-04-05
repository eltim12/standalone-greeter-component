# Vue.js Component for Third-Party
Integration

This is a standalone Vue 3 component that renders a customizable button. It can be embedded into any HTML page using a `<script>` tag, and it prints a message (from the host page) to the browser console when clicked.

## ✨ Features

The button supports the following customizations:

| Prop        | Type      | Default       | Description                                     |
|-------------|-----------|---------------|-------------------------------------------------|
| `message`   | `string`  | **required**  | The message to print to the console on click.   |
| `buttonText`| `string`  | `'Click Me'`  | The label shown inside the button.              |
| `size`      | `string`  | `'md'`        | Controls the size of the button.                |
| `theme`     | `string`  | `'primary'`   | Sets the button color style.                    |
| `rounded`   | `string`  | 'sm'	        | Controls how rounded the button corners are.    |

---

## 🛠 How to Run the Component Locally

### 1. Install dependencies

```bash
npm install
```

### 2. Build the component

```bash
npm run build
```

### 3. Preview with `live-server`

Install `live-server` globally if you haven’t:

```bash
npm install -g live-server
```

Then run:

```bash
live-server
```

This will open the `index.html` in your browser and you’ll see the component in action.

---

## ✅ How to Run Tests

Run this command to run all unit tests:

```bash
npm run test:unit
```

---

## 💡 Why Use Virtual DOM?

Vue 3 uses a Virtual DOM by default. In this component, we used `createApp()` with a render function:

```ts
createApp({
  render: () => h(Greeter, props)
}).mount(selector)
```

Using the Virtual DOM helps:

- Keep rendering efficient and fast.
- Make the component more portable and dynamic.
- Avoid manual DOM updates.

This makes the component cleaner and easier to integrate into any host app.

---

## 🔌 Example: How to Use in a Third-Party App

You can use this component in any HTML file. Here’s a full example:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>Greeter Test</title>
    
      <!-- Include Vue -->
      <script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
    
      <!-- Include CSS -->
      <link rel="stylesheet" href="./dist/compiled-greeter-component.css" />
    </head>
    <body>
      <h1>Greeter Test</h1>
    
      <!-- Mount point -->
      <div id="my-component"></div>
    
      <!-- Include compiled component -->
      <script src="./dist/compiled-greeter-component.iife.js"></script>
    
      <script>
        window.addEventListener('DOMContentLoaded', () => {
          GreeterLib.init('#my-component', {
            message: 'Hello from the host app!',
            buttonText: 'Say Hello',
            size: 'lg',
            theme: 'success',
            rounded: 'xl'
          })
        })
      </script>
    </body> 
</html>
```

---

## 📁 Output Files

- `compiled-greeter-component.iife.js` → the JavaScript you load via `<script>`
- `compiled-greeter-component.css` → optional CSS file for styles