<template>
  <div class="member-list">
     <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
        <Checkbox
            :value="checkAll"
            @click.prevent.native="handleCheckAll">全选</Checkbox>
    </div>
    <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
        <Checkbox v-for="item in GroupData" :key="item.id" :label="item.id">{{item.name}}</Checkbox>
    </CheckboxGroup>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        checkAll: false,
        checkAllGroup: [],
        GroupData: [
            {
              id: 1,
              name: '苹果'
            },
            {
              id: 2,
              name: '香蕉'
            },
            {
              id: 3,
              name: '梨'
            },
            {
              id: 4,
              name: '西瓜'
            }
        ]
      };
    },
    created() {
    },
    computed: {
    },
    methods: {
      handleCheckAll () {
          console.log(this.checkAll);
          if (!this.checkAll) {
              this.checkAllGroup = [1, 2, 3, 4];
              this.checkAll = true;
          } else {
              this.checkAllGroup = [];
              this.checkAll = false;
          }
      },
      checkAllGroupChange (data) {
          console.log(data);
          if (data.length === 4) {
              this.checkAll = true;
          } else if (data.length > 0) {
              this.checkAll = false;
          } else {
              this.checkAll = false;
          }
      }
    },
    components: {
    },
    destroyed() {
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  
</style>
