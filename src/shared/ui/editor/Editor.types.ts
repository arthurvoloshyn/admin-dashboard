import { type MDXEditorProps } from '@mdxeditor/editor';

export type EditorProps = {
  data: string;
} & Pick<MDXEditorProps, 'onChange'>;
