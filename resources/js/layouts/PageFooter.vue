<template>
    <div class="footer-panel">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-12" align="right">
                    &copy; 2023 Biipee Web powered by <a href="https://bonfiretechsol.com/" class="media-link" target="_blank">Bonfire Technologies and Solutions Corp.</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "resources/sass/_variables.scss";

    .footer-panel {
        background-color: #fff;
        border-top: 1px $line-color solid;
        padding: 10px;
        .media-link {
            color: $accent;
        }
    }
</style>