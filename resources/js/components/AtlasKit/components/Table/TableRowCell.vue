<template>
  <td
    ref="cellElement"
    class="table-row-cell"
    :sticky-left="stickyLeft"
    :sticky-right="stickyRight"
  >
    <slot
      :value="value"
      :cell-element="$refs.cellElement"
    >
      <span class="table-row-cell-value">
        {{ value }}
      </span>
    </slot>
  </td>
</template>

<script>
    export default {
        name: 'TableRowCell',
        props: {
            value: {
                type: [String, Number, Boolean, Object, Array],
                default: undefined
            },
            stickyLeft: {
                type: Boolean,
                default: false
            },
            stickyRight: {
                type: Boolean,
                default: false
            }
        }
    };
</script>

<style scoped>
    .table-row-cell {
        align-items: center;
        position: relative;
        box-sizing: border-box;
        min-height: 40px;
        color: var(--ds-text, #172B4D);
        line-height: 20px;
        padding: 8px 16px;
        display: flex;
    }

    .table-row-cell-value {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .table-row-cell[sticky-left] {
        position: sticky;
        left: 0;
        z-index: 2;
        background: var(--ds-surface, #fff);
    }

    .table-row-cell[sticky-right] {
        position: sticky;
        right: 0;
        z-index: 2;
        background: var(--ds-surface, #fff);
    }
</style>
