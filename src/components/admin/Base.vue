<template>
    <div class="layout">
        <Layout :style="{minHeight: '100vh'}">
            <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed" style="width: 220px; min-width: 200px; max-width: 220px; flex: 0 0 220px;">
                <div class="menu_icon_a">
                    <router-link to="/home">
                        <img src="../../../src/assets/img/logob.png" style="width:40px; height:30px; vertical-align: middle;"> 
                        <span>客服工单系统</span>
                    </router-link>
                </div>
                <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
                    <MenuItem name="1-1">
                        <router-link to="/person">
                            <Icon type="ios-contacts-outline" />
                            <span>
                            人员管理
                            </span>
                        </router-link>
                    </MenuItem>
                    <MenuItem name="1-2">
                        <router-link to="/store">
                            <Icon type="md-body"></Icon>
                            <span>
                                经销商管理
                            </span>
                        </router-link>
                    </MenuItem>
                    <MenuItem name="1-3">
                        <Icon type="ios-paper-outline" />
                        <span> 
                            <router-link to="/vtable">工单管理</router-link>
                        </span>
                    </MenuItem>
                </Menu>
            </Sider>
            <Layout>
               <Header :style="{padding: 0}" class="layout-header-bar">
                    <div style="margin: 0 6px; width:100px"> 
                        <Icon @click.native="collapsedSider" :class="rotateIcon" style="margin-left:10px" type="md-menu" size="24"></Icon>
                    </div>
                </Header>
                <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
                   <router-view></router-view>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    export default {
        data () {
            name : "Base"
            return {
                isCollapsed: false
            };
        },
        computed: {
            rotateIcon () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
         methods: {
            collapsedSider () {
                this.$refs.side1.toggleCollapse();
            }
        }
    }
</script>
<style scoped>
    .layout-con{
        height: 100%;
        width: 100%;
    }
     .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .menu-icon{
        transition: all .3s;
    }
    .menu_icon_a {
        height: 100px;
        padding: 24px 24px;
        left: 70px;
        line-height: 44px;
        color: rgba(255, 255, 255, 1);
        font-size: 20px;
        text-align: center;
        font-family: HiraginoSansGB-W6;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
    .menu-item span{
        width: 80px;
    }
    .ivu-menu-item {
        padding: 26px 83px 20px 8px;
    }
    a {
        color: #fff;
    }
    .ivu-layout-header {
        height: 54px;
        line-height: 54px;
    }
    .ivu-shrinkable-menu {
    background: #1f2e54!important;
    }
    .ivu-layout-sider {
        background-color: rgba(31, 46, 84, 1);
    }
    .ivu-menu-item-active {
        background-color: rgba(24, 36, 69, 1);
    }
</style>
