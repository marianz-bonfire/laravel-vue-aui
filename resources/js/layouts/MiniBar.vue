<template>
    <keep-alive>
        <va-minibar :theme="$root.config.theme.minibar" :top-items="items.top" :bottom-items="items.bottom" />
    </keep-alive>
</template>
<script>
import * as menus from '../constants/menu';
export default {
    data() {
        return {
            items: {
                top: [
                    {
                        icon: this.$root.sidebar.visible ? 'close' : 'bars',
                        size: this.$root.config.minibar.iconSize,
                        method: this.toggleSidebar
                    },
                    { icon: 'tachometer-alt', tooltip: 'Dashboards', name: 'Dashboards', size: this.$root.config.minibar.iconSize, method: this.showDashboard },
                    { icon: 'clock', tooltip: 'Time and Expenses', name: 'Time and Expenses', size: this.$root.config.minibar.iconSize, method: this.showTimeExpenses },
                    { icon: 'calculator', tooltip: 'Finance', size: this.$root.config.minibar.iconSize, method: this.showFinance },
                    { icon: 'dollar', tooltip: 'Banking', size: this.$root.config.minibar.iconSize, method: this.showModules },
                    { icon: 'project-diagram', tooltip: 'Projects', size: this.$root.config.minibar.iconSize, method: this.showModules },
                    { icon: 'minus', tooltip: 'Payables', size: this.$root.config.minibar.iconSize, method: this.showModules },
                    { icon: 'plus', tooltip: 'Receivables', size: this.$root.config.minibar.iconSize, method: this.showModules },
                    { icon: 'file-invoice-dollar', tooltip: 'Sales Orders', size: this.$root.config.minibar.iconSize, method: this.showModules },
                    { icon: 'shopping-cart', tooltip: 'Purchases', size: this.$root.config.minibar.iconSize, method: this.showModules },
                    { icon: 'truck', tooltip: 'Inventory', size: this.$root.config.minibar.iconSize, method: this.showModules },
                    { icon: 'money', tooltip: 'Payroll', size: this.$root.config.minibar.iconSize, method: this.showModules },
                    { icon: 'ellipsis-v', tooltip: 'More Items', size: this.$root.config.minibar.iconSize, method: this.showModules },
                ],
                bottom: [
                    {
                        icon: 'cog',
                        size: '1.5em',
                        tooltip: 'Settings',
                        method: this.showSettings
                    },
                    {
                        icon: 'question-circle',
                        size: '1.5em',
                        tooltip: 'Version: ' + this.$root.app.version,
                        method: this.showModules
                    }
                ]
            },
            sidebarVisibility: this.$root.sidebar.visible,
        }
    },
    methods: {
        toggleSidebar() {
            this.showSideBar(!this.$root.sidebar.visible);
        },
        showSideBar(value) {
            this.items.top[0].icon = value ? 'close' : 'bars';
            this.$forceUpdate();
            this.$root.showSideBar(value);
        },
        showDashboard() {
            this.$root.sidebar.groups = menus.DASHBOARD;
            this.showSideBar(true);
        },
        showTimeExpenses() {
            this.$root.sidebar.groups = menus.TIME_AND_EXPENSES;
            this.showSideBar(true);
        },
        showFinance() {
            this.$root.sidebar.groups = menus.FINANCE;
            this.showSideBar(true);
        },
        showModules(event) {
            console.log(event);
        },
        showSettings() {
            this.VaModal.confirm({
                title: 'Hello!',
                message: `This modal exists to show how methods can be applied to Minibar items.`,
                type: 'info'
            })
        }
    }
}
</script>