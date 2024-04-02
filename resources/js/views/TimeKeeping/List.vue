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
                            <span v-text="tableData.id"></span>
                        </td>
                        <td class="datatable-cell">
                            <span v-text="tableData.name"></span>
                        </td>
                        <td class="datatable-cell">
                            <span v-text="tableData.date"></span>
                        </td>
                        <td class="datatable-cell">
                            <span v-text="tableData.days"></span>
                        </td>
                        <td class="datatable-cell tc--success">
                            <b v-text="tableData.time_in"></b>
                        </td>
                        <td class="datatable-cell tc--danger">
                            <b v-text="tableData.break_1_out"></b>
                        </td>
                        <td class="datatable-cell tc--success">
                            <b v-text="tableData.break_1_in"></b>
                        </td>
                        <td class="datatable-cell tc--danger">
                            <b v-text="tableData.break_2_out"></b>
                        </td>
                        <td class="datatable-cell tc--success">
                            <b v-text="tableData.break_2_in"></b>
                        </td>
                        <td class="datatable-cell tc--danger">
                            <b v-text="tableData.break_3_out"></b>
                        </td>
                        <td class="datatable-cell tc--success">
                            <b v-text="tableData.break_3_in"></b>
                        </td>
                        <td class="datatable-cell tc--danger">
                            <b v-text="tableData.time_out"></b>
                        </td>
                        <td align="center" class="datatable-cell">
                            <span
                                class="status-label w-100 text-uppercase"
                                :class="tableData.correction_status === 0 ? 'status-label--no-correction' : ''"
                                v-text="tableData.correction_status === 0 ? $t('label.no_correction') : ''">
                            </span>
                        </td>
                        <td class="datatable-cell" align="center">
                            <div class="dropdown">
                                <button class="btn btn-light dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fa fa-ellipsis-v fa-lg"></i>
                                </button>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" @click="correct(tableData, tableDataIndex)">
                                        <i class="fa fa-arrow-right fa-lg"></i>
                                        {{ $t('label.correct') }}
                                    </a>
                                </div>
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
                            name: "date",
                            label: this.$t('label.date'),
                            width: '150'
                        },
                        {
                            name: "days",
                            label: this.$t('label.days'),
                            width: '150'
                        },
                        {
                            name: "time_in",
                            label: this.$t('label.time_in'),
                            width: '120'
                        },
                        {
                            name: "break_1_out",
                            label: this.$t('label.break_1_out'),
                            width: '120'
                        },
                        {
                            name: "break_1_in",
                            label: this.$t('label.break_1_in'),
                            width: '120'
                        },
                        {
                            name: "break_2_out",
                            label: this.$t('label.break_2_out'),
                            width: '120'
                        },
                        {
                            name: "break_2_in",
                            label: this.$t('label.break_2_in'),
                            width: '120'
                        },
                        {
                            name: "break_3_out",
                            label: this.$t('label.break_3_out'),
                            width: '120'
                        },
                        {
                            name: "break_3_in",
                            label: this.$t('label.break_3_in'),
                            width: '120'
                        },
                        {
                            name: "time_out",
                            label: this.$t('label.time_out'),
                            width: '120'
                        },
                        {
                            name: "correction_status",
                            label: this.$t('label.correction_status'),
                            width: '150'
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
                                id: '1001',
                                name: 'Juan Dela Cruz',
                                date: 'Sept. 23, 2023',
                                days: 'Friday',
                                time_in: '09:00AM',
                                break_1_out: '-',
                                break_1_in: '-',
                                break_2_out: '-',
                                break_2_in: '-',
                                break_3_out: '-',
                                break_3_in: '-',
                                time_out: '-',
                                correction_status: 0,
                            },
                            {
                                id: '1002',
                                name: 'Juan Dela Cruz',
                                date: 'Sept. 23, 2023',
                                days: 'Friday',
                                time_in: '09:00AM',
                                break_1_out: '-',
                                break_1_in: '-',
                                break_2_out: '-',
                                break_2_in: '-',
                                break_3_out: '-',
                                break_3_in: '-',
                                time_out: '-',
                                correction_status: 0,
                            },
                            {
                                id: '1003',
                                name: 'Juan Dela Cruz',
                                date: 'Sept. 23, 2023',
                                days: 'Friday',
                                time_in: '09:00AM',
                                break_1_out: '-',
                                break_1_in: '-',
                                break_2_out: '-',
                                break_2_in: '-',
                                break_3_out: '-',
                                break_3_in: '-',
                                time_out: '-',
                                correction_status: 0,
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
            exportListAsPDF() {},

            exportListAsExcel() {},

            correct(data, index) {}
        }
    }
</script>

<style lang="scss" scoped>
    @import "resources/sass/_variables.scss";
</style>