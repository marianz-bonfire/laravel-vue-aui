<template>
    <div>
    <va-checkbox v-model="option_selected" @change="handleSelect">{{text}}</va-checkbox>
    </div>
</template>

<script>
    export default {
        name: "MultiSelectAllItem",
        props: {
            isAllOptionsSelected: {
                type: Boolean,
                default: false
            },
            text: {
                type: String,
                default: "Any"
            },
        },
        data: function() {
            return {
                option_selected : false,
            };
        },
        methods: {
            handleSelect() {
                if (this.option_selected) {
                    this.$emit('on-deselect-all-option');
                } else {
                    this.$emit('on-select-all-option', this.index);
                }
            }
        },
        watch: {
            isAllOptionsSelected(newVal, oldVal) {
                this.option_selected = newVal;
            },
        }
    };
</script>
