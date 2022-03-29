// next
import { GetStaticProps } from 'next';
import type { NextPage } from 'next';

// Components
import { Layout } from '../components/layout';
import { PokemonCard } from '../components/pokemon';

// Api
import { pokeApi } from '../api';

// Interfaces
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { Grid } from '@nextui-org/react';

interface Props {
  pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title='Listado de pokemons'>
      <Grid.Container gap={2} justify='flex-start'>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map((pokemon, id) => {
    const pokeId: number = id + 1;
    return {
      ...pokemon,
      id: pokeId,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeId}.svg`,
    };
  });

  return {
    props: {
      pokemons,
    },
  };
};

export default Home;
