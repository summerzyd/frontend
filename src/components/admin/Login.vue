<template>
    <div>
        <Form :model="formItem" :label-width="80">
            <FormItem prop="username">
                <Input v-model="formItem.username" placeholder="Enter something..."style="width: 200px" ></Input>
            </FormItem>
            <FormItem prop="password">
                <Input v-model="formItem.password" placeholder="请输入密码..."style="width: 200px" ></Input>
            </FormItem>
            <Button type="primary" @click="login">登录</Button>
        </Form>
    </div>
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

<style>

</style>
