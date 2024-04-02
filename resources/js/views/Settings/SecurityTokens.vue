<template>
    <va-page size="sm">
        <va-loading v-if="$root.loading" size="lg" color="black" center>
        </va-loading>
        <transition-group>
            <va-page-header key="app-header">
                <div slot="title">
                    API Tokens
                </div>
            </va-page-header>
            <div key="app-credential">
                <va-form ref="form" type="vertical">
                    <div class="va-form-group">
                        <span>
                            Your API tokens need to be treated as securely as any other password. You can only create a maximum of 25 tokens at a time.
                        </span>
                        <br>
                        <span>
                            New tokens may take up to a minute to work after they’ve been created.
                        </span>
                    </div>
                    <div class="va-form-group">
                        <va-table :hover="$root.config.hover" :size="$root.config.size" key="app-table">
                            <table>
                                <thead>
                                <tr>
                                    <th>Label</th>
                                    <th>Created</th>
                                    <th>Last Accessed</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>CDIS Application</td>
                                        <td>January 02, 20243</td>
                                        <td>March 16, 2023</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </va-table>
                    </div>
                    <div class="empty-container">
                        <div class="empty-container--child">
                            <img src="https://manage-profile-ui.prod-east.frontend.public.atl-paas.net/assets//EmptyImage.961c61f9a4e66086bf561887af761e5c.svg"/>
                            <div>
                               <h3> You don't have any API tokens</h3>
                            </div>
                            <va-button type="primary" @click="">Create API token</va-button> &nbsp;
                        </div>
                    </div>
                    <va-form-item>
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

</style>