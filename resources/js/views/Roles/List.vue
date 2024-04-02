<template>
    <div class="module-container">
        <div class="module-content">
            <datatable
                class="datatable--black"
                :header-fields="table.header"
                :settings="table.settings"
                :table="table.values">
                <template slot="content">
                    <table-row
                        type="view"
                        v-for="(tableData, tableDataIndex) in table.values.data" :key="tableDataIndex"
                        :values="tableData"
                        :settings="table.settings"
                        :rowIndex="tableDataIndex">
                        <td class="datatable-cell">
                            <span v-text="tableData.id"></span>
                        </td>
                        <td class="datatable-cell">
                            <span v-text="tableData.role_name"></span>
                        </td>
                        <td class="datatable-cell">
                            <span v-text="tableData.description"></span>
                        </td>
                        <td class="datatable-cell">
                            <span
                                class="status-label w-100"
                                :class="tableData.status ? 'status-label--active' : 'status-label--inactive'"
                                v-text="tableData.status ? $t('label.active') : $t('label.inactive')">
                            </span> 
                        </td>
                        <td class="datatable-cell" align="center">
                            <span v-text="tableData.employees"></span>
                        </td>
                        <td class="datatable-cell" align="center">
                            <div class="dropdown">
                                <button class="btn btn-light dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fa fa-ellipsis-v fa-lg"></i>
                                </button>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" @click="viewRow(tableData, tableDataIndex)">
                                        <i class="fa fa-eye fa-lg"></i>
                                        {{ $t('label.view') }}
                                    </a>
                                    <a class="dropdown-item" @click="updateRow(tableData, tableDataIndex)">
                                        <i class="fa fa-edit fa-lg"></i>
                                        {{ $t('label.edit') }}
                                    </a>
                                    <a class="dropdown-item" href="#" @click="deleteRow(tableDataIndex)">
                                        <i class="fa fa-trash fa-lg"></i>
                                        {{ $t('label.delete') }}
                                    </a>
                                    <h6 class="dropdown-header">{{ $t('label.extra_actions') }}</h6>
                                    <a class="dropdown-item" @click="updatePermissions(tableData)">
                                        <i class="fa fa-lock fa-lg"></i>
                                        {{ $t('label.update_permissions') }}
                                    </a>
                                </div>
                            </div>
                        </td>
                    </table-row>
                </template>
            </datatable>
        </div>
        <side-navigation>
            <dropdown-menu-button
                icon="fa fa-print"
                direction="right"
            >
                <template slot="header">
                    {{ $t('label.export_options') }}
                </template>
                <template slot="content">
                    <table class="list">
                        <tr>
                            <td v-on:click="exportListAsPDF"><i class="fa fa-file-pdf-o"></i>{{ $t('label.as_pdf') }}</td>
                        </tr>
                        <tr>
                            <td v-on:click="exportListAsExcel"><i class="fa fa-file-excel-o"></i>{{ $t('label.as_excel') }}</td>
                        </tr>
                    </table>
                </template>
            </dropdown-menu-button>
            <dropdown-menu-button
                icon="fa fa-plus-square"
                direction="right"
                :isTooltip="true"
                @click.native="create">
                <template slot="header">
                    {{ $t('label.create_new_value', { value: this.$t('label.role') }) }}
                </template>
            </dropdown-menu-button>
        </side-navigation>
        <dialog-box
            :status="dialog.status"
            :type="dialog.type"
            :visible.sync="dialog.visible"
            @ok="dialog.ok.function"
            @cancel="dialog.cancel.function">
            <template slot="message">
                <span v-text="dialog.message"></span>
            </template>
        </dialog-box>
    </div>
</template>

<script>
    import Datatable from '../../components/Datatable2/Datatable.vue';
    import TableRow from '../../components/Datatable2/TableRow.vue';
    import TableData from '../../components/Datatable2/TableData.vue';

    export default {
        components: {
            Datatable,
            TableRow,
            TableData
        },
        data() {
            return {
                dialog: {
                    visible: false,
                    type: '',
                    message: '',
                    link: '',
                    ok: {
                        function: () => {},
                        function: () => {}
                    },
                    cancel: {
                        function: () => {
                            this.dialog.visible = false;
                        },
                        function: () => {}
                    },
                },
                table: {
                    header: [
                        {
                            name: "id", 
                            label: this.$t('label.id'),
                            width: '100'
                        },
                        {
                            name: "role_name",
                            label: this.$t('label.name'),
                            width: '150'
                        },
                        {
                            name: "description",
                            label: this.$t('label.description'),
                            width: '150'
                        },
                        {
                            name: "status",
                            label: this.$t('label.status'),
                            width: '100'
                        },
                        {
                            name: "employees",
                            label: this.$t('label.employees'),
                            width: '120'
                        },
                        {
                            name: "actions",
                            label: this.$t('label.actions'),
                            width: '90'
                        }
                    ],
                    values: {
                        data: [
                            {
                                id: '1001',
                                role_name: 'User 1',
                                description: 'This is a sample description.',
                                status: 1,
                                employees: 0
                            },
                            {
                                id: '1002',
                                role_name: 'User 2',
                                description: 'This is a sample description.',
                                status: 1,
                                employees: 0
                            },
                            {
                                id: '1003',
                                role_name: 'User 3',
                                description: 'This is a sample description.',
                                status: 0,
                                employees: 0
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
                    settings: {
                        itemsPerPage: 10,
                        withRowNumbers: true,
                        hasEdit: false,
                        hasDelete: false,
                        hasAdd: false
                    }
                }
            }
        },
        mounted() {
            $('.dropdown-toggle').dropdown();
        },
        methods: {
            create() {
                window.open("/roles/detail", "_blank");
            },

            viewRow(data) {
                window.open("/roles/detail?" + QueryString.stringify({
                    mode: 'view',
                    data: data
                }));
            },

            updateRow(data) {
                window.open("/roles/detail?" + QueryString.stringify({
                    mode: 'update',
                    data: data
                }));
            },

            deleteRow(index) {
                this.dialog.status = 'delete';
                this.dialog.message = this.$t('message.once_deleted_message');
                this.dialog.visible = true;
                this.dialog.ok = {
                    function: () => {
                        this.table.values.data.splice(index, 1);
                        this.dialog.status = 'success';
                        this.dialog.message = this.$t('success.value_successfully_deleted', { value: this.$t('label.role') });
                        this.dialog.ok = {
                            function: () => {
                                this.dialog.visible = false;
                            }
                        }
                    }
                }
                this.dialog.cancel = {
                    function: () => {
                        this.dialog.visible = false;
                    }
                }
            },

            updatePermissions(data) {
                window.open("/roles/permissions?" + QueryString.stringify({
                    mode: 'update-permissions',
                    data: data
                }));
            },

            exportListAsPDF() {},

            exportListAsExcel() {}
        }
    }
</script>

<style lang="scss" scoped>
    @import "resources/sass/_variables.scss";
</style>