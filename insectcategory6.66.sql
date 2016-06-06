/*
Navicat MySQL Data Transfer

Source Server         : insectCategory
Source Server Version : 50612
Source Host           : localhost:3306
Source Database       : insectcategory

Target Server Type    : MYSQL
Target Server Version : 50612
File Encoding         : 65001

Date: 2016-06-06 22:33:48
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `area`
-- ----------------------------
DROP TABLE IF EXISTS `area`;
CREATE TABLE `area` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `lft` int(11) DEFAULT NULL,
  `rgt` int(11) DEFAULT NULL,
  `parentid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of area
-- ----------------------------
INSERT INTO `area` VALUES ('1', '新乡', '3', '4', '3');
INSERT INTO `area` VALUES ('2', 'root', '1', '40', '0');
INSERT INTO `area` VALUES ('3', '河南', '2', '9', '2');
INSERT INTO `area` VALUES ('4', '鹤壁', '5', '6', '3');
INSERT INTO `area` VALUES ('5', '郑州', '7', '8', '3');
INSERT INTO `area` VALUES ('6', '陕西', '10', '17', '2');
INSERT INTO `area` VALUES ('7', '西安', '11', '16', '6');
INSERT INTO `area` VALUES ('8', '临潼', '12', '13', '7');
INSERT INTO `area` VALUES ('9', '渭南', '14', '15', '7');
INSERT INTO `area` VALUES ('10', '河北', '18', '39', '2');
INSERT INTO `area` VALUES ('11', '唐山', '19', '28', '10');
INSERT INTO `area` VALUES ('12', '滦县', '20', '21', '11');
INSERT INTO `area` VALUES ('13', '遵化', '22', '25', '11');
INSERT INTO `area` VALUES ('14', '野狐山', '23', '24', '13');
INSERT INTO `area` VALUES ('15', '石家庄', '29', '32', '10');
INSERT INTO `area` VALUES ('16', '灵兽', '30', '31', '15');
INSERT INTO `area` VALUES ('17', '丰润', '26', '27', '11');
INSERT INTO `area` VALUES ('18', '保定', '33', '34', '10');
INSERT INTO `area` VALUES ('19', '保定', '35', '36', '10');
INSERT INTO `area` VALUES ('20', '保定', '37', '38', '10');

-- ----------------------------
-- Table structure for `insect_album`
-- ----------------------------
DROP TABLE IF EXISTS `insect_album`;
CREATE TABLE `insect_album` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `album_type` int(2) NOT NULL DEFAULT '0' COMMENT '相册类型',
  `album_name` varchar(60) DEFAULT NULL COMMENT '相册名称',
  `zhong_id` int(11) NOT NULL COMMENT '种id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=105 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of insect_album
-- ----------------------------
INSERT INTO `insect_album` VALUES ('101', '0', '天牛A', '1001');
INSERT INTO `insect_album` VALUES ('102', '1', '天牛B', '1001');
INSERT INTO `insect_album` VALUES ('103', '0', '吹绵蚧', '1014');
INSERT INTO `insect_album` VALUES ('104', '0', '大青叶蝉', '1015');

-- ----------------------------
-- Table structure for `insect_album_pictures`
-- ----------------------------
DROP TABLE IF EXISTS `insect_album_pictures`;
CREATE TABLE `insect_album_pictures` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(100) DEFAULT NULL COMMENT '图片地址',
  `album_id` int(11) DEFAULT NULL COMMENT '相册id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2023 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of insect_album_pictures
-- ----------------------------
INSERT INTO `insect_album_pictures` VALUES ('2001', 'images/gt01.jpg', '101');
INSERT INTO `insect_album_pictures` VALUES ('2002', 'images/gt02.jpg', '101');
INSERT INTO `insect_album_pictures` VALUES ('2003', 'images/gt03.jpg', '101');
INSERT INTO `insect_album_pictures` VALUES ('2004', 'images/gt04.jpg', '101');
INSERT INTO `insect_album_pictures` VALUES ('2005', 'images/gt05.jpg', '101');
INSERT INTO `insect_album_pictures` VALUES ('2006', 'images/gt06.jpg', '102');
INSERT INTO `insect_album_pictures` VALUES ('2007', 'images/gt07.jpg', '102');
INSERT INTO `insect_album_pictures` VALUES ('2008', 'images/gt08.jpg', '102');
INSERT INTO `insect_album_pictures` VALUES ('2012', 'images/Icerya01.jpg', '103');
INSERT INTO `insect_album_pictures` VALUES ('2013', 'images/Icerya02.jpg', '103');
INSERT INTO `insect_album_pictures` VALUES ('2014', 'images/Icerya03.jpg', '103');
INSERT INTO `insect_album_pictures` VALUES ('2015', 'images/Icerya04.jpg', '103');
INSERT INTO `insect_album_pictures` VALUES ('2016', 'images/Icerya05.jpg', '103');
INSERT INTO `insect_album_pictures` VALUES ('2017', 'images/Cicadella01.jpg', '104');
INSERT INTO `insect_album_pictures` VALUES ('2018', 'images/Cicadella06.jpg', '104');
INSERT INTO `insect_album_pictures` VALUES ('2019', 'images/Cicadella02.jpg', '104');
INSERT INTO `insect_album_pictures` VALUES ('2020', 'images/Cicadella03.jpg', '104');
INSERT INTO `insect_album_pictures` VALUES ('2021', 'images/Cicadella04.jpg', '104');
INSERT INTO `insect_album_pictures` VALUES ('2022', 'images/Cicadella05.jpg', '104');

-- ----------------------------
-- Table structure for `insect_category`
-- ----------------------------
DROP TABLE IF EXISTS `insect_category`;
CREATE TABLE `insect_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `category_id` int(11) DEFAULT NULL COMMENT '目类id',
  `category_name` varchar(60) DEFAULT NULL COMMENT '目类中文名',
  `lation_name` varchar(30) DEFAULT NULL COMMENT '拉丁名',
  `lft` int(11) DEFAULT NULL,
  `rgt` int(11) DEFAULT NULL,
  `parent_id` int(11) DEFAULT '0' COMMENT '父类id',
  `category_level` int(2) DEFAULT '1' COMMENT '类目层级',
  `is_leaf` int(1) DEFAULT '0' COMMENT '是否叶子',
  `add_user` varchar(25) DEFAULT NULL COMMENT '创建人',
  `add_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_user` varchar(25) DEFAULT NULL COMMENT '更新人',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of insect_category
-- ----------------------------
INSERT INTO `insect_category` VALUES ('1', '1', '昆虫类目树', 'ROOT', '1', '154', '0', '1', '0', null, null, null, null);
INSERT INTO `insect_category` VALUES ('2', '2', '原尾目', 'Protura ', '2', '17', '1', '2', '0', 'wangximan', '2016-03-15 00:00:00', 'wangximan', '2016-03-15 15:10:55');
INSERT INTO `insect_category` VALUES ('3', '3', '古蚖科00', 'Eosentomidae', '3', '4', '2', '3', '1', 'wangximan', '2016-03-15 00:00:00', 'wxm', '2016-05-10 18:41:12');
INSERT INTO `insect_category` VALUES ('4', '4', '华蚖科ppp', 'Sinentomidae', '5', '6', '2', '3', '1', 'wangximan', '2016-03-15 00:00:00', 'wxm', '2016-05-10 18:41:12');
INSERT INTO `insect_category` VALUES ('5', '5', '檗蚖科 ', 'Berberentomidae', '7', '8', '2', '3', '1', 'wangximan', '2016-03-01 00:00:00', 'wangximan', '2016-03-15 15:29:57');
INSERT INTO `insect_category` VALUES ('6', '6', '蚖科99', 'Acerentomidae', '9', '10', '2', '3', '1', 'wxm', '2016-03-15 00:00:00', 'wxm', '2016-05-22 17:50:05');
INSERT INTO `insect_category` VALUES ('7', '7', '夕蚖科iii', 'Hesperentomidae', '11', '12', '2', '3', '1', 'wxm', '2016-03-15 00:00:00', 'wxm', '2016-05-22 17:50:05');
INSERT INTO `insect_category` VALUES ('8', '8', '始蚖科', 'Protentomidae', '13', '14', '2', '3', '1', 'wxm', '2016-03-15 00:00:00', 'www', '2016-03-15 15:33:03');
INSERT INTO `insect_category` VALUES ('9', '9', '日本蚖科', 'Nipponentomidae', '15', '16', '2', '3', '1', 'wxm', '2016-03-15 00:00:00', 'www', '2016-03-15 15:34:09');
INSERT INTO `insect_category` VALUES ('10', '10', '双尾目 ', 'Diplura', '18', '29', '1', '2', '0', 'wxm', '2016-03-15 15:35:30', 'www', '2016-03-15 15:35:36');
INSERT INTO `insect_category` VALUES ('11', '11', '康虫八科', 'Campodeidae', '19', '20', '10', '3', '1', 'wxm', '2016-03-15 15:36:36', 'wxm', '2016-06-06 21:21:54');
INSERT INTO `insect_category` VALUES ('12', '12', '副铗虫八科', 'Parajapygidae', '21', '22', '10', '3', '1', 'wxm', '2016-03-15 15:37:29', 'www', '2016-03-15 15:37:35');
INSERT INTO `insect_category` VALUES ('13', '13', '铗虫八科', 'Octostigmatidae', '23', '24', '10', '3', '1', 'wxm', '2016-03-15 15:39:59', 'www', '2016-03-15 15:40:03');
INSERT INTO `insect_category` VALUES ('14', '14', '八孔虫八科', 'Octostigmatidae', '25', '26', '10', '3', '1', 'wxm', '2016-03-15 15:41:19', 'www', '2016-03-15 15:41:30');
INSERT INTO `insect_category` VALUES ('15', '15', '蜉蝣目 ', 'Ephemeroptera', '28', '65', '1', '2', '0', 'wxm', '2016-03-15 15:42:33', 'www', '2016-03-15 15:42:38');
INSERT INTO `insect_category` VALUES ('16', '16', '鱼形蜉亚目', 'Pisciforma', '29', '36', '15', '3', '0', 'wxm', '2016-03-15 15:43:25', 'www', '2016-03-15 15:43:29');
INSERT INTO `insect_category` VALUES ('17', '17', '四节蜉科', 'Baetidae', '30', '33', '16', '4', '1', 'wxm', '2016-03-15 15:44:30', 'www', '2016-03-15 15:44:35');
INSERT INTO `insect_category` VALUES ('18', '18', '短丝蜉科', 'Siphlonuridae', '32', '35', '16', '4', '1', 'wxm', '2016-03-15 15:45:14', 'www', '2016-03-15 15:45:20');
INSERT INTO `insect_category` VALUES ('19', '19', '强气管蜉亚目', 'Rectracheata', '35', '56', '15', '3', '0', 'wxm', '2016-03-15 15:46:09', 'www', '2016-03-15 15:46:14');
INSERT INTO `insect_category` VALUES ('20', '20', '蜉蝣科', 'Ephemeridae', '36', '39', '19', '4', '1', 'wxm', '2016-03-15 15:48:19', 'www', '2016-03-15 15:48:26');
INSERT INTO `insect_category` VALUES ('21', '21', '河花蜉科', 'Potamanthidae', '38', '41', '19', '4', '1', 'wxm', '2016-03-15 15:49:27', 'www', '2016-03-15 15:49:31');
INSERT INTO `insect_category` VALUES ('22', '22', '多脉蜉科 ', 'Polymitarcyidae', '40', '43', '19', '4', '1', 'wxm', '2016-03-15 15:50:27', 'www', '2016-03-15 15:50:31');
INSERT INTO `insect_category` VALUES ('23', '23', '小蜉科', 'Ephemerellidae', '42', '45', '19', '4', '1', 'wxm', '2016-03-15 15:51:07', 'www', '2016-03-15 15:51:12');
INSERT INTO `insect_category` VALUES ('24', '24', '细蜉科', 'Caenidae', '44', '47', '19', '4', '1', 'wxm', '2016-03-15 15:51:46', 'www', '2016-03-15 15:51:50');
INSERT INTO `insect_category` VALUES ('25', '25', '毛蜉科 ', 'Tricorythidae', '46', '49', '19', '4', '1', 'wxm', '2016-03-15 15:52:20', 'www', '2016-03-15 15:52:25');
INSERT INTO `insect_category` VALUES ('26', '26', '鲎蜉科', 'Prosopistomatidae', '48', '51', '19', '4', '1', 'wxm', '2016-03-15 15:53:02', 'www', '2016-03-15 15:53:06');
INSERT INTO `insect_category` VALUES ('27', '27', '细裳蜉科 ', 'Leptophlebiidae', '50', '53', '19', '4', '1', 'wxm', '2016-03-15 15:53:51', 'www', '2016-03-15 15:53:57');
INSERT INTO `insect_category` VALUES ('28', '28', '新蜉科 ', 'Neoephemeridae', '52', '55', '19', '4', '1', 'wx', '2016-03-15 15:54:38', 'www', '2016-03-15 15:54:42');
INSERT INTO `insect_category` VALUES ('29', '29', '多毛蜉亚目 ', 'Setisura', '55', '64', '15', '3', '0', 'wxm', '2016-03-15 15:55:38', 'www', '2016-03-15 15:55:43');
INSERT INTO `insect_category` VALUES ('30', '30', '扁蜉科', 'Heptageniidae', '56', '59', '29', '4', '1', 'wxm', '2016-03-15 15:56:22', 'www', '2016-03-15 15:56:26');
INSERT INTO `insect_category` VALUES ('31', '31', '等蜉科', 'Isonychiidae ', '58', '61', '29', '4', '1', 'wxm', '2016-03-15 15:56:53', 'www', '2016-03-15 15:57:04');
INSERT INTO `insect_category` VALUES ('32', '32', '寡脉蜉科 ', 'Oligoneuriidae', '60', '63', '29', '4', '1', 'wxm', '2016-03-15 15:57:36', 'www', '2016-03-15 15:57:40');
INSERT INTO `insect_category` VALUES ('33', '33', '鞘翅目', 'Coleoptera', '64', '91', '1', '2', '0', 'wxm', null, 'www', null);
INSERT INTO `insect_category` VALUES ('34', '34', '肉食亚目', 'Adelphaga', '65', '76', '33', '3', '0', null, null, null, null);
INSERT INTO `insect_category` VALUES ('35', '35', '虎甲科', 'Cicindellidae', '66', '69', '34', '4', '1', null, null, null, null);
INSERT INTO `insect_category` VALUES ('36', '36', '步甲科', 'Carabidae', '68', '71', '34', '4', '1', null, null, null, null);
INSERT INTO `insect_category` VALUES ('37', '37', '龙虱科', 'Dytiscidae', '70', '73', '34', '4', '1', null, null, null, null);
INSERT INTO `insect_category` VALUES ('38', '38', '棒角甲科', 'Paussidae', '72', '75', '34', '4', '1', null, null, null, null);
INSERT INTO `insect_category` VALUES ('39', '39', '多食亚目', 'Polyphaga', '75', '90', '33', '3', '0', null, null, null, null);
INSERT INTO `insect_category` VALUES ('40', '40', '水龟虫科', 'Hydrophilidae', '76', '79', '39', '4', '1', null, null, null, null);
INSERT INTO `insect_category` VALUES ('41', '41', '隐翅甲科', 'Staphilinidae', '78', '81', '39', '4', '1', null, null, null, null);
INSERT INTO `insect_category` VALUES ('42', '42', '葬甲科', 'Silphidae', '80', '83', '39', '4', '1', null, null, null, null);
INSERT INTO `insect_category` VALUES ('43', '43', '天牛科', 'Cerambycidae', '82', '87', '39', '4', '0', null, null, null, null);
INSERT INTO `insect_category` VALUES ('44', '44', '光肩星天牛', 'Anoplophora glabripennis（Motsc', '83', '86', '43', '5', '1', null, null, null, null);
INSERT INTO `insect_category` VALUES ('45', '45', '象甲科', 'Curculionidae', '86', '89', '39', '4', '1', null, null, null, null);
INSERT INTO `insect_category` VALUES ('46', '46', '缨尾目', 'Thysanura', '90', '93', '1', '2', '1', null, null, 'zhangsan', '2016-05-31 09:32:50');
INSERT INTO `insect_category` VALUES ('47', '47', '纺足目', 'Embioptera', '92', '143', '1', '2', '0', null, null, null, null);
INSERT INTO `insect_category` VALUES ('48', '48', '123wxm', 'a', '93', '100', '47', '3', '0', 'wxm', null, 'wxm', '2016-05-05 13:30:43');
INSERT INTO `insect_category` VALUES ('49', '49', 'fdsbvv', 'b', '95', '102', '47', '3', '1', 'wxm', null, 'wxm', null);
INSERT INTO `insect_category` VALUES ('50', '50', 'fdscccvc', 'c', '97', '104', '47', '3', '1', 'wxm', null, 'wxm', null);
INSERT INTO `insect_category` VALUES ('51', '51', 'd', 'd', '99', '106', '47', '3', '1', 'wxm', null, 'wxm', null);
INSERT INTO `insect_category` VALUES ('52', '52', 'e', 'e', '101', '108', '47', '3', '1', 'wxm', null, 'wxm', null);
INSERT INTO `insect_category` VALUES ('53', '53', 'f', null, '103', '110', '47', '3', '1', null, null, null, null);
INSERT INTO `insect_category` VALUES ('54', '54', 'g', null, '105', '112', '47', '3', '1', null, null, null, null);
INSERT INTO `insect_category` VALUES ('55', '55', 'h', null, '107', '114', '47', '3', '1', null, null, null, null);
INSERT INTO `insect_category` VALUES ('56', '56', 'i', null, '109', '116', '47', '3', '1', null, null, null, null);
INSERT INTO `insect_category` VALUES ('57', '57', 'j', null, '111', '118', '47', '3', '1', null, null, null, null);
INSERT INTO `insect_category` VALUES ('58', '58', 'k', null, '113', '120', '47', '3', '1', null, null, null, null);
INSERT INTO `insect_category` VALUES ('59', '59', 'l', null, '115', '122', '47', '3', '1', null, null, null, null);
INSERT INTO `insect_category` VALUES ('60', '60', 'm', null, '117', '124', '47', '3', '1', null, null, null, null);
INSERT INTO `insect_category` VALUES ('61', '61', 'n', null, '119', '126', '47', '3', '1', null, null, null, null);
INSERT INTO `insect_category` VALUES ('62', '62', 'o', null, '121', '128', '47', '3', '1', null, null, null, null);
INSERT INTO `insect_category` VALUES ('63', '63', 'p', null, '123', '130', '47', '3', '1', null, null, null, null);
INSERT INTO `insect_category` VALUES ('64', '64', 'q', null, '125', '132', '47', '3', '1', null, null, null, null);
INSERT INTO `insect_category` VALUES ('65', '65', 'r', null, '127', '134', '47', '3', '1', null, null, null, null);
INSERT INTO `insect_category` VALUES ('66', '66', 's', null, '129', '136', '47', '3', '1', null, null, null, null);
INSERT INTO `insect_category` VALUES ('67', '67', 'aaaddd', null, '94', '97', '48', '4', '1', null, null, null, null);
INSERT INTO `insect_category` VALUES ('68', '68', 't', null, '96', '99', '48', '4', '1', null, null, null, null);
INSERT INTO `insect_category` VALUES ('69', '69', 'u', null, '135', '138', '47', '3', '1', null, null, null, null);
INSERT INTO `insect_category` VALUES ('70', '70', 'wxm', null, '139', '142', '47', '3', '1', null, '2016-04-19 16:25:07', null, '2016-04-19 16:25:07');
INSERT INTO `insect_category` VALUES ('71', '71', '康虫', '别名kangc', '27', '28', '10', '3', '1', 'wxm', '2016-06-03 10:54:48', 'wxm', '2016-06-03 10:54:48');
INSERT INTO `insect_category` VALUES ('72', '72', '同翅目', null, '144', '153', '1', '2', '0', 'wxm', '2016-06-06 21:51:50', 'wxm', '2016-06-06 21:52:06');
INSERT INTO `insect_category` VALUES ('73', '73', '绵蚧科', null, '145', '148', '72', '3', '0', 'wxm', '2016-06-06 21:52:06', 'wxm', '2016-06-06 21:53:34');
INSERT INTO `insect_category` VALUES ('74', '74', '吹绵蚧', 'Icerya purchasi Maskell', '146', '147', '73', '4', '1', 'wxm', '2016-06-06 21:53:34', 'wxm', '2016-06-06 21:53:34');
INSERT INTO `insect_category` VALUES ('75', '75', '叶蝉科', null, '149', '152', '72', '3', '0', 'zhangsan', '2016-06-06 22:20:09', 'zhangsan', '2016-06-06 22:21:20');
INSERT INTO `insect_category` VALUES ('76', '76', '大青叶蝉', 'Cicadella viridis (Linnaeus)', '150', '151', '75', '4', '1', 'zhangsan', '2016-06-06 22:21:20', 'zhangsan', '2016-06-06 22:21:20');

-- ----------------------------
-- Table structure for `insect_caterole`
-- ----------------------------
DROP TABLE IF EXISTS `insect_caterole`;
CREATE TABLE `insect_caterole` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_code` varchar(20) DEFAULT NULL COMMENT '角色代码',
  `role_name` varchar(50) DEFAULT NULL COMMENT '角色名称',
  `role_type` varchar(10) DEFAULT NULL COMMENT '角色类型',
  `comment` varchar(150) DEFAULT NULL COMMENT '备注',
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=106 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of insect_caterole
-- ----------------------------
INSERT INTO `insect_caterole` VALUES ('101', 'ROOT', '超级权限', 'ROOT', '所有权限', '2016-03-21 15:42:12');
INSERT INTO `insect_caterole` VALUES ('103', 'BACK01', '修改类目权限', 'BACK', '修改类目权限', '2016-03-21 15:55:01');
INSERT INTO `insect_caterole` VALUES ('104', 'BACK02', '修改属性权限', 'BACK', '修改属性权限', '2016-03-21 15:55:06');
INSERT INTO `insect_caterole` VALUES ('105', 'BACK03', '后台类目、属性修改权限', 'BACK', '后台类目、属性修改权限', '2016-03-21 15:55:10');

-- ----------------------------
-- Table structure for `insect_cateuserrole`
-- ----------------------------
DROP TABLE IF EXISTS `insect_cateuserrole`;
CREATE TABLE `insect_cateuserrole` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userrole_id` int(11) DEFAULT NULL,
  `user_code` varchar(25) NOT NULL COMMENT '用户id',
  `role_code` varchar(20) NOT NULL COMMENT '角色代码',
  `user_name` varchar(150) DEFAULT NULL COMMENT '用户名',
  `user_passwd` varchar(20) NOT NULL,
  `user_email` varchar(150) DEFAULT '' COMMENT '户用邮箱',
  `role_type` varchar(10) DEFAULT NULL COMMENT '角色类型',
  `remark` varchar(600) DEFAULT NULL COMMENT '用户描述',
  `add_user` varchar(60) DEFAULT NULL COMMENT '创建人',
  `add_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_user` varchar(25) DEFAULT NULL COMMENT '更新人',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of insect_cateuserrole
-- ----------------------------
INSERT INTO `insect_cateuserrole` VALUES ('1', '1', '029271', 'ROOT', 'wxm', 'wangximan', 'ximan_wang@163.com', 'ROOT', 'root', 'wxm', null, 'wxm', '2016-05-14 21:36:01');
INSERT INTO `insect_cateuserrole` VALUES ('2', '2', '029272', 'BACK03', 'zhangsan', 'zhangsan', 'zhang.san@163.com', 'BACK', 'modfy cate and pro', 'wxm', null, 'zhangsan', '2016-05-28 12:02:10');
INSERT INTO `insect_cateuserrole` VALUES ('3', null, '100272', 'BACK03', 'lisi', '88888888', 'lisi@163.com', 'BACK', 'Back03', 'wxm', null, null, '2016-05-28 18:43:24');

-- ----------------------------
-- Table structure for `insect_cateuserrolemapping`
-- ----------------------------
DROP TABLE IF EXISTS `insect_cateuserrolemapping`;
CREATE TABLE `insect_cateuserrolemapping` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userrole_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of insect_cateuserrolemapping
-- ----------------------------

-- ----------------------------
-- Table structure for `insect_front_user`
-- ----------------------------
DROP TABLE IF EXISTS `insect_front_user`;
CREATE TABLE `insect_front_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(30) DEFAULT NULL,
  `user_passwd` varchar(30) DEFAULT NULL,
  `user_email` varchar(30) DEFAULT NULL,
  `remark` varchar(60) DEFAULT NULL,
  `add_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of insect_front_user
-- ----------------------------
INSERT INTO `insect_front_user` VALUES ('1', '王熙曼', '88888888', 'ximan_wang@163.com', 'user', '2016-05-28 21:13:09', '2016-05-28 21:13:14');

-- ----------------------------
-- Table structure for `insect_pest`
-- ----------------------------
DROP TABLE IF EXISTS `insect_pest`;
CREATE TABLE `insect_pest` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of insect_pest
-- ----------------------------

-- ----------------------------
-- Table structure for `insect_pest_category`
-- ----------------------------
DROP TABLE IF EXISTS `insect_pest_category`;
CREATE TABLE `insect_pest_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `category_id` int(11) NOT NULL COMMENT '目类id',
  `category_name` varchar(60) DEFAULT NULL COMMENT '目类中文名',
  `lft` int(11) NOT NULL,
  `rgt` int(11) NOT NULL,
  `parent_id` int(11) DEFAULT '0' COMMENT '父类id',
  `category_level` int(2) DEFAULT '1' COMMENT '类目层级',
  `is_leaf` int(1) DEFAULT '0' COMMENT '是否叶子',
  `add_user` varchar(25) DEFAULT NULL COMMENT '创建人',
  `add_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_user` varchar(25) DEFAULT NULL COMMENT '更新人',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2035 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of insect_pest_category
-- ----------------------------
INSERT INTO `insect_pest_category` VALUES ('1999', '1999', '害虫类目树', '1', '74', '1', '1', '0', null, null, null, null);
INSERT INTO `insect_pest_category` VALUES ('2000', '2000', '地下害虫', '2', '9', '1999', '2', '0', 'w', '2016-03-15 17:57:22', 'n', '2016-03-15 17:57:27');
INSERT INTO `insect_pest_category` VALUES ('2001', '2001', '地老虎类', '3', '4', '2000', '3', '1', null, null, null, null);
INSERT INTO `insect_pest_category` VALUES ('2002', '2002', '金针虫类', '5', '6', '2000', '3', '1', null, null, null, null);
INSERT INTO `insect_pest_category` VALUES ('2003', '2003', '蛴螬类', '7', '8', '2000', '3', '1', null, null, null, null);
INSERT INTO `insect_pest_category` VALUES ('2004', '2004', '枝梢害虫', '10', '23', '1999', '2', '0', null, null, null, null);
INSERT INTO `insect_pest_category` VALUES ('2005', '2005', '蚧虫类', '11', '12', '2004', '3', '1', null, null, null, null);
INSERT INTO `insect_pest_category` VALUES ('2006', '2006', '蚜虫、粉虱类', '13', '14', '2004', '3', '1', null, null, null, null);
INSERT INTO `insect_pest_category` VALUES ('2007', '2007', '蝉、木虱、网蝽类', '15', '16', '2004', '3', '1', null, null, null, null);
INSERT INTO `insect_pest_category` VALUES ('2008', '2008', '瘿蜂、螨、瘿蚊类', '17', '18', '2004', '3', '1', null, null, null, null);
INSERT INTO `insect_pest_category` VALUES ('2009', '2009', '蛾类', '19', '20', '2004', '3', '1', null, null, null, null);
INSERT INTO `insect_pest_category` VALUES ('2010', '2010', '象甲类', '21', '22', '2004', '3', '1', null, null, null, null);
INSERT INTO `insect_pest_category` VALUES ('2011', '2011', '食叶害虫', '24', '49', '1999', '2', '0', null, null, null, null);
INSERT INTO `insect_pest_category` VALUES ('2012', '2012', '松毛虫类', '25', '26', '2011', '3', '1', null, null, null, null);
INSERT INTO `insect_pest_category` VALUES ('2013', '2013', '尺蛾类', '27', '28', '2011', '3', '1', null, null, null, null);
INSERT INTO `insect_pest_category` VALUES ('2014', '2014', '舟蛾、夜蛾类', '29', '30', '2011', '3', '1', null, null, null, null);
INSERT INTO `insect_pest_category` VALUES ('2015', '2015', '毒蛾类', '31', '32', '2011', '3', '1', null, null, null, null);
INSERT INTO `insect_pest_category` VALUES ('2016', '2016', '灯蛾类', '33', '34', '2011', '3', '1', null, null, null, null);
INSERT INTO `insect_pest_category` VALUES ('2017', '2017', '刺蛾、卷蛾及小蛾类', '35', '36', '2011', '3', '1', null, null, null, null);
INSERT INTO `insect_pest_category` VALUES ('2018', '2018', '螟蛾类 ', '37', '38', '2011', '3', '1', null, null, null, null);
INSERT INTO `insect_pest_category` VALUES ('2019', '2019', '枯叶蛾类', '39', '40', '2011', '3', '1', null, null, null, null);
INSERT INTO `insect_pest_category` VALUES ('2020', '2020', '蚕蛾、天蛾类', '41', '42', '2011', '3', '1', null, null, null, null);
INSERT INTO `insect_pest_category` VALUES ('2021', '2021', '叶甲类', '43', '44', '2011', '3', '1', null, null, null, null);
INSERT INTO `insect_pest_category` VALUES ('2022', '2022', '叶蜂类', '45', '46', '2011', '3', '1', null, null, null, null);
INSERT INTO `insect_pest_category` VALUES ('2023', '2023', '蝗类', '47', '48', '2011', '3', '1', null, null, null, null);
INSERT INTO `insect_pest_category` VALUES ('2024', '2024', '蛀干害虫', '50', '63', '1999', '2', '0', null, null, null, null);
INSERT INTO `insect_pest_category` VALUES ('2025', '2025', '天牛类', '51', '52', '2024', '3', '1', null, null, null, null);
INSERT INTO `insect_pest_category` VALUES ('2026', '2026', '吉丁虫类', '53', '54', '2024', '3', '1', null, null, null, null);
INSERT INTO `insect_pest_category` VALUES ('2027', '2027', '象甲类', '55', '56', '2024', '3', '1', null, null, null, null);
INSERT INTO `insect_pest_category` VALUES ('2028', '2028', '小蠹虫类', '57', '58', '2024', '3', '1', null, null, null, null);
INSERT INTO `insect_pest_category` VALUES ('2029', '2029', '木蠹蛾类', '59', '60', '2024', '3', '1', null, null, null, null);
INSERT INTO `insect_pest_category` VALUES ('2030', '2030', '透翅蛾类', '61', '62', '2024', '3', '1', null, null, null, null);
INSERT INTO `insect_pest_category` VALUES ('2031', '2031', '种实害虫', '64', '73', '1999', '2', '0', null, null, null, null);
INSERT INTO `insect_pest_category` VALUES ('2032', '2032', '卷蛾类', '65', '66', '2031', '3', '1', null, null, null, null);
INSERT INTO `insect_pest_category` VALUES ('2033', '2033', '螟蛾类', '67', '68', '2031', '3', '1', null, null, null, null);
INSERT INTO `insect_pest_category` VALUES ('2034', '2034', '象甲类', '69', '70', '2031', '3', '1', null, null, null, null);

-- ----------------------------
-- Table structure for `insect_pest_subdivision`
-- ----------------------------
DROP TABLE IF EXISTS `insect_pest_subdivision`;
CREATE TABLE `insect_pest_subdivision` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of insect_pest_subdivision
-- ----------------------------

-- ----------------------------
-- Table structure for `insect_talk`
-- ----------------------------
DROP TABLE IF EXISTS `insect_talk`;
CREATE TABLE `insect_talk` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ask_content` varchar(100) DEFAULT NULL,
  `add_user` varchar(30) DEFAULT NULL,
  `add_time` datetime DEFAULT NULL,
  `is_answer` int(11) DEFAULT NULL,
  `answer` varchar(100) DEFAULT NULL,
  `answer_user` varchar(30) DEFAULT NULL,
  `answer_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of insect_talk
-- ----------------------------
INSERT INTO `insect_talk` VALUES ('1', '昆虫种类都有那些1', 'zhangsan', '2016-05-22 00:57:56', '1', '很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多', 'wxm', '2016-05-25 00:58:23');
INSERT INTO `insect_talk` VALUES ('2', '昆虫种类都有那些2', 'zhangsan', '2016-05-22 00:57:56', '1', '今天干吗', 'wxm', null);
INSERT INTO `insect_talk` VALUES ('3', '昆虫种类都有那些3', 'zhangsan', '2016-05-22 00:57:56', '0', null, null, null);
INSERT INTO `insect_talk` VALUES ('4', '昆虫种类都有那些4', 'zhangsan', '2016-05-22 00:57:56', '1', '很多很多很多很多很多很多', 'wxm', null);
INSERT INTO `insect_talk` VALUES ('5', '昆虫种类都有那些5', 'zhangsan', '2016-05-22 00:57:56', '0', null, null, null);
INSERT INTO `insect_talk` VALUES ('6', '昆虫种类都有那些6', 'zhangsan', '2016-05-22 00:57:56', '1', '很多很多很多很多很多很多', 'wxm', '2016-05-25 00:58:23');
INSERT INTO `insect_talk` VALUES ('7', '昆虫种类都有那些7', 'zhangsan', '2016-05-22 00:57:56', '1', '很多很多很多很多很多很多', 'wxm', '2016-05-25 00:58:23');
INSERT INTO `insect_talk` VALUES ('8', '昆虫种类都有那些8', 'zhangsan', '2016-05-22 00:57:56', '1', '很多很多很多很多很多很多', 'wxm', '2016-05-25 00:58:23');
INSERT INTO `insect_talk` VALUES ('9', '昆虫种类都有那些9', 'zhangsan', '2016-05-22 00:57:56', '1', '很多很多很多很多很多很多', 'wxm', '2016-05-25 00:58:23');
INSERT INTO `insect_talk` VALUES ('10', '昆虫种类都有那些10', 'zhangsan', '2016-05-22 00:57:56', '1', '很多很多很多很多很多很多', 'wxm', '2016-05-25 00:58:23');
INSERT INTO `insect_talk` VALUES ('11', '昆虫种类都有那些11', 'zhangs', '2016-05-22 00:57:56', '1', 'zdcsecascfvsd', 'zhangsan', null);
INSERT INTO `insect_talk` VALUES ('16', '年发射服务无分啊', 'wxm', '2016-05-27 12:10:40', null, null, null, null);
INSERT INTO `insect_talk` VALUES ('17', 'kjasnfm否vagaa.comdjcn', 'wxm', '2016-05-27 13:25:39', '1', '昆虫分为很多种，分为不同类别', 'zhangsan', null);

-- ----------------------------
-- Table structure for `insect_zhong`
-- ----------------------------
DROP TABLE IF EXISTS `insect_zhong`;
CREATE TABLE `insect_zhong` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `chinese_name` varchar(60) DEFAULT NULL COMMENT '中文名',
  `english_name` varchar(30) DEFAULT NULL COMMENT '英文名',
  `lation_name` varchar(30) DEFAULT NULL COMMENT '丁文拉',
  `alias` varchar(60) DEFAULT NULL COMMENT '别名',
  `category_id` int(11) NOT NULL COMMENT '类目id',
  `is_pest` int(1) DEFAULT '0' COMMENT '否是是害虫',
  `pestcate_id` int(11) DEFAULT NULL COMMENT '害虫类目id',
  `host` varchar(60) DEFAULT NULL COMMENT '寄主',
  `distribution` varchar(1000) DEFAULT NULL COMMENT '描述',
  `gather_place` varchar(60) DEFAULT NULL COMMENT '集地采',
  `features` varchar(5000) DEFAULT NULL COMMENT '特征',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1016 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of insect_zhong
-- ----------------------------
INSERT INTO `insect_zhong` VALUES ('1001', '光肩星天牛', 'Asian longhorn beetle', 'Anoplophora glabripennis（Motsc', '亚洲长角天牛', '44', '1', '1', '柳、杨、榆、苦楝、桑、水杉、槭、桦、元宝枫。', '河北、辽宁、吉林、北京、山东、安徽、江苏、浙江、福建、河南、湖北、湖南、山西、宁夏、陕西、甘肃、四川、天津、上海、江西、内蒙古、云南、贵州、广东、黑龙江、广西；朝鲜、日本。', '秦岭a', '体长20-30mm，宽6.5-11.5mm。形似星天牛，体形较狭，体色黑色中带紫铜色，有时略带绿色。触角比星天牛略长。前胸背板无毛斑，中瘤不显突，侧刺较尖锐。中胸腹板瘤突较不发达。鞘翅基部无颗粒，光滑，翅面刻点较密，有细小皱纹，白色毛斑大小及排列比星天牛更不规则，有时较不清晰。足及腹面黑色，密被蓝白色绒毛。');
INSERT INTO `insect_zhong` VALUES ('1014', '吹绵蚧', 'Icerya purchasi Maskell', 'Icerya purchasi Maskell', '吹绵蚧', '74', '0', null, '柳树、苹果属、桃属、梨属、松属、刺槐、柑橘属、合欢属、杨梅属。', '商洛、安康、汉中', '秦岭', '雌成虫桔红色，椭圆形，长4mm～7mm、宽3mm～3.5mm，腹面扁平，背面隆起，呈龟甲状；体被白而微黄的蜡粉及絮状蜡丝；腹未白色U形卵囊初甚小、随产卵而增大，囊有隆脊线15条。雄成虫体小细长，桔红色，长2.9mm，黑色前翅长而狭、翅展 6mm，口器退化；腹部8节，末节具肉质状突2个、其上各长毛3根；黑色触角10节，各节轮生刚毛。');
INSERT INTO `insect_zhong` VALUES ('1015', '大青叶蝉', 'Cicadella viridis (Linnaeus)', 'Cicadella viridis (Linnaeus)', '大青叶蝉', '76', '0', null, '杨、柳、白蜡、刺槐、苹果、桃、梨、桧柏、梧桐、扁柏等160多种植物', '全省', '秦岭', '雌体长9.4mm～10.1mm，雄体长7.2mm～8.3mm，头部颜面淡褐，两颊微青，颊区近唇基缝处左右各l小黑斑，两单眼间l对黑斑，复眼绿色。前胸背板淡黄绿色，其后半部深青绿色；小盾片淡黄绿色，中央横刻痕短而不达边缘。前翅青蓝绿色，前缘淡白，端部透明，脉青黄色，具淡黑色窄边。后翅烟黑色，半透明。腹部背面蓝黑色，两侧及末节灰黄色。胸、腹面及足橙黄色，跗爪及后足胫节内侧细条纹、刺列的每1刺的基部黑色。');

-- ----------------------------
-- Table structure for `test_tb`
-- ----------------------------
DROP TABLE IF EXISTS `test_tb`;
CREATE TABLE `test_tb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `birthday` varchar(255) DEFAULT NULL,
  `data` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of test_tb
-- ----------------------------
INSERT INTO `test_tb` VALUES ('1', 'test2', '2013-01-21', '2');
INSERT INTO `test_tb` VALUES ('2', 'test2', '2013-01-21', '10');
INSERT INTO `test_tb` VALUES ('3', 'test2', '2013-01-21', '11');
INSERT INTO `test_tb` VALUES ('4', 'test2', '2013-01-21', '12');
INSERT INTO `test_tb` VALUES ('5', 'test2', '2013-01-21', '13');
INSERT INTO `test_tb` VALUES ('6', 'test2', '2013-01-21', '14');
INSERT INTO `test_tb` VALUES ('7', 'test2', '2013-01-21', '15');
INSERT INTO `test_tb` VALUES ('8', 'test2', '2013-01-21', '16');
INSERT INTO `test_tb` VALUES ('9', 'test2', '2013-01-21', '18');
INSERT INTO `test_tb` VALUES ('10', 'test2', '2013-01-21', '19');
INSERT INTO `test_tb` VALUES ('11', 'test2', '2013-01-21', '20');
INSERT INTO `test_tb` VALUES ('12', 'test2', '2013-01-21', '21');
