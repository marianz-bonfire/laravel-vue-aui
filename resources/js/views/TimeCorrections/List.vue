<template>
    <div class="module-container">
        <div class="module-content">
            <datatable
                class="
                    datatable--full-width
                    datatable--black"
                :header-fields="table.header"
                :settings="table.settings"
                :table="table.values">
                <template slot="content">
                    <table-row
                        v-for="(tableData, tableDataIndex) in table.values.data" :key="tableDataIndex"
                        :values="tableData"
                        :settings="table.settings"
                        :rowIndex="tableDataIndex">
                        <td class="datatable-cell">
                            <span v-text="tableData.employee_id"></span>
                        </td>
                        <td class="datatable-cell">
                            <span v-text="tableData.employee_name"></span>
                        </td>
                        <td class="datatable-cell">
                            <span v-text="tableData.days"></span>
                        </td>
                        <td class="datatable-cell">
                            <span v-text="tableData.date_recorded"></span>
                        </td>
                        <td class="datatable-cell">
                            <span v-text="tableData.date_corrected"></span>
                        </td>
                        <td class="datatable-cell">
                            <span v-text="tableData.corrected_by"></span>
                        </td>
                        <td class="datatable-cell">
                            <span v-text="tableData.remarks"></span>
                        </td>
                        <td align="center" class="datatable-cell">
                            <span
                                class="status-label w-100 text-uppercase"
                                :class="tableData.status === 1 ? 'status-label--posted' : ''"
                                v-text="tableData.status === 1 ? $t('label.posted') : ''">
                            </span>
                        </td>
                        <td class="datatable-cell" align="center">
                            <span class="action-button">
                                <i class="fa fa-check fa-lg row-approve" :title="$t('label.approve')" @click="approveRow"></i>
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
            TableData,
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
                            name: "employee_id",
                            label: this.$t('label.employee_id'),
                            width: '100'
                        },
                        {
                            name: "employee_name",
                            label: this.$t('label.employee_name'),
                            width: '150'
                        },
                        {
                            name: "days",
                            label: this.$t('label.days'),
                            width: '150'
                        },
                        {
                            name: "date_recorded",
                            label: this.$t('label.date_recorded'),
                            width: '150'
                        },
                        {
                            name: "date_corrected",
                            label: this.$t('label.date_corrected'),
                            width: '150'
                        },
                        {
                            name: "corrected_by",
                            label: this.$t('label.corrected_by'),
                            width: '150'
                        },
                        {
                            name: "remarks",
                            label: this.$t('label.remarks'),
                            width: '150'
                        },
                        {
                            name: "status",
                            label: this.$t('label.status'),
                            width: '120'
                        },
                        {
                            name: "actions",
                            label: '',
                            width: '70'
                        },
                    ],
                    values: {
                        data: [
                            {
                                employee_id: '1001',
                                employee_name: 'Juan Dela Cruz',
                                days: '3 days',
                                date_recorded: 'Sept. 22, 2023',
                                date_corrected: 'Sept. 22, 2023',
                                corrected_by: 'superadmin',
                                remarks: 'This is a sample remarks.',
                                status: 1,
                            },
                            {
                                employee_id: '1002',
                                employee_name: 'Juan Dela Cruz',
                                days: '3 days',
                                days: 'Friday',
                                date_recorded: 'Sept. 22, 2023',
                                date_corrected: 'Sept. 22, 2023',
                                corrected_by: 'superadmin',
                                remarks: 'This is a sample remarks.',
                                status: 1,
                            },
                            {
                                employee_id: '1003',
                                employee_name: 'Juan Dela Cruz',
                                days: '3 days',
                                days: 'Friday',
                                date_recorded: 'Sept. 22, 2023',
                                date_corrected: 'Sept. 22, 2023',
                                corrected_by: 'superadmin',
                                remarks: 'This is a sample remarks.',
                                status: 1,
                            }
                        ],
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
        mounted() {
            $('.dropdown-toggle').dropdown();
        },
        methods: {
            approveRow() {
                this.dialog.status = 'success';
                this.dialog.message = this.$t('success.value_successfully_approved', { value: this.$t('label.time_correction') });
                this.dialog.visible = true;
                this.dialog.ok = {
                    function: () => {
                        this.dialog.visible = false;
                    }
                }
            },

            exportListAsPDF() {},

            exportListAsExcel() {},

            correct(data, index) {}
        }
    }
</script>

<style lang="scss" scoped>
    @import "resources/sass/_variables.scss";
</style>