<template>
  <div class="friend-item">
    <div class="friend-avatar">
      <img :src="imgUrl" alt="Friend" />
      <Icon v-if="status == 0" style="color: silver" icon="mage:stop-circle-fill" class="icon" />
      <Icon v-if="status == 1" style="color: green" icon="el:ok-sign" class="icon" />
      <Icon v-if="status == 2" style="color: red" icon="oi:circle-x" class="icon" />
      <Icon
        v-if="status == 3"
        style="color: orange"
        icon="line-md:moon-filled-alt-loop"
        class="icon"
      />
    </div>
    <div class="friend-info">
      <span class="nickname">{{ username }}</span>
      <span class="description">{{ status }} {{ description }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  imgUrl: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: Number,
    required: true
  }
})
</script>

<style lang="scss" scoped>
@import './../../panel.scss';

.friend-item {
  cursor: pointer;
  padding: 4px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 3px;
  overflow: hidden;

  .friend-info {
    width: 100%;
    overflow: hidden;
  }

  .nickname {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    font-weight: bold;
    color: $fc2;
  }

  .description {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    font-size: 0.75rem;
    color: $fc3;
  }

  &:hover,
  &:hover .nickname {
    background-color: $bgc3;
    color: white;
  }

  .friend-avatar {
    position: relative;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 5px;
    }
    .icon {
      position: absolute;
      top: 25px;
      left: 25px;
      background-color: $bgc2;
      padding: 2px;
      border-radius: 50%;
      font-size: 20px;
    }
  }
}
</style>
