<template>
  <app-layout title="Schedule">
    <div class="w-full grid-cols-12 grid gap-3 p-3">
      <div  v-for="(item, index) in schedules" :key="index" class="card shadow lg:col-span-4 cursor-pointer md:col-span-6 col-span-12"  :class="{'bg-gradient-to-br from-blue-600 to-blue-800 text-white': item.day[1] == currentDay, 'text-base-content': item.day[1] != currentDay}">
        <div class="p-4">
          <div>
            <div class="flex items-center gap-3 mb-3">
              <Icon icon="tabler:calendar" class="text-xl"/>
              <p class="font-bold">{{ item.day[selectedLanguage] }}</p>
            </div>
            <hr>
            <div v-if="item.material.length > 0">
              <div v-for="(schedule, idx) in item.material" :key="idx">
                <div class="rounded-xl my-2 hover:p-3 transition-all hover:bg-base-200/30" :class="{'animate-pulse bg-base-200 bg-gradient-to-r from-blue-500 to-blue-700 text-base-300 p-4': checkIsTheTime(schedule.time[selectedLanguage], item.day[1])}">
                  <h4 class="text-sm font-bold">{{ schedule.title[selectedLanguage] }}</h4>
                  <div class="flex items-center gap-3" :class="{'text-base-100/60': checkIsTheTime(schedule.time[selectedLanguage], item.day[1]) || item.day[1] == currentDay, 'text-base-content/60': !checkIsTheTime(schedule.time[selectedLanguage], item.day[1])}">
                    <p class="text-xs">{{ schedule.time[selectedLanguage] }}</p>
                    <p class="text-xs">{{ schedule.room[selectedLanguage] }}</p>
                  </div>
                  <p class="text-xs" :class="{'text-base-100/60': checkIsTheTime(schedule.time[selectedLanguage], item.day[1]) || item.day[1] == currentDay, 'text-base-content/60': !checkIsTheTime(schedule.time[selectedLanguage], item.day[1])}">{{ schedule.lecturer[selectedLanguage] }}</p>
                </div>
              </div>
            </div>
            <div v-else>
              <div :class="{'bg-white/30 text-white': item.day[1] == currentDay, 'bg-error/30 text-error': item.day[1] != currentDay}" class="p-3 mt-3 rounded-lg font-bold">
                <p>{{ vocab[0][selectedLanguage] }}</p>
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

