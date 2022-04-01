import React, { FC } from 'react';

// next
import Head from 'next/head';
import { NavBar } from '../ui';

interface LayoutProps {
  title?: string;
}

const origin = typeof window === 'undefined' ? '' : window.location.origin;

export const Layout: FC<LayoutProps> = ({
  children,
  title = 'Pokemon App',
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='author' content='Gdsoto' />
        <meta
          name='description'
          content={`informacion sobre el pokemon ${title}`}
        />
        <meta name='keywords' content={`${title} ,pokemon, pokedex`} />
        <meta
          property='og:title'
          content={`Informacion sobre el pokemon ${title}`}
        />
        <meta
          property='og:description'
          content={`Esta es la pagina sobre ${title}`}
        />
        <meta property='og:image' content={`${origin}/img/banner.png`} />
      </Head>
      <NavBar />
      <main
        style={{
          padding: '0 20px',
        }}
      >
        {children}
      </main>
    </>
  );
};
