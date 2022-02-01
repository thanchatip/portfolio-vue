<template>
<div class="about-me">
    <div class="content">
        <h1 class="display-1"><span class="half-background">About Me .</span></h1>
            <h3>
                Hello, I'm Thanchanok Tipmaneekomut. You can call me <i>Tammie</i><br>
                I'm a Software Developer with 2 years experience on working with <span class="half-background">MEVN</span> stack<br>
            </h3>  
    </div>
</div>
</template>

<script>
export default {
    name: 'AboutMe'

}
</script>

<style>
.about-me {
    position: sticky;
    width: 100%;
    height: 100vh;
    background: url('https://firebasestorage.googleapis.com/v0/b/portfolio-thanchatip.appspot.com/o/20201222_174054_432.jpg?alt=media&token=756a411c-0d84-4f77-b8ea-13c46e2bf789');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    filter: brightness(90%);
    vertical-align: middle;
}


.about-me h1, h3 {
    font-style: bold;
    color: #1c2729;
    text-align: center;
}
.about-me .content{
    margin: 0;
    position: absolute;
    top: 40%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
}


</style>