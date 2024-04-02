<template>
    <div>
        <h5><i class="fa fa-building fa-lg"></i> <b>{{ $t('label.client_branches') }}</b></h5>
        <div class="form-group">
            <button class="btn btn-success" @click="sync">
                <i class="fa fa-refresh"></i>
                {{ $t('label.sync_branches') }}
            </button>
        </div>
        <datatable
            class="
                datatable--full-width
                datatable--black
                datatable--overflow-initial
                overflow-initial"
            :header-fields="table.header"
            :settings="table.settings"
            :table="table.values">
            <template slot="content">
                <table-row
                    v-for="(tableData, tableDataIndex) in table.values.data" :key="tableDataIndex"
                    :values="tableData"
                    :settings="table.settings"
                    :rowIndex="tableDataIndex">
                    <td class="datatable-cell">
                        <span v-text="tableData.id"></span>
                    </td>
                    <td class="datatable-cell">
                        <span v-text="tableData.branch_name"></span>
                    </td>
                    <td class="datatable-cell">
                        <span v-text="tableData.address"></span>
                    </td>
                    <td class="datatable-cell">
                        <b>{{ tableData.subscription_status }}</b><br>
                        <span class="text-gray" v-text="tableData.subscription_status_days_left"></span>
                    </td>
                    <td class="datatable-cell">
                        <span
                            class="status-label w-100"
                            :class="tableData.status ? 'status-label--active' : 'status-label--inactive'"
                            v-text="tableData.status ? $t('label.active') : $t('label.inactive')">
                        </span>
                    </td>
                    <td class="datatable-cell">
                        <span class="badge badge-light">
                            <i class="fa fa-users"></i>
                            {{ tableData.employees_or_admin }}
                        </span>
                        <button class="btn btn-light btn-sm">
                            {{ $t('label.assign_now') }}
                        </button>
                    </td>
                    <td class="datatable-cell">
                        {{ tableData.biometric_device }}
                    </td>
                    <td class="datatable-cell">
                        {{ tableData.system_time_issues }}
                    </td>
                    <td class="datatable-cell" align="center">
                        <div class="dropdown">
                            <button class="btn btn-light dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fa fa-ellipsis-v fa-lg"></i>
                            </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" @click="updateRow(tableData)">
                                    <i class="fa fa-edit fa-lg"></i>
                                    {{ $t('label.edit') }}
                                </a>
                                <a class="dropdown-item" href="#" @click="deleteRow(tableDataIndex)">
                                    <i class="fa fa-trash fa-lg"></i>
                                    {{ $t('label.delete') }}
                                </a>
                                <div class="dropdown-divider"></div>
                                <h6 class="dropdown-header">{{ $t('label.extra_actions') }}</h6>
                                <a class="dropdown-item" @click="viewKey(tableData)">
                                    <i class="fa fa-key fa-lg"></i>
                                    {{ $t('label.view_key') }}
                                </a>
                                <a class="dropdown-item" @click="assignBranchAdmin(tableData)">
                                    <i class="fa fa-user fa-lg"></i>
                                    {{ $t('label.assign_branch_admin') }}
                                </a>
                                <a class="dropdown-item" @click="viewSystemTimeLogs(tableData)">
                                    <i class="fa fa-clock-o fa-lg"></i>
                                    {{ $t('label.system_time_logs') }}
                                </a>
                                <a class="dropdown-item" @click="updateRow(tableData)">
                                    <i class="fa fa-files-o fa-lg"></i>
                                    {{ $t('label.update_report_preferences') }}
                                </a>
                            </div>
                        </div>
                    </td>
                </table-row>
            </template>
        </datatable>
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

    export default {
        components: {
            Datatable,
            TableRow
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
                            name: "branch_name",
                            label: this.$t('label.branch_name'),
                            width: '150'
                        },
                        {
                            name: "address",
                            label: this.$t('label.address'),
                            width: '150'
                        },
                        {
                            name: "subscription_status",
                            label: this.$t('label.subscription_status'),
                            width: '150'
                        },
                        {
                            name: "status",
                            label: this.$t('label.active'),
                            width: '100'
                        },
                        {
                            name: "employees_or_admin",
                            label: this.$t('label.employees_or_admin'),
                            width: '150'
                        },
                        {
                            name: "biometric_device",
                            label: this.$t('label.biometric_device'),
                            width: '150'
                        },
                        {
                            name: "system_time_issues",
                            label: this.$t('label.system_time_issues'),
                            width: '150'
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
                                branch_name: 'Branch 1',
                                branch_key: '789c-a451-543t4-156dg',
                                address: 'Quezon City, Metro Manila',
                                subscription_status: 'Saturday, January 18, 2023',
                                subscription_status_days_left: '1 year 4 months',
                                status: 1,
                                employees_or_admin: 0,
                                role: 'Corporate Admin',
                                biometric_device: 'No connected device yet',
                                system_time_issues: 'No issues',
                                telephone_no: '123456789',
                                mobile_no: '123456789',
                                email_address: 'abc@gmail.com',
                            },
                            {
                                id: '1002',
                                branch_name: 'Branch 2',
                                branch_key: 'dsr3-fds3-32155-vds33',
                                address: 'Quezon City, Metro Manila',
                                subscription_status: 'Saturday, January 18, 2023',
                                subscription_status_days_left: '1 year 4 months',
                                status: 1,
                                employees_or_admin: 0,
                                role: 'Corporate Admin',
                                biometric_device: 'No connected device yet',
                                system_time_issues: 'No issues',
                                telephone_no: '987654321',
                                mobile_no: '987654321',
                                email_address: 'cde@gmail.com',
                            },
                            {
                                id: '1003',
                                branch_name: 'Branch 3',
                                branch_key: 'jh78-hkhj7-jhe34-ggf54',
                                address: 'Quezon City, Metro Manila',
                                subscription_status: 'Saturday, January 18, 2023',
                                subscription_status_days_left: '1 year 4 months',
                                status: 1,
                                employees_or_admin: 0,
                                role: 'Corporate Admin',
                                biometric_device: 'No connected device yet',
                                system_time_issues: 'No issues',
                                telephone_no: '456789123',
                                mobile_no: '456789123',
                                email_address: 'fgh@gmail.com',
                            },
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
                        withRowNumbers: false,
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
            sync() {
                this.dialog.status = 'success';
                this.dialog.message = this.$t('success.value_successfully_synced', { value: this.$t('label.branches') });
                this.dialog.visible = true;
                this.dialog.ok = {
                    function: () => {
                        this.dialog.visible = false;
                    }
                }
            },

            updateRow(data) {
                window.open("/branches/detail?" + QueryString.stringify({
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
                        this.dialog.message = this.$t('success.value_successfully_deleted', { value: this.$t('label.branch') });
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

            viewKey(data) {
                window.open("/branches/view-key?" + QueryString.stringify({
                    mode: 'view',
                    data: data
                }));
            },

            assignBranchAdmin(data) {
                window.open("/branches/assign-branch-admin?" + QueryString.stringify({
                    mode: 'view',
                    data: data
                }));
            },

            viewSystemTimeLogs(data) {
                window.open("/branches/system-time-logs?" + QueryString.stringify({
                    mode: 'view',
                    data: data
                }));
            }

        }
    }
</script>