import AuthorProps from './Author';

interface CommentProps {
  id: number;
  author: AuthorProps;
  message: string;
}

export default CommentProps;
