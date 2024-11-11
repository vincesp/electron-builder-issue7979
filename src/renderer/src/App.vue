<script setup>
import { onMounted, ref } from 'vue';

const { api } = window
const { showEnv } = api
const env = ref({})

onMounted(async () => {
  env.value = await showEnv()
})
</script>

<template>
  <h1>Env</h1>

  <table>
    <thead>
      <tr>
        <th>Key</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(value, key) in env" :key="key" :class="{ '--hl': key.toLowerCase() == 'path' }">
        <td>{{ key }}</td>
        <td>{{ value }}</td>
      </tr>
    </tbody>
  </table>
</template>
