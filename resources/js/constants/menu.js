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


export const BANKING = [
    {
        name: 'Banking',
        title: 'Banking',
        items: [
            {
                name: 'New Cash Entry',
                route: 'banking/new-cash-entry',
                icon: 'edit',
            },
            {
                name: 'New Transfer',
                route: 'banking/new-transfer',
                icon: 'edit',
            },
            {
                name: 'New Deposit',
                route: 'banking/new-deposit',
                icon: 'user-clock',
            },
            {
                name: 'Process Bank Records',
                route: 'banking/process-bank-records',
                icon: 'sync',
            }
        ]
    },
    {
        name: 'Transactions',
        title: 'Transactions',
        items: [
            { name: 'Cash Transactions', route: 'banking/cash-transactions'},
            { name: 'Fund Transfers', route: 'banking/fund-transfers'},
            { name: 'Bank Deposits', route: 'banking/bank-deposits'},
        ]
    },
    {
        name: 'Reports',
        title: 'Reports',
        items: [
            { name: 'Cash Account Summary', route: 'banking/reports/cash-account-summary' },
            { name: 'Cash Account Details', route: 'banking/reports/cash-account-details' },
            { name: 'Undeposited Payments', route: 'banking/reports/undeposited-payments' },
        ]
    },
    {
        name: 'Preferences',
        title: 'Preferences',
        items: [
            { name: 'Payment Methods', route: 'banking/preferences/payment-methods' },
            { name: 'Cash Management', route: 'banking/preferences/cash-management' },
            { name: 'Entry Types', route: 'banking/preferences/entry-types' },
        ]
    }

];


export const PROJECTS = [
    {
        name: 'Projects',
        title: 'Projects',
        items: [
            {
                name: 'New Project Transaction',
                route: 'projects/new-project-transaction',
                icon: 'edit',
            },
            {
                name: 'New Project',
                route: 'projects/new-project',
                icon: 'edit',
            },
            {
                name: 'New Project Task',
                route: 'projects/new-project-task',
                icon: 'user-clock',
            },
            {
                name: 'New Change Order',
                route: 'projects/new-change-order',
                icon: 'sync',
            }
        ]
    },
    {
        name: 'Transactions',
        title: 'Transactions',
        items: [
            { name: 'Cash Transactions', route: 'projects/cash-transactions'},
            { name: 'Fund Transfers', route: 'projects/fund-transfers'},
            { name: 'Bank Deposits', route: 'projects/bank-deposits'},
        ]
    },
    {
        name: 'Reports',
        title: 'Reports',
        items: [
            { name: 'Project Balance', route: 'projects/reports/project-balance' },
            { name: 'Projects', route: 'projects/reports/projects' },
            { name: 'Project Tasks', route: 'projects/reports/projects-tasks' },
            { name: 'Project Profit & Loss', route: 'projects/reports/project-profit-loss' },
        ]
    },
    {
        name: 'Preferences',
        title: 'Preferences',
        items: [
            { name: 'Account Groups', route: 'projects/preferences/account-groups' },
            { name: 'Billing Rules', route: 'projects/preferences/billing-rules' },
        ]
    }

];


export const PAYABLES = [
    {
        name: 'Payables',
        title: 'Payables',
        items: [
            {
                name: 'New Bill',
                route: 'payables/new-adjustment',
                icon: 'edit',
            },
            {
                name: 'New Payment',
                route: 'payables/new-payment',
                icon: 'edit',
            },
            {
                name: 'Vendor Details',
                route: 'payables/vendor-details',
                icon: 'user-clock',
            },
            {
                name: 'New Vendor',
                route: 'payables/new-vendor',
                icon: 'sync',
            }
        ]
    },
    {
        name: 'Transactions',
        title: 'Transactions',
        items: [
            { name: 'Bill and Adjustments', route: 'payables/bill-adjustments'},
            { name: 'Check and Payments', route: 'payables/check-payments'},
            { name: 'Quick Checks', route: 'payables/quick-checks'},
        ]
    },
    {
        name: 'Reports',
        title: 'Reports',
        items: [
            { name: 'AP Balance by Vendor', route: 'payables/reports/ap-balance-vendor' },
            { name: 'AP Aging', route: 'payables/reports/ap-aging' },
            { name: 'AP Coming Due', route: 'payables/reports/ap-coming-due' },
        ]
    },

];

