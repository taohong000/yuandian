<template>
  <div class="home">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <van-grid>
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
    </van-grid>
    <div class="body">
      <van-row type="flex" justify="space-between">
      <van-col span="11">span: 6</van-col>
      <van-col span="11">span: 6</van-col>
    </van-row>
        <div class="subject" v-for="item in subjectList" :key="item.id">
      <div class="title">{{item.title}}</div>
      <img :src="item.thumbnailUrl" alt="item.title">
    </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import { Swipe, SwipeItem, Grid, GridItem } from "vant";
export default {
  name: "Home",
  components: {
    VanSwipe: Swipe,
    VanSwipeItem: SwipeItem,
    VanGrid: Grid,
    VanGridItem: GridItem
  },
  data() {
    return {
      subjectList: []
    }
  },
  async mounted() {
    let aaa = await this.$request.get('photos')
    this.subjectList = aaa.slice(0, 5)
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