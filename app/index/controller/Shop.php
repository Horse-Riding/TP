<?php
namespace app\index\controller;
use \think\Request;
class Shop
{
    public function shoplist()
    {
        // 获取用户列表   
      if (Request::instance()->isPost()) {
        $shops = db('shops')->where([])->select();
        // var_dump($shops);
        // $shops['shopimg'] = json_decode($shops['shopimg']);
        if($shops) {
            return(json(['state' => 1, 'data' => $shops]));
        } else {
            return(json(['state' => 0, 'message' => '获取失败']));
        }
        
      } 
    }
    public function shopdetail()
    {
        return '1111';
    }
    public function addshop()
    {
      // 添加商品
      if (Request::instance()->isPost()) {
        $shop = json_decode(file_get_contents("php://input"), true);
        
        $data['shopname'] = $shop['shopname'];
        $data['shopdesc'] = $shop['shopdesc'];
        $data['shopimg'] = $shop['uploadList'];
        $data['price'] = $shop['price'];
        $data['weight'] = $shop['weight'];

        $id = db('shops') -> insertGetId($data);
        // return json(['data' => $id]);
        // $ret['shopid'] = $id;

        if ($id) {
          return (json(['result' => 'ok', 'message' => '添加成功']));
        } else {
          return (json(['result' => 'error', 'message' => '添加失败']));
        }
      }    
    }
    public function updateshop() 
    {
    	return '3333';
    }
    public function delshops() 
    {
      $users = db('account')->select();
      return json($users);        
    }
}