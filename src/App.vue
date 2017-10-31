<template>
    <div class="layout">
        <Row type="flex">
            <Col span="5" class="layout-menu-left">
                <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']" @on-select="openView">
                    <div class="layout-logo-left"></div>
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            示例
                        </template>
                        <MenuItem name="form">
                            form表单示例
                        </MenuItem>
                        <MenuItem name="table">
                            table表格示例
                        </MenuItem>
                        <MenuItem name="1-3">选项 3</MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-keypad"></Icon>
                            导航二
                        </template>
                        <MenuItem name="2-1">选项 1</MenuItem>
                        <MenuItem name="2-2">选项 2</MenuItem>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-analytics"></Icon>
                            导航三
                        </template>
                        <MenuItem name="3-1">选项 1</MenuItem>
                        <MenuItem name="3-2">选项 2</MenuItem>
                    </Submenu>
                </Menu>
            </Col>
            <Col span="19">
                <div class="layout-header"></div>
                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <BreadcrumbItem href="#">首页</BreadcrumbItem>
                        <BreadcrumbItem href="#">应用中心</BreadcrumbItem>
                        <BreadcrumbItem>某应用</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div class="layout-content">
                    <div class="layout-content-main">
                        <router-view/>
                    </div>
                </div>
                <div class="layout-copy">
                    2011-2016 &copy; TalkingData
                </div>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        data () {
            return {
            }
        },
        methods: {
            openView (name) {
                this.$router.push(name)
            }
        }
    }
</script>
<style lang="scss">
  @import "./style/style";
</style>
