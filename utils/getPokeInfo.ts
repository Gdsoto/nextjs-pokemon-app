import { pokeApi } from '../api';
import { Pokemon } from '../interfaces';

export const getPokeInfo = async (nameId: string) => {
  const { data } = await pokeApi.get<Pokemon>(`pokemon/${nameId}`);

  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  };
};
