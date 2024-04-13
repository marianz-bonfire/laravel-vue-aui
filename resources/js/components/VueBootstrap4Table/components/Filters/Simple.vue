<template>
    <va-input v-if="filterOnPressEnter" ref="simple_filter_input" autofocus icon="filter" :clearable="clearable"
        :placeholder="column.filter.placeholder" v-model="inputValue" @keyup.enter="updateFilterHandler($event)"
        @input="onChange" @clean="cleared" />
    <va-input v-else ref="simple_filter_input" autofocus icon="filter" :clearable="clearable" :placeholder="column.filter.placeholder"
        v-model="inputValue" @keyup.enter="updateFilter($event)" @input="onChange" @clean="cleared" />

</template>

<script>
import debounce from "lodash/debounce";
import has from "lodash/has";


import {
    EventBus
} from '../../event-bus.js';

export default {
    name: "Simple",
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
            inputValue: '',
        };
    },
    mounted() {
        if (has(this.column, 'filter.init.value')) {
            this.inputValue = this.column.filter.init.value;
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
        // TODO - configurable debouncing
        updateFilterHandler: function (event) {
            this.$emit('update-filter', {
                "value": event.target.value,
                "column": this.column
            });
        },
        onChange(value) {
            if (value === '' || value === null) {
                //this.clearFilter();
            }
        },
        cleared() {
            this.clearFilter();
        },
        clearValue() {
            /* Commented this lines cause it may occurs errors about
            // Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. 
            // Instead, use a data or computed property based on the prop's value. Prop being mutated: "value"
            if (this.$refs.simple_filter_input) {
                this.$refs.simple_filter_input.value = "";
            }
            */
            this.inputValue = '';
        }
    },
    components: {
    },
    computed: {
        showClearButton() {
            return (this.column.filter.showClearButton == undefined) ? true : this.column.filter.showClearButton;
        },
        updateFilter() {
            return debounce(this.updateFilterHandler, this.debounceRate);
        },
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
