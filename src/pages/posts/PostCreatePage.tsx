import { ROUTES } from '../../app';
import { createPost } from '../../entities/post/api/Api';
import { Alert } from '../../shared/ui/alert';
import { PostForm } from '../../widgets/PostForm';
import { useMutation } from '@tanstack/react-query';
import { Navigate } from 'react-router-dom';

export const PostCreatePage = () => {
  const { error, isError, isPending, isSuccess, mutate } = useMutation({
    mutationFn: createPost,
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
      <PostForm
        disabled={isPending}
        onSubmit={mutate}
      />
    </>
  );
};
