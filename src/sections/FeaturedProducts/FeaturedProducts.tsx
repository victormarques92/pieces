import React, { useState } from 'react';
import { Card, CardProps, Modal } from '../../components';
import { Container } from '../../styles/Grid';
import Details from '../Details';

import { ColumnFeatured, Grid, Main, RowAds } from './styles';

interface FeaturedProductsProps {
  data: Omit<CardProps, 'onClick'>[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  data,
}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Main>
      <Container>
        <RowAds>
          <Grid>
            {data.map(item =>
              item.featured ? (
                <ColumnFeatured>
                  <Card
                    image={item.image}
                    title={item.title}
                    onClick={() => setOpenModal(true)}
                    label={item.label}
                    featured={item.featured}
                  />
                </ColumnFeatured>
              ) : (
                <Card
                  image={item.image}
                  title={item.title}
                  onClick={() => setOpenModal(true)}
                  label={item.label}
                  featured={item.featured}
                />
              ),
            )}
          </Grid>

          <div>
            <img
              src="https://www.araucarianoar.com.br/wp-content/uploads/2015/11/Banner-vertical-gif.gif"
              alt="Ads"
              loading="lazy"
            />
          </div>
        </RowAds>
      </Container>

      <Modal
        title="Anel Ninja duplo Fiord Line"
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Details />
      </Modal>
    </Main>
  );
};

export default FeaturedProducts;
