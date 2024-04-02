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
            <div class="wrapper" key="app-wrpper">
                <Table key="app-table" ref="table" class="table" 
                    :columns="table.columns" 
                    :data="table.rows" 
                    :sticky-left-column="true" 
                    :sticky-right-column="true"
                    :sticky-header="true"
                    >
                    <template v-slot:email="{ value }">
                        <a :href="`mailto:${value}`">{{ value }}</a>
                    </template>
                    <template v-slot:action="{ row, cellElement }">
                        <Dropdown label="Actions" :boundaries-element="$refs.table && $refs.table.$el"
                            @open="dropdownOpen(cellElement)"
                            @close="dropdownClose(cellElement)">
                            <DropdownItem>Move {{ row.id }}</DropdownItem>
                            <DropdownItem>Edit {{ row.id }}</DropdownItem>
                            <DropdownItem>Delete {{ row.id }}</DropdownItem>
                        </Dropdown>
                    </template>
                </Table>
            </div>
        </transition-group>
    </va-page>
</template>

<script>
import * as users from '../../constants/users';
export default {
    components: {  },
    data() {
        return {
            table: {
                columns: [
                    { id: 'id',  name: 'id', label: 'ID' },
                    { id: 'first_name',name: 'first_name', label: 'Firstname' },
                    { id: 'last_name',name: 'last_name', label: 'Lastname' },
                    { id: 'email', name: 'email', label: 'Email' },
                    { id: 'gender', name: 'gender', label: 'Gender' },
                    { id: 'country', name: 'country', label: 'Country' },
                    { id: 'status',  name: 'status', label: 'Status' },
                    { id: 'address', name: 'address', label: 'Address' },
                    { id: 'date_created',  name: 'date_created', label: 'Date Created' },
                    { id: 'last_accessed',name: 'last_accessed', label: 'Last Accessed' },
                    { id: 'coordinate', name: 'coordinate', label: 'Coordinate' },
                    { id: 'action', name: 'action', label: 'Action' },
                ],
                rows: [],
            },
            fetching: false,

        };
    },
    created() {
        this.paginate();
    },
    methods: {        
        dropdownOpen(cellElement) {
            if (cellElement) {
                cellElement.setAttribute('with-dropdown', '');
            }
        },
        dropdownClose(cellElement) {
            if (cellElement) {
                cellElement.removeAttribute('with-dropdown');
            }
        },
        paginate() {
            let self = this;
            self.fetching = true;
            setTimeout(function () {
                self.fetching = false;
                self.table.rows = users.USERS;
            }, 1000);
        },
    }
};
</script>

<style scoped>
.wrapper {
    max-height: 500px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
}

>>>.table-row-cell[with-dropdown] {
    z-index: 100;
}
</style>