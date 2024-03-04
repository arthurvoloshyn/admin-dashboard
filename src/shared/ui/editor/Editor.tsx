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
  InsertCodeBlock,
  toolbarPlugin,
  UndoRedo,
} from '@mdxeditor/editor';

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
          toolbarContents: () => (
            <>
              <UndoRedo />
              <BoldItalicUnderlineToggles />
              <ConditionalContents
                options={[
                  {
                    contents: () => <ChangeCodeMirrorLanguage />,
                    when: (editor) => editor?.editorType === 'codeblock',
                  },
                  {
                    fallback: () => <InsertCodeBlock />,
                  },
                ]}
              />
              <DiffSourceToggleWrapper>
                <UndoRedo />
              </DiffSourceToggleWrapper>
            </>
          ),
        }),
      ]}
    />
  );
};
