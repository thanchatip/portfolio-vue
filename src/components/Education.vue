<template>
  <div class="education">
    <div class="content">
        <h1 class="display-1"><span class="half-background">Education .</span></h1>
        <div class="detail">
          <h5>December 2019</h5>
          <h4>Prince of Songkla University</h4>
          <h4>Bachelor of Engineering</h4>
          <h5>Computer Engineering</h5>
        </div>
        <div class="detail">
          <h5>December 20xx</h5>
          <h4>Saparachinee Trang School</h4>
          <h4>High School</h4>
          <h5>Science - Math (SMTE) program </h5>
        </div>

        <div class="detail">
          <h5>December 20xx</h5>
          <h4>Horwang School</h4>
          <h4>Junior High School</h4>
          <h5>Intensive program </h5>
        </div>


    </div>
  </div>
</template>

<script>
export default {
    name: 'Education'
}
</script>

<style>
.education {
    width: 100%;
    height: 100vh;
    background-color: #cfcad1;
    position: static;
}

.education h1 {
    font-style: bold;
    color: #1c2729;
}

.education .detail {
  padding: 2em;
  background-color: lightseagreen;
  margin: 2em 0 2em 0;
}
</style>