import { ROUTES } from '../../app';
import { deletePost, getPosts } from '../../entities';
import { useQueryParameters } from '../../shared/hooks';
import { PageLoader } from '../../shared/ui/pageLoader';
import { PostTable } from '../../widgets/PostTable';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Button, Pagination, type PaginationProps } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

// TODO: we need to remove default values somewhere
const buildQuery = (page = 1, size = 10) => {
  return `?page=${page}&size=${size}`;
};

// TODO: move pagination to separate component and append margin on the top
export const PostListPage = () => {
  const navigate = useNavigate();
  const query = useQueryParameters();
  const page = Number(query.get('page')) || 1;
  const size = Number(query.get('size')) || 10;

  const { data, isSuccess, refetch } = useQuery({
    gcTime: 0,
    queryFn: () => getPosts(page, size),
    queryKey: ['posts', page, size],
  });

  const { mutate } = useMutation({
    mutationFn: deletePost,
    onSuccess: () => refetch(),
  });

  const handleDelete = (id: string) => {
    mutate(id);
  };

  const handlePaginate: PaginationProps['onChange'] = (pn, sn) => {
    navigate(buildQuery(pn, sn));
  };

  return (
    <>
      {!isSuccess && <PageLoader />}
      {isSuccess && (
        <>
          <div>
            <Link to={ROUTES.POST_CREATE.path}>
              <Button>Add</Button>
            </Link>
          </div>
          <PostTable
            data={data?.data}
            handleDelete={handleDelete}
          />
          <Pagination
            defaultCurrent={page}
            onChange={handlePaginate}
            pageSize={size}
            showSizeChanger
            total={data?.count}
          />
        </>
      )}
    </>
  );
};
