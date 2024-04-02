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
                            <span v-text="tableData.event"></span>
                        </td>
                        <td class="datatable-cell">
                            <span v-text="tableData.auditable_type"></span>
                        </td>
                        <td class="datatable-cell" align="center">
                            <div class="dropdown">
                                <button class="btn btn-outline-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fa fa-list"></i>
                                </button>
                                <div class="tc--values-dropdown dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <div
                                        class="
                                            table-design
                                            table-design--blue
                                            table-design--bordered
                                            table-design--full-width
                                            px-2">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <td>{{ $t('label.field_name') }}</td>
                                                    <td>{{ $t('label.old_values') }}</td>
                                                    <td>{{ $t('label.new_values') }}</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><b>{{ $t('label.telephone_number') }}</b></td>
                                                    <td>{{ tableData.values.old.telephone_number }}</td>
                                                    <td>{{ tableData.values.new.telephone_number }}</td>
                                                </tr>
                                                <tr>
                                                    <td><b>{{ $t('label.mobile_no') }}</b></td>
                                                    <td>{{ tableData.values.old.mobile_number }}</td>
                                                    <td>{{ tableData.values.new.mobile_number }}</td>
                                                </tr>
                                                <tr>
                                                    <td><b>{{ $t('label.email') }}</b></td>
                                                    <td>{{ tableData.values.old.email }}</td>
                                                    <td>{{ tableData.values.new.email }}</td>
                                                </tr>
                                                <tr>
                                                    <td><b>{{ $t('label.updated_by') }}</b></td>
                                                    <td>{{ tableData.values.old.updated_by }}</td>
                                                    <td>{{ tableData.values.new.updated_by }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td class="datatable-cell">
                            <div class="d-flex align-items-center justify-content-center">
                                <i class="fa fa-globe fa-2x"></i>
                                <div class="ml-2">
                                    <b v-text="tableData.ip_address"></b><br>
                                    <span class="text-secondary" v-text="tableData.url"></span>
                                </div>
                            </div>
                        </td>
                        <td class="datatable-cell">
                            <span v-text="tableData.user_agent"></span>
                        </td>
                        <td class="datatable-cell">
                            <span v-text="tableData.performed_by"></span>
                        </td>
                        <td class="datatable-cell">
                            <span v-text="tableData.created"></span>
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
                table: {
                    header: [
                        {
                            name: "id",
                            label: this.$t('label.id'),
                            width: '100'
                        },
                        {
                            name: "event",
                            label: this.$t('label.event'),
                            width: '150'
                        },
                        {
                            name: "auditable_type",
                            label: this.$t('label.auditable_type'),
                            width: '150'
                        },
                        {
                            name: "values",
                            label: this.$t('label.values'),
                            width: '150'
                        },
                        {
                            name: "ip_address_or_url",
                            label: this.$t('label.ip_address_or_url'),
                            width: '100'
                        },
                        {
                            name: "user_agent",
                            label: this.$t('label.user_agent'),
                            width: '150'
                        },
                        {
                            name: "performed_by",
                            label: this.$t('label.performed_by'),
                            width: '150'
                        },
                        {
                            name: "created",
                            label: this.$t('label.created'),
                            width: '150'
                        }
                    ],
                    values: {
                        data: [
                            {
                                id: '1001',
                                event: 'updated',
                                auditable_type: 'Apps\\Model\\User',
                                values: {
                                    old: {
                                        telephone_number: '123456789',
                                        mobile_number: '-',
                                        email: 'asd@gmail.com',
                                        updated_by: 'bonfire-administrator'
                                    },
                                    new: {
                                        telephone_number: '123456789',
                                        mobile_number: '-',
                                        email: 'asd@gmail.com',
                                        updated_by: 'bonfire-administrator'
                                    }
                                },
                                ip_address: '192.168.1.22',
                                url: 'https://cdis-duty.com/employees/create',
                                user_agent: 'Mozilla 5.0, Google Chrome 100.0, Microsoft Edge 100.00',
                                performed_by: 'bonfire-administrator',
                                created: 'Sept. 25, 2023'
                            },
                            {
                                id: '1001',
                                event: 'updated',
                                auditable_type: 'Apps\\Model\\User',
                                values: {
                                    old: {
                                        telephone_number: '123456789',
                                        mobile_number: '-',
                                        email: 'asd@gmail.com',
                                        updated_by: 'bonfire-administrator'
                                    },
                                    new: {
                                        telephone_number: '123456789',
                                        mobile_number: '-',
                                        email: 'asd@gmail.com',
                                        updated_by: 'bonfire-administrator'
                                    }
                                },
                                ip_address: '192.168.1.22',
                                url: 'https://cdis-duty.com/employees/create',
                                user_agent: 'Mozilla 5.0, Google Chrome 100.0, Microsoft Edge 100.00',
                                performed_by: 'bonfire-administrator',
                                created: 'Sept. 25, 2023'
                            },
                            {
                                id: '1001',
                                event: 'updated',
                                auditable_type: 'Apps\\Model\\User',
                                values: {
                                    old: {
                                        telephone_number: '123456789',
                                        mobile_number: '-',
                                        email: 'asd@gmail.com',
                                        updated_by: 'bonfire-administrator'
                                    },
                                    new: {
                                        telephone_number: '123456789',
                                        mobile_number: '-',
                                        email: 'asd@gmail.com',
                                        updated_by: 'bonfire-administrator'
                                    }
                                },
                                ip_address: '192.168.1.22',
                                url: 'https://cdis-duty.com/employees/create',
                                user_agent: 'Mozilla 5.0, Google Chrome 100.0, Microsoft Edge 100.00',
                                performed_by: 'bonfire-administrator',
                                created: 'Sept. 25, 2023'
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
        }
    }
</script>

<style lang="scss" scoped>
    @import "resources/sass/_variables.scss";
    .tc {
        &--values-dropdown {
            min-width: 400px;
        }
    }
</style>