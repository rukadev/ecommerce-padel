import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import NavbarReact from './components/NavbarReact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import CartView from './components/CartView'
import Checkout from './components/Checkout'
import Footer from './components/Footer'

function App() {

    return (
        <CartProvider>
            <BrowserRouter>
                <NavbarReact />
                <Routes>
                    <Route path='/' element={<ItemListContainer greeting='Bienvenido a Padel Shop' />} />
                    <Route path='/productos/:categoria' element={<ItemListContainer greeting='Categoria de productos' />} />
                    <Route path='/item/:id' element={<ItemDetailContainer />} />
                    <Route path='/cart' element={<CartView />} />
                    <Route path='checkout' element={<Checkout />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </CartProvider>

    )
}

export default App