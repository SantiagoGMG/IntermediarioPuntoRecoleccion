<script setup>
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { RouterLink,RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
</script>

<template>    
    <div class="padre">
      <div class = "carousel-inner">
      <div class = "carousel-item active mt-5">
        <img src="@/assets/tarjeta3.jpg" class="d-block w-100 mt-2" alt="">
        <div class = "carousel-caption">
          <h5 class = "bienvenida">El mejor punto de recolección</h5>
          <p class = "bienvenida" >Somos el número 1 en punto de recolección de paquetes de toda la república </p>
          <router-link to="/fase1" class="btn btn-primary">Empezar a cotizar</router-link>
        </div>  
      </div>
    </div>
  </div>

  <!--
  
      <div class = "container mt-5">
      <div class = "row justify-content-center">
        <div class = "ms-auto mb-2 mb-lg-0 text-center">
          <div class = "card d-block w-100"  >
            <img src="@/assets/tarjeta1.jpg" class="card-img-top" alt="Imagen de bienvenida">
            <div class="card-body">
              <h5 class="card-title">Bienvenido a nuestro sitio</h5>
              <p class="card-text">Somos el número 1 en punto de recolección de paquetes de toda la república </p>
              <a href="#" class="btn btn-primary">Cotizar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  -->
</template>

<style scoped>
.bienvenida
{
  background-color:initial;
  Color: black;
}
</style>

