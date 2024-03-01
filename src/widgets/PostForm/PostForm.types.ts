import { type Post } from '../../entities';
import { type FieldValues } from 'react-hook-form';

export type DataType = FieldValues;

export type PostFormProps = {
  data?: Post;
  disabled?: boolean;
  onSubmit: (data: Post) => void;
};
