/*
Navicat MySQL Data Transfer

Source Server         : 本地
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : zero

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2019-04-10 10:52:53
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `db_goodsimg`
-- ----------------------------
DROP TABLE IF EXISTS `db_goodsimg`;
CREATE TABLE `db_goodsimg` (
  `id` tinyint(20) NOT NULL DEFAULT '1',
  `imgurl` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of db_goodsimg
-- ----------------------------

-- ----------------------------
-- Table structure for `db_shops`
-- ----------------------------
DROP TABLE IF EXISTS `db_shops`;
CREATE TABLE `db_shops` (
  `shopid` smallint(30) NOT NULL AUTO_INCREMENT,
  `shopname` varchar(30) NOT NULL,
  `shopdesc` varchar(50) NOT NULL,
  `shopimg` varchar(50) NOT NULL,
  `price` tinyint(20) NOT NULL,
  `weight` tinyint(20) NOT NULL,
  `imgid` tinyint(20) NOT NULL,
  PRIMARY KEY (`shopid`),
  KEY `商品图片` (`imgid`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of db_shops
-- ----------------------------
INSERT INTO `db_shops` VALUES ('1', '彩虹棒棒糖', '舔一舔更美味', 'urlsdfasdfasdfsdfasdfsadf', '2', '5', '0');
INSERT INTO `db_shops` VALUES ('2', '法撒旦', '撒打发', '', '0', '0', '0');
INSERT INTO `db_shops` VALUES ('3', '打发撒旦', '啊实打', '[{\"status\":\"finished\",\"name\":\"b56547c860a437ec7f9f', '23', '127', '0');

-- ----------------------------
-- Table structure for `db_userlist`
-- ----------------------------
DROP TABLE IF EXISTS `db_userlist`;
CREATE TABLE `db_userlist` (
  `userId` int(30) NOT NULL AUTO_INCREMENT,
  `userName` varchar(30) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `work` varchar(30) DEFAULT NULL,
  `sex` int(10) DEFAULT NULL,
  `address` varchar(30) DEFAULT NULL,
  `phone` varchar(30) DEFAULT NULL,
  `password` varchar(20) NOT NULL DEFAULT '111111',
  PRIMARY KEY (`userId`),
  KEY `userId` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of db_userlist
-- ----------------------------
INSERT INTO `db_userlist` VALUES ('27', 'admin', '管理员', '管家', '1', null, '15111111111', '111111');
INSERT INTO `db_userlist` VALUES ('31', '测试1', '王宝陆', '卫生人员', '1', null, '15146468285', '111111');
INSERT INTO `db_userlist` VALUES ('32', 'tianzhe', '田哲', 'web前端', '1', null, '15011111111', '111111');

-- ----------------------------
-- Table structure for `userkey`
-- ----------------------------
DROP TABLE IF EXISTS `userkey`;
CREATE TABLE `userkey` (
  `userId` int(20) NOT NULL AUTO_INCREMENT,
  `userName` varchar(50) NOT NULL,
  `userPsd` char(32) NOT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of userkey
-- ----------------------------
INSERT INTO `userkey` VALUES ('1', 'admin', 'admin');
INSERT INTO `userkey` VALUES ('2', 'admin2', 'admin2');
