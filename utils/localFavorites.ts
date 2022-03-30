const toggleFavorite = (id: number) => {
  console.log('togleFavorite', id);
  let favorites: number[] = JSON.parse(
    localStorage.getItem('favorites') || '[]'
  );
  if (favorites.includes(id)) {
    favorites = favorites.filter((pokeId) => pokeId !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const existInFavorites = (id: number) => {
  if (typeof window === 'undefined') {
    return false;
  }

  const favorites: number[] = JSON.parse(
    localStorage.getItem('favorites') || '[]'
  );
  return favorites.includes(id);
};

const pokemons = (): number[] => {
  return JSON.parse(localStorage.getItem('favorites') || '[]');
};

const functions = { toggleFavorite, existInFavorites, pokemons };

export default functions;
