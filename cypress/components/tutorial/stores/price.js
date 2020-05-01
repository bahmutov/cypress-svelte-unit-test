import { writable } from 'svelte/store'

const initialValue = ''

export const reset = () => price.set(initialValue)

export const price = writable(initialValue)

export const fetch = async () => {
  const response = await window.fetch('/price', { method: 'GET' })
  if (response.ok) {
    const data = await response.json()
    price.set(data.price)
  }
}
