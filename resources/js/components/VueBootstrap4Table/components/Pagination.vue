<template>
    <div :class="classObj">
        <ul class="pagination">
            <va-pagination-item :disabled="disablePreviousButton" :index="page - 1">
                <va-icon type="angle-left" />
            </va-pagination-item>
            <template v-if="!isEmpty">
                <va-pagination-item v-if="start > 3" :index="1">1</va-pagination-item>
                <va-pagination-item v-if="start > 3" :disabled="true">
                    <va-icon type="ellipsis-h" size="10px" />
                </va-pagination-item>
                <va-pagination-item v-for="index in range" :key="index" :active="index === page" :index="index">
                    {{ index }}
                </va-pagination-item>
                <va-pagination-item v-if="end < totalPages - 2" :index="totalPages - 2" :disabled="true">
                    <va-icon type="ellipsis-h" size="10px" />
                </va-pagination-item>
                <va-pagination-item v-if="end < totalPages - 2" :index="totalPages">
                    {{ totalPages }}
                </va-pagination-item>
            </template>
            <template v-else>
                <va-pagination-item :disabled="true">
                    <va-icon type="angle-right" />
                </va-pagination-item>
            </template>
            <va-pagination-item :disabled="disableNextButton" :index="page + 1">
                <va-icon type="angle-right" />
            </va-pagination-item>
            <!-- Number of rows per page starts here -->
            <va-select v-model="per_page" no-uncheck @change="perPageHandler(per_page)" width="80px">
                <va-option v-for="(option, key, index) in per_page_options" :key="index" :value="option"> {{ option }}
                </va-option>
            </va-select>
            <!-- Number of rows per page ends here -->
            <va-input autofocus :clearable="false" type="number" min="1" step="1" :max="totalPages"
                :placeholder="per_page_desc" @keyup.enter="gotoPage" v-model.number="go_to_page" width="100px">
            </va-input>
        </ul>
    </div>
</template>

<script>
import includes from "lodash/includes";
import range from "lodash/range";

export default {
    name: 'Pagination',
    props: {
        page: {
            type: [String, Number],
            required: true
        },
        per_page: {
            type: [String, Number],
            required: true,

        },
        per_page_desc: {
            type: [String],
            default: 'Go to page',
        },
        total: {
            type: [String, Number],
            required: true
        },
        num_of_visibile_pagination_buttons: {
            type: [String, Number],
            default: 7
        },
        per_page_options: {
            type: Array,
            default: function () {
                return [5, 10, 15]
            }
        }
    },
    data: function () {
        return {
            start: (this.page + 0),
            end: 0,
            go_to_page: ""
        }
    },
    mounted() {
        this.calculatePageRange(true);
    },
    methods: {
        gotoPage() {
            if (this.go_to_page === "" || !this.isPositiveInteger(this.go_to_page)) {
                return;
            }

            //Handle the new page
            this.pageHandler(this.go_to_page)
        },
        pageHandler(index) {
            if (index >= 1 && index <= this.totalPages) {
                this.$emit('update:page', index);
            }
        },
        changePage(index) {
            this.go_to_page = index;
            this.pageHandler(index);
        },
        perPageHandler(option) {
            this.$emit('update:per_page', option);
        },
        calculatePageRange(force = false) {
            //Skip calculating if all pages can be shown
            if (this.totalPages <= this.num_of_visibile_pagination_buttons) {
                this.start = 1;
                this.end = this.totalPages;
                return;
            }

            //Skip recalculating if the previous and next pages are already visible
            if (!force &&
                (includes(this.range, this.page - 1) || this.page == 1) &&
                (includes(this.range, this.page + 1) || this.page == this.totalPages)
            ) { return; }

            //Current page is the start page minus one
            this.start = (this.page == 1) ? 1 : this.page - 1;

            //Reserved entries: firstpage, ellipsis (2x), prev. page, last page, current page
            this.end = this.start + this.num_of_visibile_pagination_buttons - 5;

            //If the user navigates on page one or two, we set start to one (ellipsis pointless)
            //and can potentially shift up end
            if (this.start <= 3) {
                this.end += 3 - this.start;
                this.start = 1;
            }

            //If the user navigates on the last two pages or out of bounds, we can shift down start
            //This will also handle end overflow, substract 2 for ellipsis and last page
            if (this.end >= this.totalPages - 2) {
                this.start -= this.end - (this.totalPages - 2);
                this.end = this.totalPages;
            }

            //Handle start underflow
            this.start = Math.max(this.start, 1);
        },
        isPositiveInteger(str) {
            return /^\+?(0|[1-9]\d*)$/.test(str);
        }
    },
    components: {
    },
    computed: {
        totalPages() {
            return Math.ceil(this.total / this.per_page);
        },
        disablePreviousButton() {
            return this.page == this.start;
        },
        disableNextButton() {
            return this.page == this.end;
        },
        range() {
            return range(this.start, this.end + 1);
        },
        isEmpty() {
            return this.total == 0;
        },
        classObj() {
            const classes = {};

            classes['va-pagination'] = true;

            return classes;
        }

    },
    watch: {
        page(newVal, oldVal) {
            this.calculatePageRange();
        },
        rowCount(newVal, oldVal) {
            this.calculatePageRange();
        },
        totalPages(newVal, oldVal) {
            this.calculatePageRange();
        },
    }
}
</script>

<style scoped>
ul.pagination>* {
    margin-bottom: 0;
    margin-right: 4px;
}

.vbt-per-page-dropdown {
    margin-left: 8px;
}
</style>
