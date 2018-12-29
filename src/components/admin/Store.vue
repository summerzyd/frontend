<template>
    <div>
        <Card>
            <Row>
                <Form ref="formSearch" :model="formSearch" :label-width="90" inline label-position="left">
                    <FormItem  label="经销商代码：" prop="code">
                    <Input v-model="formSearch.code" placeholder="Enter something..." clearable style="width: 200px" />
                    </FormItem> 
                    <FormItem label="经销商名称:" prop="store">
                        <Input v-model="formSearch.store" placeholder="Enter something..." clearable style="width: 200px" />  
                    </FormItem> 
                    <FormItem label="所属地区：">
                        <Cascader :data="three_tree_data" v-model="district_data"></Cascader>
                    </FormItem> 
                    <Button type="primary" @click="query">查询</Button>
                    <Button>重置</Button>
                </Form>
            </Row>
        </Card>
        <div class="table-content">
            <Card>
            <Row>
                <Table border stripe :columns="columns1" :data="data1"></Table>
                <div style="margin-top: 10px">
                        <Page :total="100"  @on-change="changePage"/>
                </div>         
            </Row>
        </Card>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'store',
    data () {
        return {
            formSearch: {
            },
            district_data:'',
            columns1: [
                {
                    title: '经销商代码',
                     key: 'code'
                },
                {
                        title: '经销商名称',
                        key: 'storeName'
                },
                {
                    title: '所属地区',
                    key: 'areaDetail'
                },
                {
                    title: '经销商星级',
                    key: 'storeLevel'
                },
                {
                    title: '联系方式',
                    key: 'mgPhone1'
                },
                {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Delete')
                            ]);
                        }
                    }
            ],
            data1: [],
            value1: [],
            three_tree_data: [{
                value: 'beijing',
                label: '北京',
                children: [
                    {
                        value: 'gugong',
                        label: '故宫'
                    },
                    {
                        value: 'tiantan',
                        label: '天坛'
                    },
                    {
                        value: 'wangfujing',
                        label: '王府井'
                    }
                ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }]
        }         
    },
    methods: {
        query: function() { 
            console.log("zyd")
            let token = window.localStorage.getItem('token')
            console.log("token")   
            console.log(token) 
            console.log("uuuu")
            console.log(this.formSearch)
            console.log(this.district)
            this.$http.get('/api/dw/admin/store/search', {params:this.formSearch}).then((res) => {
                console.log("00000")
                console.log(res)
                this.data1 = res.data.data.rows
            }, (response) => {
                // 响应错误回调

            });
        },
        changePage: function() {
            console.log(this.formSearch)
            this.$http.get('/api/dw/admin/store/search', {"pageSize":10, "pageNumber":2}).then((res) => {
                this.data1 = res.data.data.rows
            }, (response) => {
                // 响应错误回调

            });
        }

        
    },
    mounted(){
        this.query()
    }     
}
</script>

<style>
.table-content {
    background-color: #f5f5f5;
    margin-top: 20px;
}
</style>

