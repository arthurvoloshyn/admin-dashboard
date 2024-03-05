import { Editor } from '../../shared/ui/editor';
import { type PostFormProps } from './PostForm.types';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Flex, Form, Input } from 'antd';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FormItem } from 'react-hook-form-antd';
import * as z from 'zod';

const { TextArea } = Input;

const schema = z.object({
  body: z.string().min(1, { message: 'Required' }),
  description: z.string().min(1, { message: 'Required' }),
  id: z.string().optional(),
  slug: z.string().optional(),
  title: z.string().min(1, { message: 'Required' }),
});

export const PostForm = (props: PostFormProps) => {
  const { data, disabled, onSubmit } = props;
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    setValue,
  } = useForm({
    defaultValues: data,
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    register('body');
  }, [register]);

  const handleEditorChange = (markdown: string) => {
    setValue('body', markdown);
  };

  return (
    <Flex
      gap={32}
      vertical
    >
      <Form onFinish={handleSubmit(onSubmit)}>
        {data && (
          <FormItem
            control={control}
            hidden
            name="id"
          >
            <Input />
          </FormItem>
        )}
        <FormItem
          control={control}
          name="title"
        >
          <Input placeholder="Title" />
        </FormItem>
        <FormItem
          control={control}
          name="slug"
        >
          <Input placeholder="Slug" />
        </FormItem>
        <FormItem
          control={control}
          name="description"
        >
          <TextArea placeholder="Description" />
        </FormItem>
        {errors.body && <p>Body is empty</p>}
        <Editor
          data={data?.body || ''}
          onChange={handleEditorChange}
        />
        <Button
          disabled={disabled}
          htmlType="submit"
        >
          Save
        </Button>
      </Form>
    </Flex>
  );
};
