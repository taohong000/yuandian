<template>
  <div class="message">
    <van-panel title="标题" desc="描述信息" status="状态">
  <div>内容</div>
  <template #footer>
    <van-button size="small">按钮</van-button>
    <van-button size="small" type="danger">按钮</van-button>
  </template>
</van-panel>
  </div>
</template>
<script>

import { Panel  } from "vant";
export default {
  name: "message",
  components: {
    VanPanel : Panel
  }
};
</script>
<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>