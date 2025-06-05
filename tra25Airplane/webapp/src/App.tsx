import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Airplane from './pages/Airplane';
import NotFound from './pages/NotFound';

// ルーターの設定
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true, // デフォルトルート
        element: <Home />,
      },
      {
        path: 'ticket',
        element: <Airplane />,
      }
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;