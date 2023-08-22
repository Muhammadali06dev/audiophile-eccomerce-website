// React router dom 
import { createBrowserRouter, createRoutesFromChildren, RouterProvider, Route } from "react-router-dom"
// Layouts 
import RootLayout from "./layout/RootLayout"
// Pages 
import Home from "./pages/home/Home"
import Headphones from "./pages/headphones/Headphones"
import Earphones from "./pages/earphones/Earphones"
import Speakers from "./pages/speakers/Speakers"

function App() {

  const routes = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/speakers" element={<Speakers />} />



      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
