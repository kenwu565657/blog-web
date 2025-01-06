import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';
import BlogList from './features/blog/blog-list/BlogList';

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <BlogList />
        }
      ]
    },

  ]);

  return (
    <RouterProvider router={router} />
  )

}

export default App
