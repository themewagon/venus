import { lazy, Suspense } from 'react';
import { Outlet, createBrowserRouter } from 'react-router';
import MainLayout from 'layouts/main-layout';
import { rootPaths } from './paths';

const App = lazy(() => import('App'));
const Dashboard = lazy(() => import('pages/Dashboard'));

const router = createBrowserRouter(
  [
    {
      element: (
        <Suspense fallback={<h1>Loading...</h1>}>
          <App />
        </Suspense>
      ),
      children: [
        {
          path: '/',
          element: (
            <MainLayout>
              <Suspense>
                <Outlet />
              </Suspense>
            </MainLayout>
          ),
          children: [
            {
              index: true,
              element: <Dashboard />,
            },
          ],
        },
        {
          path: rootPaths.authRoot,
          element: <Outlet />,
        },
      ],
    },
  ],
  {
    basename: '/venus',
  },
);

export default router;
