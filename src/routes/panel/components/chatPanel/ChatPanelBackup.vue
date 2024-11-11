<script setup lang="ts">
import MessageContent from './MessageContent.vue'
import MessageInput from './MessageInput.vue'
import { dataUserInfo } from '@/routes/panel/data/profile'
import { dataFriendsList } from '@/routes/panel/data/friends'

import axios from 'axios'
import { useRoute } from 'vue-router'
import { onBeforeMount, ref, watch } from 'vue'

// DefineStore variables
const UserInfo = dataUserInfo()
const FriendsList = dataFriendsList()

const route = useRoute()

const displayName = ref("");
const messages = ref<any[]>([]);
const lastMessage = ref<{}>()

// Functions:

//Getting info about user
const getInfo = () => {
  axios.get(`${import.meta.env.VITE_BACKEND_ADDRESS}/users/getInfo/${route.params.id}`)
    .then(response => {
      displayName.value = response.data.displayname
    })
}

//Loading messages to "messages" - wrong order, not splited
const loadMessages = () => {
  axios.post(`${import.meta.env.VITE_BACKEND_ADDRESS}/messages/`, {
      target: route.params.id
    },
    {
      headers: {
        Authorization: localStorage.getItem("jwt")
      }
    }).then(response => {

    if(response.data){
      messages.value = response.data
      console.log(messages.value)
      groupMessages()
    }
  })
}

//Function checks time differences between previous message and current message, returns true/false
const checkTimeDifferences = (previousMessage:any, currentMessage:any) => {
  const maxMessageDelay = 30000

  if (previousMessage && previousMessage.SentBy == currentMessage.SentBy
    && previousMessage.SentAt == currentMessage.SentAt
    && ((currentMessage.SentAtTime - previousMessage.SentAtTime)  <= maxMessageDelay) ){
    return true
  }
  else{
    return false
  }

}

// Group messages depends on last message
const groupMessages = () =>{

  lastMessage.value = messages.value[messages.value.length - 1]

  let previousMessage = {}

  messages.value.forEach((x, index) => {
    if (checkTimeDifferences(previousMessage, x)) {
      messages.value[index].combineMessage = false
    }
    else{
      previousMessage = {SentBy: x.SentBy, SentAt: x.SentAt, SentAtTime: x.SentAtTime};
      messages.value[index].combineMessage = true
    }
  })
  messages.value.reverse()
}

//Before Mound
onBeforeMount(() => {
  getInfo();
  loadMessages();

  FriendsList.refreshFriendsList()
})

// Catching changes in route.params.id
watch(
  () => route.params.id,
  async (newId, oldId) => {
    if (newId !== oldId) {
      messages.value = []; // Reset messages when route id changes
      await getInfo();  // Reset info about user
      await loadMessages();
    }
  }
);

const addMessage = (message:any) =>{

  messages.value.unshift({ ...message, combineMessage: checkTimeDifferences(lastMessage, message)});
  console.log(lastMessage.value)

}
</script>
<template>
  <div class="main-content">
    <div class="chat-section">
      <div class="chat-header">
        <h3>Chat with {{ displayName }}</h3>
        <div class="chat-header-icons">
          <button class="header-icon">
            <Icon icon="mingcute:phone-call-fill" />
          </button>
          <button class="header-icon">
            <Icon icon="heroicons:video-camera-20-solid" />
          </button>
          <button class="header-icon">
            <i class="bi bi-pin-fill"></i>
          </button>
          <button class="header-icon">
            <Icon icon="solar:mailbox-bold" />
          </button>
          <button class="header-icon">
            <Icon icon="bxs:help-circle" />
          </button>
        </div>
      </div>
      <hr />
      <div class="chat-window">
        <MessageContent
          v-for="message in messages"
          :key="message.MessageId"
          imgUrl="https://via.placeholder.com/40"
          :nickname="message.SentBy == UserInfo.user_id ? UserInfo.displayname : displayName"
          :content="message.Content"
          :sentDate="message.SentAt"
          :combineMessage="message.combineMessage"
        />
      </div>
      <MessageInput :addMessage="addMessage" />
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

  .chat-section {
    flex: 1;
    padding: 10px;
    background-color: $bgc3;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    hr {
      border: 1px solid black;
    }

    .chat-header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h3 {
        color: #ffffff;
        margin-bottom: 1rem;
      }

      .chat-header-icons {
        display: flex;
        align-items: center;

        .header-icon {
          background: none;
          border: none;
          color: $fc3;
          font-size: 1.5rem;
          margin-left: 0.75rem;
          cursor: pointer;
        }

        .header-icon:hover {
          color: white;
        }
      }
    }

    .chat-window {
      flex: 1;
      margin-bottom: 1rem;
      overflow-y: auto;
      display: flex;
      flex-direction: column-reverse;
    }
    ::-webkit-scrollbar {
      width: 8px;
    }
  }
}
</style>
