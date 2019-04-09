<template>
  <section>
    <section class="register-header">
      <div class="logo"></div>
    </section>
    <section class="register-body">
      <section class="register-wrap">
        <h1>新用户注册</h1>
        <section class="form-list">
          <Form ref="userInfo"  :model="userInfo" :rules="ruleUserInfo" :label-width="120">
            <Row :gutter="16">
              <Col span="6">
                <div class="item">
                  <FormItem label="姓名：" prop="name">
                    <Input v-model="userInfo.name" placeholder="请输入姓名"></Input>
                  </FormItem>
                </div>
              </Col>
              <Col span="6">
              <div class="item">
                <FormItem label="性别：" prop="sex">
                  <Select v-model="userInfo.sex" placeholder="性别">
                    <Option value="nan">男</Option>
                    <Option value="nv">女</Option>
                  </Select>
                </FormItem>
              </div>
              </Col>
              <Col span="6">
              <div class="item">
                <FormItem label="所在岗位：" prop="jobs">
                  <Input v-model="userInfo.jobs" placeholder="请输入岗位"></Input>
                </FormItem>
              </div>
              </Col>
              <Col span="6">
              <div class="item">
                <FormItem label="招聘来源：" prop="sourcesOfRecruitment">
                  <Input v-model="userInfo.sourcesOfRecruitment" placeholder="请输入招聘来源"></Input>
                </FormItem>
              </div>
              </Col>
              <Col span="6">
              <div class="item">
                <FormItem label="业务名：" prop="businessName">
                  <Input v-model="userInfo.businessName" placeholder="请输入业务名"></Input>
                </FormItem>
              </div>
              </Col>
              <Col span="6">
              <div class="item">
                <FormItem label="出生年月：" prop="birthDate">
                  <Input v-model="userInfo.birthDate" placeholder="请输入出生年月"></Input>
                </FormItem>
              </div>
              </Col>
              <Col span="6">
              <div class="item">
                <FormItem label="入职时间：" prop="entryTime">
                  <Input v-model="userInfo.entryTime" placeholder="请输入入职时间"></Input>
                </FormItem>
              </div>
              </Col>
              <Col span="6">
              <div class="item">
                <FormItem label="推荐人：" prop="referrer">
                  <Input v-model="userInfo.referrer" placeholder="请输入推荐人"></Input>
                </FormItem>
              </div>
              </Col>
              <Col span="6">
              <div class="item">
                <FormItem label="绑定手机号：" prop="bindPhoneNumber">
                  <Input v-model="userInfo.bindPhoneNumber" placeholder="请输入绑定手机号"></Input>
                </FormItem>
              </div>
              </Col>
              <Col span="6">
              <div class="item">
                <FormItem label="微信：" prop="weixin">
                  <Input v-model="userInfo.weixin" placeholder="请输入微信"></Input>
                </FormItem>
              </div>
              </Col>
              <Col span="6">
              <div class="item">
                <FormItem label="所属大区：" prop="region">
                  <Input v-model="userInfo.region" placeholder="请输入所属大区"></Input>
                </FormItem>
              </div>
              </Col>
              <Col span="6">
              <div class="item">
                <FormItem label="所属部门：" prop="department">
                  <Input v-model="userInfo.department" placeholder="请输入所属部门"></Input>
                </FormItem>
              </div>
              </Col>
              <Col span="6">
              <div class="item">
                <FormItem label="座机：" prop="landline">
                  <Input v-model="userInfo.landline" placeholder="请输入座机"></Input>
                </FormItem>
              </div>
              </Col>
              <Col span="6">
              <div class="item">
                <FormItem label="传真：" prop="faxNumber">
                  <Input v-model="userInfo.faxNumber" placeholder="请输入传真"></Input>
                </FormItem>
              </div>
              </Col>
              <!--<Col span="6">-->
              <!--<div class="item">-->
                <!--<FormItem label="进入方式" prop="name">-->
                  <!--<Select v-model="userInfo.sex" placeholder="请选择进入方式">-->
                    <!--<Option value="nan">竞拍</Option>-->
                    <!--<Option value="nv">介绍</Option>-->
                  <!--</Select>-->
                <!--</FormItem>-->
              <!--</div>-->
              <!--</Col>-->
              <Col span="6">
              <div class="item">
                <FormItem label="进部门时间：" prop="entryDepartmentTime">
                  <DatePicker type="date" placeholder="Select date" v-model="userInfo.entryDepartmentTime"></DatePicker>
                </FormItem>
              </div>
              </Col>
              <Col span="6">
              <div class="item">
                <FormItem label="分机号：" prop="extensionNumber">
                  <Input v-model="userInfo.extensionNumber" placeholder="请输入分机号"></Input>
                </FormItem>
              </div>
              </Col>
              <!--<Col span="6">-->
              <!--<div class="item">-->
                <!--<FormItem label="竞拍业绩" prop="name">-->
                  <!--<Input v-model="userInfo.name" placeholder="请输入竞拍业绩"></Input>-->
                <!--</FormItem>-->
              <!--</div>-->
              <!--</Col>-->
              <!--<Col span="6">-->
              <!--<div class="item">-->
                <!--<FormItem label="业绩时间" prop="name">-->
                  <!--<Input v-model="userInfo.name" placeholder="请输入业绩时间"></Input>-->
                <!--</FormItem>-->
              <!--</div>-->
              <!--</Col>-->
            </Row>
            <section style="width:50%;padding-right:6px">
              <FormItem label="现住址：" prop="presentAddress">
                <Input v-model="userInfo.presentAddress" placeholder="请输入现住址"></Input>
              </FormItem>
              <FormItem label="开通代理账号：" prop="startAgentAccount">
                <Input v-model="userInfo.startAgentAccount" placeholder="发送到手机"></Input>
              </FormItem>
              <FormItem label="开通企业邮箱：" prop="startEnterpriseEmail">
                <Input v-model="userInfo.startEnterpriseEmail" placeholder="发送到手机"></Input>
              </FormItem>
              <FormItem label="开通企业QQ：" prop="startBQQ">
                <Input v-model="userInfo.startBQQ" placeholder="发送到手机"></Input>
              </FormItem>
            </section>
            <FormItem>
              <Button type="primary" @click="handleSubmit('userInfo')">提交</Button>
              <Button type="ghost" @click="handleReset('userInfo')" style="margin-left: 8px">重置</Button>
              <Button type="ghost" @click="handleFindPassword()" style="margin-left: 8px">找回密码</Button>
              <Button type="ghost" @click="handleLogin()" style="margin-left: 8px">返回登陆</Button>
            </FormItem>
          </Form>
        </section>
      </section>
    </section>
    <section class="register-footer">
      <div class="company-name">中国招标采购导航网</div>
    </section>
  </section>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'register',
    data() {
      return {
        userInfo: {
          name: '',
          sex: '',
          // 岗位
          jobs: '',
          // 招聘来源
          sourcesOfRecruitment: '',
          // 业务名
          businessName: '',
          // 出生年月
          birthDate: '',
          // 入职时间
          entryTime: '',
          // 推荐人
          referrer: '',
          // 绑定手机号
          bindPhoneNumber: '',
          // 微信
          weixin: '',
          // 所属大区
          region: '',
          // 所属部门
          department: '',
          // 座机
          landline: '',
          // 传真
          faxNumber: '',
          // 入部门时间
          entryDepartmentTime: '',
          // 分机号
          extensionNumber: '',
          // 现住址
          presentAddress: '',
          // 开通代理账号
          startAgentAccount: '',
          // 开通企业邮箱
          startEnterpriseEmail: '',
          // 开通企业qq
          startBQQ: ''
        },
        ruleUserInfo: {
          name: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          sex: [
            { required: true, type: 'array', min: 1, message: '不能为空', trigger: 'change' }
          ],
          jobs: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          sourcesOfRecruitment: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          businessName: [
            { required: false, message: '不能为空', trigger: 'blur' }
          ],
          birthDate: [
            { required: true, type: 'date', message: '请输入日期', trigger: 'change' }
          ],
          entryTime: [
            { required: true, type: 'date', message: '请输入日期', trigger: 'change' }
          ],
          referrer: [
            { required: false, message: '不能为空', trigger: 'blur' }
          ],
          bindPhoneNumber: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          weixin: [
            { required: false, message: '不能为空', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          department: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          landline: [
            { required: false, message: '不能为空', trigger: 'blur' }
          ],
          faxNumber: [
            { required: false, message: '不能为空', trigger: 'blur' }
          ],
          entryDepartmentTime: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          extensionNumber: [
            { required: false, message: '不能为空', trigger: 'blur' }
          ],
          presentAddress: [
            { required: false, message: '不能为空', trigger: 'blur' }
          ],
          startAgentAccount: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          startEnterpriseEmail: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          startBQQ: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
          } else {
            this.$Message.error('Fail!');
          }
        });
      },
      handleReset (name) {
        this.$refs[name].resetFields();
      },
      handleFindPassword() {
        // alert('找回密码');
        this.$router.push({
          path: '/findPassword'
        });
      },
      handleLogin() {
        // alert('找回密码');
        this.$router.push({
          path: '/login'
        });
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .register-header
      width:100%
      position:absolute
      left:0
      top:0
      background:#fff
      height:60px
      border-bottom:1px solid #dddee1
      .logo
        width:235px
        height:35px
        margin:13px 30px
        background:url(logo.png) left top no-repeat;
    .register-body
      width:100%
      position:absolute
      left:0
      bottom:60px
      top:61px
      overflow:hidden
      .register-wrap
        width:1200px
        position:absolute
        overflow-y:auto
        left: 50%
        top:20px
        bottom:20px
        min-height:500px
        margin-left:-600px
        background: #ffffff
        border-radius:3px
        box-shadow :0 3px 5px rgba(0,0,0,0.2)
        h1
          width:100%
          height:80px
          line-height:80px
          text-align:center
          font-size:22px
          color:#333
          border-bottom:1px solid #dddee1
          margin-bottom:30px
        .form-list
          padding:0 30px
    .register-footer
      position:absolute
      bottom:0px
      left:0
      right:0
      height:60px
      background:#1c2438
      .company-name
        height:60px
        line-height:60px
        float:right
        margin-right:40px
        color:#e1e1e1
</style>
