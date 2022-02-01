<template>
  <div class="education">
    <div class="content">
        <h1 class="display-1"><span class="half-background">Education .</span></h1>
        <div class="block">
          <div class="items">
            <h5><i><span class="half-background">Bachelor's Degree</span></i></h5>
            <p>December 2019</p>
            <h4>Prince of Songkla University</h4>
            <p>Bachelor of Engineering<br>Computer Engineering</p>
          </div>
          <div class="items">
            <h5><i><span class="half-background">High School</span></i></h5>
            <p>Febuary 2015</p>
            <h4>Saparachinee Trang School</h4>
            <p>Science - Math (SMTE) program </p>
          </div>
          <div class="items">
            <h5><i><span class="half-background">Junior High School</span></i></h5>
            <p>Febuary 2012</p>
            <h4>Horwang School</h4>
            <p>Intensive English program </p><br>
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
  background-color: rgba(232, 235, 234);
  border: 5px solid rgb(33, 104, 24) ;
  border-radius: 50px;
  margin: 1em;
  -webkit-flex: 1;
   -ms-flex: 1;
   flex: 1;
   width: 25vw; height: auto;

}

.education .content{
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
}
.items .half-background { 
    background: linear-gradient(to top, #a2be90 50%, transparent 50%);
}
</style>