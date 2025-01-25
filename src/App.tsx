import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';
import Home, { homePageLoader } from './ui/page/Home';

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: '/home',
          loader: homePageLoader,
          element: <Home />
        }
      ]
    },

  ]);

  return (
    <RouterProvider router={router} />
  )

}

export default App
