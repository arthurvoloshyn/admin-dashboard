import { Layout } from 'antd';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer = () => {
  return <Layout.Footer>ADMIN DASHBOARD &copy;{CURRENT_YEAR}</Layout.Footer>;
};
