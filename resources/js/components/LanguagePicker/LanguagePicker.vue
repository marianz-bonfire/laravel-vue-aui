<template>
    <div class="language-picker">
        Language:
        <div
            class="language-group"
            v-for="lang, langIndex in language"
            :key="langIndex"
            @click="setLanguage(langIndex)">
            <img class="language-icon" :src="lang.icon">
            <i class="fa fa-check-circle language-active" v-if="lang.active"></i>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                language: [
                    {
                        icon: '/images/ENG-UK.png',
                        name: 'ENG-UK',
                        active: true
                    },
                    {
                        icon: '/images/PH.png',
                        name: 'PH',
                        active: false
                    }
                ]
            }
        },
        methods: {
            setLanguage(i) {
                this.language.forEach(function(item) {
                    item.active = false;
                });

                this.language[i].active = true;
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "resources/sass/_variables.scss";

    .language-picker {
        display: flex;
        align-items: center;
    }

    .language-group {
        margin-left: 5px;
        text-align: center;
        width: 44px;
        display: flex;
        cursor: pointer;
    }

    .language-icon {
        width: 40px;
        height: 24px;
    }

    .language-active {
        position: relative;
        top: 19px;
        right: 7px;
        color: $green;
    }
</style>