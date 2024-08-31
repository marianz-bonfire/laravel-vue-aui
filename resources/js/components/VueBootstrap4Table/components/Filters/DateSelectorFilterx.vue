<template>
    <div>
        <va-dropdown>
            <div slot="trigger">
                <va-button icon-after="angle-down" :id="'multifilter_' + column.name">
                    {{ title }}
                </va-button>
            </div>
            <va-card ref="vbt_dropdown_menu">
                <div slot="topLeft">
                    <va-radio-group v-model="selectedDateType" :vertical="vertical">
                        <va-radio-btn label="date">Date</va-radio-btn>
                        <va-radio-btn label="date-range" checked>Date Range</va-radio-btn>
                    </va-radio-group>
                </div>
                <div>
                    <Calendar v-if="showDate" data-cy="calendar" :value="date" @date-selected="onDateSelected" />
                    <Calendar v-else :range-value="true" :value="dateRange" @date-selected="onDateSelected" />
                </div>
            </va-card>
        </va-dropdown>
    </div>
</template>

<script>
import debounce from "lodash/debounce";
import has from "lodash/has";
import Calendar from "../../../AtlasKit/components/Calendar/Calendar.vue";


import { EventBus } from '../../event-bus.js';

export default {
    name: "DateSelectorFilter",
    components: {
        Calendar
    },
    props: {
        column: {
            type: Object,
            default: function () {
                return {};
            }
        },
    },
    data: function () {
        return {
            title: 'Select Date',
            vertical: false,
            filterOnPressEnter: false,
            debounceRate: 60,
            clearable: true,
            selectedDateValue: '',
            selectedDateType: 'date',
            date: new Date(),
            dateRange: {
                from: new Date(),
                to: new Date(),
            }
        };
    },
    mounted() {
        if (has(this.column, 'filter.init.value')) {
            this.$refs.date_filter_input.value = this.column.filter.init.value;
        }

        if (has(this.column, 'filter.filterOnPressEnter')) {
            this.filterOnPressEnter = this.column.filter.filterOnPressEnter;
        }

        if (!this.filterOnPressEnter && has(this.column, 'filter.debounceRate')) {
            this.debounceRate = this.column.filter.debounceRate;
        }

        EventBus.$on('reset-query', () => {
            if (this.$refs.date_filter_input) {
                this.$refs.date_filter_input.value = "";
            }
        });
    },
    methods: {
        clearFilter() {
            this.$refs.date_filter_input.value = "";
            this.selectedDateValue = '';
            this.$forceUpdate();
            this.$emit('clear-filter', this.column);
        },
        onClose(value) {
            console.log('date filter onClose');
            console.log(value);

        },
        onChange(value) {
            console.log('date filter watch');
            console.log(value);
            this.$emit('update-filter', {
                "value": value,
                "column": this.column
            });
        },
        cleared() {
            console.log('date filter cleared');
            this.clearFilter();
        },
        onDateRangeSelected(value) {
            this.dateRange = value;
            console.log('onDateRangeSelected');
            console.log(value);
        },

        onDateSelected(value) {
            this.date = value;
            console.log('onDateSelected');
            console.log(value);
        },

        formatDate(date, timeZone) {
            return date && format(utcToZonedTime(date, timeZone), 'yyyy-MM-dd HH:mm');
        }
    },

    computed: {
        updateFilter() {
            return debounce(this.updateFilterHandler, this.debounceRate);
        },
        showDate() {
            return this.selectedDateType == 'date';
        }
    },
    watch: {
        'selectedDateValue': function (value) {
            console.log('date filter watch');
            console.log(value);
            // if (!!value) {
            //     this.onChange(value);
            // } else {
            //     this.clearFilter();
            // }
        },
        'selectedDateType': function (value) {
            console.log('selected type watch');
            console.log(value);
        }
    }
};
</script>

<style scoped>
.vbt-simple-filter-clear {
    cursor: pointer;
}

/* Styles for wrapping the search box */

.main {
    width: 50%;
    margin: 50px auto;
}

/* Bootstrap 4 text input with clear icon on the right */

.has-clear-right {
    position: relative;
}

.has-clear-right .form-control {
    padding-right: 2.375rem;
}

.has-clear-right .form-control-feedback {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    display: block;
    width: 2.375rem;
    height: 2.375rem;
    line-height: 2.375rem;
    text-align: center;
}

.has-clear-right .form-control-feedback:hover {
    color: red;
}
</style>
