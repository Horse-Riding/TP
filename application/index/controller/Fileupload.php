<?php
namespace app\index\controller;
use \think\Request;
  
 class Fileupload{
	 // 文件上传提交
	 public function upload(){
	    if (!empty($_FILES)) {
			foreach ($_FILES as $k=>$v) {
				$file = request()->file($k);
				// 移动到框架应用根目录/public/uploads/ 目录下
				$info = $file->move('uploads');
				if ($info) {
					// 成功上传后 获取上传信息
					// 输出 jpg
					$path = stripslashes(str_replace('\\','/',$info->getPath()) . '/' . $info->getFilename());
					return json(['imgname'=>$info->getFilename(),'imgurl'=>'http://web.thinkphp.com/'.$path]);
				} else {
					// 上传失败获取错误信息
					return json($file->getError());
				}
			}
		} return $this->json();
	 }
 }	 