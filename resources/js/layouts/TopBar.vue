<template>
    <va-topbar :theme="$root.config.theme.topbar">
        <div slot="left">

            <!--
            <va-button v-if="$root.sidebar.toggler == 'top'" :type="buttonTheme" round @click="showSideBar">
                <va-icon :type="sidebarVisibility ? 'close' : 'bars'" color="white"></va-icon>
            </va-button>
           
            
            -->
            <span class="menu-logo">
                <img src="/images/aui.png" height="40">
            </span>
            <span class="menu-logo">
                {{ $root.app.name }}
            </span>
            <va-dropdown class="mega-menu-item">
                <div slot="trigger">
                    <va-button :type="buttonTheme">                        
                        <va-icon type="th"></va-icon>
                    </va-button>
                </div>
                <div>
                    <MenuSection label="REcommended" description="Ship faster with marketplace apps that integrate your team’s tools with Jira."> </MenuSection>
                    <li>
                        <a href="#">
                            <va-user-item title="Jira Service Management" description="Collaborative IT service management"
                                avatar-image="https://flight-deck-assets-bifrost.prod-east.frontend.public.atl-paas.net/assets/image/logos/contrib/jira-service-management/icons/blue.svg">
                            </va-user-item>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <va-user-item title="Product Discovery" description="Prioritize, collaborative, and deliver new ideas"
                                avatar-image="https://flight-deck-assets-bifrost.prod-east.frontend.public.atl-paas.net/assets/image/logos/contrib/jira-product-discovery/icons/blue.svg">
                            </va-user-item>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <va-user-item title="Confluence" description="Create, collaborative, and organize your work"
                                avatar-image="https://flight-deck-assets-bifrost.prod-east.frontend.public.atl-paas.net/assets/image/logos/contrib/confluence/icons/blue.svg">
                            </va-user-item>
                        </a>
                    </li>
                    <hr />
                    <li>
                        <a href="#">
                            <va-user-item title="More Atlassian Products" description=""
                            avatar-image="https://img.icons8.com/?size=512&id=Wqm6Mn3cs2BJ&format=png">
                            </va-user-item>
                        </a>
                    </li>
                </div>

            </va-dropdown>

            <va-dropdown class="mega-menu-item">
                <div slot="trigger">
                    <va-button :type="buttonTheme">
                        Templates
                        <va-icon type="angle-down" margin="0 2px 0 10px"></va-icon>
                    </va-button>
                </div>
              
                <div class="account-drop-menu">
                    <MenuSection label="Projects" description="Ship faster with marketplace apps that integrate your team’s tools with Jira."> </MenuSection>
                    <div class="no-data">
                        <no-data></no-data>
                    </div>
                    <hr/>
                    <MenuSection label="Projects" description="Ship faster with marketplace apps that integrate your team’s tools with Jira."> </MenuSection>
                    <li><a href="#">Nav item</a></li>
                    <li class="aui-nav-selected">
                        <a href="#nav-item-content">
                            <span class="assistive">Selected item:</span> 
                            <va-icon type="external-link-alt"></va-icon>
                        </a>
                    </li>
                    <li><a href="#">Pull requests <va-badge>123</va-badge></a></li>
                    <li><a href="#dropdown2-nav1" aria-owns="dropdown2-nav1" aria-haspopup="true" class="aui-dropdown2-trigger">Dropdown</a></li>
                    <li><a href="#">Overview</a></li>
                    <li><a href="#">Kitchen sink</a></li>
                    <hr />
                    <li class="aui-nav-selected"><a href="#nav-item-content"><span class="assistive">Selected item:</span> Interesting Nav Item</a></li>
                    <li><a href="#">Regular Nav item</a></li>
                    <li><a href="#">Other Nav item</a></li>
                    <hr />
                    <li><a href="#">Other Nav item</a></li>
                    <li><a href="#">Other Nav item</a></li>
                </div>
               
               
            </va-dropdown>
            <va-dropdown class="mega-menu-item">
                <div slot="trigger">
                    <va-button :type="buttonTheme">Modules</va-button>
                </div>
                <div class="atl-navigation-menu">                   
                    <div class="mega-menu-column">
                        <h3>Categories</h3>
                        <ul>
                            <li><a href="#">Electronics</a></li>
                            <li><a href="#">Clothing</a></li>
                            <!-- Add more category links here -->
                        </ul>
                    </div>
                    <div class="mega-menu-column">
                        <h3>Featured</h3>
                        <ul>
                            <li><a href="#">New Arrivals</a></li>
                            <li><a href="#">Best Sellers</a></li>
                            <!-- Add more featured links here -->
                        </ul>
                    </div>
                    <div class="mega-menu-column">
                        <h3>Featured</h3>
                        <ul>
                            <li><a href="#">New Arrivals</a></li>
                            <li><a href="#">Best Sellers</a></li>
                            <!-- Add more featured links here -->
                        </ul>
                    </div>
                    <div class="mega-menu-column">
                        <h3>Featured</h3>
                        <ul>
                            <li><a href="#">New Arrivals</a></li>
                            <li><a href="#">Best Sellers</a></li>
                            <!-- Add more featured links here -->
                        </ul>
                    </div>
                </div>

            </va-dropdown>

            <va-dropdown class="mega-menu-item">
                <div slot="trigger">
                    <va-button :type="buttonTheme">Accessbility</va-button>
                </div>
                <div class="atl-navigation-menu">
                    <div class="atl-navigation-menu__collections">
                        <va-placeholder :rounded="$root.config.placeholder.rounded"
                            :centered="$root.config.placeholder.centered" :animated="$root.config.placeholder.animated"
                            :style="{ width: width + 'px' }">
                            <va-placeholder-heading :image="$root.config.placeholder.image" />
                            <va-placeholder-text :lines="3" />
                        </va-placeholder>
                        <li>
                                <va-user-item title="Jira Service Management" description="Collaborative IT service management"
                                    avatar-image="https://flight-deck-assets-bifrost.prod-east.frontend.public.atl-paas.net/assets/image/logos/contrib/jira-service-management/icons/blue.svg">
                                </va-user-item>
                        </li>
                        <hr/>
                        <li>
                                <va-user-item title="Product Discovery" description="Prioritize, collaborative, and deliver new ideas"
                                    avatar-image="https://flight-deck-assets-bifrost.prod-east.frontend.public.atl-paas.net/assets/image/logos/contrib/jira-product-discovery/icons/blue.svg">
                                </va-user-item>
                        </li>
                    </div>
                    <div class="atl-navigation-menu__sidebar">
                        <MenuSection label="REcommended" description="Ship faster with marketplace apps that integrate your team’s tools with Jira."> </MenuSection>
                        <li>
                            <a href="#">
                                <va-user-item title="Jira Service Management" description="Collaborative IT service management"
                                    avatar-image="https://flight-deck-assets-bifrost.prod-east.frontend.public.atl-paas.net/assets/image/logos/contrib/jira-service-management/icons/blue.svg">
                                </va-user-item>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <va-user-item title="Product Discovery" description="Prioritize, collaborative, and deliver new ideas"
                                    avatar-image="https://flight-deck-assets-bifrost.prod-east.frontend.public.atl-paas.net/assets/image/logos/contrib/jira-product-discovery/icons/blue.svg">
                                </va-user-item>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <va-user-item title="Confluence" description="Create, collaborative, and organize your work"
                                    avatar-image="https://flight-deck-assets-bifrost.prod-east.frontend.public.atl-paas.net/assets/image/logos/contrib/confluence/icons/blue.svg">
                                </va-user-item>
                            </a>
                        </li>
                        <hr />
                        <li>
                            <a href="#">
                                <va-user-item title="More Atlassian Products" description=""
                                avatar-image="https://img.icons8.com/?size=512&id=Wqm6Mn3cs2BJ&format=png">
                                </va-user-item>
                            </a>
                        </li>
                    </div>
                </div>

            </va-dropdown>
        </div>
        <div slot="right">
            <!--
            <va-input :clearable="clearable" icon="bell" placeholder="Search keyword..." @blur="onBlur" @focus="onFocus" :width="searchBarWidth"
                style="margin-right:7px;"></va-input>
            -->
            <va-typeahead key="app-search" show-clean icon="github" icon-style="brands"
                placeholder="Search github username" :debounce="400" :items="gitItems" :add-format="gitCallback"
                :clearable="clearable" :limit="10" :width="searchBarWidth" @change="getGitResults" @blur="onBlur"
                @focus="onFocus">
                <template v-slot:item="slotProps">
                    <div style="display:flex;align-items:center;">
                        <img width="26px" height="26px" :src="slotProps.item.avatar_url" style="margin-right: 10px;" />
                        <span>{{ slotProps.item.login }}</span>
                    </div>
                </template>
            </va-typeahead>

            <va-button :type="buttonTheme" round @click="showSuccess">
                <va-icon type="bell" size="1.25em"></va-icon>
            </va-button>
            <va-button :type="buttonTheme" round @click="openAdminAudits">
                <va-icon type="user" size="1.25em"></va-icon>
            </va-button>
            <va-dropdown class="mega-menu-item">
                <div slot="trigger">
                    <Avatar size="small" :avatar="avatarImage" />
                </div>
                <div class="account-drop-menu">
                    <MenuSection label="Account"> </MenuSection>
                    <va-user-item title="Mariano Degracia Jr" :description="`mariano.degracia@bonfire.com`"
                        :avatar-image="avatarImage">
                        <template slot="action">
                            <va-button type="danger"><va-icon type="trash" /></va-button>
                        </template>
                    </va-user-item>
                    <MenuSection> </MenuSection>
                    <li><a href="#">Manage Account</a></li>
                    <hr />
                    <MenuSection label="TRELLO"> </MenuSection>
                    <li><a href="#">Activity</a></li>
                    <li><a href="#">Settings</a></li>
                    <hr />
                    <li><a href="#">Logout</a></li>
                </div>

            </va-dropdown>
            <va-button :type="buttonTheme" round @click="openAside">
                <va-icon type="cog" size="1.25em"></va-icon>
            </va-button>
        </div>
    </va-topbar>
