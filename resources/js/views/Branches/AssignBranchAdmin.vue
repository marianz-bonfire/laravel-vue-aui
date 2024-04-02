<template>
    <div class="module-container">
        <div class="module-content">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="card mt-3">
                            <div class="card-body">
                                <div class="form-group">
                                    <b>{{ $t('label.branch') }}:</b>
                                    <input
                                        type="text"
                                        class="form-control"
                                        v-model="form.values.branch_name"
                                        readonly>
                                </div>
                                <div class="form-group">
                                    <b>{{ $t('label.role') }}:</b>
                                    <input
                                        type="text"
                                        class="form-control"
                                        v-model="form.values.role"
                                        readonly>
                                </div>
                                <div class="form-group">
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
                                            <br>
                                            <div class="custom-control custom-switch">
                                                <input type="checkbox" class="custom-control-input" id="send-email" v-model="form.values.send_email">
                                                <label class="custom-control-label" for="send-email">
                                                    {{ $t('info.send_email_note') }}
                                                </label>
                                            </div>
                                        </div>
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
                                            <button class="btn btn-success" @click="generatePassword">
                                                <i class="fa fa-refresh"></i>
                                                {{ $t('label.generate_password') }}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div align="right">
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
                },
                form: {
                    values: {
                        branch_name: '',
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
                        send_email: false,
                        password: '',
                    },
                    error: {
                        department: '',
                        position: '',
                        first_name: '',
                        last_name: '',
                        phone_number: '',
                        birth_date: '',
                        gender: '',
                        email_address: '',
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
                    this.form.values.branch_name = loadedData.data.branch_name;
                    this.form.values.role = loadedData.data.role;
                }
            },

            generatePassword() {
                let randomPassword = Math.random().toString(36).substr(2, 8);
                this.form.values.password = randomPassword;
                this.form.error.password = '';
            },

            assign() {
                this.form.error.department = this.form.values.department === '' ? this.$t('error.value_is_required', { value: this.$t('label.department') }) : '';
                this.form.error.position = this.form.values.position === '' ? this.$t('error.value_is_required', { value: this.$t('label.position') }) : '';
                this.form.error.first_name = this.form.values.first_name === '' ? this.$t('error.value_is_required', { value: this.$t('label.first_name') }) : '';
                this.form.error.last_name = this.form.values.last_name === '' ? this.$t('error.value_is_required', { value: this.$t('label.last_name') }) : '';
                this.form.error.phone_number = this.form.values.phone_number === '' ? this.$t('error.value_is_required', { value: this.$t('label.phone_number') }) : '';
                this.form.error.birth_date = this.form.values.birth_date === '' ? this.$t('error.value_is_required', { value: this.$t('label.birth_date') }) : '';
                this.form.error.gender = this.form.values.gender === '' ? this.$t('error.value_is_required', { value: this.$t('label.gender') }) : '';
                this.form.error.email_address = this.form.values.email_address === '' ? this.$t('error.value_is_required', { value: this.$t('label.email_address') }) : '';
                this.form.error.password = this.form.values.password === '' ? this.$t('error.value_is_required', { value: this.$t('label.password') }) : '';

                if (this.form.values.branch === ''
                    || this.form.values.role === ''
                    || this.form.values.department === ''
                    || this.form.values.position === ''
                    || this.form.values.first_name === ''
                    || this.form.values.last_name === ''
                    || this.form.values.phone_number === ''
                    || this.form.values.birth_date === ''
                    || this.form.values.gender === ''
                    || this.form.values.email_address === ''
                    || this.form.values.password === '') {
                    return;
                }

                this.dialog.status = 'success';
                this.dialog.message = this.$t('success.value_successfully_assigned', { value: this.$t('label.branch_admin') });
                this.dialog.visible = true;
                this.dialog.ok = {
                    function: () => {
                        this.dialog.visible = false;
                    }
                }
            },

            clearFields() {
                this.form.values.branch = '';
                this.form.values.role = '';
                this.form.values.department = '';
                this.form.values.position = '';
                this.form.values.first_name = '';
                this.form.values.middle_name = '';
                this.form.values.last_name = '';
                this.form.values.phone_number = '';
                this.form.values.birth_date = '';
                this.form.values.gender = '';
                this.form.values.email_address = '';
                this.form.values.send_email = false;
                this.form.values.password = '';

                this.form.error.branch = '';
                this.form.error.role = '';
                this.form.error.department = '';
                this.form.error.position = '';
                this.form.error.first_name = '';
                this.form.error.last_name = '';
                this.form.error.phone_number = '';
                this.form.error.birth_date = '';
                this.form.error.gender = '';
                this.form.error.email_address = '';
                this.form.error.password = '';
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "resources/sass/_variables.scss";
</style>