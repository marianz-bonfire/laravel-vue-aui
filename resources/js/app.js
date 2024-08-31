/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue';
import Va from 'vue-atlas';
import 'vue-atlas/dist/vue-atlas.css';
import VueInternationalization from 'vue-i18n';
import VueInputMask from "vue-inputmask";
import AtlasKit from './components/AtlasKit';
import Locale from './vue-i18n-locales.generated';

Vue.use(Va, 'en');
Vue.use(AtlasKit);

//Vue.use(VueRouter);
Vue.use(VueInternationalization);
Vue.use(VueInputMask.default);

const lang = document.documentElement.lang.substr(0, 2);

const i18n = new VueInternationalization({
    locale: lang,
    messages: Locale
});


Vue.component('modal', require('./components/Modal/Modal.vue').default);
Vue.component('alert', require('./components/Messages/Alert.vue').default);
Vue.component('dialog-box', require('./components/Messages/DialogBox.vue').default);

// Layouts
Vue.component('top-bar', require('./layouts/TopBar.vue').default);
Vue.component('mini-bar', require('./layouts/MiniBar.vue').default);
Vue.component('side-bar', require('./layouts/SideBar.vue').default);
Vue.component('side-content', require('./layouts/SideContent.vue').default);
Vue.component('page-header', require('./layouts/PageHeader.vue').default);
Vue.component('page-footer', require('./layouts/PageFooter.vue').default);
Vue.component('settings-top-bar', require('./layouts/SettingsTopBar.vue').default);

Vue.component('core', require('./views/Core.vue').default);
Vue.component('login', require('./views/Login.vue').default);
Vue.component('dashboard', require('./views/Dashboard.vue').default);
Vue.component('coming-soon-page', require('./views/ComingSoon.vue').default);


Vue.component('settings-profile', require('./views/Settings/Profile.vue').default);
Vue.component('settings-security', require('./views/Settings/Security.vue').default);
Vue.component('settings-verification', require('./views/Settings/SecurityVerification.vue').default);
Vue.component('settings-tokens', require('./views/Settings/SecurityTokens.vue').default);
Vue.component('settings-recent-devices', require('./views/Settings/SecurityRecentDevices.vue').default);
Vue.component('settings-connected-apps', require('./views/Settings/ConnectedApps.vue').default);
Vue.component('settings-preferences', require('./views/Settings/Preferences.vue').default);
Vue.component('settings-email', require('./views/Settings/EmailSetup.vue').default);

Vue.component('users', require('./views/Users/List.vue').default);
Vue.component('users-detail', require('./views/Users/Detail.vue').default);

Vue.component('departments', require('./views/Departments/List.vue').default);
Vue.component('positions', require('./views/Positions/List.vue').default);


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    i18n,
    data() {
        return {
            app: {
                name: 'AUI Tarsier',
                version: '1.3.23.2024',
            },
            config: {
                desktopSidebarWidth: 0,
                desktopMinibarWidth: 50,
                desktopTopbarHeight: 50,

                mobileSidebarWidth: 0,
                mobileMinibarWidth: 0,
                mobileTopbarHeight: 50,

                sidebarPriority: false,
                minibarPriority: false,
                topbarPriority: false,
                topbarPadded: false,
                rtl: false,
                reverse: false,
                split: false,

                asidePlacement: 'right',
                asideWidth: 500,
                gridGutter: 15,
                cardElevation: 0,
                cardPadding: 20,
                size: 'lg',
                article: true,

                hover: true,

                tooltip: {
                    placement: 'right',
                    effect: 'tooltip-fade-right'
                },
                minibar: {
                    iconSize: '1em',
                    desktopWidth: 50,
                    mobileWidth: 0,
                },

                placeholder: {
                    rounded: true,
                    centered: true,
                    animated: true,
                    image: true,
                },
                theme: {
                    topbar: 'blue',
                    minibar: 'dark',
                }
            },
            sidebar: {
                theme: 'darker',
                visible: false,
                toggler: 'top',
                showToggle: false,
                groups: [],
            },
            aside: {
                visible: false,
            },
            loading: false,
        }
    },
    created() {
       this.initStoredSidebar();
    },
    mounted() {

    },
    methods: {
        initStoredSidebar() {
            const storedSidebar = JSON.parse(localStorage.getItem('sidebar') || '{}');
            if (!!storedSidebar && !_.isEmpty(storedSidebar)) {
                this.sidebar.groups = storedSidebar.groups;
                let sidebarVisibility = Boolean(storedSidebar.visible);
                this.showSideBar(sidebarVisibility);
            }
        },
        showSideBar(value) {
            this.config.desktopSidebarWidth = value == true ? 240 : 0;
            this.sidebar.visible = value;
            localStorage.setItem("sidebar", JSON.stringify(this.sidebar));
        },
        showAside() {
            this.$refs.rigthAside.open();
        },
        processing(value) {
            this.loading = value;
        },

    }
});
