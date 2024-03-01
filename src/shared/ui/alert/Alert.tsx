import * as S from './Alert.styles';
import { type AlertProps } from './Alert.types';

export const Alert = (props: AlertProps) => {
  return (
    <S.Alert
      {...props}
      message="Error"
      showIcon
    />
  );
};
