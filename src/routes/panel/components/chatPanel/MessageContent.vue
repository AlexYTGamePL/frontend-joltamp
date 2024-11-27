<template>
  <div
    class="chat-message"
    :style="{ marginTop: combineMessage ? '0.625rem' : '0'}"
    @mouseover="showButtons = true"
    @mouseleave="showButtons = false"
    :id="id"
  >
    <div class="message-reply" v-if="reply">
      <span class="replyIcon">╭━</span>
      <img class="replyAvatar" src="https://via.placeholder.com/40" alt="img">
      <span class="replyNickname">@{{reply.TargetId}}</span>
      <a :href="'#' + reply.MessageId">{{reply.Content}}</a>
    </div>
    <div class="message-container">


      <div class="message-avatar">
        <img v-if="combineMessage" :src="imgUrl" alt="Avatar" />
      </div>
      <div class="message-body">
        <div v-if="combineMessage" class="message-sender">
          <span class="message-nickname">
            {{ nickname }}
          </span>
          <span class="message-sent-date">{{ sentDate }}</span>
        </div>
        <span class="message-content">
          {{ content }}
          <span class="ifEdited" v-if="edited">(edited)</span>
        </span>
      </div>

      <!-- Button delete and edit -->
      <div class="message-actions" v-if="showButtons">
        <button @click="editMessage"><Icon icon="wpf:edit" /></button>
        <button @click="deleteMessage"><Icon icon="fa6-solid:reply" /></button>
        <button @click="deleteMessage"><Icon icon="mingcute:delete-2-line" /></button>
      </div>

    </div>


  </div>
</template>

<script setup>
import { ref } from 'vue';


const showButtons = ref(false);


defineProps({
  id: { type: String, required: true },
  reply: { type: Object, required: false },
  imgUrl: { type: String, required: true },
  nickname: { type: String, required: true },
  sentDate: { type: String, required: true },
  content: { type: String, required: true },
  combineMessage: { type: Boolean, required: true },
  edited: {type: Boolean, default: false, required: false},
});

</script>

<style lang="scss" scoped>
@import './../../panel.scss';

.chat-message {

  .message-reply {
   padding-left: 20px;
   display: flex;
   align-items: center;

   .replyIcon{
     color: #777;
   }
   .replyAvatar{
     width:15px;
     height: 15px;
     border-radius: 50%;
     margin-left: 10px;
   }
   .replyNickname{
     margin-left: 5px;
     color: $fc3;
     font-weight: bold;
     font-size: 14px;
     &:hover{
       text-decoration: underline;
       cursor: pointer;
     }
   }

   a{
     margin-left: 8px;
     color: #ccc;
     font-size: 15px;
     text-decoration: none;

     &:visited{
       color: #ccc;
     }
     &:hover{
       color: white;
     }
   }
  }


  .message-container {
    display: flex;
    align-items: flex-start;
    border-radius: 5px;
    padding: 3px;
    position: relative;

    .message-avatar {
      min-width: 40px;
      width: 40px;
      margin-right: 0.625rem;

      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }

    .message-body {
      width: 100%;

      .message-sender {
        margin-bottom: 2px;
        width: fit-content;

        .message-nickname {
          color: #ffffff;
          font-size: 16px;
          font-weight: bold;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 170px;
          display: inline-block;
        }

        .message-sent-date {
          color: #d1d1d1;
          font-size: 12px;
          font-weight: lighter;
          margin-left: 8px;
          overflow: hidden;
          display: inline-block;
        }
      }

      .message-content {
        color: #dcddde;
        font-size: 16px;
        display: block;
        overflow-wrap: break-word;
        white-space: normal;

        .ifEdited{
          font-size: 10px;
          color: #999;
          user-select: none;
        }
      }
    }

    .message-actions {
      position: absolute;
      right: 10px;
      top: -10px;
      display: flex;
      gap: 0.5rem;

      button {
        background-color: #333;
        margin: 0;
        color: white;
        border: none;
        padding: 5px 10px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
      }

      button:hover {
        background-color: #555;
      }
    }
  }

  &:hover {
    background-color: #00000015;
  }

}


</style>
