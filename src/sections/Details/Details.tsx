import React from 'react';
import { Button, MediaObject } from '../../components';
import {
  BoxAction,
  Comments,
  Content,
  Header,
  Row,
} from './styles';

const Details: React.FC = () => {
  return (
    <>
      <Header>
        <MediaObject
          title="Designer"
          text="Specialized in rings"
        />

        <BoxAction>
          <Button>BUY NOW</Button>
          <Button color="secondary">VIEW</Button>
        </BoxAction>
      </Header>

      <Row>
        <Content>
          <div>
            <div>
              <div>
                <h6>Unitary Price</h6>
                <h3>$4.8k</h3>
              </div>

              <div>
                <h6>Mint Price</h6>
                <h3>$480k</h3>
              </div>
            </div>

            <div>
              <h6>Description</h6>
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
