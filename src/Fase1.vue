<script setup>
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { RouterLink,RouterView } from 'vue-router';
</script>

<template>
<div class="padre">
    <div class="container">
        <form class="estandar">
            <div class="mb-3">
                <h3>Dimensiones del Paquete</h3>
                <label for="Ancho">Ancho:</label>
                <input type="number" class="form-control" name="Ancho">
                <label for="alto">Alto:</label>
                <input type="number" name="alto" id="alto" class="form-control">
                <label for="largo">Largo:</label>
                <input type="number" name="largo" id="largo" class="form-control">
            </div>
            <div class="mb-3">
                <label for="peso" class="form-label">Peso (Kg):</label>
                <input type="number" class="form-control" id="peso" name= "peso">
            </div>
            <div class="mb-3">
                <label for="">Código postal de origen: </label>
                <input type="text" name ="origen" id = "origen" class="form-control">
                <label for="">Código postal de destino:</label>
                <input type="text" name="destino" id="destino" class="form-control">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</div>
</template>

<style scoped>
.estandar{
    margin-top: 5rem;
}
</style>