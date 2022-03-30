import React, { FC } from 'react';

import { Grid } from '@nextui-org/react';
import { FavoriteCardPokemon } from './';

interface Props {
  pokemons: number[];
}

export const FavoritePokemons: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
      {pokemons.map((pokemon) => (
        <Grid key={pokemon} xs={6} sm={3} md={2} xl={1}>
          <FavoriteCardPokemon pokeId={pokemon} />
        </Grid>
      ))}
    </Grid.Container>
  );
};
