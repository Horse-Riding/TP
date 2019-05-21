<?php

  use think\Env;

  return [
  	"app_debug" => true,
    "app_email" => "17771258@qq.com",
    "app_status" => Env::get('status', 'dev'),
    // 自动绑定模块
    // "auto_bind_module" => true, 

    
    // 开启路由
    'url_route_on' => true,
    'url_route_must' => false
  ];