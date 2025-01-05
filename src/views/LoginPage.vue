<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div class="w-full relative min-h-screen bg-base-200 text-base-content grid md:grid-cols-2 grid-cols-1">
                <div class="min-h-screen w-full relative flex items-center justify-center bg-base-content">
                    <img src="/login.png" class="w-full absolute h-full left-0 top-0 opacity-80 object-cover object-center" alt="Login Page">
                    <div class="relative p-5 bg-base-200/20 backdrop-blur rounded-xl max-w-sm w-full border border-base-200/50">
                        <img src="/AitomaClass.png" class="w-full" alt="">
                    </div>
                </div>
                <div class="flex items-center justify-center w-full h-full relative overflow-hidden">
                    <div class="max-w-md w-full">
                        <h1 class="text-3xl font-bold">Welcome to the Class</h1>
                        <p class="text-base-content">Please login to your account</p>
                        <form class="mt-5">
                            <div class="form-control">
                                <label for="email" class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input id="email" required type="email" placeholder="Email" class="input input-bordered" />
                            </div>
                            <div class="form-control mt-4">
                                <label for="password" class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <div class="flex items-center gap-3">
                                    <input id="password" required type="password" placeholder="Password" class="input input-bordered w-full" />
                                    <button type="button" class="btn btn-ghost">
                                        <Icon icon="akar-icons:eye" class="w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                            <div class="form-control mt-4">
                                <label for="remember" class="cursor-pointer label">
                                    <input id="remember" type="checkbox" class="checkbox" />
                                    <span class="label-text">Remember me</span>
                                </label>
                            </div>
                            <button @click="routerPush('Home')" class="btn btn-primary mt-4 w-full">Login</button>
                            <!-- login with google -->
                            <button class="btn btn-ghost mt-4 w-full">
                                <Icon icon="akar-icons:google-fill" class="w-6 h-6 mr-2" />Login with Google
                            </button>
                        </form>    
                    </div>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import { Icon } from '@iconify/vue';
import { onMounted } from 'vue';

onMounted(() => {
    const html = document.querySelector('html');
    html?.setAttribute('data-theme', 'light');
})
</script>