<template>
  <div class="hello">
    <van-nav-bar
      title="首页"
    />
    <div class="home-ctn">
      <van-cell title="测试文本1" :value="name"></van-cell>
      <van-cell title="测试文本2" :value="age"></van-cell>
      <van-cell title="测试文本3" :value="sd.value"></van-cell>
      <br>
      <div class="test">field测试</div>
      <van-field v-model="testObj.userName" autocomplete="off" label="测试输入" input-align="right" placeholder="请输入用户名" />
      <van-field 
          readonly
          clickable
          name="afterBusinessUnitName"
          required
          input-align="right"
          class="error"
          v-model="testObj.afterBusinessUnitName"
          label="业务单位"
          :rules="[{ required: true, message: '请选择业务单位' }]"
          placeholder="请选择"
          is-link
          @click="showBusinessUnit = true" />
    </div>
    <div>
      
    </div>

    <van-button plain type="primary" @click="changeStore">修改store状态</van-button>
    <van-button type="primary" @click="toNextPage">跳转第二页</van-button>

    <van-popup v-model:show="showBusinessUnit" position="bottom">
      <van-picker
        show-toolbar
        :defaultIndex="unitDefaultIndex"
        :columns="businessColumns"
        value-key="label"
        @confirm="businessConfirm"
        @cancel="showBusinessUnit = false"
      />
    </van-popup>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { reactive, ref, toRefs, watch, computed, onMounted } from 'vue'
import { getLoginUser } from '@/api/index'
import { useRouter } from 'vue-router'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(props) {
    console.log(props)

    const router = useRouter()
    let store = useStore();

    let text = ref(store.state.userStore.token)
    let state = reactive({
      
      name: store.state.userStore.token,
      age: 21,

      unitDefaultIndex: 1,
      businessColumns: [],
      showBusinessUnit: false,
    })
    let testObj = reactive({});

    const sd = computed(() => {
        console.log('lala')
        const aa = store.state.userStore.token
        return ref(aa)
    })
    watch(sd, (newV, oldV) => {
        console.log(newV, oldV, 'val')
    })

    onMounted(() => {
      testFun();
    })
    const testFun = async () => {

        state['businessColumns'] = [{label: '1', value: '1'},{label: '2', value: '2'}];

        const res  = await getLoginUser();
        console.log(res);

    }

    const businessConfirm = (val) => {
      testObj['afterBusinessUnitName'] = val.value
      state['showBusinessUnit'] = false
    }

    const changeStore = () => {
      const random = (Math.random()*100).toFixed(2)
        store.dispatch('setTokenActions', random)
        
    }
    const toNextPage = () => {
      console.log(state.obj)
      router.push('/page2')
    }

    return {
      toNextPage, changeStore, businessConfirm, ...toRefs(state),testObj, text, sd
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home-ctn{
  padding: 16px;
}

.test{
  font-size: 18px;
  text-align: left;
}
::v-deep .van-cell {
  padding: 0;
  .van-cell__title{
    text-align: left;
  }
}
::v-deep .van-field {
  margin: 20px 0;
  .van-field__value{
    text-align: right;
  }
}
</style>
