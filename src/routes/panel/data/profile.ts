import axios from 'axios'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const dataUserInfo = defineStore({
  id: 'userInfo',
  state: () => ({
    createdat: '',
    user_id: '',
    username: '',
    displayname: '',
    badges: [] as string[],
    email: '',
    bannercolor: '',
    backgroundcolor: '',
    status: ''
  }),
  actions: {
    refreshUserInfo() {
      const router = useRouter()

      axios
        .get(
          `${import.meta.env.VITE_BACKEND_ADDRESS}/users/getInfo/${localStorage.getItem('userId')}`
        )
        .then((res) => {
          if (res.status == 200) {
            this.createdat = res.data.createdat
            this.user_id = res.data.user_id
            this.username = res.data.username
            this.displayname = res.data.displayname
            this.badges = res.data.badges
            this.bannercolor = res.data.bannercolor
            this.backgroundcolor = res.data.backgroundcolor
            this.status = res.data.status
          }
        })
        .catch((err) => {
          console.log(err)
          localStorage.removeItem('jwt')
          localStorage.removeItem('userId')
          router.push('/login')
        })
    }
  }
})
