<template>
 <div class="hello">
    <d-player ref="player" @play="play" :video="video" :contextmenu="contextmenu"></d-player>
  </div>
</template>

<script>
import VueDPlayer from './VueDPlayerHls';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      video: {
          url: 'https://logos-channel.scaleengine.net/logos-channel/live/biblescreen-ad-free/chunklist_w630020335.m3u8',
          pic: 'http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg',
          type: 'hls'
        },
        autoplay: false,
        player: null,
        contextmenu: [
            {
                text: 'GitHub',
                link: 'https://github.com/MoePlayer/vue-dplayer'
            }
        ]
    }
  },
  components: {
    'd-player': VueDPlayer
  },
  methods: {
    play() {
        console.log('play callback')
      }
  },
  mounted() {
    this.player = this.$refs.player.dp;
   
    // console.log(this.player);
    // var hls = new Hls();
    // hls.loadSource('https://logos-channel.scaleengine.net/logos-channel/live/biblescreen-ad-free/chunklist_w630020335.m3u8');
    // hls.attachMedia(this.player);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
