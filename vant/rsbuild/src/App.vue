<template>
  <div class="goods">
    <Swipe class="goods-swipe" :autoplay="3000">
      <SwipeItem v-for="thumb in goods.thumb" :key="thumb">
        <img :src="thumb" />
      </SwipeItem>
    </Swipe>

    <CellGroup>
      <Cell>
        <template #title>
          <div class="goods-title">{{ goods.title }}</div>
          <div class="goods-price">{{ formatPrice(goods.price) }}</div>
        </template>
      </Cell>
      <Cell class="goods-express">
        <template #title>
          <Col span="10">运费：{{ goods.express }}</Col>
          <Col span="14">剩余：{{ goods.remain }}</Col>
        </template>
      </Cell>
    </CellGroup>

    <CellGroup class="goods-CellGroup">
      <Cell value="进入店铺" icon="shop-o" is-link @click="sorry">
        <template #title>
          <span class="cell-text">有赞的店</span>
          <Tag class="goods-tag" type="danger">官方</Tag>
        </template>
      </Cell>
      <Cell title="线下门店" icon="location-o" is-link @click="sorry" />
    </CellGroup>

    <CellGroup class="goods-cell-group">
      <Cell title="查看商品详情" is-link @click="sorry" />
    </CellGroup>

    <ActionBar>
      <ActionBarIcon icon="chat-o" @click="sorry">客服</ActionBarIcon>
      <ActionBarIcon icon="cart-o" @click="onClickCart">购物车</ActionBarIcon>
      <ActionBarButton type="warning" @click="sorry">
        加入购物车
      </ActionBarButton>
      <ActionBarButton type="danger" @click="sorry">立即购买</ActionBarButton>
    </ActionBar>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { showToast } from "vant";
import {
  Col,
  Tag,
  Cell,
  CellGroup,
  Swipe,
  SwipeItem,
  ActionBar,
  ActionBarIcon,
  ActionBarButton,
} from "vant";

const goods = ref({
  title: "美国伽力果213（约680g/3个）",
  price: 2680,
  express: "免运费",
  remain: 19,
  thumb: [
    "https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg",
    "https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg",
  ],
});

const formatPrice = (price: number) => {
  return "¥" + (price / 100).toFixed(2);
};

const onClickCart = () => {
  // replace this with your actual router logic
};

const sorry = () => {
  showToast("暂无后续逻辑~");
};
</script>

<style lang="less">
body {
  font-size: 16px;
  background-color: #f8f8f8;
  -webkit-font-smoothing: antialiased;
}

.goods {
  padding-bottom: 50px;

  &-swipe {
    img {
      width: 100%;
      display: block;
    }
  }

  &-title {
    font-size: 16px;
  }

  &-price {
    color: #f44;
  }

  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }

  &-cell-group {
    margin: 15px 0;
  }

  &-tag {
    margin-left: 5px;
  }
}
</style>
