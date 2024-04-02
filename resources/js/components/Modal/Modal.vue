<template>
    <transition name="modal">
        <div class="modal-mask">
            <div
                class="modal-wrapper"
                :class="{ 'modal-dialog-centered': centeredDisplay }">
                <div class="modal-container" :style="modalWidth">
                    <template v-if="modalType === 'A'">
                        <div class="modal-header">
                            <div class="modal-header-title">
                                <slot name="header">Modal Header</slot>
                            </div>
                            <div class="modal-header-close" v-if="closable">
                                <i class="fa fa-times-circle fa-lg" @click="$emit('close')"></i>
                            </div>
                        </div>
                    </template>
                    <template v-if="modalType === 'B'">
                        <div class="modal-header-close modal-header-close--B" v-if="closable">
                            <i class="fa fa-times-circle fa-lg" @click="$emit('close')"></i>
                        </div>
                    </template>
                    <div class="modal-body" :style="modalHeight">
                        <slot name="content"></slot>
                    </div>
                    <div class="modal-footer">
                        <slot name="footer"></slot>
                        <button v-if="settings.hasOk" class="button button--primary" @click="$emit('ok')">{{ $t('label.ok') }}</button>
                        <button v-if="settings.hasCancel" class="button button--primary" @click="$emit('cancel')">{{ $t('label.cancel') }}</button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        props: {
            modalType: {
                type: String,
                default: 'A'
            },
            width: {
                type: String,
                default: '500px'
            },
            height: {
                type: Number,
                default: -1
            },
            maxHeight: {
                type: Number,
                default: -1
            },
            settings: {
                type: Object,
                default: function () { return {} }
            },
            closable: {
                type: Boolean,
                default: true
            },
            centeredDisplay: {
                type: Boolean,
                default: false
            }
        },
        mounted() {
            document.querySelector('body').classList.add('modal-open');
        },
        destroyed() {
            document.querySelector('body').classList.remove('modal-open');
        },
        created() {
            this.setDefaultSettings();
        },
        methods: {
            setDefaultSettings() {
                this.settings.hasOk = this.settings.hasOk === undefined ? false : this.settings.hasOk;
                this.settings.hasCancel = this.settings.hasCancel === undefined ? false : this.settings.hasCancel;
            }
        },
        computed: {
            modalWidth() {
                return 'width: ' + this.width;
            },
            modalHeight() {
                return {
                    'height': (this.height == -1) ? 'auto' : this.height + 'px',
                    'max-height': (this.maxHeight == -1) ? 'auto' : this.maxHeight + 'px',
                };
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "resources/sass/_variables.scss";
    .modal {
        &--no-body-padding {
            .modal-body {
                padding: 0px;
            }
        }
        &--no-scroll {
            .modal-body {
                overflow: initial;
            }
        }
        &--no-body-relative {
            .modal-body {
                position: static;
            }
        }
        &--no-header {
            .modal-header {
                display: none;
            }
        }
        &--no-footer {
            .modal-footer {
                display: none;
            }
        }
        &-header {
            display: flex;
            justify-content: space-between;
            text-transform: uppercase;
            align-items: center;
            padding: 10px;
            background-color: $accent;
            border-bottom: 1px solid darken($accent, 10%);
            &-title {
                font-weight: bold;
                font-size: 18px;
                color: $white;
            }
            &-close {
                i {
                    font-size: 16px;
                    color: $white;
                    transition: .4s;
                    &:hover {
                        cursor: pointer;
                        color: darken($white, 10%);
                    }
                }
                &--B {
                    position: absolute;
                    right: -13px;
                    top: -10px;
                }
            }
        }
        &-body {
            background-color: #fff;
            overflow: auto;
        }
        &-footer {
            background-color: #fff;
            padding: 8px 11px;
        }
    }
    .modal-mask {
        position: fixed;
        z-index: 10001;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: flex;
        justify-content: center;
        overflow: auto;
        transition: opacity .3s ease;
    }
    .modal-container {
        margin: 25px auto;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        position: relative;
    }
    .modal-enter {
        opacity: 0;
    }
    .modal-leave-active {
        opacity: 0;
    }
    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>
