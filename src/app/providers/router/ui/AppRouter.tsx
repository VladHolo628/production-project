import {routerConfig} from '@/shared/config/routerConfig/routerConfig';
import {Suspense} from 'react';
import {Routes, Route} from 'react-router-dom';

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="page-wrapper">
        <Routes>
          {Object.values(routerConfig).map(({path, element}) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </div>
    </Suspense>
  );
};
