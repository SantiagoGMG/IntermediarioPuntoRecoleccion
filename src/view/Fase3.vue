<script setup>
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { RouterLink,RouterView } from 'vue-router';
import { useRouter } from 'vue-router';

const router = useRouter();

function fase4(e)
{
    e.preventDefault()
    router.push('/fase4');

}
</script>

<template>
<div class="padre">
    <div class="container">
        <form class="estandar" @submit="fase4" >
            <div class="mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="green" class="bi bi-1-circle" viewBox="0 0 16 16">
                <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="green" class="bi bi-2-circle" viewBox="0 0 16 16">
                <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="red" class="bi bi-3-circle" viewBox="0 0 16 16">
                <path d="M7.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318"/>
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="gray" class="bi bi-4-circle" viewBox="0 0 16 16">
                <path d="M7.519 5.057q.33-.527.657-1.055h1.933v5.332h1.008v1.107H10.11V12H8.85v-1.559H4.978V9.322c.77-1.427 1.656-2.847 2.542-4.265ZM6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218"/>
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8"/>
                </svg>


            </div>
            <h3 class="mt-3">Completa la información</h3>
            <div class="row">
                <div class="col-sm-12 col-md-6">                 
                <label for="remitente">Nombre del Remitente:</label>
                <input id ="remitente" type="text" class="form-control" name="remitente" required>
                </div>
                <div class="col-sm-12 col-md-6">
                    <label for="destinatario">Nombre del destinatario:</label>
                    <input id="destinatario" type="text" name="destinatario"  class="form-control" required>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 col-md-6">                 
                <label for="tel-remitente">Teléfono del Remitente:</label>
                <input id ="tel-remitente" type="text" class="form-control" name="tel-remitente" required>
                </div>
                <div class="col-sm-12 col-md-6">
                    <label for="tel-destinatario">Teléfono del destinatario:</label>
                    <input id="tel-destinatario" type="text" name="tel-destinatario"  class="form-control" required>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 col-md-6">                 
                <label for="email-remitente">Email del Remitente (opcional):</label>
                <input id ="email-remitente" type="text" class="form-control" name="email-remitente">
                </div>
                <div class="col-sm-12 col-md-6">
                    <label for="email-destinatario">Email del destinatario (opcional):</label>
                    <input id="email-destinatario" type="text" name="email-destinatario"  class="form-control">
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 col-md-12"> 
                    <label for="direccion">Dirección completa del destinatario:</label>
                    <input id="direccion" type="text" name="direccion"  class="form-control" required>
                </div>

            </div>
            <a href="/fase2" class="btn btn-danger mt-5 right">Regresar</a>
            <button type="submit" class="btn btn-primary mt-5">Continuar</button>
        </form>
    </div>
</div>
</template>

<style scoped>
.estandar{
    margin-top: 5rem;
}
.right
{
    margin-right: 1rem;
}
</style>