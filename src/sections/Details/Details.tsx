import React from 'react';
import { MediaObject } from '../../components';
import {
  BoxAction,
  Comments,
  Content,
  Header,
  Row,
} from './styles';

// import { Container } from './styles';

const Details: React.FC = () => {
  return (
    <>
      <Header>
        <MediaObject
          title="Designer"
          text="Specialized in rings"
        />

        <BoxAction>
          <button type="button">BUY NOW</button>
          <button type="button">VIEW</button>
        </BoxAction>
      </Header>

      <Row>
        <Content>
          <h1>Content</h1>
        </Content>

        <Comments>
          <h1>Comments</h1>

          <MediaObject
            title="Designer"
            text="Lorem ipsum facilisis gravida habitasse vestibulum, massa maecenas facilisis consectetur, suspendisse tortor morbi dolor."
          />
          <MediaObject
            title="Designer"
            text="Lorem ipsum facilisis gravida habitasse vestibulum, massa maecenas facilisis consectetur, suspendisse tortor morbi dolor."
          />
        </Comments>
      </Row>
    </>
  );
};

export default Details;
