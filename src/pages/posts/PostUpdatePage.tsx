import { ROUTES } from '../../app';
import { getPost } from '../../entities';
import { updatePost } from '../../entities/post/api/Api';
import { useRequiredParameters } from '../../shared/hooks';
import { Alert } from '../../shared/ui/alert';
import { PageLoader } from '../../shared/ui/pageLoader';
import { PostForm } from '../../widgets/PostForm';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Navigate } from 'react-router-dom';

export const PostUpdatePage = () => {
  const { id } = useRequiredParameters<{ id: string }>();

  const { data, isLoading } = useQuery({
    gcTime: 0,
    queryFn: () => getPost(id),
    queryKey: ['post'],
  });

  const { error, isError, isPending, isSuccess, mutate } = useMutation({
    mutationFn: updatePost,
  });

  return (
    <>
      {isError && (
        <Alert
          description={error.message}
          type="error"
        />
      )}
      {isSuccess && <Navigate to={ROUTES.POSTS.path} />}
      {isLoading && <PageLoader />}
      {!isLoading && (
        <PostForm
          data={data}
          disabled={isPending}
          onSubmit={mutate}
        />
      )}
    </>
  );
};