</template>
<script>
import NoData from '../components/Messages/NoData.vue';
import VaUserItem from '../components/UserItem/VaUserItem.vue';
export default {
    components: {
        VaUserItem, NoData,
    },
    data() {
        return {
            width: 400,
            duration: 3000,
            clearable: true,
            accordion: true,
            sidebarVisibility: false,
            debounce: 400,
            gitItems: [],
            result: '',
            limit: 10,
            toggledSearchBar: false,
            expandSearchBar: false,
            searchHistory: [],
            type: 'default',
        }
    },
    computed: {

        buttonTheme() {
            //return 'primary-'+ this.$root.config.theme.topbar;
            return 'primary-dark';
        },
        avatarImage() {
            return 'https://i.pravatar.cc/300?u=3ccbfc51-b8ed-4ed1-9042-0ea196af683b' + Math.random();
        },

        searchBarWidth() {
            return this.expandSearchBar ? 'xl' : 'md';
        }
    },
    created() {
        let history = JSON.parse(localStorage.getItem('SearchHistory' || '{}'));
        if (!_.isEmpty(history)) {
            this.searchHistory = history;
        }
    },
    methods: {
        showSideBar() {
            this.sidebarVisibility = !this.sidebarVisibility;
            this.$root.showSideBar(this.sidebarVisibility);
        },
        openAside() {
            this.$root.showAside();
        },
        onBlur() {
            this.expandSearchBar = false;
        },
        onFocus() {
            this.expandSearchBar = true;
        },
        openAdminSettings() {
            window.open('/admin/settings', '_blank');
        },

        addHistory(item) {
            this.searchHistory.push(item);

            localStorage.setItem('SearchHistory', JSON.stringify(this.searchHistory));
        },

        openAdminAudits() {
            let self = this;
            this.$root.processing(true);
            setTimeout(function () {
                self.$root.processing(false);
                self.showSuccess();
            }, 1000);

        },
        showModal() {
            this.VaModal.confirm({
                title: 'Hello!',
                message: `This modal exists to show how methods
        can be applied to Minibar items.`,
                type: 'info'
            })
        },
        showSuccess() {
            this.notification.success({
                title: `Change default MySQL password to something other than 'root'`,
                message: `For security reasons, make sure you change the password of the MySQL
                user 'root' to something other than 'root' when you publish this application.<br/>
                <br/>
                <br/>
                <a href='#'>Instructions</a>`,
                duration: this.duration
            });
        },
        getGitResults(query) {
            let self = this
            let xhr = new XMLHttpRequest()
            xhr.open('GET', 'https://api.github.com/search/users?q=' + query)
            xhr.onload = () => {
                if (xhr.status === 200) {
                    let results = JSON.parse(xhr.responseText)
                    self.gitItems = results.items
                }
            }
            xhr.send()
        },
        gitCallback(item) {
            console.log('You selected:', item);
            this.result = item;
            this.addHistory(item);
            return item.login;
        }
    }
}
</script>

