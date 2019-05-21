/*
Navicat MySQL Data Transfer

Source Server         : 本地
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : course

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2019-05-21 16:45:15
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `db_user`
-- ----------------------------
DROP TABLE IF EXISTS `db_user`;
CREATE TABLE `db_user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(60) DEFAULT '',
  `password` char(32) DEFAULT '',
  `create_time` int(10) unsigned DEFAULT '0',
  `update_time` int(10) unsigned DEFAULT '0',
  `delete_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of db_user
-- ----------------------------
INSERT INTO `db_user` VALUES ('1', '1771258', '914f21eb84c6fdb2b663dd6f453f65ca', '1558425368', '1558427727', '1558427727');
INSERT INTO `db_user` VALUES ('2', 'imooc', '914f21eb84c6fdb2b663dd6f453f65ca', '1558425540', '1558425540', '0');
INSERT INTO `db_user` VALUES ('3', 'imooc', '914f21eb84c6fdb2b663dd6f453f65ca', '1558426727', '1558426727', '0');
INSERT INTO `db_user` VALUES ('4', 'imooc', '914f21eb84c6fdb2b663dd6f453f65ca', '1558426804', '1558426804', null);

-- ----------------------------
-- Table structure for `db_user_bak`
-- ----------------------------
DROP TABLE IF EXISTS `db_user_bak`;
CREATE TABLE `db_user_bak` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(60) DEFAULT NULL,
  `password` char(32) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `num` int(10) NOT NULL DEFAULT '0',
  `group` tinyint(4) unsigned DEFAULT NULL,
  `sex` tinyint(3) unsigned DEFAULT '0',
  `time` int(10) unsigned DEFAULT '0',
  `time_insert` int(10) unsigned DEFAULT '0',
  `time_update` int(10) unsigned DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of db_user_bak
-- ----------------------------
INSERT INTO `db_user_bak` VALUES ('1', 'imooc_1', null, 'imooc_1@qq.com', '101', null, '0', '0', '0', '0');
INSERT INTO `db_user_bak` VALUES ('2', 'imooc_2', null, 'imooc_2@qq.com', '102', null, '1', '0', '0', '0');
INSERT INTO `db_user_bak` VALUES ('3', 'imooc_3', null, 'imooc_3@qq.com', '103', null, '2', '0', '0', '0');
INSERT INTO `db_user_bak` VALUES ('4', 'imooc_4', null, 'imooc_4@qq.com', '104', null, '0', '0', '0', '0');
INSERT INTO `db_user_bak` VALUES ('5', 'imooc_5', null, 'imooc_5@qq.com', '105', null, '0', '0', '0', '0');
INSERT INTO `db_user_bak` VALUES ('6', 'imooc_6', null, 'imooc_6@qq.com', '106', null, '0', '0', '0', '0');
INSERT INTO `db_user_bak` VALUES ('7', 'imooc_7', null, 'imooc_7@qq.com', '107', null, '0', '0', '0', '0');
INSERT INTO `db_user_bak` VALUES ('8', 'imooc_8', null, 'imooc_8@qq.com', '108', null, '0', '0', '0', '0');
INSERT INTO `db_user_bak` VALUES ('9', 'imooc_9', null, 'imooc_9@qq.com', '109', null, '0', '0', '0', '0');
INSERT INTO `db_user_bak` VALUES ('10', 'imooc_10', null, 'imooc_10@qq.com', '110', null, '0', '0', '0', '0');
INSERT INTO `db_user_bak` VALUES ('11', 'imooc_11', null, 'imooc_11@qq.com', '111', null, '0', '0', '0', '0');
INSERT INTO `db_user_bak` VALUES ('12', 'imooc_12', null, 'imooc_12@qq.com', '112', null, '0', '0', '0', '0');
INSERT INTO `db_user_bak` VALUES ('13', 'imooc_13', null, 'imooc_13@qq.com', '113', null, '0', '0', '0', '0');
INSERT INTO `db_user_bak` VALUES ('14', 'imooc_14', null, 'imooc_14@qq.com', '114', null, '0', '0', '0', '0');
INSERT INTO `db_user_bak` VALUES ('15', 'imooc_15', null, 'imooc_15@qq.com', '115', null, '0', '0', '0', '0');
INSERT INTO `db_user_bak` VALUES ('16', 'imooc_16', null, 'imooc_16@qq.com', '116', null, '1', '1558341214', '0', '1558341214');
INSERT INTO `db_user_bak` VALUES ('17', 'imooc_17', null, 'imooc_17@qq.com', '117', null, '0', '0', '0', '0');
INSERT INTO `db_user_bak` VALUES ('18', 'imooc_18', null, 'imooc_18@qq.com', '118', null, '0', '0', '0', '0');
INSERT INTO `db_user_bak` VALUES ('19', 'imooc_19', null, 'imooc_19@qq.com', '119', null, '0', '0', '0', '0');
INSERT INTO `db_user_bak` VALUES ('20', 'imooc_20', null, 'imooc_20@qq.com', '120', null, '0', '0', '0', '0');
INSERT INTO `db_user_bak` VALUES ('21', 'imooc', 'imooc', 'imooc@qq.com', '1', null, '0', '0', '0', '0');
INSERT INTO `db_user_bak` VALUES ('22', 'imooc', 'imooc', 'imooc@qq.com', '1', null, '0', '0', '0', '0');
INSERT INTO `db_user_bak` VALUES ('23', 'imooc', '914f21eb84c6fdb2b663dd6f453f65ca', 'imooc@qq.com', '1', null, '0', '0', '0', '0');
INSERT INTO `db_user_bak` VALUES ('24', 'imooc', '914f21eb84c6fdb2b663dd6f453f65ca', 'imooc@qq.com', '1', null, '0', null, '0', '0');
INSERT INTO `db_user_bak` VALUES ('25', 'imooc', '914f21eb84c6fdb2b663dd6f453f65ca', 'imooc@qq.com', '1', null, '0', '0', '0', '0');
INSERT INTO `db_user_bak` VALUES ('26', 'imooc', '914f21eb84c6fdb2b663dd6f453f65ca', 'imooc@qq.com', '1', null, '0', null, '0', '0');
INSERT INTO `db_user_bak` VALUES ('27', 'imooc', '914f21eb84c6fdb2b663dd6f453f65ca', 'imooc@qq.com', '1', null, '0', '1558340521', '0', '0');
INSERT INTO `db_user_bak` VALUES ('28', 'imooc', '914f21eb84c6fdb2b663dd6f453f65ca', 'imooc@qq.com', '1', null, '0', '1558340761', '1558340761', '0');
INSERT INTO `db_user_bak` VALUES ('29', 'imooc', '914f21eb84c6fdb2b663dd6f453f65ca', 'imooc@qq.com', '1', null, '1', '1558341248', '1558341072', '1558341248');
