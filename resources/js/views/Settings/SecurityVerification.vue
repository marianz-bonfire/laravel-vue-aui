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
                        <span>
                            Protect your account by adding an extra layer of security. A second login step can keep your account secure, even if your password is compromised. 
                            To enable it, all you need is a smart phone.
                        </span>
                        <br>
                        <span>
                            Atlassian two-step verification is not applied if you login with Google, 
                            Microsoft or SAML single sign-on. We recommend using Google’s or your identity provider’s equivalent. Learn more about two-step verification.
                        </span>
                    </div>
                    <div class="va-form-group">
                        <h4>Set up two-step verification</h4>
                        <span>
                            Start by entering your password so that we know it’s you. Then we’ll walk you through two more simple steps.
                        </span>
                        <br><br>
                        <span>
                            When you enable two-step verification, we keep you logged in to this device. We may log you out from your other devices. To log back in, enter your password and complete the second verification step.
                        </span>
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
</style>