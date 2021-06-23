import characters from '../data/characters.json';

interface Character {
  id: number;
  name: string;
  wand: string | null;
}

// export function resolverCharacter(parent , args: { id: number }): Character | undefined {
//   return characters.find((character) => character.id === args.id);
// }

export function getCharacterFromId(id: number): Character | undefined {
  return characters.find((character) => character.id === id);
}

export default function resolveCharacters(): Character[] {
  return characters;
}
