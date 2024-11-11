<template>
  <div class="chat-message" :style="{ marginTop: combineMessage ? '0.625rem' : '0'}">
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
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  imgUrl: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
    required: true
  },
  sentDate: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  combineMessage: {
    type: Boolean,
    required: true
  }
})
</script>

<style lang="scss" scoped>
@import './../../panel.scss';

.chat-message {
  display: flex;
  align-items: flex-start;
  border-radius: 5px;
  padding: 3px;

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
        color: #f1f1f1;
        font-size: 13px;
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
    }
  }
  &:hover {
    background-color: #00000022;
  }
}
</style>
