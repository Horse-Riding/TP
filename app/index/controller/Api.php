<?php
namespace app\index\controller;
class Api {
    public function index(){
        $nonce = $_GET['nonce'];
        $token = 'weixin';
        $timestamp=$_GET['timestamp'];
        $echostr = $_GET['echostr'];
        $signature = $_GET['signature'];
        $array = array($nonce,$timestamp,$token);
        sort($array);

        $str = sha1(implode($array));
        if($str == $signature && $echostr){
            //第一次接入weixin api 接口的时候
            echo $echostr;
            exit;
        }else{
            $this->reponseMsg();
        }
    }
    public function  show(){
        echo 'imooc';
    }
}