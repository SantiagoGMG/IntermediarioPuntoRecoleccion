<script setup>
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { RouterLink,RouterView } from 'vue-router';
</script>

<template>    
    <div class="padre">
      <div class = "carousel-inner mt-3">
      <div class = "carousel-item active mt-5 estandar">
        <img src="@/assets/tarjeta6.webp" class="d-block w-100 mt-2 imagen" alt="imagen de bienvenida">
        <div class = "carousel-caption">
          <h5 class = "bienvenida">El mejor punto de recolección</h5>
          <p class = "bienvenida" >Somos el número 1 en punto de recolección de paquetes de toda la república </p>
          <router-link to="/fase1" class="btn btn-primary">Empezar a cotizar</router-link>
        </div>  
      </div>
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-ms-12 col-md-8">
          <img class = "img-fluid" src="@/assets/info.avif" alt="Imagen de info ">
        </div>
        <div class="col-ms-12 col-md-4 estandar">
          <h3>Ahora es mucho más facíl enviar sus paquetes</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aspernatur vel quo velit nemo optio ex asperiores quia. Modi minus harum beatae suscipit sed iusto? Tempora rem nostrum placeat molestias!</p>
          <router-link to="/fase1" class="btn btn-primary">Comenzar ahora</router-link>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-ms-12 col-md-6 estandar">
          <h3>Todos nuestros clientes estan contentos</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aspernatur vel quo velit nemo optio ex asperiores quia. Modi minus harum beatae suscipit sed iusto? Tempora rem nostrum placeat molestias!</p>
          <router-link to="/fase1" class="btn btn-primary  mb-3">Ser uno más</router-link>
        </div>
        <div class="col-ms-12 col-md-6 ">
          <img class = "img-fluid"src="@/assets/info2.avif" alt="Imagen de info ">
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
  Color: white;
}
.estandar{
    margin-top: 5rem;
}
.imagen
{
  height:30rem;
}

</style>

