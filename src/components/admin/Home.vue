<template>
    <div>
        <card style="height: 170px; padding-top: 16px;">
            <!-- <Row> -->
                <Col span="3">
                    <img src="../../../src/assets/img/headPortrait.png"></Col>
                <Col span="9">
                 <div class="hello-con" style="width:200px">
                    <h1 class="hello">{{timeTip}}，{{userName}}</h1>
                    <p><span>{{roleName!=null?roleName:"售后客服"}}</span>{{orgName!=null?orgName:"售后客服部"}}</p>
                </div>
                </Col>
                <Col span="12">
                    <ul class="order-item">
                        <li >
                            <div>
                                <img src="../../../src/assets/img/dcl.png" alt="">
                                    待处理工单
                            </div>
                            <h1>30</h1>
                        </li>
                           <li>
                            <div>
                                <img src="../../../src/assets/img/dcl.png" alt="">
                                    待处理工单
                            </div>
                            <h1>30</h1>
                        </li>
                           <li>
                            <div>
                                <img src="../../../src/assets/img/dcl.png" alt="">
                                    待处理工单
                            </div>
                            <h1>30</h1>
                        </li>
                    </ul>
                </Col>
            <!-- </Row> -->
        </card>
        <card>
            <row>
                <div style="width: 76%; float: left; border: 1px solid #ccc">
                    7777777
                </div>
                <div style="float: left; border: 1px solid #ccc">
                    9999
                </div>
            </row>
            <row>
            </row>
        </card>
    </div>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {
            "a":"",
             // 当前用户
            userName: '小A',
            //角色
            roleName:"XXXX部门",
            //部门
            orgName:"xxxx",
            // 用户id
            userId:"",
            // 时间问候语
            timeTip:"上午好"
        }
    }
}
</script>

<style scoped>
 .order-item {
     margin-right: 100px;
 }
 .order-item li{
     list-style: none;
     float: right;
     margin-left: 20px;
 }
</style>
