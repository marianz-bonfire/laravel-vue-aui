<template>
    <div class="module-container">
        <div class="module-content">
            <div class="container-fluid">
                <div class="card mt-3">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-xl-3">
                                <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <a class="nav-link active" id="client-configuration-tab" data-toggle="pill" href="#client-configuration" role="tab" aria-controls="client-configuration" aria-selected="true">
                                        {{ $t('label.client_configuration') }}
                                    </a>
                                    <a class="nav-link" id="email-settings-tab" data-toggle="pill" href="#email-settings" role="tab" aria-controls="email-settings" aria-selected="false">
                                        {{ $t('label.email_settings') }}
                                    </a>
                                    <a class="nav-link" id="client-administrator-tab" data-toggle="pill" href="#client-administrator" role="tab" aria-controls="client-administrator" aria-selected="false">
                                        {{ $t('label.client_administrator') }}
                                    </a>
                                    <a class="nav-link" id="client-branches-tab" data-toggle="pill" href="#client-branches" role="tab" aria-controls="client-branches" aria-selected="false">
                                        {{ $t('label.client_branches') }}
                                    </a>
                                </div>
                            </div>
                            <div class="col">
                                <div class="tab-content" id="v-pills-tabContent">
                                    <div class="tab-pane fade show active" id="client-configuration" role="tabpanel" aria-labelledby="client-configuration-tab">
                                        <client-settings></client-settings>
                                    </div>
                                    <div class="tab-pane fade" id="email-settings" role="tabpanel" aria-labelledby="email-settings-tab">
                                        <email-settings></email-settings>
                                    </div>
                                    <div class="tab-pane fade" id="client-administrator" role="tabpanel" aria-labelledby="client-administrator-tab">
                                        <client-administrator></client-administrator>
                                    </div>
                                    <div class="tab-pane fade" id="client-branches" role="tabpanel" aria-labelledby="client-branches-tab">
                                        <client-branches></client-branches>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <side-navigation></side-navigation>
    </div>
</template>

<script>
    import Datatable from '../../components/Datatable2/Datatable.vue';
    import TableRow from '../../components/Datatable2/TableRow.vue';
    import ClientSettings from './ClientSettings.vue';
    import EmailSettings from './EmailSettings.vue';
    import ClientAdministrator from './ClientAdministrator.vue';
    import ClientBranches from './ClientBranches.vue';

    export default {
        components: {
            Datatable,
            TableRow,
            ClientSettings,
            EmailSettings,
            ClientAdministrator,
            ClientBranches
        },
        data() {
            return {
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "resources/sass/_variables.scss";
</style>