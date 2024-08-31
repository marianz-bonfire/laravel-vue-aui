<template>
  <div class="menu-section">
    <div
      v-if="label"
      class="menu-section-label"
    >
      {{ label }}
      <span class="float-right">
        <slot name="action"></slot>
      </span>
      <p v-if="description" class="menu-description">{{ description }}</p>
    </div>
    <slot/>
  </div>
</template>

<script>
    export default {
       name: 'MenuSection',
        props: {
            label: {
                type: String,
                default: undefined
            },
            description: {
                type: String,
                default: undefined
            },
            separator: {
                type: Boolean,
                default: false
            }
        }
    };
</script>

<style scoped>
    .menu-section {
        padding: 6px 0;
    }

    .menu-section-label {
        font-size: 11px;
        line-height: 1.45455;
        font-weight: 700;
        color: var(--ds-text-subtle, #42526E);
        margin-top: 14px;
        margin-bottom: 6px;
        padding: 0px 12px;
    }
    .menu-description {
      font-size: 12px;
      line-height: 16px;
      font-weight:normal;
      color: var(--ds-text-subtlest,#6b778c)
    }
    .float-right {
      float: right;
    }
</style>
