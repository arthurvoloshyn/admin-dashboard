import { GlobalStyle } from './app.styles';
import { QueryProvider } from './providers/QueryProvider';
import { RouterProvider } from './providers/RouterProvider';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <QueryProvider>
        <RouterProvider />
      </QueryProvider>
    </>
  );
};
