import { GlobalStyle } from './app.styles';
import { QueryProvider, RouterProvider } from './providers';

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
