# lottery I
- 抽奖样式为滚动抽奖
# 端口8089
# router
# 注意事项
- 通过router.java进行方法转发到页面，正常的数据交互方法还是返回Result
- 采用一个页面一个文件夹的方式，绑定同级目录的同名.js
- 奇奇怪怪的入参放在怕params.req，奇奇怪怪的入参放在params.vo
- 单表增删改查都有封装好的方法，mapper.insert/select/update/delete就行，除非条件非常奇葩，可以直接调用
- 手机端适配已删除
# pc端地址
- newLottery 创建新抽奖
- lottery?lotteryId=? 根据id访问抽奖
- newLottery?lotteryId 根据id修改抽奖
# 手机端地址
- lotteryPE?lotteryId=? 根据id访问抽奖
