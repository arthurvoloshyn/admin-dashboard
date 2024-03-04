import { ROUTES } from '../../app';
import { type Post } from '../../entities';
import * as S from './PostTable.styles';
import { type PostsTableProps } from './PostTable.types';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Modal, Table } from 'antd';
import { Link } from 'react-router-dom';

const { confirm } = Modal;

export const PostTable = (props: PostsTableProps) => {
  const { data, handleDelete } = props;

  const itemDelete = (id: string) => {
    confirm({
      onOk: () => handleDelete(id),
      title: 'Do you Want to delete these item?',
    });
  };

  const Columns = [
    {
      dataIndex: 'title',
      key: 'title',
      title: 'Title',
    },
    {
      dataIndex: 'is_published',
      key: 'is_published',
      title: 'Is Published',
    },

    {
      key: 'actions',
      render: (_: unknown, record: Post) => (
        <S.ActionBlock>
          <Link to={`${ROUTES.POST_UPDATE.path}/${record.id}`}>
            <EditOutlined />
          </Link>
          <a onClick={() => itemDelete(record.id)}>
            <DeleteOutlined />
          </a>
        </S.ActionBlock>
      ),
      title: 'Actions',
    },
  ];

  return (
    <Table
      columns={Columns}
      dataSource={data}
      pagination={false}
    />
  );
};
