import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import {
  AuthorProps,
  CommentProps,
  ProductProps,
} from '../../@types';
import { Button, MediaObject } from '../../components';
import {
  BoxAction,
  Comments,
  Content,
  Favorite,
  Header,
  Row,
} from './styles';

interface DataProps {
  product: ProductProps;
  author: AuthorProps;
  comments?: CommentProps[];
}

interface DetailsProps {
  data: DataProps;
}

const Details: React.FC<DetailsProps> = ({ data }) => {
  const { product, author, comments } = data;
  const [favorite, setFavorite] = useState(false);

  return (
    <>
      <Header>
        <MediaObject title={author.name} text={author.role} />

        <BoxAction>
          <Button>BUY NOW</Button>
          <Button color="secondary">VIEW</Button>
        </BoxAction>
      </Header>

      <Row>
        <Content>
          <Favorite
            type="button"
            onClick={() => setFavorite(!favorite)}
          >
            {favorite ? <FaHeart /> : <FaRegHeart />}
          </Favorite>

          <div>
            <div>
              <div>
                <h6>Unitary Price</h6>
                <h3>${product.price.unitary}k</h3>
              </div>

              <div>
                <h6>Mint Price</h6>
                <h3>${product.price.mint}k</h3>
              </div>
            </div>

            <div>
              <h6>Description</h6>
              <p>{product.description}</p>
            </div>
          </div>

          <img
            src={product.image}
            alt={product.title}
            title={product.title}
          />
        </Content>

        {comments && (
          <Comments>
            <h3>Comments</h3>

            {comments.map(comment => (
              <MediaObject
                key={comment.id}
                title={comment.author.name}
                text={comment.message}
              />
            ))}
          </Comments>
        )}
      </Row>
    </>
  );
};

export default Details;
