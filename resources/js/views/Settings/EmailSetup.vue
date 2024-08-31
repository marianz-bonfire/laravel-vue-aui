<template>
    <va-page size="sm">
        <va-loading v-if="$root.loading" size="lg" color="black" center>
        </va-loading>
        <transition-group>
            <va-page-header key="app-header">
                <div slot="title">Email</div>
            </va-page-header>
            <div key="app-credential">
                <va-form ref="form" type="vertical">
                    <div class="va-form-group">
                        <h4>Current email</h4>
                        <p>
                            Your current email is <b>mariano.degracia.bonfire@gmail.com</b>
                        </p>
                    </div>
                    <div class="va-form-group">
                        <va-alert type="warning" title="Connected account">
                            <p>Your account is connected to a Google account. Changing the email address here will disconnect your account from the Google account.</p>
                        </va-alert>
                    </div>
                    <va-form-item label="New email address" need>
                        <va-input name="name" v-model="form.new_email" placeholder="Enter new email address"
                            :rules="[{ type: 'required', tip: 'Please enter your new email' }]" clearable />
                    </va-form-item>
                    <va-form-item>
                        <va-button type="primary" @click="">Save Changes</va-button> &nbsp;
                    </va-form-item>
                    <div class="va-form-group">
                        <h4>Email notifications</h4>
                        <p>
                            To manage marketing emails, visit the email preferences center.
                        </p>
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
.va-form-group > h4, p, .va-alert {
    margin-right: .625rem !important;
    margin-left: .625rem !important;
}
</style>