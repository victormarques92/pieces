import React, { useState } from 'react';
import {
  AuthorProps,
  CommentProps,
  ProductProps,
} from '../../@types';
import { Card, Modal } from '../../components';
import { Container } from '../../styles/Grid';
import Details from '../Details';

import { ColumnFeatured, Grid, Main, RowAds } from './styles';

interface DataProps {
  id: number;
  product: ProductProps;
  author: AuthorProps;
  comments?: CommentProps[];
}

interface FeaturedProductsProps {
  data: DataProps[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  data,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [productOpened, setProductOpened] =
    useState<DataProps>();

  const handleOpenModal = (value: DataProps) => {
    setOpenModal(true);

    setProductOpened(value);
  };

  const handleCloseModal = () => {
    setOpenModal(false);

    setProductOpened(undefined);
  };

  return (
    <Main>
      <Container>
        <RowAds>
          <Grid>
            {data.map(item =>
              item.product.featured ? (
                <ColumnFeatured key={item.id}>
                  <Card
                    image={item.product.image}
                    title={item.product.title}
                    onClick={() => handleOpenModal(item)}
                    label={item.product.label}
                    featured={item.product.featured}
                  />
                </ColumnFeatured>
              ) : (
                <Card
                  key={item.id}
                  image={item.product.image}
                  title={item.product.title}
                  onClick={() => handleOpenModal(item)}
                  label={item.product.label}
                  featured={item.product.featured}
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
        title={productOpened?.product.title ?? ''}
        open={openModal}
        onClose={handleCloseModal}
      >
        {productOpened && <Details data={productOpened} />}
      </Modal>
    </Main>
  );
};

export default FeaturedProducts;
