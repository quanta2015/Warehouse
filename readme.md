### JpwareHouse
https://antoniolago.github.io/react-gauge-component/

```bash
const json = {
  table:'表名',
  define: [{
      dataIndex: '字段名',
      type: '字段类型',
      title: '字段显示名称',
      key: true,  
      enum: ['枚举数组1','枚举数组2'],
    },
    ...
  ],
  sub: {
    table: '子表名',
    ref: '外键字段名称',
    define: [{
        dataIndex: '字段名',
        type: '字段类型',
        title: '字段显示名称',
        key: true, //是否关键字
      },
      ...
    ]
  }
}



# 字段类型
json: 动态表结构
string: 字符串
double: 浮点数
select: 枚举对象
auto_user: 用户名
auto_date: 当前时间

# key表示是否关键字
```