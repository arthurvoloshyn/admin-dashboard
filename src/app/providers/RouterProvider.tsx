import { DashboardPage, PostListPage } from '../../pages';
import { PostCreatePage } from '../../pages/posts';
import { PostUpdatePage } from '../../pages/posts/PostUpdatePage';
import { MainLayout } from '../../shared/ui/layouts';
import { ROUTES } from '../const';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<MainLayout />}
          path="/"
        >
          <Route
            element={<DashboardPage />}
            index
          />
          <Route
            element={<PostListPage />}
            path={ROUTES.POSTS.path}
          />
          <Route
            element={<PostCreatePage />}
            path={ROUTES.POST_CREATE.path}
          />
          <Route
            element={<PostListPage />}
            path={`${ROUTES.POST_UPDATE.path}`}
          />
          <Route
            element={<PostUpdatePage />}
            path={`${ROUTES.POST_UPDATE.path}/:id`}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
