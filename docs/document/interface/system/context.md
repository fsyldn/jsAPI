# 设置服务器地址

::: warning 提示
<!-- warning -->
context只需要调用一次，实例化有调用，这里就不需要调用了
:::

## 实例化示例

:::preview

demo-preview=../../../components/interface/system/context.vue

:::

## 使用方法

```typescript

let result = await fccInstance.connect({
  path: '/xw' // 对应服务端context
})

```
<!-- **入参说明** -->
### 入参说明

| **参数名** | **数据类型** | **选取原则** |**说明** |
| ---------- | ------------ | ------------ | ------------------ |
| path      | string       | 可选         | 连接中台服务的context，默认'/' |

### 出参说明

| **出参名称** | **数据类型** | **说明**                         |
| -------- | -------- | ------------------------------ |
| status   | number   | 调用接口返回结果的state-code，其含义参考融合通讯中台通用state-code。 |
| msg      | string   | 给开发者的文字提示信息                    |
| data     | string   | 返回的信息                          |
