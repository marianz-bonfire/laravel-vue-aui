<template>
    <va-page size="sm">
        <va-loading v-if="$root.loading" size="lg" color="black" center>
        </va-loading>
        <transition-group>
            <va-page-header key="app-header">
                <div slot="title">
                    <span class="page-subtitle">Security</span>
                </div>
            </va-page-header>
            <div key="app-credential">
                <va-form ref="form" type="vertical">
                    <div class="va-form-group">
                        <h4>Change your password</h4>
                        <p>
                            When you change your password, we keep you logged in to this device but may log you out
                            from your other devices.
                        </p>
                    </div>
                    <va-form-item label="Current pssword" need>
                        <va-input name="name" v-model="form.current_password" placeholder="Enter current password"
                            :rules="[{ type: 'required', tip: 'Please enter your current password' }]" clearable />
                    </va-form-item>
                    <va-form-item label="New password" need>
                        <va-input name="name" v-model="form.current_password" placeholder="Enter new password"
                            :rules="[{ type: 'required', tip: 'Please enter your new password' }]" clearable />
                    </va-form-item>
                    <va-form-item>
                        <va-button type="primary" @click="">Save Changes</va-button> &nbsp;
                    </va-form-item>
                    <div class="va-form-group">
                        <h4>Two-step verification</h4>
                        <p>Keep your account extra secure with a second login step. Learn more</p>
                        <br>
                        <va-form-item>
                            <va-button size="md" icon-before="external-link-alt" @click="navigateExternalLink('/settings/security/verification')">
                                Manage two-step verification
                            </va-button>
                        </va-form-item>
                    </div>
                    <div class="va-form-group">
                        <h4>API Tokens</h4>
                        <p>
                            A script or other process can use an API token to perform basic authentication with Jira
                            Cloud applications or Confluence Cloud.
                            You must use an API token if the Atlassian account you authenticate with has had two-step
                            verification enabled.
                            You should treat API tokens as securely as any other password. Learn more.
                        </p>
                        <br>
                        <!--
                        <a href="/settings/security/tokens">Create and manage API tokens</a>
                        -->
                        <va-form-item>
                            <va-button size="md" icon-before="external-link-alt" @click="navigateExternalLink('/settings/security/tokens')">
                                Create and manage API tokens
                            </va-button>
                        </va-form-item>
                    </div>
                    <div class="va-form-group">
                        <h4>Recent devices</h4>
                        <p>If you've lost one of your devices or notice any suspicious activity, log out of all your
                            devices and take steps to secure your account. Learn more
                        </p>
                        <br>
                        <!--
                        <a href="/settings/security/recent-devices">View and manage recent devices</a>
                        -->
                        <va-form-item>
                            <va-button size="md" @click="navigateExternalLink('/settings/security/recent-devices')">View and manage recent devices<va-icon class="va-icon-ml" type="external-link-alt"/></va-button>
                        </va-form-item>
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
                current_password: '',
                new_password: '',
            }
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