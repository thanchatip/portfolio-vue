<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/"><b>Thanchatip.</b></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name:'About'}">About</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Works
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <a class="dropdown-item" href="#">
                  <router-link class="dropdown-item" :to="{ name: 'Experience' }">Experiences</router-link>
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  <router-link class="dropdown-item" :to="{ name: 'Project' }">Projects</router-link>
                </a>
              </li>
            </ul>
          </li>

          </div>

          <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link" aria-current="page" :to="{name:'Contact'}">Contact</router-link>
              </li>
            </div>
          </div>  
      </div>
    </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>

