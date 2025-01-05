<template>
    <app-layout title="Material">
        <div class="w-full grid-cols-12 grid gap-3 p-3">
            <div  v-for="(item, index) in materials" :key="index" class="transition-all hover:bg-base-200/40 card shadow lg:col-span-4 cursor-pointer md:col-span-6 col-span-12" >
                <div class="p-4">
                    <div>
                        <div class="rounded-xl my-2 transition-all">
                            <div class="badge badge-primary mb-2 text-white text-xs">{{ item.lesson[selectedLanguage] }}</div>
                            <h4 class="text-sm font-bold">{{ item.title[selectedLanguage] }}</h4>
                            <div class="flex items-center gap-3">
                                <p class="badge py-1 text-xs bg-base-300">{{ item.type[selectedLanguage] }}</p>
                                <p class="text-xs">{{ item.file[selectedLanguage] }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </app-layout>
</template>

<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import store from '@/store';
import { computed, ref } from 'vue';

const selectedLanguage = computed(() => store.getters.selectedLanguage);

const currentDay = ref(new Date().toLocaleString('en', { weekday: 'long' }));
const currentTime = ref(new Date().toLocaleString('en', { hour: 'numeric', minute: 'numeric', second: 'numeric' }));
const intervalTime = setInterval(() => {
  currentDay.value = new Date().toLocaleString('en', { weekday: 'long' });
  currentTime.value = new Date().toLocaleString('en', { hour: 'numeric', minute: 'numeric', second: 'numeric' });
}, 1000);

const vocab = ref([
  ['Tidak ada jadwal', 'There are no schedules yet.', 'スケジュールはまだありません。'],
])

const materials = ref([
  {
    title: ['Modul 1 - Pengenalan Teknik Elektronika', 'Module 1 - Introduction to Electronics Engineering', 'モジュール1 - 電子工学の紹介'],
    description: ['Modul 1 - Pengenalan Teknik Elektronika berisi materi tentang pengenalan teknik elektronika.', 'Module 1 - Introduction to Electronics Engineering contains material about the introduction to electronics engineering.', 'モジュール1 - 電子工学の紹介には、電子工学の紹介に関する資料が含まれています。'],
    file: ['Modul 1', 'Module 1', 'モジュール1'],
    lesson: ['Teknik Elektronika', 'Electronics Engineering', '電子工学'],
    type: ['dokumen', 'document', 'ドキュメント'],
  },
  {
    title: ['Modul 2 - Dasar Elektronika', 'Module 2 - Basic Electronics', 'モジュール2 - 基本的な電子工学'],
    description: ['Modul 2 - Dasar Elektronika berisi materi tentang dasar-dasar elektronika.', 'Module 2 - Basic Electronics contains material about the basics of electronics.', 'モジュール2 - 基本的な電子工学には、電子工学の基本に関する資料が含まれています。'],
    file: ['Modul 2', 'Module 2', 'モジュール2'],
    lesson: ['Teknik Elektronika', 'Electronics Engineering', '電子工学'],
    type: ['dokumen', 'document', 'ドキュメント'],
  },
  {
    title: ['Modul 3 - Rangkaian Elektronika', 'Module 3 - Electronic Circuits', 'モジュール3 - 電子回路'],
    description: ['Modul 3 - Rangkaian Elektronika berisi materi tentang rangkaian elektronika.', 'Module 3 - Electronic Circuits contains material about electronic circuits.', 'モジュール3 - 電子回路には、電子回路に関する資料が含まれています。'],
    file: ['Modul 3', 'Module 3', 'モジュール3'],
    lesson: ['Teknik Elektronika', 'Electronics Engineering', '電子工学'],
    type: ['video', 'video', 'ビデオ'],
  },
  {
    title: ['Modul 4 - Sistem Elektronika', 'Module 4 - Electronic Systems', 'モジュール4 - 電子システム'],
    description: ['Modul 4 - Sistem Elektronika berisi materi tentang sistem elektronika.', 'Module 4 - Electronic Systems contains material about electronic systems.', 'モジュール4 - 電子システムには、電子システムに関する資料が含まれています。'],
    file: ['Modul 4', 'Module 4', 'モジュール4'],
    lesson: ['Teknik Elektronika', 'Electronics Engineering', '電子工学'],
    type: ['video', 'video', 'ビデオ'],
  },
  {
    title: ['Modul 5 - Komunikasi Elektronika', 'Module 5 - Electronic Communication', 'モジュール5 - 電子通信'],
    description: ['Modul 5 - Komunikasi Elektronika berisi materi tentang komunikasi elektronika.', 'Module 5 - Electronic Communication contains material about electronic communication.', 'モジュール5 - 電子通信には、電子通信に関する資料が含まれています。'],
    file: ['Modul 5', 'Module 5', 'モジュール5'],
    lesson: ['Teknik Elektronika', 'Electronics Engineering', '電子工学'],
    type: ['video', 'video', 'ビデオ'],
  }
])

</script>