<template>
    <div class="module-container">
        <div class="module-content">
            <datatable
                class="datatable--black"
                :header-fields="table.header"
                :settings="table.settings"
                :table="table.values"
                v-on:add-row="addRow"
                v-on:update-row="updateRow"
                v-on:delete-row="deleteRow">
                <template slot="content">
                    <table-row
                        type="view"
                        v-for="(tableData, tableDataIndex) in table.values.data" :key="tableDataIndex"
                        :values="tableData"
                        :settings="table.settings"
                        :rowIndex="tableDataIndex"
                        :row-enabling="true"
                        v-on:enable-row="tableData.edit = $event.state">
                        <table-data
                            :error="tableData.error.id">
                            <template v-if="tableData.edit">
                                <input
                                    type="text"
                                    class="form-control"
                                    v-model="tableData.id"
                                    @keypress="tableData.error.id = ''">
                            </template>
                            <template v-else>
                                <span v-text="tableData.id"></span>
                            </template>
                        </table-data>
                        <table-data
                            :error="tableData.error.name">
                            <template v-if="tableData.edit">
                                <input
                                    type="text"
                                    class="form-control"
                                    v-model="tableData.name"
                                    @keypress="tableData.error.name = ''">
                            </template>
                            <template v-else>
                                <span v-text="tableData.name"></span>
                            </template>
                        </table-data>
                        <table-data
                            :error="tableData.error.description">
                            <template v-if="tableData.edit">
                                <input
                                    type="text"
                                    class="form-control"
                                    v-model="tableData.description"
                                    @keypress="tableData.error.description = ''">
                            </template>
                            <template v-else>
                                <span v-text="tableData.description"></span>
                            </template>
                        </table-data>
                        <td class="datatable-cell">
                            <span
                                class="status-label w-100"
                                :class="tableData.status ? 'status-label--active' : 'status-label--inactive'"
                                v-text="tableData.status ? $t('label.active') : $t('label.inactive')">
                            </span>
                        </td>
                        <td class="datatable-cell">
                            <span class="badge badge-light">
                                <i class="fa fa-users"></i>
                                {{ tableData.employees_count }}
                            </span>
                        </td>
                    </table-row>
                    <table-row
                        type="add"
                        :values="table.add"
                        :settings="table.settings">
                        <table-data
                            :error="table.add.error.id">
                            <input
                                type="text"
                                class="form-control"
                                v-model="table.add.id"
                                @keypress="table.add.error.id = ''">
                        </table-data>
                        <table-data
                            :error="table.add.error.name">
                            <input
                                type="text"
                                class="form-control"
                                v-model="table.add.name"
                                @keypress="table.add.error.name = ''">
                        </table-data>
                        <table-data
                            :error="table.add.error.description">
                            <input
                                type="text"
                                class="form-control"
                                v-model="table.add.description"
                                @keypress="table.add.error.description = ''">
                        </table-data>
                        <td class="datatable-cell">
                            <select class="form-control" v-model="table.add.status">
                                <option :value="1">{{ $t('label.active') }}</option>
                                <option :value="0">{{ $t('label.inactive') }}</option>
                            </select>
                        </td>
                        <td class="datatable-cell">
                            <span class="badge badge-light">
                                <i class="fa fa-users"></i>
                                {{ table.add.employees_count }}
                            </span>
                        </td>
                    </table-row>
                </template>
            </datatable>
        </div>
        <side-navigation>
            <dropdown-menu-button
                icon="fa fa-print"
                direction="right"
                :isTooltip="true"
                @click.native="exportListAsExcel">
                <template slot="header">
                    {{ $t('label.export_to_excel') }}
                </template>
            </dropdown-menu-button>
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
    import Datatable from '../../components/Datatable2/Datatable.vue';
    import TableRow from '../../components/Datatable2/TableRow.vue';
    import TableData from '../../components/Datatable2/TableData.vue';

    export default {
        components: {
            Datatable,
            TableRow,
            TableData
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
                table: {
                    header: [
                        {
                            name: "id", 
                            label: this.$t('label.id'),
                            width: '100'
                        },
                        {
                            name: "name",
                            label: this.$t('label.name'),
                            width: '150'
                        },
                        {
                            name: "description",
                            label: this.$t('label.description'),
                            width: '150'
                        },
                        {
                            name: "status",
                            label: this.$t('label.status'),
                            width: '100'
                        },
                        {
                            name: "employees",
                            label: this.$t('label.employees'),
                            width: '120'
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
                        hasEdit: true,
                        hasDelete: true,
                        hasAdd: true
                    },
                    add: {
                        edit: false,
                        id: '',
                        name: '',
                        description: '',
                        status: 1,
                        employees_count: 0,
                        error: {
                            id: '',
                            name: '',
                            description: '',
                        }
                    }
                }
            }
        },
        methods: {
            addRow(data) {
                this.table.add.error.id = this.table.add.id === '' ? this.$t('error.value_is_required', { value: this.$t('label.id') }) : '';
                this.table.add.error.name = this.table.add.name === '' ? this.$t('error.value_is_required', { value: this.$t('label.name') }) : '';
                this.table.add.error.description = this.table.add.description === '' ? this.$t('error.value_is_required', { value: this.$t('label.description') }) : '';

                if (this.table.add.id === ''
                    || this.table.add.name === ''
                    || this.table.add.description === '') {
                    return;
                }

                this.dialog.visible = true;
                this.dialog.status = 'success';
                this.dialog.message = this.$t('success.new_value_successfully_added', { value: this.$t('label.position') })
                this.dialog.ok = {
                    function: () => {
                        this.dialog.visible = false;
                    }
                }

                this.table.values.data.push({
                    edit: false,
                    id: data.values.id,
                    name: data.values.name,
                    description: data.values.description,
                    status: data.values.status,
                    employees_count: data.values.employees_count,
                    error: {
                        id: '',
                        name: '',
                        description: ''
                    }
                });

                this.table.add = {
                    edit: false,
                    id: '',
                    name: '',
                    description: '',
                    status: 1,
                    employees_count: 0,
                    error: {
                        id: '',
                        name: '',
                        description: '',
                    }
                };
            },

            updateRow(data) {
                let i = data.rowIndex;

                this.table.values.data[i].error.id = this.table.values.data[i].id === '' ? this.$t('error.value_is_required', { value: this.$t('label.id') }) : '';
                this.table.values.data[i].error.name = this.table.values.data[i].name === '' ? this.$t('error.value_is_required', { value: this.$t('label.name') }) : '';
                this.table.values.data[i].error.description = this.table.values.data[i].description === '' ? this.$t('error.value_is_required', { value: this.$t('label.description') }) : '';

                if (this.table.values.data[i].id === ''
                    || this.table.values.data[i].name === ''
                    || this.table.values.data[i].description === '') {
                    return;
                }

                data.done();

                this.dialog.visible = true;
                this.dialog.status = 'success';
                this.dialog.message = this.$t('success.value_successfully_updated', { value: this.$t('label.position') })
                this.dialog.ok = {
                    function: () => {
                        this.dialog.visible = false;
                    }
                }
            },

            deleteRow(data) {
                if (data.type !== 'destroy') {
                    return;
                }
                
                this.dialog.status = 'delete';
                this.dialog.message = this.$t('message.once_deleted_message');
                this.dialog.visible = true;
                this.dialog.ok = {
                    function: () => {
                        this.table.values.data.splice(data.rowIndex, 1);
                        this.dialog.status = 'success';
                        this.dialog.message = this.$t('success.value_successfully_deleted', { value: this.$t('label.position') });
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

            exportListAsExcel() {}
        }
    }
</script>

<style lang="scss" scoped>
    @import "resources/sass/_variables.scss";
</style>