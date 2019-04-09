<?php
namespace app\index\controller;
use \think\Request;
class User
{
    // 登陆
    public function login() {
      if (Request::instance()->isPost()) {
        $id = json_decode(file_get_contents("php://input"), true);
        $user = db('userlist')->where(['userName' => $id['username']])-> find();

        if(!$user) {
          $user = [];
        }
        
        if ($user['password'] === $id['password']) {
          return json(['result' => 'ok', 'message' => '登陆成功', 'data' => $user] );
        } else {
          return json(['result' => 'err', 'message' => '登陆失败，请检查账号和密码', 'data' => []]);
        }
      }
    }

    //获取用户详情
    public function detail()
    {
        
        if (Request::instance()->isPost()) {
          $id = json_decode(file_get_contents("php://input"), true);
          $user = db('userlist')->where(['userId' => $id['userId']])-> find();

          if(!$user) {
            $user = [];
          }
          return json(['result' => 'ok', 'data' => $user]);
        }
    }

    public function editMember()
    {
        //修改用户
        if (Request::instance()->isPost()) {
          $user = json_decode(file_get_contents("php://input"), true);
          db('userlist')->where(['userId'=>$user['userId']])->update(['userName'=>$user['userName'],
                                                                    'name'=>$user['name'],
                                                                    'work'=>$user['work'],
                                                                    'sex'=>$user['sex'],
                                                                    'phone'=> $user['phone']
                                                                  ]);
          return(json(['result'=>'ok','message'=>'修改成功']));
        }
    }

    public function delMember()
    {
        //删除用户
        if (Request::instance()->isPost()) {
          $id = json_decode(file_get_contents("php://input"), true);
          db('userlist')->where(['userId'=>$id['userId']])->delete();
          return json(['result'=>'ok', 'message'=>'删除成功']);
        }
    }

    public function lists() 
    {
      // 获取用户列表   
      if (Request::instance()->isGet()) {
        $users = db('userlist')->where([])->select();
        return(json(['result' => 'ok', 'data' => $users]));
      } 

      // 添加用户
      if (Request::instance()->isPost()) {
        $user = json_decode(file_get_contents("php://input"), true);
        $data['userName'] = $user['username'];
        $data['name'] = $user['name'];
        $data['work'] = $user['work'];
        $data['sex'] = $user['sex'];
        $data['phone'] = $user['phone'];

        $id = db('userlist') -> insertGetId($data);
        $ret = [];
        $ret['userId'] = $id;
        
        if ($id) {
          return (json(['result' => 'ok', 'message' => '添加成功']));
        } else {
          return (json(['result' => 'error', 'message' => '添加失败']));
        }
      }    
    }
    
}