<template>
  <div class="conatainer">
    <about-me/>
    <education/>

  </div>
</template>

<script>
import AboutMe from '../components/AboutMe.vue'
import Education from '../components/Education.vue'
export default {
  components: {
    'about-me': AboutMe,
    'education': Education
  }

}
</script>
<style scoped>
.container {
  display: block;
}
</style>