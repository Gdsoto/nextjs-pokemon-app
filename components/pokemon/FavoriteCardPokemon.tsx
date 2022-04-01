import React, { FC } from 'react';
import { Card } from '@nextui-org/react';
import { useRouter } from 'next/router';

interface Props {
  pokeId: number;
}

export const FavoriteCardPokemon: FC<Props> = ({ pokeId }) => {
  const router = useRouter();
  const onClick = () => {
    router.push(`/pokemon/${pokeId}`);
  };

  return (
    <Card
      hoverable
      clickable
      css={{
        padding: 10,
      }}
      onClick={onClick}
    >
      <Card.Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeId}.svg`}
        width='100%'
        height='140px'
      />
    </Card>
  );
};
