<?php
namespace app\index\controller;

use think\Config;
use think\Env;
use think\Db;
class Index
{
    public function index()
    {
        // dump(config('database'));
        // 数据库的连接
        $res = Db::connect();
        dump($res);
    }
    public function index1()
    {
        $conf1 = [
        	'username' => 'wuyunlong'
        ];
        $conf2 = [

        ];
    }
    public function index2() 
    {
        $res = Config::get();
        dump($res);
    }
    public function index3() 
    {
        $res = Config::get('app_namespace');
        // $res = config('app_namespace');
        dump($res);
    }
    public function index4() 
    {
        dump($_ENV);
    }
    public function index5() 
    {
        $res = Env::get('email');
        dump($res);
    }
    public function info($id) 
    {
        return "${id}";
    }
    public function demo() 
    {

    }
    
}
