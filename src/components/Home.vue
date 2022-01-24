<template>

  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">Hello, I'm Thanchatip</h1>
        <h2 class="hero-subtitle">Software Developer</h2>
        <button type="button" class="hero-button" @click="contactMe">
          Contact me &raquo;
        </button>
      </div>
    </section>
  </div>
  
</template>

<script>
export default {
  methods: {
    contactMe () {
      this.$router.push({name: 'Contact'})
    }
  },

}
</script>


