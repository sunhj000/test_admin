<template>
	<div class="layout-content">
        <div class="layout-content-main">
            <Form :model="queryItem" >
                <div class="content-div">
                    <Row style="margin-bottom:5px;">
                        <Col span="6" class="table-form-input-select-col">
                            <Input v-model="queryItem.name" placeholder="姓名" ></Input>
                        </Col>
                        <Col span="6" class="table-form-input-select-col">
                            <Input v-model="queryItem.email" placeholder="邮箱" ></Input>
                        </Col>
                        <Col span="6" class="table-form-input-select-col">
                            <Select v-model="queryItem.address" placeholder="省份">
                                <Option value="beijing">北京市</Option>
                                <Option value="shanghai">上海市</Option>
                                <Option value="shenzhen">深圳市</Option>
                            </Select>
                        </Col>
                        <Col span="6" class="table-form-input-select-col">
                            <Input v-model="queryItem.mobile" placeholder="手机号" ></Input>
                        </Col>
                    </Row>
                    <Row style="margin-bottom:5px;">
                        <Col span="6" class="table-form-input-select-col">
                            <Input v-model="queryItem.userId" placeholder="用户id" ></Input>
                        </Col>
                        <Col span="6" class="table-form-input-select-col" order="4" >
                            <Button type="primary" shape="circle" icon="ios-search" size="large" @click="getData">查询</Button>
                        </Col>
                    </Row>
                </div>
            </Form>
            <hr class="hr1" />
            <div class="content-div">
                <Table  border :columns="columns2" :data="data"></Table>
            </div>
            <div class="content-div" align="center">
                <Page @on-change="getData()" :total="pageData.total" :current="pageData.current" :page-size="pageData.pageSize" style="padding:5px 5px 2px 5px;" show-elevator></Page>
            </div>
            <div>
                <Modal v-model="showDataModalFlag" title="查看详情">
                    <p class="content-table-modal-show-p">姓名: {{showDataModalObject.name}}</p>
                    <p class="content-table-modal-show-p">年龄: {{showDataModalObject.age}}</p>
                    <p class="content-table-modal-show-p">省份: {{showDataModalObject.province}}</p>
                    <p class="content-table-modal-show-p">市区: {{showDataModalObject.city}}</p>
                    <p class="content-table-modal-show-p">地址: {{showDataModalObject.address}}</p>
                    <p class="content-table-modal-show-p">邮编: {{showDataModalObject.zip}}</p>
                </Modal>
                <Modal v-model="editDataModalFlag" title="编辑详情" @on-ok="doEditData">
                    <Form :model="editDataModalObject" :label-width="100" >
                        <FormItem label="姓名">
                            <Input v-model="editDataModalObject.name" placeholder="请输入" class="input-select-class"></Input>
                        </FormItem>
                        <FormItem label="年龄">
                            <Input v-model="editDataModalObject.age" placeholder="请输入" class="input-select-class"></Input>
                        </FormItem>
                        <FormItem label="省份">
                            <Select v-model="editDataModalObject.province" placeholder="请选择" class="input-select-class">
                                <Option value="北京市">北京市</Option>
                                <Option value="上海市">上海市</Option>
                                <Option value="广东">广东</Option>
                            </Select>
                        </FormItem>
                        <FormItem label="市区">
                            <Input v-model="editDataModalObject.city" placeholder="请输入" class="input-select-class"></Input>
                        </FormItem>
                        <FormItem label="地址">
                            <Input v-model="editDataModalObject.address" placeholder="请输入" class="input-select-class"></Input>
                        </FormItem>
                        <FormItem label="邮编">
                            <Input v-model="editDataModalObject.zip" placeholder="请输入" class="input-select-class"></Input>
                        </FormItem>
                    </Form>
                </Modal>
            </div>
		</div>
	</div>
</template>
<script>
  export default {
    data () {
      return {
        showDataModalFlag: false,
        showDataModalObject: {},
        editDataModalFlag: false,
        editDataModalObject: {},
        queryItem: {
          name: '',
          email: '',
          address: '',
          mobile: '',
          userId: ''
        },
        columns2: [
          {
            title: '姓名',
            key: 'name',
            width: 100
          },
          {
            title: '年龄',
            key: 'age',
            width: 100
          },
          {
            title: '省份',
            key: 'province',
            width: 100
          },
          {
            title: '市区',
            key: 'city',
            width: 100
          },
          {
            title: '地址',
            key: 'address'
          },
          {
            title: '邮编',
            key: 'zip',
            width: 100
          },
          {
            title: '操作',
            key: 'action',
            width: 200,
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'info',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.showData(params.index)
                    }
                  }
                }, '查看'),
                h('Button', {
                  props: {
                    type: 'info',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.editData(params.index)
                    }
                  }
                }, '编辑'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.removeData(params.index)
                    }
                  }
                }, '删除')
              ])
            }
          }
        ],
        data: [
        ],
        pageData: {
          current: 1,
          total: 0,
          pageSize: 10
        }
      }
    },
    created () {
      this.getData()
    },
    methods: {
      getData () {
        var self = this
        self.$api.get('/api/v1/table_data', null, function (result) {
          self.data = result.resultData.dataList
          self.pageData = result.resultData.pageData
        })
      },
      showData (index) {
        var self = this
        self.showDataModalFlag = true
        self.showDataModalObject = self.data[index]
      },
      editData (index) {
        var self = this
        self.editDataModalFlag = true
        self.editDataModalObject = self.data[index]
      },
      doEditData () {
        var self = this
        self.$api.post('/api/v1/edit', self.editDataModalObject, function (result) {
          self.$Message.info(result.message)
        })
      },
      removeData (index) {
        var self = this
        self.$api.post('/api/v1/edit', self.data[index], function (result) {
          self.data.splice(index, 1)
          self.$Message.info(result.message)
        })
      }
    }
  }
</script>