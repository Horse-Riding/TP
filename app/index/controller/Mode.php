<?php
    namespace app\index\controller;

	use think\Config;
	use think\Env;
	use think\Db;

	use app\index\model\User;
	class Mode
	{
		public function mode1() 
		{
			// $res = User::get(20); //通过主键值获取
			// $res = User::get(function($query){
			// 	$query->where("username","eq", 'imooc_10');
			// });

			// 可以直接使用where方法
			// $res = User::where('id', 10)
			//        ->field('id','username')
			//        ->find();

			// 获取主键等于1,2,3的记录
			// $res = User::all("1,2,3"); // 可接受字符串，数组，闭包函数
			// foreach($res as $val) {
			// 	dump($val->toArray());
			// }

			// $res = User::where("id", ">", "15")
			//        ->select();
			// foreach($res as $val) {
			// 	dump($val->toArray());
			// }
			// dump($res);

			// 获取id=10的username值
			// $res = User::where('id', 10)
			//        ->value('username');

            $res = User::column('email', 'username'); // 第二个参数为下标
			dump($res);       
		}
	}