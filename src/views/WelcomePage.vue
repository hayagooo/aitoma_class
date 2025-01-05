<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div class="w-full flex justify-center text-base-content items-start bg-base-200 overflow-x-hidden min-h-screen">
                <div class="w-full overflow-auto">
                    <div class="border-b p-3 w-full flex justify-center">
                        <div class="w-full max-w-7xl">
                            <div id="navbar" class="flex items-center justify-between gap-3">
                                <div>
                                    <img src="/AitomaClass.png" class="w-40" alt="AitomaClass Logo">
                                </div>
                                <div class="flex items-center gap-3">
                                    <div class="dropdown dropdown-end">
                                        <div tabindex="0" role="button" class="btn m-1"><Icon icon="tabler:language" width="24" height="24" /></div>
                                        <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                            <li><a @click="changeSelectedLanguage(1)"><Icon icon="emojione-v1:flag-for-indonesia" class="text-2xl"/> Indonesia</a></li>
                                            <li><a @click="changeSelectedLanguage(0)"><Icon icon="twemoji:flag-us-outlying-islands" class="text-2xl"/> English</a></li>
                                            <li><a @click="changeSelectedLanguage(2)"><Icon icon="emojione-v1:flag-for-japan" class="text-2xl"/>  Japanese</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="min-h-[70vh] w-full bg-base-200 flex items-center justify-center md:px-12 px-8 border-b relative">
                        <div class="max-w-7xl w-full lg:flex items-center justify-between">
                            <div class="w-full relative">
                                <div class="absolute w-1/2 h-1/2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full top-24 right-24"></div>
                                <img src="/1.png" class="w-full relative lg:-left-[12rem] -left-[5rem]" alt="AitomaClass Logo">
                            </div>
                            <div class="max-w-xl w-full">
                                <h1 class="text-4xl mb-2 font-bold">{{ vocab[0][selectedLanguage] }}</h1>
                                <h1 class="text-xl">{{ vocab[1][selectedLanguage] }}</h1>
                                <div class="mt-5 mb-12">
                                    <button @click="routerPush('Login')" class="btn bg-gradient-to-r from-blue-600 to-blue-700 px-12 text-white">{{ vocab[2][selectedLanguage] }}</button>
                                    <button class="btn bg-base-100 px-6 ml-3">{{ vocab[3][selectedLanguage] }}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full flex justify-center md:px-12 px-8">
                        <div class="max-w-7xl md:min-h-[50vh] min-h-screen w-full grid md:grid-cols-2 grid-cols-1 gap-3 items-center">
                            <div class="relative text-center">
                                <div class="absolute w-1/2 h-48 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full top-20 left-10"></div>
                                <img src="/2.png" class="w-1/2 inline-block relative" alt="">
                            </div>
                            <div class="text-left">
                                <h1 class="text-4xl text-blue-700 font-bold">{{ vocab[4][selectedLanguage] }}</h1>
                                <p>{{ vocab[5][selectedLanguage] }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full flex justify-center md:px-12 px-8">
                        <div class="max-w-7xl md:min-h-[50vh] min-h-screen w-full grid md:grid-cols-2 grid-cols-1 gap-3 items-center">
                            <div class="relative md:hidden text-center">
                                <div class="absolute w-48 h-48 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full top-20 left-20"></div>
                                <img src="/3.png" class="w-1/2 inline-block relative" alt="">
                            </div>
                            <div class="md:text-right text-left">
                                <h1 class="text-4xl text-blue-700 font-bold">{{ vocab[6][selectedLanguage] }}</h1>
                                <p>{{ vocab[7][selectedLanguage] }}</p>
                            </div>
                            <div class="md:relative md:inline-block hidden text-center">
                                <div class="absolute w-48 h-48 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full top-20 left-20"></div>
                                <img src="/3.png" class="w-1/2 inline-block relative" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="w-full flex justify-center md:px-12 px-8">
                        <div class="max-w-7xl md:min-h-[50vh] min-h-screen w-full grid md:grid-cols-2 grid-cols-1 gap-3 items-center">
                            <div class="relative text-center">
                                <img src="/4.png" class="w-1/2 inline-block relative" alt="">
                            </div>
                            <div class="text-left">
                                <h1 class="text-4xl text-blue-700 font-bold">{{ vocab[8][selectedLanguage] }}</h1>
                                <p>{{ vocab[9][selectedLanguage] }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="min-h-screen w-full flex justify-center md:px-12 px-8 relative overflow-hidden">
                        <!-- absolute image -->
                        <img src="/1.png" class="absolute w-[60%] top-0 -left-[10%]" alt="">
                        <img src="/2.png" class="absolute w-32 top-40 right-32" alt="">
                        <img src="/3.png" class="absolute w-32 top-72 right-96" alt="">
                        <!-- absolute circle -->
                        <div class="absolute w-32 h-32 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full top-72 right-20"></div>
                        <div class="absolute w-32 h-32 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full top-72 left-96"></div>
                        <div class="absolute w-32 h-32 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full bottom-40 right-20"></div>
                        <img src="/4.png" class="absolute w-32 bottom-40 right-20" alt="">
                        <div class="max-w-xl w-full flex items-center justify-center">
                            <div class="text-center p-6 bg-base-100/60 backdrop-blur-xl border pb-12 rounded-3xl ">
                                <img src="/image.png" class="w-8 inline-block mb-5" alt="">
                                <h1 class="text-4xl mt-3 text-blue-700 font-bold">{{ vocab[10][selectedLanguage] }}</h1>
                                <button class="btn bg-base-300 mt-5"><Icon icon="ion:logo-google-playstore" class="text-xl"/> Playstore</button>
                                <button class="btn bg-base-300 mt-5 ml-3"><Icon icon="ion:logo-apple-appstore" class="text-xl"/> Appstore</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import { Icon } from '@iconify/vue';
import { computed, onMounted, ref } from 'vue';
import store from '@/store';

const selectedLanguage = computed(() => store.getters.selectedLanguage);
const vocab = ref([
    ['Where IoT Meets Modern Classrooms.', 'Dimana IoT Bertemu Kelas Modern.', 'IoTが現代の教室と出会う場所。'],
    ['Revolutionizing Education with Smart Technology!', 'Merevolusi Pendidikan dengan Teknologi Canggih!', 'スマートテクノロジーで教育を革命化！'],
    ['Login', 'Masuk', 'ログイン'],
    ['Learn More', 'Pelajari Lebih Lanjut', '詳細を見る'],
    ['Smart Attendance', 'Kehadiran Cerdas', 'スマート出席'],
    ['Effortless and accurate student attendance tracking using facial recognition technology.', 'Pelacakan kehadiran siswa yang mudah dan akurat menggunakan teknologi pengenalan wajah.', '顔認識技術を使用した手間のかからない正確な学生出席追跡。'],
    ['Interactive Learning Hub', 'Pusat Pembelajaran Interaktif', 'インタラクティブラーニングハブ'],
    ['A modern and interactive learning platform that supports various learning methods.', 'Platform pembelajaran modern dan interaktif yang mendukung berbagai metode pembelajaran.', 'さまざまな学習方法をサポートする現代的でインタラクティブな学習プラットフォーム。'],
    ['IoT-Integrated Environment', 'Lingkungan Terintegrasi IoT', 'IoT統合環境'],
    ['A smart environment that integrates IoT technology to support the learning process.', 'Lingkungan cerdas yang mengintegrasikan teknologi IoT untuk mendukung proses pembelajaran.', '学習プロセスをサポートするIoT技術を統合したスマート環境。'],
    ['Your Smart Classroom, Anytime, Anywhere!', 'Kelas Cerdas Anda, Kapan Saja, Di Mana Saja!', 'いつでもどこでもあなたのスマートクラスルーム！'],
    ['Growth Fast with Aitoma Class', 'Berkembang Cepat dengan Aitoma Class', 'Aitomaクラスで急成長'],
])

onMounted(() => {
    const html = document.querySelector('html');
    html?.setAttribute('data-theme', 'light');
})
</script>