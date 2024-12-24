import { useRouteParams } from '@vueuse/router'

type Deck = {
  id: number;
  name: string;
  description: string;
  cardCount: number;
}

export const useDeck = defineQuery(() => {
  const route = useRoute("deck-deckId");
  // const deckId = computed(() => Number(route.params.deckId));

  const result = useQuery({
    key: () => ["decks", { deckId: Number(route.params.deckId) }],
    query: () => useRequestFetch()(`/api/decks?deckId=${Number(route.params.deckId)}`).then(decks => {
      return decks.find(d => d.id === Number(route.params.deckId));
    }) as Promise<Deck | undefined>,
  });

  /*const deckId = useRouteParams("deckId", '-1', { transform: Number });
  const result = useQuery({
    key: () => ["decks", { deckId: deckId.value }],
    query: () => useRequestFetch()(`/api/decks?deckId=${deckId.value}`).then(decks => {
      return decks.find(d => d.id === deckId.value);
    }) as Promise<Deck | undefined>,
  });*/

  return {
    ...result
  }
});
