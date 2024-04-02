<template>
    <va-page size="sm">
        <va-loading v-if="$root.loading" size="lg" color="black" center>
        </va-loading>
        <transition-group>
            <va-page-header key="app-header">
                <div slot="title">Profile and visibility</div>
                <div slot="subtitle">
                    <span>Manage your personal information, and control which information other people see and apps may access.</span>
                </div>
            </va-page-header>
            <div key="app-credential">
                <va-form ref="form" type="vertical">
                    <va-card :elevation="$root.config.cardElevation" :padding="$root.config.cardPadding">

                    </va-card>
                </va-form>
            </div>
        </transition-group>
    </va-page>
</template>

<script>
export default {
    components: {
    },
    data() {
        return {
            animalValue: '',
            animals: [
                { value: 'cat', display: 'Cat', label: 'meow' },
                { value: 'dog', display: 'Dog', label: 'woof' },
                { value: 'wallaby', display: 'Wallaby', label: 'walla-walla' },
                { value: 'bear', display: 'Bear', label: 'roar' },
                { value: 'kangaroo', display: 'Kangaroo', label: 'roo!' }
            ],
        }
    },
    mounted() {
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
@import "resources/sass/_variables.scss";
</style>