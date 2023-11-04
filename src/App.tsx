import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { NextUIProvider } from '@nextui-org/react'

export function App() {
  return (
    <BrowserRouter>
      <NextUIProvider>
        <Router />
      </NextUIProvider>
    </BrowserRouter>
  )
}
