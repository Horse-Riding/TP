<?php 
  namespace app\admin\controller;

  use app\common\controller\User as commonUser;
  class User extends commonUser
  {
  	public function demo() 
  	{
  		return $this->showName('tian zhe');
  	}
  }  