<template>
<th v-on="isSortableColumn ? { click: () => sort() } : {}" class="table-header-cell" v-bind:class="{'vbt-sort-cursor':isSortableColumn}">
    <slot name="column" :column="column">{{column.label}}</slot>

    <template v-if="isSortableColumn">
        <template v-if="!isSort">
            <span class="float-right">
                <slot name="no-sort-icon">
                    &#x1F825;&#x1F827;
                </slot>
            </span>
        </template>

        <template v-else>
            <template v-if="query.sort.order==='asc'">
                <span class="float-right">
                    <slot name="sort-asc-icon">
                        &#x1F825;
                    </slot>
                </span>
            </template>

            <template v-else-if="query.sort.order==='desc'">
                <slot name="sort-desc-icon">
                    <span class="float-right">&#x1F827;</span>
                </slot>
            </template>

            <template v-else>
                <span class="float-right">
                    <slot name="no-sort-icon">
                        &#x1F825;&#x1F827;
                    </slot>
                </span>
            </template>
        </template>
    </template>

</th>
</template>

<script>
import has from "lodash/has";

export default {
    name: "Column",
    props: {
        column: {
            type: Object,
            default: function () {
                return {};
            }
        },
        query: {
            type: Object,
            default: function () {
                return {};
            }
        }
    },
    data: function () {
        return {};
    },
    methods: {
        sort() {
            this.$emit("update-sort", this.column);
        }
    },
    components: {
    },
    computed: {
        isSort() {
            if (this.query.sort.name == null) {
                return false;
            }

            return this.query.sort.name === this.column.name;
        },

        isSortableColumn() {
            if (!has(this.column,'sort')) {
                return false;
            } else {
                return this.column.sort;
            }
        }
    }
};
</script>

// TODO icon color

<style scoped>
.vbt-sort-cursor {
    cursor: pointer;
}
.float-right {
    float: right;
}
</style>
