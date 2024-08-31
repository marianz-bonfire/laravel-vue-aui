<template>
    <va-page size="sm">
        <va-loading v-if="$root.loading" size="lg" color="black" center>
        </va-loading>
        <transition-group>
            <va-page-header key="app-header">
                <div slot="title">Connected Apps</div>
                <div slot="subtitle">
                    Control which apps have access to your user data, see which apps your site administrator controls, and find further information about apps storing data outside of Atlassian. 
                    Apps may appear on this page more than once depending on their implementation or how much access you’ve granted to the app. Discover new or alternative apps in the Atlassian Marketplace.
                </div>
            </va-page-header>
            <div key="app-credential">
                <va-form ref="form" type="vertical">
                    <div class="va-form-group">
                        <h4>Apps with access to your accounts</h4>
                        <p>
                            You’ve given these apps permission to access information and to act on behalf of your accounts. If you do not want the app to have access, remove access for the app using the button below.
                        </p>
                    </div>
                    <div class="va-form-group">
                        <va-alert type="info">
                            <p>No apps have been added.</p>
                        </va-alert>
                    </div>
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
            form: {
                new_email: ''
            },
        }
    },
    mounted() {
    },
    methods: {
        navigateExternalLink(link) {
            this.$root.processing(true);
            window.open(link, '_self');
        },
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