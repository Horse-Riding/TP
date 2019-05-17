<?php
    namespace app\index\controller;

	use think\Config;
	use think\Env;
	use think\Db;

	class Dbl
	{
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
	        // find方法只返回一条数据 返回的结果是一个一维数组 如果结果不存在，返回null
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
	        // $res = Db::table('db_user')->where([
	        //     'id' => '11'
	        // ])->column('email','username');

	        // insert 返回值是影响记录的行数 插入树
	        // $db = Db::name('user');
	        // $res = $db->insert([
	        //     'email' => 'imooc_02@qq.com',
	        //     'password' => md5('imooc_02'),
	        //     'username' => 'imooc_02'
	        // ]);

	        // insertGetId 返回当前 id
	        // $db = Db::name('user');
	        // $res = $db->insertGetId([
	        //     'email' => 'imooc_03@qq.com',
	        //     'password' => md5('imooc_03'),
	        //     'username' => 'imooc_03'
	        // ]);

	        // insertAll 插入全部数据 返回值是插入条数
	        // $data = [];
	        // $db = Db::name('user');
	        // for ($i = 1; $i<31; $i++) {
	        //     $data[] = [
	        //         'email' => "imooc_0{$i}@qq.com",
	        //         'password' => md5("imooc_03_{$i}"),
	        //         'username' => "imooc_03_{$i}"
	        //     ];
	        // }
	        // // dump($data);
	        // $res = $db->insertAll($data);

	        // $db = Db::name('user');
	        // // update 返回影响的行数

	        // $res = $db->where([
	        //     'id' => '5'
	        // ])->update([
	        //     'username' => '17771256@qq.com',
	        //     // 'password' => md5("imooc_03_"),
	        //     // 'username' => "imooc_03_"
	        // ]);

	        // setField 返回影响数据的行数 每次只能更新一个字段
	        // $db = Db::name('user');
	        // $res = $db->where([
	        //     'id' => '1'
	        // ])->setField([
	        //     'username' => '123456@qq.com'
	        //     // 'password' => md5("imooc_03_"),
	        //     // 'username' => "imooc_03_"
	        // ]);

	        // setInc  自动增长一个数值，如果第二个参数设置后，自动增长第二个参数的跨度数值。
	        // $db = Db::name('user');
	        // $res = $db->where([
	        //     'id' => '3'
	        // ])->setInc('num', 5);
	        

	        // setDec 自动减少一个数值，如果第二个参数设置后，自动减少第二个参数的跨度数值。
	        // $db = Db::name('user');
	        // $res = $db->where([
	        //     'id' => '3'
	        // ])->setDec('num', 2);

	        // delete 返回印象行数
	        // $db = Db::name('user');
	        
	        // $res = $db->where([
	        //     'id' => '10'
	        // ])->delete(2);

	        // buildSql() 方法生成sql语句
	        // $db = Db::name('user');
	        
	        // $res = $db->where([
	        //     'id' => '10'
	        // ])->buildSql();

	        // 备注信息
	        // EQ =
	        // NEQ <>
	        // LT <
	        // ELT <=
	        // GT >
	        // EGT >=
	        // BETWEEN  BETWEEN * AND * 
	        // NOTBETWEEN NOTBETWEEN * AND *
	        // IN IN (*,*)
	        // NOTIN NOT IN (*,*)

	        //$db = Db::name('user');
	        // $res = $db->where("id","in",[1,2,3])->buildSql();
	        // $res = $db->where([
	        //     'id' => ['EGT', 2]
	        // ])->buildSql();
	        // $res = $db
	        //      ->where("id","in",[1,2,3])
	        //      ->whereOr('username','eq','17771258')
	        //      ->whereOr('email','eq','17771258')
	        //      ->buildSql();

	        // -----链式操作

	        // $db = Db::name('user');

	        // $data = [];
	        // for ($i = 1; $i < 21; $i ++) {
	        //     $data[] = [
	        //         'username' => "imooc_{$i}",
	        //         'email' => "email{$i}@qq.com",
	        //         'password' => md5("imooc_{$i}"),
	        //         'num' => $i + 100
	        //     ];
	        // }
	        // $res = $db->insertAll($data);

	        // $db = Db::name('user');
	        $res = Db::table('db_user')
	             // ->where('id', ">", 10)
	             ->field("username,id,`group`")
	             ->order('id', 'desc')
	             // ->limit(3,5) // 从第三条取取到第五条
	             // ->page(2,3) //分页第二页每页三条数据
	             ->group("`group`") // 使用group order不生效了
	             ->select();
	        dump($res);
	    }
	}