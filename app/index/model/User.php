<?php

  namespace app\index\model;

  use think\Model;
  // 引入软删除类库
  use traits\model\SoftDelete;

  class User extends Model
  {
      use SoftDelete;
      // 开启自动时间戳
      protected $autoWriteTimestamp = true;

      // 如果时间戳的字段名起了别名，需要在这里进行设置
      // protected $createTime = 'create_at';
      // protected $updateTime = 'update_at';
  }