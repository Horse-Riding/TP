<?php
namespace app\admin\controller;

use app\common\controller\Index as commonIndex;

class Index
{
    public function index()
    {
        dump(config());
    }
    public function demo()
    {
        dump(config());
    }
    public function common() {
    	$common = new commonIndex;
    	return $common->index();
    }
}
  