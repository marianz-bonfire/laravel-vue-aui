<template>
    <div class="dashboard module-container">
        <div class="module-content overflow-auto">
            <datatable
                :header-fields="table.header"
                :settings="table.settings"
                :table="table.values"
                v-on:update-row="updateRow"
                v-on:delete-row="deleteRow"
                v-on:add-row="addRow">
                <template slot="content">
                    <table-row
                        v-for="(tableData, tableDataIndex) in table.values.data" :key="tableDataIndex"
                        :values="tableData"
                        :settings="table.settings"
                        :rowIndex="tableDataIndex">
                        <td class="datatable-cell">
                            <input type="text" class="form-control" disabled v-model="tableData.branches">
                        </td>
                        <td class="datatable-cell">
                            <input type="text" class="form-control" disabled v-model="tableData.last_name">
                        </td>
                        <td class="datatable-cell">
                            <select class="form-control" disabled v-model="tableData.status">
                                <option :value="1">Active</option>
                                <option :value="0">Inactive</option>
                            </select>
                        </td>
                        <td class="datatable-cell">
                            <button class="button button--primary" disabled>Click Me</button>
                        </td>
                        <td class="datatable-cell">
                            <input type="button" class="button button--primary" disabled value="Click Me">
                        </td>
                    </table-row>
                    <table-row
                        class="datatable-row--add"
                        type="add"
                        :values="table.add"
                        :settings="table.settings">
                        <td class="datatable-cell">
                            <input type="text" autofocus class="form-control" v-model="table.add.branches">
                        </td>
                        <td class="datatable-cell">
                            <input type="text" class="form-control" v-model="table.add.first_name">
                        </td>
                        <td class="datatable-cell">
                            <select class="form-control" v-model="table.add.status">
                                <option :value="1">Active</option>
                                <option :value="0">Inactive</option>
                            </select> 
                        </td>
                        <td class="datatable-cell">
                            <button class="button button--primary">Click Me</button>
                        </td>
                        <td class="datatable-cell">
                            <input type="button" class="button button--primary" value="Click Me">
                        </td>
                    </table-row>
                </template>
            </datatable>
        </div>
    </div>
</template>

<script>
    import Datatable from '../../components/Datatable2/Datatable';
    import TableRow from '../../components/Datatable2/TableRow';

    export default {
        components: {
            Datatable,
            TableRow
        },
        methods: {
            setStatus(status) {
                return (status) ? 'Active' : 'Inactive';
            },
            updateRow(data) {

            },
            deleteRow(data) {

            },
            addRow(data) {
                this.table.values.data.push(data);

                this.table.add = {
                    branches: '',
                    first_name: '',
                    active: false
                }
            }
        },
        data() {
            return {
                table: {
                    header: [
                        {
                            name: "branches",
                            label: this.$t('label.branches'),
                            width: '150'
                        },
                        {
                            name: "first_name",
                            label: 'First Name',
                            width: '150'
                        },
                        {
                            name: "status",
                            label: 'Status',
                            width: '150'
                        },
                        {
                            name: "button",
                            label: '',
                            width: '150'
                        },
                        {
                            name: "button",
                            label: '',
                            width: '150'
                        }
                    ],
                    values: {
                        data: [
                            {
                                branches: 'SM North',
                                first_name: 187000.01,
                                status: 1,
                            },
                            {
                                branches: 'TriNoma',
                                first_name: 187000.01,
                                status: 0,
                            },
                            {
                                branches: 'SM Baclaran',
                                first_name: 187000.01,
                                status: 1,
                            }
                        ],
                        meta: {
                            pagination: {
                                count: 1,
                                current_page: 1,
                                links: {},
                                per_page: 10,
                                total: 1,
                                total_pages: 1
                            }
                        }
                    },
                    add: {
                        branches: '',
                        first_name: '',
                        status: false
                    },
                    settings: {
                        itemsPerPage: 10,
                        withRowNumbers: true,
                        hasEdit: true,
                        hasDelete: true,
                        hasAdd: true
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .dashboard {
        .module-content {
            background-color: #f9f9f9;
            display: flex;
            flex-direction: column;
        }
    }
    .data-center-logo-name {
        color: #3d5c99;
        font-size: 200px;
        font-family: Cambria;
        font-weight: bold;
        cursor: default;
    }
    .dashboard {
        &-system-title {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex: 1;
        }
        &-system-logo {
            margin-bottom: 15px;
        }
        &-system-name {
            font-family: "Aldrich-Regular";
            color: #17568C;
            text-shadow: -1px 0 #0f436d, 0 1px #0f436d, 1px 0 #0f436d, 0 -1px #0f436d;
            text-align: center;
            font-size: 40px;
            line-height: 1.2;
        }
    }
    .dashboard-table {
        display: none;
        border: 1px #ccc solid;
        margin: 15px;
        table {
            width: 100%;
            thead {
                background-color: lighten(#000, 20%);
                th {
                    text-align: center;
                    padding: 4px;
                    font-size: 14px;
                    color: #fff;
                    border: 1px lighten(#000, 10%) solid;
                    font-weight: normal;
                    font-family: 'Arimo-Bold';
                    white-space: nowrap;
                    min-width: auto !important;
                    max-width: auto !important;
                }
            }
            tbody {
                tr {
                    border-top: 1px #ccc solid;
                    border-bottom: 1px #ccc solid;
                    &:nth-of-type(odd) {
                        background-color: #fff;
                    }
                    &:nth-of-type(even) {
                        background-color: #f2f2f2;
                    }
                    &.highlighted {
                        border: 1px #17568C solid;
                        background-color: lighten(#17568C, 60%);
                        td {
                            border-left: none;
                            border-right: none;
                            border-top: 1px #17568C solid;
                            border-bottom: 1px #17568C solid;
                        }
                    }
                }
            }
            td {
                border-left: 1px #ccc solid;
                border-right: 1px #ccc solid;
                padding: 4px;
                font-size: 14px;
                white-space: nowrap;
                min-width: auto !important;
                max-width: auto !important;
                input[type="text"], select {
                    width: 100%;
                    height: 25px;
                    padding: 4px 8px;
                    font-size: 14px;
                }
            }
            tfoot {
                tr {
                    background-color: lighten(#000, 20%);
                    td {
                        text-align: right;
                        padding: 4px;
                        font-size: 14px;
                        color: #fff;
                        border: 1px lighten(#000, 10%) solid;
                        white-space: nowrap;
                    }
                }
            }
        }
    }
</style>
