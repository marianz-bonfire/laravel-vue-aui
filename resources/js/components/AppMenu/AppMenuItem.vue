<template>
  <div
    class="menu-item"
    :active="active"
    v-on="$listeners"
  >
    <span
      v-if="$slots['icon-before']"
      class="menu-item-icon-before"
    >
      <slot name="icon-before"/>
    </span>
    <span class="menu-item-label">
      <slot/>
    </span>
  </div>
</template>

<script>
    export default {
        props: {
            active: {
                type: Boolean,
                default: false
            }
        }
    };
</script>

<style scoped>
    .container {
        background-color: #111;
        display: inline-block;
    }

    .container img {
        display: inline-block;
    }

    .container .text {
        font-size: 32px;
        font-weight: bold;
        display: inline-block;
        color: #fff;
        vertical-align: top;
        padding: 2px 1em;
    }

    .container .text:after {
        display: block;
        text-align: center;
        font-size: 20px;
        margin-top: 1em;
        content: "This is the subtitle";
    }

    .menu-item {
        align-items: center;
        box-sizing: border-box;
        cursor: pointer;
        color: var(--ds-text, rgb(23, 43, 77));
        text-decoration: none;
        padding: 8px 12px 7px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        height: 40px;
        display: flex;
        border-radius: 3px;
    }

    .menu-item-label {
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .menu-item-icon-before {
        display: flex;
        flex-shrink: 0;
        margin-right: 12px;
    }

    .menu-item:hover, .menu-item[active] {
        background-color: var(--ds-background-neutral-subtle-hovered, #F4F5F7);
        color: var(--ds-text, rgb(23, 43, 77));
        fill: rgb(244, 245, 247);
        text-decoration: none;
    }

    .menu-item[active] {
        color: rgb(0, 82, 204);
    }
</style>
