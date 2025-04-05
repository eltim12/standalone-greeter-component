import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Greeter from '../Greeter.vue'

describe('Greeter.vue', () => {
  it('renders correctly with default props', () => {
    const wrapper = mount(Greeter, {
      props: {
        message: 'Hello World'
      }
    })

    const button = wrapper.get('button')
    expect(button.text()).toBe('Click Me')
    expect(button.classes()).toContain('size-md')
    expect(button.classes()).toContain('greeter-primary')
    expect(button.classes()).toContain('rounded-md')
  })

  it('renders button with custom props', () => {
    const wrapper = mount(Greeter, {
      props: {
        message: 'Test Message',
        buttonText: 'Greet',
        size: 'lg',
        theme: 'danger',
        rounded: 'lg'
      }
    })

    const button = wrapper.get('button')
    expect(button.text()).toBe('Greet')
    expect(button.classes()).toContain('size-lg')
    expect(button.classes()).toContain('greeter-danger')
    expect(button.classes()).toContain('rounded-lg')
  })

  it('logs the correct message when clicked', async () => {
    const consoleSpy = vi.spyOn(console, 'log')
    const wrapper = mount(Greeter, {
      props: {
        message: 'Log this!'
      }
    })

    await wrapper.get('button').trigger('click')
    expect(consoleSpy).toHaveBeenCalledWith('Log this!')
    consoleSpy.mockRestore()
  })

  it('handles multiple different messages', async () => {
    const consoleSpy = vi.spyOn(console, 'log')

    const wrapper1 = mount(Greeter, {
      props: { message: 'First Message' }
    })
    const wrapper2 = mount(Greeter, {
      props: { message: 'Second Message' }
    })

    await wrapper1.get('button').trigger('click')
    expect(consoleSpy).toHaveBeenCalledWith('First Message')

    await wrapper2.get('button').trigger('click')
    expect(consoleSpy).toHaveBeenCalledWith('Second Message')

    consoleSpy.mockRestore()
  })
})
