<template>
  <div class="hello">
    <van-button plain type="primary" @click="changeStore">朴素按钮</van-button>
    <van-button disabled type="primary">禁用状态</van-button>
    <van-cell title="albb" :value="name"></van-cell>
    <van-cell title="tx" :value="age"></van-cell>
    <van-cell title="jd" :value="text"></van-cell>
    <van-cell title="aa" :value="sd.value"></van-cell>
    <van-nav-bar
      title="标题"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { reactive, ref, toRefs, watch, computed } from 'vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(props) {
    console.log(props)
    let store = useStore();
    let text = ref(store.state.userStore.token)
    let state = reactive({
      name: store.state.userStore.token,
      age: 21
    })
    const onClickLeft = () => history.back();
    const changeStore = () => {
        store.dispatch('setTokenActions', 'change-store')
    }

    const sd = computed(() => {
        console.log('lala')
        const aa = store.state.userStore.token
        return ref(aa)
    })
    watch(sd, (newV, oldV) => {
        console.log(newV, oldV, 'val')
    })
    return {
      onClickLeft, changeStore, ...toRefs(state), text, sd
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
