<template>
  <app-layout title="Home">
    <div class="w-full grid-cols-12 grid gap-3 p-3">
      <div class="lg:col-span-6 col-span-12">
        <div class="card shadow mt-4">
          <div class="p-4">
            <h2 class="card-title text-sm mb-3">{{ vocab[4][selectedLanguage] }}</h2>
            <hr>
            <div v-for="(item, index) in announcements" :key="index" class="">
              <div class="rounded-xl my-2 p-2 hover:p-4 transition-all cursor-pointer hover:bg-base-200" :class="{'animate-pulse bg-base-200 bg-gradient-to-r from-blue-500 to-blue-700 text-base-300 p-4': item.important}">
                <h4 class="text-sm font-bold">{{ item.title[selectedLanguage] }}</h4>
                <div :class="{'text-base-300/60': item.important, 'text-base-content/60': !item.important}">
                  <p class="text-sm font-semibold">{{ item.date[selectedLanguage] }}</p>
                  <p class="text-xs">{{ item.description[selectedLanguage] }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:col-span-6 col-span-12">
       <div class="w-full bg-gradient-to-br from-blue-600 to-blue-800 p-4 rounded-2xl shadow mt-4 h-[20.5rem] overflow-auto">
        <div class="profile">
          <div class="flex items-center gap-3">
            <img src="/avatar.png" alt="avatar" class="rounded-full w-10 h-10">
            <div>
              <h4 class="text-white text-sm font-semibold">Mohammad Khusnul Khuluq</h4>
              <p class="text-white text-xs">{{ vocab[5][selectedLanguage] }}</p>
            </div>
          </div>
        </div>
        <button class="btn bg-base-100 w-full mt-3 btn-sm">Add Note</button>
        <div v-for="(note, index) in notes" :key="index">
          <div class="rounded-xl my-2 p-2 bg-base-200/10 hover:bg-base-200 transition-all cursor-pointer text-white hover:text-base-content bg-opacity-50">
            <h4 class="text-sm font-bold">{{ note.title[selectedLanguage] }}</h4>
            <p class="text-xs">{{ note.description[selectedLanguage] }}</p>
          </div>
        </div>
       </div>
      </div>
      <div class="lg:col-span-4 md:col-span-6 col-span-12">
        <div class="card shadow">
          <div class="p-4">
            <h2 class="card-title text-sm mb-3">{{ vocab[0][selectedLanguage] }}</h2>
            <hr>
            <div v-for="(item, index) in schedules" :key="index" class="">
              <div v-if="item.day[1] == currentDay" class="pt-4 pb-2" :class="{'hidden absolute top-0': item.day[1] != currentDay}">
                <div class="flex items-center gap-3">
                  <Icon icon="tabler:calendar" class="text-xl"/>
                  <p class="font-bold">{{ item.day[selectedLanguage] }}</p>
                </div>
                <div v-if="item.material.length > 0">
                  <div v-for="(schedule, idx) in item.material" :key="idx">
                    <div class="rounded-xl my-2 hover:p-3 transition-all cursor-pointer" :class="{'animate-pulse bg-base-200 bg-gradient-to-r from-blue-500 to-blue-700 text-base-300 p-4': checkIsTheTime(schedule.time[selectedLanguage], item.day[1])}">
                      <h4 class="text-sm font-bold">{{ schedule.title[selectedLanguage] }}</h4>
                      <div class="flex items-center gap-3" :class="{'text-base-300/60': checkIsTheTime(schedule.time[selectedLanguage], item.day[1]), 'text-base-content/60': !checkIsTheTime(schedule.time[selectedLanguage], item.day[1])}">
                        <p class="text-xs">{{ schedule.time[selectedLanguage] }}</p>
                        <p class="text-xs">{{ schedule.room[selectedLanguage] }}</p>
                      </div>
                      <p class="text-xs" :class="{'text-base-300/60': checkIsTheTime(schedule.time[selectedLanguage], item.day[1]), 'text-base-content/60': !checkIsTheTime(schedule.time[selectedLanguage], item.day[1])}">{{ schedule.lecturer[selectedLanguage] }}</p>
                    </div>
                  </div>
                </div>
                <div v-else>
                  <div class="p-3 bg-error/30 mt-3 text-error rounded-lg font-bold">
                    <p>{{ vocab[1][selectedLanguage] }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:col-span-4 md:col-span-6 col-span-12">
        <div class="card shadow">
          <div class="p-4">
            <h2 class="card-title text-sm mb-3">{{ vocab[3][selectedLanguage] }}</h2>
            <hr>
            <div v-for="(material, index) in materials" :key="index" class="rounded-xl my-2 cursor-pointer transition-all text-base-content p-1 hover:bg-base-200 hover:p-3">
              <div class="flex items-center gap-2">
                <p class="badge badge-xs py-1 bg-base-300 text-xs">{{ material.type[selectedLanguage] }}</p>
              </div>
              <h4 class="text text-sm font-bold">{{ material.title[selectedLanguage] }}</h4>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:col-span-4 md:col-span-6 col-span-12">
        <div class="card shadow">
          <div class="p-4">
            <h2 class="card-title text-sm mb-3">{{ vocab[2][selectedLanguage] }}</h2>
            <hr>
            <div v-for="(assignment, index) in assignments" :key="index" class="rounded-xl my-3 cursor-pointer transition-all text-base-content p-1 hover:bg-base-200 hover:p-3">
              <div> 
                <div class="badge badge-primary mb-1 text-white text-xs">{{ assignment.lesson[selectedLanguage] }}</div>
                <h4 class="text text-sm font-bold">{{ assignment.title[selectedLanguage] }}</h4>
                <div class="flex items-center gap-2">
                  <p class="badge badge-xs py-1 text-xs text-white" :class="{'badge-error': !assignment.submitted, 'badge-success': assignment.submitted}">{{ assignment.status[selectedLanguage] }}</p>
                  <p class="text-xs text-base-content/70">{{ assignment.deadline[selectedLanguage] }}</p>
                </div>
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
import { inject, onMounted, Ref, ref, computed } from 'vue';
import { Icon } from '@iconify/vue';
import { useStore } from 'vuex';

const store = useStore();
const selectedLanguage = computed(() => store.getters.selectedLanguage);

const currentDay = ref(new Date().toLocaleString('en', { weekday: 'long' }));
const currentTime = ref(new Date().toLocaleString('en', { hour: 'numeric', minute: 'numeric', second: 'numeric' }));
const intervalTime = setInterval(() => {
  currentDay.value = new Date().toLocaleString('en', { weekday: 'long' });
  currentTime.value = new Date().toLocaleString('en', { hour: 'numeric', minute: 'numeric', second: 'numeric' });
}, 1000);

const vocab = ref([
  ['Jadwal hari ini', 'Today Schedule', '今日のスケジュール'],
  ['Tidak ada jadwal', 'There are no schedules yet.', 'スケジュールはまだありません。'],
  ['Tugas', 'Assignment', '課題'],
  ['Materi', 'Material', '材料'],
  ['Pengumuman', 'Announcement', 'お知らせ'],
  ['Mahasiswa Teknik Elektronika', 'Electronics Engineering Student', '電子工学学生']
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
    file: ['Modul ', 'Module ', 'モジュール'],
    lesson: ['Teknik Elektronika', 'Electronics Engineering', '電子工学'],
    type: ['video', 'video', 'ビデオ'],
  }
])

const announcements = ref([
  {
    title: ['Pengumuman Ujian Akhir', 'Final Exam Announcement', '最終試験のお知らせ'],
    description: ['Ujian akhir semester akan dilaksanakan pada tanggal 31 Desember 2022.', 'The final semester exam will be held on December 31, 2022.', '最終学期の試験は2022年12月31日に行われます。'],
    date: ['2022-12-31', '2022-12-31', '2022-12-31'],
    type: ['info', 'info', '情報'],
    important: true
  },
  {
    title: ['Pengumuman Ujian Tengah Semester', 'Midterm Exam Announcement', '中間試験のお知らせ'],
    description: ['Ujian tengah semester akan dilaksanakan pada tanggal 30 Juni 2022.', 'The midterm exam will be held on June 30, 2022.', '中間試験は2022年6月30日に行われます。'],
    date: ['2022-06-30', '2022-06-30', '2022-06-30'],
    type: ['info', 'info', '情報'],
    important: false
  },
  {
    title: ['Pengumuman Ujian Praktikum', 'Lab Exam Announcement', '実験試験のお知らせ'],
    description: ['Ujian praktikum akan dilaksanakan pada tanggal 29 Desember 2022.', 'The lab exam will be held on December 29, 2022.', '実験試験は2022年12月29日に行われます。'],
    date: ['2022-12-29', '2022-12-29', '2022-12-29'],
    type: ['info', 'info', '情報'],
    important: false
  }
])

const notes = ref([
  {
    title: ['Rumus Persamaan OHM', 'OHM Equation Formula', 'オームの法則の式'],
    description: ['Rumus persamaan OHM adalah V = I x R.', 'The OHM equation formula is V = I x R.', 'オームの法則の式はV = I x Rです。'],
  },
  {
    title: ['Rumus Persamaan KIRCHOFF', 'KIRCHOFF Equation Formula', 'キルヒホッフの法則の式'],
    description: ['Rumus persamaan KIRCHOFF adalah ΣI = 0 dan ΣV = 0.', 'The KIRCHOFF equation formula is ΣI = 0 and ΣV = 0.', 'キルヒホッフの法則の式はΣI = 0およびΣV = 0です。'],
  },
  {
    title: ['Rumus Persamaan MAXWELL', 'MAXWELL Equation Formula', 'マックスウェルの方程式の式'],
    description: ['Rumus persamaan MAXWELL adalah ∇ x E = -∂B/∂t.', 'The MAXWELL equation formula is ∇ x E = -∂B/∂t.', 'マックスウェルの方程式の式は∇ x E = -∂B/∂tです。'],
  },
  {
    title: ['Struktur Model CNN', 'CNN Model Structure', 'CNNモデル構造'],
    description: ['Struktur model CNN terdiri dari Convolutional Layer, Pooling Layer, dan Fully Connected Layer.', 'The CNN model structure consists of Convolutional Layer, Pooling Layer, and Fully Connected Layer.', 'CNNモデル構造は、畳み込み層、プーリング層、および完全に接続された層で構成されています。'],
  }
])

onMounted(() => {
  console.log('current day  :', currentDay.value);
  console.log('current time :', currentTime.value);
});
</script>