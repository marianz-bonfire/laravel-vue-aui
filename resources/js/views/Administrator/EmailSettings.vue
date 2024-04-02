<template>
    <div>
        <h5><i class="fa fa-envelope fa-lg"></i> <b>{{ $t('label.email_settings') }}</b></h5>
        <form-field
            class="form-group"
            :error="form.error.mailer">
            <b>{{ $t('label.mailer') }}</b>
            <input
                type="text"
                class="form-control"
                v-model="form.values.mailer"
                @keypress="form.error.mailer = ''">
        </form-field>
        <form-field
            class="form-group"
            :error="form.error.host_name">
            <b>{{ $t('label.host_name') }}</b>
            <input
                type="text"
                class="form-control"
                v-model="form.values.host_name"
                @keypress="form.error.host_name = ''">
        </form-field>
        <form-field
            class="form-group"
            :error="form.error.port">
            <b>{{ $t('label.port') }}</b>
            <input
                type="text"
                class="form-control"
                v-model="form.values.port"
                @keypress="form.error.port = ''">
        </form-field>
        <form-field
            class="form-group"
            :error="form.error.username">
            <b>{{ $t('label.username') }}</b>
            <input
                type="text"
                class="form-control"
                v-model="form.values.username"
                @keypress="form.error.username = ''">
        </form-field>
        <form-field
            class="form-group"
            :error="form.error.password">
            <b>{{ $t('label.password') }}</b>
            <input
                type="password"
                class="form-control"
                v-model="form.values.password"
                @keypress="form.error.password = ''">
        </form-field>
        <form-field
            class="form-group"
            :error="form.error.encryption">
            <b>{{ $t('label.encryption') }}</b>
            <input
                type="text"
                class="form-control"
                v-model="form.values.encryption"
                @keypress="form.error.encryption = ''">
        </form-field>
        <div align="right">
            <button class="btn btn-primary" @click="save">
                {{ $t('label.save_changes') }}
            </button>
            <button class="btn btn-light ml-1" @click="clearFields">
                {{ $t('label.clear') }}
            </button>
        </div>
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

    export default {
        components: {
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
                form: {
                    values: {
                        mailer: '',
                        host_name: '',
                        port: '',
                        username: '',
                        password: '',
                        encryption: '',
                    },
                    error: {
                        mailer: '',
                        host_name: '',
                        port: '',
                        username: '',
                        password: '',
                        encryption: '',
                    }
                },
            }
        },
        methods: {
            save() {
                this.form.error.mailer = this.form.values.mailer === '' ? this.$t('error.value_is_required', { value: this.$t('label.mailer') }) : '';
                this.form.error.host_name = this.form.values.host_name === '' ? this.$t('error.value_is_required', { value: this.$t('label.host_name') }) : '';
                this.form.error.port = this.form.values.port === '' ? this.$t('error.value_is_required', { value: this.$t('label.port') }) : '';
                this.form.error.username = this.form.values.username === '' ? this.$t('error.value_is_required', { value: this.$t('label.username') }) : '';
                this.form.error.password = this.form.values.password === '' ? this.$t('error.value_is_required', { value: this.$t('label.password') }) : '';
                this.form.error.encryption = this.form.values.encryption === '' ? this.$t('error.value_is_required', { value: this.$t('label.encryption') }) : '';

                if (this.form.values.mailer === ''
                    || this.form.values.host_name === ''
                    || this.form.values.port === ''
                    || this.form.values.username === ''
                    || this.form.values.password === ''
                    || this.form.values.encryption === '') {
                    return;
                }

                this.dialog.status = 'success';
                this.dialog.message = this.$t('success.value_successfully_saved', { value: this.$t('label.email_settings') });
                this.dialog.visible = true;
                this.dialog.ok = {
                    function: () => {
                        this.dialog.visible = false;
                    }
                }
            },

            clearFields() {
                this.form.values.mailer = '';
                this.form.values.host_name = '';
                this.form.values.port = '';
                this.form.values.username = '';
                this.form.values.password = '';
                this.form.values.encryption = '';

                this.form.error.mailer = '';
                this.form.error.host_name = '';
                this.form.error.port = '';
                this.form.error.username = '';
                this.form.error.password = '';
                this.form.error.encryption = '';
            }
        }
    }
</script>