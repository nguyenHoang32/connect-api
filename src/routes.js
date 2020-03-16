import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/products',
        exact: false,
        main: () => <ProductListPage />
    },
    {
        path: '/product/add',
        exact: false,
        main: () => <ProductActionPage />
    },
    {
        path: '/product/:id/edit',
        exact: false,
        main: ({match}) => <ProductActionPage match={match}/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
]
export default routes;