<template>

  <div class="">
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

<style>
.home {
    color: #2f2d3b;  
}

.hero {
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
}

.hero::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("https://live.staticflickr.com/65535/51840110541_2d34d3329a_z.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    filter: brightness(60%);
}

.hero-content {
    position: relative; 
    color: white;
    text-align: center;
    margin: 0.625rem;
}

.hero-title {
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 0;
}

.hero-subtitle {
    font-size: 2rem;
    font-weight: 200;
    margin-top: 1rem;
}

.hero-button {
    background-color: #1c2729;
    color: white;
    border: 1px solid #1c2729;
    margin-top: 3rem;
    padding: 0.9375rem 1.875rem;
    font-size: 1.125rem;
    font-weight: 200;
    cursor: pointer;
    border-radius: 40px;
}

.hero-button:hover {
    background-color: #5e4d9b;
    border: 1px solid #5e4d9b;
}
</style>
