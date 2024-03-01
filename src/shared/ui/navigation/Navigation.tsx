import { ROUTES } from '../../../app';
import * as A from 'antd';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  const items = [
    {
      key: ROUTES.DASHBOARD.path,
      label: (
        <Link to={`${ROUTES.DASHBOARD.path}`}>{ROUTES.DASHBOARD.title}</Link>
      ),
    },
    {
      key: ROUTES.POSTS.path,
      label: <Link to={`${ROUTES.POSTS.path}`}>{ROUTES.POSTS.title}</Link>,
    },
  ];

  return (
    <A.Menu
      defaultSelectedKeys={['1']}
      items={items}
      mode="inline"
      theme="dark"
    />
  );
};
