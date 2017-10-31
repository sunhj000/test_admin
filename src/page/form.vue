<template>
    <div class="layout-content">
        <div class="layout-content-main">
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
                <FormItem label="姓名" prop="name" >
                    <Input v-model="formValidate.name" placeholder="请输入姓名" class="input-select-class"></Input>
                </FormItem>
                <FormItem label="邮箱" prop="mail">
                    <Input v-model="formValidate.mail" placeholder="请输入邮箱" class="input-select-class"></Input>
                </FormItem>
                <FormItem label="城市" prop="city">
                    <Select v-model="formValidate.city" placeholder="请选择所在地" class="input-select-class">
                        <Option value="beijing">北京市</Option>
                        <Option value="shanghai">上海市</Option>
                        <Option value="shenzhen">深圳市</Option>
                    </Select>
                </FormItem>
                <FormItem label="选择日期">
                    <Row>
                        <Col span="3">
                            <FormItem prop="date">
                                <DatePicker type="date" placeholder="选择日期" v-model="formValidate.date"></DatePicker>
                            </FormItem>
                        </Col>
                        <Col span="1" style="text-align: center">-</Col>
                        <Col span="3">
                            <FormItem prop="time">
                                <TimePicker type="time" placeholder="选择时间" v-model="formValidate.time"></TimePicker>
                            </FormItem>
                        </Col>
                    </Row>
                </FormItem>
				<FormItem label="选择日期时间">
                    <Row>
                        <Col span="3">
                            <FormItem prop="datetime">
                                <DatePicker type="datetime" placeholder="选择日期时间" v-model="formValidate.datetime"></DatePicker>
                            </FormItem>
                        </Col>
                    </Row>
                </FormItem>
                <FormItem label="性别" prop="gender">
                    <RadioGroup v-model="formValidate.gender">
                        <Radio label="male">男</Radio>
                        <Radio label="female">女</Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem label="爱好" prop="interest">
                    <CheckboxGroup v-model="formValidate.interest">
                        <Checkbox label="吃饭"></Checkbox>
                        <Checkbox label="睡觉"></Checkbox>
                        <Checkbox label="跑步"></Checkbox>
                        <Checkbox label="看电影"></Checkbox>
                    </CheckboxGroup>
                </FormItem>
                <FormItem label="介绍" prop="desc">
                    <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..." class="input-select-width-middle-class"></Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
                    <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
                </FormItem>
            </Form>
        </div>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          formValidate: {
            name: '',
            mail: '',
            city: '',
            gender: '',
            interest: [],
            date: '',
            time: '',
            datetime: '',
            desc: ''
          },
          ruleValidate: {
            name: [
              { required: true, message: '姓名不能为空', trigger: 'blur' }
            ],
            mail: [
              { required: true, message: '邮箱不能为空', trigger: 'blur' },
              { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
            ],
            city: [
              { required: true, message: '请选择城市', trigger: 'change' }
            ],
            gender: [
              { required: true, message: '请选择性别', trigger: 'change' }
            ],
            interest: [
              { required: true, type: 'array', min: 1, message: '至少选择一个爱好', trigger: 'change' },
              { type: 'array', max: 2, message: '最多选择两个爱好', trigger: 'change' }
            ],
            date: [
              { required: true, type: 'date', message: '请选择日期', trigger: 'change' }
            ],
            desc: [
              { required: true, message: '请输入个人介绍', trigger: 'blur' },
              { type: 'string', min: 20, message: '介绍不能少于20字', trigger: 'blur' }
            ]
          }
        }
      },
      methods: {
        handleSubmit (name) {
          this.$refs[name].validate((valid) => {
            if (valid) {
              this.$Message.success('提交成功!')
            } else {
              this.$Message.error('表单验证失败!')
            }
          })
          var self = this
          self.$api.post('/api/v1/post', self.formItem, function (result) {
            self.$router.push({ path: '/table' })
          })
        },
        handleReset (name) {
          this.$refs[name].resetFields()
        }
      }
    }
</script>