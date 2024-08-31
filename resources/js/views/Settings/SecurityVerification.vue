<template>
    <va-page size="sm">
        <va-loading v-if="$root.loading" size="lg" color="black" center>
        </va-loading>
        <transition-group>
            <va-page-header key="app-header">
                <div slot="title">
                    <span class="page-subtitle">
                        Two-step verification
                        <va-lozenge type="danger" size="lg">DISABLED</va-lozenge>
                    </span>
                </div>
            </va-page-header>
            <div key="app-credential">
                <va-form ref="form" type="vertical">
                    <div class="va-form-group">
                        <p>
                            Protect your account by adding an extra layer of security. A second login step can keep your account secure, even if your password is compromised. 
                            To enable it, all you need is a smart phone.
                        </p>
                        <p>
                            Atlassian two-step verification is not applied if you login with Google, 
                            Microsoft or SAML single sign-on. We recommend using Google’s or your identity provider’s equivalent. Learn more about two-step verification.
                        </p>
                    </div>
                    <div class="va-form-group">
                        <h4>Set up two-step verification</h4>
                        <p>
                            Start by entering your password so that we know it’s you. Then we’ll walk you through two more simple steps.
                        </p>
                        <p>
                            When you enable two-step verification, we keep you logged in to this device. We may log you out from your other devices. To log back in, enter your password and complete the second verification step.
                        </p>
                    </div>
                    <va-form-item label="Account pssword" need>
                        <va-input name="name" v-model="form.current_password" placeholder="Enter current password"
                            :rules="[{ type: 'required', tip: 'Please enter your current password' }]" clearable />
                    </va-form-item>
                    <va-form-item>
                        <va-button type="primary" @click="">Setup</va-button> &nbsp;
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
            form: {
                current_password: '',
                new_password: '',
            }
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
.va-form-group > h4, p, .va-alert {
    margin-right: .625rem !important;
    margin-left: .625rem !important;
}
</style>