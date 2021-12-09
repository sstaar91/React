import React from 'react';
import styled from 'styled-components';

import { ListForm } from '../../components/todo/ListForm';

const TodoBody = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const TodoArticle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Todo = () => {
  return (
    <TodoBody>
      <TodoArticle>
        <ListForm />
      </TodoArticle>
    </TodoBody>
  );
};
