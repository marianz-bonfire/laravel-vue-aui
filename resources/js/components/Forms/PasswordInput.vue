<template>
    <div class="
        password-input
        password-input--white"
        :class="passwordClass">
        <div class="
            password-input-addon
            password-input-addon--left"
            v-if="addOns === 'left' || addOns === 'both'">
            <i
                class="fa fa-eye-slash fa-lg eye-password-toggle"
                :class="toggleState"
                @click="toggleEye($event)">
            </i>
        </div>
        <input
            v-model="password"
            class="form-control"
            :class="{ 'required-field': requiredState }"
            :type="showText ? 'text' : 'password'"
            :placeholder="placeholder"
            @input="update($event.target.value)"
            @keyup.enter="$emit('keyup-enter')"
            @keypress="$emit('key-press')"
            autocomplete="off">
        <div class="
            password-input-addon
            password-input-addon--right"
            v-if="addOns === 'right' || addOns === 'both'">
            <i
                class="fa fa-lg eye-password-toggle"
                :class="toggleState"
                @click="toggleEye($event)">
            </i>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            value: {
                type: String,
                default: ''
            },
            addOns: {
                type: String,
                default: 'right'
            },
            eyeState: {
                type: Boolean,
                default: false
            },
            requiredState: {
                type: Boolean,
                default: false
            },
            placeholder: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                password: '',
                showText: false
            }
        },
        mounted() {
            this.showText = this.eyeState;
        },
        computed: {
            passwordClass() {
                let addOns = this.addOns;
                let required = this.requiredState;
                let passwordClass = '';

                switch (addOns) {
                    case 'left':
                        passwordClass = 'password-input-left';
                        break;

                    case 'right':
                        passwordClass = 'password-input-right';
                        break;

                    case 'both':
                        passwordClass = 'password-input-left password-input-right';
                        break;

                    default:
                        passwordClass = 'password-input-right';
                        break;
                }

                if (required) {
                    passwordClass += ' password-input--required'
                }

                return passwordClass;
            },

            toggleState() {
                return (this.eyeState) ? 'fa-eye' : 'fa-eye-slash';
            }
        },
        methods: {
            update(value) {
                this.$emit('input', value);
            },
            toggleEye(event) {
                let eye = event.target;

                if (eye.classList.contains('fa-eye-slash')) {
                    eye.classList.remove('fa-eye-slash');
                    eye.classList.add('fa-eye');

                    this.showText = true;
                } else {
                    eye.classList.remove('fa-eye');
                    eye.classList.add('fa-eye-slash');

                    this.showText = false;
                }
            },
        },
    }
</script>

<style lang="scss" scoped>
    .eye-password-toggle {
        color: lighten(#333, 20%);
        z-index: 100;
        cursor: pointer;
        &:hover {
            color: #333;
        }
    }

    .password-input {
        display: flex;
        flex: 1;

        &--white {
            .password-input-addon {
                background-color: #fff;
                color: #afafaf;
                white-space: nowrap;
            }
        }

        &--required {
            .password-input-addon {
                background-color: #c9f1fd !important;
                color: #afafaf;
                white-space: nowrap;
            }
        }

        &-left {
            input[type="text"],
            input[type="password"],
            select {
                border-left: none;
            }

            .password-input-addon {
                border-left: none;
            }
        }

        &-right {
            input[type="text"],
            input[type="password"],
            select {
                border-right: none;
            }

            .password-input-addon {
                border-left: none;
            }
        }

        .password-input-addon {
            padding-left: 10px;
            padding-right: 10px;
            border-style: solid;
            border-color: #ced4da;
            outline: none;
            display: flex;
            justify-content: center;
            align-items: center;

            &--left {
                border-top-left-radius: 4px;
                border-bottom-left-radius: 4px;
                border-width: 1px 0px 1px 1px;
            }
            &--right {
                border-top-right-radius: 4px;
                border-bottom-right-radius: 4px;
                border-width: 1px 1px 1px 0px;
            }
        }
    }
</style>