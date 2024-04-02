<template>
    <va-page size="lg">
        <va-loading v-if="$root.loading" size="lg" color="black" center></va-loading>
        <div class="login">
            <div class="login-container shadow-lg">
                <div class="login-logo">
                    <img src="/images/logo.png" alt="CDIS Duty">
                </div>
                <va-form ref="form" :type="type">
                    <va-loading v-if="login.loading" size="lg" color="blue" center></va-loading>
                    <va-form-item>
                        <va-alert v-if="alert.show" :type="alert.type" :title="alert.title">
                            <p>{{ alert.message }}</p>
                        </va-alert>
                    </va-form-item>

                    <va-form-item need>
                        <va-input icon="user" name="username" :placeholder="$t('label.enter_username_or_email')"
                            v-model="login.username" @keypress="login.error = ''" @keyup.enter="proceedLogin"
                            :rules="[{ type: 'required', tip: 'Username is required' }]" clearable />
                    </va-form-item>
                    <va-form-item need>
                        <va-input icon="lock" name="password" :placeholder="$t('label.enter_password')"
                            v-model="login.password" @keypress="login.error = ''" @keyup.enter="proceedLogin"
                            :rules="[{ type: 'required', tip: 'Password is required' }]" clearable />
                    </va-form-item>
                    <va-form-item>
                        <va-checkbox label="1">{{ $t('label.remember_me') }} </va-checkbox>
                    </va-form-item>
                    <va-form-item>
                        <span class="terms-policy">
                            By signing up, you agree to the Atlassian Cloud Terms of Service and acknowledge the Privacy Policy.
                        </span>
                    </va-form-item>
                    <va-form-item>
                        <va-button class="login-button" type="primary" :loading="login.loading" @click="proceedLogin"> {{ $t('label.login')
                            }}</va-button>
                    </va-form-item>

                    <va-form-item>
                        <a href="#">
                            {{ $t('label.forgot_your_password') }}
                        </a>
                    </va-form-item>
                    <div class="form-group">
                      
                    </div>
                </va-form>
            </div>
        </div>
    </va-page>

</template>

<script>

export default {
    components: {
    },
    props: {
    },
    data() {
        return {
            login: {
                username: '',
                password: '',
                remember_me: false,
                error: '',
                loading: false,
            },
            toggleEye: false,
            type: 'vertical',
            alert: {
                show: false,
                type: 'info',
                title: 'Login Information',
                message: 'Enter your valid user account credential to login.'
            },
            default: {
                alert: {},
            }
        }
    },
    created() {
        this.default.alert = Object.assign({}, this.alert);
    },
    methods: {
        proceedLogin() {
            let self = this;

            self.$refs.form.validateFields((result) => {

                if (result.isvalid) {

                    self.login.loading = true;
                    //self.$root.processing(true);
                    setTimeout(function () {

                        self.login.loading = false;
                        //self.$root.processing(false);
                        if (self.login.username != 'admin') {
                            self.alert.show = true;
                            self.alert.type = 'danger';
                            self.alert.title = 'Login Error';
                            self.alert.message = self.$t('error.credentials_do_not_match');
                            return;
                        } else {
                            self.notification.success({
                                message: `You have successfully login`,
                                duration: 3000
                            });
                            setTimeout(function () {

                                window.location.href = '/dashboard';
                            }, 1000);
                        }
                    }, 3000);

                } else {
                    self.alert = Object.assign({}, self.default.alert);
                }
            });
        },
        proceedRegister() {
            this.$refs.form.validateFields((result) => {
                console.log(result)
                console.log(this.demoForm)
            })
        },
        clearErrors() {

        }
    }
}
</script>

<style lang="scss">
@import "resources/sass/_variables.scss";

body.login {
    overflow: auto !important;
    background: url("/images/cdis-duty-bg.jpg") no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

    #app {
        justify-content: center;
    }

    .login {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .login-container {
        width: 350px;
        margin-top: 20px;
        padding: 15px;
        //background-color: $white;
        background-color: $white;
        border-radius: 10px;
    }

    .login-logo {
        display: flex;
        justify-content: center;

        img {
            width: 70px;
        }
    }

    .login-button {
        width: 100%;
    }

    .login-toggle-eye {
        cursor: pointer;
    }
    .terms-policy {
        font-size: 0.8em;
    }
}
</style>