export const RECEIVABLES = [
    {
        name: 'Receivables',
        title: 'Receivables',
        items: [
            {
                name: 'New Invoice',
                route: 'receivables/new-invoice',
                icon: 'edit',
            },
            {
                name: 'New Payment',
                route: 'receivables/new-payment',
                icon: 'edit',
            },
            {
                name: 'Customer Details',
                route: 'receivables/customer-details',
                icon: 'user-clock',
            },
            {
                name: 'New Customer',
                route: 'receivables/new-customer',
                icon: 'sync',
            }
        ]
    },
    {
        name: 'Transactions',
        title: 'Transactions',
        items: [
            { name: 'Invoices and Memos', route: 'receivables/invoices-memos'},
            { name: 'Payments and Applications', route: 'receivables/payment-applications'},
            { name: 'Cash Sales', route: 'receivables/cash-sales'},
        ]
    },
    {
        name: 'Reports',
        title: 'Reports',
        items: [
            { name: 'AR Balance by Customer', route: 'receivables/reports/ar-balance-vendor' },
            { name: 'AR Aging', route: 'receivables/reports/ar-aging' },
            { name: 'AR Coming Due', route: 'receivables/reports/ar-coming-due' },
        ]
    },

];

export const SALES_ORDERS = [
    {
        name: 'Sales Orders',
        title: 'Sales Orders',
        items: [
            {
                name: 'New Sales Order',
                route: 'sales-orders/new-sales-order',
                icon: 'edit',
            },
            {
                name: 'New Quote',
                route: 'sales-orders/new-quote',
                icon: 'edit',
            },
            {
                name: 'New Payment',
                route: 'sales-orders/new-payment',
                icon: 'user-clock',
            },
            {
                name: 'New Customer',
                route: 'sales-orders/new-customer',
                icon: 'sync',
            }
        ]
    },
    {
        name: 'Transactions',
        title: 'Transactions',
        items: [
            { name: 'Sales Orders', route: 'sales-orders'},
            { name: 'Invoices', route: 'sales-orders/invoices'},
            { name: 'Shipments', route: 'sales-orders/shipments'},
        ]
    },
    {
        name: 'Reports',
        title: 'Reports',
        items: [
            { name: 'Sales Order Summary', route: 'sales-orders/reports/summary' },
            { name: 'Sales Order Details by Customer', route: 'sales-orders/reports/by-customers' },
            { name: 'Sales Order Details by Inventory', route: 'sales-orders/reports/by-inventory' },
            { name: 'Shipment Summary', route: 'sales-orders/reports/shipment-summary' },
        ]
    },
    {
        name: 'Preferences',
        title: 'Preferences',
        items: [
            { name: 'Order Types', route: 'sales-orders/preferences/order-types' },
            { name: 'Carriers', route: 'sales-orders/preferences/carriers' },
        ]
    },

];

export const PURCHASES = [
    {
        name: 'Purchases',
        title: 'Purchases',
        items: [
            {
                name: 'New Purchase Order',
                route: 'purchases/new-purchase-order',
                icon: 'edit',
            },
            {
                name: 'New Purchase Receipt',
                route: 'purchases/new-purchase-receipt',
                icon: 'edit',
            },
            {
                name: 'New Purchase Request',
                route: 'purchases/new-purchase-request',
                icon: 'user-clock',
            },
            {
                name: 'New Vendor',
                route: 'purchases/new-vendor',
                icon: 'sync',
            }
        ]
    },
    {
        name: 'Transactions',
        title: 'Transactions',
        items: [
            { name: 'Requests', route: 'purchases/requests'},
            { name: 'Requisitions', route: 'purchases/requisitions'},
            { name: 'Purchase Orders', route: 'purchases/purchase-orders'},
            { name: 'Purchase Receipts', route: 'purchases/purchase-receipts'},
            { name: 'Landed Costs', route: 'purchases/landed-costs'},
        ]
    },
    {
        name: 'Reports',
        title: 'Reports',
        items: [
            { name: 'Request Details', route: 'purchases/reports/request-details' },
            { name: 'Requisition Details', route: 'purchases/reports/requisition-details' },
            { name: 'Purchase Order Summary', route: 'purchases/reports/po-order-summary' },
            { name: 'Purchase Receipt Summary', route: 'purchases/reports/pr-summary' },
        ]
    },

];

