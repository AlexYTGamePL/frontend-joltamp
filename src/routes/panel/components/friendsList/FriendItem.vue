<script setup>
defineProps({
  userId: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
    required: true
  },
  displayname: {
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
          <span class="nickname">{{ displayname }}</span>
          <span class="description">{{ description }}</span>
        </div>
        <div class="options">
          <RouterLink :to="'/app/chat/' + userId">
            <div class="option"><Icon icon="fluent:chat-48-filled" /></div>
          </RouterLink>

          <details>
            <summary>
              <div class="option"><Icon icon="simple-line-icons:options-vertical" /></div>
            </summary>
            <div class="detail">
              <button>Block</button>
              <button>Remove Friend</button>
              <button>coś</button>
            </div>
          </details>
        </div>

    </div>

</template>

<style lang="scss" scoped>
@import './../../panel.scss';

*{
  text-decoration: none;
}

.friend-item {
  cursor: pointer;
  padding: 6px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 3px;


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
    max-width: 95%;
  }

  .description {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    font-size: 0.75rem;
    color: $fc3;
    max-width: 95%;
  }

  &:hover {
    background-color: #00000022;
  }
  &:hover .nickname {
    color: white;
  }
  &:hover .options > .option {
    background-color: #00000033;
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
      background-color: $bgc3;
      padding: 2px;
      border-radius: 50%;
      font-size: 20px;
    }
  }
  .options {
    display: flex;

    .option {
      height: 40px;
      width: 40px;
      background-color: #0000001c;
      color: #dddddd;
      align-items: center;
      padding: 10px;
      outline: none;
      border: none;
      border-radius: 50%;
      margin: 3px;
      display: flex;
      justify-content: center;
    }
    .option:hover {
      color: white;
      border: 1px solid #00000033;
      background-color: #00000055;
    }

    details{
      position: relative;
      summary{
      list-style-type: none;
      }
      .detail{
        position: absolute;
        background-color: black;
        color: $fc1;
        display: flex;
        flex-direction: column;
        width: fit-content;
        padding: 5px;
        border-radius: 4px;

      }
    }
  }
}
</style>
