<template>
    <div class="module-container">
        <div class="module-content">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="card mt-3">
                            <div class="card-body">
                                <div class="form-group">
                                    <b>{{ $t('label.branch_name') }}:</b>
                                    <input
                                        type="text"
                                        class="form-control"
                                        v-model="form.values.branch_name"
                                        readonly>
                                </div>
                                <div class="form-group">
                                    <b>{{ $t('label.address') }}:</b>
                                    <textarea
                                        class="form-control"
                                        v-model="form.values.address"
                                        readonly>
                                    </textarea>
                                </div>
                                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                                    <h4 class="alert-heading">{{ $t('label.note') }}</h4>
                                    <ul class="mb-0">
                                        <li>Information below will be visible as header of the generated report.</li>
                                        <li>Please leave empty addresses below if you want retain current branch address</li>
                                    </ul>
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
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
                                        <div class="row">
                                            <div class="col-xl-12">
                                                <div class="form-group">
                                                    <b>{{ $t('label.address_line_1') }}:</b>
                                                    <textarea
                                                        class="form-control"
                                                        rows="4"
                                                        v-model="form.values.address_line_1">
                                                    </textarea>
                                                </div>
                                            </div>
                                            <div class="col-xl-12">
                                                <div class="form-group">
                                                    <b>{{ $t('label.address_line_2') }}:</b>
                                                    <textarea
                                                        class="form-control"
                                                        rows="4"
                                                        v-model="form.values.address_line_2">
                                                    </textarea>
                                                </div>
                                            </div>
                                            <div class="col-xl-4">
                                                <div class="form-group">
                                                    <b>{{ $t('label.telephone_number') }}:</b>
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        v-model="form.values.telephone_number">
                                                </div>
                                            </div>
                                            <div class="col-xl-4">
                                                <div class="form-group">
                                                    <b>{{ $t('label.mobile_number') }}:</b>
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        v-model="form.values.mobile_number">
                                                </div>
                                            </div>
                                            <div class="col-xl-4">
                                                <div class="form-group">
                                                    <b>{{ $t('label.email_address') }}:</b>
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        v-model="form.values.email_address">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div align="right">
                                    <button class="btn btn-primary" @click="save">
                                        {{ $t('label.save_changes') }}
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
                form: {
                    values: {
                        branch_name: '',
                        address: '',
                        address_line_1: '',
                        address_line_2: '',
                        telephone_number: '',
                        mobile_number: '',
                        email_address: '',
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
                    this.form.values.branch_name = loadedData.data.branch_name;
                    this.form.values.address = loadedData.data.address;
                }
            },

            save() {
                this.dialog.status = 'success';
                this.dialog.message = this.$t('success.value_successfully_updated', { value: this.$t('label.branch') });
                this.dialog.visible = true;
                this.dialog.ok = {
                    function: () => {
                        this.dialog.visible = false;
                    }
                }
            },

            clearFields() {
                this.form.values.address_line_1 = '';
                this.form.values.address_line_2 = '';
                this.form.values.telephone_number = '';
                this.form.values.mobile_number = '';
                this.form.values.email_address = '';
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