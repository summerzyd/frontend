<template>
    <div>
         <Row >
            <Col span="24" class="top-btn-list">
            <Button type="primary" class="searchbutton" @click="addlist">
                新建
            </Button>
            </Col>
        </Row>
        <Row>
            <Col>
                <Table border  :columns="columns2" :data="data3"></Table>
            </Col>
            
        </Row>      
    </div>
</template>

<script>
export default {
    name: 'tabledit',
    data() {
        return {
            columns2: [
                {
                    title: 'Name', 
                    key: 'name',
                     render: (h, params) => {
                        if(params.row.isEdit) {
                            return h('input', {
                                domProps: {
                                  value: params.row.name
                                },
                                on: {
                                  input: function (event) {
                                    params.row.name = event.target.value
                                  }
                                }
                              });
                        } else {
                            return h('div', params.row.name)
                        }
                    }
                
                },
                {
                    title: 'Age',
                    key: 'age',
                    render: (h, params) => {
                        if(params.row.isEdit) {
                            return h('input', {
                                domProps: {
                                  value: params.row.age
                                },
                                on: {
                                  input: function (event) {
                                    params.row.age = event.target.value
                                  }
                                }
                              });
                        } else {
                            return h('div', params.row.age)
                        }
                    }
                },
                {
                    title: 'Aciton',
                    key: 'action',
                    render: (h, params) => {
                        return h('Button', {
                            props: {
                                type: 'text',
                                size: 'small'
                            },
                            on: {
                            
                                click: ()=> {
                                    console.log(this.data3);
                                    if (params.row.isEdit) {
                                        this.handleSave(params.row)
                                    }else {
                                        for (var i = 0; i < this.data3.length; i++) {
                                            if (this.data3[i].isEdit == true) {
                                                this.$Message.destroy()
                                                this.$Message.warning("请先保存或取消");
                                                return;
                                            }
                                        }
                                        this.handleEdit(params.row)
                                    }
                                }
                            }
                        }, params.row.isEdit ? '保存' : '编辑')
                    }
                }
            ],
            data3: [
                {
                    name: '哈哈',
                    age: 18,
                    address: '上海',
                    isEdit: false
                },
                {
                    name: '啦啦',
                    age: 24,
                    address: '北京',
                    isEdit: false
                }
            ]
        }
    },
    methods: {
        handleEdit (row) {
            console.log("66666")
            // this.$set(row, 'isEdit', true) 
              var a = row._index
             this.data3[a].isEdit = true
            console.log(row._index)   
            console.log(this.data3)             
        }, 
        handleSave (row) {
            console.log("88888")
            // this.$set(row, 'isEdit', false)
            var a = row._index
            this.data3[a].isEdit = false
            console.log(row) 
            console.log(this.data3)       
        },
        addlist() {
            for (var i = 0; i < this.data3.length; i++) {
                if (this.data3[i].isEdit == true) {
                    this.$Message.destroy()
                    this.$Message.warning("请先保存或取消");
                    return;
                }
            }
            var obj = {
                name: '',
                age: '',
                address: '北京',
                isEdit: true
            }
            this.data3.unshift(obj)
        }
    }
}
</script>

<style>
 
</style>
