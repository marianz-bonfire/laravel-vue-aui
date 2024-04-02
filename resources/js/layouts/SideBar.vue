<template>
    <va-sidebar :theme="$root.sidebar.theme">
        <div v-if="!! groupsItems && groups.length > 0" v-for="(group, index) in groups" :key="index">
            <va-sidebar-group 
                :items="group.items" 
                :title="group.title" 
                :defaultOpenLevel="group.defaultOpenLevel || 0"
                :show-toggle="$root.sidebar.showToggle" />
        </div>
        <va-alert v-else type="info">
            <p>No apps have been added.</p>
        </va-alert>
    </va-sidebar>
</template>

<script>
export default {
    props: {
        groups: {
            type: Array,
            default: [],
        }
    },
    data() {
        return {
            groupsItems: this.groups
        }
    },
    mounted() {
        if (! this.groups) {
            const storedSidebarItems = JSON.parse(localStorage.getItem('sidebar-items') || '{}');
            if (!! storedSidebarItems && ! _.isEmpty(storedSidebarItems)) {
                this.groups = storedSidebarItems;         
            }
        }
    },
    methods: {
        demoMethod() {
            this.VaModal.confirm({
                title: 'Hello!',
                message: `This modal exists to show how methods can be applied to Minibar items.`,
                type: 'info'
            })
        },
    },
    watch: {
        'groups': function(value) {
            localStorage.setItem("sidebar-items", JSON.stringify(value));
        },
    }
}
</script>