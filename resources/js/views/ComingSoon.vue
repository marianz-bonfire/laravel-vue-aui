<template>
    <va-page size="lg">
        <va-loading v-if="$root.loading" size="lg" color="black" center>
        </va-loading>
        <transition-group>
            <va-page-header key="app-header">
                <div slot="breadcrumb">
                    <va-breadcrumb separator="»">
                        <va-breadcrumb-item :to="{ path: '/home' }">Home</va-breadcrumb-item>
                        <va-breadcrumb-item>Dashboard</va-breadcrumb-item>
                    </va-breadcrumb>
                </div>
                <div slot="subtitle">
                    <span class="page-subtitle">Dashboard</span>
                </div>
                <div slot="actions">
                    <va-button type="danger">
                        <va-icon type="add" icon-style="regular" margin="0 7px 0 0"></va-icon>
                        Add
                    </va-button>
                    <va-button type="default">
                        <va-icon type="edit" icon-style="regular" margin="0 7px 0 0"></va-icon>
                        Edit
                    </va-button>
                    <va-button round type="help"><va-icon type="question-circle" /></va-button>
                    <va-button round type="default"><va-icon type="filter" /></va-button>
                    <va-button type="subtle" round @click="$refs.myAside.open()">
                        <va-icon type="star"></va-icon>
                    </va-button>
                </div>
            </va-page-header>
            <coming-soon></coming-soon>
        </transition-group>       
    </va-page>
</template>

<script>
import ComingSoon from '../components/Messages/ComingSoon.vue';
import * as users from '../constants/users';
export default {

    components: {
        ComingSoon
    },
    data() {
        return {
            accordion: true,
            width: 400,
            rounded: true,
            centered: true,
            animated: true,
            image: true,

            desktopTopbarHeight: 0,
            desktopMinibarWidth: 50,
            desktopSidebarWidth: 240,

            mobileTopbarHeight: 50,
            mobileMinibarWidth: 0,
            mobileSidebarWidth: 0,

            selectValue: '',

            options: [
                { value: 'cat', label: 'Cat' },
                { value: 'dog', label: 'Dog' },
                { value: 'wallaby', label: 'Wallaby' },
                { value: 'bear', label: 'Bear' },
                { value: 'kangaroo', label: 'Kangaroo' }
            ],
            mbTopItems: [
                { icon: 'vuejs', brand: true, iconStyle: 'brands', size: '22px', tooltip: 'Made with Vue.js' },
                { icon: 'search', tooltip: 'Search', method: this.showAside },
                { icon: 'user', tooltip: 'Account' }
            ],
            mbBottomItems: [{ icon: 'question-circle' }],
            groupOneItems: [
                { name: 'Sandbox', route: '/' },
                { name: 'Somewhere', route: '/somewhere' }
            ],
            groupTwoItems: [
                {
                    name: 'External',
                    children: [
                        { name: 'GitHub', external: 'https://github.com/nvms/vue-atlas', icon: 'github-alt', iconStyle: 'brands' },
                        { name: 'npm', external: 'https://www.npmjs.com/package/vue-atlas', icon: 'npm', iconStyle: 'brands' }
                    ]
                }
            ],
            table: {
                columns: [
                    { name: 'id', label: 'ID' },
                    { name: 'first_name', label: 'Firstname' },
                    { name: 'last_name', label: 'Lastname' },
                    { name: 'email', label: 'Email' },
                    { name: 'gender', label: 'Gender' },
                    { name: 'country', label: 'Country' },
                    { name: 'status', label: 'Status' },
                    { name: 'address', label: 'Address' },
                    { name: 'date_created', label: 'Date Created' },
                    { name: 'last_accessed', label: 'Last Accessed' },
                    { name: 'coordinate', label: 'Coordinate' },
                ],
            },
            tableData: {
                currentSort: 'id',
                currentSortDir: 'asc',
                max: 5,
                pageSize: 10,
                currentPage: 1,
            },
            activePagedItems: [],
            sortedItems: [],
            fetching: true,
        }

    },
    created() {
        this.paginate();
    },
    computed: {
        sortedCats() {
            this.sortedItems = this.tableData.rows.sort((a, b) => {
                let modifier = 1;
                if (this.tableData.currentSortDir === 'desc') modifier = -1;
                if (a[this.tableData.currentSort] < b[this.tableData.currentSort]) return -1 * modifier;
                if (a[this.tableData.currentSort] > b[this.tableData.currentSort]) return 1 * modifier;
            }).filter((row, index) => {
                let start = (this.tableData.currentPage - 1) * this.tableData.pageSize;
                let end = this.tableData.currentPage * this.tableData.pageSize;
                if (index >= start && index < end) return true;
            });
            return this.sortedItems;
        }
    },
    methods: {
        paginate() {
            let self = this;
            self.fetching = true;
            //self.$root.processing(true);
            setTimeout(function () {
                //self.$root.processing(false);
                self.fetching = false;
                self.tableData.columns = self.table.columns;
                self.tableData.rows = users.USERS;
            }, 1000);

        },
        pagedItemsChange(e) {
            console.log(e);
            this.activePagedItems.splice(0, this.activePagedItems.length)
            let start = e.perPage * (e.pageNumber - 1)
            let end = start + e.perPage
            if (end > this.tableData.rows.length) {
                end = this.tableData.rows.length
            }
            for (let i = start; i < end; i++) {
                this.activePagedItems.push(this.tableData.rows[i])
            }
        },
        sort(column) {
            //if s == current sort, reverse
            if (column === this.tableData.currentSort) {
                this.tableData.currentSortDir = this.tableData.currentSortDir === 'asc' ? 'desc' : 'asc';
            }
            this.tableData.currentSort = column;
        },
        showWarningNotification() {
            this.notification.warning({
                title: 'Change default MySQL password to something other than "root"',
                message: `For security reasons, make sure you change the password of the MySQL
user 'root' to something other than 'root' when you publish this application.
<br/>
<br/>
<a href='#'>Instructions</a>`,
                duration: 0
            })
        },
        showModal() {
            this.$refs.modal.open()
        },
        modalConfirm() {
            console.log('Glad you agree.')
            this.$refs.modal.close()
        },
        showAside() {
            this.$refs.myAside.open()
        }
    }
}
</script>

<style lang="scss" scoped>
.side-info {
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #f3f4f6;
}

.center-text {
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
}
.pagination-section {
    margin-top: 10px;
}
</style>