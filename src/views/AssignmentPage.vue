<template>
  <app-layout title="Assignment">
    <div class="w-full grid-cols-12 grid gap-3 p-3">
      <div  v-for="(item, index) in assignments" :key="index" class="transition-all hover:bg-base-200/40 card shadow lg:col-span-4 cursor-pointer md:col-span-6 col-span-12" >
        <div class="p-4">
          <div>
            <div class="rounded-xl my-2 transition-all">
              <div class="badge badge-primary mb-2 text-white text-xs">{{ item.lesson[selectedLanguage] }}</div>
              <h4 class="text-sm font-bold">{{ item.title[selectedLanguage] }}</h4>
              <div class="flex items-center gap-3">
                <p class="badge badge-xs py-1 text-xs text-white" :class="{'badge-error': !item.submitted, 'badge-success': item.submitted}">{{ item.status[selectedLanguage] }}</p>
                <p class="text-xs">{{ item.deadline[selectedLanguage] }}</p>
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
import { Icon } from '@iconify/vue';

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

const assignments = ref([
  {
    title: ['Laporan Praktikum SGA Algoritma dan Pemrograman', 'SGA Algorithm and Programming Lab Report', 'SGAアルゴリズムとプログラミング実験レポート'],
    deadline: ['2022-12-31 23:59:59', '2022-12-31 23:59:59', '2022-12-31 23:59:59'],
    description: ['Laporan praktikum SGA Algoritma dan Pemrograman harus dikumpulkan sebelum tanggal 31 Desember 2022 pukul 23:59:59.', 'SGA Algorithm and Programming lab report must be submitted before December 31, 2022 at 23:59:59.', 'SGAアルゴリズムとプログラミングの実験レポートは、2022年12月31日23時59分59秒までに提出する必要があります。'],
    status: ['Belum dikumpulkan', 'Not submitted yet', 'まだ提出されていません'],
    submitted: false,
    lesson: ['Algoritma dan Pemrograman', 'Algorithm and Programming', 'アルゴリズムとプログラミング']
  },
  {
    title: ['Tugas Besar Pemrograman Web', 'Web Programming Big Task', 'ウェブプログラミングの大きな課題'],
    deadline: ['2022-12-31 23:59:59', '2022-12-31 23:59:59', '2022-12-31 23:59:59'],
    description: ['Tugas besar Pemrograman Web harus dikumpulkan sebelum tanggal 31 Desember 2022 pukul 23:59:59.', 'Web Programming big task must be submitted before December 31, 2022 at 23:59:59.', 'ウェブプログラミングの大きな課題は、2022年12月31日23時59分59秒までに提出する必要があります。'],
    status: ['Sudah dikumpulkan', 'Already submitted', 'すでに提出されました'],
    submitted: true,
    lesson: ['Pemrograman Web', 'Web Programming', 'ウェブプログラミング']
  },
  {
    title: ['Laporan Akhir Minimum System', 'Minimum System Final Report', '最小システム最終レポート'],
    deadline: ['2022-12-31 23:59:59', '2022-12-31 23:59:59', '2022-12-31 23:59:59'],
    description: ['Laporan akhir Minimum System harus dikumpulkan sebelum tanggal 31 Desember 2022 pukul 23:59:59.', 'Minimum System final report must be submitted before December 31, 2022 at 23:59:59.', '最小システムの最終レポートは、2022年12月31日23時59分59秒までに提出する必要があります。'],
    status: ['Belum dikumpulkan', 'Not submitted yet', 'まだ提出されていません'],
    submitted: false,
    lesson: ['Teknik Elektronika', 'Electronics Engineering', '電子工学']
  },
  {
    title: ['Laporan Akhir PLC dan SCADA', 'PLC and SCADA Final Report', 'PLCとSCADAの最終レポート'],
    deadline: ['2022-12-31 23:59:59', '2022-12-31 23:59:59', '2022-12-31 23:59:59'],
    description: ['Laporan akhir PLC dan SCADA harus dikumpulkan sebelum tanggal 31 Desember 2022 pukul 23:59:59.', 'PLC and SCADA final report must be submitted before December 31, 2022 at 23:59:59.', 'PLCとSCADAの最終レポートは、2022年12月31日23時59分59秒までに提出する必要があります。'],
    status: ['Belum dikumpulkan', 'Not submitted yet', 'まだ提出されていません'],
    submitted: false,
    lesson: ['Teknik Elektronika', 'Electronics Engineering', '電子工学']
  },
  {
    title: ['Laporan Akhir Sistem Komputer', 'Computer System Final Report', 'コンピュータシステム最終レポート'],
    deadline: ['2022-12-31 23:59:59', '2022-12-31 23:59:59', '2022-12-31 23:59:59'],
    description: ['Laporan akhir Sistem Komputer harus dikumpulkan sebelum tanggal 31 Desember 2022 pukul 23:59:59.', 'Computer System final report must be submitted before December 31, 2022 at 23:59:59.', 'コンピュータシステムの最終レポートは、2022年12月31日23時59 分59秒までに提出する必要があります。'],
    status: ['Belum dikumpulkan', 'Not submitted yet', 'まだ提出されていません'],
    submitted: false,
    lesson: ['Teknik Elektronika', 'Electronics Engineering', '電子工学']
  }
])

</script>