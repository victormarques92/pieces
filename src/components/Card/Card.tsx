import React from 'react';

import { Container, Details, Img, Label } from './styles';

export interface CardProps {
  image: string;
  title: string;
  label?: string;
  featured?: boolean;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  label,
  featured,
  onClick,
}) => {
  return (
    <Container featured={featured}>
      {featured && <Label>{label}</Label>}

      <Img src={image} alt={title} featured={featured} />

      <Details featured={featured}>
        <p>{title}</p>

        <button type="button" onClick={onClick}>
          VIEW
        </button>
      </Details>
    </Container>
  );
};

export default Card;
