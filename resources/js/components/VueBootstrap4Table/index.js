/*
// Import vue component
import component from './components/VueBootstrap4Table.vue';

// Declare install function executed by Vue.use()
export function install(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.component('VueBootstrap4Table', component);
}

// Create module definition for Vue.use()
const plugin = {
    install,
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
}
if (GlobalVue) {
    GlobalVue.use(plugin);
}

// To allow use as module (npm/webpack/etc.) export component
export default component;
*/
import VueBootstrap4Table from './components/VueBootstrap4Table.vue';

const VueBootstrap4TablePlugin = {
  install(Vue, options) {
    Vue.component(VueBootstrap4Table.name, VueBootstrap4Table);
  },
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueBootstrap4TablePlugin);
}

export default VueBootstrap4TablePlugin;
export { VueBootstrap4Table };

