<template>
    <div class="module-container">
        <div class="module-content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col">
                        <div class="card mt-3">
                            <div class="card-body">
                                <div class="employee-profile form-group">
                                    <img src="/images/user.png" alt="">
                                    <div class="employee-info">
                                        <h4 class="mb-0">{{ $t('label.employee_id') }}: {{ form.values.id }}</h4>
                                        <h3><b class="text-uppercase">{{ form.values.first_name + ' ' + form.values.middle_name + ' ' + form.values.last_name }}</b></h3>
                                        <h5>
                                            <span class="tags">
                                                <i class="fa fa-envelope"></i>
                                                {{ form.values.email_address }}
                                            </span>
                                            <span class="tags ml-1">
                                                <i class="fa fa-phone"></i>
                                                {{ form.values.phone_number }}
                                            </span>
                                            <span class="tags ml-1">
                                                <i class="fa fa-birthday-cake"></i>
                                                {{ form.values.birth_date }}
                                            </span>
                                        </h5>
                                    </div>
                                </div>
                                <hr>
                                <div class="form-group">
                                    <b>{{ $t('label.effective_date') }}</b>:
                                    <form-field
                                        :error="form.error.effective_date">
                                        <datepicker
                                            format="MMM. dd, yyyy"
                                            v-model="effectiveDate"
                                            @selected="form.error.effective_date = ''">
                                        </datepicker>
                                    </form-field>
                                </div>
                                <div class="form-group">
                                    <work-schedule
                                        :header="$t('label.sunday')">
                                    </work-schedule>
                                    <work-schedule
                                        :header="$t('label.monday')">
                                    </work-schedule>
                                    <work-schedule
                                        :header="$t('label.tuesday')">
                                    </work-schedule>
                                    <work-schedule
                                        :header="$t('label.wednesday')">
                                    </work-schedule>
                                    <work-schedule
                                        :header="$t('label.thursday')">
                                    </work-schedule>
                                    <work-schedule
                                        :header="$t('label.friday')">
                                    </work-schedule>
                                    <work-schedule
                                        :header="$t('label.saturday')">
                                    </work-schedule>
                                </div>
                                <div align="right">
                                    <button class="btn btn-primary" @click="save">
                                        {{ $t('label.save_schedule') }}
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
    import FormField from '../../components/Containers/FormField.vue';
    import Datepicker from 'vuejs-datepicker';
    import WorkSchedule from './WorkSchedule.vue';

    export default {
        components: {
            FormField,
            Datepicker,
            WorkSchedule
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
                        effective_date: '',
                        id: '',
                        first_name: '',
                        middle_name: '',
                        last_name: '',
                        birth_date: '',
                        email_address: '',
                        phone_number: ''
                    },
                    error: {
                        effective_date: '',
                    }
                }
            }
        },
        computed: {
            effectiveDate: {
                get() {
                    return this.form.values.effective_date;
                },
                set(value) {
                    let date = moment(value).format('YYYY-MM-DD');
                    this.form.values.effective_date = date;
                }
            },
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
                    this.form.values.first_name = loadedData.data.first_name;
                    this.form.values.middle_name = loadedData.data.middle_name;
                    this.form.values.last_name = loadedData.data.last_name;
                    this.form.values.birth_date = moment(loadedData.data.birth_date).format('MMM. DD, YYYY');
                    this.form.values.email_address = loadedData.data.email_address;
                    this.form.values.phone_number = loadedData.data.phone_number;
                }
            },

            save() {
                this.form.error.effective_date = this.form.values.effective_date === '' ? this.$t('error.value_is_required', { value: this.$t('label.effective_date') }) : '';

                if (this.form.values.effective_date === '') {
                    return;
                }

                this.dialog.status = 'success';
                this.dialog.message = this.$t('success.value_successfully_saved', { value: this.$t('label.employee_schedule') });
                this.dialog.visible = true;
                this.dialog.ok = {
                    function: () => {
                        this.dialog.visible = false;
                    }
                }
            },

            clearFields() {
                this.form.values.effective_date = '';

                this.form.error.effective_date = '';
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "resources/sass/_variables.scss";

    .employee-profile {
        display: flex;
        align-items: center;
        img {
            padding: 5px;
            border: 1px $gray solid;
            border-radius: 10px;
            width: 100px;
            height: 100px;
        }
        .employee-info {
            margin-left: 15px;
        }
    }

    .tags {
        border: 1px $gray solid;
        padding: 4px 8px;
        background-color: $white;
        color: $black;
        border-radius: 6px;
        span {
            font-size: 14px;
        }
    }
</style>