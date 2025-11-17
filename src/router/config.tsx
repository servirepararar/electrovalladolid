
import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/home/page'));
const Galeria = lazy(() => import('../pages/galeria/page'));
const Blog = lazy(() => import('../pages/blog/page'));
const Testimonios = lazy(() => import('../pages/testimonios/page'));
const PreguntasFrecuentes = lazy(() => import('../pages/preguntas-frecuentes/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/galeria',
    element: <Galeria />
  },
  {
    path: '/blog',
    element: <Blog />
  },
  {
    path: '/testimonios',
    element: <Testimonios />
  },
  {
    path: '/preguntas-frecuentes',
    element: <PreguntasFrecuentes />
  },
  {
    path: '*',
    element: <NotFound />
  }
];

export default routes;
