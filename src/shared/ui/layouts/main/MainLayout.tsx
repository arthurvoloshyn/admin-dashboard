import { Navigation } from '../../navigation';
import * as S from './MainLayout.styles';
import * as A from 'antd';
import { Outlet } from 'react-router-dom';

const { Header, Sider } = A.Layout;

export const MainLayout = () => {
  return (
    <S.Layout>
      <Sider>
        <div className="demo-logo-vertical" />
        <Navigation />
      </Sider>
      <A.Layout>
        <Header />
        <S.Content>
          <Outlet />
        </S.Content>
      </A.Layout>
    </S.Layout>
  );
};
