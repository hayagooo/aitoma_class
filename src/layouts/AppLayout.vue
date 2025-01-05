<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div id="container" class="text-base-content min-h-screen bg-base-300">
                <div class="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                    <div class="drawer-content flex flex-col items-center justify-center">
                        <div class="min-h-screen bg-base-200 w-full">
                            <div class="w-full bg-base-200 p-2 flex items-center justify-between">
                                <div>
                                    <label for="my-drawer-2" class="btn bg-base-100 drawer-button lg:hidden">
                                        <Icon icon="ic:round-menu" class="w-6 h-6" />
                                    </label>
                                </div>
                                <div class="md:w-[20rem] w-3/4 rounded-l-2xl shadow-xl bg-base-100 text-base-content fixed top-0 z-10 p-4 transition-all h-[100vh] overflow-auto" :class="{'-right-[12rem] invisible opacity-0': !showNotification, 'right-0 visible': showNotification}">
                                    <div class="w-full flex items-center justify-between">
                                        <h1 class="text-xl font-bold">{{ vocab[8][selectedLanguage] }} ({{ notifications.length }})</h1>
                                        <button @click="toggleNotification()" class="btn bg-base-100/0 px-3">
                                            <Icon icon="ic:round-close" class="text-xl"/>
                                        </button>
                                    </div>
                                    <div class="space-y-2">
                                        <div v-for="(notification, index) in notifications" :key="index" class="p-3 rounded-xl hover:bg-base-200/60 transition-all cursor-pointer" :class="{'bg-base-200': !notification.is_read}">
                                            <h2 class="font-bold text-sm">{{ notification.title[selectedLanguage] }}</h2>
                                            <p class="text-xs">{{ notification.description[selectedLanguage] }}</p>
                                            <div class="flex justify-end">
                                                <p class="text-xs mt-2">{{ formatDateTimeNotification(notification.created_at[selectedLanguage]) }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex items-center space-x-2">
                                    <button @click="toggleNotification()" class="btn bg-base-100/0 px-3">
                                        <Icon icon="iconamoon:notification-fill" class="text-xl"/>
                                    </button>
                                    <div class="dropdown dropdown-end">
                                        <div tabindex="0" class="avatar">
                                            <button class="btn bg-base-100/0 px-3">
                                                <Icon icon="tabler:language" class="text-xl"/>
                                            </button>
                                        </div>
                                        <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                            <li v-for="(language, index) in languages" :key="index">
                                                <a @click="changeSelectedLanguage(index), selectedLanguage = index" :class="{'bg-base-200 text-primary': selectedLanguage == index}"><span>{{ language.name }}</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="dropdown dropdown-end">
                                        <div tabindex="0" class="avatar">
                                            <div class="mask mask-squircle w-12">
                                                <img src="/avatar.png" alt="Avatar"/>
                                            </div>
                                        </div>
                                        <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                            <li><a>{{ vocab[6][selectedLanguage] }}</a></li>
                                            <li><a>{{ vocab[7][selectedLanguage] }}</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="p-3 bg-base-100 w-full rounded-tl-2xl min-h-[92vh]">
                                <slot :selectedLanguage="selectedLanguage"></slot>
                            </div>
                        </div>
                    </div>
                    <div class="drawer-side">
                        <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
                        <ul class="menu bg-base-200 text-base-content min-h-full w-64 rounded-r-xl p-4 space-y-1">
                            <li class="bg-base-200 hover:bg-base-200 mb-3">
                                <img src="/AitomaClass.png" alt="Logo">
                            </li>
                            <li class="hover:bg-gradient-to-r bg-gradient-to-r rounded-xl from-base-300">
                                <button onclick="university_modal.showModal()" class="p-3 flex items-center gap-3">
                                    <div class="avatar">
                                        <div class="mask mask-circle w-10">
                                            <img src="/hayago.png" alt="Avatar"/>
                                        </div>
                                    </div>
                                    <div class="relative">
                                        <h2 class="font-bold">Hayago University</h2>
                                        <p class="text-xs">{{ vocab[9][selectedLanguage] }}</p>
                                    </div>
                                </button>
                            </li>
                            <li><a @click="routerPush(vocab[0][1])" class="hover:bg-white transition-all" :class="{'bg-white font-bold text-blue-600': title == 'Home'}">{{ vocab[0][selectedLanguage] }}</a></li>
                            <li><a @click="routerPush(vocab[1][1])" class="hover:bg-white transition-all" :class="{'bg-white font-bold text-blue-600': title == 'Schedule'}">{{ vocab[1][selectedLanguage] }}</a></li>
                            <li><a @click="routerPush(vocab[2][1])" class="hover:bg-white transition-all" :class="{'bg-white font-bold text-blue-600': title == 'Assignment'}">{{ vocab[2][selectedLanguage] }}</a></li>
                            <li><a @click="routerPush(vocab[3][1])" class="hover:bg-white transition-all" :class="{'bg-white font-bold text-blue-600': title == 'Material'}">{{ vocab[3][selectedLanguage] }}</a></li>
                        </ul>
                    </div>
                    <dialog id="university_modal" class="modal" role="dialog">
                        <div class="modal-box p-4">
                            <div class="flex w-full items-center">
                                <h3 class="text-lg font-bold">Choose Class</h3>
                                <form method="dialog" for="university_modal" class="btn btn-square ml-auto">
                                    <button class="btn">
                                        <Icon icon="ic:round-close" class="text-xl"/>
                                    </button>
                                </form>
                            </div>
                            <p class="py-4">This modal works with a hidden checkbox!</p>
                        </div>
                    </dialog>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { Icon } from '@iconify/vue';
import { IonPage, IonContent } from '@ionic/vue';
import { defineComponent, onMounted, provide, ref, computed} from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
    components: {
        Icon,
        IonPage,
        IonContent
    },
    props: {
        title: String,
    },
    setup() {
        const store = useStore()
        const selectedLanguage = computed(() => store.state.selectedLanguage);
        const vocab = [
            ['Beranda', 'Home', 'ホーム' ],
            ['Jadwal', 'Schedule', 'スケジュール' ],
            ['Tugas', 'Assignment', '課題' ],
            ['Materi', 'Material', '材料' ],
            ['Pengumuman', 'Announcement', 'お知らせ' ],
            ['Pengaturan', 'Setting', '設定' ],
            ['Profil', 'Profile', 'プロフィール' ],
            ['Keluar', 'Logout', 'ログアウト' ],
            ['Notifikasi', 'Notification', '通知' ],
            ['Teknik Elektronika', 'Electronics Engineering', '電子工学' ],
        ];
        const languages = [
            { name: 'Indonesia', icon: 'tabler:flag-id' },
            { name: 'English', icon: 'tabler:flag-us' },
            { name: 'Japanese', icon: 'tabler:flag-jp' },
        ];
        const notifications = [
            {
                title: ['Absen Mata Kuliah Teknik Elektronika', 'Electronics Engineering Class Attendance', '電子工学の授業出席'],
                description: ['Absen mata kuliah Teknik Elektronika harus dilakukan sebelum tanggal 31 Desember 2022 pukul 23:59:59.', 'Electronics Engineering class attendance must be done before December 31, 2022 at 23:59:59.', '電子工学の授業出席は、2022年12月31日23時59分59秒までに行う必要があります。'],
                created_at: ['2022-12-31 23:59:59', '2022-12-31 23:59:59', '2022-12-31 23:59:59'],
                is_read: false,
            },
            {
                title: ['Absen Mata Kuliah Teknik Elektronika', 'Electronics Engineering Class Attendance', '電子工学の授業出席'],
                description: ['Absen mata kuliah Teknik Elektronika harus dilakukan sebelum tanggal 31 Desember 2022 pukul 23:59:59.', 'Electronics Engineering class attendance must be done before December 31, 2022 at 23:59:59.', '電子工学の授業出席は、2022年12月31日23時59分59秒までに行う必要があります。'],
                created_at: ['2022-12-31 23:59:59', '2022-12-31 23:59:59', '2022-12-31 23:59:59'],
                is_read: false,
            },
            {
                title: ['Absen Mata Kuliah Teknik Elektronika', 'Electronics Engineering Class Attendance', '電子工学の授業出席'],
                description: ['Absen mata kuliah Teknik Elektronika harus dilakukan sebelum tanggal 31 Desember 2022 pukul 23:59:59.', 'Electronics Engineering class attendance must be done before December 31, 2022 at 23:59:59.', '電子工学の授業出席は、2022年12月31日23時59分59秒までに行う必要があります。'],
                created_at: ['2022-12-31 23:59:59', '2022-12-31 23:59:59', '2022-12-31 23:59:59'],
                is_read: false,
            },
            {
                title: ['Absen Mata Kuliah Teknik Elektronika', 'Electronics Engineering Class Attendance', '電子工学の授業出席'],
                description: ['Absen mata kuliah Teknik Elektronika harus dilakukan sebelum tanggal 31 Desember 2022 pukul 23:59:59.', 'Electronics Engineering class attendance must be done before December 31, 2022 at 23:59:59.', '電子工学の授業出席は、2022年12月31日23時59分59秒までに行う必要があります。'],
                created_at: ['2022-12-31 23:59:59', '2022-12-31 23:59:59', '2022-12-31 23:59:59'],
                is_read: false,
            },
            {
                title: ['Absen Mata Kuliah Teknik Elektronika', 'Electronics Engineering Class Attendance', '電子工学の授業出席'],
                description: ['Absen mata kuliah Teknik Elektronika harus dilakukan sebelum tanggal 31 Desember 2022 pukul 23:59:59.', 'Electronics Engineering class attendance must be done before December 31, 2022 at 23:59:59.', '電子工学の授業出席は、2022年12月31日23時59分59秒までに行う必要があります。'],
                created_at: ['2022-12-31 23:59:59', '2022-12-31 23:59:59', '2022-12-31 23:59:59'],
                is_read: false,
            },
            {
                title: ['Absen Mata Kuliah Teknik Elektronika', 'Electronics Engineering Class Attendance', '電子工学の授業出席'],
                description: ['Absen mata kuliah Teknik Elektronika harus dilakukan sebelum tanggal 31 Desember 2022 pukul 23:59:59.', 'Electronics Engineering class attendance must be done before December 31, 2022 at 23:59:59.', '電子工学の授業出席は、2022年12月31日23時59分59秒までに行う必要があります。'],
                created_at: ['2022-12-31 23:59:59', '2022-12-31 23:59:59', '2022-12-31 23:59:59'],
                is_read: false,
            },
            {
                title: ['Tugas Besar Pemrograman Web', 'Web Programming Big Task', 'ウェブプログラミングの大きな課題'],
                description: ['Tugas besar Pemrograman Web harus dikumpulkan sebelum tanggal 31 Desember 2022 pukul 23:59:59.', 'Web Programming big task must be submitted before December 31, 2022 at 23:59:59.', 'ウェブプログラミングの大きな課題は、2022年12月31日23時59分59秒までに提出する必要があります。'],
                created_at: ['2022-12-31 23:59:59', '2022-12-31 23:59:59', '2022-12-31 23:59:59'],
                is_read: false,
            },
            {
                title: ['Laporan Akhir Minimum System', 'Minimum System Final Report', '最小システム最終レポート'],
                description: ['Laporan akhir Minimum System harus dikumpulkan sebelum tanggal 31 Desember 2022 pukul 23:59:59.', 'Minimum System final report must be submitted before December 31, 2022 at 23:59:59.', '最小システムの最終レポートは、2022年12月31日23時59分59秒までに提出する必要があります。'],
                created_at: ['2022-12-31 23:59:59', '2022-12-31 23:59:59', '2022-12-31 23:59:59'],
                is_read: true,
            }, 
            {
                title: ['Laporan Akhir PLC dan SCADA', 'PLC and SCADA Final Report', 'PLCとSCADAの最終レポート'],
                description: ['Laporan akhir PLC dan SCADA harus dikumpulkan sebelum tanggal 31 Desember 2022 pukul 23:59:59.', 'PLC and SCADA final report must be submitted before December 31, 2022 at 23:59:59.', 'PLCとSCADAの最終レポートは、2022年12月31日23時59分59秒までに提出する必要があります。'],
                created_at: ['2022-12-31 23:59:59', '2022-12-31 23:59:59', '2022-12-31 23:59:59'],
                is_read: true,
            }
        ]
        const showNotification = ref(false);
        onMounted(() => {
            const html = document.querySelector('html');
            html?.setAttribute('data-theme', 'light');
        })

        function toggleNotification() {
            showNotification.value = !showNotification.value;
            // disable html and body scroll when notification is opened
            const html = document.querySelector('html');
            const body = document.querySelector('body');
            const ionPage = document.getElementById('container');
            if (showNotification.value) {
                html?.classList.add('max-h-screen h-[100vh] overflow-hidden');
                body?.classList.add('max-h-screen h-[100vh] overflow-hidden');
                ionPage?.classList.add('max-h-screen h-[100vh] overflow-hidden');
            } else {
                html?.classList.remove('max-h-screen h-[100vh] overflow-hidden');
                body?.classList.remove('max-h-screen h-[100vh] overflow-hidden');
                ionPage?.classList.remove('max-h-screen h-[100vh] overflow-hidden');
            }
        }

        return {
            selectedLanguage,
            vocab,
            languages,
            notifications,
            showNotification,
            toggleNotification,
        };
    },
})
</script>