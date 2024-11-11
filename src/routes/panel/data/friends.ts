import axios from 'axios';
import { defineStore } from 'pinia';

export const dataFriendsList = defineStore({
  id: 'FriendsList',
  state: () => ({
    friends: []
  }),
  actions: {
    async refreshFriendsList() {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_BACKEND_ADDRESS}/friends/`,
          null,
          {
            headers: {
              Authorization: localStorage.getItem('jwt')
            }
          }
        );
        if (res.status === 200) {
          this.friends = res.data;
        }
      } catch (err) {
        console.error(err);
      }
    }
  }
});
