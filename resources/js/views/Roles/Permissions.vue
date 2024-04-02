<template>
    <div class="module-container">
        <div class="module-content">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="card mt-3">
                            <div class="card-body">
                                <div class="form-group">
                                    <b>{{ $t('label.role_name') }}:</b>
                                    <h5>{{ form.values.role_name }}</h5>
                                </div>
                                <div class="form-group">
                                    <b>{{ $t('label.description') }}:</b>
                                    <h5>{{ form.values.description }}</h5>
                                </div>
                                <div class="form-group">
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <td rowspan="2"><b>{{ $t('label.cdis_duty_modules') }}</b></td>
                                                <td align="center" colspan="5"><b>{{ $t('label.crud_functionality') }}</b></td>
                                                <td align="center" colspan="3"><b>{{ $t('label.maker') }}</b></td>
                                                <td align="center"><b>{{ $t('label.approver') }}</b></td>
                                            </tr>
                                            <tr>
                                                <td align="center"><b>{{ $t('label.view') }}</b></td>
                                                <td align="center"><b>{{ $t('label.edit') }}</b></td>
                                                <td align="center"><b>{{ $t('label.delete') }}</b></td>
                                                <td align="center"><b>{{ $t('label.create') }}</b></td>
                                                <td align="center"><b>{{ $t('label.assign') }}</b></td>
                                                <td align="center"><b>{{ $t('label.report') }}</b></td>
                                                <td align="center"><b>{{ $t('label.request') }}</b></td>
                                                <td align="center"><b>{{ $t('label.post') }}</b></td>
                                                <td align="center"><b>{{ $t('label.approve') }}</b></td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><b>{{ $t('label.users') }}</b></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                            </tr>
                                            <tr>
                                                <td><b>{{ $t('label.permissions') }}</b></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                            </tr>
                                            <tr>
                                                <td><b>{{ $t('label.audit') }}</b></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                            </tr>
                                            <tr>
                                                <td><b>{{ $t('label.time_corrections') }}</b></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                            </tr>
                                            <tr>
                                                <td><b>{{ $t('label.time_logs') }}</b></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                            </tr>
                                            <tr>
                                                <td><b>{{ $t('label.time_attendances') }}</b></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                            </tr>
                                            <tr>
                                                <td><b>{{ $t('label.time_records') }}</b></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                            </tr>
                                            <tr>
                                                <td><b>{{ $t('label.dashboard') }}</b></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                            </tr>
                                            <tr>
                                                <td><b>{{ $t('label.access_codes') }}</b></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                            </tr>
                                            <tr>
                                                <td><b>{{ $t('label.schedules') }}</b></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                            </tr>
                                            <tr>
                                                <td><b>{{ $t('label.payroll_groups') }}</b></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                            </tr>
                                            <tr>
                                                <td><b>{{ $t('label.holiday_types') }}</b></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                            </tr>
                                            <tr>
                                                <td><b>{{ $t('label.holidays') }}</b></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                            </tr>
                                            <tr>
                                                <td><b>{{ $t('label.positions') }}</b></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                            </tr>
                                            <tr>
                                                <td><b>{{ $t('label.branches') }}</b></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                            </tr>
                                            <tr>
                                                <td><b>{{ $t('label.departments') }}</b></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                            </tr>
                                            <tr>
                                                <td><b>{{ $t('label.employees') }}</b></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                            </tr>
                                            <tr>
                                                <td><b>{{ $t('label.roles') }}</b></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                                <td align="center"><input type="checkbox" value="" v-model="permissions"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div align="right">
                                    <button class="btn btn-primary" @click="save">
                                        {{ $t('label.save') }}
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
                        role_name: '',
                        description: '',
                        status: 1
                    }
                },
                permissions: []
            }
        },
        mounted() {
            this.assignData();
        },
        methods: {
            assignData() {
                let loadedData = QueryString.parse(window.location.search.substr(1));

                if (loadedData.data) {
                    this.form.values.role_name = loadedData.data.role_name;
                    this.form.values.description = loadedData.data.description;
                    this.form.values.status = Number(loadedData.data.status);
                }
            },

            save() {
                this.dialog.status = 'success';
                this.dialog.message = this.$t('success.value_successfully_saved', { value: this.$t('label.role_permissions') });
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
</style>