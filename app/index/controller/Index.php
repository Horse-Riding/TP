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
    public function db1() {
        // dump(config());
        // 查询id是9的数据
        // $res = Db::query('select * from db_user where id=:id',['id'=>9]);
        // 添加一条数据
        // $res = Db::execute("insert into db_user set username=?,password=?,email=?", ['imooc', md5('imooc'), 'imooc.com']);
        // 查询数据列表 返回的是一个二维数组
        // $res = Db::table('db_user')->where([
        //     'id' => '10'
        // ])->select();
        // find方法只返回一条数据 返回的结果是一个二维数组 如果结果不存在，返回null
        // $res = Db::table('db_user')->where([
        //     'id' => '10'
        // ])->find();

        // value 返回一条记录，并且是这条记录的某个字段值
        // 结果不存在，返回Nulls
        // $res = Db::table('db_user')->where([
        //     'id' => '11'
        // ])->value('username');

        // column 返回一个一维数组 数组中的value值就是要获取的列的值
        // 如果存在第二个参数，就返回这个数组并且用第二个参数的值作为Key值
        // 如果结果不存在，返回空数组
        $res = Db::table('db_user')->where([
            'id' => '11'
        ])->column('email','username');

        dump($res);
    }
}
