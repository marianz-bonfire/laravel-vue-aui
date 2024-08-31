<template>
    <va-page size="sm">
        <va-loading v-if="$root.loading" size="lg" color="black" center>
        </va-loading>
        <transition-group>
            <va-page-header key="app-header">
                <div slot="title">
                    Recent devices
                </div>
                <div slot="actions">
                    <va-button type="default" icon-before="sign-out-alt">
                        Logout of all other devices
                    </va-button>
                </div>
            </va-page-header>
            <div key="app-credential">
                <va-form ref="form" type="vertical">
                    <div class="va-form-group">
                        <p>
                            View and manage devices where you’re currently logged in. 
                            If you’ve lost one of your devices or notice any suspicious activity, log out of all your devices and take steps to secure your account.
                        </p>
                        <p>
                            Learn more about recently used devices.
                        </p>
                    </div>
                    <div class="va-form-group">
                        <va-table :hover="$root.config.hover" :size="$root.config.size" key="app-table">
                            <table>
                                <thead>
                                <tr>
                                    <th>Device</th>
                                    <th>Application</th>
                                    <th>IP Address</th>
                                    <th>Last Active</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Computer</td>
                                        <td>MS Edge</td>
                                        <td>120.80.10.2</td>
                                        <td>now</td>
                                        <td>
                                            <va-lozenge type="success">CURRENT</va-lozenge>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Computer</td>
                                        <td>MS Edge</td>
                                        <td>120.80.10.2</td>
                                        <td>March 16, 2023</td>
                                        <td>
                                            <va-button type="default" icon-before="sign-out-alt">
                                                Logout
                                            </va-button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </va-table>
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
    }
}
</script>

<style lang="scss" scoped>
@import "resources/sass/_variables.scss";
.empty-container {
  /* Setup */
  position: relative;
  &--child {
    /* Center vertically and horizontally */
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -25px 0 0 -25px; /* Apply negative top and left margins to truly center the element */
    }
}

.va-form-group > h4, p {
    margin-right: .625rem !important;
    margin-left: .625rem !important;
}
</style>