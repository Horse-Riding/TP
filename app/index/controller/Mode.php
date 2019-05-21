<?php
    namespace app\index\controller;

	use think\Config;
	use think\Env;
	use think\Db;

	use app\index\model\User;
	class Mode
	{
		// 模型查询
		public function modeQuery() 
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
		// 模型添加
		public function modeAdd() 
		{
			// create方法
			// $res = User::create([
			// 	'username' => 'imooc',
			// 	'password' => md5('imooc'),
			// 	'email' => 'imooc@qq.com',
			// 	'num' => 100,
			// 	'demo' => 'token'
			// ], true); //排除不用的字段，比如token字段避免报错或者写第二个参数为数组['username','password'] 仅仅插入username和password 字段  
			// dump($res->id); //2

			// save方法

		    // $userModel = new User;
		    // 方法一
		    // $userModel->username = '12221244@qq.com';
		    // $userModel->email = '1771241@qq.com';
		    // $userModel->save();
		    // dump($userModel->id);

		    // 方法二
		    // $res = $userModel-> save([
		    // 	'username' => 'imooc1',
		    // 	'email' => 'dfasd@qq.com',
		    // 	'password' => md5('aadsafsd')
		    // ]);
		    // // 过滤不存在字段添加->allowField(true)
		    // dump($res); // 返回int(1)

		    // saveAll 添加多条数据
		    $userModel = new User;
		    $res = $userModel->saveAll([
		    	['email'=> '12123123@qq.com'],
		    	['email'=> '22123123@qq.com']
		    ]);
		    foreach($res as $val) {
		    	dump($val->id);
		    }
		}
		// 模型修改
		public function modeUpdata() 
		{
			// 初始化数据
			// $data = [];
			// for($i=1;$i<21;$i++) {
			// 	$data[] = [
			// 		'username' => "imooc_{$i}",
			// 		'email' => "imooc_{$i}@qq.com",
			// 		'num' => $i + 100
			// 	];
			// }
			// $userModel = new User;
			// $res = $userModel->saveAll($data);
			// foreach($res as $val) {
			 //    	dump($val->id);
			 //    }

			// updata方法  --注：无法判断是否被更新了
			// $res = User::update([
			// 	'id' => 1,
			// 	'username' => '17771258'
			// ]);
			// dump($res);
			// updata方法  --注：无法判断是否被更新了
			// $res = User::update([
			// 	'username' => '17771258'
			// ],['id'=>5]); //第二个参数还可以是一个闭包函数
			// dump($res);
			// $res = User::where("id","<", 6)
			// 		-> update([
			// 			'username' => '97771259'
			// 		]); //第二个参数还可以是一个闭包函数

			// dump($res); //返回5

			// $userModel = User::get(1);
			// $userModel->username = '123';
			// $res = $userModel->save();
			// dump($res); // 返回值是1

            // save
			// $userModel = new User;
			// $res = $userModel->save([
			// 	'email'=>'222@qq.com'
			// ], ['id' => 8]); // 也可以传递闭包函数
			// dump($res);

			// 批量更新数据u

			// $userModel = new User;
			// $res = $userModel->saveAll([
			// 	['id' => 11, 'username' => 11],
			// 	['id' => 12, 'username' => 12],
			// 	['id' => 13, 'username' => 13],
			// ]);
			// dump($res);
		}

		// 模型删除
		public function modeDel()
		{
			// 方法1
			// $res = User::destroy(19); //可以是数组,可以是闭包函数
			// dump($res); // 返回影响记录数

			// 方法2

			// $userModel = User::get(8);
			// $res = $userModel->delete();
			// dump($res);

			// 方法3

			$res = User::where('id', 10)
			     -> delete();
			dump($res);     
		} 
		public function modeJuhe()
		{
			// 初始化数据
			// $data = [];
			// for($i=1;$i<21;$i++) {
			// 	$data[] = [
			// 		'username' => "imooc_{$i}",
			// 		'email' => "imooc_{$i}@qq.com",
			// 		'num' => $i + 100
			// 	];
			// }
			// $userModel = new User;
			// $res = $userModel->saveAll($data);
			// foreach($res as $val) {
		    //     	dump($val->id);
		    //    }

		    // 总数
		    // $res = User::count();
		    // dump($res);

		    // 有条件的总数
		    // $res = User::where("id",">",5)
		    //        ->count();
		    // dump($res);       

		    // 最大值max
		    // $res = User::max('num');
		    // dump($res);

		    // // 求和sum
		    // $res = User::sum('num');
		    // dump($res);

		    // // 求平均值
		    // $res = User::avg('num');
		    // dump($res);

		    // 求最小值

		    $res = User::min('num');
		    dump($res);
		}

		// 模型获取器
		public function getMode() 
		{
			$res = User::get(3);
			// echo $res->sex;

			dump($res->toArray()); //改造后的值
			dump($res->getData()); //原始值
		}
		// 模型修改器+自动完成
		public function changeMachine() {
			// // 插入操作
			// $res = User::create([
			// 	'username' => 'imooc',
			// 	'sex' => '0',
			// 	'email' => 'imooc@qq.com',
			// 	'password' => 'imooc',
			// 	'num' => '1'
			// ]);

			// dump($res);

			// 更新操作

			$userModel = User::get(29);
			$userModel->sex = 1;
			$res = $userModel->save();
			dump($res);
		}
        
        // ---------------新的数据库
		// 模型时间戳和软删除
		public function softDel() 
		{
			// // 插入一条数据，验证自动添加时间戳方法生效
			// // protected $autoWriteTimestamp = true;
			// $res = User::create([
			// 	'name' => 'imooc',
			// 	'password' => md5('imooc')
			// ]);
			// dump($res);

			// 更新数据时只会变更更新时间戳
			// $user = User::get(1);
			// $user->name = '1771258';
			// $res = $user->save();
			// dump($res);

			// 软删除改写delete_time字段
			$res = User::destroy(1);
			// $res = User::get(1); //返回null 因为被软删除了

			// //怎么查看被软删除了的数据
			// $res =  User::withTrashed(true)->find(1);
			// dump($res-getData());// 查看原始语句

			// 获取所有被软删除的数据
			$res = 	User::onlyTrashed()->select();
			foreach($res as $val) {
				dump($val->getData());
			}
			// 对于软删除的真正删除操作有两个
			// 1、User::destroy(1, ture)
			// 2、$user->delete(true);
		}

	}