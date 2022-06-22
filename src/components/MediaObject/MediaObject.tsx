import React from 'react';

import { BoxImage, Container, Content } from './styles';

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
      <BoxImage>
        {image && <img src={image} alt={title} />}
      </BoxImage>

      <Content>
        <h4>{title}</h4>

        <p>{text}</p>
      </Content>
    </Container>
  );
};

export default MediaObject;
