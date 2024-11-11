<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const logout = () => {
  localStorage.clear()
  router.push('/login')
}
</script>

<template>
  <button @click="logout"><Icon icon="solar:logout-3-bold" /> Log Out</button>
</template>

<style lang="scss" scoped>
@import './../panel.scss';

button {
  padding: 3px 5px;
  color: white;
  background-color: $bgc3;
}
</style>
