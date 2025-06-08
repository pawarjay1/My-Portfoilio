import {createBrowserRouter, RouterProvider} from 'react-router-dom'; 
import { Applayout } from './component/Layout/Applayout';
import { Home } from './Pages/Home';
import { Skills } from './Pages/Skills';
import { Projects } from './Pages/Projects';
import { Error } from './Pages/Error';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout/>,
      children: ([
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/skills",
          element: <Skills />
        },
        {
          path: "/projects",
          element: <Projects />
        },
        {
          path: "*",
          element: <Error />
        }

      ])
    }
  ])
  return (
    <RouterProvider router={router} />
  ) 
}

export default App
