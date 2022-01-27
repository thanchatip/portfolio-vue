<template>
<div class="about-me">
    <div class="content">
        <h1 class="display-1"><span class="half-background">About Me .</span></h1>
            <h3>
                Hello, I'm Thanchanok Tipmaneekomut. You can call me <i>Tammie</i><br>
                I'm a Software Developer with 2 years experience on working with MEVN stack<br>
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
    background-color: #e7dce5;
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
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
}


</style>