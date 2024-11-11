<script setup lang="ts">
import { useRouter } from 'vue-router'

import ServersList from './../components/serverList/ServersList.vue'
import ServerChannelPanel from '../components/serverChannels/ServerChannelPanel.vue'

const router = useRouter()
</script>
<template>
  <div class="body">
    <ServersList />

    <ServerChannelPanel />
    <ChatPanel />
  </div>
</template>

<style scoped>
@import './../panel.scss';
</style>
