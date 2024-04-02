<template>
    <div>
        <div class="card">
            <div class="card-header" @click="toggleContainer = ! toggleContainer">
                <div class="d-flex justify-content-between align-items-center">
                    <h5 class="mb-0 text-uppercase"><b>{{ header }}</b></h5>
                    <i class="fa fa-lg" :class="toggleContainer ? 'fa-caret-down' : 'fa-caret-up'"></i>
                </div>
            </div>
            <div class="card-body" v-if="toggleContainer">
                <table class="schedule-table table table-bordered">
                    <thead>
                        <tr>
                            <td></td>
                            <td colspan="2">
                                <div class="d-flex justify-content-center">
                                    <label class="radio-checkbox">
                                        <input class="mb-0" type="checkbox" v-model="form.values.break_1.has_break">
                                        <span class="ml-1">{{ $t('label.break_1') }}</span>
                                    </label>
                                </div>
                            </td>
                            <td colspan="2">
                                <div class="d-flex justify-content-center">
                                    <label class="radio-checkbox">
                                        <input class="mb-0" type="checkbox" v-model="form.values.break_2.has_break">
                                        <span class="ml-1">{{ $t('label.break_2') }}</span>
                                    </label>
                                </div>
                            </td>
                            <td colspan="2">
                                <div class="d-flex justify-content-center">
                                    <label class="radio-checkbox">
                                        <input class="mb-0" type="checkbox" v-model="form.values.break_3.has_break">
                                        <span class="ml-1">{{ $t('label.break_3') }}</span>
                                    </label>
                                </div>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>{{ $t('label.time_in') }}</td>
                            <td>{{ $t('label.time_start') }}</td>
                            <td>{{ $t('label.time_end') }}</td>
                            <td>{{ $t('label.time_start') }}</td>
                            <td>{{ $t('label.time_end') }}</td>
                            <td>{{ $t('label.time_start') }}</td>
                            <td>{{ $t('label.time_end') }}</td>
                            <td>{{ $t('label.time_out') }}</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td width="100px">
                                <date-picker
                                    v-model="form.values.time_in"
                                    format="hh:mm a"
                                    value-type="format"
                                    type="time"
                                    placeholder="hh:mm a">
                                </date-picker>
                            </td>
                            <td>
                                <date-picker
                                    v-model="form.values.break_1.time_start"
                                    format="hh:mm a"
                                    value-type="format"
                                    type="time"
                                    placeholder="hh:mm a">
                                </date-picker>
                            </td>
                            <td>
                                <date-picker
                                    v-model="form.values.break_1.time_end"
                                    format="hh:mm a"
                                    value-type="format"
                                    type="time"
                                    placeholder="hh:mm a">
                                </date-picker>
                            </td>
                            <td>
                                <date-picker
                                    v-model="form.values.break_2.time_start"
                                    format="hh:mm a"
                                    value-type="format"
                                    type="time"
                                    placeholder="hh:mm a">
                                </date-picker>
                            </td>
                            <td>
                                <date-picker
                                    v-model="form.values.break_2.time_end"
                                    format="hh:mm a"
                                    value-type="format"
                                    type="time"
                                    placeholder="hh:mm a">
                                </date-picker>
                            </td>
                            <td>
                                <date-picker
                                    v-model="form.values.break_3.time_start"
                                    format="hh:mm a"
                                    value-type="format"
                                    type="time"
                                    placeholder="hh:mm a">
                                </date-picker>
                            </td>
                            <td>
                                <date-picker
                                    v-model="form.values.break_3.time_end"
                                    format="hh:mm a"
                                    value-type="format"
                                    type="time"
                                    placeholder="hh:mm a">
                                </date-picker>
                            </td>
                            <td>
                                <date-picker
                                    v-model="form.values.time_out"
                                    format="hh:mm a"
                                    value-type="format"
                                    type="time"
                                    placeholder="hh:mm a">
                                </date-picker>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td colspan="2">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="d-flex">
                                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                            <label class="btn btn-success active">
                                                <input type="radio" name="fix-flex-1" value="fix" v-model="form.values.break_1.type">
                                                <span class="text-uppercase">{{ $t('label.fix') }}</span>
                                            </label>
                                            <label class="btn btn-success">
                                                <input type="radio" name="fix-flex-1" value="flexi" v-model="form.values.break_1.type">
                                                <span class="text-uppercase">{{ $t('label.flexi') }}</span>
                                            </label>
                                        </div>
                                        <div class="input-group">
                                            <input type="text" class="form-control text-right field-flexi-minutes" v-model="form.values.break_1.flexi_mins">
                                            <div class="input-group-append">
                                                <span class="input-group-text text-lowercase">{{ $t('label.minutes') }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label class="radio-checkbox field-deductible">
                                            <input type="checkbox" v-model="form.values.break_1.deductible">
                                            <span>{{ $t('label.deductible') }}</span>
                                        </label>
                                    </div>
                                </div>
                            </td>
                            <td colspan="2">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="d-flex">
                                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                            <label class="btn btn-success active">
                                                <input type="radio" name="fix-flex-1" value="fix" v-model="form.values.break_2.type">
                                                <span class="text-uppercase">{{ $t('label.fix') }}</span>
                                            </label>
                                            <label class="btn btn-success">
                                                <input type="radio" name="fix-flex-1" value="flexi" v-model="form.values.break_2.type">
                                                <span class="text-uppercase">{{ $t('label.flexi') }}</span>
                                            </label>
                                        </div>
                                        <div class="input-group">
                                            <input type="text" class="form-control text-right field-flexi-minutes" v-model="form.values.break_2.flexi_mins">
                                            <div class="input-group-append">
                                                <span class="input-group-text text-lowercase">{{ $t('label.minutes') }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label class="radio-checkbox field-deductible">
                                            <input type="checkbox" v-model="form.values.break_2.deductible">
                                            <span>{{ $t('label.deductible') }}</span>
                                        </label>
                                    </div>
                                </div>
                            </td>
                            <td colspan="2">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="d-flex">
                                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                            <label class="btn btn-success active">
                                                <input type="radio" name="fix-flex-1" value="fix" v-model="form.values.break_3.type">
                                                <span class="text-uppercase">{{ $t('label.fix') }}</span>
                                            </label>
                                            <label class="btn btn-success">
                                                <input type="radio" name="fix-flex-1" value="flexi" v-model="form.values.break_3.type">
                                                <span class="text-uppercase">{{ $t('label.flexi') }}</span>
                                            </label>
                                        </div>
                                        <div class="input-group">
                                            <input type="text" class="form-control text-right field-flexi-minutes" v-model="form.values.break_3.flexi_mins">
                                            <div class="input-group-append">
                                                <span class="input-group-text text-lowercase">{{ $t('label.minutes') }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label class="radio-checkbox field-deductible">
                                            <input type="checkbox" v-model="form.values.break_3.deductible">
                                            <span>{{ $t('label.deductible') }}</span>
                                        </label>
                                    </div>
                                </div>
                            </td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
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
    import DatePicker from 'vue2-datepicker';
    import 'vue2-datepicker/index.css';

    export default {
        components: {
            DatePicker
        },
        props: {
            header: {
                type: String
            }
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
                form: {
                    values: {
                        time_in: '',
                        break_1: {
                            has_break: false,
                            time_start: '',
                            time_end: '',
                            type: 'fix',
                            flexi_mins: '0',
                            deductible: false
                        },
                        break_2: {
                            has_break: false,
                            time_start: '',
                            time_end: '',
                            type: 'fix',
                            flexi_mins: '0',
                            deductible: false
                        },
                        break_3: {
                            has_break: false,
                            time_start: '',
                            time_end: '',
                            type: 'fix',
                            flexi_mins: '0',
                            deductible: false
                        },
                        time_out: '',
                    }
                },
                toggleContainer: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "resources/sass/_variables.scss";
    .schedule-table {
        width: 100%;
        thead {
            td {
                font-weight: bold;
                text-align: center;
                text-transform: uppercase;
            }
        }
    }
    .mx-datepicker {
        width: 193px !important;
    }
    .field {
        &-flexi-minutes {
            margin-left: 5px;
            max-width: 50px !important;
        }
        &-deductible {
            font-size: 14px;
            font-weight: bold;
        }
    }
    .card-header {
        &:hover {
            background-color: #f2f2f2;
            cursor: pointer;
        }
    }
</style>