<template>
    <div class="module-container">
        <div class="module-content">
            <div class="container">
                <div class="card mt-3">
                    <div class="card-body">
                        <div class="row form-group">
                            <div class="col">
                                <form-field
                                    class="form-group"
                                    :error="form.error.role_name">
                                    <label><b>{{ $t('label.role_name') }}</b>:</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        v-model="form.values.role_name"
                                        @keypress="form.error.role_name = ''"
                                        :readonly="form.mode === 'view'">
                                </form-field>
                                <form-field
                                    class="form-group"
                                    :error="form.error.description">
                                    <label><b>{{ $t('label.description') }}</b>:</label>
                                    <textarea
                                        class="form-control"
                                        rows="4"
                                        v-model="form.values.description"
                                        @keypress="form.error.description = ''"
                                        :readonly="form.mode === 'view'">
                                    </textarea>
                                </form-field>
                                <div class="form-group">
                                    <div class="btn-switch">
                                        <label class="switch">
                                            <input type="checkbox" v-model="form.values.status" :disabled="form.mode === 'view'">
                                            <span class="slider round"></span>
                                        </label>
                                        <span>{{ $t('label.active') }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <template v-if="form.mode !== 'view'">
                            <div class="row">
                                <div class="col">
                                    <div align="right">
                                        <button class="btn btn-primary" @click="save">
                                            {{ $t('label.save') }}
                                        </button>
                                        <button class="btn btn-light" @click="clearFields">
                                            {{ $t('label.clear') }}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </template>
                        <template v-else>
                            <div class="row">
                                <div class="col">
                                    <ul class="nav nav-tabs" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active" data-toggle="tab" href="#defined-permissions" role="tab" aria-controls="defined-permissions" aria-selected="true">
                                                {{ $t('label.defined_permissions') }}
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" data-toggle="tab" href="#employees" role="tab" aria-controls="employees" aria-selected="false">
                                                {{ $t('label.employees') }}
                                            </a>
                                        </li>
                                    </ul>
                                    <div class="tab-content">
                                        <div class="tab-pane fade show active" id="defined-permissions" role="tabpanel">
                                            <datatable
                                                class="
                                                    datatable--full-width
                                                    form-group"
                                                :header-fields="definedPermissions.table.header"
                                                :settings="definedPermissions.table.settings"
                                                :table="definedPermissions.table.values">
                                                <template slot="content">
                                                    <table-row
                                                        v-for="(tableData, tableDataIndex) in definedPermissions.table.values.data" :key="tableDataIndex"
                                                        :values="tableData"
                                                        :settings="definedPermissions.table.settings"
                                                        :rowIndex="tableDataIndex">
                                                        <td class="datatable-cell">
                                                            <span v-text="tableData.display_name"></span>
                                                        </td>
                                                        <td class="datatable-cell">
                                                            <span v-text="tableData.guard_name"></span>
                                                        </td>
                                                        <td class="datatable-cell">
                                                            <span v-text="tableData.slug_name"></span>
                                                        </td>
                                                        <td class="datatable-cell">
                                                            <span v-text="tableData.group"></span>
                                                        </td>
                                                    </table-row>
                                                </template>
                                            </datatable>
                                            <div>
                                                <button class="btn btn-primary" @click="updatePermissions(form.values)">
                                                    <i class="fa fa-pencil"></i>
                                                    {{ $t('label.update_permissions') }}
                                                </button>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="employees" role="tabpanel">
                                            <datatable
                                                class="
                                                    datatable--full-width
                                                    form-group"
                                                :header-fields="employees.table.header"
                                                :settings="employees.table.settings"
                                                :table="employees.table.values">
                                                <template slot="content">
                                                    <table-row
                                                        v-for="(tableData, tableDataIndex) in employees.table.values.data" :key="tableDataIndex"
                                                        :values="tableData"
                                                        :settings="employees.table.settings"
                                                        :rowIndex="tableDataIndex">
                                                        <td class="datatable-cell tc--id">
                                                            <span v-text="tableData.id"></span>
                                                        </td>
                                                        <td class="datatable-cell">
                                                            <div class="employee-profile">
                                                                <div>
                                                                    <img :src="'/images/' + tableData.profile_image" alt="">
                                                                </div>
                                                                <div class="ml-2">
                                                                    <div class="text-uppercase">{{ tableData.first_name + ' ' + tableData.last_name }}</div>
                                                                    <div class="text-secondary">{{ tableData.email_address }}</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td class="datatable-cell">
                                                            <ul class="row-list">
                                                                <li v-for="branch in tableData.branch" :key="branch.id">
                                                                    {{ branch.label }}
                                                                </li>
                                                            </ul>
                                                        </td>
                                                        <td class="datatable-cell tc--status">
                                                            <span
                                                                class="status-label w-100"
                                                                :class="tableData.status === 1 ? 'status-label--active'
                                                                    : tableData.status === 0 ? 'status-label--inactive'
                                                                    : ''"
                                                                v-text="tableData.status === 1 ? $t('label.active')
                                                                    : tableData.status === 0 ? $t('label.inactive')
                                                                    : ''">
                                                            </span>
                                                        </td>
                                                        <td class="datatable-cell">
                                                            {{ tableData.created }}
                                                        </td>
                                                    </table-row>
                                                </template>
                                            </datatable>
                                            <div>
                                                <button class="btn btn-primary" @click="viewEmployees">
                                                    <i class="fa fa-user"></i>
                                                    {{ $t('label.view_employees') }}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
        <side-navigation></side-navigation>
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
    import FormField from '../../components/Containers/FormField.vue';

    export default {
        components: {
            FormField,
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
                form: {
                    mode: 'create',
                    values: {
                        role_name: '',
                        description: '',
                        status: 1
                    },
                    error: {
                        role_name: '',
                        description: '',
                    }
                },
                definedPermissions: {
                    table: {
                        header: [
                            {
                                name: "display_name",
                                label: this.$t('label.display_name'),
                                width: '150'
                            },
                            {
                                name: "guard_name",
                                label: this.$t('label.guard_name'),
                                width: '150'
                            },
                            {
                                name: "slug_name",
                                label: this.$t('label.slug_name'),
                                width: '150'
                            },
                            {
                                name: "group",
                                label: this.$t('label.group'),
                                width: '150'
                            }
                        ],
                        values: {
                            data: [
                                {
                                    display_name: 'View Time Records',
                                    slug_name: 'time-records-view',
                                    guard_name: 'web',
                                    group: 'time_records'
                                },
                                {
                                    display_name: 'View Time Attendance',
                                    slug_name: 'time-attendance-view',
                                    guard_name: 'api',
                                    group: 'time_attendance'
                                },
                                {
                                    display_name: 'View Time Corrections',
                                    slug_name: 'time-corrections-view',
                                    guard_name: 'web',
                                    group: 'time_corrections'
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
                            withRowNumbers: false,
                            hasEdit: false,
                            hasDelete: false,
                            hasAdd: false
                        }
                    }
                },
                employees: {
                    table: {
                        header: [
                            {
                                name: "id",
                                label: this.$t('label.id'),
                                width: '150'
                            },
                            {
                                name: "name",
                                label: this.$t('label.name'),
                                width: '150'
                            },
                            {
                                name: "branches",
                                label: this.$t('label.branches'),
                                width: '150'
                            },
                            {
                                name: "status",
                                label: this.$t('label.status'),
                                width: '150'
                            },
                            {
                                name: "created",
                                label: this.$t('label.created'),
                                width: '150'
                            }
                        ],
                        values: {
                            data: [
                                {
                                    id: '1001',
                                    first_name: 'Juan',
                                    middle_name: 'Dela',
                                    last_name: 'Cruz',
                                    profile_image: 'user.png',
                                    gender: 'M',
                                    birth_date: '2023-09-19',
                                    phone_number: '123456789',
                                    current_address: 'Address Line 1',
                                    permanent_address: 'Address Line 2',
                                    biometric: 0,
                                    can_login: 1,
                                    role: { label: 'Corporate Admin', value: 'Corporate Admin' },
                                    position: { label: 'Position 1', value: 'Position 1' },
                                    department: { label: 'Department 1', value: 'Department 1' },
                                    branch: [
                                        { label: 'Branch 1', value: 'Branch 1' },
                                        { label: 'Branch 2', value: 'Branch 2' }
                                    ],
                                    status: 1,
                                    email_address: 'abc@gmail.com',
                                    password: '123456789',
                                    created: 'Friday, Sept. 22, 2023'
                                },
                                {
                                    id: '1002',
                                    first_name: 'Janu',
                                    middle_name: 'Dela',
                                    last_name: 'Cruz',
                                    profile_image: 'user.png',
                                    gender: 'F',
                                    birth_date: '2023-09-19',
                                    phone_number: '123456789',
                                    current_address: 'Address Line 1',
                                    permanent_address: 'Address Line 2',
                                    biometric: 0,
                                    can_login: 0,
                                    role: '',
                                    position: { label: 'Position 1', value: 'Position 1' },
                                    department: { label: 'Department 1', value: 'Department 1' },
                                    branch: [
                                        { label: 'Branch 1', value: 'Branch 1' },
                                        { label: 'Branch 2', value: 'Branch 2' }
                                    ],
                                    status: 1,
                                    email_address: 'abc@gmail.com',
                                    password: '',
                                    created: 'Friday, Sept. 22, 2023'
                                },
                                {
                                    id: '1003',
                                    first_name: 'Jimi',
                                    middle_name: 'Dela',
                                    last_name: 'Cruz',
                                    profile_image: 'user.png',
                                    gender: 'M',
                                    birth_date: '2023-09-19',
                                    phone_number: '123456789',
                                    current_address: 'Address Line 1',
                                    permanent_address: 'Address Line 2',
                                    biometric: 0,
                                    can_login: 1,
                                    role: { label: 'Corporate Admin', value: 'Corporate Admin' },
                                    position: { label: 'Position 1', value: 'Position 1' },
                                    department: { label: 'Department 1', value: 'Department 1' },
                                    branch: [
                                        { label: 'Branch 1', value: 'Branch 1' },
                                        { label: 'Branch 2', value: 'Branch 2' }
                                    ],
                                    status: 1,
                                    email_address: 'abc@gmail.com',
                                    password: '123456789',
                                    created: 'Friday, Sept. 22, 2023'
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
            }
        },
        mounted() {
            this.assignData();
        },
        methods: {
            assignData() {
                let loadedData = QueryString.parse(window.location.search.substr(1));

                if (loadedData.data) {
                    this.form.mode = loadedData.mode;
                    this.form.values.role_name = loadedData.data.role_name;
                    this.form.values.description = loadedData.data.description;
                    this.form.values.status = Number(loadedData.data.status);
                }
            },

            updatePermissions(data) {
                window.open("/roles/permissions?" + QueryString.stringify({
                    mode: 'update',
                    data: data
                }));
            },

            viewEmployees() {
                window.open("/employees", "_blank");
            },

            save() {
                let mode = this.form.mode;

                this.form.error.role_name = this.form.values.role_name === '' ? this.$t('error.value_is_required', { value: this.$t('label.role_name') }) : '';
                this.form.error.description = this.form.values.description === '' ? this.$t('error.value_is_required', { value: this.$t('label.description') }) : '';

                if (this.form.values.role_name === ''
                    || this.form.values.description === '') {
                    return;
                }

                if (mode === 'create') {
                    this.dialog.message = this.$t('success.value_successfully_created', { value: this.$t('label.role') });
                } else {
                    this.dialog.message = this.$t('success.value_successfully_updated', { value: this.$t('label.role') });
                }

                this.dialog.status = 'success';
                this.dialog.visible = true;
                this.dialog.ok = {
                    function: () => {
                        this.dialog.visible = false;
                    }
                }
            },

            clearFields() {
                this.form.values.role_name = '';
                this.form.values.description = '';

                this.form.error.role_name = '';
                this.form.error.description = '';
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import "resources/sass/_variables.scss";

    .employee-profile {
        display: flex;
        align-items: center;
        img {
            width: 30px;
            height: 30px;
        }
    }

    .employee-image {
        border: 1px $line-color solid;
        width: 150px;
        height: 150px;
        img {
            width: 150px;
            height: 150px;
            padding: 5px;
        }
    }

    .tc {
        &--id {
            width: 100px;
        }
        &--status {
            width: 80px;
        }
    }
</style>