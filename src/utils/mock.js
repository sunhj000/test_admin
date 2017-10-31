import Mock from 'mockjs'

Mock.mock('http://sunhaojie.com.test/api/v1/post', 'post', {
  'status': 200,
  'errorCode': 'SUCCESS',
  'message': '操作成功',
  'timestamp': '2017-10-17 12:12:12',
  'path': '/api/v1/post',
  'method': null,
  'requestId': null,
  'resultData': null,
  'subErrors': null
})

Mock.mock('http://sunhaojie.com.test/api/v1/table_data', 'get', {
  'status': 200,
  'errorCode': 'SUCCESS',
  'message': '操作成功',
  'timestamp': '2017-10-17 12:12:12',
  'path': '/api/post',
  'method': null,
  'requestId': null,
  'resultData': {
    'pageData': {
      current: 2,
      total: 100,
      pageSize: 10
    },
    'dataList':
    [
      {
        name: '王小明',
        age: 18,
        address: '北京市朝阳区芍药居',
        province: '北京市',
        city: '朝阳区',
        zip: 100000
      },
      {
        name: '张小刚',
        age: 25,
        address: '北京市海淀区西二旗',
        province: '北京市',
        city: '海淀区',
        zip: 100000
      },
      {
        name: '李小红',
        age: 30,
        address: '上海市浦东新区世纪大道',
        province: '上海市',
        city: '浦东新区',
        zip: 100000
      },
      {
        name: '周小伟',
        age: 26,
        address: '深圳市南山区深南大道',
        province: '广东',
        city: '南山区',
        zip: 100000
      },
      {
        name: '王小明',
        age: 18,
        address: '北京市朝阳区芍药居',
        province: '北京市',
        city: '朝阳区',
        zip: 100000
      },
      {
        name: '张小刚',
        age: 25,
        address: '北京市海淀区西二旗',
        province: '北京市',
        city: '海淀区',
        zip: 100000
      },
      {
        name: '李小红',
        age: 30,
        address: '上海市浦东新区世纪大道',
        province: '上海市',
        city: '浦东新区',
        zip: 100000
      },
      {
        name: '周小伟',
        age: 26,
        address: '深圳市南山区深南大道',
        province: '广东',
        city: '南山区',
        zip: 100000
      }
    ]
  },
  'subErrors': null
})
Mock.mock('http://dami.ksyun.com.test/api/v1/edit', 'post', {
  'status': 200,
  'errorCode': 'SUCCESS',
  'message': '操作成功',
  'timestamp': '2017-10-17 12:12:12',
  'path': '/api/post',
  'method': null,
  'requestId': null,
  'resultData': null,
  'subErrors': null
})
Mock.mock('http://dami.ksyun.com.test/api/v1/delete', 'post', {
  'status': 200,
  'errorCode': 'SUCCESS',
  'message': '操作成功',
  'timestamp': '2017-10-17 12:12:12',
  'path': '/api/post',
  'method': null,
  'requestId': null,
  'resultData': null,
  'subErrors': null
})