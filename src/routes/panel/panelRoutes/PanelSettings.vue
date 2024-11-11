<script setup lang="ts">
import { useRouter } from 'vue-router'

import LogoutButton from '../buttons/LogoutButton.vue'

const router = useRouter()
</script>
<template>
  <div class="body">
    <div class="settings-list">
      <ul class="main-list">
        <li>
          <button class="go-back" @click="router.push('chat/123')">
            <Icon icon="material-symbols:arrow-back" /> Go back
          </button>
        </li>
        <hr />
        <li>
          <form class="find-setting">
            <input type="text" placeholder="Search" />
          </form>
        </li>
        <hr />
        <li>
          <ul>
            <span class="class-name">USER SETTINGS</span>

            <li @click="router.push('myaccount')">My Account</li>
            <li @click="router.push('profiles')">Profiles</li>
            <li>Privacy & Safety</li>
            <li>Family Centre</li>
            <li>Authorised Apps</li>
            <li>Devices</li>
            <li>Connections</li>
            <li>Clips</li>
            <li>Friend Requests</li>
          </ul>
        </li>
        <hr />
        <li>
          <ul>
            <span class="class-name">PAYMENT SETTINGS</span>

            <li>Nitro</li>
            <li>Server Boost</li>
            <li>Subscriptions</li>
            <li>Gift Inventory</li>
            <li>Billing</li>
          </ul>
        </li>
        <hr />
        <li>
          <ul>
            <span class="class-name">APP SETTINGS</span>

            <li>Appearance</li>
            <li>Accesbility</li>
            <li>Voice & Video</li>
            <li>Chat</li>
            <li>Notofications</li>
            <li>Keybinds</li>
            <li>Language</li>
            <li>Windows Settings</li>
            <li>Streamer Mode</li>
            <li>Advanced</li>
          </ul>
        </li>
        <hr />
        <li>
          <ul>
            <span class="class-name">ACTIVITY SETTINGS</span>

            <li>Activity Privacy</li>
            <li>Registered Games</li>
            <li>Game Overlay</li>
          </ul>
        </li>
        <hr />
        <li>
          <ul>
            <span class="class-name">OTHER</span>

            <li>What's New</li>
          </ul>
        </li>
        <hr />
        <li>
          <ul>
            <li><LogoutButton /></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="main-content"><RouterView /></div>
  </div>
</template>

<style lang="scss" scoped>
@import './../panel.scss';

.go-back {
  padding: 10px;
  width: 100%;
  background-color: $bgc2;
  color: $fc2;
  border: none;
  margin-top: 20px;
  font-size: 17px;
}
.go-back:hover {
  color: white;
  background-color: $bgc3;
}

.find-setting {
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

.settings-list {
  background-color: $bgc2;
  overflow-y: auto;
  width: 40%;
  padding-right: 10px;

  .main-list {
    width: fit-content;
    list-style-type: none;
    display: block;
    margin-left: auto;
    margin-bottom: 100px;
    margin-right: 10px;
    padding-right: 6px;

    hr {
      border: 1px solid rgb(68, 68, 68);
      margin: 5px 0;
    }
    li {
      ul {
        list-style-type: none;

        .class-name {
          color: $fc3;
          font-size: 11px;
          font-weight: 700;
          display: block;
          margin: 5px 0 10px 10px;
        }

        li {
          font-family: 'Inter' sans-serif;
          margin-bottom: 2px;
          padding: 7px;
          color: $fc2;

          &:hover {
            background-color: #ffffff11;
            cursor: pointer;
          }
        }
      }
    }
  }
  &::-webkit-scrollbar {
    width: 6px;
  }
}

.main-content {
  background-color: $bgc3;
  width: 60%;
}
</style>
