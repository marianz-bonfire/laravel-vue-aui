export let DASHBOARD = [
    {
        name: 'Dashboard',
        title: 'Dashboard',
        items: [
            { name: 'Installation', element: '#installation' },
            { name: 'Quickstart', element: '#quickstart' },
            {
                name: 'GitHub',
                external: 'https://github.com/nvms/vue-atlas',
                icon: 'github-alt',
                iconStyle: 'brands'
            }
        ]
    }
];

export const TIME_AND_EXPENSES = [
    {
        name: 'Time and Expenses',
        title: 'Time and Expenses',
        items: [
            {
                name: 'New Email Activity',
                route: 'time-expenses/new-email-activity',
                icon: 'envelope',
            },
            {
                name: 'New Expense Receipt',
                route: 'time-expenses/new-expense-receipt',
                icon: 'edit',
            },
            {
                name: 'Employee Time Card',
                route: 'time-expenses/employee-timecard',
                icon: 'user-clock',
            }
        ]
    },
    {
        name: 'Tasks',
        title: 'Tasks',
        items: [
            { name: 'Task', route: 'time-expenses/task' },
            { name: 'Approvals', route: 'time-expenses/task/approvals' },
            { name: 'Events', route: 'time-expenses/task/events' },
        ]
    },
    {
        name: 'Reports',
        title: 'Reports',
        items: [
            { name: 'Expense Claim Details', route: 'time-expenses/reports/employee-claim-details' },
            { name: 'Expense Claim Details by Employee', route: 'time-expenses/reports/employee-claim-details-by-employee' },
            { name: 'Expense Claim Details by Department', route: 'time-expenses/reports/employee-claim-details-by-department' },
        ]
    }

];

export const FINANCE = [
    {
        name: 'Finance',
        title: 'Finance',
        items: [
            {
                name: 'New Journal Entry',
                route: 'finance/new-journal-entry',
                icon: 'edit',
            },
            {
                name: 'Account Summary',
                route: 'finance/account-summary',
                icon: 'edit',
            },
            {
                name: 'Account Details',
                route: 'finance/account-details',
                icon: 'user-clock',
            },
            {
                name: 'Reclassify Journal Entries',
                route: 'finance/reclassify-journals',
                icon: 'sync',
            }
        ]
    },
    {
        name: 'Transactions',
        title: 'Transactions',
        items: [
            { name: 'Journal Transactions', route: 'finance/journal-transactions'},
            { name: 'Journal Vouchers', route: 'finance/journal-vouchers'},
            { name: 'Trial Balance', route: 'finance/trial-balance'},
        ]
    },
    {
        name: 'Reports',
        title: 'Reports',
        items: [
            { name: 'Trial Balance Summary', route: 'finance/reports/trial-balance-summary' },
            { name: 'Trial Balance Detailed', route: 'finance/reports/trial-balance-detailed' },
        ]
    }

];