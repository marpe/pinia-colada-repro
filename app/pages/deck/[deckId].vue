<script setup
        lang="ts">
import { useDeck } from "~/queries/decks";

const query = useDeck();

const route = useRoute("deck-deckId");
</script>

<template>
  <div>
    <h1>Deck - {{ route.params.deckId }}</h1>

    <div>AsyncStatus: {{ query.asyncStatus }}</div>

    <div v-if="query.status.value === 'pending'">
      Loading...
    </div>
    <div v-else-if="query.status.value === 'error'">
      Error fetching: {{ query.error }}
    </div>
    <div v-else>
      <template v-if="query.data.value">
        <pre>{{ JSON.stringify(query.data.value, null, 2) }}</pre>
      </template>
      <template v-else>
        <div>
          No deck found
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>

</style>