<template>
    <div>
        <v-table
            is-horizontal-resize
            style="width:100%"
            :columns="columns"
            :table-data="tableData"
            row-hover-color="#eee"
            row-click-color="#edf7ff"
            :cell-edit-done="cellEditDone"
    ></v-table>
    </div>
     
</template>

<script>
export default {
    name: 'vtable',
    data() {
        return {
            tableData: [
                {"name":"赵伟","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼"},
                {"name":"李伟","tel":"182*****1538","hobby":"钢琴、书法、唱歌","address":"上海市奉贤区南桥镇立新路12号2楼"},
                {"name":"孙伟","tel":"161*****0097","hobby":"钢琴、书法、唱歌","address":"上海市崇明县城桥镇八一路739号"},
                {"name":"周伟","tel":"197*****1123","hobby":"钢琴、书法、唱歌","address":"上海市青浦区青浦镇章浜路24号"},
                {"name":"吴伟","tel":"183*****6678","hobby":"钢琴、书法、唱歌","address":"上海市松江区乐都西路867-871号"}
            ],
            columns:  [
                 {field: 'name', title:'姓名', width: 80, titleAlign: 'center',columnAlign:'center',isEdit:true,
                              formatter: function (rowData,rowIndex,pagingIndex,field) {

                                   return `<span class='cell-edit-color'>${rowData[field]}</span>`;
                               },isResize:true},
                             {field: 'tel', title: '手机号码', width: 150, titleAlign: 'center',columnAlign:'center',isEdit:true,isResize:true},
                             {field: 'hobby', title: '爱好', width: 150, titleAlign: 'center',columnAlign:'center',isEdit:true,isResize:true},
                             {field: 'address', title: '地址', width: 280, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true}
            ]
            
        }
    },
        methods:{

            // 单元格编辑回调
            cellEditDone(newValue,oldValue,rowIndex,rowData,field){

                this.tableData[rowIndex][field] = newValue;

                // 接下来处理你的业务逻辑，数据持久化等...
            }
        }
}
</script>

<style>

</style>
