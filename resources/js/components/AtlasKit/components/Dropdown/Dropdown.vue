<template>
  <div
    ref="dropdown-container"
    class="dropdown-container"
  >
    <slot
      v-if="$scopedSlots.trigger"
      name="trigger"
      :is-open="open"
      :toggle="onTriggerClick"
    />
    <Button
      v-else
      :is-selected="open"
      :appearance="appearance"
      @click="onTriggerClick"
    >
      {{ label }}
      <ChevronDownIcon slot="icon-after"/>
    </Button>

    <Popup
      ref="menu"
      :is-open="open"
      offset="0,8"
      :target-element="$refs['dropdown-container']"
      :boundaries-element="boundariesElement"
      :position-fixed="positionFixed"
      :placement="placement"
      @click.native="onMenuClick"
    >
      <slot
        name="dropdown-menu"
        :toggle="onTriggerClick"
      >
        <div
          class="dropdown-menu"
          :style="{ minWidth }"
        >
          <slot/>
        </div>
      </slot>
    </Popup>
  </div>
</template>

<script>
    import Button from '../Button/Button';
    import ChevronDownIcon from '../Icon/ChevronDownIcon';
    import Popup from '../common/Popup';

    export default {
        name: 'Dropdown',
        components: {
            Button, ChevronDownIcon, Popup
        },
        props: {
            label: {
                type: String,
                default: 'Dropdown'
            },
            appearance: {
                type: String,
                default: 'default'
            },
            boundariesElement: {
                type: [String, HTMLElement, Function],
                default: 'viewport'
            },
            closeOnClick: {
                type: Boolean,
                default: true
            },
            closeOnOutsideClick: {
                type: Boolean,
                default: true
            },
            closeOnEsc: {
                type: Boolean,
                default: true
            },
            positionFixed: {
                type: Boolean,
                default: false
            },
            placement: {
                type: String,
                default: 'bottom-start'
            },
            appendToBody: {
                type: Boolean,
                default: false
            },
            minWidth: {
                type: [Number, String],
                default: undefined
            }
        },
        data() {
            return {
                open: false
            };
        },
        watch: {
            open(value) {
                if (value) {
                    setTimeout(() => {
                        document.addEventListener('click', this.onOutsideClick);
                        document.addEventListener('keydown', this.onKeyDown);
                        if (this.appendToBody) {
                            document.body.appendChild(this.$refs.menu.$el);
                            this.updatePopperPosition();
                        }
                        this.$emit('open');
                    }, 0);
                } else {
                    document.removeEventListener('click', this.onOutsideClick);
                    document.removeEventListener('keydown', this.onKeyDown);
                    this.$emit('close');
                }
            }
        },
        beforeDestroy() {
            document.removeEventListener('click', this.onOutsideClick);
        },
        methods: {
            onTriggerClick() {
                this.open = !this.open;
            },
            onMenuClick() {
                if (this.closeOnClick) {
                    this.open = false;
                }
            },
            onOutsideClick(event) {
                if (this.$refs['dropdown-container'].contains(event.target)) return;
                if (this.closeOnOutsideClick) {
                    this.open = false;
                }
            },
            onKeyDown(event) {
                if (event.keyCode === 27 && this.closeOnEsc) {
                    this.open = false;
                }
            },
            updatePopperPosition() {
                if (this.$refs.menu) {
                    const [popper] = this.$refs.menu.$children;
                    popper.update();
                }
            }
        }
    };
</script>

<style scoped>
    .dropdown-container {
        display: inline-block;
    }

    .dropdown-menu {
        padding: 4px 0;
        max-width: 300px;
        max-height: 400px;
        overflow: auto;
        background-color: var(--ds-surface-overlay, #fff);
    }
</style>
