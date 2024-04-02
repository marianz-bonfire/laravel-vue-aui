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
                            <div class="employee-profile">
                                <div>
                                    <img :src="'/images/' + tableData.profile_image" alt="">
                                </div>
                                <div class="ml-2">
                                    <div class="text-uppercase">{{ tableData.first_name + ' ' + tableData.last_name }}</div>
                                    <div class="text-secondary">{{ tableData.email_address }}</div>
                                </div>
                            </div>
                        </td>
                        <td class="datatable-cell text-uppercase">
                            {{ tableData.role.label }}
                        </td>
                        <td class="datatable-cell">
                            {{ tableData.position.label }}
                        </td>
                        <td class="datatable-cell">
                            {{ tableData.department.label }}
                        </td>
                        <td class="datatable-cell">
                            <ul class="row-list">
                                <li v-for="branch in tableData.branch" :key="branch.id">
                                    {{ branch.label }}
                                </li>
                            </ul>
                        </td>
                        <td class="datatable-cell">
                            <span
                                class="status-label w-100"
                                :class="tableData.status === 1 ? 'status-label--active'
                                    : tableData.status === 0 ? 'status-label--inactive'
                                    : ''"
                                v-text="tableData.status === 1 ? $t('label.active')
                                    : tableData.status === 0 ? $t('label.inactive')
                                    : ''">
                            </span>
                        </td>
                        <td class="datatable-cell" align="center">
                            <div class="d-flex justify-content-around">
                                <span class="action-button">
                                    <i class="fa fa-eye fa-lg row-view" :title="$t('label.view')" @click="viewRow(tableData)"></i>
                                </span>
                                <span class="action-button">
                                    <i class="fa fa-edit fa-lg row-edit" :title="$t('label.edit')" @click="updateRow(tableData)"></i>
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
                    {{ $t('label.create_new_value', { value: this.$t('label.user') }) }}
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
    import FormField from '../../components/Containers/FormField.vue';

    export default {
        components: {
            Datatable,
            TableRow,
            TableData,
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
                            name: "role",
                            label: this.$t('label.role'),
                            width: '150'
                        },
                        {
                            name: "position",
                            label: this.$t('label.position'),
                            width: '150'
                        },
                        {
                            name: "department",
                            label: this.$t('label.department'),
                            width: '150'
                        },
                        {
                            name: "branches",
                            label: this.$t('label.branches'),
                            width: '150'
                        },
                        {
                            name: "status",
                            label: this.$t('label.status'),
                            width: '120'
                        },
                        {
                            name: "actions",
                            label: this.$t('label.actions'),
                            width: '90'
                        }
                    ],
                    values: {
                        data: [
                            {
                                id: '1001',
                                first_name: 'Juan',
                                middle_name: 'Dela',
                                last_name: 'Cruz',
                                profile_image: 'user.png',
                                gender: 'M',
                                birth_date: '2023-09-19',
                                phone_number: '123456789',
                                current_address: 'Address Line 1',
                                permanent_address: 'Address Line 2',
                                biometric: 0,
                                role: { label: 'Corporate Admin', value: 'Corporate Admin' },
                                position: { label: 'Position 1', value: 'Position 1' },
                                department: { label: 'Department 1', value: 'Department 1' },
                                branch: [
                                    { label: 'Branch 1', value: 'Branch 1' },
                                    { label: 'Branch 2', value: 'Branch 2' }
                                ],
                                status: 1,
                                email_address: 'abc@gmail.com',
                                password: '123456789',
                            },
                            {
                                id: '1002',
                                first_name: 'Janu',
                                middle_name: 'Dela',
                                last_name: 'Cruz',
                                profile_image: 'user.png',
                                gender: 'F',
                                birth_date: '2023-09-19',
                                phone_number: '123456789',
                                current_address: 'Address Line 1',
                                permanent_address: 'Address Line 2',
                                biometric: 0,
                                role: '',
                                position: { label: 'Position 1', value: 'Position 1' },
                                department: { label: 'Department 1', value: 'Department 1' },
                                branch: [
                                    { label: 'Branch 1', value: 'Branch 1' },
                                    { label: 'Branch 2', value: 'Branch 2' }
                                ],
                                status: 1,
                                email_address: 'abc@gmail.com',
                                password: '',
                            },
                            {
                                id: '1003',
                                first_name: 'Jimi',
                                middle_name: 'Dela',
                                last_name: 'Cruz',
                                profile_image: 'user.png',
                                gender: 'M',
                                birth_date: '2023-09-19',
                                phone_number: '123456789',
                                current_address: 'Address Line 1',
                                permanent_address: 'Address Line 2',
                                biometric: 0,
                                role: { label: 'Corporate Admin', value: 'Corporate Admin' },
                                position: { label: 'Position 1', value: 'Position 1' },
                                department: { label: 'Department 1', value: 'Department 1' },
                                branch: [
                                    { label: 'Branch 1', value: 'Branch 1' },
                                    { label: 'Branch 2', value: 'Branch 2' }
                                ],
                                status: 1,
                                email_address: 'abc@gmail.com',
                                password: '123456789',
                            },
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

            $('.btn-popover').popover({
                trigger: 'focus'
            });
        },
        methods: {
            create() {
                window.open("/user/detail", "_blank");
            },

            viewRow(data) {
                window.open("/user/detail?" + QueryString.stringify({
                    mode: 'view',
                    data: data
                }));
            },

            updateRow(data) {
                window.open("/user/detail?" + QueryString.stringify({
                    mode: 'update',
                    data: data
                }));
            },

            deleteRow(index) {
                this.dialog.status = 'delete';
                this.dialog.message = this.$t('message.once_deleted_message');
                this.dialog.visible = true;
                this.dialog.ok = {
                    function: () => {
                        this.table.values.data.splice(index, 1);
                        this.dialog.status = 'success';
                        this.dialog.message = this.$t('success.value_successfully_deleted', { value: this.$t('label.user') });
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
    .employee-profile {
        display: flex;
        align-items: center;
        img {
            width: 30px;
            height: 30px;
        }
    }

    .employee-image {
        border: 1px $line-color solid;
        width: 150px;
        height: 150px;
        img {
            width: 150px;
            height: 150px;
            padding: 5px;
        }
    }
</style>