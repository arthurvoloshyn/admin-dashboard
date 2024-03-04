import '@mdxeditor/editor/style.css';
import * as S from './Editor.styles';
import { type EditorProps } from './Editor.types';
import {
  BoldItalicUnderlineToggles,
  ChangeCodeMirrorLanguage,
  codeBlockPlugin,
  codeMirrorPlugin,
  ConditionalContents,
  diffSourcePlugin,
  DiffSourceToggleWrapper,
  type EditorInFocus,
  InsertCodeBlock,
  toolbarPlugin,
  UndoRedo,
} from '@mdxeditor/editor';

const CONDITIONAL_CONTENTS_OPTIONS = [
  {
    contents: () => <ChangeCodeMirrorLanguage />,
    when: (editor: EditorInFocus | null) => editor?.editorType === 'codeblock',
  },
  {
    fallback: () => <InsertCodeBlock />,
  },
];

const ToolbarContents = () => (
  <>
    <UndoRedo />
    <BoldItalicUnderlineToggles />
    <ConditionalContents options={CONDITIONAL_CONTENTS_OPTIONS} />
    <DiffSourceToggleWrapper>
      <UndoRedo />
    </DiffSourceToggleWrapper>
  </>
);

export const Editor = (props: EditorProps) => {
  const { data, ...rest } = props;

  return (
    <S.Editor
      {...rest}
      markdown={data}
      plugins={[
        codeBlockPlugin({ defaultCodeBlockLanguage: 'js' }),
        codeMirrorPlugin({
          codeBlockLanguages: { css: 'CSS', js: 'JavaScript' },
        }),
        diffSourcePlugin({
          diffMarkdown: data,
          viewMode: 'rich-text',
        }),
        toolbarPlugin({
          toolbarContents: ToolbarContents,
        }),
      ]}
    />
  );
};