export const INVENTORY = [
    {
        name: 'Inventory',
        title: 'Inventory',
        items: [
            {
                name: 'New Adjustment',
                route: 'inventory/new-adjustment',
                icon: 'edit',
            },
            {
                name: 'New Transfer',
                route: 'inventory/new-transfer',
                icon: 'edit',
            },
            {
                name: 'New Assemby Kit',
                route: 'inventory/new-assembly-kit',
                icon: 'user-clock',
            },
            {
                name: 'New Stock Item',
                route: 'inventory/new-stock-item',
                icon: 'sync',
            }
        ]
    },
    {
        name: 'Transactions',
        title: 'Transactions',
        items: [
            { name: 'Receipts', route: 'inventory/receipts'},
            { name: 'Issues', route: 'inventory/issues'},
            { name: 'Adjustments', route: 'inventory/adjustments'},
            { name: 'Transfers', route: 'inventory/transfers'},
            { name: 'Kit Assembly', route: 'inventory/kit-assembly'},
        ]
    },
    {
        name: 'Reports',
        title: 'Reports',
        items: [
            { name: 'Inventory Balance', route: 'inventory/reports/inventory-balance' },
            { name: 'Inventory Valuation', route: 'inventory/reports/inventory-valuation' },
            { name: 'Goods in Transit', route: 'inventory/reports/goods-transit' },
        ]
    },

];

export const PAYROLLS = [
    {
        name: 'Payrolls',
        title: 'Payrolls',
        items: [
            {
                name: 'New Payroll Batch',
                route: 'payrolls/new-adjustment',
                icon: 'edit',
            },
            {
                name: 'New Paycheck',
                route: 'payrolls/new-transfer',
                icon: 'edit',
            },
        ]
    },
    {
        name: 'Transactions',
        title: 'Transactions',
        items: [
            { name: 'Payrol BAtches', route: 'payrolls/receipts'},
            { name: 'Paychecks and Adjustments', route: 'payrolls/issues'},
            { name: 'Payment Batches', route: 'payrolls/payment-batches'},
            { name: 'Transfers', route: 'payrolls/transfers'},
            { name: 'Kit Assembly', route: 'payrolls/kit-assembly'},
        ]
    },
    {
        name: 'Reports',
        title: 'Reports',
        items: [
            { name: 'Deductions and Benefits', route: 'payrolls/reports/deductions-benefits' },
            { name: 'Workers Compensations', route: 'payrolls/reports/workers-compensations' },
            { name: 'Payroll Time Details by Paycheck', route: 'payrolls/reports/payroll-time-details' },
        ]
    },

];


export const USERS = [
    {
        name: 'Users',
        title: 'Users',
        items: [
            {
                name: 'New User',
                route: '/users/detail',
                icon: 'edit',
            },
            {
                name: 'New User Permissions',
                route: '/users/permissions/add',
                icon: 'edit',
            },
        ]
    },
    {
        name: 'Transactions',
        title: 'Transactions',
        items: [
            { name: 'Users', route: '/users'},
            { name: 'User Permissions', route: '/users/permissions'},
            { name: 'User Roles', route: '/users/roles'},
        ]
    },
    {
        name: 'Reports',
        title: 'Reports',
        items: [
            { name: 'User Activities', route: '/users/reports/activities' },
        ]
    },

];