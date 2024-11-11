<script setup>
import { useRouter } from 'vue-router'

import ProfileItem from '../elements/ProfileItem.vue'
import FriendComponent from './FriendComponent.vue'
import { onBeforeMount, ref } from 'vue'
import axios from 'axios'

const router = useRouter()

const FriendsList = ref();


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

</script>

<template>
  <div class="sidebar">
    <div class="top-section">
      <form>
        <input type="text" placeholder="Friend's Name" />
        <button type="submit">
          <Icon icon="fa:search" />
        </button>
      </form>
    </div>
    <hr />
    <div class="sidebar-options">
      <button @click="router.push('/app/friends')"><i class="bi bi-person-add"></i> Friends</button>
      <button @click="router.push('/app/nitro')"><i class="bi bi-gem"></i> Nitro</button>
      <button @click="router.push('/app/shop')"><i class="bi bi-shop"></i> Shop</button>
    </div>
    <hr />
    <div class="friends-list">
      <FriendComponent
        v-for="(friend, key) in FriendsList"
        imgUrl="http://localhost:5173/img/JoltampIcon.png"
        :key="key"
        :user-id="key"
        :username="friend.displayname"
        description="None"
        :status="friend.status"
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

  .top-section {
    cursor: pointer;

    input {
      padding: 0.5rem;
      border-radius: 0.25rem;
      background-color: #40444b;
      border: none;
      color: #ffffff;
    }

    input:focus {
      outline: 1px solid $bgc3;
    }

    button {
      padding: 0.5rem;
      background-color: #7289da;
      border: none;
      border-radius: 0.25rem;
      color: white;
      cursor: pointer;
      transition: background-color 0.3s ease;
      font-weight: 400;
    }

    button:hover {
      background-color: #5865f2;
    }
  }

  .sidebar-options {
    button {
      cursor: pointer;
      width: 100%;
      height: 35px;
      padding: 1px 5px 1px 12px;
      margin-bottom: 4px;
      font-size: 100%;
      text-align: left;
      background-color: #00000000;
      color: $fc2;
      border: none;
      border-radius: 5px;

      &:hover {
        background-color: #ffffff22;
        color: $fc1;
      }
    }
  }

  .friends-list {
    height: 100%;
    overflow-y: scroll;
    padding: 2px;
  }
}
</style>
