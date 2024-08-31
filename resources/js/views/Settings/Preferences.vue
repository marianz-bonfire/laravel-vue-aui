<template>
    <va-page size="sm">
        <va-loading v-if="$root.loading" size="lg" color="black" center>
        </va-loading>
        <transition-group>
            <va-page-header key="app-header">
                <div slot="title">Account Preferences</div>
                <div slot="subtitle">
                    Control settings related to your account.
                </div>
            </va-page-header>
            <div key="app-credential">
                <va-form ref="form" type="vertical">
                    <div class="va-form-group">
                        <h4>Language & Region</h4>
                        <p>Changes to your language and timezone will be reflected across Jira, Confluence, Trello,Bitbucket and directory.
                            Update your language and timezone for other products from your product settings.
                        </p>
                    </div>
                    <va-form-item label="Language" need>
                        <va-select v-model="animalValue" placeholder="Pick an animal" no-uncheck>
                            <template v-for="animal in animals">
                                <va-option
                                    :value="animal.value"
                                    :label="animal.label">
                                    {{animal.display}}
                                </va-option>
                            </template>
                        </va-select>
                    </va-form-item>
                    <va-form-item label="Time zone" need>
                        <va-select v-model="animalValue" placeholder="Pick an animal" no-uncheck>
                            <template v-for="animal in animals">
                                <va-option
                                    :value="animal.value"
                                    :label="animal.label">
                                    {{animal.display}}
                                </va-option>
                            </template>
                        </va-select>
                    </va-form-item>
                    <div class="va-form-group">
                        <h4>Delete your account</h4>
                        <p>When you delete your account, you lose access to Atlassian account services, and we permanently delete your personal data. You can cancel the deletion within 14 days.</p>
                    </div>                    
                    <va-form-item>
                        <va-button type="danger" @click="">Delete account</va-button> &nbsp;
                        <va-button icon-after="external-link-alt">Learn more</va-button>
                    </va-form-item>
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
.va-form-group > h4, p {
    margin-right: .625rem !important;
    margin-left: .625rem !important;
}
</style>