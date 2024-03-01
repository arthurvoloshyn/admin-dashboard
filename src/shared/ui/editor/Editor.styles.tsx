import { MDXEditor } from '@mdxeditor/editor';
import { styled } from 'styled-components';

export const Editor = styled(MDXEditor)`
  background: white;
  .mdxeditor {
    overflow: scroll;
  }
`;
