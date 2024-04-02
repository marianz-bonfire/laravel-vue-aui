<template>
    <div class="module-container">
        <div class="module-content">
            <div class="box-row d-flex justify-content-between pl-2">
                <h5 class="d-flex align-items-center mb-0 text-uppercase"><b>{{ branch_name }}</b></h5>
                <table class="table-layout">
                    <tr>
                        <td><b>{{ $t('label.search') }}</b>:</td>
                        <td>
                            <input type="text" class="form-control" v-model="search">
                        </td>
                    </tr>
                </table>
            </div>
            <datatable
                class="datatable--black"
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
                            <span v-text="tableData.system_date"></span>
                        </td>
                        <td class="datatable-cell">
                            <span v-text="tableData.time_from"></span>
                        </td>
                        <td class="datatable-cell">
                            <span v-text="tableData.time_to"></span>
                        </td>
                        <td class="datatable-cell">
                            <span v-text="tableData.time_interval_minute"></span>
                        </td>
                        <td class="datatable-cell">
                            <span>
                                <i
                                    class="fa fa-arrow-right"
                                    :class="tableData.change_status === 1 ? 'fa-arrow-right text-warning' : ''">
                                </i>
                                {{ tableData.change_status === 1 ? $t('label.forward') : '' }}
                            </span>
                        </td>
                        <td class="datatable-cell">
                            <span v-text="tableData.remarks"></span>
                        </td>
                        <td class="datatable-cell">
                            <span v-text="tableData.service_message"></span>
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
    </div>
</template>

<script>
    import Datatable from '../../components/Datatable2/Datatable';
    import TableRow from '../../components/Datatable2/TableRow';

    export default {
        components: {
            Datatable,
            TableRow
        },
        data() {
            return {
                search: '',
                branch_name: '',
                table: {
                    header: [
                        {
                            name: "system_date",
                            label: this.$t('label.system_date'),
                            width: '150'
                        },
                        {
                            name: "time_from",
                            label: this.$t('label.time_from'),
                            width: '150'
                        },
                        {
                            name: "time_to",
                            label: this.$t('label.time_to'),
                            width: '150'
                        },
                        {
                            name: "time_interval_minute",
                            label: this.$t('label.time_interval_minute'),
                            width: '150'
                        },
                        {
                            name: "change_status",
                            label: this.$t('label.change_status'),
                            width: '150'
                        },
                        {
                            name: "remarks",
                            label: this.$t('label.remarks'),
                            width: '150'
                        },
                        {
                            name: "service_message",
                            label: this.$t('label.service_message'),
                            width: '150'
                        },
                    ],
                    values: {
                        data: [
                            {
                                system_date: 'Sept. 12, 2023',
                                time_from: '09:00AM',
                                time_to: '06:00PM',
                                time_interval_minute: '390',
                                change_status: 1,
                                remarks: 'System time changed forward',
                                service_message: 'Log via timer'
                            },
                            {
                                system_date: 'Sept. 12, 2023',
                                time_from: '09:00AM',
                                time_to: '06:00PM',
                                time_interval_minute: '390',
                                change_status: 1,
                                remarks: 'System time changed forward',
                                service_message: 'Log via timer'
                            },
                            {
                                system_date: 'Sept. 12, 2023',
                                time_from: '09:00AM',
                                time_to: '06:00PM',
                                time_interval_minute: '390',
                                change_status: 1,
                                remarks: 'System time changed forward',
                                service_message: 'Log via timer'
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
            this.assignData();
        },
        methods: {
            assignData() {
                let loadedData = QueryString.parse(window.location.search.substr(1));

                if (loadedData.data) {
                    this.branch_name = loadedData.data.branch_name;
                }
            },

            exportListAsPDF() {},

            exportListAsExcel() {},
        }
    }
</script>

<style lang="scss" scoped>
    @import "resources/sass/_variables.scss";
</style>