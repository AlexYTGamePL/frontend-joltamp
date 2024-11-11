<script setup>
import { onBeforeMount, onMounted, ref } from 'vue'
import FriendItem from './FriendItem.vue'
import axios from 'axios'

const FriendsList = ref()

onBeforeMount(async () => {
  refreshFriends()
})

const refreshFriends = () => {
  axios
    .post(`${import.meta.env.VITE_BACKEND_ADDRESS}/friends/`, null, {
      headers: {
        Authorization: localStorage.getItem('jwt')
      }
    })
    .then((res) => {
      if (res.status == 200) {
        FriendsList.value = res.data
      }
    })
    .catch((err) => {
      console.log(err)
    })
}

const addFriendName = ref('')
const addFriend = () => {
  axios
    .post(
      `${import.meta.env.VITE_BACKEND_ADDRESS}/friends/sendRequest`,
      {
        to: addFriendName.value,
        action: true
      },
      {
        headers: {
          Authorization: localStorage.getItem('jwt')
        }
      }
    )
    .then((res) => {
      if (res.status == 200) {
        refreshFriends()
      }
    })
    .catch((err) => {
      console.log(err)
    })
}
</script>

<template>
  <div class="main-content">
    <div class="friends-section">
      <div class="friends-header">
        <h3>
          <Icon icon="fa6-solid:user-group" />
          Friends
        </h3>
        <div class="friends-options">
          <button class="header-icon">Online</button>
          <button class="header-icon">All</button>
          <button class="header-icon">Pending</button>
          <button class="header-icon">Blocked</button>
          <button class="header-icon add-friend-icon">Add Friend</button>
        </div>
      </div>
      <hr />
      <form class="find-friend" @submit.prevent="addFriend">
        <input type="text" id="addFriend" placeholder="Search" v-model="addFriendName" />
        <button type="submit">find an idiot</button>
      </form>
      <hr />
      <div class="friends-count">ONLINE -</div>
      <div class="friends-list">
        <FriendItem
          v-for="(friend, key) in FriendsList"
          imgUrl="http://localhost:5173/img/JoltampIcon.png"
          :userId="friend.user_id"
          v-bind:key="key"
          v-bind:displayname="friend.displayname"
          :description="None"
          :status="friend.status"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './../../panel.scss';

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: $bgc2;
  padding: 7px;
  overflow: hidden;

  .friends-section {
    flex: 1;
    padding: 10px;
    background-color: $bgc3;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    hr {
      border: 1px solid #000000cc;
      margin: 5px 0 5px 0;
    }

    .friends-header {
      display: flex;
      align-items: center;

      h3 {
        color: #ffffff;
        margin: 7px;
      }

      .friends-options {
        display: flex;
        align-items: center;

        .header-icon {
          background: none;
          border: none;
          color: $fc3;
          font-size: 1rem;
          margin-left: 10px;
          cursor: pointer;
          padding: 5px 10px;
          border-radius: 5px;
        }

        .header-icon:hover {
          color: white;
          background-color: #ffffff22;
        }

        .add-friend-icon {
          background-color: green;
        }

        .add-friend-icon:hover {
          background-color: rgb(1, 151, 1);
        }
      }
    }

    .find-friend {
      padding: 7px;

      input {
        background-color: #282828;
        color: white;
        padding: 10px;
        width: 100%;
        border-radius: 5px;
        border: none;
      }

      input:focus {
        outline: none;
      }
    }

    .friends-count {
      color: #ddd;
      margin: 5px;
      font-size: 13px;
    }

    .friends-list {
      padding: 8px;
      flex: 1;
      margin-bottom: 1rem;
      overflow-y: auto;
    }

    ::-webkit-scrollbar {
      width: 8px;
    }
  }
}
</style>
