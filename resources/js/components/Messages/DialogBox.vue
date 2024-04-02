<template>
    <div class="dialog-box" ref="dialogBox" v-show="visible" tabindex="0" @keyup.esc.stop.prevent="$emit('update:visible', false)">
        <div class="dialog-box-container">
            <div class="dialog-box-type">
                <template v-if="status === 'delete' || status === 'delete-confirm'">
                    <i class="fa fa-trash fa-4x dialog-box-type--delete"></i>
                </template>
                <template v-else-if="status === 'success'">
                    <i class="fa fa-check-circle fa-4x dialog-box-type--success"></i>
                </template>
                <template v-else-if="status === 'error'">
                    <i class="fa fa-exclamation-circle fa-4x dialog-box-type--error"></i>
                </template>
                <template v-else-if="status === 'warning' || status === 'warning-confirm'">
                    <i class="fa fa-exclamation-triangle fa-4x dialog-box-type--warning"></i>
                </template>
                <template v-else-if="status === 'info'">
                    <i class="fa fa-exclamation-circle fa-4x dialog-box-type--info"></i>
                </template>
                <template v-else-if="status === 'confirm' || status === 'are-you-sure-confirm' || status === 'confirm-yes-no'">
                    <i class="fa fa-question-circle fa-4x dialog-box-type--confirm"></i>
                </template>
                <template v-else>
                    <slot name="icon">
                        <i class="fa fa-question-circle fa-4x"></i>
                    </slot>
                </template>
            </div>
            <div class="dialog-box-message">
                <div class="dialog-box-message__heading-text">
                    <template v-if="!! title && title !== ''">
                        {{ title }}
                    </template>
                    <template v-else-if="status === 'delete' || status === 'are-you-sure-confirm'">
                        {{ $t('label.are_you_sure') }}
                    </template>
                    <template v-else-if="status === 'success'">
                        {{ $t('label.success') }}
                    </template>
                    <template v-else-if="status === 'error'">
                        {{ $t('label.error') }}
                    </template>
                    <template v-else-if="status === 'warning' || status === 'warning-confirm'">
                        {{ $t('label.warning') }}
                    </template>
                    <template v-else-if="status === 'info'">
                        {{ $t('label.info') }}
                    </template>
                    <template v-else-if="status === 'confirm' || status === 'delete-confirm'">
                        {{ $t('label.confirm') }}
                    </template>
                    <template v-else>
                        <slot name="heading-text">
                            {{ $t('label.are_you_sure') }}
                        </slot>
                    </template>
                </div>
                <div class="dialog-box-message__sub-text">
                    <slot name="message">
                        Add a new message
                    </slot>
                    <slot name="link">
                    </slot>
                </div>
            </div>
            <div class="dialog-box-footer">
                <template v-if="status === 'delete' || status === 'delete-confirm'">
                    <button class="btn btn-danger" ref="dialogBoxOk" @click="$emit('ok')">{{ $t('label.ok') }}</button>
                    <button class="btn btn-default" @click="$emit('cancel')">{{ $t('label.cancel') }}</button>
                </template>
                <template v-else-if="status === 'confirm' || status === 'warning-confirm' || status === 'are-you-sure-confirm'">
                    <button class="btn btn-primary" ref="dialogBoxOk" @click="$emit('ok')">{{ $t('label.ok') }}</button>
                    <button class="btn btn-default" @click="$emit('cancel')">{{ $t('label.cancel') }}</button>
                </template>
                <template v-else-if="status === 'confirm-yes-no' || status === 'warning-confirm-yes-no'">
                    <button class="btn btn-primary" ref="dialogBoxOk" @click="$emit('ok')">{{ $t('label.yes') }}</button>
                    <button class="btn btn-default" @click="$emit('cancel')">{{ $t('label.no') }}</button>
                </template>
                <template v-else>
                    <slot name="buttons">
                        <button class="btn btn-primary" ref="dialogBoxOk" @click="$emit('ok')">{{ $t('label.ok') }}</button>
                    </slot>
                </template>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .dialog-box {
        position: fixed;
        background-color: rgba(0, 0, 0, .6);
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1500;

        &-container {
            padding: 25px 15px 15px 15px;
            border-radius: 4px;
            box-shadow:
                0px 11px 15px -7px rgba(0, 0, 0, 0.2),
                0px 24px 38px 3px rgba(0, 0, 0, 0.14),
                0px 9px 46px 8px rgba(0,0,0,.12);
            background-color: #fff;
            width: 300px;
        }

        &-type {
            text-align: center;

            &--delete,
            &--error {
                color: #e3342f;
            }

            &--success {
                color: #4C7A34;
            }

            &--warning {
                color: #FEC63D;
            }

            &--info {
                color: #00b6ff;
            }

            &--confirm {
                color: #0676e5;
            }
        }

        &-message {
            text-align: center;

            &__heading-text {
                text-align: center;
                font-weight: bold;
                font-size: 18px;
                text-transform: uppercase;
                margin-top: 10px;
            }

            &__sub-text {
                text-align: center;
                font-size: 14px;
            }
        }

        &-footer {
            margin-top: 15px;
            text-align: right;
        }
    }
</style>

<script>
    export default {
        props: ['status', 'visible', 'title'],
        watch: {
            'visible': function(value) {
                if (value) {
                    this.$nextTick(() => {
                        if (this.$refs.dialogBoxOk !== undefined) {
                            this.$refs.dialogBoxOk.focus();
                        }
                    });
                }
            },
        }
    }
</script>
