import { defineStore } from 'pinia';
import type { CharacterObject } from '@/models/character.model';
import { Constants } from '@/constants/constants';

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


export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: Constants.INITIAL_NUMBER_OF_CHARACTERS
  }),
  getters: {
    count: (state) => state.counter
  },
  actions: {
    // Add a mutation to update the counter
    setCounter(newValue:number) {
      this.counter = newValue;
    },
  }
})