<style lang="scss" scoped>
.menu-logo {
    font-weight: 700;
    margin: 0 20px 0 10px;
}

/* Style the main menu item (e.g., "Products" or "Services") */
.mega-menu-item {
    margin-right: 10px;
    padding: 0px !important;
}

.va-dropdown-menu {
    padding: 0px !important;
}

/* Style the mega menu dropdown */
.mega-menu-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    height: 500px;
}

.mega-menu-item:hover .mega-menu-dropdown {
    display: block;
}

/* Style individual columns within the mega menu */
.mega-menu-column {
    display: inline-block;
    vertical-align: top;
    padding: 20px;
    width: 200px;
}

.mega-menu-column h3 {
    font-size: 16px;
    margin-bottom: 10px;
}

.mega-menu-column ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.mega-menu-column li {
    margin-bottom: 8px;
}

.mega-menu-column a {
    color: #666;
    text-decoration: none;
    transition: color 0.3s;
}

.mega-menu-column a:hover {
    color: #333;
}

.atl-navigation-menu {
    margin: 0 auto;
    padding-right: 0px;
    max-width: 1200px !important;
    position: relative;
    width: 100% !important;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    border-radius: 3px;
}

.atl-navigation-menu:after {
    clear: both;
    content: ' ';
    display: table
}

