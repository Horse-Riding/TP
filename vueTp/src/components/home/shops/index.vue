<template>
  <div class="member-list">
    <div class="l50" style="border-right:1px solid #ddd;padding:20px" >
      <h4>
         商品列表 
        <div style="float:right">
          <Button @click="model.addShop = true" type="primary">添加</Button>
        </div>     
      </h4>
      <div class="content">
        <br>
        <Table stripe :columns="userHeader" :data="userList"></Table>
      </div>
    </div>
    <!-- 添加商品 -->
    <Modal
          v-model="model.addShop"
          title="添加商品"
          @on-ok="addShop()"
          @on-cancel="model.addShop = false">
          <Form :model="shop" label-position="right" :label-width="80">
              <FormItem label="商品名称:">
                  <Input v-model="shop.shopname"></Input>
              </FormItem>
              <FormItem label="商品描述:">
                  <Input v-model="shop.shopdesc"></Input>
              </FormItem>
              <div>
                <label style="width:69px;text-align:right;display:inline-block;">商品图片:</label>
                <div class="uploadImgShop" style="padding-left:80px;margin-top:-20px;margin-bottom:10px">
                  <div class="demo-upload-list" v-for="(item, index) in shop.uploadList" :key="index" >
                      <template v-if="item.status === 'finished'">
                          <img :src="item.url">
                          <div class="demo-upload-list-cover">
                              <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
                              <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
                          </div>
                      </template>
                      <template v-else>
                          <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
                      </template>
                  </div>
                  <Upload
                      action="http://web.thinkphp.com/index.php/index/Fileupload/upload"
                      ref="upload"
                      :on-success="handleSuccess"
                      style="display: inline-block;width:58px;"
                      :before-upload="handleBeforeUpload"
                      type="drag"
                      :show-upload-list="false"
                      enctype='multipart/form-data'>
                      <div style="width: 58px;height:58px;line-height: 58px;">
                          <Icon type="ios-camera" size="20"></Icon>
                      </div>
                  </Upload>
                </div>
              </div>
              <FormItem label="价格:">
                  <Input v-model="shop.price"></Input>
              </FormItem>
              <FormItem label="重量:">
                  <Input v-model="shop.weight"></Input>
              </FormItem>
          </Form>
    </Modal>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        userHeader: [
          {
              type: 'selection',
              width: 60,
              align: 'center'
          },
          {
              title: '商品名称',
              key: 'shopname'
          },
          {
              title: '描述',
              key: 'shopdesc'
          },
          {
              title: '商品图片',
              key: 'shopimg',
              render: (h, params) => {
                console.log(params.row);
                return h('div', [
                    h('img', {
                        style: {
                            width: '30px',
                            verticalAlign: 'middle'
                        },
                        attrs: {
                            src: params[0]
                        }
                    })
                ]);
              }
          },
          {
              title: '商品价格（元）',
              key: 'price'
          },
          {
              title: '商品重量(g)',
              key: 'weight'
          }
        ],
        userList: [],
        model: {
          addShop: false
        },
        shop: {
          shopname: '',
          shopdesc: '',
          uploadList: '',
          price: 0.00,
          weight: 0
        },
        file: {
          name: ''
        },
        loadingStatus: false,
        imgName: '',
        visible: false
      };
    },
    created() {
      this.getshoplist();
    },
    computed: {
    },
    methods: {
      handleView (name) {
          this.imgName = name;
          this.visible = true;
      },
      handleSuccess (res, file) {
          // console.log(res);
          file.url = res.imgurl;
          file.name = res.imgname;
      },
      handleRemove (file) {
          const fileList = this.$refs.upload.fileList;
          this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
      },
      handleBeforeUpload () {
          const check = this.shop.uploadList.length < 5;
          if (!check) {
              this.$Notice.warning({
                  title: '最多上传5个图片！'
              });
          }
          return check;
      },
      // 上传商品图片
      upload () {
          this.loadingStatus = true;
          this.$http.apost(this.$apis.fileUpload).then((data) => {
              this.file = null;
              this.loadingStatus = false;
              this.$Message.success('Success');
          });
      },
      // 获取商品列表
      getshoplist() {
        this.$http.apost(this.$apis.shoplist).then((data) => {
          if (data.state === 1) {
            this.userList = data.data;
          } else {
            this.$Message.error(data.message);
          }
        });
      },
      // 添加商品
      addShop() {
        console.log(this.shop);
        this.$http.apost(this.$apis.addshop, this.shop).then((data) => {
          console.log(data);
        });
      }
    },
    components: {
    },
    mounted () {
        this.shop.uploadList = this.$refs.upload.fileList;
    },
    destroyed() {
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  .demo-upload-list{
        display: inline-block;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
    }
    .demo-upload-list img{
        width: 100%;
        height: 100%;
    }
    .demo-upload-list-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    .demo-upload-list:hover .demo-upload-list-cover{
        display: block;
    }
    .demo-upload-list-cover i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
</style>
