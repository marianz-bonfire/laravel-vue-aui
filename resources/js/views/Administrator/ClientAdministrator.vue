<template>
    <div>
        <h5><i class="fa fa-user fa-lg"></i> <b>{{ $t('label.client_administrator') }}</b></h5>
        <div class="form-group">
            <button class="btn btn-success" @click="sync">
                <i class="fa fa-refresh"></i>
                {{ $t('label.sync_client_master_administrator') }}
            </button>
        </div>
        <div class="form-group">
            <div class="user-info">
                <img src="/images/user.png" class="user-image">
                <div class="ml-2">
                    <h5 class="mb-0"><b class="text-uppercase">{{ form.values.first_name + ' ' + form.values.middle_name + ' ' + form.values.last_name }}</b></h5>
                    <span class="text-secondary">{{ form.values.position }}</span>
                </div>
            </div>
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
    export default {
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
                        first_name: 'Juan',
                        middle_name: 'Dela',
                        last_name: 'Cruz',
                        position: 'Corporate Administrator',
                    }
                }
            }
        },
        methods: {
            sync() {
                this.dialog.status = 'success';
                this.dialog.message = this.$t('success.value_successfully_synced', { value: this.$t('label.client_master_administrator') });
                this.dialog.visible = true;
                this.dialog.ok = {
                    function: () => {
                        this.dialog.visible = false;
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "resources/sass/_variables.scss";

    .user-info {
        display: flex;
        align-items: center;
        .user-image {
            width: 50px;
            height: 50px;
        }
    }
</style>