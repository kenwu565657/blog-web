import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';
import Home, { homePageLoader } from './ui/page/Home';
import BlogContentPage from './ui/page/BlogContentPage';

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
        },
        {
          path: '/blogpost/:id',
          element: <BlogContentPage />
        }
      ]
    },

  ]);

  return (
    <RouterProvider router={router} />
  )

}

export default App
