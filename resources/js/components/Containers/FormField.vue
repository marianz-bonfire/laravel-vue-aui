<template>
    <div>
        <slot></slot>
        <div
            class="error-message"
            :class="setAlignment"
            v-show="validate">
            {{ error }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "resources/sass/_variables.scss";

    .error-message {
        margin-top: 3px;
        font-size: 12px;
        color: $red;
        font-style: italic;
    }
</style>

<script>
    export default {
        props: {
            validate: {
                type: Boolean,
                default: true
            },
            name: {
                type: String
            },
            alignment: {
                type: String,
                default: 'left'
            },
            error: {
                type: String,
                default: ''
            },
        },
        computed: {
            setAlignment() {
                switch (this.alignment) {
                    case 'left':
                        return 'text-left';
                        break;
                    case 'center':
                        return 'text-center';
                        break;
                    case 'right':
                        return 'text-right';
                        break;
                    default:
                        return 'text-left';
                        break;
                }
            }
        }
    }
</script>
