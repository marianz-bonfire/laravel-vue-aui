<template>
    <div
        class="alert alert-dismissible fade show"
        :class="type === 'error' ? 'alert-danger'
            : type === 'success' ? 'alert-success'
            : type === 'warning' ? 'alert-warning'
            : type === 'info' ? 'alert-info'
            : ''"
        role="alert">
        {{ message }}
        <button type="button" class="close" aria-label="Close" @click="$emit('close')">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
</template>

<script>
    export default {
        props: {
            type: {
                type: String,
                default: 'error'
            },
            message: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    .alert {
        margin-bottom: 0px;
        padding: 10px;
        border-radius: 0px;
    }
</style>