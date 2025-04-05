<template>
  <button class="greeter-button" :class="[sizeClass, themeClass, roundedClass]" @click="greet">
    {{ buttonText }}
  </button>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
  message: string
  buttonText?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  theme?: 'primary' | 'danger' | 'success' | 'warning'
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
}>(), {
  buttonText: 'Click Me',
  size: 'md',
  theme: 'primary',
  rounded: 'md'
})

const sizeClass = `size-${props.size}`
const themeClass = `greeter-${props.theme}`
const roundedClass = `rounded-${props.rounded}`

const greet = () => {
  console.log(props.message)
}
</script>

<style scoped>
.greeter-button {
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  color: white;
}

/* Sizes */
.size-sm {
  padding: 4px 8px;
  font-size: 0.75rem;
}

.size-md {
  padding: 8px 16px;
  font-size: 1rem;
}

.size-lg {
  padding: 12px 24px;
  font-size: 1.25rem;
}

.size-xl {
  padding: 16px 32px;
  font-size: 1.5rem;
}

/* Themes */
.greeter-primary {
  background-color: #1976d2;
}

.greeter-danger {
  background-color: #e53935;
}

.greeter-success {
  background-color: #43a047;
}

.greeter-warning {
  background-color: #fbc02d;
  color: black;
}

/* Border radius */
.rounded-none {
  border-radius: 0;
}

.rounded-sm {
  border-radius: 2px;
}

.rounded-md {
  border-radius: 4px;
}

.rounded-lg {
  border-radius: 8px;
}

.rounded-xl {
  border-radius: 16px;
}
</style>
