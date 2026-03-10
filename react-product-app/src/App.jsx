import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root_layout from './components/Root_layout'
import Home from './components/Home'
import Products_List from './components/Products_List'
import ContactUS from './components/ContactUS'
import Product from './components/Product'

function App() {

  const [searchTerm, setSearchTerm] = useState("")

  const routingObj = createBrowserRouter([
    {
      path: "/",
      element: <Root_layout searchTerm={searchTerm} setSearchTerm={setSearchTerm} />,
      children: [
        { path: "", element: <Home /> },
        { path: "products", element: <Products_List searchTerm={searchTerm} /> },
        { path: "contactus", element: <ContactUS /> },
        { path: "product", element: <Product /> }
      ]
    }
  ])

  return <RouterProvider router={routingObj} />
}

export default App