import {AboutPage} from '@/Pages/AboutPage';
import {MainPage} from '@/Pages/MainPage';
import {RouteProps} from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
};

export const routerConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
};

// export const routerConfig: RouteProps[] = [
//   {
//     path: RoutePath.main,
//     element: <MainPage />,
//   },
//   {
//     path: RoutePath.about,
//     element: <AboutPage />,
//   },
// ];
