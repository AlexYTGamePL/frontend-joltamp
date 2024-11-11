<template>
  <div class="server-icon" :class="[active ? 'active' : '']">
    <img :src="imgUrl" alt="Servers" />
  </div>
</template>

<script setup>
defineProps({
  imgUrl: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
.server-icon {
  height: 50px;
  width: 50px;
  margin: 7px auto;
  border-radius: 50%;
  transition: 0.3s;
  display: flex;
  align-items: center;
  overflow: hidden;

  img {
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 50%;
  }

  &:hover {
    transform: scale(1.1);
  }
}
</style>
