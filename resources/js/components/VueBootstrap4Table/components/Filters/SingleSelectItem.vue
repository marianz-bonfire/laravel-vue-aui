<template>
    <va-radio v-model="selected_value" :value="'option.value'" @change="handleSelect">{{ option.name }}</va-radio>  
</template>

<script>
import cloneDeep from "lodash/cloneDeep";
import includes from "lodash/includes";

export default {
    name: "SingleSelectItem",
    props: {
        column: {
            type: Object,
            default: function () {
                return {};
            }
        },
        option: {
            type: Object,
            default: function () {
                return {
                    "name": "option one",
                    "value": "option one"
                }
            }
        },
        index: {
            type: Number | String,
            default: 0
        },
        isSingleMode: {
            type: Boolean,
            default: true
        },
        isAllOptionsSelected: {
            type: Boolean,
            default: false
        },
        selectedOptionIndexes: {
            type: Array,
            default: function () {
                return [];
            }
        }
    },
    data: function () {
        return {
            option_selected: false,
            selected_value: ""
        };
    },
    methods: {
        handleSelect() {
            if (this.option_selected) {
                this.$emit('on-deselect-option', this.index);
            } else {
                this.$emit('on-select-option', this.index);
            }
        }
    },
    watch: {
        selectedOptionIndexes: {
            handler: function (newVal, oldVal) {
                let new_selected_option_indices = cloneDeep(newVal);
                this.option_selected = includes(new_selected_option_indices, this.index);

            },
            deep: true
        },
        option_selected(newVal, oldVal) {
            if (newVal) {
                this.selected_value = String(this.option.value);
            } else {
                this.selected_value = "";
            }
        }
    }
};
</script>
