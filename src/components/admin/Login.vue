<template>
    <div class="login">
        <div class="login-form">
            <p>
                <img src="../../../src/assets/img/logo.png" class="login-form-img"/>
                客服工单管理系统
            </p>
            <div class="login-form-content">
                <Form :model="formItem" :label-width="55">
                    <FormItem prop="username">
                        <Input v-model="formItem.username" placeholder="Enter something..."style="width: 450px;" size="40" >
                            <Icon type="md-person" slot="prepend" class="login-icon" size="26"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem prop="password">
                        <Input v-model="formItem.password" placeholder="请输入密码..."style="width: 450px;" size="40">
                            <Icon type="md-lock" slot="prepend" size="22"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem>
                        <div style="float:left"> <Radio v-model="single">自动登录</Radio></div>
                        
                    <!-- </FormItem>
                    <FormItem> -->
                        <Button type="primary" style="width:450px;background-color:#81a7d9;" @click="login">登录</Button>
                    </FormItem>      
                </Form>
            </div>
        </div>
        
    </div>
           
                 <!-- <Form :model="formItem" :label-width="80">
                    <FormItem prop="username">
                        <Input v-model="formItem.username" placeholder="Enter something..."style="width: 200px" >
                            <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem prop="password">
                        <Input v-model="formItem.password" placeholder="请输入密码..."style="width: 200px" >
                            <Icon type="ios-lock-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <Button type="primary" @click="login">登录</Button>
                </Form>
             </div> -->
</template>


<script>
export default {
    name : 'login',
    data() {
        return {
            formItem: {
                username: '',
                password:''
            },
        }
    },
    methods: {
        login : function(){
            console.log("ppp")
            console.log(this.formItem)
            let jse = new JSEncrypt();
			//设置公钥
			jse.setPublicKey(`MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDEcuYcgxNBYX/R1ZKbCK7zE77R1iS8F0m6TaMd
GAevx0tHH+B9aQfk4jL7/epFb7LpG1FiDgbH7P9CobxKwcf3owYWkyinhoYayzfuaH9eitappHwE
5BTuIF2i5y7G0efH+UIKU+L/Yt34goft/l+gp9/vgsBtOjKt+Y52D4LMqQIDAQAB`)
            var encrypted = jse.encrypt(this.formItem.password)
            console.log(encrypted)
            this.$http.post('/api/dw/auth/jwt/token', {
                      username: this.formItem.username,
                      password: encrypted,
                    }).then((result) => {
                var res = result.data
                console.log(res)
                if(res.status == 200) {
                    const token = res.data
                    console.log(token)
                    window.localStorage.setItem('token', token)
                    window.location.pathname ='/home'
                } else {
                   var msg = res.message
                   alert(msg)
                }   
            }, (response) => {
                // 响应错误回调
                console.log(response)
            });
        }
    }
}
</script>

<style scoped>
    .login{
        background-image: url('../../../src/assets/img/login_bg.jpg');
        position: relative; 
        height: 100%;
        width: 100%;
        background-size: cover;
        background-position: 50%;
        min-height: 1000px;
        background-size: cover;
        overflow-y:hidden;
    }
    .login-form {
        position: absolute;
        width: 560px; 
        height: 350px;
        left: 680px;
        border-radius: 4px;
        background-color: rgba(217, 229, 244, 1);
        box-shadow: 0px 0px 20px 8px rgba(98, 128, 172, 0.7);
        border: 1px solid rgba(170, 201, 225, 1);
        top:50%;
        left:50%;
        margin-left:-280px;
        margin-top:-200px;
        text-align: center;
        padding-top: 28px;
    }
    .login-form-img{
        width: 46px;
        height: 33px;
        padding-left: 10px;
    }
    .ivu-input{
        height: 40px;
    }
    .login-input{
        height: 40px;
    }
    .login-form .login-form-content {
        height: 40px;
    }
    .ivu-input-wrapper-40{
        height: 40px;
    }
    .ivu-input-group {
        height: 40px;
    }
</style>
