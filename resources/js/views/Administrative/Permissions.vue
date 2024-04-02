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
                            :error="tableData.error.display_name">
                            <template v-if="tableData.edit">
                                <input
                                    type="text"
                                    class="form-control"
                                    v-model="tableData.display_name"
                                    @keypress="tableData.error.display_name = ''">
                            </template>
                            <template v-else>
                                <span v-text="tableData.display_name"></span>
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
                            :error="tableData.error.guard_name">
                            <template v-if="tableData.edit">
                                <select
                                    class="form-control"
                                    v-model="tableData.guard_name"
                                    @change="tableData.error.guard_name = ''">
                                    <option :value="1">{{ $t('label.web') }}</option>
                                    <option :value="2">{{ $t('label.api') }}</option>
                                </select>
                            </template>
                            <template v-else>
                                <i
                                    class="fa"
                                    :class="tableData.guard_name === 1 ? 'fa-globe' : 'fa-link'">
                                </i>
                                <span v-text="tableData.guard_name === 1 ? $t('label.web') : $t('label.api')"></span>
                            </template>
                        </table-data>
                        <table-data
                            :error="tableData.error.group">
                            <template v-if="tableData.edit">
                                <input
                                    type="text"
                                    class="form-control"
                                    v-model="tableData.group"
                                    @keypress="tableData.error.group = ''">
                            </template>
                            <template v-else>
                                <span v-text="tableData.group"></span>
                            </template>
                        </table-data>
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
                            :error="table.add.error.display_name">
                            <input
                                type="text"
                                class="form-control"
                                v-model="table.add.display_name"
                                @keypress="table.add.error.display_name = ''">
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
                            :error="table.add.error.guard_name">
                            <select
                                class="form-control"
                                v-model="table.add.guard_name"
                                @change="table.add.error.guard_name = ''">
                                <option :value="1">{{ $t('label.web') }}</option>
                                <option :value="2">{{ $t('label.api') }}</option>
                            </select>
                        </table-data>
                        <table-data
                            :error="table.add.error.group">
                            <input
                                type="text"
                                class="form-control"
                                v-model="table.add.group"
                                @keypress="table.add.error.group = ''">
                        </table-data>
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
                            name: "display_name",
                            label: this.$t('label.display_name'),
                            width: '150'
                        },
                        {
                            name: "name",
                            label: this.$t('label.name'),
                            width: '150'
                        },
                        {
                            name: "guard_name",
                            label: this.$t('label.guard_name'),
                            width: '150'
                        },
                        {
                            name: "group",
                            label: this.$t('label.group'),
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
                        hasEdit: true,
                        hasDelete: true,
                        hasAdd: true
                    },
                    add: {
                        edit: false,
                        id: '',
                        display_name: '',
                        name: '',
                        guard_name: '',
                        group: '',
                        error: {
                            id: '',
                            display_name: '',
                            name: '',
                            guard_name: '',
                            group: '',
                        }
                    }
                }
            }
        },
        methods: {
            addRow(data) {
                this.table.add.error.id = this.table.add.id === '' ? this.$t('error.value_is_required', { value: this.$t('label.id') }) : '';
                this.table.add.error.display_name = this.table.add.display_name === '' ? this.$t('error.value_is_required', { value: this.$t('label.display_name') }) : '';
                this.table.add.error.name = this.table.add.name === '' ? this.$t('error.value_is_required', { value: this.$t('label.name') }) : '';
                this.table.add.error.guard_name = this.table.add.guard_name === '' ? this.$t('error.value_is_required', { value: this.$t('label.guard_name') }) : '';
                this.table.add.error.group = this.table.add.group === '' ? this.$t('error.value_is_required', { value: this.$t('label.group') }) : '';

                if (this.table.add.id === ''
                    || this.table.add.display_name === ''
                    || this.table.add.name === ''
                    || this.table.add.guard_name === ''
                    || this.table.add.group === '') {
                    return;
                }

                this.dialog.visible = true;
                this.dialog.status = 'success';
                this.dialog.message = this.$t('success.new_value_successfully_added', { value: this.$t('label.permissions') })
                this.dialog.ok = {
                    function: () => {
                        this.dialog.visible = false;
                    }
                }

                this.table.values.data.push({
                    edit: false,
                    id: data.values.id,
                    display_name: data.values.display_name,
                    name: data.values.name,
                    guard_name: data.values.guard_name,
                    group: data.values.group,
                    error: {
                        id: '',
                        display_name: '',
                        name: '',
                        guard_name: '',
                        group: '',
                    }
                });

                this.table.add = {
                    edit: false,
                    id: '',
                    display_name: '',
                    name: '',
                    guard_name: '',
                    group: '',
                    error: {
                        id: '',
                        display_name: '',
                        name: '',
                        guard_name: '',
                        group: '',
                    }
                };
            },

            updateRow(data) {
                let i = data.rowIndex;

                this.table.values.data[i].error.id = this.table.values.data[i].id === '' ? this.$t('error.value_is_required', { value: this.$t('label.id') }) : '';
                this.table.values.data[i].error.display_name = this.table.values.data[i].display_name === '' ? this.$t('error.value_is_required', { value: this.$t('label.display_name') }) : '';
                this.table.values.data[i].error.name = this.table.values.data[i].name === '' ? this.$t('error.value_is_required', { value: this.$t('label.name') }) : '';
                this.table.values.data[i].error.guard_name = this.table.values.data[i].guard_name === '' ? this.$t('error.value_is_required', { value: this.$t('label.guard_name') }) : '';

                if (this.table.values.data[i].id === ''
                    || this.table.values.data[i].display_name === ''
                    || this.table.values.data[i].name === ''
                    || this.table.values.data[i].guard_name === '') {
                    return;
                }

                data.done();

                this.dialog.visible = true;
                this.dialog.status = 'success';
                this.dialog.message = this.$t('success.value_successfully_updated', { value: this.$t('label.permissions') })
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
                        this.dialog.message = this.$t('success.value_successfully_deleted', { value: this.$t('label.permissions') });
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

            exportListAsPDF() {},

            exportListAsExcel() {}
        }
    }
</script>

<style lang="scss" scoped>
    @import "resources/sass/_variables.scss";
</style>