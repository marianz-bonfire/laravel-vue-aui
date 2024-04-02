<template>
    <div>
        <h5><i class="fa fa-gears fa-lg"></i> <b>{{ $t('label.client_settings') }}</b></h5>
        <form-field
            class="form-group"
            :error="form.error.client_key">
            <b>{{ $t('label.client_key') }}</b>
            <input
                type="text"
                class="form-control"
                v-model="form.values.client_key"
                @keypress="form.error.client_key = ''">
        </form-field>
        <form-field
            class="form-group"
            :error="form.error.subscription_url">
            <b>{{ $t('label.subscription_url') }}</b>
            <input
                type="text"
                class="form-control"
                v-model="form.values.subscription_url"
                @keypress="form.error.subscription_url = ''">
        </form-field>
        <div align="right">
            <button class="btn btn-primary" @click="save">
                {{ $t('label.save_changes') }}
            </button>
            <button class="btn btn-light ml-1" @click="clearFields">
                {{ $t('label.clear') }}
            </button>
            <button class="btn btn-danger ml-1" @click="deleteSubscription">
                {{ $t('label.delete_subscription') }}
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
                        client_key: '',
                        subscription_url: '',
                    },
                    error: {
                        client_key: '',
                        subscription_url: '',
                    }
                },
            }
        },
        methods: {
            save() {
                this.form.error.client_key = this.form.values.client_key === '' ? this.$t('error.value_is_required', { value: this.$t('label.client_key') }) : '';
                this.form.error.subscription_url = this.form.values.subscription_url === '' ? this.$t('error.value_is_required', { value: this.$t('label.subscription_url') }) : '';

                if (this.form.values.client_key === ''
                    || this.form.values.subscription_url === '') {
                    return;
                }

                this.dialog.status = 'success';
                this.dialog.message = this.$t('success.value_successfully_saved', { value: this.$t('label.client_settings') });
                this.dialog.visible = true;
                this.dialog.ok = {
                    function: () => {
                        this.dialog.visible = false;
                    }
                }
            },

            clearFields() {
                this.form.values.client_key = '';
                this.form.values.subscription_url = '';

                this.form.error.client_key = '';
                this.form.error.subscription_url = '';
            },

            deleteSubscription() {
                this.dialog.status = 'confirm-yes-no';
                this.dialog.message = this.$t('message.delete_subscription');
                this.dialog.visible = true;
                this.dialog.ok = {
                    function: () => {
                        this.dialog.status = 'success';
                        this.dialog.message = this.$t('success.value_successfully_deleted', { value: this.$t('label.subscription') });
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
        }
    }
</script>