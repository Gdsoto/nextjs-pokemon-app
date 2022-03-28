// next
import type { NextPage } from 'next';
import { Button } from '@nextui-org/react';

// Components
import { Layout } from '../components/layout';

const Home: NextPage = () => {
  return (
    <Layout title='Listado de pokemons'>
      <Button color='gradient'>Hola Mundo</Button>
    </Layout>
  );
};

export default Home;
