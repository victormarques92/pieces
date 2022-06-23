import React from 'react';
import Avatar from '../Avatar';

import { Container, Content } from './styles';

interface MediaObjectProps {
  title: string;
  text: string;
  image?: string;
}

const MediaObject: React.FC<MediaObjectProps> = ({
  title,
  text,
  image,
}) => {
  return (
    <Container>
      <Avatar name={title} image={image} />

      <Content>
        <h4>{title}</h4>

        <p>{text}</p>
      </Content>
    </Container>
  );
};

export default MediaObject;
