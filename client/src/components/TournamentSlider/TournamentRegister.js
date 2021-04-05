import React from 'react';
import TextBlock from '../TextBlock';
import Button from '../Button';

const TournamentRister = (params) => {
  
  return (
    <div className={'tournament-register'}>
        <Button
          onClick={() => alert('Eeeee boy')}
        >
          Регистрация
        </Button>
        <TextBlock>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores fugit doloribus ab magni mollitia saepe incidunt maxime accusantium aut recusandae dolor, reiciendis quidem deleniti! In aspernatur est officiis iure sint.</p>
        </TextBlock>
        <TextBlock>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores fugit doloribus ab magni mollitia saepe incidunt maxime accusantium aut recusandae dolor, reiciendis quidem deleniti! In aspernatur est officiis iure sint.</p>
        </TextBlock>
        <TextBlock>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores fugit doloribus ab magni mollitia saepe incidunt maxime accusantium aut recusandae dolor, reiciendis quidem deleniti! In aspernatur est officiis iure sint.</p>
        </TextBlock>
    </div>
  )
}

export default TournamentRister;

