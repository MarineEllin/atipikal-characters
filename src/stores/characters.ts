import { defineStore } from 'pinia';
import type { CharacterObject } from '@/models/character.model';

export interface CharactersState {
  characters: CharacterObject[]
}

export const useCharactersStore = defineStore('charactersStore', {
    state: (): CharactersState => ({characters: []}),
    getters: {
      charactersList(state: CharactersState): CharacterObject[] {
        return state.characters;
      },
      getCharacterById: (state: CharactersState) => (characterId: string): CharacterObject=> {
        return state.characters.find(c => c.id.toString() === characterId);
      }
    }

     
})
