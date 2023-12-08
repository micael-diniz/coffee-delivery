import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { NextUIProvider } from '@nextui-org/react'
import { OrderContextProvider } from './contexts/OrderContext'

export function App() {
  return (
    <BrowserRouter>
      <NextUIProvider>
        <OrderContextProvider>
          <Router />
        </OrderContextProvider>
      </NextUIProvider>
    </BrowserRouter>
  )
}
