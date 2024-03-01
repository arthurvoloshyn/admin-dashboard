import * as S from './PageLoader.styles';
import { Spin } from 'antd';

export const PageLoader = () => (
  <S.Loader>
    <Spin size="large" />
  </S.Loader>
);
