<template>
    <va-page size="lg">
        <va-loading v-if="$root.loading" size="lg" color="black" center>
        </va-loading>
        <transition-group>
            <va-page-header key="app-header">
                <div slot="breadcrumb">
                    <va-breadcrumb separator="»">
                        <va-breadcrumb-item :to="{ path: '/home' }">Home</va-breadcrumb-item>
                        <va-breadcrumb-item>Dashboard</va-breadcrumb-item>
                    </va-breadcrumb>
                </div>
                <div slot="subtitle">
                    <span class="page-subtitle">Dashboard</span>
                </div>
                <div slot="actions">
                    <va-button type="danger">
                        <va-icon type="add" icon-style="regular" margin="0 7px 0 0"></va-icon>
                        Add
                    </va-button>
                    <va-button type="default">
                        <va-icon type="edit" icon-style="regular" margin="0 7px 0 0"></va-icon>
                        Edit
                    </va-button>
                    <va-button round type="help"><va-icon type="question-circle" /></va-button>
                    <va-button round type="default"><va-icon type="filter" /></va-button>
                    <va-button type="subtle" round @click="$refs.myAside.open()">
                        <va-icon type="star"></va-icon>
                    </va-button>
                </div>
            </va-page-header>
            <coming-soon key="app-coming-soon"></coming-soon>
        </transition-group>
    </va-page>
</template>

<script>
import ComingSoon from '../../components/Messages/ComingSoon.vue';

export default {
    components: {
        ComingSoon
    },
    data() {
        return {

        }
    },
    mounted() {

    },
    computed: {
        birthDate: {
            get() {
                return this.form.values.birth_date;
            },
            set(value) {
                let date = moment(value).format('YYYY-MM-DD');
                this.form.values.birth_date = date;
            }
        },
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
@import "resources/sass/_variables.scss";

.image-preview {
    img {
        width: 100px;
        height: 100px;
    }
}
</style>