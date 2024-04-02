<template>
    <div class="module-container">
        <div class="module-content">
            <datatable
                class="datatable--black"
                :header-fields="table.header"
                :settings="table.settings"
                :table="table.values">
                <template slot="content">
                    <table-row
                        type="view"
                        v-for="(tableData, tableDataIndex) in table.values.data" :key="tableDataIndex"
                        :values="tableData"
                        :settings="table.settings"
                        :rowIndex="tableDataIndex">
                        <td class="datatable-cell">
                            <span v-text="tableData.id"></span>
                        </td>
                        <td class="datatable-cell">
                            <span v-text="tableData.assigned_to.label"></span>
                        </td>
                        <td class="datatable-cell">
                            <span v-text="tableData.branch"></span>
                        </td>
                        <td class="datatable-cell">
                            <span v-text="tableData.expiration_date"></span>
                        </td>
                        <td class="datatable-cell">
                            <span v-text="tableData.code"></span>
                        </td>
                        <td class="datatable-cell">
                            <span v-text="tableData.password"></span>
                        </td>
                        <td class="datatable-cell">
                            <span v-text="tableData.usage"></span>
                        </td>
                        <td class="datatable-cell">
                            <span v-text="tableData.last_used_date"></span>
                        </td>
                        <td class="datatable-cell">
                            <span
                                class="status-label w-100"
                                :class="tableData.status ? 'status-label--active' : 'status-label--inactive'"
                                v-text="tableData.status ? $t('label.active') : $t('label.inactive')">
                            </span>
                        </td>
                        <td class="datatable-cell" align="center">
                            <div class="d-flex justify-content-around">
                                <span class="action-button">
                                    <i class="fa fa-edit fa-lg row-edit" :title="$t('label.edit')" @click="updateRow(tableData, tableDataIndex)"></i>
                                </span>
                                <span class="action-button">
                                    <i class="fa fa-trash fa-lg row-delete" :title="$t('label.delete')" @click="deleteRow(tableDataIndex)"></i>
                                </span>
                            </div>
                        </td>
                    </table-row>
                </template>
            </datatable>
        </div>
        <side-navigation>
            <dropdown-menu-button
                icon="fa fa-print"
                direction="right"
            >
                <template slot="header">
                    {{ $t('label.export_options') }}
                </template>
                <template slot="content">
                    <table class="list">
                        <tr>
                            <td v-on:click="exportListAsPDF"><i class="fa fa-file-pdf-o"></i>{{ $t('label.as_pdf') }}</td>
                        </tr>
                        <tr>
                            <td v-on:click="exportListAsExcel"><i class="fa fa-file-excel-o"></i>{{ $t('label.as_excel') }}</td>
                        </tr>
                    </table>
                </template>
            </dropdown-menu-button>
            <dropdown-menu-button
                icon="fa fa-plus-square"
                direction="right"
                :isTooltip="true"
                @click.native="create">
                <template slot="header">
                    {{ $t('label.create_new_value', { value: this.$t('label.access_code') }) }}
                </template>
            </dropdown-menu-button>
        </side-navigation>
        <modal
            width="600px"
            v-if="modal.detail.visible"
            @close="modal.detail.visible = false">
            <template slot="header">
                {{ modal.detail.title }}
            </template>
            <template slot="content">
                <div class="form-group">
                    <b>{{ $t('label.assigned_to') }}</b>:
                    <form-field
                        :error="form.error.assigned_to">
                        <v-select
                            v-model="form.values.assigned_to"
                            :clearable="false"
                            :placeholder="$t('label.select_value', { value: $t('label.employee') })"
                            :options="selections.employee.options"
                            @input="form.error.employee = ''">
                        </v-select>
                    </form-field>
                </div>
                <div class="form-group">
                    <label class="radio-checkbox">
                        <input type="checkbox" v-model="form.values.has_expiration">
                        <span>{{ $t('info.specific_expiration_date') }}</span>
                    </label>
                </div>
                <div class="form-group" v-if="form.values.has_expiration">
                    <b>{{ $t('label.expiration_date') }}</b>:
                    <form-field
                        :error="form.error.expiration_date">
                        <datepicker
                            format="MMM. dd, yyyy"
                            v-model="expirationDate"
                            @selected="form.error.expiration_date = ''">
                        </datepicker>
                    </form-field>
                </div>
            </template>
            <template slot="footer">
                <div align="right">
                    <button class="btn btn-primary" @click="save">
                        {{ $t('label.save') }}
                    </button>
                    <button class="btn btn-light" @click="clearFields">
                        {{ $t('label.clear') }}
                    </button>
                </div>
            </template>
        </modal>
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
    import TableData from '../../components/Datatable2/TableData.vue';
    import FormField from '../../components/Containers/FormField.vue';
    import Datepicker from 'vuejs-datepicker';

    export default {
        components: {
            Datatable,
            TableRow,
            TableData,
            FormField,
            Datepicker
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
                modal: {
                    detail: {
                        title: '',
                        visible: false
                    }
                },
                form: {
                    mode: 'create',
                    index: 0,
                    values: {
                        assigned_to: '',
                        expiration_date: '',
                        has_expiration: false,
                        status: 1,
                    },
                    error: {
                        assigned_to: '',
                        expiration_date: '',
                    }
                },
                selections: {
                    employee: {
                        options: [
                            { label: 'Employee 1', value: 'Employee 1' },
                            { label: 'Employee 2', value: 'Employee 1' },
                            { label: 'Employee 3', value: 'Employee 1' },
                        ]
                    }
                },
                table: {
                    header: [
                        {
                            name: "id", 
                            label: this.$t('label.id'),
                            width: '100'
                        },
                        {
                            name: "assigned_to",
                            label: this.$t('label.assigned_to'),
                            width: '150'
                        },
                        {
                            name: "branch",
                            label: this.$t('label.branch'),
                            width: '150'
                        },
                        {
                            name: "expiration_date",
                            label: this.$t('label.expiration_date'),
                            width: '150'
                        },
                        {
                            name: "code",
                            label: this.$t('label.code'),
                            width: '120'
                        },
                        {
                            name: "password",
                            label: this.$t('label.password'),
                            width: '120'
                        },
                        {
                            name: "usage",
                            label: this.$t('label.usage'),
                            width: '120'
                        },
                        {
                            name: "last_used_date",
                            label: this.$t('label.last_used_date'),
                            width: '120'
                        },
                        {
                            name: "status",
                            label: this.$t('label.status'),
                            width: '100'
                        },
                        {
                            name: "actions",
                            label: this.$t('label.actions'),
                            width: '100'
                        }
                    ],
                    values: {
                        data: [],
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
                        withRowNumbers: true,
                        hasEdit: false,
                        hasDelete: false,
                        hasAdd: false
                    }
                }
            }
        },
        computed: {
            expirationDate: {
                get() {
                    return this.form.values.expiration_date;
                },
                set(value) {
                    let date = moment(value).format('YYYY-MM-DD');
                    this.form.values.expiration_date = date;
                }
            },
        },
        methods: {
            create() {
                this.clearFields();
                this.form.mode = 'create';
                this.modal.detail.title = this.$t('label.create_new_value', { value: this.$t('label.access_code') })
                this.modal.detail.visible = true;
            },

            updateRow(data, index) {
                this.clearFields();
                this.form.mode = 'update';
                this.form.index = index;
                this.form.values = {...data};
                this.modal.detail.title = this.$t('label.update_value', { value: this.$t('label.access_code') })
                this.modal.detail.visible = true;
            },

            deleteRow(index) {
                this.dialog.status = 'delete';
                this.dialog.message = this.$t('message.once_deleted_message');
                this.dialog.visible = true;
                this.dialog.ok = {
                    function: () => {
                        this.table.values.data.splice(index, 1);
                        this.dialog.status = 'success';
                        this.dialog.message = this.$t('success.value_successfully_deleted', { value: this.$t('label.access_code') });
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

            save() {
                let mode = this.form.mode;
                let i = this.form.index;

                this.form.error.assigned_to = this.form.values.assigned_to === '' ? this.$t('error.value_is_required', { value: this.$t('label.assigned_to') }) : '';

                if (this.form.values.has_expiration) {
                    this.form.error.expiration_date = this.form.values.expiration_date === '' ? this.$t('error.value_is_required', { value: this.$t('label.expiration_date') }) : '';
                } else {
                    this.form.values.expiration_date = '';
                    this.form.error.expiration_date = '';
                }

                if (this.form.values.assigned_to === ''
                    || (this.form.values.has_expiration && this.form.values.expiration_date === '')) {
                    return;
                }

                if (mode === 'create') {
                    this.table.values.data.push({...this.form.values});

                    this.dialog.message = this.$t('success.value_successfully_created', { value: this.$t('label.access_code') });
                } else {
                    this.table.values.data[i] = {...this.form.values};

                    this.dialog.message = this.$t('success.value_successfully_updated', { value: this.$t('label.access_code') });
                }

                this.dialog.visible = true;
                this.dialog.status = 'success';
                this.modal.detail.visible = false;
                this.dialog.ok = {
                    function: () => {
                        this.dialog.visible = false;
                    }
                }
            },

            clearFields() {
                this.form.values.assigned_to = '';
                this.form.values.expiration_date = '';
                this.form.values.status = 1;
                this.form.values.has_expiration = false;

                this.form.error.assigned_to = '';
                this.form.error.expiration_date = '';
            },

            exportListAsPDF() {},

            exportListAsExcel() {}
        }
    }
</script>

<style lang="scss" scoped>
    @import "resources/sass/_variables.scss";
</style>