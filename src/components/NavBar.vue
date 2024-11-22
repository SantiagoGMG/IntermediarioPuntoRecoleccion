<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Recolecta Package</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Recolecta Packages</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <RouterLink to = "/" class="nav-link active" aria-current="page" >Home</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link active" aria-current="page" to="/fase1">Cotizar</RouterLink>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://github.com/SantiagoGMG/IntermediarioPuntoRecoleccion" target="_blank">Github</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Más
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Soon</a></li>
                  <li><a class="dropdown-item" href="#">Soon</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li><a class="dropdown-item" href="#">Soon</a></li>
                </ul>
              </li>
            </ul>
            <form class="d-flex mt-3" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </nav>

</div>
</template>

<style scoped>

</style>