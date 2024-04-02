<template>
    <div
        class="dropdown-menu-button btn-group"
        :class="[
            dropdownDirection,
            {
                'dropdown-menu-button--disabled': disabled,
                'dropdown-menu-button--no-scroll': !withScroll,
            }
        ]"
        @click="$emit('on-click')">
        <div class="dropdown-tooltip">
            <slot name="header"></slot>
        </div>
        <button
            class="btn dropdown-button"
            @click="toggleDropdown"
            :disabled="disabled">
            <i :class="icon"></i>
        </button>
        <template v-if="!isTooltip">
            <div
                class="dropdown-menu"
                :style="dropdownWidth">
                <div class="menu-dropdown-form">
                    <div class="menu-dropdown-header">
                        <div class="menu-dropdown-title"><slot name="header"></slot></div>
                        <div class="menu-dropdown-icon" @click="closeDropdown">
                            <i class="fa fa-chevron-left angle-move"></i>
                            <i class="fa fa-chevron-left"></i>
                        </div>
                    </div>
                    <div
                        :class="removeScroll ? 'overflow-initial' : ''"
                        class="menu-dropdown-content"
                        :style="dropdownMaxHeight"
                        @scroll="handleScroll">
                        <slot name="content"></slot>
                    </div>
                    <div class="menu-dropdown-footer" v-if="!!this.$slots['footer']">
                        <slot name="footer"></slot>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        props: {
            width: {
                type: String,
                default: 'auto'
            },
            removeScroll: {
                type: Boolean,
                default: false
            },
            maxHeight: {
                type: String,
                default: 'auto'
            },
            icon: {
                type: String,
                default: 'fa fa-search'
            },
            closable: {
                type: Boolean,
                default: true
            },
            direction: {
                type: String,
                default: 'bottom'
            },
            isTooltip: {
                type: Boolean,
                default: false
            },
            visible: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            withScroll: {
                type: Boolean,
                default: true
            },
            withBranchValidation: {
                type: Boolean,
                default: false
            },
            branch: {
                type: String
            },
            inventoryLocation: {
                type: String
            }
        },
        mounted() {
            this.listenFooterButtons();
        },
        computed: {
            dropdownMaxHeight() {
                if (this.maxHeight != 'auto') {
                    return 'max-height: ' + this.maxHeight + 'px;';
                } else {
                    return 'max-height: ' + this.maxHeight + ';';
                }
            },
            dropdownWidth() {
                if (this.width != 'auto') {
                    return 'width: ' + this.width + 'px;';
                } else {
                    return 'width: ' + this.width + ';';
                }
            },
            dropdownDirection() {
                return 'drop' + this.direction;
            }
        },
        methods: {
            closeDropdown() {
                this.$el.classList.remove('show');

                if (this.$el.querySelector('.dropdown-menu') != undefined) {
                    this.$el.querySelector('.dropdown-menu').classList.remove('show');
                }
            },
            openDropdown() {
                let that = this;

                this.$el.querySelector('.dropdown-menu').classList.add('show');
                this.$el.classList.add('show');

                window.addEventListener('click', function(event) {
                    if (event.target.closest('.dropdown-menu-button') == null
                        && ! event.target.classList.contains('time-picker-overlay')
                        && ! event.target.hasAttribute('cz-shortcut-listen')
                        && ! event.target.closest('.mx-datepicker-main')
                        && ! event.target.closest('.dialog-box')) {
                        that.closeDropdown();
                    }
                });
            },
            toggleDropdown(event) {
                if (this.isTooltip) {
                    return;
                }

                let that = this;
                let dropdowns = document.querySelectorAll('.dropdown-menu-button');

                dropdowns.forEach(function(element) {
                    if (element.classList.contains('show')) {
                        element.classList.remove('show');
                        element.querySelector('.dropdown-menu').classList.remove('show');
                    }
                });

                this.$el.querySelector('.dropdown-menu').classList.add('show');
                this.$el.classList.add('show');


                window.addEventListener('click', function(event) {
                    if (event.target.closest('.dropdown-menu-button') == null
                        && ! event.target.classList.contains('time-picker-overlay')
                        && ! event.target.hasAttribute('cz-shortcut-listen')
                        && ! event.target.closest('.mx-datepicker-main')
                        && ! event.target.closest('.dialog-box')
                        && ! event.target.classList[0] === 'item-selector-button') {
                        that.closeDropdown();
                    }
                });
            },
            toggleTooltip(e, state) {
                let dropdownMenuButton = e.target.closest('.dropdown-menu-button');

                if (state) {
                    btnGroup.classList.add('show');
                    btnGroup.querySelector('.dropdown-menu').classList.add('show');
                } else {
                    btnGroup.classList.remove('show');
                    btnGroup.querySelector('.dropdown-menu').classList.remove('show');
                }
            },
            listenFooterButtons() {
                let that = this;

                if (document.querySelector('.menu-dropdown-footer .menu-dropdown-button') != undefined) {
                    document.querySelector('.menu-dropdown-footer .menu-dropdown-button').addEventListener('click', function() {

                        let isCloseable = false;

                        if (! that.withBranchValidation) {
                            isCloseable = true;
                        } else {

                            if (that.branch && that.branch !== '') {
                                isCloseable = true;
                            } else {
                                isCloseable = false;
                            }

                            if (
                                that.inventoryLocation && that.inventoryLocation !== ''
                            ) {
                                isCloseable = true;
                            } else {
                                isCloseable = false;
                            }
                        }

                        isCloseable ? that.closeDropdown() : '';

                    });
                }
            },
            handleScroll() {
                let target = document.querySelectorAll('.dropdown-menu-button .menu-dropdown-content .vm-select-dropdown');

                target.forEach(function(element) {
                    element.style.display = "none";
                });
            }
        },
        watch: {
            'visible': function(value) {
                if (value) {
                    this.openDropdown();
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
    .dropdown-menu-button {
        &--disabled {
            .dropdown-button {
                opacity: .4;
                &:hover {
                    cursor: not-allowed !important;
                    background-color: transparent !important;
                }
            }
        }

        &--no-scroll {
            .menu-dropdown-form {
                .menu-dropdown-content {
                    overflow: initial;
                }
            }
        }

        .dropdown-button {
            color: #fff;
            border-radius: 0px;
            transition: 0s;
            &:hover, &--active {
                transition: .4s;
                cursor: pointer;
                background-color: #00A2E5;
            }
            i {
                color: #fff;
            }
        }

        &.show {
            background-color: #00A2E5;

            .dropdown-button {
                border-color: #00A2E5;
                &:hover, &--active {
                    cursor: default;
                    background-color: #00A2E5;
                    color: #fff;
                }
                i {
                    color: #fff;
                    &:hover {
                        color: #fff;
                    }
                }
            }

            .dropdown-tooltip {
                display: none;
            }

            &:hover {
                .dropdown-tooltip {
                    display: none;
                }
            }
        }

        .dropdown-menu {
            margin: 0px;
            padding: 0px;
            border: none;
        }

        .dropdown-tooltip {
            position: absolute;
            white-space: nowrap;
            font-size: 14px;
            padding: 3px 6px;
            background: #fff;
            left: 100%;
            border: 1px #ccc solid;
            top: 6px;
            display: none;
            z-index: 1001;
        }

        &:hover {
            .dropdown-tooltip {
                display: block;
            }
        }
    }

    .menu-dropdown-form {
        border: 1px darken(#fff, 40%) solid;

        .menu-dropdown {
            &-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 5px 10px;
                border-bottom: 1px darken(#fff, 30%) solid;
                white-space: nowrap;
            }
            &-footer {
                border-top: 1px darken(#fff, 30%) solid;
            }
            &-title {
                font-size: 14px;
                text-transform: uppercase;
                font-weight: 700;
                color: lighten(#000, 25%);
            }
            &-button {
                padding: 4px 11px;
                background-color: lighten(#182B49, 15%);
                border-color: lighten(#182B49, 10%);
                color: #fff;
                &:hover {
                    color: #fff;
                    background-color: lighten(#182B49, 20%);
                }
                &:disabled {
                    opacity: .4;
                    background-color: lighten(#182B49, 15%);
                    border-color: lighten(#182B49, 10%);
                    cursor: not-allowed;
                    &:hover {
                        opacity: .4;
                        background-color: lighten(#182B49, 15%);
                        border-color: lighten(#182B49, 10%);
                    }
                }
            }
            &-icon {
                margin-left: 30px;
                cursor: pointer;
                i {
                    &.angle-move {
                        position: relative;
                        right: -7px;
                    }
                }
                &:hover {
                    i {
                        color: lighten(#000, 40%);
                    }
                }
            }
            &-content {
                .btn-group-toggle {
                    label.active.focus {
                        background-color: #2B4D83;
                    }
                    label.focus {
                        background-color: #2B4D83;
                    }
                }
            }
        }

        .table-layout {
            width: 100%;
            tr {
                border-bottom: 1px darken(#fff, 30%) solid;
                &:last-child {
                    border-bottom: none;
                }
            }
            td {
                padding: 3px;
                font-size: 12px;
                white-space: nowrap;
                color: lighten(#000, 25%);
                .form-control {
                    min-width: 120px;
                    padding: 3px 6px;
                    border-radius: 0px;
                    font-size: 12px;
                }
            }
        }

        .list {
            width: 100%;
            tr {
                &:hover {
                    background-color: darken(#fff, 5%);
                }
                td {
                    cursor: pointer;
                    padding: 6px 10px;
                    white-space: nowrap;
                    font-size: 14px;
                    i {
                        margin-right: 10px;
                        font-size: 20px;
                    }
                }
            }
        }

        .menu-dropdown-content {
            max-height: 60vh;
            overflow: auto;
            display: flex;
            flex-direction: column;
        }
    }
</style>

<style lang="scss" scoped>
    @media (max-width: 575.98px) {
        .dropdown-menu-button {
            .dropdown-tooltip {
                display: none !important;
                &:hover {
                    display: none !important;
                }
            }
        }
    }

    // Small devices (landscape phones, less than 768px)
    @media (max-width: 767.98px) {}

    // Medium devices (tablets, less than 992px)
    @media (max-width: 991.98px) {}

    // Large devices (desktops, less than 1200px)
    @media (max-width: 1199.98px) {}
</style>
