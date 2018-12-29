<template>
    <div>
    <Card >
       <Row>
           <Form ref="formSearch" :model="formSearch" :label-width="72" inline label-position="left">
               <FormItem  label="员工账号：" prop="loginName">
                   <Input v-model="value14" placeholder="Enter something..." clearable style="width: 200px" />
               </FormItem> 
                <FormItem label="员工姓名:" prop="userName">
                    <Input v-model="value14" placeholder="Enter something..." clearable style="width: 200px" />  </FormItem> 
                <FormItem label="所属部门：" prop="">
                    <Select v-model="model6" style="width:200px">
                        <Option value="beijing">New York</Option>
                        <Option value="shanghai">London</Option>
                        <Option value="shenzhen">Sydney</Option>       
                    </Select>
               </FormItem> 
                <Button type="primary" @click="query">查询</Button>
                <Button>重置</Button>
           </Form>
       </Row>
    </Card>
     <Card >
       <Row>
           <Table stripe :columns="columns1" :data="data1"></Table>
           <div style="margin-top: 10px">
                <Page :total="100" />
           </div>         
       </Row>
    </Card>
    </div>
</template>
<script>
    export default {
        name: 'preson',
        data () {
            return {
                columns1: [
                    {
                        title: '员工账号',
                        key: 'loginName'
                    },
                    {
                        title: '员工姓名',
                        key: 'userName'
                    },
                    {
                        title: '所属部门',
                        key: 'orgName'
                    },
                    {
                        title: '角色',
                        key: 'roleName'
                    },
                    {
                        title: '手机号',
                        key: 'mobile'
                    },
                    {
                        title: '操作',
                        key: 'age'
                    }
                ],
                data1: []
            }
            
        },
        methods: {
            query: function() { 
                this.$http.get('/api/dw/admin/account/search?pageSize=10').then((res) => {
                    this.data1 = res.data.data.rows
                }, (response) => {
                    // 响应错误回调

                });
            },
            changePage: function() {
                    this.$http.get('/api/dw/admin/account/search', {params:{"pageSize":10, "pageNumber":2}}).then((res) => {
                    this.data1 = res.data.data.rows
                }, (response) => {
                    // 响应错误回调

                });
            }
        },
        mounted () {
            this.query();
        }
    }
</script>
