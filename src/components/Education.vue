<template>
  <div class="education">
    <div class="content">
        <h1 class="display-1"><span class="half-background">Education .</span></h1>
        <div class="row">
          <div class="items">
            <h5>December 2019</h5>
            <h4>Prince of Songkla University</h4>
            <h4>Bachelor of Engineering</h4>
            <h5>Computer Engineering</h5>
          </div>
          <div class="items">
            <h5>December 20xx</h5>
            <h4>Saparachinee Trang School</h4>
            <h4>High School</h4>
            <h5>Science - Math (SMTE) program </h5>
          </div>
          <div class="items">
            <h5>December 20xx</h5>
            <h4>Horwang School</h4>
            <h4>Junior High School</h4>
            <h5>Intensive program </h5>
          </div>
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
    position: sticky;
    width: 100%;
    height: 100vh;
    background: url('https://firebasestorage.googleapis.com/v0/b/portfolio-thanchatip.appspot.com/o/Copy%20of%20000066.JPG?alt=media&token=ae79ae8d-eec3-40fc-9306-c7c4f7d45407');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    filter: brightness(90%);
    vertical-align: middle;
}

.education h1 {
    font-style: bold;
    color: #1c2729;
}

.block {
  display: -webkit-flex;
  display: flex;
  margin: 10px;
  gap: 10px;
}
.items {
  padding: 2em;
  background-color: rgba(32, 178, 171, 0.911);
  border-radius: 50px;
  margin: 1em;
  -webkit-flex: 1;
   -ms-flex: 1;
   flex: 1;
}

.education .content{
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
}
</style>