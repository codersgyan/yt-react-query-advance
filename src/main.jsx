import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './paginated.jsx';
import Parallel from './parallel.jsx';
import Optimistic from './optimistic.jsx';
import Dependant from './dependant.jsx';

export const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: 'paginated',
        element: <Products />,
    },
    {
        path: 'parallel',
        element: <Parallel />,
    },
    {
        path: 'optimistic',
        element: <Optimistic />,
    },
    {
        path: 'dependant',
        element: <Dependant />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
);
