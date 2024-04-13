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
                    { icon: 'dollar', tooltip: 'Banking', size: this.$root.config.minibar.iconSize, method: this.showBanking },
                    { icon: 'project-diagram', tooltip: 'Projects', size: this.$root.config.minibar.iconSize, method: this.showProjects },
                    { icon: 'minus', tooltip: 'Payables', size: this.$root.config.minibar.iconSize, method: this.showPayables },
                    { icon: 'plus', tooltip: 'Receivables', size: this.$root.config.minibar.iconSize, method: this.showReceivables },
                    { icon: 'file-invoice-dollar', tooltip: 'Sales Orders', size: this.$root.config.minibar.iconSize, method: this.showSalesOrder },
                    { icon: 'shopping-cart', tooltip: 'Purchases', size: this.$root.config.minibar.iconSize, method: this.showPurchases },
                    { icon: 'truck', tooltip: 'Inventory', size: this.$root.config.minibar.iconSize, method: this.showInventory },
                    { icon: 'money', tooltip: 'Payroll', size: this.$root.config.minibar.iconSize, method: this.showPayroll },
                    { icon: 'users', tooltip: 'Users', size: this.$root.config.minibar.iconSize, method: this.showUsers },
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
        showBanking() {
            this.$root.sidebar.groups = menus.BANKING;
            this.showSideBar(true);
        },
        showProjects() {
            this.$root.sidebar.groups = menus.PROJECTS;
            this.showSideBar(true);
        },
        showPayables() {
            this.$root.sidebar.groups = menus.PAYABLES;
            this.showSideBar(true);
        },
        showReceivables() {
            this.$root.sidebar.groups = menus.RECEIVABLES;
            this.showSideBar(true);
        },
        showSalesOrder() {
            this.$root.sidebar.groups = menus.SALES_ORDERS;
            this.showSideBar(true);
        },
        showPurchases() {
            this.$root.sidebar.groups = menus.PURCHASES;
            this.showSideBar(true);
        },
        showInventory() {
            this.$root.sidebar.groups = menus.INVENTORY;
            this.showSideBar(true);
        },
        showPayroll() {
            this.$root.sidebar.groups = menus.PAYROLLS;
            this.showSideBar(true);
        },
        showUsers() {
            this.$root.sidebar.groups = menus.USERS;
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