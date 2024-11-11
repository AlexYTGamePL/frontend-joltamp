<template>
  <div class="servers">
    <div class="main-icon"><img src="/img/JoltampIcon.png" alt="Main icon" /></div>
    <ServerComponent imgUrl="http://localhost:5173/img/JoltampIcon.png" :active="true" />
    <ServerComponent imgUrl="http://localhost:5173/img/JoltampIcon.png" :active="false" />
    <ServerComponent imgUrl="http://localhost:5173/img/JoltampIcon.png" :active="false" />
    <ServerComponent imgUrl="http://localhost:5173/img/JoltampIcon.png" :active="false" />
  </div>
</template>

<script setup>
import ServerComponent from './ServerComponent.vue'
</script>

<style lang="scss" scoped>
@import './../../panel.scss';

.servers {
  width: 70px;
  padding: 1rem 0;
  height: 100%;
  background-color: $bgc1;
  overflow-y: scroll;
  padding: 2px;

  .main-icon {
    height: 50px;
    width: 50px;
    margin: 10px auto 15px auto;
    border-radius: 50%;
    display: flex;
    align-items: center;
    overflow: hidden;
    transition: 0.5s;

    img {
      width: 100%;
      aspect-ratio: 1/1;
      border-radius: 50%;
    }

    &:hover {
      transform: scale(1.1) rotate(1turn);
      box-shadow: 0 0 5px 2px #99110c;
    }
  }

  .active {
    border: 2px solid black;
    outline: 2px solid rgb(0, 195, 255);
  }
}
</style>
