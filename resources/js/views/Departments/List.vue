<template>
    <va-page size="lg">
        <va-loading v-if="$root.loading" size="lg" color="black" center>
        </va-loading>
        <transition-group>
            <va-page-header key="app-header">

                <div slot="breadcrumb">
                    <va-breadcrumb separator="»">
                        <va-breadcrumb-item :to="{ path: '/home' }">Home</va-breadcrumb-item>
                        <va-breadcrumb-item>Departments</va-breadcrumb-item>
                    </va-breadcrumb>
                </div>
                <div slot="subtitle">
                    <span class="page-subtitle">Departments</span>
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
                    <va-button type="subtle" round>
                        <va-icon type="star"></va-icon>
                    </va-button>
                </div>

            </va-page-header>
            <div class="module-container" key="app-container">
                <VueBootstrap4Table 
                    :rows="rows" 
                    :columns="columns" 
                    :config="config" 
                    :actions="actions"
                    :total-rows="total_rows"
                    :show-loader="fetching"
                    key="app-table"
                    >
                    <template slot="column_email" slot-scope="props">
                        <va-icon type="envelope"></va-icon> {{ props.column.label }}
                    </template>
                    <template slot="empty-results">
                       <NoData></NoData>
                    </template>
                    <template slot="email" slot-scope="props">                     
                        <va-button icon-before="at" size="sm" class="fluid"> {{props.cell_value}}</va-button>
                    </template>
                    <template slot="first_name" slot-scope="props">
                        {{props.cell_value}}    
                                        
                    </template>
                    <template slot="status" slot-scope="props">
                        <va-lozenge :class="props.cell_value == true ? 'success' : 'danger'" size="lg" class="fluid" bold>{{props.cell_value}}</va-lozenge>
                    </template>
                    <template slot="avatar" slot-scope="props">
                        <Avatar  size="small" :avatar="getAvatar(props.cell_value)"> </Avatar>
                                
                    </template>
                </VueBootstrap4Table>
            </div>
        </transition-group>
    </va-page>
</template>

