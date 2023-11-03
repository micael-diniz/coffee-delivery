import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { OrderPlaced } from './pages/Checkout/OrderPlaced'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/order-placed" element={<OrderPlaced />} />
      </Route>
    </Routes>
  )
}
