/*
 Navicat Premium Data Transfer

 Source Server         : 4H8G8M
 Source Server Type    : MySQL
 Source Server Version : 80030 (8.0.30)
 Source Host           : 1.12.55.165:3306
 Source Schema         : person_manage

 Target Server Type    : MySQL
 Target Server Version : 80030 (8.0.30)
 File Encoding         : 65001

 Date: 29/04/2023 17:42:02
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for config
-- ----------------------------
DROP TABLE IF EXISTS `config`;
CREATE TABLE `config`  (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '配置参数名称',
  `value` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '配置参数值',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci COMMENT = '配置文件' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of config
-- ----------------------------
INSERT INTO `config` VALUES (1, 'picture1', 'upload/picture1.jpg');
INSERT INTO `config` VALUES (2, 'picture2', 'upload/picture2.jpg');
INSERT INTO `config` VALUES (3, 'picture3', 'upload/picture3.jpg');
INSERT INTO `config` VALUES (7, 'APIKey', 'ihML0NfEM0jokUAuBD9tbYtW');
INSERT INTO `config` VALUES (8, 'SecretKey', 'WK2bRUFf2uNe3oEoQXULpi8Y37aCvFdD');

-- ----------------------------
-- Table structure for department
-- ----------------------------
DROP TABLE IF EXISTS `department`;
CREATE TABLE `department`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '名称',
  `createtime` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '操作时间',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name_unique`(`name` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '部门表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of department
-- ----------------------------
INSERT INTO `department` VALUES (1, '行政部', '2023-04-28 16:36:05');
INSERT INTO `department` VALUES (2, '财务部', '2023-04-28 17:06:41');
INSERT INTO `department` VALUES (3, '人事部', '2023-04-28 16:47:49');
INSERT INTO `department` VALUES (4, '开发部', '2023-04-28 16:47:49');
INSERT INTO `department` VALUES (5, '市场部', '2023-04-28 17:03:50');
INSERT INTO `department` VALUES (8, '综合作战部', '2023-04-28 21:49:37');
INSERT INTO `department` VALUES (11, '后勤部', '2023-04-29 17:34:19');

-- ----------------------------
-- Table structure for jiangchengjilu
-- ----------------------------
DROP TABLE IF EXISTS `jiangchengjilu`;
CREATE TABLE `jiangchengjilu`  (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `yuangonggonghao` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '员工工号',
  `yuangongxingming` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '员工姓名',
  `bumen` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '部门',
  `gangwei` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '岗位',
  `jiangchengmingcheng` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '奖惩名称',
  `jiangchengleixing` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '奖惩类型',
  `tupian` longtext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL COMMENT '图片',
  `riqi` date NULL DEFAULT NULL COMMENT '日期',
  `jiangchengyuanyin` longtext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL COMMENT '奖惩原因',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 59 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci COMMENT = '奖惩记录' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of jiangchengjilu
-- ----------------------------
INSERT INTO `jiangchengjilu` VALUES (51, '2023-03-10 10:23:06', '员工工号1', '员工姓名1', '部门1', '岗位1', '奖惩名称1', '奖励', 'upload/jiangchengjilu_tupian1.jpg,upload/jiangchengjilu_tupian2.jpg,upload/jiangchengjilu_tupian3.jpg', '2023-03-10', '奖惩原因1');
INSERT INTO `jiangchengjilu` VALUES (52, '2023-03-10 10:23:06', '员工工号2', '员工姓名2', '部门2', '岗位2', '奖惩名称2', '奖励', 'upload/jiangchengjilu_tupian2.jpg,upload/jiangchengjilu_tupian3.jpg,upload/jiangchengjilu_tupian4.jpg', '2023-03-10', '奖惩原因2');
INSERT INTO `jiangchengjilu` VALUES (53, '2023-03-10 10:23:06', '员工工号3', '员工姓名3', '部门3', '岗位3', '奖惩名称3', '奖励', 'upload/jiangchengjilu_tupian3.jpg,upload/jiangchengjilu_tupian4.jpg,upload/jiangchengjilu_tupian5.jpg', '2023-03-10', '奖惩原因3');
INSERT INTO `jiangchengjilu` VALUES (54, '2023-03-10 10:23:06', '员工工号4', '员工姓名4', '部门4', '岗位4', '奖惩名称4', '奖励', 'upload/jiangchengjilu_tupian4.jpg,upload/jiangchengjilu_tupian5.jpg,upload/jiangchengjilu_tupian6.jpg', '2023-03-10', '奖惩原因4');
INSERT INTO `jiangchengjilu` VALUES (55, '2023-03-10 10:23:06', '员工工号5', '员工姓名5', '部门5', '岗位5', '奖惩名称5', '奖励', 'upload/jiangchengjilu_tupian5.jpg,upload/jiangchengjilu_tupian6.jpg,upload/jiangchengjilu_tupian7.jpg', '2023-03-10', '奖惩原因5');
INSERT INTO `jiangchengjilu` VALUES (56, '2023-03-10 10:23:06', '员工工号6', '员工姓名6', '部门6', '岗位6', '奖惩名称6', '奖励', 'upload/jiangchengjilu_tupian6.jpg,upload/jiangchengjilu_tupian7.jpg,upload/jiangchengjilu_tupian8.jpg', '2023-03-10', '奖惩原因6');
INSERT INTO `jiangchengjilu` VALUES (57, '2023-03-10 10:23:06', '员工工号7', '员工姓名7', '部门7', '岗位7', '奖惩名称7', '奖励', 'upload/jiangchengjilu_tupian7.jpg,upload/jiangchengjilu_tupian8.jpg,upload/jiangchengjilu_tupian9.jpg', '2023-03-10', '奖惩原因7');
INSERT INTO `jiangchengjilu` VALUES (58, '2023-03-10 10:23:06', '员工工号8', '员工姓名8', '部门8', '岗位8', '奖惩名称8', '奖励', 'upload/jiangchengjilu_tupian8.jpg,upload/jiangchengjilu_tupian9.jpg,upload/jiangchengjilu_tupian10.jpg', '2023-03-10', '奖惩原因8');

-- ----------------------------
-- Table structure for luyongxinxi
-- ----------------------------
DROP TABLE IF EXISTS `luyongxinxi`;
CREATE TABLE `luyongxinxi`  (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `luyongbianhao` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '录用编号',
  `qiuzhizhezhanghao` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '求职者账号',
  `qiuzhizhexingming` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '求职者姓名',
  `zhuanye` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '专业',
  `xueli` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '学历',
  `lianxidianhua` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '联系电话',
  `zhiweimingcheng` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '职位名称',
  `luyongtupian` longtext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL COMMENT '录用图片',
  `jiuyeshijian` datetime NULL DEFAULT NULL COMMENT '就业时间',
  `tongzhiriqi` date NULL DEFAULT NULL COMMENT '通知日期',
  `luyongbeizhu` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '录用备注',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `luyongbianhao`(`luyongbianhao` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 129 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci COMMENT = '录用信息' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of luyongxinxi
-- ----------------------------
INSERT INTO `luyongxinxi` VALUES (121, '2023-03-10 10:23:06', '1111111111', '求职者账号1', '求职者姓名1', '专业1', '学历1', '13823888881', '职位名称1', 'upload/luyongxinxi_luyongtupian1.jpg,upload/luyongxinxi_luyongtupian2.jpg,upload/luyongxinxi_luyongtupian3.jpg', '2023-03-10 18:23:06', '2023-03-10', '录用备注1');
INSERT INTO `luyongxinxi` VALUES (122, '2023-03-10 10:23:06', '2222222222', '求职者账号2', '求职者姓名2', '专业2', '学历2', '13823888882', '职位名称2', 'upload/luyongxinxi_luyongtupian2.jpg,upload/luyongxinxi_luyongtupian3.jpg,upload/luyongxinxi_luyongtupian4.jpg', '2023-03-10 18:23:06', '2023-03-10', '录用备注2');
INSERT INTO `luyongxinxi` VALUES (123, '2023-03-10 10:23:06', '3333333333', '求职者账号3', '求职者姓名3', '专业3', '学历3', '13823888883', '职位名称3', 'upload/luyongxinxi_luyongtupian3.jpg,upload/luyongxinxi_luyongtupian4.jpg,upload/luyongxinxi_luyongtupian5.jpg', '2023-03-10 18:23:06', '2023-03-10', '录用备注3');
INSERT INTO `luyongxinxi` VALUES (124, '2023-03-10 10:23:06', '4444444444', '求职者账号4', '求职者姓名4', '专业4', '学历4', '13823888884', '职位名称4', 'upload/luyongxinxi_luyongtupian4.jpg,upload/luyongxinxi_luyongtupian5.jpg,upload/luyongxinxi_luyongtupian6.jpg', '2023-03-10 18:23:06', '2023-03-10', '录用备注4');
INSERT INTO `luyongxinxi` VALUES (125, '2023-03-10 10:23:06', '5555555555', '求职者账号5', '求职者姓名5', '专业5', '学历5', '13823888885', '职位名称5', 'upload/luyongxinxi_luyongtupian5.jpg,upload/luyongxinxi_luyongtupian6.jpg,upload/luyongxinxi_luyongtupian7.jpg', '2023-03-10 18:23:06', '2023-03-10', '录用备注5');
INSERT INTO `luyongxinxi` VALUES (126, '2023-03-10 10:23:06', '6666666666', '求职者账号6', '求职者姓名6', '专业6', '学历6', '13823888886', '职位名称6', 'upload/luyongxinxi_luyongtupian6.jpg,upload/luyongxinxi_luyongtupian7.jpg,upload/luyongxinxi_luyongtupian8.jpg', '2023-03-10 18:23:06', '2023-03-10', '录用备注6');
INSERT INTO `luyongxinxi` VALUES (127, '2023-03-10 10:23:06', '7777777777', '求职者账号7', '求职者姓名7', '专业7', '学历7', '13823888887', '职位名称7', 'upload/luyongxinxi_luyongtupian7.jpg,upload/luyongxinxi_luyongtupian8.jpg,upload/luyongxinxi_luyongtupian9.jpg', '2023-03-10 18:23:06', '2023-03-10', '录用备注7');
INSERT INTO `luyongxinxi` VALUES (128, '2023-03-10 10:23:06', '8888888888', '求职者账号8', '求职者姓名8', '专业8', '学历8', '13823888888', '职位名称8', 'upload/luyongxinxi_luyongtupian8.jpg,upload/luyongxinxi_luyongtupian9.jpg,upload/luyongxinxi_luyongtupian10.jpg', '2023-03-10 18:23:06', '2023-03-10', '录用备注8');

-- ----------------------------
-- Table structure for mianshiyaoqing
-- ----------------------------
DROP TABLE IF EXISTS `mianshiyaoqing`;
CREATE TABLE `mianshiyaoqing`  (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `qiuzhizhezhanghao` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '求职者账号',
  `qiuzhizhexingming` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '求职者姓名',
  `lianxidianhua` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '联系电话',
  `touxiang` longtext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL COMMENT '头像',
  `yaoqingbiaoti` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '邀请标题',
  `mianshididian` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '面试地点',
  `mianshishijian` datetime NULL DEFAULT NULL COMMENT '面试时间',
  `yaoqingriqi` date NULL DEFAULT NULL COMMENT '邀请日期',
  `yaoqingneirong` longtext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '邀请内容',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 119 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci COMMENT = '面试邀请' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of mianshiyaoqing
-- ----------------------------
INSERT INTO `mianshiyaoqing` VALUES (111, '2023-03-10 10:23:06', '求职者账号1', '求职者姓名1', '联系电话1', 'upload/mianshiyaoqing_touxiang1.jpg,upload/mianshiyaoqing_touxiang2.jpg,upload/mianshiyaoqing_touxiang3.jpg', '邀请标题1', '面试地点1', '2023-03-10 18:23:06', '2023-03-10', '邀请内容1');
INSERT INTO `mianshiyaoqing` VALUES (112, '2023-03-10 10:23:06', '求职者账号2', '求职者姓名2', '联系电话2', 'upload/mianshiyaoqing_touxiang2.jpg,upload/mianshiyaoqing_touxiang3.jpg,upload/mianshiyaoqing_touxiang4.jpg', '邀请标题2', '面试地点2', '2023-03-10 18:23:06', '2023-03-10', '邀请内容2');
INSERT INTO `mianshiyaoqing` VALUES (113, '2023-03-10 10:23:06', '求职者账号3', '求职者姓名3', '联系电话3', 'upload/mianshiyaoqing_touxiang3.jpg,upload/mianshiyaoqing_touxiang4.jpg,upload/mianshiyaoqing_touxiang5.jpg', '邀请标题3', '面试地点3', '2023-03-10 18:23:06', '2023-03-10', '邀请内容3');
INSERT INTO `mianshiyaoqing` VALUES (114, '2023-03-10 10:23:06', '求职者账号4', '求职者姓名4', '联系电话4', 'upload/mianshiyaoqing_touxiang4.jpg,upload/mianshiyaoqing_touxiang5.jpg,upload/mianshiyaoqing_touxiang6.jpg', '邀请标题4', '面试地点4', '2023-03-10 18:23:06', '2023-03-10', '邀请内容4');
INSERT INTO `mianshiyaoqing` VALUES (115, '2023-03-10 10:23:06', '求职者账号5', '求职者姓名5', '联系电话5', 'upload/mianshiyaoqing_touxiang5.jpg,upload/mianshiyaoqing_touxiang6.jpg,upload/mianshiyaoqing_touxiang7.jpg', '邀请标题5', '面试地点5', '2023-03-10 18:23:06', '2023-03-10', '邀请内容5');
INSERT INTO `mianshiyaoqing` VALUES (116, '2023-03-10 10:23:06', '求职者账号6', '求职者姓名6', '联系电话6', 'upload/mianshiyaoqing_touxiang6.jpg,upload/mianshiyaoqing_touxiang7.jpg,upload/mianshiyaoqing_touxiang8.jpg', '邀请标题6', '面试地点6', '2023-03-10 18:23:06', '2023-03-10', '邀请内容6');
INSERT INTO `mianshiyaoqing` VALUES (117, '2023-03-10 10:23:06', '求职者账号7', '求职者姓名7', '联系电话7', 'upload/mianshiyaoqing_touxiang7.jpg,upload/mianshiyaoqing_touxiang8.jpg,upload/mianshiyaoqing_touxiang9.jpg', '邀请标题7', '面试地点7', '2023-03-10 18:23:06', '2023-03-10', '邀请内容7');
INSERT INTO `mianshiyaoqing` VALUES (118, '2023-03-10 10:23:06', '求职者账号8', '求职者姓名8', '联系电话8', 'upload/mianshiyaoqing_touxiang8.jpg,upload/mianshiyaoqing_touxiang9.jpg,upload/mianshiyaoqing_touxiang10.jpg', '邀请标题8', '面试地点8', '2023-03-10 18:23:06', '2023-03-10', '邀请内容8');

-- ----------------------------
-- Table structure for news
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news`  (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `title` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '标题',
  `introduction` longtext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL COMMENT '简介',
  `picture` longtext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '图片',
  `content` longtext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '内容',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 139 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci COMMENT = '公告信息' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of news
-- ----------------------------
INSERT INTO `news` VALUES (131, '2023-03-10 10:23:06', '有梦想，就要努力去实现', '不管你想要怎样的生活，你都要去努力争取，不多尝试一些事情怎么知道自己适合什么、不适合什么呢?你说你喜欢读书，让我给你列书单，你还问我哪里有那么多时间看书;你说自己梦想的职业是广告文案，问我如何成为一个文案，应该具备哪些素质;你说你计划晨跑，但总是因为学习、工作辛苦或者身体不舒服第二天起不了床;你说你一直梦想一个人去长途旅行，但是没钱，父母觉得危险。', 'upload/news_picture1.jpg', '<p>不管你想要怎样的生活，你都要去努力争取，不多尝试一些事情怎么知道自己适合什么、不适合什么呢?</p><p>你说你喜欢读书，让我给你列书单，你还问我哪里有那么多时间看书;你说自己梦想的职业是广告文案，问我如何成为一个文案，应该具备哪些素质;你说你计划晨跑，但总是因为学习、工作辛苦或者身体不舒服第二天起不了床;你说你一直梦想一个人去长途旅行，但是没钱，父母觉得危险。其实，我已经厌倦了你这样说说而已的把戏，我觉得就算我告诉你如何去做，你也不会照做，因为你根本什么都不做。</p><p>真正有行动力的人不需要别人告诉他如何做，因为他已经在做了。就算碰到问题，他也会自己想办法，自己动手去解决或者主动寻求可以帮助他的人，而不是等着别人为自己解决问题。</p><p>首先要学习独立思考。花一点时间想一下自己喜欢什么，梦想是什么，不要别人说想环游世界，你就说你的梦想是环游世界。</p><p>很多人说现实束缚了自己，其实在这个世界上，我们一直都可以有很多选择，生活的决定权也—直都在自己手上，只是我们缺乏行动力而已。</p><p>如果你觉得安于现状是你想要的，那选择安于现状就会让你幸福和满足;如果你不甘平庸，选择一条改变、进取和奋斗的道路，在这个追求的过程中，你也一样会感到快乐。所谓的成功，即是按照自己想要的生活方式生活。最糟糕的状态，莫过于当你想要选择一条不甘平庸、改变、进取和奋斗的道路时，却以一种安于现状的方式生活，最后抱怨自己没有得到想要的人生。</p><p>因为喜欢，你不是在苦苦坚持，也因为喜欢，你愿意投入时间、精力，长久以往，获得成功就是自然而然的事情。</p>');
INSERT INTO `news` VALUES (132, '2023-03-10 10:23:06', '又是一年毕业季', '又是一年毕业季，感慨万千，还记的自己刚进学校那时候的情景，我拖着沉重的行李箱站在偌大的教学楼前面，感叹自己未来的日子即将在这个陌生的校园里度过，而如今斗转星移，浮光掠影，弹指之间，那些青葱岁月如同白驹过隙般悄然从指缝溜走。过去的种种在胸口交集纠结，像打翻的五味瓶，甜蜜，酸楚，苦涩，一并涌上心头。', 'upload/news_picture2.jpg', '<p>又是一年毕业季，感慨万千，还记的自己刚进学校那时候的情景，我拖着沉重的行李箱站在偌大的教学楼前面，感叹自己未来的日子即将在这个陌生的校园里度过，而如今斗转星移，浮光掠影，弹指之间，那些青葱岁月如同白驹过隙般悄然从指缝溜走。</p><p>过去的种种在胸口交集纠结，像打翻的五味瓶，甜蜜，酸楚，苦涩，一并涌上心头。一直都是晚会的忠实参与者，无论是台前还是幕后，忽然间，角色转变，那种感觉确实难以用语言表达。</p><p>	过去的三年，总是默默地期盼着这个好雨时节，因为这时候，会有灿烂的阳光，会有满目的百花争艳，会有香甜的冰激凌，这是个毕业的季节，当时不经世事的我们会殷切地期待学校那一大堆的活动，期待穿上绚丽的演出服或者礼仪服，站在大礼堂镁光灯下尽情挥洒我们的澎拜的激情。</p><p>百感交集，隔岸观火与身临其境的感觉竟是如此不同。从来没想过一场晚会送走的是我们自己的时候会是怎样的感情，毕业就真的意味着结束吗?倔强的我们不愿意承认，谢谢学弟学妹们慷慨的将这次的主题定为“我们在这里”。我知道，这可能是他们对我们这些过来人的尊敬和施舍。</p><p>没有为这场晚会排练、奔波，没有为班级、学生会、文学院出点力，还真有点不习惯，百般无奈中，用“工作忙”个万能的借口来搪塞自己，欺骗别人。其实自己心里明白，那只是在逃避，只是不愿面对繁华落幕后的萧条和落寞。大四了，大家各奔东西，想凑齐班上的人真的是难上加难，敏燕从越南回来，刚落地就匆匆回了学校，那么恋家的人也启程回来了，睿睿学姐也是从家赶来跟我们团圆。大家—如既往的寒暄、打趣、调侃对方，似乎一切又回到了当初的单纯美好。</p><p>看着舞台上活泼可爱的学弟学妹们，如同一群机灵的小精灵，清澈的眼神，稚嫩的肢体，轻快地步伐，用他们那热情洋溢的舞姿渲染着在场的每一个人，我知道，我不应该羡慕嫉妒他们，不应该顾自怜惜逝去的青春，不应该感叹夕阳无限好，曾经，我们也拥有过，曾经，我们也年轻过，曾经，我们也灿烂过。我深深地告诉自己，人生的每个阶段都是美的，年轻有年轻的活力，成熟也有成熟的魅力。多—份稳重、淡然、优雅，也是漫漫时光掠影遗留下的.珍贵赏赐。</p>');
INSERT INTO `news` VALUES (133, '2023-03-10 10:23:06', '挫折路上，坚持常在心间', '回头看看，你会不会发现，曾经的你在这里摔倒过;回头看看，你是否发现，一次次地重复着，却从没爬起过。而如今，让我们把视线转向前方，那一道道金色的弧线，是流星飞逝的痕迹，或是成功运行的轨道。今天的你，是否要扬帆起航，让幸福来敲门?清晨的太阳撒向大地，神奇的宇宙赋予它神奇的色彩，大自然沐浴着春光，世界因太阳的照射而精彩，林中百鸟啾啾，河水轻轻流淌，汇成清宁的山间小调。', 'upload/news_picture3.jpg', '<p>回头看看，你会不会发现，曾经的你在这里摔倒过;回头看看，你是否发现，一次次地重复着，却从没爬起过。而如今，让我们把视线转向前方，那一道道金色的弧线，是流星飞逝的痕迹，或是成功运行的轨道。今天的你，是否要扬帆起航，让幸福来敲门?</p><p>清晨的太阳撒向大地，神奇的宇宙赋予它神奇的色彩，大自然沐浴着春光，世界因太阳的照射而精彩，林中百鸟啾啾，河水轻轻流淌，汇成清宁的山间小调。</p><p>是的，面对道途上那无情的嘲讽，面对步伐中那重复的摔跤，面对激流与硬石之间猛烈的碰撞，我们必须选择那富于阴雨，却最终见到彩虹的荆棘路。也许，经历了那暴风雨的洗礼，我们便会变得自信，幸福也随之而来。</p><p>司马迁屡遭羞辱，却依然在狱中撰写《史记》，作为一名史学家，不因王权而极度赞赏，也不因卑微而极度批判，然而他在坚持自己操守的同时，却依然要受统治阶级的阻碍，他似乎无权选择自己的本职。但是，他不顾于此，只是在面对道途的阻隔之时，他依然选择了走下去的信念。终于一部开山巨作《史记》诞生，为后人留下一份馈赠，也许在他完成毕生的杰作之时，他微微地笑了，没有什么比梦想实现更快乐的了......</p><p>	或许正如“长风破浪会有时，直挂云帆济沧海”一般，欣欣然地走向看似深渊的崎岖路，而在一番耕耘之后，便会发现这里另有一番天地。也许这就是困难与快乐的交融。</p><p>也许在形形色色的社会中，我们常能看到一份坚持，一份自信，但这里却还有一类人。这类人在暴风雨来临之际，只会闪躲，从未懂得这也是一种历炼，这何尝不是一份快乐。在阴暗的角落里，总是独自在哭，带着伤愁，看不到一点希望。</p><p>我们不能堕落于此，而要像海燕那般，在苍茫的大海上，高傲地飞翔，任何事物都无法阻挡，任何事都是幸福快乐的。</p>');
INSERT INTO `news` VALUES (134, '2023-03-10 10:23:06', '挫折是另一个生命的开端', '当遇到挫折或失败，你是看见失败还是看见机会?挫折是我们每个人成长的必经之路，它不是你想有就有，想没有就没有的。有句名言说的好，如果你想一生摆脱苦难，你就得是神或者是死尸。这句话形象地说明了挫折是伴随着人生的，是谁都逃不掉的。', 'upload/news_picture4.jpg', '<p>当遇到挫折或失败，你是看见失败还是看见机会?</p><p>挫折是我们每个人成长的必经之路，它不是你想有就有，想没有就没有的。有句名言说的好，如果你想一生摆脱苦难，你就得是神或者是死尸。这句话形象地说明了挫折是伴随着人生的，是谁都逃不掉的。</p><p>人生在世，从古到今，不分天子平民，机遇虽有不同，但总不免有身陷困境或遭遇难题之处，这时候唯有通权达变，才能使人转危为安，甚至反败为胜。</p><p>大部分的人，一生当中，最痛苦的经验是失去所爱的人，其次是丢掉一份工作。其实，经得起考验的人，就算是被开除也不会惊慌，要学会面对。</p><p>	“塞翁失马，焉知非福。”人生的道路，并不是每一步都迈向成功，这就是追求的意义。我们还要认识到一点，挫折作为一种情绪状态和一种个人体验，各人的耐受性是大不相同的，有的人经历了一次次挫折，就能够坚忍不拔，百折不挠;有的人稍遇挫折便意志消沉，一蹶不振。所以，挫折感是一种主观感受，因为人的目的和需要不同，成功标准不同，所以同一种活动对于不同的人可能会造成不同的挫折感受。</p><p>凡事皆以平常心来看待，对于生命顺逆不要太执著。能够“破我执”是很高层的人生境界。</p><p>人事的艰难就是一种考验。就像—支剑要有磨刀来磨，剑才会利:一块璞玉要有粗石来磨，才会发出耀眼的光芒。我们能够做到的，只是如何减少、避免那些由于自身的原因所造成的挫折，而在遇到痛苦和挫折之后，则力求化解痛苦，争取幸福。我们要知道，痛苦和挫折是双重性的，它既是我们人生中难以完全避免的，也是我们在争取成功时，不可缺少的一种动力。因为我认为，推动我们奋斗的力量，不仅仅是对成功的渴望，还有为摆脱痛苦和挫折而进行的奋斗。</p>');
INSERT INTO `news` VALUES (135, '2023-03-10 10:23:06', '你要去相信，没有到不了的明天', '有梦想就去努力，因为在这一辈子里面，现在不去勇敢的努力，也许就再也没有机会了。你要去相信，一定要相信，没有到不了的明天。不要被命运打败，让自己变得更强大。不管你现在是一个人走在异乡的街道上始终没有找到一丝归属感，还是你在跟朋友们一起吃饭开心址笑着的时候闪过一丝落寞。', 'upload/news_picture5.jpg', '<p>有梦想就去努力，因为在这一辈子里面，现在不去勇敢的努力，也许就再也没有机会了。你要去相信，一定要相信，没有到不了的明天。不要被命运打败，让自己变得更强大。</p><p>不管你现在是一个人走在异乡的街道上始终没有找到一丝归属感，还是你在跟朋友们一起吃饭开心址笑着的时候闪过一丝落寞。</p><p>	不管你现在是在图书馆里背着怎么也看不进去的英语单词，还是你现在迷茫地看不清未来的方向不知道要往哪走。</p><p>不管你现在是在努力着去实现梦想却没能拉近与梦想的距离，还是你已经慢慢地找不到自己的梦想了。</p><p>你都要去相信，没有到不了的明天。</p><p>	有的时候你的梦想太大，别人说你的梦想根本不可能实现;有的时候你的梦想又太小，又有人说你胸无大志;有的时候你对死党说着将来要去环游世界的梦想，却换来他的不屑一顾，于是你再也不提自己的梦想;有的时候你突然说起将来要开个小店的愿望，却发现你讲述的那个人，并没有听到你在说什么。</p><p>不过又能怎么样呢，未来始终是自己的，梦想始终是自己的，没有人会来帮你实现它。</p><p>也许很多时候我们只是需要朋友的一句鼓励，一句安慰，却也得不到。但是相信我，世界上还有很多人，只是想要和你说说话。</p><p>因为我们都一样。一样的被人说成固执，一样的在追逐他们眼里根本不在意的东西。</p><p>所以，又有什么关系呢，别人始终不是你、不能懂你的心情，你又何必多去解释呢。这个世界会来阻止你，困难也会接踵而至，其实真正关键的只有自己，有没有那个倔强。</p><p>这个世界上没有不带伤的人，真正能治愈自己的，只有自己。</p>');
INSERT INTO `news` VALUES (136, '2023-03-10 10:23:06', '离开是一种痛苦，是一种勇气，但同样也是一个考验，是一个新的开端', '无穷无尽是离愁，天涯海角遍寻思。当离别在即之时，当面对着相濡以沫兄弟般的朋友时，当面对着经历了四年的磨合而形成的真挚友谊之时，我内心激动无语，说一声再见，道一声珍重都很难出口。回想自己四年大学的风风雨雨，回想我们曾经共同经历的岁月流年，我感谢大家的相扶相依，感谢朋友们的莫大支持与帮助。虽然舍不得，但离别的脚步却不因我们的挚情而停滞。', 'upload/news_picture6.jpg', '<p>无穷无尽是离愁，天涯海角遍寻思。当离别在即之时，当面对着相濡以沫兄弟般的朋友时，当面对着经历了四年的磨合而形成的真挚友谊之时，我内心激动无语，说一声再见，道一声珍重都很难出口。回想自己四年大学的风风雨雨，回想我们曾经共同经历的岁月流年，我感谢大家的相扶相依，感谢朋友们的莫大支持与帮助。虽然舍不得，但离别的脚步却不因我们的挚情而停滞。离别的确是一种痛苦，但同样也是我们走入社会，走向新环境、新领域的一个开端，希望大家在以后新的工作岗位上能够确定自己的新起点，坚持不懈，向着更新、更高的目标前进，因为人生最美好的东西永远都在最前方!</p><p>忆往昔峥嵘岁月，看今朝潮起潮落，望未来任重而道远。作为新时代的我们，就应在失败时，能拼搏奋起，去谱写人生的辉煌。在成功时，亦能居安思危，不沉湎于一时的荣耀、鲜花和掌声中，时时刻刻怀着一颗积极寻找自己新的奶酪的心，处变不惊、成败不渝，始终踏着自己坚实的步伐，从零开始，不断向前迈进，这样才能在这风起云涌、变幻莫测的社会大潮中成为真正的弄潮儿!</p>');
INSERT INTO `news` VALUES (137, '2023-03-10 10:23:06', 'Leave未必是一种痛苦', '无穷无尽是离愁，天涯海角遍寻思。当离别在即之时，当面对着相濡以沫兄弟般的朋友时，当面对着经历了四年的磨合而形成的真挚友谊之时，我内心激动无语，说一声再见，道一声珍重都很难出口。回想自己四年大学的风风雨雨，回想我们曾经共同经历的岁月流年，我感谢大家的相扶相依，感谢朋友们的莫大支持与帮助。虽然舍不得，但离别的脚步却不因我们的挚情而停滞。', 'upload/news_picture7.jpg', '<p>无穷无尽是离愁，天涯海角遍寻思。当离别在即之时，当面对着相濡以沫兄弟般的朋友时，当面对着经历了四年的磨合而形成的真挚友谊之时，我内心激动无语，说一声再见，道一声珍重都很难出口。回想自己四年大学的风风雨雨，回想我们曾经共同经历的岁月流年，我感谢大家的相扶相依，感谢朋友们的莫大支持与帮助。虽然舍不得，但离别的脚步却不因我们的挚情而停滞。离别的确是一种痛苦，但同样也是我们走入社会，走向新环境、新领域的一个开端，希望大家在以后新的工作岗位上能够确定自己的新起点，坚持不懈，向着更新、更高的目标前进，因为人生最美好的东西永远都在最前方!</p><p>忆往昔峥嵘岁月，看今朝潮起潮落，望未来任重而道远。作为新时代的我们，就应在失败时，能拼搏奋起，去谱写人生的辉煌。在成功时，亦能居安思危，不沉湎于一时的荣耀、鲜花和掌声中，时时刻刻怀着一颗积极寻找自己新的奶酪的心，处变不惊、成败不渝，始终踏着自己坚实的步伐，从零开始，不断向前迈进，这样才能在这风起云涌、变幻莫测的社会大潮中成为真正的弄潮儿!</p>');
INSERT INTO `news` VALUES (138, '2023-03-10 10:23:06', '坚持才会成功', '回头看看，你会不会发现，曾经的你在这里摔倒过;回头看看，你是否发现，一次次地重复着，却从没爬起过。而如今，让我们把视线转向前方，那一道道金色的弧线，是流星飞逝的痕迹，或是成功运行的轨道。今天的你，是否要扬帆起航，让幸福来敲门?清晨的太阳撒向大地，神奇的宇宙赋予它神奇的色彩，大自然沐浴着春光，世界因太阳的照射而精彩，林中百鸟啾啾，河水轻轻流淌，汇成清宁的山间小调。', 'upload/news_picture8.jpg', '<p>回头看看，你会不会发现，曾经的你在这里摔倒过;回头看看，你是否发现，一次次地重复着，却从没爬起过。而如今，让我们把视线转向前方，那一道道金色的弧线，是流星飞逝的痕迹，或是成功运行的轨道。今天的你，是否要扬帆起航，让幸福来敲门?</p><p>清晨的太阳撒向大地，神奇的宇宙赋予它神奇的色彩，大自然沐浴着春光，世界因太阳的照射而精彩，林中百鸟啾啾，河水轻轻流淌，汇成清宁的山间小调。</p><p>是的，面对道途上那无情的嘲讽，面对步伐中那重复的摔跤，面对激流与硬石之间猛烈的碰撞，我们必须选择那富于阴雨，却最终见到彩虹的荆棘路。也许，经历了那暴风雨的洗礼，我们便会变得自信，幸福也随之而来。</p><p>司马迁屡遭羞辱，却依然在狱中撰写《史记》，作为一名史学家，不因王权而极度赞赏，也不因卑微而极度批判，然而他在坚持自己操守的同时，却依然要受统治阶级的阻碍，他似乎无权选择自己的本职。但是，他不顾于此，只是在面对道途的阻隔之时，他依然选择了走下去的信念。终于一部开山巨作《史记》诞生，为后人留下一份馈赠，也许在他完成毕生的杰作之时，他微微地笑了，没有什么比梦想实现更快乐的了......</p><p>	或许正如“长风破浪会有时，直挂云帆济沧海”一般，欣欣然地走向看似深渊的崎岖路，而在一番耕耘之后，便会发现这里另有一番天地。也许这就是困难与快乐的交融。</p><p>也许在形形色色的社会中，我们常能看到一份坚持，一份自信，但这里却还有一类人。这类人在暴风雨来临之际，只会闪躲，从未懂得这也是一种历炼，这何尝不是一份快乐。在阴暗的角落里，总是独自在哭，带着伤愁，看不到一点希望。</p><p>我们不能堕落于此，而要像海燕那般，在苍茫的大海上，高傲地飞翔，任何事物都无法阻挡，任何事都是幸福快乐的。</p>');

-- ----------------------------
-- Table structure for peixunxuexi
-- ----------------------------
DROP TABLE IF EXISTS `peixunxuexi`;
CREATE TABLE `peixunxuexi`  (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `yuangonggonghao` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '员工工号',
  `yuangongxingming` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '员工姓名',
  `bumen` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '部门',
  `gangwei` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '岗位',
  `shoujihao` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '手机号',
  `tupian` longtext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL COMMENT '图片',
  `beizhu` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '备注',
  `peixunriqi` date NOT NULL COMMENT '培训日期',
  `peixuntianshu` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '培训天数',
  `peixunneirong` longtext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '培训内容',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 49 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci COMMENT = '培训学习' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of peixunxuexi
-- ----------------------------
INSERT INTO `peixunxuexi` VALUES (41, '2023-03-10 10:23:06', '员工工号1', '员工姓名1', '部门1', '岗位1', '手机号1', 'upload/peixunxuexi_tupian1.jpg,upload/peixunxuexi_tupian2.jpg,upload/peixunxuexi_tupian3.jpg', '备注1', '2023-03-10', '培训天数1', '培训内容1');
INSERT INTO `peixunxuexi` VALUES (42, '2023-03-10 10:23:06', '员工工号2', '员工姓名2', '部门2', '岗位2', '手机号2', 'upload/peixunxuexi_tupian2.jpg,upload/peixunxuexi_tupian3.jpg,upload/peixunxuexi_tupian4.jpg', '备注2', '2023-03-10', '培训天数2', '培训内容2');
INSERT INTO `peixunxuexi` VALUES (43, '2023-03-10 10:23:06', '员工工号3', '员工姓名3', '部门3', '岗位3', '手机号3', 'upload/peixunxuexi_tupian3.jpg,upload/peixunxuexi_tupian4.jpg,upload/peixunxuexi_tupian5.jpg', '备注3', '2023-03-10', '培训天数3', '培训内容3');
INSERT INTO `peixunxuexi` VALUES (44, '2023-03-10 10:23:06', '员工工号4', '员工姓名4', '部门4', '岗位4', '手机号4', 'upload/peixunxuexi_tupian4.jpg,upload/peixunxuexi_tupian5.jpg,upload/peixunxuexi_tupian6.jpg', '备注4', '2023-03-10', '培训天数4', '培训内容4');
INSERT INTO `peixunxuexi` VALUES (45, '2023-03-10 10:23:06', '员工工号5', '员工姓名5', '部门5', '岗位5', '手机号5', 'upload/peixunxuexi_tupian5.jpg,upload/peixunxuexi_tupian6.jpg,upload/peixunxuexi_tupian7.jpg', '备注5', '2023-03-10', '培训天数5', '培训内容5');
INSERT INTO `peixunxuexi` VALUES (46, '2023-03-10 10:23:06', '员工工号6', '员工姓名6', '部门6', '岗位6', '手机号6', 'upload/peixunxuexi_tupian6.jpg,upload/peixunxuexi_tupian7.jpg,upload/peixunxuexi_tupian8.jpg', '备注6', '2023-03-10', '培训天数6', '培训内容6');
INSERT INTO `peixunxuexi` VALUES (47, '2023-03-10 10:23:06', '员工工号7', '员工姓名7', '部门7', '岗位7', '手机号7', 'upload/peixunxuexi_tupian7.jpg,upload/peixunxuexi_tupian8.jpg,upload/peixunxuexi_tupian9.jpg', '备注7', '2023-03-10', '培训天数7', '培训内容7');
INSERT INTO `peixunxuexi` VALUES (48, '2023-03-10 10:23:06', '员工工号8', '员工姓名8', '部门8', '岗位8', '手机号8', 'upload/peixunxuexi_tupian8.jpg,upload/peixunxuexi_tupian9.jpg,upload/peixunxuexi_tupian10.jpg', '备注8', '2023-03-10', '培训天数8', '培训内容8');

-- ----------------------------
-- Table structure for position
-- ----------------------------
DROP TABLE IF EXISTS `position`;
CREATE TABLE `position`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '名称',
  `departmentid` int NOT NULL COMMENT '部门id',
  `createtime` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '操作时间',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name_unique`(`name` ASC) USING BTREE,
  INDEX `departmentId`(`departmentid` ASC) USING BTREE,
  CONSTRAINT `departmentId` FOREIGN KEY (`departmentid`) REFERENCES `department` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '岗位表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of position
-- ----------------------------
INSERT INTO `position` VALUES (1, '市场主机', 8, '2023-04-28 17:08:34');
INSERT INTO `position` VALUES (2, 'Java开发工程师', 4, '2023-04-28 17:05:04');
INSERT INTO `position` VALUES (4, '岗位', 8, '2023-04-28 23:29:27');
INSERT INTO `position` VALUES (5, '人事专员', 8, '2023-04-28 23:30:07');

-- ----------------------------
-- Table structure for qiuzhijianli
-- ----------------------------
DROP TABLE IF EXISTS `qiuzhijianli`;
CREATE TABLE `qiuzhijianli`  (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `qiuzhizhezhanghao` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '求职者账号',
  `qiuzhizhexingming` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '求职者姓名',
  `xingbie` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '性别',
  `nianling` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '年龄',
  `zhuanye` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '专业',
  `xueli` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '学历',
  `lianxidianhua` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '联系电话',
  `touxiang` longtext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL COMMENT '头像',
  `qiuzhiriqi` date NULL DEFAULT NULL COMMENT '求职日期',
  `qiuzhigangwei` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '求职岗位',
  `qiwangxinzi` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '期望薪资',
  `huojiangzhengshu` longtext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL COMMENT '获奖证书',
  `jiaoyubeijing` longtext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL COMMENT '教育背景',
  `sfsh` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT '待审核' COMMENT '是否审核',
  `shhf` longtext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL COMMENT '审核回复',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 109 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci COMMENT = '求职简历' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of qiuzhijianli
-- ----------------------------
INSERT INTO `qiuzhijianli` VALUES (101, '2023-03-10 10:23:06', '求职者账号1', '求职者姓名1', '性别1', '年龄1', '专业1', '学历1', '联系电话1', 'upload/qiuzhijianli_touxiang1.jpg,upload/qiuzhijianli_touxiang2.jpg,upload/qiuzhijianli_touxiang3.jpg', '2023-03-10', '求职岗位1', '期望薪资1', '获奖证书1', '教育背景1', '是', '');
INSERT INTO `qiuzhijianli` VALUES (102, '2023-03-10 10:23:06', '求职者账号2', '求职者姓名2', '性别2', '年龄2', '专业2', '学历2', '联系电话2', 'upload/qiuzhijianli_touxiang2.jpg,upload/qiuzhijianli_touxiang3.jpg,upload/qiuzhijianli_touxiang4.jpg', '2023-03-10', '求职岗位2', '期望薪资2', '获奖证书2', '教育背景2', '是', '');
INSERT INTO `qiuzhijianli` VALUES (103, '2023-03-10 10:23:06', '求职者账号3', '求职者姓名3', '性别3', '年龄3', '专业3', '学历3', '联系电话3', 'upload/qiuzhijianli_touxiang3.jpg,upload/qiuzhijianli_touxiang4.jpg,upload/qiuzhijianli_touxiang5.jpg', '2023-03-10', '求职岗位3', '期望薪资3', '获奖证书3', '教育背景3', '是', '');
INSERT INTO `qiuzhijianli` VALUES (104, '2023-03-10 10:23:06', '求职者账号4', '求职者姓名4', '性别4', '年龄4', '专业4', '学历4', '联系电话4', 'upload/qiuzhijianli_touxiang4.jpg,upload/qiuzhijianli_touxiang5.jpg,upload/qiuzhijianli_touxiang6.jpg', '2023-03-10', '求职岗位4', '期望薪资4', '获奖证书4', '教育背景4', '是', '');
INSERT INTO `qiuzhijianli` VALUES (105, '2023-03-10 10:23:06', '求职者账号5', '求职者姓名5', '性别5', '年龄5', '专业5', '学历5', '联系电话5', 'upload/qiuzhijianli_touxiang5.jpg,upload/qiuzhijianli_touxiang6.jpg,upload/qiuzhijianli_touxiang7.jpg', '2023-03-10', '求职岗位5', '期望薪资5', '获奖证书5', '教育背景5', '是', '');
INSERT INTO `qiuzhijianli` VALUES (106, '2023-03-10 10:23:06', '求职者账号6', '求职者姓名6', '性别6', '年龄6', '专业6', '学历6', '联系电话6', 'upload/qiuzhijianli_touxiang6.jpg,upload/qiuzhijianli_touxiang7.jpg,upload/qiuzhijianli_touxiang8.jpg', '2023-03-10', '求职岗位6', '期望薪资6', '获奖证书6', '教育背景6', '是', '');
INSERT INTO `qiuzhijianli` VALUES (107, '2023-03-10 10:23:06', '求职者账号7', '求职者姓名7', '性别7', '年龄7', '专业7', '学历7', '联系电话7', 'upload/qiuzhijianli_touxiang7.jpg,upload/qiuzhijianli_touxiang8.jpg,upload/qiuzhijianli_touxiang9.jpg', '2023-03-10', '求职岗位7', '期望薪资7', '获奖证书7', '教育背景7', '是', '');
INSERT INTO `qiuzhijianli` VALUES (108, '2023-03-10 10:23:06', '求职者账号8', '求职者姓名8', '性别8', '年龄8', '专业8', '学历8', '联系电话8', 'upload/qiuzhijianli_touxiang8.jpg,upload/qiuzhijianli_touxiang9.jpg,upload/qiuzhijianli_touxiang10.jpg', '2023-03-10', '求职岗位8', '期望薪资8', '获奖证书8', '教育背景8', '是', '');

-- ----------------------------
-- Table structure for qiuzhizhe
-- ----------------------------
DROP TABLE IF EXISTS `qiuzhizhe`;
CREATE TABLE `qiuzhizhe`  (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `qiuzhizhezhanghao` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '求职者账号',
  `mima` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '密码',
  `qiuzhizhexingming` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '求职者姓名',
  `xingbie` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '性别',
  `nianling` int NULL DEFAULT NULL COMMENT '年龄',
  `zhuanye` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '专业',
  `xueli` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '学历',
  `lianxidianhua` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '联系电话',
  `dianziyouxiang` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '电子邮箱',
  `shenfenzheng` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '身份证',
  `touxiang` longtext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL COMMENT '头像',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `qiuzhizhezhanghao`(`qiuzhizhezhanghao` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 29 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci COMMENT = '求职者' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of qiuzhizhe
-- ----------------------------
INSERT INTO `qiuzhizhe` VALUES (21, '2023-03-10 10:23:06', '求职者账号1', '123456', '求职者姓名1', '男', 1, '专业1', '学历1', '13823888881', '773890001@qq.com', '440300199101010001', 'upload/qiuzhizhe_touxiang1.jpg');
INSERT INTO `qiuzhizhe` VALUES (22, '2023-03-10 10:23:06', '求职者账号2', '123456', '求职者姓名2', '男', 2, '专业2', '学历2', '13823888882', '773890002@qq.com', '440300199202020002', 'upload/qiuzhizhe_touxiang2.jpg');
INSERT INTO `qiuzhizhe` VALUES (23, '2023-03-10 10:23:06', '求职者账号3', '123456', '求职者姓名3', '男', 3, '专业3', '学历3', '13823888883', '773890003@qq.com', '440300199303030003', 'upload/qiuzhizhe_touxiang3.jpg');
INSERT INTO `qiuzhizhe` VALUES (24, '2023-03-10 10:23:06', '求职者账号4', '123456', '求职者姓名4', '男', 4, '专业4', '学历4', '13823888884', '773890004@qq.com', '440300199404040004', 'upload/qiuzhizhe_touxiang4.jpg');
INSERT INTO `qiuzhizhe` VALUES (25, '2023-03-10 10:23:06', '求职者账号5', '123456', '求职者姓名5', '男', 5, '专业5', '学历5', '13823888885', '773890005@qq.com', '440300199505050005', 'upload/qiuzhizhe_touxiang5.jpg');
INSERT INTO `qiuzhizhe` VALUES (26, '2023-03-10 10:23:06', '求职者账号6', '123456', '求职者姓名6', '男', 6, '专业6', '学历6', '13823888886', '773890006@qq.com', '440300199606060006', 'upload/qiuzhizhe_touxiang6.jpg');
INSERT INTO `qiuzhizhe` VALUES (27, '2023-03-10 10:23:06', '求职者账号7', '123456', '求职者姓名7', '男', 7, '专业7', '学历7', '13823888887', '773890007@qq.com', '440300199707070007', 'upload/qiuzhizhe_touxiang7.jpg');
INSERT INTO `qiuzhizhe` VALUES (28, '2023-03-10 10:23:06', '求职者账号8', '123456', '求职者姓名8', '男', 8, '专业8', '学历8', '13823888888', '773890008@qq.com', '440300199808080008', 'upload/qiuzhizhe_touxiang8.jpg');

-- ----------------------------
-- Table structure for token
-- ----------------------------
DROP TABLE IF EXISTS `token`;
CREATE TABLE `token`  (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键',
  `userid` bigint NOT NULL COMMENT '用户id',
  `username` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '用户名',
  `tablename` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '表名',
  `role` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '角色',
  `token` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '密码',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '新增时间',
  `expiratedtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '过期时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci COMMENT = 'token表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of token
-- ----------------------------
INSERT INTO `token` VALUES (1, 1, 'admin', 'users', '管理员', '5u4xjj5rfzo1qogisubeh42sli8egina', '2023-03-10 10:24:41', '2023-04-29 18:33:59');
INSERT INTO `token` VALUES (2, 11, '员工工号1', 'yuangong', '员工', 'b7wmgvy0aq3pyleparoijmjtb5eyupxy', '2023-03-10 10:25:03', '2023-03-10 11:25:03');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键',
  `username` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '用户名',
  `password` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '密码',
  `role` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT '管理员' COMMENT '角色',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '新增时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci COMMENT = '用户表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'admin', 'admin', '管理员', '2023-03-10 10:23:07');

-- ----------------------------
-- Table structure for xiaojiaxinxi
-- ----------------------------
DROP TABLE IF EXISTS `xiaojiaxinxi`;
CREATE TABLE `xiaojiaxinxi`  (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `yuangonggonghao` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '员工工号',
  `yuangongxingming` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '员工姓名',
  `bumen` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '部门',
  `gangwei` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '岗位',
  `xiaojiabianhao` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '销假编号',
  `tupian` longtext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL COMMENT '图片',
  `xiaojiashijian` date NULL DEFAULT NULL COMMENT '销假时间',
  `xiaojiabeizhu` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '销假备注',
  `sfsh` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT '待审核' COMMENT '是否审核',
  `shhf` longtext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL COMMENT '审核回复',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `xiaojiabianhao`(`xiaojiabianhao` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 79 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci COMMENT = '销假信息' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of xiaojiaxinxi
-- ----------------------------
INSERT INTO `xiaojiaxinxi` VALUES (71, '2023-03-10 10:23:06', '员工工号1', '员工姓名1', '部门1', '岗位1', '1111111111', 'upload/xiaojiaxinxi_tupian1.jpg,upload/xiaojiaxinxi_tupian2.jpg,upload/xiaojiaxinxi_tupian3.jpg', '2023-03-10', '销假备注1', '是', '');
INSERT INTO `xiaojiaxinxi` VALUES (72, '2023-03-10 10:23:06', '员工工号2', '员工姓名2', '部门2', '岗位2', '2222222222', 'upload/xiaojiaxinxi_tupian2.jpg,upload/xiaojiaxinxi_tupian3.jpg,upload/xiaojiaxinxi_tupian4.jpg', '2023-03-10', '销假备注2', '是', '');
INSERT INTO `xiaojiaxinxi` VALUES (73, '2023-03-10 10:23:06', '员工工号3', '员工姓名3', '部门3', '岗位3', '3333333333', 'upload/xiaojiaxinxi_tupian3.jpg,upload/xiaojiaxinxi_tupian4.jpg,upload/xiaojiaxinxi_tupian5.jpg', '2023-03-10', '销假备注3', '是', '');
INSERT INTO `xiaojiaxinxi` VALUES (74, '2023-03-10 10:23:06', '员工工号4', '员工姓名4', '部门4', '岗位4', '4444444444', 'upload/xiaojiaxinxi_tupian4.jpg,upload/xiaojiaxinxi_tupian5.jpg,upload/xiaojiaxinxi_tupian6.jpg', '2023-03-10', '销假备注4', '是', '');
INSERT INTO `xiaojiaxinxi` VALUES (75, '2023-03-10 10:23:06', '员工工号5', '员工姓名5', '部门5', '岗位5', '5555555555', 'upload/xiaojiaxinxi_tupian5.jpg,upload/xiaojiaxinxi_tupian6.jpg,upload/xiaojiaxinxi_tupian7.jpg', '2023-03-10', '销假备注5', '是', '');
INSERT INTO `xiaojiaxinxi` VALUES (76, '2023-03-10 10:23:06', '员工工号6', '员工姓名6', '部门6', '岗位6', '6666666666', 'upload/xiaojiaxinxi_tupian6.jpg,upload/xiaojiaxinxi_tupian7.jpg,upload/xiaojiaxinxi_tupian8.jpg', '2023-03-10', '销假备注6', '是', '');
INSERT INTO `xiaojiaxinxi` VALUES (77, '2023-03-10 10:23:06', '员工工号7', '员工姓名7', '部门7', '岗位7', '7777777777', 'upload/xiaojiaxinxi_tupian7.jpg,upload/xiaojiaxinxi_tupian8.jpg,upload/xiaojiaxinxi_tupian9.jpg', '2023-03-10', '销假备注7', '是', '');
INSERT INTO `xiaojiaxinxi` VALUES (78, '2023-03-10 10:23:06', '员工工号8', '员工姓名8', '部门8', '岗位8', '8888888888', 'upload/xiaojiaxinxi_tupian8.jpg,upload/xiaojiaxinxi_tupian9.jpg,upload/xiaojiaxinxi_tupian10.jpg', '2023-03-10', '销假备注8', '是', '');

-- ----------------------------
-- Table structure for xinchoujilu
-- ----------------------------
DROP TABLE IF EXISTS `xinchoujilu`;
CREATE TABLE `xinchoujilu`  (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `yuefen` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '月份',
  `yuangonggonghao` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '员工工号',
  `yuangongxingming` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '员工姓名',
  `tupian` longtext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL COMMENT '图片',
  `bumen` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '部门',
  `shoujihao` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '手机号',
  `gangwei` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '岗位',
  `jibengongzi` int NULL DEFAULT NULL COMMENT '基本工资',
  `quanqinjiangli` int NULL DEFAULT NULL COMMENT '全勤奖励',
  `qitabuzhu` int NULL DEFAULT NULL COMMENT '其他补助',
  `koukuanshixiang` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '扣款事项',
  `koukuanjine` int NULL DEFAULT NULL COMMENT '扣款金额',
  `shifagongzi` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '实发工资',
  `dengjishijian` date NULL DEFAULT NULL COMMENT '登记时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1682755645416 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci COMMENT = '薪酬记录' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of xinchoujilu
-- ----------------------------
INSERT INTO `xinchoujilu` VALUES (31, '2023-03-10 10:23:06', '一月', '员工工号1', '员工姓名1', 'upload/xinchoujilu_tupian1.jpg,upload/xinchoujilu_tupian2.jpg,upload/xinchoujilu_tupian3.jpg', '部门1', '手机号1', '岗位1', 1, 1, 1, '扣款事项1', 1, '实发工资1', '2023-03-10');
INSERT INTO `xinchoujilu` VALUES (32, '2023-03-10 10:23:06', '一月', '员工工号2', '员工姓名2', 'upload/xinchoujilu_tupian2.jpg,upload/xinchoujilu_tupian3.jpg,upload/xinchoujilu_tupian4.jpg', '部门2', '手机号2', '岗位2', 2, 2, 2, '扣款事项2', 2, '实发工资2', '2023-03-10');
INSERT INTO `xinchoujilu` VALUES (33, '2023-03-10 10:23:06', '一月', '员工工号3', '员工姓名3', 'upload/xinchoujilu_tupian3.jpg,upload/xinchoujilu_tupian4.jpg,upload/xinchoujilu_tupian5.jpg', '综合作战部', '手机号3', '岗位', 3, 3, 3, '扣款事项3', 3, '6', '2023-03-10');
INSERT INTO `xinchoujilu` VALUES (34, '2023-03-10 10:23:06', '一月', '员工工号4', '员工姓名4', 'upload/xinchoujilu_tupian4.jpg,upload/xinchoujilu_tupian5.jpg,upload/xinchoujilu_tupian6.jpg', '部门4', '手机号4', '岗位4', 4, 4, 4, '扣款事项4', 4, '实发工资4', '2023-03-10');
INSERT INTO `xinchoujilu` VALUES (35, '2023-03-10 10:23:06', '一月', '员工工号5', '员工姓名5', 'upload/xinchoujilu_tupian5.jpg,upload/xinchoujilu_tupian6.jpg,upload/xinchoujilu_tupian7.jpg', '部门5', '手机号5', '岗位5', 5, 5, 5, '扣款事项5', 5, '实发工资5', '2023-03-10');
INSERT INTO `xinchoujilu` VALUES (36, '2023-03-10 10:23:06', '一月', '员工工号6', '员工姓名6', 'upload/xinchoujilu_tupian6.jpg,upload/xinchoujilu_tupian7.jpg,upload/xinchoujilu_tupian8.jpg', '部门6', '手机号6', '岗位6', 6, 6, 6, '扣款事项6', 6, '实发工资6', '2023-03-10');
INSERT INTO `xinchoujilu` VALUES (37, '2023-03-10 10:23:06', '一月', '员工工号7', '员工姓名7', 'upload/xinchoujilu_tupian7.jpg,upload/xinchoujilu_tupian8.jpg,upload/xinchoujilu_tupian9.jpg', '部门7', '手机号7', '岗位7', 7, 7, 7, '扣款事项7', 7, '实发工资7', '2023-03-10');
INSERT INTO `xinchoujilu` VALUES (38, '2023-03-10 10:23:06', '一月', '员工工号8', '员工姓名8', 'upload/xinchoujilu_tupian8.jpg,upload/xinchoujilu_tupian9.jpg,upload/xinchoujilu_tupian10.jpg', '综合作战部', '手机号8', '市场主机', 8, 8, 8, '扣款事项8', 8, '16', '2023-03-10');
INSERT INTO `xinchoujilu` VALUES (1682755645415, '2023-04-29 16:07:24', '二月', '员工工号1', '员工姓名1', '', '部门1', '13823888881', '岗位1', 5050, 50, 50, '50', 505, '4645', '2023-04-10');

-- ----------------------------
-- Table structure for yuangong
-- ----------------------------
DROP TABLE IF EXISTS `yuangong`;
CREATE TABLE `yuangong`  (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `yuangonggonghao` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '员工工号',
  `mima` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '密码',
  `yuangongxingming` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '员工姓名',
  `xingbie` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '性别',
  `bumen` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '部门',
  `gangwei` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '岗位',
  `biyeyuanxiao` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '毕业院校',
  `youxiang` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '邮箱',
  `shoujihao` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '手机号',
  `shenfenzheng` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '身份证',
  `touxiang` longtext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL COMMENT '头像',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `yuangonggonghao`(`yuangonggonghao` ASC) USING BTREE,
  UNIQUE INDEX `shoujihao`(`shoujihao` ASC) USING BTREE,
  UNIQUE INDEX `shenfenzheng`(`shenfenzheng` ASC) USING BTREE,
  UNIQUE INDEX `youxiang`(`youxiang` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1682755765752 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci COMMENT = '员工' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of yuangong
-- ----------------------------
INSERT INTO `yuangong` VALUES (11, '2023-03-10 10:23:06', '员工工号1', '123456', '员工姓名1', '男', '部门1', '岗位1', '毕业院校1', '773890001@qq.com', '13823888881', '440300199101010001', 'upload/yuangong_touxiang1.jpg');
INSERT INTO `yuangong` VALUES (12, '2023-03-10 10:23:06', '员工工号2', '123456', '员工姓名2', '男', '部门2', '岗位2', '毕业院校2', '773890002@qq.com', '13823888882', '440300199202020002', 'upload/yuangong_touxiang2.jpg');
INSERT INTO `yuangong` VALUES (13, '2023-03-10 10:23:06', '员工工号3', '123456', '员工姓名3', '男', '部门3', '岗位3', '毕业院校3', '773890003@qq.com', '13823888883', '440300199303030003', 'upload/yuangong_touxiang3.jpg');
INSERT INTO `yuangong` VALUES (14, '2023-03-10 10:23:06', '员工工号4', '123456', '员工姓名4', '男', '部门4', '岗位4', '毕业院校4', '773890004@qq.com', '13823888884', '440300199404040004', 'upload/yuangong_touxiang4.jpg');
INSERT INTO `yuangong` VALUES (15, '2023-03-10 10:23:06', '员工工号5', '123456', '员工姓名5', '男', '部门5', '岗位5', '毕业院校5', '773890005@qq.com', '13823888885', '440300199505050005', 'upload/yuangong_touxiang5.jpg');
INSERT INTO `yuangong` VALUES (16, '2023-03-10 10:23:06', '员工工号6', '123456', '员工姓名6', '男', '部门6', '岗位6', '毕业院校6', '773890006@qq.com', '13823888886', '440300199606060006', 'upload/yuangong_touxiang6.jpg');
INSERT INTO `yuangong` VALUES (17, '2023-03-10 10:23:06', '员工工号7', '123456', '员工姓名7', '男', '部门7', '岗位7', '毕业院校7', '773890007@qq.com', '13823888887', '440300199707070007', 'upload/yuangong_touxiang7.jpg');
INSERT INTO `yuangong` VALUES (18, '2023-03-10 10:23:06', '员工工号8', '123456', '员工姓名8', '男', '部门8', '岗位8', '毕业院校8', '773890008@qq.com', '13823888888', '440300199808080008', 'upload/yuangong_touxiang8.jpg');
INSERT INTO `yuangong` VALUES (1682755765751, '2023-04-29 16:09:25', '1010', '123456', '姓名999', '男', '综合作战部', '人事专员', '50', '121@qq.com', '11111111111', '454212188802130913', '');

-- ----------------------------
-- Table structure for yuangongqiandao
-- ----------------------------
DROP TABLE IF EXISTS `yuangongqiandao`;
CREATE TABLE `yuangongqiandao`  (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `yuangonggonghao` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '员工工号',
  `yuangongxingming` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '员工姓名',
  `bumen` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '部门',
  `gangwei` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '岗位',
  `qiandaoleixing` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '签到类型',
  `qiandaoshijian` datetime NULL DEFAULT NULL COMMENT '签到时间',
  `tupian` longtext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL COMMENT '图片',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 89 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci COMMENT = '员工签到' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of yuangongqiandao
-- ----------------------------
INSERT INTO `yuangongqiandao` VALUES (81, '2023-03-10 10:23:06', '员工工号1', '员工姓名1', '部门1', '岗位1', '签到', '2023-03-10 18:23:06', 'upload/yuangongqiandao_tupian1.jpg,upload/yuangongqiandao_tupian2.jpg,upload/yuangongqiandao_tupian3.jpg');
INSERT INTO `yuangongqiandao` VALUES (82, '2023-03-10 10:23:06', '员工工号2', '员工姓名2', '部门2', '岗位2', '签到', '2023-03-10 18:23:06', 'upload/yuangongqiandao_tupian2.jpg,upload/yuangongqiandao_tupian3.jpg,upload/yuangongqiandao_tupian4.jpg');
INSERT INTO `yuangongqiandao` VALUES (83, '2023-03-10 10:23:06', '员工工号3', '员工姓名3', '部门3', '岗位3', '签到', '2023-03-10 18:23:06', 'upload/yuangongqiandao_tupian3.jpg,upload/yuangongqiandao_tupian4.jpg,upload/yuangongqiandao_tupian5.jpg');
INSERT INTO `yuangongqiandao` VALUES (84, '2023-03-10 10:23:06', '员工工号4', '员工姓名4', '部门4', '岗位4', '签到', '2023-03-10 18:23:06', 'upload/yuangongqiandao_tupian4.jpg,upload/yuangongqiandao_tupian5.jpg,upload/yuangongqiandao_tupian6.jpg');
INSERT INTO `yuangongqiandao` VALUES (85, '2023-03-10 10:23:06', '员工工号5', '员工姓名5', '部门5', '岗位5', '签到', '2023-03-10 18:23:06', 'upload/yuangongqiandao_tupian5.jpg,upload/yuangongqiandao_tupian6.jpg,upload/yuangongqiandao_tupian7.jpg');
INSERT INTO `yuangongqiandao` VALUES (86, '2023-03-10 10:23:06', '员工工号6', '员工姓名6', '部门6', '岗位6', '签到', '2023-03-10 18:23:06', 'upload/yuangongqiandao_tupian6.jpg,upload/yuangongqiandao_tupian7.jpg,upload/yuangongqiandao_tupian8.jpg');
INSERT INTO `yuangongqiandao` VALUES (87, '2023-03-10 10:23:06', '员工工号7', '员工姓名7', '部门7', '岗位7', '签到', '2023-03-10 18:23:06', 'upload/yuangongqiandao_tupian7.jpg,upload/yuangongqiandao_tupian8.jpg,upload/yuangongqiandao_tupian9.jpg');
INSERT INTO `yuangongqiandao` VALUES (88, '2023-03-10 10:23:06', '员工工号8', '员工姓名8', '部门8', '岗位8', '签到', '2023-03-10 18:23:06', 'upload/yuangongqiandao_tupian8.jpg,upload/yuangongqiandao_tupian9.jpg,upload/yuangongqiandao_tupian10.jpg');

-- ----------------------------
-- Table structure for yuangongqingjia
-- ----------------------------
DROP TABLE IF EXISTS `yuangongqingjia`;
CREATE TABLE `yuangongqingjia`  (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `yuangonggonghao` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '员工工号',
  `yuangongxingming` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '员工姓名',
  `bumen` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '部门',
  `gangwei` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '岗位',
  `qingjialeixing` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '请假类型',
  `tupian` longtext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL COMMENT '图片',
  `qishishijian` datetime NULL DEFAULT NULL COMMENT '起始时间',
  `jiezhishijian` datetime NULL DEFAULT NULL COMMENT '截止时间',
  `qingjiatianshu` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '请假天数',
  `qingjiayuanyin` longtext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL COMMENT '请假原因',
  `sfsh` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT '待审核' COMMENT '是否审核',
  `shhf` longtext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL COMMENT '审核回复',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 69 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci COMMENT = '员工请假' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of yuangongqingjia
-- ----------------------------
INSERT INTO `yuangongqingjia` VALUES (61, '2023-03-10 10:23:06', '员工工号1', '员工姓名1', '部门1', '岗位1', '请假类型1', 'upload/yuangongqingjia_tupian1.jpg,upload/yuangongqingjia_tupian2.jpg,upload/yuangongqingjia_tupian3.jpg', '2023-03-10 18:23:06', '2023-03-10 18:23:06', '请假天数1', '请假原因1', '是', '');
INSERT INTO `yuangongqingjia` VALUES (62, '2023-03-10 10:23:06', '员工工号2', '员工姓名2', '部门2', '岗位2', '请假类型2', 'upload/yuangongqingjia_tupian2.jpg,upload/yuangongqingjia_tupian3.jpg,upload/yuangongqingjia_tupian4.jpg', '2023-03-10 18:23:06', '2023-03-10 18:23:06', '请假天数2', '请假原因2', '是', '');
INSERT INTO `yuangongqingjia` VALUES (63, '2023-03-10 10:23:06', '员工工号3', '员工姓名3', '部门3', '岗位3', '请假类型3', 'upload/yuangongqingjia_tupian3.jpg,upload/yuangongqingjia_tupian4.jpg,upload/yuangongqingjia_tupian5.jpg', '2023-03-10 18:23:06', '2023-03-10 18:23:06', '请假天数3', '请假原因3', '是', '');
INSERT INTO `yuangongqingjia` VALUES (64, '2023-03-10 10:23:06', '员工工号4', '员工姓名4', '部门4', '岗位4', '请假类型4', 'upload/yuangongqingjia_tupian4.jpg,upload/yuangongqingjia_tupian5.jpg,upload/yuangongqingjia_tupian6.jpg', '2023-03-10 18:23:06', '2023-03-10 18:23:06', '请假天数4', '请假原因4', '是', '');
INSERT INTO `yuangongqingjia` VALUES (65, '2023-03-10 10:23:06', '员工工号5', '员工姓名5', '部门5', '岗位5', '请假类型5', 'upload/yuangongqingjia_tupian5.jpg,upload/yuangongqingjia_tupian6.jpg,upload/yuangongqingjia_tupian7.jpg', '2023-03-10 18:23:06', '2023-03-10 18:23:06', '请假天数5', '请假原因5', '是', '');
INSERT INTO `yuangongqingjia` VALUES (66, '2023-03-10 10:23:06', '员工工号6', '员工姓名6', '部门6', '岗位6', '请假类型6', 'upload/yuangongqingjia_tupian6.jpg,upload/yuangongqingjia_tupian7.jpg,upload/yuangongqingjia_tupian8.jpg', '2023-03-10 18:23:06', '2023-03-10 18:23:06', '请假天数6', '请假原因6', '是', '');
INSERT INTO `yuangongqingjia` VALUES (67, '2023-03-10 10:23:06', '员工工号7', '员工姓名7', '部门7', '岗位7', '请假类型7', 'upload/yuangongqingjia_tupian7.jpg,upload/yuangongqingjia_tupian8.jpg,upload/yuangongqingjia_tupian9.jpg', '2023-03-10 18:23:06', '2023-03-10 18:23:06', '请假天数7', '请假原因7', '是', '');
INSERT INTO `yuangongqingjia` VALUES (68, '2023-03-10 10:23:06', '员工工号8', '员工姓名8', '部门8', '岗位8', '请假类型8', 'upload/yuangongqingjia_tupian8.jpg,upload/yuangongqingjia_tupian9.jpg,upload/yuangongqingjia_tupian10.jpg', '2023-03-10 18:23:06', '2023-03-10 18:23:06', '请假天数8', '请假原因8', '是', '');

-- ----------------------------
-- Table structure for zhaopinxinxi
-- ----------------------------
DROP TABLE IF EXISTS `zhaopinxinxi`;
CREATE TABLE `zhaopinxinxi`  (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `zhaopinbianhao` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '招聘编号',
  `qiyemingcheng` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '企业名称',
  `lianxifangshi` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '联系方式',
  `youxiang` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '邮箱',
  `zhaopindiqu` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '招聘地区',
  `zhaopinzhuanye` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '招聘专业',
  `zhaopinfengmian` longtext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL COMMENT '招聘封面',
  `zhaopinzhiwei` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '招聘职位',
  `zhaopinrenshu` int NULL DEFAULT NULL COMMENT '招聘人数',
  `zhiweimiaoshu` longtext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL COMMENT '职位描述',
  `jibentiaojian` longtext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL COMMENT '基本条件',
  `gongzidaiyu` longtext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL COMMENT '工资待遇',
  `zhaopinliucheng` longtext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL COMMENT '招聘流程',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `zhaopinbianhao`(`zhaopinbianhao` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 99 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci COMMENT = '招聘信息' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of zhaopinxinxi
-- ----------------------------
INSERT INTO `zhaopinxinxi` VALUES (91, '2023-03-10 10:23:06', '1111111111', '企业名称1', '联系方式1', '邮箱1', '招聘地区1', '招聘专业1', 'upload/zhaopinxinxi_zhaopinfengmian1.jpg,upload/zhaopinxinxi_zhaopinfengmian2.jpg,upload/zhaopinxinxi_zhaopinfengmian3.jpg', '招聘职位1', 1, '职位描述1', '基本条件1', '工资待遇1', '招聘流程1');
INSERT INTO `zhaopinxinxi` VALUES (92, '2023-03-10 10:23:06', '2222222222', '企业名称2', '联系方式2', '邮箱2', '招聘地区2', '招聘专业2', 'upload/zhaopinxinxi_zhaopinfengmian2.jpg,upload/zhaopinxinxi_zhaopinfengmian3.jpg,upload/zhaopinxinxi_zhaopinfengmian4.jpg', '招聘职位2', 2, '职位描述2', '基本条件2', '工资待遇2', '招聘流程2');
INSERT INTO `zhaopinxinxi` VALUES (93, '2023-03-10 10:23:06', '3333333333', '企业名称3', '联系方式3', '邮箱3', '招聘地区3', '招聘专业3', 'upload/zhaopinxinxi_zhaopinfengmian3.jpg,upload/zhaopinxinxi_zhaopinfengmian4.jpg,upload/zhaopinxinxi_zhaopinfengmian5.jpg', '招聘职位3', 3, '职位描述3', '基本条件3', '工资待遇3', '招聘流程3');
INSERT INTO `zhaopinxinxi` VALUES (94, '2023-03-10 10:23:06', '4444444444', '企业名称4', '联系方式4', '邮箱4', '招聘地区4', '招聘专业4', 'upload/zhaopinxinxi_zhaopinfengmian4.jpg,upload/zhaopinxinxi_zhaopinfengmian5.jpg,upload/zhaopinxinxi_zhaopinfengmian6.jpg', '招聘职位4', 4, '职位描述4', '基本条件4', '工资待遇4', '招聘流程4');
INSERT INTO `zhaopinxinxi` VALUES (95, '2023-03-10 10:23:06', '5555555555', '企业名称5', '联系方式5', '邮箱5', '招聘地区5', '招聘专业5', 'upload/zhaopinxinxi_zhaopinfengmian5.jpg,upload/zhaopinxinxi_zhaopinfengmian6.jpg,upload/zhaopinxinxi_zhaopinfengmian7.jpg', '招聘职位5', 5, '职位描述5', '基本条件5', '工资待遇5', '招聘流程5');
INSERT INTO `zhaopinxinxi` VALUES (96, '2023-03-10 10:23:06', '6666666666', '企业名称6', '联系方式6', '邮箱6', '招聘地区6', '招聘专业6', 'upload/zhaopinxinxi_zhaopinfengmian6.jpg,upload/zhaopinxinxi_zhaopinfengmian7.jpg,upload/zhaopinxinxi_zhaopinfengmian8.jpg', '招聘职位6', 6, '职位描述6', '基本条件6', '工资待遇6', '招聘流程6');
INSERT INTO `zhaopinxinxi` VALUES (97, '2023-03-10 10:23:06', '7777777777', '企业名称7', '联系方式7', '邮箱7', '招聘地区7', '招聘专业7', 'upload/zhaopinxinxi_zhaopinfengmian7.jpg,upload/zhaopinxinxi_zhaopinfengmian8.jpg,upload/zhaopinxinxi_zhaopinfengmian9.jpg', '招聘职位7', 7, '职位描述7', '基本条件7', '工资待遇7', '招聘流程7');
INSERT INTO `zhaopinxinxi` VALUES (98, '2023-03-10 10:23:06', '8888888888', '企业名称8', '联系方式8', '邮箱8', '招聘地区8', '招聘专业8', 'upload/zhaopinxinxi_zhaopinfengmian8.jpg,upload/zhaopinxinxi_zhaopinfengmian9.jpg,upload/zhaopinxinxi_zhaopinfengmian10.jpg', '招聘职位8', 8, '职位描述8', '基本条件8', '工资待遇8', '招聘流程8');

SET FOREIGN_KEY_CHECKS = 1;
