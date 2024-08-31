<template>
    <Menu>
        <MenuSection label="Preview templates">
            <MenuItem class="center-text">
                <va-user-item title="Blank Page" description="Start a page from a scratch"
                    icon="file-alt"
                    icon-color="white"
                    icon-back-color="blue"
                    :show-icon="true"
                ></va-user-item> 
            </MenuItem>
            <MenuItem class="center-text">
                <va-user-item title="Product Requirements" description="Define, track and scope requirements for your product or feature."
                    icon="list"
                    icon-color="white"
                    icon-back-color="purple"
                    :show-icon="true"
                ></va-user-item> 
            </MenuItem>
            <MenuItem class="center-text">
                <va-user-item title="Design Decisions" description="Record important project decisions and communicate them with your team."
                    icon="route"
                    icon-color="white"
                    icon-back-color="green"
                    :show-icon="true"
                ></va-user-item> 
            </MenuItem>
            <MenuItem class="center-text">
                <va-user-item title="Meeting Notes" description="Set meeting agendas, take notes, and share action items with your team."
                    icon="users"
                    icon-color="white"
                    icon-back-color="teal"
                    :show-icon="true"
                ></va-user-item> 
            </MenuItem>
            <MenuItem class="center-text">
                <va-user-item title="Retrospective" description="What went well? What could have gone better? Crowdsource improvements with your team."
                    icon="map-signs"
                    icon-color="white"
                    icon-back-color="orange"
                    :show-icon="true"
                ></va-user-item> 
            </MenuItem>
        </MenuSection >
        <hr/>
        <va-user-item title="Jira Service Management" description="Collaborative IT service management"
            avatar-image="https://flight-deck-assets-bifrost.prod-east.frontend.public.atl-paas.net/assets/image/logos/contrib/jira-service-management/icons/blue.svg">
        </va-user-item>
        
    </Menu>

</template>

<script>
import VaUserItem from '../components/UserItem/VaUserItem.vue';
export default {
    components: {
        VaUserItem
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>