<template>
  <div class="contact">
    <h1 class="display-1"><span class="half-background">Contact Me .</span></h1>
    <div class="box">
      <h4 class="display-6">
        <span class="half-background">phone number</span>
      </h4>
      <h4 class="display-6">
        <span class="half-background">e-mail</span>
      </h4>

      <div class="social-icons">
        <ul>
          <li><a href="#"><i class="fa fa-google"></i></a></li>
          <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
          <li><a href="#"><i class="fa fa-github"></i></a></li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>

.contact {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('https://firebasestorage.googleapis.com/v0/b/portfolio-thanchatip.appspot.com/o/000039.JPG?alt=media&token=499210a1-7297-4a60-8994-f3923a59d2e2');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    filter: brightness(90%);
    vertical-align: middle;
}

.contact h1 {
    font-style: bold;
    color: #1c2729;
}

.contact .detail {
  padding: 2em;
  background-color: lightseagreen;
  margin: 2em 0 2em 0;
}

</style>