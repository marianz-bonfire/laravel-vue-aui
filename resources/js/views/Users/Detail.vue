<template>
    <div class="module-container">
        <div class="module-content">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="card mt-3">
                            <div class="card-body">
                                <template v-if="form.mode !== 'view'">
                                    <div class="row form-group">
                                        <div class="col-xl-3">
                                            <div class="upload-image">
                                                <label for="file-upload" class="upload-image-label">
                                                    <img src="/images/user.png" alt="">
                                                    <div class="upload-image-backdrop">
                                                        <i class="fa fa-camera fa-4x"></i>
                                                    </div>
                                                </label>
                                                <input id="file-upload" type="file"/>
                                            </div>
                                        </div>
                                        <div class="col-xl-9">
                                            <div class="form-group">
                                                <div class="row">
                                                    <form-field
                                                        class="col"
                                                        :error="form.error.branch">
                                                        <b>{{ $t('label.branch') }}:</b>
                                                        <v-select
                                                            v-model="form.values.branch"
                                                            :clearable="false"
                                                            :placeholder="$t('label.select_value', { value: $t('label.branch') })"
                                                            :options="selections.branch.options"
                                                            multiple
                                                            @input="form.error.branch = ''">
                                                        </v-select>
                                                    </form-field>
                                                    <form-field
                                                        class="col"
                                                        :error="form.error.role">
                                                        <b>{{ $t('label.role') }}:</b>
                                                        <v-select
                                                            v-model="form.values.role"
                                                            :clearable="false"
                                                            :placeholder="$t('label.select_value', { value: $t('label.role') })"
                                                            :options="selections.role.options"
                                                            @input="form.error.role = ''"
                                                            :disabled="form.mode === 'view'">
                                                        </v-select>
                                                    </form-field>
                                                </div>
                                                <div class="row">
                                                    <form-field
                                                        class="col"
                                                        :error="form.error.department">
                                                        <b>{{ $t('label.department') }}:</b>
                                                        <v-select
                                                            v-model="form.values.department"
                                                            :clearable="false"
                                                            :placeholder="$t('label.select_value', { value: $t('label.department') })"
                                                            :options="selections.department.options"
                                                            @input="form.error.department = ''">
                                                        </v-select>
                                                    </form-field>
                                                    <form-field
                                                        class="col"
                                                        :error="form.error.position">
                                                        <b>{{ $t('label.position') }}:</b>
                                                        <v-select
                                                            v-model="form.values.position"
                                                            :clearable="false"
                                                            :placeholder="$t('label.select_value', { value: $t('label.position') })"
                                                            :options="selections.position.options"
                                                            @input="form.error.position = ''">
                                                        </v-select>
                                                    </form-field>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <h5><b><i class="fa fa-key fa-lg"></i> {{ $t('label.employee_information') }}</b></h5>
                                        <div class="row">
                                            <form-field
                                                class="col"
                                                :error="form.error.first_name">
                                                <b>{{ $t('label.first_name') }}:</b>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    v-model="form.values.first_name"
                                                    @keypress="form.error.first_name = ''">
                                            </form-field>
                                            <form-field
                                                class="col"
                                                :error="form.error.middle_name">
                                                <b>{{ $t('label.middle_name') }}:</b>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    v-model="form.values.middle_name"
                                                    @keypress="form.error.middle_name = ''">
                                            </form-field>
                                            <form-field
                                                class="col"
                                                :error="form.error.last_name">
                                                <b>{{ $t('label.last_name') }}:</b>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    v-model="form.values.last_name"
                                                    @keypress="form.error.last_name = ''">
                                            </form-field>
                                        </div>
                                        <div class="row">
                                            <form-field
                                                class="col"
                                                :error="form.error.phone_number">
                                                <b>{{ $t('label.phone_number') }}:</b>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    v-model="form.values.phone_number"
                                                    @keypress="form.error.phone_number = ''">
                                            </form-field>
                                            <form-field
                                                class="col"
                                                :error="form.error.birth_date">
                                                <b>{{ $t('label.birth_date') }}:</b>
                                                <datepicker
                                                    format="MMM. dd, yyyy"
                                                    v-model="birthDate"
                                                    @selected="form.error.birth_date = ''">
                                                </datepicker>
                                            </form-field>
                                            <form-field
                                                class="col"
                                                :error="form.error.gender">
                                                <b>{{ $t('label.gender') }}:</b>
                                                <select
                                                    class="form-control"
                                                    v-model="form.values.gender"
                                                    @change="form.error.gender = ''">
                                                    <option value="M">{{ $t('label.male') }}</option>
                                                    <option value="F">{{ $t('label.female') }}</option>
                                                </select>
                                            </form-field>
                                        </div>
                                        <div class="row">
                                            <form-field
                                                class="col"
                                                :error="form.error.email_address">
                                                <b>{{ $t('label.email_address') }}:</b>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    v-model="form.values.email_address"
                                                    @keypress="form.error.email_address = ''">
                                            </form-field>
                                            <div class="col">
                                                <b>{{ $t('label.status') }}:</b>
                                                <select 
                                                    class="form-control"
                                                    v-model="form.values.status">
                                                    <option :value="1">{{ $t('label.active') }}</option>
                                                    <option :value="2">{{ $t('label.inactive') }}</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="row form-group">
                                            <form-field
                                                class="col"
                                                :error="form.error.current_address">
                                                <b>{{ $t('label.current_address') }}:</b>
                                                <textarea
                                                    class="form-control"
                                                    rows="4"
                                                    v-model="form.values.current_address"
                                                    @keypress="form.error.current_address = ''">
                                                </textarea>
                                            </form-field>
                                            <form-field
                                                class="col"
                                                :error="form.error.permanent_address">
                                                <b>{{ $t('label.permanent_address') }}:</b>
                                                <textarea
                                                    class="form-control"
                                                    rows="4"
                                                    v-model="form.values.permanent_address"
                                                    @keypress="form.error.permanent_address = ''">
                                                </textarea>
                                            </form-field>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <h5><b><i class="fa fa-key fa-lg"></i> {{ $t('label.credentials') }}</b></h5>
                                        <div class="row">
                                            <form-field
                                                class="col-xl-5"
                                                :error="form.error.password">
                                                <b>{{ $t('label.password') }}:</b>
                                                <div class="input-group">
                                                    <input
                                                        :type="toggle.password ? 'text' : 'password'"
                                                        class="form-control"
                                                        v-model="form.values.password"
                                                        @keypress="form.error.password = ''">
                                                    <div
                                                        class="input-group-append cursor-pointer">
                                                        <span
                                                            class="input-group-text"
                                                            @click="toggle.password = ! toggle.password">
                                                            <i
                                                                class="fa fa-lg"
                                                                :class="toggle.password ? 'fa-eye' : 'fa-eye-slash'">
                                                            </i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </form-field>
                                            <div class="col">
                                                <br>
                                                <button
                                                    class="btn btn-success"
                                                    @click="generatePassword"
                                                    :disabled="form.mode === 'view'">
                                                    <i class="fa fa-refresh"></i>
                                                    {{ $t('label.generate_password') }}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group" v-if="form.mode !== 'create'">
                                        <button class="btn btn-primary" @click="updatePermissions(form.values)">
                                            <i class="fa fa-pencil"></i>
                                            {{ $t('label.update_permissions') }}
                                        </button>
                                    </div>
                                    <div align="right" v-if="form.mode !== 'view'">
                                        <button class="btn btn-primary" @click="save">
                                            {{ $t('label.save') }}
                                        </button>
                                        <button class="btn btn-light" @click="clearFields">
                                            {{ $t('label.clear') }}
                                        </button>
                                    </div>
                                </template>
                                <template v-else>
                                    <div class="row form-group">
                                        <div class="col d-flex">
                                            <div class="image-preview">
                                                <img src="/images/user.png" alt="">
                                            </div>
                                            <div class="d-flex flex-column justify-content-center ml-2">
                                                <h4 class="text-uppercase"><b>{{ form.values.first_name + ' ' + form.values.middle_name + ' ' + form.values.last_name }}</b></h4>
                                                <h5 class="text-secondary">{{ form.values.email_address }}</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <table class="table table-bordered">
                                                <tr>
                                                    <td width="200px"><i class="fa fa-info fa-lg mr-2"></i><b> {{ $t('label.employee_id') }}</b></td>
                                                    <td>{{ form.values.id }}</td>
                                                </tr>
                                                <tr>
                                                    <td><i class="fa fa-envelope fa-lg mr-2"></i><b> {{ $t('label.email_address') }}</b></td>
                                                    <td>{{ form.values.email_address }}</td>
                                                </tr>
                                                <tr>
                                                    <td><i class="fa fa-phone fa-lg mr-2"></i><b> {{ $t('label.phone_number') }}</b></td>
                                                    <td>{{ form.values.phone_number }}</td>
                                                </tr>
                                                <tr>
                                                    <td><i class="fa fa-birthday-cake fa-lg mr-2"></i><b> {{ $t('label.birth_date') }}</b></td>
                                                    <td>{{ form.values.birth_date }}</td>
                                                </tr>
                                                <tr>
                                                    <td><i class="fa fa-male fa-lg mr-2"></i><b> {{ $t('label.gender') }}</b></td>
                                                    <td>{{ form.values.gender }}</td>
                                                </tr>
                                                <tr>
                                                    <td><i class="fa fa-tag fa-lg mr-2"></i><b> {{ $t('label.status') }}</b></td>
                                                    <td>
                                                        <span
                                                            class="status-label"
                                                            :class="form.values.status ? 'status-label--active' : 'status-label--inactive'">
                                                            {{ form.values.status ? $t('label.active') : $t('label.inactive') }}
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><i class="fa fa-map fa-lg mr-2"></i><b> {{ $t('label.current_address') }}</b></td>
                                                    <td>{{ form.values.current_address }}</td>
                                                </tr>
                                                <tr>
                                                    <td><i class="fa fa-map fa-lg mr-2"></i><b> {{ $t('label.permanent_address') }}</b></td>
                                                    <td>{{ form.values.permanent_address }}</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                    <ul class="nav nav-tabs" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active" data-toggle="tab" href="#defined-corporate-admin-permissions" role="tab" aria-controls="defined-corporate-admin-permissions" aria-selected="true">
                                                {{ $t('label.defined_corporate_admin_permissions') }}
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" data-toggle="tab" href="#additional-permissions" role="tab" aria-controls="additional-permissions" aria-selected="false">
                                                {{ $t('label.additional_permissions') }}
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" data-toggle="tab" href="#activities" role="tab" aria-controls="activities" aria-selected="false">
                                                {{ $t('label.activities') }}
                                            </a>
                                        </li>
                                    </ul>
                                    <div class="tab-content">
                                        <div class="tab-pane fade show active" id="defined-corporate-admin-permissions" role="tabpanel">
                                            <datatable
                                                class="
                                                    datatable--full-width
                                                    datatable--black"
                                                :header-fields="definedCorporateAdminPermissions.table.header"
                                                :settings="definedCorporateAdminPermissions.table.settings"
                                                :table="definedCorporateAdminPermissions.table.values">
                                                <template slot="content">
                                                    <table-row
                                                        v-for="(tableData, tableDataIndex) in definedCorporateAdminPermissions.table.values.data" :key="tableDataIndex"
                                                        :values="tableData"
                                                        :settings="definedCorporateAdminPermissions.table.settings"
                                                        :rowIndex="tableDataIndex">
                                                        <td class="datatable-cell">
                                                            <span v-text="tableData.display_name"></span>
                                                        </td>
                                                        <td class="datatable-cell">
                                                            <span v-text="tableData.slug_name"></span>
                                                        </td>
                                                        <td class="datatable-cell">
                                                            <span v-text="tableData.guard_name"></span>
                                                        </td>
                                                        <td class="datatable-cell">
                                                            <span v-text="tableData.group"></span>
                                                        </td>
                                                    </table-row>
                                                </template>
                                            </datatable>
                                            <div class="mt-3">
                                                <button class="btn btn-primary" @click="updatePermissions(form.values)">
                                                    <i class="fa fa-pencil"></i>
                                                    {{ $t('label.update_permissions') }}
                                                </button>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="additional-permissions" role="tabpanel">
                                            <datatable
                                                class="
                                                    datatable--full-width
                                                    datatable--black"
                                                :header-fields="additionalPermissions.table.header"
                                                :settings="additionalPermissions.table.settings"
                                                :table="additionalPermissions.table.values">
                                                <template slot="content">
                                                    <table-row
                                                        v-for="(tableData, tableDataIndex) in additionalPermissions.table.values.data" :key="tableDataIndex"
                                                        :values="tableData"
                                                        :settings="additionalPermissions.table.settings"
                                                        :rowIndex="tableDataIndex">
                                                        <td class="datatable-cell">
                                                            <span v-text="tableData.display_name"></span>
                                                        </td>
                                                        <td class="datatable-cell">
                                                            <span v-text="tableData.slug_name"></span>
                                                        </td>
                                                        <td class="datatable-cell">
                                                            <span v-text="tableData.guard_name"></span>
                                                        </td>
                                                        <td class="datatable-cell">
                                                            <span v-text="tableData.group"></span>
                                                        </td>
                                                    </table-row>
                                                </template>
                                            </datatable>
                                            <div class="mt-3">
                                                <button class="btn btn-primary" @click="updatePermissions(form.values)">
                                                    <i class="fa fa-pencil"></i>
                                                    {{ $t('label.update_permissions') }}
                                                </button>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="activities" role="tabpanel">
                                            <datatable
                                                class="
                                                    datatable--full-width
                                                    datatable--black"
                                                :header-fields="activities.table.header"
                                                :settings="activities.table.settings"
                                                :table="activities.table.values">
                                                <template slot="content">
                                                    <table-row
                                                        v-for="(tableData, tableDataIndex) in activities.table.values.data" :key="tableDataIndex"
                                                        :values="tableData"
                                                        :settings="activities.table.settings"
                                                        :rowIndex="tableDataIndex">
                                                        <td class="datatable-cell">
                                                            <span v-text="tableData.display_name"></span>
                                                        </td>
                                                        <td class="datatable-cell">
                                                            <span v-text="tableData.slug_name"></span>
                                                        </td>
                                                        <td class="datatable-cell">
                                                            <span v-text="tableData.guard_name"></span>
                                                        </td>
                                                        <td class="datatable-cell">
                                                            <span v-text="tableData.group"></span>
                                                        </td>
                                                    </table-row>
                                                </template>
                                            </datatable>
                                        </div>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <side-navigation>
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
    import Datepicker from 'vuejs-datepicker';
    import FormField from '../../components/Containers/FormField.vue';
    import Datatable from '../../components/Datatable2/Datatable.vue';
    import TableRow from '../../components/Datatable2/TableRow.vue';

    export default {
        components: {
            Datepicker,
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
                selections: {
                    branch: {
                        options: [
                            { label: 'Branch 1', value: 'Branch 1' },
                            { label: 'Branch 2', value: 'Branch 2' },
                            { label: 'Branch 3', value: 'Branch 3' },
                        ]
                    },
                    department: {
                        options: [
                            { label: 'Department 1', value: 'Department 1' },
                            { label: 'Department 2', value: 'Department 2' },
                            { label: 'Department 3', value: 'Department 3' },
                        ]
                    },
                    position: {
                        options: [
                            { label: 'Position 1', value: 'Position 1' },
                            { label: 'Position 2', value: 'Position 2' },
                            { label: 'Position 3', value: 'Position 3' },
                        ]
                    },
                    role: {
                        options: [
                            { label: 'Role 1', value: 'Role 1' },
                            { label: 'Role 2', value: 'Role 2' },
                            { label: 'Role 3', value: 'Role 3' },
                        ]
                    },
                },
                form: {
                    mode: 'create',
                    values: {
                        branch: '',
                        role: '',
                        department: '',
                        position: '',
                        first_name: '',
                        middle_name: '',
                        last_name: '',
                        phone_number: '',
                        birth_date: '',
                        gender: '',
                        email_address: '',
                        current_address: '',
                        permanent_address: '',
                        status: 1,
                        role: '',
                        password: '',
                    },
                    error: {
                        branch: '',
                        department: '',
                        position: '',
                        first_name: '',
                        last_name: '',
                        phone_number: '',
                        birth_date: '',
                        gender: '',
                        email_address: '',
                        current_address: '',
                        permanent_address: '',
                        role: '',
                        password: '',
                    }
                },
                definedCorporateAdminPermissions: {
                    table: {
                        header: [
                            {
                                name: "display_name",
                                label: this.$t('label.display_name'),
                                width: '150'
                            },
                            {
                                name: "slug_name",
                                label: this.$t('label.slug_name'),
                                width: '150'
                            },
                            {
                                name: "guard_name",
                                label: this.$t('label.guard_name'),
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
                                    display_name: 'View Employee',
                                    slug_name: 'employees-view',
                                    guard_name: 'web',
                                    group: 'employees'
                                },
                                {
                                    display_name: 'View Employee',
                                    slug_name: 'employees-view',
                                    guard_name: 'web',
                                    group: 'employees'
                                },
                                {
                                    display_name: 'View Employee',
                                    slug_name: 'employees-view',
                                    guard_name: 'web',
                                    group: 'employees'
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
                additionalPermissions: {
                    table: {
                        header: [
                            {
                                name: "display_name",
                                label: this.$t('label.display_name'),
                                width: '150'
                            },
                            {
                                name: "slug_name",
                                label: this.$t('label.slug_name'),
                                width: '150'
                            },
                            {
                                name: "guard_name",
                                label: this.$t('label.guard_name'),
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
                                    display_name: 'View Employee',
                                    slug_name: 'employees-view',
                                    guard_name: 'web',
                                    group: 'employees'
                                },
                                {
                                    display_name: 'View Employee',
                                    slug_name: 'employees-view',
                                    guard_name: 'web',
                                    group: 'employees'
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
                activities: {
                    table: {
                        header: [
                            {
                                name: "display_name",
                                label: this.$t('label.display_name'),
                                width: '150'
                            },
                            {
                                name: "slug_name",
                                label: this.$t('label.slug_name'),
                                width: '150'
                            },
                            {
                                name: "guard_name",
                                label: this.$t('label.guard_name'),
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
                                    display_name: 'View Employee',
                                    slug_name: 'employees-view',
                                    guard_name: 'web',
                                    group: 'employees'
                                },
                                {
                                    display_name: 'View Employee',
                                    slug_name: 'employees-view',
                                    guard_name: 'web',
                                    group: 'employees'
                                },
                                {
                                    display_name: 'View Employee',
                                    slug_name: 'employees-view',
                                    guard_name: 'web',
                                    group: 'employees'
                                },
                                {
                                    display_name: 'View Employee',
                                    slug_name: 'employees-view',
                                    guard_name: 'web',
                                    group: 'employees'
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
                toggle: {
                    password: false
                }
            }
        },
        mounted() {
            this.assignData();
        },
        computed: {
            birthDate: {
                get() {
                    return this.form.values.birth_date;
                },
                set(value) {
                    let date = moment(value).format('YYYY-MM-DD');
                    this.form.values.birth_date = date;
                }
            },
        },
        methods: {
            assignData() {
                let loadedData = QueryString.parse(window.location.search.substr(1));

                if (loadedData.data) {
                    this.form.mode = loadedData.mode;
                    this.form.values.id = loadedData.data.id;
                    this.form.values.branch = loadedData.data.branch;
                    this.form.values.department = loadedData.data.department;
                    this.form.values.position = loadedData.data.position;
                    this.form.values.first_name = loadedData.data.first_name;
                    this.form.values.middle_name = loadedData.data.middle_name;
                    this.form.values.last_name = loadedData.data.last_name;
                    this.form.values.phone_number = loadedData.data.phone_number;
                    this.form.values.birth_date = loadedData.data.birth_date;
                    this.form.values.gender = loadedData.data.gender;
                    this.form.values.email_address = loadedData.data.email_address;
                    this.form.values.current_address = loadedData.data.current_address;
                    this.form.values.permanent_address = loadedData.data.permanent_address;
                    this.form.values.role = loadedData.data.role;
                    this.form.values.password = loadedData.data.password;
                }
            },

            generatePassword() {
                let randomPassword = Math.random().toString(36).substr(2, 8);
                this.form.values.password = randomPassword;
                this.form.error.password = '';
            },

            save() {
                let mode = this.form.mode;

                this.form.error.branch = this.form.values.branch === '' ? this.$t('error.value_is_required', { value: this.$t('label.branch') }) : '';
                this.form.error.department = this.form.values.department === '' ? this.$t('error.value_is_required', { value: this.$t('label.department') }) : '';
                this.form.error.position = this.form.values.position === '' ? this.$t('error.value_is_required', { value: this.$t('label.position') }) : '';
                this.form.error.first_name = this.form.values.first_name === '' ? this.$t('error.value_is_required', { value: this.$t('label.first_name') }) : '';
                this.form.error.last_name = this.form.values.last_name === '' ? this.$t('error.value_is_required', { value: this.$t('label.last_name') }) : '';
                this.form.error.phone_number = this.form.values.phone_number === '' ? this.$t('error.value_is_required', { value: this.$t('label.phone_number') }) : '';
                this.form.error.birth_date = this.form.values.birth_date === '' ? this.$t('error.value_is_required', { value: this.$t('label.birth_date') }) : '';
                this.form.error.gender = this.form.values.gender === '' ? this.$t('error.value_is_required', { value: this.$t('label.gender') }) : '';
                this.form.error.email_address = this.form.values.email_address === '' ? this.$t('error.value_is_required', { value: this.$t('label.email_address') }) : '';
                this.form.error.current_address = this.form.values.current_address === '' ? this.$t('error.value_is_required', { value: this.$t('label.current_address') }) : '';
                this.form.error.permanent_address = this.form.values.permanent_address === '' ? this.$t('error.value_is_required', { value: this.$t('label.permanent_address') }) : '';
                this.form.error.role = this.form.values.role === '' ? this.$t('error.value_is_required', { value: this.$t('label.role') }) : '';
                this.form.error.password = this.form.values.password === '' ? this.$t('error.value_is_required', { value: this.$t('label.password') }) : '';


                if (this.form.values.branch === ''
                    || this.form.values.department === ''
                    || this.form.values.position === ''
                    || this.form.values.first_name === ''
                    || this.form.values.last_name === ''
                    || this.form.values.phone_number === ''
                    || this.form.values.birth_date === ''
                    || this.form.values.gender === ''
                    || this.form.values.email_address === ''
                    || this.form.values.current_address === ''
                    || this.form.values.permanent_address === ''
                    || this.form.values.role === ''
                    || this.form.values.password === '') {
                    return;
                }

                if (mode === 'create') {
                    this.dialog.message = this.$t('success.value_successfully_created', { value: this.$t('label.user') });
                } else {
                    this.dialog.message = this.$t('success.value_successfully_updated', { value: this.$t('label.user') });
                }

                this.dialog.status = 'success';
                this.dialog.visible = true;
                this.dialog.ok = {
                    function: () => {
                        this.dialog.visible = false;
                    }
                }
            },

            updatePermissions(data) {
                window.open("/user/permissions?" + QueryString.stringify({
                    mode: 'update',
                    data: data
                }));
            },

            clearFields() {
                this.form.values.branch = '';
                this.form.values.department = '';
                this.form.values.position = '';
                this.form.values.first_name = '';
                this.form.values.middle_name = '';
                this.form.values.last_name = '';
                this.form.values.phone_number = '';
                this.form.values.birth_date = '';
                this.form.values.gender = '';
                this.form.values.email_address = '';
                this.form.values.status = 1;
                this.form.values.current_address = '';
                this.form.values.permanent_address = '';
                this.form.values.role = '';
                this.form.values.password = '';

                this.form.error.branch = '';
                this.form.error.department = '';
                this.form.error.position = '';
                this.form.error.first_name = '';
                this.form.error.last_name = '';
                this.form.error.phone_number = '';
                this.form.error.birth_date = '';
                this.form.error.gender = '';
                this.form.error.email_address = '';
                this.form.error.current_address = '';
                this.form.error.permanent_address = '';
                this.form.error.role = '';
                this.form.error.password = '';
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "resources/sass/_variables.scss";

    .image-preview {
        img {
            width: 100px;
            height: 100px;
        }
    }
</style>