<template>
    <va-page-header>
        <div slot="breadcrumb">
            <va-breadcrumb separator=">">
                <va-breadcrumb-item :to="{ path: '/documentation/pageheader' }">Index</va-breadcrumb-item>
                <va-breadcrumb-item :to="{ path: '/documentation/pageheader' }">Users</va-breadcrumb-item>
                <va-breadcrumb-item>nvms</va-breadcrumb-item>
            </va-breadcrumb>
        </div>

        <div slot="title">
            <span>Page title</span>
        </div>

        <div slot="subtitle">
            <span>Subtitle</span>
        </div>

        <div slot="actions">
            <va-button type="subtle">
                <va-icon type="edit" icon-style="regular" margin="0 7px 0 0"></va-icon>
                Edit
            </va-button>
            <va-button type="subtle" round>
                <va-icon type="star"></va-icon>
            </va-button>
        </div>

        <div slot="bottom">
            <va-input placeholder="Filter" width="md"></va-input>
        </div>

    </va-page-header>
</template>