<script>
import PersonIcon from '../../components/AtlasKit/components/Icon/PersonIcon';
import NoData from '../../components/Messages/NoData.vue';
import { VueBootstrap4Table } from '../../components/VueBootstrap4Table';
import * as users from '../../constants/users';
export default {
    components: {
        VueBootstrap4Table,
        NoData,
        PersonIcon,
    },
    data() {
        return {
            rows: [],
            total_rows: 0,
            columns: [
                {
                    name: 'id',
                    label: 'ID',
                    sort: true,
                    uniqueId: true,
                    filter: {
                        type: "simple",
                        placeholder: "Filter ID"
                    }
                },
                {
                    name: 'first_name',
                    label: 'Firstname',
                    sort: true,
                    filter: {
                        type: "simple",
                        placeholder: "Enter firstname",
                        case_sensitive: true
                    },
                },
                {
                    name: 'last_name',
                    label: 'Lastname',
                    sort: true,
                    filter: {
                        type: "simple",
                        placeholder: "Enter lastname"
                    }
                },
                {
                    name: 'email',
                    label: 'Email',
                    filter: {
                        type: "simple",
                        placeholder: "Enter email"
                    },
                    sort: true,
                    row_text_alignment: "text-right",
                    column_text_alignment: "text-right",
                },
                {
                    name: 'gender',
                    label: 'Gender',
                    sort: true,
                    filter: {
                        type: "select",
                        mode: "multi",
                        closeDropdownOnSelection: true,
                        placeholder: "Select options",
                        options: [
                            {
                                "name": "Male",
                                "value": "Male"
                            },
                            {
                                "name": "Female",
                                "value": "Female"
                            },
                        ],
                        select_all_checkbox: {
                            visibility: true,
                            text: "Select All"
                        },
                    }
                },
                {
                    name: 'country',
                    label: 'Country',
                    sort: true,
                    filter: {
                        type: "simple",
                        placeholder: "Enter country"
                    }
                },
                {
                    name: 'status',
                    label: 'Status',
                    sort: true,
                    filter: {
                        type: "select",
                        placeholder: "Select status",
                        options: [
                            {
                                "name": "True",
                                "value": "true"
                            },
                            {
                                "name": "False",
                                "value": "false"
                            },
                        ],
                    }
                },
                {
                    name: 'address',
                    label: 'Address',
                    sort: true,
                    filter: {
                        type: "simple",
                        placeholder: "Enter address"
                    }
                },
                {
                    name: 'date_created',
                    label: 'Date Created',
                    sort: true,
                    filter: {
                        type: "simple",
                        placeholder: "Enter gender"
                    }
                },
                {
                    name: 'last_accessed',
                    label: 'Last Accessed',
                    sort: true,
                    filter: {
                        type: "date",
                        placeholder: "Select Date",
                        format: 'M/dd/yyyy',
                        autoclose: true,
                        readonly: false,
                    }
                },
                {
                    name: 'coordinate',
                    label: 'Coordinate',
                    sort: true,
                    row_text_alignment: "float-right",
                    column_text_alignment: "text-right",
                    filter: {
                        type: "simple",
                        placeholder: "Enter coordinate"
                    }
                },
                {
                    name: 'avatar',
                    label: 'Avatar',
                },
            ],
            config: {
                multi_column_sort: true, // default false
                global_search: {
                    placeholder: "Enter search keyword...",
                    visibility: true,
                    case_sensitive: false,
                    showClearButton: false,
                    searchOnPressEnter: false,
                    searchDebounceRate: 1000,
                },
                pagination: true, // default true
                pagination_info: true, // default true
                num_of_visibile_pagination_buttons: 7, // default 5
                per_page: 15,
                per_page_options: [5, 10, 15, 25, 50, 100],
                selected_rows_info: true,

                checkbox_rows: true,
                selected_rows_info: true,
            },
            actions: [
                {
                    btn_text: "Download",
                    event_name: "on-download",
                    class: "float-right",
                    type: 'primary',
                    event_payload: {
                        msg: "my custom msg"
                    }
                },
                {
                    btn_text: "Excel",
                    event_name: "on-download",
                    type: 'success',
                    event_payload: {
                        msg: "my custom msg"
                    }
                }
            ],
            fetching: false,
            friends: [],
            avatars: [...Array(10).keys()]
        }
    },
    mounted() {
        // this.rows = users.USERS;
        // this.total_rows = this.rows.length;
        this.paginate();
    },
    methods: {
        paginate() {
            let self = this;
            self.fetching = true;
            setTimeout(function () {
                self.fetching = false;
                self.rows = users.USERS;
                self.total_rows = self.rows.length;
                self.setFilterOptions();
            }, 5000);
        },
        getAvatar(url) {
            return url+'u='+ Math.random();
        },
        setFilterOptions() {
            const genders = [...new Set(this.rows.map(item => item.gender))];
            if (!! genders) {
                let options = [];
                genders.forEach(function(value) {
                    options.push({
                        name: value,
                        value: value
                    });
                });
               const foundIndex = this.columns.findIndex(x => x.name === 'gender');
               if (foundIndex) {
                    this.columns[foundIndex].filter.options = options;
               }
            }
            const filteredFriends = [...new Set(this.rows.map(item => item.first_name))];
            if (!! filteredFriends) {
                let foptions = [];
                let index = 0 ;
                filteredFriends.forEach(function(value) {
                   
                    if (index  < 7) {
                        foptions.push({
                            displayName: value,
                            avatar: 'https://i.pravatar.cc/300?u='+ Math.random()
                        });
                    }
                    index++;

                });
                this.friends = foptions;
            }
        },

    },
    watch: {

    }
}
</script>

<style lang="scss" scoped>
@import "resources/sass/_variables.scss";

.fluid {
    width: 100%;
}
.slot-avatar {
       border-radius: 50%;
       width: 40px;
       height: 40px;
       border: 2px solid white;
       display: flex;
       align-items: center;
       justify-content: center;
       background: #172B4D;
       margin-right: -8px;
       color: white;
   }
</style>