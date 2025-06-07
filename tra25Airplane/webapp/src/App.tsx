import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Airplane from './pages/Airplane';
import NotFound from './pages/NotFound';
import MikawaProgram from './pages/mikawa/MikawaProgram';
import QuizPage from './pages/mikawa/QuizPage';
import SuccessPage from './pages/mikawa/SuccessPage';
import FailPage from './pages/mikawa/FailPage';

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
  // Mikawa program routes
  {
    path: '/mikawa',
    element: <MikawaProgram />,
  },
  {
    path: '/mikawa/quiz',
    element: <QuizPage />,
  },
  {
    path: '/mikawa/success',
    element: <SuccessPage />,
  },
  {
    path: '/mikawa/fail',
    element: <FailPage />,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;