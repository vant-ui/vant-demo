<template>
  <div>
    <img class="user-poster" src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png">
    <van-row class="user-links">
      <van-col span="6">
        <van-icon name="pending-payment" />
        待付款
      </van-col>
      <van-col span="6">
        <van-icon name="pending-orders" />
        待接单
      </van-col>
      <van-col span="6">
        <van-icon name="pending-deliver" />
        待发货
      </van-col>
      <van-col span="6">
        <van-icon name="logistics" />
        待发货
      </van-col>
    </van-row>

    <van-cell-group class="user-group">
      <van-cell icon="records" title="全部订单" isLink />
    </van-cell-group>

    <van-cell-group>
      <van-cell icon="exchange" title="我的积分" isLink />
      <van-cell icon="gold-coin" title="我的优惠券" isLink />
      <van-cell icon="gift" title="我收到的礼物" isLink />
    </van-cell-group>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="less">
.user {
  &-poster {
    width: 7.5rem;
    height: 4rem;
    display: block;
  }

  &-group {
    margin-bottom: .3rem;
  }

  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;

    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
</style>
