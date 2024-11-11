<script setup>
import ProfileItem from '../elements/ProfileItem.vue'

import ServerChannelItem from './ServerChannelItem.vue'
</script>

<template>
  <div class="sidebar">
    <div class="server-profile">Server name</div>

    <div class="friends-list">
      <ServerChannelItem
        imgUrl="https://via.placeholder.com/40"
        username="test1"
        description="description test1"
        status="0"
      />
      <ServerChannelItem
        imgUrl="https://via.placeholder.com/40"
        username="test1"
        description="description test1"
        status="1"
      />
      <ServerChannelItem
        imgUrl="https://via.placeholder.com/40"
        username="test1"
        description="description test1"
        status="2"
      />
      <ServerChannelItem
        imgUrl="https://via.placeholder.com/40"
        username="test1"
        description="description test1"
        status="3"
      />
    </div>

    <ProfileItem />
  </div>
</template>

<style lang="scss" scoped>
@import './../../panel.scss';

.sidebar {
  width: 250px;
  background-color: $bgc2;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
  transition: width 0.3s ease;

  hr {
    margin: 10px;
    border: 1px solid black;
  }

  .friends-list {
    height: 100%;
    overflow-y: scroll;
    padding: 2px;
  }

  .user-profile {
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
    border-top: 1px solid #40444b;

    .user-avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }

    .user-info {
      overflow: hidden;
    }

    .user-info h3 {
      color: #ffffff;
      font-size: 15px;
      margin: 0;
      margin-left: 0.5rem;
    }

    .user-status-icons {
      margin-left: auto;
      display: flex;

      button {
        background: none;
        border: none;
        color: $fc3;
        font-size: 1.25rem;
        margin-left: 0.5rem;
        cursor: pointer;
      }

      button:hover {
        color: white;
      }
    }
  }
}
</style>
