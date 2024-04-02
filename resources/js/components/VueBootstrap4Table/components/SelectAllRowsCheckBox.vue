<template>
    <th class="text-center justify-content-center" >
       
            <!--
            <input type="checkbox" :indeterminate.prop="showIndeterminateState" class="custom-control-input vbt-checkbox" v-model="allRowsSelected" value=""/>
            -->
            <va-checkbox :indeterminate.prop="showIndeterminateState" v-model="check_selected" @input="handleCheck"></va-checkbox>
            <label class="custom-control-label"></label>
       
    </th>
</template>

<script>
    export default {
        name: 'SelectAllRowsCheckBox',
        props: {
            allRowsSelected: {
                type: Boolean,
                default: false
            },
            currentPageSelectionCount: {
                type: Number,
                default: 0
            },
        },
        data: function() {
            return {
                check_selected : false,
            };
        },
        computed: {
            showIndeterminateState() {
                return !this.allRowsSelected && this.currentPageSelectionCount > 0;
            },
        }, 
        methods: {
            handleCheck() {
                if (this.check_selected) {
                    this.$emit('select-all-row-checkbox');
                } else {
                    this.$emit('unselect-all-row-checkbox');
                }
            }
        },
        watch: {
            allRowsSelected(newVal, oldVal) {
                this.check_selected = newVal;
            },
        }
    }
</script>

<style scoped>
.custom-control-label {
  vertical-align: top;
}

</style>
