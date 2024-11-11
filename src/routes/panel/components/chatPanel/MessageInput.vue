<script setup>
import {ref} from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'

const props = defineProps({
    addMessage: {
      type: Function,
      required: true
    }
  })


const route = useRoute()
const messageContent = ref("")

const sendMessage = () => {
  if (messageContent.value){

    axios.post(
      `${import.meta.env.VITE_BACKEND_ADDRESS}/messages/send`,
      {
        target: route.params.id,
        content: messageContent.value,
      },{
        headers:{
          Authorization: localStorage.getItem('jwt')
        }
      }

    )
    .then(res => {
      if (res.status === 200) {
        props.addMessage(res.data)
      }
    })
    .catch((err) => {
      console.log(err)
    })

    messageContent.value = ''
  }
}

</script>

<template>
  <form className="chat-input" @submit.prevent="sendMessage">
    <button type="button" className="file-button">
      <i class="bi bi-file-earmark-text"></i>
    </button>

    <input type="text" placeholder="Type a message..." v-model="messageContent" />

    <button type="button" className="gif-button">
      <Icon icon="basil:present-solid" />
    </button>
    <button type="button" className="emoji-button">
      <Icon icon="line-md:emoji-smile-filled" />
    </button>
    <button type="submit">Send</button>
  </form>
</template>

<style lang="scss" scoped>
@import './../../panel.scss';

.chat-input {
  display: flex;
  align-items: center;
  .file-button,
  .gif-button,
  .emoji-button {
    background: none;
    border: none;
    color: $fc3;
    font-size: 1.5rem;
    cursor: pointer;
    margin: 0 0.625rem;
  }

  .file-button:hover,
  .gif-button:hover,
  .emoji-button:hover {
    color: white;
  }

  input {
    flex: 1;
    padding: 0.5rem;
    border: none;
    border-radius: 0.25rem;
    background-color: #2f3136;
    color: white;
  }

  button[type='submit'] {
    padding: 0.5rem;
    background-color: #7289da;
    border: none;
    border-radius: 0.25rem;
    margin-left: 0.625rem;
    color: white;
  }
}
</style>