const schedules = ref([
  {
    day: ['Senin', 'Monday', '月曜日'],
    material: [
      {
        title: ['Teknik Optimasi', 'Optimization Engineering', '最適化工学'],
        time: ['08:00 - 10:00', '08:00 - 10:00', '08:00 - 10:00'],
        room: ['Lab. Komputer', 'Computer Lab', 'コンピューターラボ'],
        lecturer: ['Dr. Ir. Hayago', 'Dr. Ir. Hayago', 'Dr. Ir. Hayago']
      },
      {
        title: ['Teknik Elektronika', 'Electronics Engineering', '電子工学'],
        time: ['10:00 - 12:00', '10:00 - 12:00', '10:00 - 12:00'],
        room: ['Lab. Elektronika', 'Electronics Lab', '電子工学ラボ'],
        lecturer: ['Dr. Budi Santoso', 'Dr. Budi Santoso', 'Dr. Budi Santoso']
      },
      {
        title: ['Teknik Komputer', 'Computer Engineering', 'コンピュータ工学'],
        time: ['13:00 - 15:00', '13:00 - 15:00', '13:00 - 15:00'],
        room: ['Lab. Komputer', 'Computer Lab', 'コンピューターラボ'],
        lecturer: ['Dr. Siti Aisyah', 'Dr. Siti Aisyah', 'Dr. Siti Aisyah']
      },
      {
        title: ['Pengolahan Citra', 'Image Processing', '画像処理'],
        time: ['15:00 - 17:00', '15:00 - 17:00', '15:00 - 17:00'],
        room: ['Lab. Komputer', 'Computer Lab', 'コンピューターラボ'],
        lecturer: ['Dr. Ahmad Subandi', 'Dr. Ahmad Subandi', 'Dr. Ahmad Subandi']
      }
    ]
  },
  {
    day: ['Selasa', 'Tuesday', '火曜日'],
    material: [
      {
        title: ['Algoritma dan Pemrograman', 'Algorithm and Programming', 'アルゴリズムとプログラミング'],
        time: ['08:00 - 10:00', '08:00 - 10:00', '08:00 - 10:00'],
        room: ['Lab. Komputer', 'Computer Lab', 'コンピューターラボ'],
        lecturer: ['Dr. Farhan Hidayat', 'Dr. Farhan Hidayat', 'Dr. Farhan Hidayat']
      },
      {
        title: ['Matematika Teknik', 'Engineering Mathematics', '工学数学'],
        time: ['10:00 - 12:00', '10:00 - 12:00', '10:00 - 12:00'],
        room: ['Ruang Kelas 101', 'Classroom 101', '教室 101'],
        lecturer: ['Dr. Tri Setyawan', 'Dr. Tri Setyawan', 'Dr. Tri Setyawan']
      },
      {
        title: ['Dasar Elektronika', 'Basic Electronics', '電子の基礎'],
        time: ['13:00 - 15:00', '13:00 - 15:00', '13:00 - 15:00'],
        room: ['Lab. Elektronika', 'Electronics Lab', '電子工学ラボ'],
        lecturer: ['Dr. Lina Marlina', 'Dr. Lina Marlina', 'Dr. Lina Marlina']
      }
    ]
  },
  {
    day: ['Rabu', 'Wednesday', '水曜日'],
    material: [
      {
        title: ['Jaringan Komputer', 'Computer Networks', 'ネットワークス'],
        time: ['08:00 - 10:00', '08:00 - 10:00', '08:00 - 10:00'],
        room: ['Lab. Komputer', 'Computer Lab', 'コンピューターラボ'],
        lecturer: ['Dr. Bambang Sukamto', 'Dr. Bambang Sukamto', 'Dr. Bambang Sukamto']
      },
      {
        title: ['Pemrograman Mobile', 'Mobile Programming', 'モバイルプログラミング'],
        time: ['10:00 - 12:00', '10:00 - 12:00', '10:00 - 12:00'],
        room: ['Lab. Komputer', 'Computer Lab', 'コンピューターラボ'],
        lecturer: ['Dr. Rahmi Wijayanti', 'Dr. Rahmi Wijayanti', 'Dr. Rahmi Wijayanti']
      }
    ]
  },
  {
    day: ['Kamis', 'Thursday', '木曜日'],
    material: [
      {
        title: ['Sistem Operasi', 'Operating System', 'オペレーティングシステム'],
        time: ['08:00 - 10:00', '08:00 - 10:00', '08:00 - 10:00'],
        room: ['Lab. Komputer', 'Computer Lab', 'コンピューターラボ'],
        lecturer: ['Dr. Bambang Sukamto', 'Dr. Bambang Sukamto', 'Dr. Bambang Sukamto']
      },
      {
        title: ['Pemrograman Web', 'Web Programming', 'ウェブプログラミング'],
        time: ['10:00 - 12:00', '10:00 - 12:00', '10:00 - 12:00'],
        room: ['Lab. Komputer', 'Computer Lab', 'コンピューターラボ'],
        lecturer: ['Dr. Rahmi Wijayanti', 'Dr. Rahmi Wijayanti', 'Dr. Rahmi Wijayanti']
      },
      {
        title: ['Pemrograman Berbasis Objek', 'Object-Oriented Programming', 'オブジェクト指向プログラミング'],
        time: ['13:00 - 15:00', '13:00 - 15:00', '13:00 - 15:00'],
        room: ['Lab. Komputer', 'Computer Lab', 'コンピューターラボ'],
        lecturer: ['Dr. Ahmad Subandi', 'Dr. Ahmad Subandi', 'Dr. Ahmad Subandi']
      }
    ]
  },
  {
    day: ['Jumat', 'Friday', '金曜日'],
    material: [
      {
        title: ['Pemrograman Berbasis Mobile', 'Mobile-Based Programming', 'モバイルベースのプログラミング'],
        time: ['10:00 - 12:00', '10:00 - 12:00', '10:00 - 12:00'],
        room: ['Lab. Komputer', 'Computer Lab', 'コンピューターラボ'],
        lecturer: ['Dr. Rahmi Wijayanti', 'Dr. Rahmi Wijayanti', 'Dr. Rahmi Wijayanti']
      },
      {
        title: ['Pemrograman Berbasis Objek', 'Object-Oriented Programming', 'オブジェクト指向プログラミング'],
        time: ['13:00 - 15:00', '13:00 - 15:00', '13:00 - 15:00'],
        room: ['Lab. Komputer', 'Computer Lab', 'コンピューターラボ'],
        lecturer: ['Dr. Ahmad Subandi', 'Dr. Ahmad Subandi', 'Dr. Ahmad Subandi']
      },
      {
        title: ['Pemrograman Web', 'Web Programming', 'ウェブプログラミング'],
        time: ['15:00 - 17:00', '15:00 - 17:00', '15:00 - 17:00'],
        room: ['Lab. Komputer', 'Computer Lab', 'コンピューターラボ'],
        lecturer: ['Dr. Rahmi Wijayanti', 'Dr. Rahmi Wijayanti', 'Dr. Rahmi Wijayanti']
      }
    ]
  },
  {
    day: ['Sabtu', 'Saturday', '土曜日'],
    material: []
  },
  {
    day: ['Minggu', 'Sunday', '日曜日'],
    material: []
  }
]);

</script>