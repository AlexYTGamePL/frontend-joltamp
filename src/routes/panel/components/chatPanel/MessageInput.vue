<template>
  <div class="chat-container">
    <div class="option-panel" v-if="ifReplyMessage">
      <span class="option-text">Replying to</span>
      <span class="option-user">{{replyMessage.Content}}</span>
      <Icon @click="closeOptionPanel" class="x-icon" icon="lets-icons:close-round-fill" />
    </div>

    <div class="chat-input">
      <button type="button" class="file-button">
        <i class="bi bi-file-earmark-text"></i>
      </button>

      <form @submit.prevent="sendMessage">
        <input type="text" placeholder="Type a message..." v-model="messageContent" />
        <button type="submit"><Icon icon="fa:send" /></button>
      </form>
      <button type="button" class="gif-button">
        <Icon icon="basil:present-solid" />
      </button>
      <button type="button" class="emoji-button">
        <Icon icon="line-md:emoji-smile-filled" />
      </button>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import axios from 'axios'
import { watch } from 'vue';
import { useRoute } from 'vue-router'


const route = useRoute()
const messageContent = ref("")

const ifReplyMessage = ref(false)

const props = defineProps({
    addMessage: {
      type: Function,
      required: true
    },
    editMessage: {
      type: Object,
      required: false
    },
    replyMessage: {
      type: Object,
      required: false
    },
    isFocused: {
      type: Boolean,
      required: false
    }
  })

watch(
  () => props.editMessage,
  (newValue, oldValue) => {
    if (newValue) {
      messageContent.value = newValue.Content
    }
  }
);
watch(
  () => props.replyMessage,
  (newValue, oldValue) => {

    if (newValue) {
      ifReplyMessage.value = true;
      console.log(props.replyMessage.MessageId)
      console.log("test")

    }
  }
);

const closeOptionPanel = () => {
  ifReplyMessage.value = false
}



const sendMessage = () => {
  if (messageContent.value){

    axios.post(
      `${import.meta.env.VITE_BACKEND_ADDRESS}/messages/send`,
      {
        target: route.params.id,
        content: messageContent.value,
        ...(ifReplyMessage.value ? { reply: props.replyMessage.MessageId } : {})
      },{
        headers:{
          Authorization: localStorage.getItem('jwt')
        }
      }

    )
    .then(res => {
      if (res.status === 200) {
        props.addMessage(res.data)
        ifReplyMessage.value = false;
      }
    })
    .catch((err) => {
      console.log(err)
    })

    messageContent.value = ''
  }
}

</script>

<style lang="scss" scoped>
@import './../../panel.scss';
.chat-container{

  .option-panel{
    display: flex;
    align-items: center;
    background-color: #282828;
    color: #ccc;
    padding: 6px;
    padding-left: 15px;
    border-radius: 10px 10px 0 0;
    font-size: 15px;

    .option-text{
      font-size: 14px;
    }

    .option-user{
      margin-left: 10px;
      font-size: 14px;
    }

    .x-icon{
      margin-left: auto;
      margin-right: 10px;
      font-size: 20px;

      &:hover{
        color: white;
        cursor: pointer;
      }
    }
  }

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

    form{
      width: 100%;
      display: flex;
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
      &:hover{
        color: white;
        background-color: #5865f2;
      }
    }
  }
}
</style>
