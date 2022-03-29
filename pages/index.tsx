// next
import { GetStaticProps } from 'next';
import type { NextPage } from 'next';
import { Button } from '@nextui-org/react';

// Components
import { Layout } from '../components/layout';
import { pokeApi } from '../api';

// Interfaces
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import Image from 'next/image';

interface Props {
  pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title='Listado de pokemons'>
      {pokemons.map((pokemon) => (
        <div key={pokemon.name}>
          <p>{pokemon.name}</p>
          <p>{pokemon.id}</p>
          <Image
            src={pokemon.img}
            alt={pokemon.name}
            width={100}
            height={100}
          />
        </div>
      ))}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map((pokemon, id) => {
    const pokeId: number = id++;
    return {
      name: pokemon.name,
      url: pokemon.url,
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
