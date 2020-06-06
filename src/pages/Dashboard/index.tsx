import React from 'react';
import { FiChevronRight } from 'react-icons/fi'
import logoimg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoimg} alt="Github Explorer" />
      <Title> Explore repositórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório " />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="Teste">
          <img src="https://avatars3.githubusercontent.com/u/12113047?s=460&u=34f9f3b23ba2de25b02c27237f46956c05dbd8d4&v=4"
            alt="Marcelo Dente"
          />
          <div>
            <strong>Desafio 01</strong>
            <p>#1Desafio_bootcamp - CRUD + LIKES</p>
          </div>
        <FiChevronRight size={20}/>
        </a>

      </Repositories>
    </>
  );
};

export default Dashboard;
