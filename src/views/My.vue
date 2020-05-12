<template>
  <div class="my">
    <van-cell-group>
      <van-cell title="单元格" is-link />
      <van-cell title="单元格" is-link />
    </van-cell-group>
    <van-button type="info" block>主要按钮</van-button>
  </div>
</template>

<script>
import { Cell, CellGroup } from "vant";
export default {
  name: "my",
  components: {
    VanCell: Cell,
    VanCellGroup: CellGroup
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