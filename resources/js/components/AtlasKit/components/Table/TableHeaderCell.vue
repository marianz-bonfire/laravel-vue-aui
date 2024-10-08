<template>
  <th
    class="table-header-cell"
    :sticky-header="stickyHeader"
    :sticky-left="stickyLeft"
    :sticky-right="stickyRight"
    :sortable="column.sortable"
    @click="onClick"
  >
    <slot
      :sortedDesc="sortedDesc"
      :sorted="sorted"
      :sortable="column.sortable"
    >
      <span class="table-header-label">
        {{ column.name }}
      </span>
      <template v-if="column.sortable">
        <ChevronDownIcon
          v-if="sorted && sortedDesc"
          size="small"
        />
        <ChevronUpIcon
          v-if="sorted && !sortedDesc"
          size="small"
        />
      </template>
    </slot>
  </th>
</template>

<script>
    import ChevronDownIcon from '../Icon/ChevronDownIcon';
    import ChevronUpIcon from '../Icon/ChevronUpIcon';

    export default {
        name: 'TableHeaderCell',
        components: { ChevronDownIcon, ChevronUpIcon },
        props: {
            column: {
                type: Object,
                required: true
            },
            stickyHeader: {
                type: Boolean,
                default: false
            },
            stickyLeft: {
                type: Boolean,
                default: false
            },
            stickyRight: {
                type: Boolean,
                default: false
            },
            sorted: {
                type: Boolean,
                default: false
            },
            sortedDesc: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            onClick() {
                if (this.column.sortable) {
                    this.$emit('sorted');
                }
            }
        }
    };
</script>

<style scoped>
    .table-header-cell {
        align-items: center;
        position: relative;
        box-sizing: border-box;
        min-height: 40px;
        font-weight: bold;
        font-size: 12px;
        line-height: 1.67;
        letter-spacing: -0.1px;
        color: var(--ds-text-subtle, #5E6C84);
        padding: 9px 16px 7px;
        border-bottom: 2px solid var(--ds-border, #DFE1E6);
        display: flex;
    }

    .table-header-cell[sticky-header] {
        position: sticky;
        top: 0;
        z-index: 10;
        background: var(--ds-surface, #fff);
    }

    .table-header-cell[sticky-left] {
        position: sticky;
        left: 0;
        z-index: 20;
        background: var(--ds-surface, #fff);
    }

    .table-header-cell[sticky-right] {
        position: sticky;
        right: 0;
        z-index: 20;
        background: var(--ds-surface, #fff);
    }

    .table-header-cell[sortable]:hover {
        background-color: var(--ds-surface-hovered, rgb(250, 251, 252));
        cursor: pointer;
    }

    .table-header-label {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>