.atl-navigation-menu .atl-collection-icon {
    background-color: #dfe1e6;
    color: #5e6c84
}

.atl-navigation-menu__collections,
.atl-navigation-menu__sidebar {
    float: left;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 24px;
    padding-top: 24px;
    width: 100%
}

.atl-navigation-menu__collections .adg-u-truncate,
.atl-navigation-menu__sidebar .adg-u-truncate {
    white-space: nowrap;
}

.atl-navigation-menu__collections li a,
.atl-navigation-menu__sidebar li a {
    color: #172b4d;
}

@media screen and (min-width: 768px) and (max-width: 99999px) {
    .atl-navigation-menu__collections {
        width: 60%;
    }

    .atl-navigation-menu__sidebar {
        width: 40%;
    }
}

.atl-navigation-menu__collections {
    background-color: white;
}

.atl-navigation-menu__sidebar {
    background-color: #f4f5f7;
}

.atl-navigation-menu__sidebar ul {
    list-style-type: none;
    padding-left: 0;
}

.atl-navigation-menu__sidebar li {
    display: block;
}

.atl-navigation-menu__sidebar li+li {
    margin-top: 8px;
}

.atl-navigation-menu__sidebar li a {
    margin-bottom: 0;
    text-decoration: none;
}

.app-switch {
    box-sizing: border-box;
    height: 100%;
    min-width: 0px;
    flex: 1 1 0%;

    &--section {
        min-height: calc(100% - 60px);
        padding: var(1rem-200, 16px) var(0.5rem, 8px);

    }

    &--section-header {
        animation: 500ms ease 0s 1 normal forwards running;
        opacity: 0;
        margin: 0px;
        padding: 0px;
    }

    &--section-list {
        list-style-type: none;
        padding: 0px;
        margin: 0px;
    }
}

.account-drop-menu {
    min-width: 400px;
    max-width: 1200px;
    max-height: 1000px !important;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    -webkit-transform: translate3d(0, 0, 0);
    scrollbar-width: thin;
}
.no-data {
    margin-left: 10px;
    margin-right: 10px;
}
</style>
