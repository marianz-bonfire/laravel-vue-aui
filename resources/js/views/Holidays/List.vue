<template>
    <div class="module-container">
        <div class="module-content">
            <datatable
                class="
                    datatable--black
                    datatable--hoverable"
                :header-fields="table.header"
                :settings="table.settings"
                :table="table.values">
                <template slot="content">
                    <table-row
                        type="view"
                        v-for="(tableData, tableDataIndex) in table.values.data" :key="tableDataIndex"
                        :values="tableData"
                        :settings="table.settings"
                        :rowIndex="tableDataIndex"
                        v-on:dbl-row-click="view">
                        <td class="datatable-cell">
                            <span v-text="tableData.id"></span>
                        </td>
                        <td class="datatable-cell">
                            <span v-text="tableData.event_date"></span>
                        </td>
                        <td class="datatable-cell">
                            <span v-text="tableData.event_title"></span>
                        </td>
                        <td class="datatable-cell">
                            <span
                                v-text="tableData.holiday_type === 1 ? $t('label.dsh_double_special_holiday')
                                    : tableData.holiday_type === 2 ? $t('label.sh_special_holiday')
                                    : tableData.holiday_type === 3 ? $t('label.rh_regular_holiday')
                                    : tableData.holiday_type === 4 ? $t('label.drh_double_regular_holiday')
                                    : tableData.holiday_type === 5 ? $t('label.rsh_regular_and_special_holiday')
                                    : ''">
                            </span>
                        </td>
                        <td class="datatable-cell">
                            <span class="ml-4">
                                <i
                                    class="fa fa-circle"
                                    :class="tableData.operation_type === 1 ? 'text-success' : 'text-danger'">
                                </i>
                                {{
                                    tableData.operation_type === 1 ? $t('label.open')
                                        : tableData.operation_type === 2 ? $t('label.closed')
                                        : ''
                                }}
                            </span>
                        </td>
                        <td class="datatable-cell">
                            <ul class="row-list">
                                <li v-for="branch in tableData.branches" :key="branch.id">
                                    {{ branch.label }}
                                </li>
                            </ul>
                        </td>
                        <td class="datatable-cell">
                            <span
                                class="status-label w-100"
                                :class="tableData.approval_status === 0 ? 'status-label--pending'
                                    : tableData.approval_status === 1 ? 'status-label--approved'
                                    : tableData.approval_status === 2 ? 'status-label--rejected'
                                    : tableData.approval_status === 3 ? 'status-label--cancelled-approval'
                                    : ''"
                                v-text="tableData.approval_status === 0 ? $t('label.pending')
                                    : tableData.approval_status === 1 ? $t('label.approved')
                                    : tableData.approval_status === 2 ? $t('label.rejected')
                                    : tableData.approval_status === 3 ? $t('label.cancelled_approval')
                                    : ''">
                            </span>
                        </td>
                        <td class="datatable-cell">
                            <span
                                class="status-label w-100"
                                :class="tableData.activity_status === 1 ? 'status-label--previous'
                                    : tableData.activity_status === 2 ? 'status-label--upcoming'
                                    : ''"
                                v-text="tableData.activity_status === 1 ? $t('label.previous')
                                    : tableData.activity_status === 2 ? $t('label.upcoming')
                                    : ''">
                            </span>
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
                        <td class="datatable-cell">
                            <div class="d-flex justify-content-around">
                                <div>
                                    <i
                                        class="fa fa-edit fa-lg row-edit"
                                        :class="tableData.approval_status !== 0 ? 'row-disabled' : ''"
                                        @click.stop="tableData.approval_status !== 0 ? '' : editRow(tableData, tableDataIndex)">
                                    </i>
                                </div>
                                <div>
                                    <i
                                        class="fa fa-trash fa-lg row-delete"
                                        @click.stop="deleteRow(tableData)">
                                    </i>
                                </div>
                                <div>
                                    <i
                                        class="fa fa-check fa-lg row-approve"
                                        :class="tableData.approval_status !== 0 ? 'row-disabled' : ''"
                                        @click.stop="tableData.approval_status !== 0 ? '' : approveRow(tableData, tableDataIndex)">
                                    </i>
                                </div>
                            </div>
                        </td>
                    </table-row>
                </template>
            </datatable>
        </div>
        <side-navigation>
            <dropdown-menu-button
                width="400"
                icon="fa fa-search"
                direction="right"
                :closable="false">
                <template slot="header">
                    {{ $t('label.search_filters') }}
                </template>
                <template slot="content">
                    <table class="table-layout filter-border--bottom">
                        <tr>
                            <td align="right" width="114px">{{ $t('label.search_keyword') }}:</td>
                            <td>
                                <input
                                    type="text"
                                    class="form-control"
                                    v-model="filters.search_keyword"
                                    @keypress.enter="paginate()"
                                >
                            </td>
                        </tr>
                        <tr>
                            <td align="right">{{ $t('label.holiday_type') }}:</td>
                            <td>
                                <select class="form-control" v-model="filters.holiday_type">
                                    <option value="">{{ $t('label.all') }}</option>
                                    <option :value="1">{{ $t('label.sh_special_holiday') }}</option>
                                    <option :value="2">{{ $t('label.rh_regular_holiday') }}</option>
                                    <option :value="3">{{ $t('label.dsh_double_special_holiday') }}</option>
                                    <option :value="4">{{ $t('label.drh_double_regular_holiday') }}</option>
                                    <option :value="5">{{ $t('label.rsh_regular_and_special_holiday') }}</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td align="right">{{ $t('label.operation_type') }}:</td>
                            <td>
                                <select class="form-control" v-model="filters.operation_type">
                                    <option value="">{{ $t('label.all') }}</option>
                                    <option :value="1">{{ $t('label.open') }}</option>
                                    <option :value="2">{{ $t('label.closed') }}</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td align="right">{{ $t('label.event_date_from') }}:</td>
                            <td>
                                <datepicker
                                    format="MMM. dd, yyyy"
                                    v-model="eventDateFrom">
                                </datepicker>
                            </td>
                        </tr>
                        <tr>
                            <td align="right">{{ $t('label.event_date_to') }}:</td>
                            <td>
                                <datepicker
                                    format="MMM. dd, yyyy"
                                    v-model="eventDateTo">
                                </datepicker>
                            </td>
                        </tr>
                        <tr>
                            <td align="right">{{ $t('label.status') }}:</td>
                            <td>
                                <select class="form-control" v-model="filters.status">
                                    <option value="">{{ $t('label.all') }}</option>
                                    <option :value="1">{{ $t('label.active') }}</option>
                                    <option :value="0">{{ $t('label.inactive') }}</option>
                                </select>
                            </td>
                        </tr>
                    </table>
                </template>
                <template slot="footer">
                    <div class="d-flex justify-content-center m-2">
                        <button class="btn menu-dropdown-button" @click="paginate()">{{ $t('label.search') }}</button>
                    </div>
                </template>
            </dropdown-menu-button>
            <dropdown-menu-button
                icon="fa fa-print"
                direction="right"
                :isTooltip="true"
                @click.native="exportListAsExcel">
                <template slot="header">
                    {{ $t('label.export_to_excel') }}
                </template>
            </dropdown-menu-button>
            <dropdown-menu-button
                icon="fa fa-plus-square"
                direction="right"
                :isTooltip="true"
                @click.native="create">
                <template slot="header">
                    {{ $t('label.create_new_value', { value: $t('label.holiday') }) }}
                </template>
            </dropdown-menu-button>
        </side-navigation>
        <modal
            width="500px"
            v-if="modal.detail.visible"
            @close="closeDetail">
            <template slot="header">
                {{ modal.detail.title }}
            </template>
            <template slot="content">
                <table class="table-layout mr-auto ml-auto">
                    <tr>
                        <td align="right"><b>{{ $t('label.id') }}</b></td>
                        <table-data
                            :error="form.error.id">
                            <input
                                type="text"
                                class="form-control"
                                v-model="form.values.id"
                                @keypress="form.error.id = ''">
                        </table-data>
                    </tr>
                    <tr>
                        <td align="right"><b>{{ $t('label.event_title') }}</b></td>
                        <table-data
                            :error="form.error.event_title">
                            <input
                                type="text"
                                class="form-control"
                                v-model="form.values.event_title"
                                @keypress="form.error.event_title = ''">
                        </table-data>
                    </tr>
                    <tr>
                        <td align="right"><b>{{ $t('label.event_date') }}</b></td>
                        <table-data
                            :error="form.error.event_date">
                            <datepicker
                                format="MMM. dd, yyyy"
                                v-model="formEventDate"
                                @selected="form.error.event_date = ''">
                            </datepicker>
                        </table-data>
                    </tr>
                    <tr>
                        <td align="right"><b>{{ $t('label.holiday_type') }}</b></td>
                        <td>
                            <select
                                class="form-control"
                                v-model="form.values.holiday_type">
                                <option :value="1">{{ $t('label.sh_special_holiday') }}</option>
                                <option :value="2">{{ $t('label.rh_regular_holiday') }}</option>
                                <option :value="3">{{ $t('label.dsh_double_special_holiday') }}</option>
                                <option :value="4">{{ $t('label.drh_double_regular_holiday') }}</option>
                                <option :value="5">{{ $t('label.rsh_regular_and_special_holiday') }}</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td align="right"><b>{{ $t('label.operation_type') }}</b></td>
                        <td>
                            <select
                                class="form-control"
                                v-model="form.values.operation_type">
                                <option :value="1">{{ $t('label.open') }}</option>
                                <option :value="2">{{ $t('label.closed') }}</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td align="right"><b>{{ $t('label.status') }}</b></td>
                        <td>
                            <select
                                class="form-control"
                                v-model="form.values.status">
                                <option :value="1">{{ $t('label.active') }}</option>
                                <option :value="0">{{ $t('label.inactive') }}</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td align="right"><b>{{ $t('label.branches') }}</b></td>
                        <td>
                            <v-select
                                v-model="form.values.branches"
                                :clearable="false"
                                multiple
                                deselect-from-dropdown
                                :placeholder="$t('label.select_branches')"
                                :options="selections.branches.options">
                            </v-select>
                        </td>
                    </tr>
                </table>
            </template>
            <template slot="footer">
                <div align="right">
                    <button
                        class="btn btn-primary"
                        @click="save">
                        {{ $t('label.save') }}
                    </button>
                    <button
                        class="btn btn-light"
                        @click="clearFields">
                        {{ $t('label.clear') }}
                    </button>
                </div>
            </template>
        </modal>
        <modal
            class="modal--no-footer"
            width="500px"
            v-if="modal.view.visible"
            @close="modal.view.visible = false">
            <template slot="header">
                {{ modal.view.title }}
            </template>
            <template slot="content">
                <table class="table-layout mr-auto ml-auto">
                    <tr>
                        <td align="right"><b>{{ $t('label.event_title') }}</b>:</td>
                        <td>{{ form.values.event_title }}</td>
                    </tr>
                    <tr>
                        <td align="right"><b>{{ $t('label.event_date') }}</b>:</td>
                        <td>{{ form.values.event_date }}</td>
                    </tr>
                    <tr>
                        <td align="right"><b>{{ $t('label.holiday_type') }}</b>:</td>
                        <td>
                            {{
                                form.values.holiday_type === 1 ? $t('label.dsh_double_special_holiday')
                                    : form.values.holiday_type === 2 ? $t('label.sh_special_holiday')
                                    : form.values.holiday_type === 3 ? $t('label.rh_regular_holiday')
                                    : form.values.holiday_type === 4 ? $t('label.drh_double_regular_holiday')
                                    : form.values.holiday_type === 5 ? $t('label.rsh_regular_and_special_holiday')
                                    : ''
                            }}
                        </td>
                    </tr>
                    <tr>
                        <td align="right"><b>{{ $t('label.operation_type') }}</b>:</td>
                        <td>
                            <span>
                                <i
                                    class="fa fa-circle"
                                    :class="form.values.operation_type === 1 ? 'text-success' : 'text-danger'">
                                </i>
                                {{
                                    form.values.operation_type === 1 ? $t('label.open')
                                        : form.values.operation_type === 2 ? $t('label.closed')
                                        : ''
                                }}
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td align="right"><b>{{ $t('label.approval_status') }}</b>:</td>
                        <td>
                            <span
                                class="status-label w-50"
                                :class="form.values.approval_status === 0 ? 'status-label--pending'
                                    : form.values.approval_status === 1 ? 'status-label--approved'
                                    : form.values.approval_status === 2 ? 'status-label--rejected'
                                    : form.values.approval_status === 3 ? 'status-label--cancelled-approval'
                                    : ''"
                                v-text="form.values.approval_status === 0 ? $t('label.pending')
                                    : form.values.approval_status === 1 ? $t('label.approved')
                                    : form.values.approval_status === 2 ? $t('label.rejected')
                                    : form.values.approval_status === 3 ? $t('label.cancelled_approval')
                                    : ''">
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td align="right"><b>{{ $t('label.activity_status') }}</b>:</td>
                        <td>
                            <span
                                class="status-label w-50"
                                :class="form.values.activity_status === 1 ? 'status-label--previous'
                                    : form.values.activity_status === 2 ? 'status-label--upcoming'
                                    : ''"
                                v-text="form.values.activity_status === 1 ? $t('label.previous')
                                    : form.values.activity_status === 2 ? $t('label.upcoming')
                                    : ''">
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td align="right"><b>{{ $t('label.status') }}</b>:</td>
                        <td>
                            <span
                                class="status-label w-50"
                                :class="form.values.status === 1 ? 'status-label--active'
                                    : form.values.status === 0 ? 'status-label--inactive'
                                    : ''"
                                v-text="form.values.status === 1 ? $t('label.active')
                                    : form.values.status === 0 ? $t('label.inactive')
                                    : ''">
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td align="right"><b>{{ $t('label.created_by_or_at') }}</b>:</td>
                        <td>{{ form.values.created_by_or_at }}</td>
                    </tr>
                    <tr>
                        <td align="right"><b>{{ $t('label.updated_by_or_at') }}</b>:</td>
                        <td>{{ form.values.updated_by_or_at }}</td>
                    </tr>
                </table>
                <template v-if="form.mode === 'approval'">
                    <hr>
                    <div class="form-group">
                        <b>{{ $t('label.approval_status') }}</b>:
                        <form-field
                            :error="form.approval.error.status">
                            <select
                                class="form-control"
                                v-model="form.approval.status"
                                @change="form.approval.error.status = ''">
                                <option :value="1">{{ $t('label.approve') }}</option>
                                <option :value="2">{{ $t('label.reject') }}</option>
                            </select>
                        </form-field>
                        <b>{{ $t('label.remarks') }}</b>:
                        <form-field
                            :error="form.approval.error.remarks">
                            <textarea class="form-control" rows="4" v-model="form.approval.remarks" :placeholder="$t('label.enter_remarks_or_reason_of_rejection')" @keypress="form.approval.error.remarks = ''"></textarea>
                        </form-field>
                    </div>
                    <div align="right">
                        <button
                            class="btn btn-primary"
                            @click="submitApproval">
                            {{ $t('label.submit') }}
                        </button>
                        <button
                            class="btn btn-primary"
                            @click="clearApprovalFields">
                            {{ $t('label.clear') }}
                        </button>
                    </div>
                </template>
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
                filters: {
                    search_keyword: '',
                    holiday_type: '',
                    operation_type: '',
                    event_date_from: '',
                    event_date_to: '',
                    status: '',
                },
                selections: {
                    branches: {
                        options: [
                            { label: 'Branch 1', value: 'Branch 1' },
                            { label: 'Branch 2', value: 'Branch 2' },
                            { label: 'Branch 3', value: 'Branch 3' },
                        ]
                    }
                },
                form: {
                    mode: 'create',
                    index: '',
                    values: {
                        id: '',
                        event_title: '',
                        event_date: '',
                        holiday_type: 1,
                        operation_type: 1,
                        branches: [],
                        created_by_or_at: '',
                        updated_by_or_at: '',
                        status: 1,
                        remarks: '',
                    },
                    approval: {
                        status: '',
                        remarks: '',
                        error: {
                            status: '',
                            remarks: ''
                        }
                    },
                    error: {
                        id: '',
                        event_title: '',
                        event_date: '',
                    }
                },
                modal: {
                    detail: {
                        title: this.$t('label.create_new_value', { value: this.$t('label.holiday') }),
                        visible: false
                    },
                    view: {
                        title: '',
                        visible: false
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
                            name: "event_date",
                            label: this.$t('label.date'),
                            width: '150'
                        },
                        {
                            name: "event_title",
                            label: this.$t('label.event_title'),
                            width: '150'
                        },
                        {
                            name: "holiday_type",
                            label: this.$t('label.holiday_type'),
                            width: '150'
                        },
                        {
                            name: "operation_type",
                            label: this.$t('label.operation_type'),
                            width: '120'
                        },
                        {
                            name: "branches",
                            label: this.$t('label.branches'),
                            width: '150'
                        },
                        {
                            name: "approval_status",
                            label: this.$t('label.approval_status'),
                            width: '120'
                        },
                        {
                            name: "activity_status",
                            label: this.$t('label.activity_status'),
                            width: '120'
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
                                event_date: 'Jun. 12, 2023',
                                event_title: 'Independence Day',
                                holiday_type: 1,
                                operation_type: 1,
                                branches: [
                                    { label: 'Branch 1', value: 'Branch 1' },
                                    { label: 'Branch 2', value: 'Branch 2' }
                                ],
                                approval_status: 1,
                                activity_status: 1,
                                status: 1,
                                created_by_or_at: 'bonfire-administrator `2023-04-02`',
                                updated_by_or_at: 'bonfire-administrator `2023-04-02`',
                                remarks: ''
                            },
                            {
                                id: '1002',
                                event_date: 'Jun. 12, 2023',
                                event_title: 'Independence Day',
                                holiday_type: 2,
                                operation_type: 2,
                                branches: [
                                    { label: 'Branch 1', value: 'Branch 1' }
                                ],
                                approval_status: 2,
                                activity_status: 2,
                                status: 0,
                                created_by_or_at: 'bonfire-administrator `2023-04-02`',
                                updated_by_or_at: 'bonfire-administrator `2023-04-02`',
                                remarks: ''
                            },
                            {
                                id: '1003',
                                event_date: 'Jun. 12, 2023',
                                event_title: 'Independence Day',
                                holiday_type: 2,
                                operation_type: 1,
                                branches: [
                                    { label: 'Branch 2', value: 'Branch 2' }
                                ],
                                approval_status: 0,
                                activity_status: 2,
                                status: 0,
                                created_by_or_at: 'bonfire-administrator `2023-04-02`',
                                updated_by_or_at: 'bonfire-administrator `2023-04-02`',
                                remarks: ''
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
        computed: {
            eventDateFrom: {
                get() {
                    return this.filters.event_date_from;
                },
                set(value) {
                    let date = moment(value).format('YYYY-MM-DD');
                    this.filters.event_date_from = date;
                }
            },
            eventDateTo: {
                get() {
                    return this.filters.event_date_to;
                },
                set(value) {
                    let date = moment(value).format('YYYY-MM-DD');
                    this.filters.event_date_to = date;
                }
            },
            formEventDate: {
                get() {
                    return this.form.values.event_date;
                },
                set(value) {
                    let date = moment(value).format('MMM. DD, YYYY');
                    this.form.values.event_date = date;
                }
            },
        },
        methods: {
            paginate() {},

            create() {
                this.clearFields();
                this.form.mode = 'create';
                this.modal.detail.title = this.$t('label.create_new_value', { value: this.$t('label.holiday') });
                this.modal.detail.visible = true;
            },

            view(data) {
                this.clearFields();
                this.form.mode = 'view';
                this.modal.view.title = this.$t('label.holiday') + ' - ' + data.item.event_title;
                this.form.values = {...data.item};
                this.modal.view.visible = true;
            },

            editRow(data, index) {
                this.clearFields();
                this.form.mode = 'update';
                this.form.index = index;
                this.form.values = {...data};
                this.modal.detail.title = this.$t('label.update_value', { value: this.$t('label.holiday') });
                this.modal.detail.visible = true;
            },

            deleteRow(data) {
                this.dialog.status = 'delete';
                this.dialog.message = this.$t('message.once_deleted_message');
                this.dialog.visible = true;
                this.dialog.ok = {
                    function: () => {
                        this.table.values.data.splice(data.rowIndex, 1);
                        this.dialog.status = 'success';
                        this.dialog.message = this.$t('success.value_successfully_deleted', { value: this.$t('label.holiday') });
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

            clearFields() {
                this.form.mode = 'create';
                this.form.index = '';

                this.form.values.id = '';
                this.form.values.event_title = '';
                this.form.values.date = '';
                this.form.values.holiday_type = 1;
                this.form.values.operation_type = 1;
                this.form.values.branches = [];
                this.form.values.created_by_or_at = '';
                this.form.values.updated_by_or_at = '';
                this.form.values.status = 1;
                this.form.values.remarks = '';

                this.form.error.id = '';
                this.form.error.event_title = '';
                this.form.error.event_date = '';
            },

            clearApprovalFields() {
                this.form.approval.status = '';
                this.form.approval.remarks = '';

                this.form.approval.error.status = '';
                this.form.approval.error.remarks = '';
            },

            submitApproval() {
                let index = this.form.index;

                this.form.approval.error.status = this.form.approval.status === '' ? this.$t('error.value_is_required', { value: this.$t('label.approval_status') }) : '';
                this.form.approval.error.remarks = this.form.approval.remarks === '' ? this.$t('error.value_is_required', { value: this.$t('label.remarks') }) : '';

                if (this.form.approval.status === ''
                    || this.form.approval.remarks === '') {
                    return;
                }

                this.table.values.data[index].approval_status = this.form.approval.status;
                this.table.values.data[index].remarks = this.form.approval.remarks;
                this.clearApprovalFields();
                this.modal.view.visible = false;

                this.dialog.status = 'success';
                this.dialog.message = this.$t('success.value_successfully_approved', { value: this.$t('label.holiday') });
                this.dialog.visible = true;
                this.dialog.ok = {
                    function: () => {
                        this.dialog.visible = false;
                    }
                }
            },

            closeDetail() {
                this.clearFields();
                this.modal.detail.visible = false;
            },

            approveRow(data, index) {
                this.form.mode = 'approval';
                this.modal.view.title = this.$t('label.holiday') + ' - ' + data.event_title;
                this.form.index = index;
                this.form.values = {...data};
                this.clearApprovalFields();
                this.modal.view.visible = true;
            },

            save() {
                let mode = this.form.mode;
                let i = this.form.index;

                this.form.error.id = this.form.values.id === '' ? this.$t('error.value_is_required', { value: this.$t('label.id') }) : '';
                this.form.error.event_title = this.form.values.event_title === '' ? this.$t('error.value_is_required', { value: this.$t('label.event_title') }) : '';
                this.form.error.event_date = this.form.values.event_date === '' ? this.$t('error.value_is_required', { value: this.$t('label.event_date') }) : '';

                if (this.form.values.id === ''
                    || this.form.values.event_title === ''
                    || this.form.values.event_date === '') {
                    return;
                }

                if (mode === 'create') {
                    this.table.values.data.push({
                        id: this.form.values.id,
                        event_title: this.form.values.event_title,
                        event_date: this.form.values.event_date,
                        holiday_type: this.form.values.holiday_type,
                        operation_type: this.form.values.operation_type,
                        branches: this.form.values.branches,
                        status: this.form.values.status,
                        approval_status: 0,
                        activity_status: 2,
                    });

                    this.dialog.message = this.$t('success.value_successfully_added', { value: this.$t('label.holiday') });
                } else {
                    this.table.values.data[i] = {
                        id: this.form.values.id,
                        event_title: this.form.values.event_title,
                        event_date: this.form.values.event_date,
                        holiday_type: this.form.values.holiday_type,
                        operation_type: this.form.values.operation_type,
                        branches: this.form.values.branches,
                        status: this.form.values.status,
                        approval_status: this.form.values.approval_status,
                        activity_status: this.form.values.activity_status,
                    };

                    this.dialog.message = this.$t('success.value_successfully_updated', { value: this.$t('label.holiday') });
                }

                this.clearFields();
                this.modal.detail.visible = false;

                this.dialog.status = 'success';
                this.dialog.visible = true;
                this.dialog.ok = {
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