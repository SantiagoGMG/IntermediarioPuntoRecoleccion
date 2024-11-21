<script setup>
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { RouterLink,RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
</script>

<template>
  <NavBar></NavBar>
  <RouterView></RouterView>
  <footer>
    Derechos reservados 2024 creado por Santiago Gael May Góngora
  </footer>
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

