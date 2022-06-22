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
          <div>
            <div>
              <p>Unitary Price</p>
              <h5>$4.8k</h5>

              <p>Mint Price</p>
              <h5>$480k</h5>
            </div>

            <div>
              <p>Description</p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit, sed diam nonumLorem ipsum dolor
                sit amet, consectetuer adipiscing elit, sed diam
                nonumLorem ipsum dolor sit amet, consectetuer
                adipiscing elit, sed diam nonumLorem ipsum dolor
                sit amet, consectetuer adipiscing elit, sed diam
                nonumLorem ipsum dolor sit amet, consectetuer
                adipiscing elit, sed diam nonum
              </p>
            </div>
          </div>

          <img
            src="https://img.irroba.com.br/filters:fill(fff):quality(95)/fabricad/catalog/produtos/aneis/101266/solitario-11.jpg"
            alt=""
          />
        </Content>

        <Comments>
          <h3>Comments</h3>

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
