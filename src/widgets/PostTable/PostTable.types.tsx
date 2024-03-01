import { type Post } from '../../entities';

export type PostsTableProps = {
  readonly data: Post[];
  handleDelete: (id: string) => void;
};
