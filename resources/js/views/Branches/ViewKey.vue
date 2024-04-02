<template>
    <div class="module-container">
        <div class="module-content">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="card mt-3">
                            <div class="card-body">
                                <div class="form-group">
                                    <table class="table-layout">
                                        <tr>
                                            <td><b>{{ $t('label.branch_name') }}</b>:</td>
                                            <td width="400px">
                                                <div class="input-group">
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        v-model="form.values.branch_name"
                                                        readonly>
                                                    <div class="input-group-append">
                                                        <button class="btn btn-success">
                                                            <i class="fa fa-copy"></i>
                                                            {{ $t('label.copy') }}
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><b>{{ $t('label.branch_key') }}</b>:</td>
                                            <td>
                                                <div class="input-group">
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        v-model="form.values.branch_key"
                                                        readonly>
                                                    <div class="input-group-append">
                                                        <button class="btn btn-success">
                                                            <i class="fa fa-copy"></i>
                                                            {{ $t('label.copy') }}
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <h5
                                    class="cursor-pointer d-inline-block"
                                    @click="form.values.expand = ! form.values.expand">
                                    <i
                                        class="fa"
                                        :class="form.values.expand ? 'fa-caret-down' : 'fa-caret-right'">
                                    </i>
                                    <b>{{ $t('label.connected_devices') }}</b>
                                    <span class="badge badge-light">{{ form.values.connected_devices.length }}</span>
                                </h5>
                                <div
                                    class="
                                        table-design
                                        table-design--blue
                                        table-design--full-width
                                        table-design--bordered"
                                        v-if="form.values.expand">
                                    <table>
                                        <thead>
                                            <th align="center">{{ $t('label.serial_number') }}</th>
                                            <th align="center">{{ $t('label.device_name') }}</th>
                                            <th align="center">{{ $t('label.device_status') }}</th>
                                            <th align="center">{{ $t('label.computer_name') }}</th>
                                            <th align="center">{{ $t('label.local_ip_address') }}</th>
                                            <th align="center">{{ $t('label.public_ip_address') }}</th>
                                            <th align="center">{{ $t('label.last_connected_date') }}</th>
                                            <th align="center">{{ $t('label.access_status') }}</th>
                                        </thead>
                                        <tbody>
                                            <tr
                                                v-for="(tableData, tableDataIndex) in form.values.connected_devices"
                                                :key="tableDataIndex">
                                                <td align="center">
                                                    {{ tableData.serial_number }}
                                                </td>
                                                <td align="center">
                                                    {{ tableData.device_name }}
                                                </td>
                                                <td align="center">
                                                    <i
                                                        class="fa fa-lg"
                                                        :class="tableData.device_status ? 'fa-check text-success' : 'fa-close text-danger'">
                                                    </i>
                                                    {{ tableData.device_status ? $t('label.connected') : $t('label.disconnected') }}
                                                </td>
                                                <td align="center">
                                                    {{ tableData.computer_name }}
                                                </td>
                                                <td align="center">
                                                    {{ tableData.local_ip_address }}
                                                </td>
                                                <td align="center">
                                                    {{ tableData.public_ip_address }}
                                                </td>
                                                <td align="center">
                                                    {{ tableData.last_connected_date }}
                                                </td>
                                                <td align="center">
                                                    <span
                                                        class="status-label w-100"
                                                        :class="tableData.access_status ? 'status-label--active' : 'status-label--inactive'">
                                                        {{ tableData.access_status ? $t('label.active') : $t('label.inactive') }}
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    values: {
                        expand: false,
                        branch_name: '',
                        branch_key: '',
                        connected_devices: [
                            {
                                serial_number: '1234-4566-7899-7892',
                                device_name: 'Digital Fingerprint Reader',
                                device_status: 1,
                                computer_name: 'Bonfire-DESKTOP',
                                local_ip_address: '192.168.87.99',
                                public_ip_address: '201.256.35.22',
                                last_connected_date: 'Sept. 15, 2023',
                                access_status: 1,
                            },
                            {
                                serial_number: '1234-4566-7899-7892',
                                device_name: 'Barcode Scanner',
                                device_status: 0,
                                computer_name: 'Bonfire-DESKTOP',
                                local_ip_address: '192.168.87.99',
                                public_ip_address: '201.256.35.22',
                                last_connected_date: 'Sept. 15, 2023',
                                access_status: 0,
                            }
                        ]
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

                console.log(loadedData.data)

                if (loadedData.data) {
                    this.form.values.branch_name = loadedData.data.branch_name;
                    this.form.values.branch_key = loadedData.data.branch_key;
                }
            },
        }
    }
</script>