<template>
    <va-datepicker autofocus :clearable="clearable" v-model="selectedDateValue" ref="date_filter_input"
        :placeholder="column.filter.placeholder" :autoclose="column.filter.autoclose" :readonly="false"
        :format="column.filter.format" @close="onClose" @keyup.enter="updateFilterHandler($event)"/>

</template>

<script>
import has from "lodash/has";


import { EventBus } from '../../event-bus.js';

export default {
    name: "DateFilter",
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
            filterOnPressEnter: false,
            debounceRate: 60,
            clearable: true,
            selectedDateValue: '',
        };
    },
    mounted() {
        if (has(this.column, 'filter.init.value')) {
            this.selectedDateValue = this.column.filter.init.value;
        }

        if (has(this.column, 'filter.filterOnPressEnter')) {
            this.filterOnPressEnter = this.column.filter.filterOnPressEnter;
        }

        if (!this.filterOnPressEnter && has(this.column, 'filter.debounceRate')) {
            this.debounceRate = this.column.filter.debounceRate;
        }

        EventBus.$on('reset-query', () => {
            this.clearValue();
        });
    },
    methods: {
        clearFilter() {
            this.clearValue();
            this.$emit('clear-filter', this.column);
        },
        onClose(value) {
            console.log('date filter onClose');
            console.log(value);   
        },
        onChange(value) {
            this.$emit('update-filter', {
                "value": value,
                "column": this.column
            });
        },
        updateFilterHandler: function (event) {
            this.$emit('update-filter', {
                "value": event.target.value,
                "column": this.column
            });
        },
        cleared() {
            this.clearFilter();
        },
        clearValue() {
            this.selectedDateValue = '';
        }
    },
    components: {
    },
    computed: {
        updateFilter() {
            return debounce(this.updateFilterHandler, this.debounceRate);
        },
    },
    watch: {
        'selectedDateValue': function (value) {          
            if (!!value) {
                //this.onChange(value);
            } else {
                //this.clearFilter();
            }
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
