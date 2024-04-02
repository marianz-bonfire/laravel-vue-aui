<template>
    <div class="module-container">
        <div class="module-content">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="card mt-3">
                            <div class="card-body">
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
                                <div class="row">
                                    <div class="col">
                                        <div class="alert alert-warning" role="alert">
                                            <h4 class="alert-heading"><b>{{ $t('info.assigning_employee_to_be_a_user') }}</b></h4>
                                            <p class="mb-0">{{ $t('message.select_role_instructions') }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <h5><b><i class="fa fa-key fa-lg"></i> {{ $t('label.credentials') }}</b></h5>
                                        <div class="row">
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
                                        <div class="row form-group">
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
                                        <div align="right" v-if="form.mode !== 'view'">
                                            <button class="btn btn-primary" @click="assign">
                                                {{ $t('label.assign') }}
                                            </button>
                                            <button class="btn btn-light" @click="clearFields">
                                                {{ $t('label.clear') }}
                                            </button>
                                        </div>
                                    </div>
                                </div>
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

    export default {
        components: {
            Datepicker,
            FormField
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
                        can_login: false,
                        role: '',
                        password: '',
                    },
                    error: {
                        role: '',
                        password: '',
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
                    this.form.values.can_login = loadedData.data.can_login;
                    this.form.values.current_address = loadedData.data.current_address;
                    this.form.values.permanent_address = loadedData.data.permanent_address;
                }
            },

            generatePassword() {
                let randomPassword = Math.random().toString(36).substr(2, 8);
                this.form.values.password = randomPassword;
                this.form.error.password = '';
            },

            assign() {
                this.form.error.role = this.form.values.role === '' ? this.$t('error.value_is_required', { value: this.$t('label.role') }) : '';
                this.form.error.password = this.form.values.password === '' ? this.$t('error.value_is_required', { value: this.$t('label.password') }) : '';

                if (this.form.values.role === ''
                    || this.form.values.password === '') {
                    return;
                }

                this.dialog.status = 'success';
                this.dialog.visible = true;
                this.dialog.message = this.$t('success.value_successfully_created', { value: this.$t('label.employee') });
                this.dialog.ok = {
                    function: () => {
                        this.dialog.visible = false;
                    }
                }
            },

            clearFields() {
                this.form.values.role = '';
                this.form.values.password = '';
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