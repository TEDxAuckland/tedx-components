<template>
  <div id="app">

    <h1>Video Player</h1>

    <div class="talk-card">
					<div id="video-player" class="video">
						<VideoPlayer :video-id="videoId" />
					</div>
			<a href="https://www.youtube.com/watch?v=YBqm7hTHCpg" class="talk-card__link">
				<div class="talk-card__play-button">&nbsp;</div>
				<img class="talk-card__image" src="https://i.ytimg.com/vi/YBqm7hTHCpg/mqdefault.jpg" alt=" video"/>
			</a>
		</div>

    <VideoPlayer :videoId="videoId" />

  </div>
</template>

<script>
  import VideoPlayer from '@/components/VideoPlayer.vue'

  export default {
    name: 'app',

    components: {
      VideoPlayer,
    },

    data() {
      return {
        videoId: 'YBqm7hTHCpg'
      }
    },
  }
  // https://www.youtube.com/watch?v=YBqm7hTHCpg
</script>

<style>
  body: {
    background-color: #fff !important;

  }
  h1 {
    color: black;
  }
</style>
