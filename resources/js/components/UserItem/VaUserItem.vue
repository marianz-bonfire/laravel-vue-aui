<template>
    <transition name="user-item">
        <div class="user-item">
            <div class="va-user-item-image va-user-item-image-top" :title="title">
                <va-button v-if="showIcon" rounded type="subtle"><va-icon :size="size" :color="iconColor" :bg-color="iconBackColor" :type="icon" :padding="iconPadding + 'px'"/></va-button>
                <Avatar  v-else :size="size" :avatar="avatarImage" :rounded="rounded" :bordered="bordered"/>
            </div>
            <div class="va-user-text">
                <div class="va-user-text-title"><span data-testid="member-list-item-full-name">{{ title }}</span>
                </div>
                <div class="va-user-text-description">
                    <div class="va-user-text-description-content">
                        <div>
                            {{ description }}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="" data-testid="board-permission-selector">
                    <div>
                        <slot name="action"></slot>
                    </div>
                </div>
            </div>
        </div>

    </transition>
</template>

<script>

export default {
    props: {
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        avatarImage: {
            type: String,
        },
        size: {
            type: String,
            default: 'small'
        },
        icon: {
            type: String,
        },
        iconColor: {
            type: String,
            default: 'black'
        },
        iconBackColor: {
            type: String,
            default: 'white'
        },
        iconPadding: {
            type: Number,
            default: 8,
        },
        showIcon: {
            type: Boolean,
            default: false
        },
        rounded: {
            type: Boolean,
            default: false
        },
        bordered: {
            type: Boolean,
            default: false
        }
    },
    mounted() {

    },
    destroyed() {

    },
    created() {
        this.setDefaultSettings();
    },
    methods: {
        setDefaultSettings() {

        }
    },
    computed: {
    }
}
</script>

<style lang="scss" scoped>
@import "resources/sass/_variables.scss";

.user-item-container {
    max-height: 488px;
    padding-right: 20px;
    margin-right: 4px;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    -webkit-transform: translate3d(0, 0, 0);
    scrollbar-width: thin;
}

.user-item {
    display: flex;
    margin-left: 8px;
    margin-right: 8px;
    align-items: center;
}

.va-user-item-image {
    align-self: center;
    overflow: unset;
}

.va-user-item-image-top {
    position: relative;
    line-height: 10px;
    overflow: visible;
    white-space: nowrap;
    vertical-align: top;
}

.va-user-text {
    flex-grow: 1;
    margin-left: 12px;
    word-break: break-word;
    padding-right: 12px;
}

.va-user-text .va-user-text-title {
    font-size: 14px;
    color: #212836;
}

.va-user-text .va-user-text-description {
    font-size: 12px;
    line-height: 16px;
    color: #44546f;
}
</style>
