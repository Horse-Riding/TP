<?php

  namespace app\index\model;

  use think\Model;

  class User extends Model
  {

  	// 设置自动完成的方法
  	protected $auto = [
  		'time'
  	];
  	// 新增的时候有效
    protected $insert = [
    	'time_insert'
    ];
    // 更新时有效
    protected $update = [
    	'time_update'
    ];
  	public function getSexAttr($val) {
  		switch($val) {
  			case '1':
  				return "男";
  				break;
  			case '2':
  				return "女";
  				break;
  			default:
  				return "未知";
  				break;		
  		}
  	}
  	public function setPasswordAttr($val, $data) {
  		return md5($val);
  	}
  	// 当前时间戳
  	public function setTimeAttr($val) {
  		return time();
  	}
  	// 插入数据时的时间戳
  	public function setTimeInsertAttr() {
  		return time();
  	}
  	// 更新时获取的时间戳
  	public function setTimeUpdateAttr() {
  		return time();
  	}
  }