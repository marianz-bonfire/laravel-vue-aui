<template>
    <va-page size="lg">
        <va-loading v-if="$root.loading" size="lg" color="black" center>
        </va-loading>
        <transition-group>
            <va-page-header key="app-header">

                <div slot="breadcrumb">
                    <va-breadcrumb separator="»">
                        <va-breadcrumb-item :to="{ path: '/home' }">Home</va-breadcrumb-item>
                        <va-breadcrumb-item>Users</va-breadcrumb-item>
                    </va-breadcrumb>
                </div>
                <div slot="subtitle">
                    <span class="page-subtitle">Users</span>
                </div>

                <div slot="actions">
                    <va-button type="danger">
                        <va-icon type="add" icon-style="regular" margin="0 7px 0 0"></va-icon>
                        Add
                    </va-button>
                    <va-button type="default">
                        <va-icon type="edit" icon-style="regular" margin="0 7px 0 0"></va-icon>
                        Edit
                    </va-button>
                    <va-button round type="help"><va-icon type="question-circle" /></va-button>
                    <va-button round type="default"><va-icon type="filter" /></va-button>
                    <va-button type="subtle" round>
                        <va-icon type="star"></va-icon>
                    </va-button>
                </div>

            </va-page-header>
            <div class="module-container" key="app-container">
                <vue-good-table 
                    :columns="columns" 
                    :rows="rows" :fixed-header="true"
                    :pagination-options="paginationOptions" 
                    :select-options="{ 
                        enabled: true,
                        selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row
                        clearSelectionText: 'Clear',
                    }"
                    :sort-options="{ enabled: true, }"
                    @on-select-all="onSelectAll" compactMode
                    styleClass="vgt-table condensed">
                    <div slot="emptystate">
                        This will show up when there are no rows
                    </div>
                    <div slot="table-actions">
                        <va-button round type="help"><va-icon type="question-circle" /></va-button>
                        <va-button round type="default"><va-icon type="filter" /></va-button>
                    </div>
                </vue-good-table>
            </div>
        </transition-group>
    </va-page>
</template>

<script>
import { VueGoodTable } from '../../components/VueGoodTable';
//import '../../components/VueGoodTable/dist/vue-good-table.css';

export default {
    components: {
        VueGoodTable
    },
    data() {
        return {
            columns: [
                {
                    label: 'Name',
                    field: 'name',
                    filterOptions: {
                        styleClass: 'class1', // class to be added to the parent th element
                        enabled: true, // enable filter for this column
                        placeholder: 'Filter name', // placeholder for filter input
                        filterValue: '', // initial populated value for this filter
                        filterDropdownItems: [], // dropdown (with selected values) instead of text input
                     //   filterFn: this.columnFilterFn, //custom filter function that
                        trigger: 'enter', //only trigger on enter not on keyup 
                    },
                },
                {
                    label: 'Age',
                    field: 'age',
                    type: 'number',
                },
                {
                    label: 'Created On',
                    field: 'createdAt',
                    type: 'date',
                    dateInputFormat: 'yyyy-MM-dd',
                    dateOutputFormat: 'MMM do yy',
                },
                {
                    label: 'Percent',
                    field: 'score',
                    type: 'percentage',
                },
            ],
            rows: [
                { id: 1, name: "John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
                { id: 2, name: "Jane", age: 24, createdAt: '2011-10-31', score: 0.03343 },
                { id: 3, name: "Susan", age: 16, createdAt: '2011-10-30', score: 0.03343 },
                { id: 4, name: "Chris", age: 55, createdAt: '2011-10-11', score: 0.03343 },
                { id: 5, name: "Dan", age: 40, createdAt: '2011-10-21', score: 0.03343 },
                { id: 6, name: "John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
            ],
            paginationOptions: {
                enabled: true,
                mode: 'records',
                perPage: 5,
                position: 'bottom',
                perPageDropdown: [3, 7, 9],
                dropdownAllowAll: false,
                jumpFirstOrLast: true,
                firstLabel: 'First Page',
                lastLabel: 'Last Page',
                nextLabel: 'next',
                prevLabel: 'prev',
                rowsPerPageLabel: 'Rows per page',
                ofLabel: 'of',
                pageLabel: 'page', // for 'pages' mode
                allLabel: 'All',
                infoFn: (params) => `my own page ${params.firstRecordOnPage}`,
            },
        }
    },
    mounted() {
        $('.dropdown-toggle').dropdown();

        $('.btn-popover').popover({
            trigger: 'focus'
        });
    },
    methods: {
        onSelectAll(params) {
            // params.selected - whether the select-all checkbox is checked or unchecked
            // params.selectedRows - all rows that are selected (this page)
            console.log(params);
        }
    },
    watch: {

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