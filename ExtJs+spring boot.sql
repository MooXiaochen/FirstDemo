/*
 Navicat Premium Data Transfer

 Source Server         : 本地连接
 Source Server Type    : SQL Server
 Source Server Version : 14001000
 Source Host           : 127.0.0.1:1433
 Source Catalog        : dbo
 Source Schema         : dbo

 Target Server Type    : SQL Server
 Target Server Version : 14001000
 File Encoding         : 65001

 Date: 27/06/2019 11:53:19
*/


-- ----------------------------
-- Table structure for business
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[business]') AND type IN ('U'))
	DROP TABLE [dbo].[business]
GO

CREATE TABLE [dbo].[business] (
  [id] int  IDENTITY(1,1) NOT FOR REPLICATION NOT NULL,
  [countryid] int  NULL,
  [name] varchar(80) COLLATE Chinese_PRC_CI_AS  NULL,
  [natureid] int  NULL,
  [groupid] int  NULL,
  [agent_cheap] money  NULL,
  [agent_quote] money  NULL,
  [agent_explain] varchar(240) COLLATE Chinese_PRC_CI_AS  NULL,
  [client_cheap] money  NULL,
  [client_quote] money  NULL,
  [client_explain] varchar(240) COLLATE Chinese_PRC_CI_AS  NULL,
  [greenboxid] int  NULL,
  [iscpa] int  NULL,
  [materials] varchar(480) COLLATE Chinese_PRC_CI_AS  NULL,
  [services] varchar(480) COLLATE Chinese_PRC_CI_AS  NULL,
  [dscription] varchar(480) COLLATE Chinese_PRC_CI_AS  NULL,
  [prescription] varchar(40) COLLATE Chinese_PRC_CI_AS  NULL,
  [is_lock] int  NULL,
  [sortnum] int  NULL,
  [querycount] int  NULL,
  [content] varchar(max) COLLATE Chinese_PRC_CI_AS  NULL,
  [updatetime] datetime  NULL
)
GO

ALTER TABLE [dbo].[business] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Table structure for property
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[property]') AND type IN ('U'))
	DROP TABLE [dbo].[property]
GO

CREATE TABLE [dbo].[property] (
  [property_id] int  IDENTITY(1,1) NOT NULL,
  [user_id] int  NULL,
  [property_type_id] int  NULL,
  [property_name] varchar(255) COLLATE Chinese_PRC_CI_AS  NULL,
  [equipment_no] varchar(200) COLLATE Chinese_PRC_CI_AS  NULL,
  [property_price] money  NULL,
  [count] int  NULL,
  [create_time] datetime2(0)  NULL,
  [update_time] datetime2(0)  NULL,
  [description] varchar(255) COLLATE Chinese_PRC_CI_AS  NULL,
  [registrant] varchar(255) COLLATE Chinese_PRC_CI_AS  NULL
)
GO

ALTER TABLE [dbo].[property] SET (LOCK_ESCALATION = TABLE)
GO

EXEC sp_addextendedproperty
'MS_Description', N'主键id',
'SCHEMA', N'dbo',
'TABLE', N'property',
'COLUMN', N'property_id'
GO

EXEC sp_addextendedproperty
'MS_Description', N'用户id',
'SCHEMA', N'dbo',
'TABLE', N'property',
'COLUMN', N'user_id'
GO

EXEC sp_addextendedproperty
'MS_Description', N'资产类型id',
'SCHEMA', N'dbo',
'TABLE', N'property',
'COLUMN', N'property_type_id'
GO

EXEC sp_addextendedproperty
'MS_Description', N'资产名称',
'SCHEMA', N'dbo',
'TABLE', N'property',
'COLUMN', N'property_name'
GO

EXEC sp_addextendedproperty
'MS_Description', N'设备编号',
'SCHEMA', N'dbo',
'TABLE', N'property',
'COLUMN', N'equipment_no'
GO

EXEC sp_addextendedproperty
'MS_Description', N'资产估值',
'SCHEMA', N'dbo',
'TABLE', N'property',
'COLUMN', N'property_price'
GO

EXEC sp_addextendedproperty
'MS_Description', N'数量',
'SCHEMA', N'dbo',
'TABLE', N'property',
'COLUMN', N'count'
GO

EXEC sp_addextendedproperty
'MS_Description', N'录入时间',
'SCHEMA', N'dbo',
'TABLE', N'property',
'COLUMN', N'create_time'
GO

EXEC sp_addextendedproperty
'MS_Description', N'更新时间',
'SCHEMA', N'dbo',
'TABLE', N'property',
'COLUMN', N'update_time'
GO

EXEC sp_addextendedproperty
'MS_Description', N'描述',
'SCHEMA', N'dbo',
'TABLE', N'property',
'COLUMN', N'description'
GO

EXEC sp_addextendedproperty
'MS_Description', N'登记人',
'SCHEMA', N'dbo',
'TABLE', N'property',
'COLUMN', N'registrant'
GO


-- ----------------------------
-- Records of property
-- ----------------------------
SET IDENTITY_INSERT [dbo].[property] ON
GO

INSERT INTO [dbo].[property] ([property_id], [user_id], [property_type_id], [property_name], [equipment_no], [property_price], [count], [create_time], [update_time], [description], [registrant]) VALUES (N'1', N'2', N'1', N'电脑', N'PC0011', N'5011.0000', N'11', N'2019-06-20 17:04:10', N'2019-06-26 10:39:14', N'测试修改描述信息', N'Logan')
GO

INSERT INTO [dbo].[property] ([property_id], [user_id], [property_type_id], [property_name], [equipment_no], [property_price], [count], [create_time], [update_time], [description], [registrant]) VALUES (N'2', N'1', N'2', N'测试数据2', N'PC002', N'4000.0000', N'1', N'2019-06-20 17:04:38', N'2019-06-25 12:11:42', N'', N'122')
GO

INSERT INTO [dbo].[property] ([property_id], [user_id], [property_type_id], [property_name], [equipment_no], [property_price], [count], [create_time], [update_time], [description], [registrant]) VALUES (N'3', N'2', N'3', N'键鼠一套', N'logitech', N'50.0000', N'1', N'2019-06-20 17:33:22', N'2019-06-26 10:39:58', N'罗技键鼠一套', N'Logan')
GO

INSERT INTO [dbo].[property] ([property_id], [user_id], [property_type_id], [property_name], [equipment_no], [property_price], [count], [create_time], [update_time], [description], [registrant]) VALUES (N'4', N'2', N'1', N'测试数据4', N'PC004', N'2500.0000', N'1', N'2019-06-20 17:33:44', NULL, NULL, NULL)
GO

INSERT INTO [dbo].[property] ([property_id], [user_id], [property_type_id], [property_name], [equipment_no], [property_price], [count], [create_time], [update_time], [description], [registrant]) VALUES (N'14', N'3', N'2', N'Test001', N'TEST001', N'999.0000', N'1', N'2019-06-21 15:23:49', NULL, N'测试前台新增数据', NULL)
GO

INSERT INTO [dbo].[property] ([property_id], [user_id], [property_type_id], [property_name], [equipment_no], [property_price], [count], [create_time], [update_time], [description], [registrant]) VALUES (N'20', N'1', N'1', N'测试数据1', N'PC001', N'5000.0000', N'1', N'2019-06-24 15:59:11', N'2019-06-24 16:04:52', N'测试修改信息描述111', NULL)
GO

INSERT INTO [dbo].[property] ([property_id], [user_id], [property_type_id], [property_name], [equipment_no], [property_price], [count], [create_time], [update_time], [description], [registrant]) VALUES (N'21', N'3', N'3', N'美工刀', N'MGD001', N'5.0000', N'1', N'2019-06-26 10:03:56', NULL, N'我是描述', N'Logan')
GO

INSERT INTO [dbo].[property] ([property_id], [user_id], [property_type_id], [property_name], [equipment_no], [property_price], [count], [create_time], [update_time], [description], [registrant]) VALUES (N'26', N'1', N'1', N'1111111111', N'111111111', N'4.0000', N'2', N'2019-06-26 10:20:01', NULL, N'12312', N'1111111')
GO

SET IDENTITY_INSERT [dbo].[property] OFF
GO


-- ----------------------------
-- Table structure for property_type
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[property_type]') AND type IN ('U'))
	DROP TABLE [dbo].[property_type]
GO

CREATE TABLE [dbo].[property_type] (
  [property_type_id] int  IDENTITY(1,1) NOT NULL,
  [property_type_name] varchar(255) COLLATE Chinese_PRC_CI_AS  NULL
)
GO

ALTER TABLE [dbo].[property_type] SET (LOCK_ESCALATION = TABLE)
GO

EXEC sp_addextendedproperty
'MS_Description', N'主键id',
'SCHEMA', N'dbo',
'TABLE', N'property_type',
'COLUMN', N'property_type_id'
GO

EXEC sp_addextendedproperty
'MS_Description', N'类型名称',
'SCHEMA', N'dbo',
'TABLE', N'property_type',
'COLUMN', N'property_type_name'
GO


-- ----------------------------
-- Records of property_type
-- ----------------------------
SET IDENTITY_INSERT [dbo].[property_type] ON
GO

INSERT INTO [dbo].[property_type] ([property_type_id], [property_type_name]) VALUES (N'15', N'测试数据A')
GO

INSERT INTO [dbo].[property_type] ([property_type_id], [property_type_name]) VALUES (N'1', N'电脑')
GO

INSERT INTO [dbo].[property_type] ([property_type_id], [property_type_name]) VALUES (N'3', N'工具')
GO

INSERT INTO [dbo].[property_type] ([property_type_id], [property_type_name]) VALUES (N'20', N'公文包')
GO

INSERT INTO [dbo].[property_type] ([property_type_id], [property_type_name]) VALUES (N'2', N'文具')
GO

SET IDENTITY_INSERT [dbo].[property_type] OFF
GO


-- ----------------------------
-- Table structure for repository
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[repository]') AND type IN ('U'))
	DROP TABLE [dbo].[repository]
GO

CREATE TABLE [dbo].[repository] (
  [repository_id] int  IDENTITY(1,1) NOT NULL,
  [user_id] int  NOT NULL,
  [keyword] varchar(500) COLLATE Chinese_PRC_CI_AS  NULL,
  [section] varchar(40) COLLATE Chinese_PRC_CI_AS  NULL,
  [publish_time] datetime  NULL,
  [theme] varchar(500) COLLATE Chinese_PRC_CI_AS  NULL,
  [publish_state] int  NULL
)
GO

ALTER TABLE [dbo].[repository] SET (LOCK_ESCALATION = TABLE)
GO

EXEC sp_addextendedproperty
'MS_Description', N'主键',
'SCHEMA', N'dbo',
'TABLE', N'repository',
'COLUMN', N'repository_id'
GO

EXEC sp_addextendedproperty
'MS_Description', N'用户ID',
'SCHEMA', N'dbo',
'TABLE', N'repository',
'COLUMN', N'user_id'
GO

EXEC sp_addextendedproperty
'MS_Description', N'关键字',
'SCHEMA', N'dbo',
'TABLE', N'repository',
'COLUMN', N'keyword'
GO

EXEC sp_addextendedproperty
'MS_Description', N'部门',
'SCHEMA', N'dbo',
'TABLE', N'repository',
'COLUMN', N'section'
GO

EXEC sp_addextendedproperty
'MS_Description', N'发布时间',
'SCHEMA', N'dbo',
'TABLE', N'repository',
'COLUMN', N'publish_time'
GO

EXEC sp_addextendedproperty
'MS_Description', N'标题',
'SCHEMA', N'dbo',
'TABLE', N'repository',
'COLUMN', N'theme'
GO

EXEC sp_addextendedproperty
'MS_Description', N'发布状态（0-草稿，1-发布）',
'SCHEMA', N'dbo',
'TABLE', N'repository',
'COLUMN', N'publish_state'
GO


-- ----------------------------
-- Records of repository
-- ----------------------------
SET IDENTITY_INSERT [dbo].[repository] ON
GO

INSERT INTO [dbo].[repository] ([repository_id], [user_id], [keyword], [section], [publish_time], [theme], [publish_state]) VALUES (N'1', N'1', N'测试，数据，001', N'开发部', N'2019-05-17 16:36:51.000', N'测试标题001', N'1')
GO

INSERT INTO [dbo].[repository] ([repository_id], [user_id], [keyword], [section], [publish_time], [theme], [publish_state]) VALUES (N'2', N'1', N'测试，数据，002', N'开发部', N'2019-05-17 16:37:17.000', N'测试标题002', N'1')
GO

INSERT INTO [dbo].[repository] ([repository_id], [user_id], [keyword], [section], [publish_time], [theme], [publish_state]) VALUES (N'3', N'1', N'测试数据', N'商务部', NULL, N'商务部', N'0')
GO

INSERT INTO [dbo].[repository] ([repository_id], [user_id], [keyword], [section], [publish_time], [theme], [publish_state]) VALUES (N'4', N'0', N'人工 智能 将取代 设计师', N'1', NULL, N'人工智能将取代设计师！', N'0')
GO

INSERT INTO [dbo].[repository] ([repository_id], [user_id], [keyword], [section], [publish_time], [theme], [publish_state]) VALUES (N'5', N'0', N'人工 智能 将取代 设计师', N'2', NULL, N'人工智能将取代设计师！', N'0')
GO

INSERT INTO [dbo].[repository] ([repository_id], [user_id], [keyword], [section], [publish_time], [theme], [publish_state]) VALUES (N'6', N'0', N'人工 智能 将取代 设计师', N'3', NULL, N'人工智能将取代设计师！', N'0')
GO

INSERT INTO [dbo].[repository] ([repository_id], [user_id], [keyword], [section], [publish_time], [theme], [publish_state]) VALUES (N'7', N'0', N'人工 智能 将取代 设计师', N'1', NULL, N'人工智能将取代设计师！', N'0')
GO

INSERT INTO [dbo].[repository] ([repository_id], [user_id], [keyword], [section], [publish_time], [theme], [publish_state]) VALUES (N'8', N'0', N'人工 智能 将取代 设计师', NULL, NULL, N'人工智能将取代设计师！', N'0')
GO

INSERT INTO [dbo].[repository] ([repository_id], [user_id], [keyword], [section], [publish_time], [theme], [publish_state]) VALUES (N'9', N'0', N'人工 智能 将取代 设计师', N'3', NULL, N'人工智能将取代设计师！', N'0')
GO

INSERT INTO [dbo].[repository] ([repository_id], [user_id], [keyword], [section], [publish_time], [theme], [publish_state]) VALUES (N'14', N'0', N'战略误判，后果严重', N'1', N'2019-05-23 11:13:32.000', N'人民日报评论员：战略误判，后果严重', N'1')
GO

INSERT INTO [dbo].[repository] ([repository_id], [user_id], [keyword], [section], [publish_time], [theme], [publish_state]) VALUES (N'15', N'0', N'战略误判，后果严重', N'1', N'2019-05-21 17:52:34.817', N'人民日报评论员：战略误判，后果严重', N'1')
GO

INSERT INTO [dbo].[repository] ([repository_id], [user_id], [keyword], [section], [publish_time], [theme], [publish_state]) VALUES (N'16', N'0', N'战略误判，后果严重', N'1', N'2019-05-21 17:54:39.233', N'人民日报评论员：战略误判，后果严重', N'1')
GO

INSERT INTO [dbo].[repository] ([repository_id], [user_id], [keyword], [section], [publish_time], [theme], [publish_state]) VALUES (N'17', N'0', N'战略误判，后果严重', N'1', N'2019-05-21 17:54:52.393', N'人民日报评论员：战略误判，后果严重', N'1')
GO

SET IDENTITY_INSERT [dbo].[repository] OFF
GO


-- ----------------------------
-- Table structure for repository_comment
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[repository_comment]') AND type IN ('U'))
	DROP TABLE [dbo].[repository_comment]
GO

CREATE TABLE [dbo].[repository_comment] (
  [repository_comment_id] int  IDENTITY(1,1) NOT NULL,
  [repository_id] int  NOT NULL,
  [comment_user_id] int  NOT NULL,
  [comment_time] datetime  NOT NULL,
  [comment_content] varchar(2000) COLLATE Chinese_PRC_CI_AS  NULL
)
GO

ALTER TABLE [dbo].[repository_comment] SET (LOCK_ESCALATION = TABLE)
GO

EXEC sp_addextendedproperty
'MS_Description', N'主键',
'SCHEMA', N'dbo',
'TABLE', N'repository_comment',
'COLUMN', N'repository_comment_id'
GO

EXEC sp_addextendedproperty
'MS_Description', N'帖子id',
'SCHEMA', N'dbo',
'TABLE', N'repository_comment',
'COLUMN', N'repository_id'
GO

EXEC sp_addextendedproperty
'MS_Description', N'评论人id',
'SCHEMA', N'dbo',
'TABLE', N'repository_comment',
'COLUMN', N'comment_user_id'
GO

EXEC sp_addextendedproperty
'MS_Description', N'评论时间',
'SCHEMA', N'dbo',
'TABLE', N'repository_comment',
'COLUMN', N'comment_time'
GO

EXEC sp_addextendedproperty
'MS_Description', N'评论内容',
'SCHEMA', N'dbo',
'TABLE', N'repository_comment',
'COLUMN', N'comment_content'
GO


-- ----------------------------
-- Records of repository_comment
-- ----------------------------
SET IDENTITY_INSERT [dbo].[repository_comment] ON
GO

INSERT INTO [dbo].[repository_comment] ([repository_comment_id], [repository_id], [comment_user_id], [comment_time], [comment_content]) VALUES (N'1', N'14', N'1', N'2019-05-23 11:13:53.000', N'这些是什么JB东西')
GO

INSERT INTO [dbo].[repository_comment] ([repository_comment_id], [repository_id], [comment_user_id], [comment_time], [comment_content]) VALUES (N'3', N'14', N'2', N'2019-05-24 10:53:08.000', N'一些美国政客对中国的敌意，是自私、狭隘和偏执的混合物，暴露出错误的世界观、过时的知识结构和顽固的意识形态偏见。他们的想法还停留在冷战思维、零和博弈的旧框框内，认为中国的发展必然会动美国的奶酪，断定“中国之所得，必是美国之所失”，把中美竞争看成是非输即赢甚至是你死我活的竞争。')
GO

INSERT INTO [dbo].[repository_comment] ([repository_comment_id], [repository_id], [comment_user_id], [comment_time], [comment_content]) VALUES (N'4', N'14', N'3', N'2019-05-24 11:03:03.000', N'<span style="color: rgb(51, 51, 51); font-family: arial; font-size: 16px; text-align: justify;">AI听起来比实际情况更吓人 。在其最广泛的定义，人工智能是“一种可以用人的方式推理或感知的机器。”还有一个潜在的焦虑，AI将像设计师一样进行构思、设计和展示创意。我们也看到了阿里鲁班系统通过算法在双十一期间为淘宝天猫创作运营banner的强大能力。</span><p style="margin: 22px 0px 0px; padding: 0px; font-size: 16px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify; font-family: arial;"><span class="bjh-p">所以设计师真的会被AI取代吗？长期以来，人类一直致力于创造机器和技术，以彻底改变我们的做事方式。从三轮车到汽车，我们已经进化到创造技术，使工作和生活变得更加容易。我们不仅进化了我们自己，也进化了我们的工作。</span></p><p style="margin: 22px 0px 0px; padding: 0px; font-size: 16px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify; font-family: arial;"><span class="bjh-p">人工智能和设计的关系和这些进化类似。因此，虽然人工智能将取代设计师，但它将取代今天的设计师，而不是未来的设计师。人工智能将成为设计师可以用来满足不断变化的工作场所需求的设计合作伙伴和工具。在培养任何关系的时候，让我们学习一下我们的小伙伴能提供什么和不能提供什么。</span></p><p style="margin: 22px 0px 0px; padding: 0px; font-size: 16px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify; font-family: arial;">首先，让我们看看人工智能的局限性</p>')
GO

SET IDENTITY_INSERT [dbo].[repository_comment] OFF
GO


-- ----------------------------
-- Table structure for repository_details
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[repository_details]') AND type IN ('U'))
	DROP TABLE [dbo].[repository_details]
GO

CREATE TABLE [dbo].[repository_details] (
  [repository_details_id] int  IDENTITY(1,1) NOT NULL,
  [repository_id] int  NOT NULL,
  [content] text COLLATE Chinese_PRC_CI_AS  NULL,
  [update_time] datetime  NULL,
  [update_id] int  NULL,
  [opt_count] int  NULL
)
GO

ALTER TABLE [dbo].[repository_details] SET (LOCK_ESCALATION = TABLE)
GO

EXEC sp_addextendedproperty
'MS_Description', N'主键',
'SCHEMA', N'dbo',
'TABLE', N'repository_details',
'COLUMN', N'repository_details_id'
GO

EXEC sp_addextendedproperty
'MS_Description', N'主表id',
'SCHEMA', N'dbo',
'TABLE', N'repository_details',
'COLUMN', N'repository_id'
GO

EXEC sp_addextendedproperty
'MS_Description', N'内容',
'SCHEMA', N'dbo',
'TABLE', N'repository_details',
'COLUMN', N'content'
GO

EXEC sp_addextendedproperty
'MS_Description', N'修改时间',
'SCHEMA', N'dbo',
'TABLE', N'repository_details',
'COLUMN', N'update_time'
GO

EXEC sp_addextendedproperty
'MS_Description', N'修改人',
'SCHEMA', N'dbo',
'TABLE', N'repository_details',
'COLUMN', N'update_id'
GO

EXEC sp_addextendedproperty
'MS_Description', N'操作次数',
'SCHEMA', N'dbo',
'TABLE', N'repository_details',
'COLUMN', N'opt_count'
GO


-- ----------------------------
-- Records of repository_details
-- ----------------------------
SET IDENTITY_INSERT [dbo].[repository_details] ON
GO

INSERT INTO [dbo].[repository_details] ([repository_details_id], [repository_id], [content], [update_time], [update_id], [opt_count]) VALUES (N'1', N'1', N'<span style="color: rgb(51, 51, 51); font-family: arial; font-size: 16px; text-align: justify;">AI听起来比实际情况更吓人 。在其最广泛的定义，人工智能是“一种可以用人的方式推理或感知的机器。”还有一个潜在的焦虑，AI将像设计师一样进行构思、设计和展示创意。我们也看到了阿里鲁班系统通过算法在双十一期间为淘宝天猫创作运营banner的强大能力。</span><p style="margin: 22px 0px 0px; padding: 0px; font-size: 16px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify; font-family: arial;"><span class="bjh-p">所以设计师真的会被AI取代吗？长期以来，人类一直致力于创造机器和技术，以彻底改变我们的做事方式。从三轮车到汽车，我们已经进化到创造技术，使工作和生活变得更加容易。我们不仅进化了我们自己，也进化了我们的工作。</span></p><p style="margin: 22px 0px 0px; padding: 0px; font-size: 16px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify; font-family: arial;"><span class="bjh-p">人工智能和设计的关系和这些进化类似。因此，虽然人工智能将取代设计师，但它将取代今天的设计师，而不是未来的设计师。人工智能将成为设计师可以用来满足不断变化的工作场所需求的设计合作伙伴和工具。在培养任何关系的时候，让我们学习一下我们的小伙伴能提供什么和不能提供什么。</span></p><p style="margin: 22px 0px 0px; padding: 0px; font-size: 16px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify; font-family: arial;">首先，让我们看看人工智能的局限性</p>', N'2019-05-17 16:40:06.000', N'1', N'0')
GO

INSERT INTO [dbo].[repository_details] ([repository_details_id], [repository_id], [content], [update_time], [update_id], [opt_count]) VALUES (N'2', N'2', N'测试阿萨的那块离开诺福克蓝阿斯顿两方面那得看乃但看到你akin打开你的扣篮', N'2019-05-17 16:40:26.000', N'1', N'0')
GO

INSERT INTO [dbo].[repository_details] ([repository_details_id], [repository_id], [content], [update_time], [update_id], [opt_count]) VALUES (N'3', N'6', N'是大多数', N'2019-05-17 16:43:10.000', NULL, NULL)
GO

INSERT INTO [dbo].[repository_details] ([repository_details_id], [repository_id], [content], [update_time], [update_id], [opt_count]) VALUES (N'4', N'7', N'<span style="color: rgb(51, 51, 51); font-family: arial; font-size: 16px; text-align: justify;">AI听起来比实际情况更吓人 。在其最广泛的定义，人工智能是“一种可以用人的方式推理或感知的机器。”还有一个潜在的焦虑，AI将像设计师一样进行构思、设计和展示创意。我们也看到了阿里鲁班系统通过算法在双十一期间为淘宝天猫创作运营banner的强大能力。</span><p style="margin: 22px 0px 0px; padding: 0px; font-size: 16px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify; font-family: arial;"><span class="bjh-p">所以设计师真的会被AI取代吗？长期以来，人类一直致力于创造机器和技术，以彻底改变我们的做事方式。从三轮车到汽车，我们已经进化到创造技术，使工作和生活变得更加容易。我们不仅进化了我们自己，也进化了我们的工作。</span></p><p style="margin: 22px 0px 0px; padding: 0px; font-size: 16px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify; font-family: arial;"><span class="bjh-p">人工智能和设计的关系和这些进化类似。因此，虽然人工智能将取代设计师，但它将取代今天的设计师，而不是未来的设计师。人工智能将成为设计师可以用来满足不断变化的工作场所需求的设计合作伙伴和工具。在培养任何关系的时候，让我们学习一下我们的小伙伴能提供什么和不能提供什么。</span></p><p style="margin: 22px 0px 0px; padding: 0px; font-size: 16px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify; font-family: arial;">首先，让我们看看人工智能的局限性</p>', N'2019-05-17 16:45:47.590', N'0', N'0')
GO

INSERT INTO [dbo].[repository_details] ([repository_details_id], [repository_id], [content], [update_time], [update_id], [opt_count]) VALUES (N'5', N'8', N'<span style="color: rgb(51, 51, 51); font-family: arial; font-size: 16px; text-align: justify;">AI听起来比实际情况更吓人 。在其最广泛的定义，人工智能是“一种可以用人的方式推理或感知的机器。”还有一个潜在的焦虑，AI将像设计师一样进行构思、设计和展示创意。我们也看到了阿里鲁班系统通过算法在双十一期间为淘宝天猫创作运营banner的强大能力。</span><p style="margin: 22px 0px 0px; padding: 0px; font-size: 16px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify; font-family: arial;"><span class="bjh-p">所以设计师真的会被AI取代吗？长期以来，人类一直致力于创造机器和技术，以彻底改变我们的做事方式。从三轮车到汽车，我们已经进化到创造技术，使工作和生活变得更加容易。我们不仅进化了我们自己，也进化了我们的工作。</span></p><p style="margin: 22px 0px 0px; padding: 0px; font-size: 16px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify; font-family: arial;"><span class="bjh-p">人工智能和设计的关系和这些进化类似。因此，虽然人工智能将取代设计师，但它将取代今天的设计师，而不是未来的设计师。人工智能将成为设计师可以用来满足不断变化的工作场所需求的设计合作伙伴和工具。在培养任何关系的时候，让我们学习一下我们的小伙伴能提供什么和不能提供什么。</span></p><p style="margin: 22px 0px 0px; padding: 0px; font-size: 16px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify; font-family: arial;">首先，让我们看看人工智能的局限性</p>', N'2019-05-17 16:47:15.737', N'0', N'0')
GO

INSERT INTO [dbo].[repository_details] ([repository_details_id], [repository_id], [content], [update_time], [update_id], [opt_count]) VALUES (N'6', N'9', N'<span style="color: rgb(51, 51, 51); font-family: arial; font-size: 16px; text-align: justify;">AI听起来比实际情况更吓人 。在其最广泛的定义，人工智能是“一种可以用人的方式推理或感知的机器。”还有一个潜在的焦虑，AI将像设计师一样进行构思、设计和展示创意。我们也看到了阿里鲁班系统通过算法在双十一期间为淘宝天猫创作运营banner的强大能力。</span><p style="margin: 22px 0px 0px; padding: 0px; font-size: 16px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify; font-family: arial;"><span class="bjh-p">所以设计师真的会被AI取代吗？长期以来，人类一直致力于创造机器和技术，以彻底改变我们的做事方式。从三轮车到汽车，我们已经进化到创造技术，使工作和生活变得更加容易。我们不仅进化了我们自己，也进化了我们的工作。</span></p><p style="margin: 22px 0px 0px; padding: 0px; font-size: 16px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify; font-family: arial;"><span class="bjh-p">人工智能和设计的关系和这些进化类似。因此，虽然人工智能将取代设计师，但它将取代今天的设计师，而不是未来的设计师。人工智能将成为设计师可以用来满足不断变化的工作场所需求的设计合作伙伴和工具。在培养任何关系的时候，让我们学习一下我们的小伙伴能提供什么和不能提供什么。</span></p><p style="margin: 22px 0px 0px; padding: 0px; font-size: 16px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify; font-family: arial;">首先，让我们看看人工智能的局限性</p>', N'2019-05-17 16:49:52.147', N'0', N'0')
GO

INSERT INTO [dbo].[repository_details] ([repository_details_id], [repository_id], [content], [update_time], [update_id], [opt_count]) VALUES (N'8', N'14', N'<h2 style="text-align: center; margin: 0px; padding: 0px; font-size: 28px; line-height: 40px; font-family: &quot;Microsoft Yahei&quot;, 微软雅黑, 宋体;">人民日报评论员：战略误判，后果严重</h2><div><p style="margin: 0px; padding: 0px; font-size: 16px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify; font-family: arial;"><span class="bjh-p">“对于一个手中只有榔头的人，他所看到的问题都是钉子。”美国作家马克·吐温的这句话，用来比喻一些对中国怀有敌意的美国政客，可谓十分贴切。</span></p><p style="margin: 22px 0px 0px; padding: 0px; font-size: 16px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify; font-family: arial;"><span class="bjh-p">一段时间以来，美国不仅挑起中美经贸摩擦，而且在外交、科技、军事、涉台等诸多领域小动作不断。一些身居要职的美国政客，大肆宣扬“中国威胁论”，将中国视为“最危险的敌人”，扬言美中之间是“文明之间的冲突”，甚至叫嚣要把中国“打回到第三世界”；在市场问题上滥用出口管制措施，发布针对中国公司的限制交易令，忽悠、胁迫别的国家打压中国企业；在国际舞台上揣着形形色色的反华唱本，到处煽风点火、挑拨离间，满世界污蔑中伤中国……这些敌意浓浓的言行，为中美经贸谈判及两国关系蒙上阴影。</span></p><p style="margin: 22px 0px 0px; padding: 0px; font-size: 16px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify; font-family: arial;"><span class="bjh-p">“身体已进入21世纪，而脑袋还停留在过去”。一些美国政客对中国的敌意，是自私、狭隘和偏执的混合物，暴露出错误的世界观、过时的知识结构和顽固的意识形态偏见。他们的想法还停留在冷战思维、零和博弈的旧框框内，认为中国的发展必然会动美国的奶酪，断定“中国之所得，必是美国之所失”，把中美竞争看成是非输即赢甚至是你死我活的竞争。可以想见，如果被敌意蒙住了双眼，如果就是要打压、遏制中国的发展壮大，怎么可能还有谈判解决问题的诚意？</span></p></div>', N'2019-05-21 17:48:15.983', N'0', N'0')
GO

INSERT INTO [dbo].[repository_details] ([repository_details_id], [repository_id], [content], [update_time], [update_id], [opt_count]) VALUES (N'9', N'15', N'', N'2019-05-21 17:52:34.820', N'0', N'0')
GO

INSERT INTO [dbo].[repository_details] ([repository_details_id], [repository_id], [content], [update_time], [update_id], [opt_count]) VALUES (N'10', N'16', N'', N'2019-05-21 17:54:39.237', N'0', N'0')
GO

INSERT INTO [dbo].[repository_details] ([repository_details_id], [repository_id], [content], [update_time], [update_id], [opt_count]) VALUES (N'11', N'17', N'', N'2019-05-21 17:54:52.397', N'0', N'0')
GO

SET IDENTITY_INSERT [dbo].[repository_details] OFF
GO


-- ----------------------------
-- Table structure for StatusList
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[StatusList]') AND type IN ('U'))
	DROP TABLE [dbo].[StatusList]
GO

CREATE TABLE [dbo].[StatusList] (
  [id] int  IDENTITY(1,1) NOT NULL,
  [text] varchar(100) COLLATE Chinese_PRC_CI_AS  NULL,
  [table_name] varchar(255) COLLATE Chinese_PRC_CI_AS  NULL,
  [filed_name] varchar(255) COLLATE Chinese_PRC_CI_AS  NULL,
  [remark] varchar(max) COLLATE Chinese_PRC_CI_AS  NULL,
  [status_no] int  NULL,
  [status_type] varchar(50) COLLATE Chinese_PRC_CI_AS  NULL,
  [app_dept] varchar(50) COLLATE Chinese_PRC_CI_AS  NULL,
  [group_name] varchar(50) COLLATE Chinese_PRC_CI_AS  NULL,
  [data_time] datetime2(0)  NULL
)
GO

ALTER TABLE [dbo].[StatusList] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Table structure for users
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[users]') AND type IN ('U'))
	DROP TABLE [dbo].[users]
GO

CREATE TABLE [dbo].[users] (
  [user_id] int  IDENTITY(1,1) NOT NULL,
  [nick_name] varchar(255) COLLATE Chinese_PRC_CI_AS  NULL,
  [login_name] varchar(255) COLLATE Chinese_PRC_CI_AS  NOT NULL,
  [user_password] varchar(255) COLLATE Chinese_PRC_CI_AS  NOT NULL,
  [sex] int  NULL,
  [grade] int  NULL,
  [registration_time] datetime  NULL,
  [user_name] varchar(255) COLLATE Chinese_PRC_CI_AS  NULL,
  [user_name_en] varchar(255) COLLATE Chinese_PRC_CI_AS  NULL
)
GO

ALTER TABLE [dbo].[users] SET (LOCK_ESCALATION = TABLE)
GO

EXEC sp_addextendedproperty
'MS_Description', N'用户ID，主键',
'SCHEMA', N'dbo',
'TABLE', N'users',
'COLUMN', N'user_id'
GO

EXEC sp_addextendedproperty
'MS_Description', N'昵称',
'SCHEMA', N'dbo',
'TABLE', N'users',
'COLUMN', N'nick_name'
GO

EXEC sp_addextendedproperty
'MS_Description', N'登录名',
'SCHEMA', N'dbo',
'TABLE', N'users',
'COLUMN', N'login_name'
GO

EXEC sp_addextendedproperty
'MS_Description', N'密码',
'SCHEMA', N'dbo',
'TABLE', N'users',
'COLUMN', N'user_password'
GO

EXEC sp_addextendedproperty
'MS_Description', N'性别',
'SCHEMA', N'dbo',
'TABLE', N'users',
'COLUMN', N'sex'
GO

EXEC sp_addextendedproperty
'MS_Description', N'权限',
'SCHEMA', N'dbo',
'TABLE', N'users',
'COLUMN', N'grade'
GO

EXEC sp_addextendedproperty
'MS_Description', N'注册时间',
'SCHEMA', N'dbo',
'TABLE', N'users',
'COLUMN', N'registration_time'
GO

EXEC sp_addextendedproperty
'MS_Description', N'中文名',
'SCHEMA', N'dbo',
'TABLE', N'users',
'COLUMN', N'user_name'
GO

EXEC sp_addextendedproperty
'MS_Description', N'英文名',
'SCHEMA', N'dbo',
'TABLE', N'users',
'COLUMN', N'user_name_en'
GO


-- ----------------------------
-- Records of users
-- ----------------------------
SET IDENTITY_INSERT [dbo].[users] ON
GO

INSERT INTO [dbo].[users] ([user_id], [nick_name], [login_name], [user_password], [sex], [grade], [registration_time], [user_name], [user_name_en]) VALUES (N'1', N'系统管理员', N'admin', N'nbgYr0DpdB8=', N'1', N'1', N'2018-12-17 15:32:02.000', N'超级管理员', N'superAdmin')
GO

INSERT INTO [dbo].[users] ([user_id], [nick_name], [login_name], [user_password], [sex], [grade], [registration_time], [user_name], [user_name_en]) VALUES (N'2', N'Logan', N'Logan', N'x16YjoF1LNE=', N'1', N'1', N'2019-05-29 15:32:27.000', N'陈欢', N'Logan')
GO

INSERT INTO [dbo].[users] ([user_id], [nick_name], [login_name], [user_password], [sex], [grade], [registration_time], [user_name], [user_name_en]) VALUES (N'3', N'角色1', N'guest1', N'x16YjoF1LNE=', N'0', N'2', N'2019-05-29 15:33:25.000', N'张三', N'guest1')
GO

SET IDENTITY_INSERT [dbo].[users] OFF
GO


-- ----------------------------
-- Indexes structure for table business
-- ----------------------------
CREATE NONCLUSTERED INDEX [idx_countryid]
ON [dbo].[business] (
  [countryid] ASC
)
GO

CREATE NONCLUSTERED INDEX [idx_groupid]
ON [dbo].[business] (
  [groupid] ASC
)
GO

CREATE NONCLUSTERED INDEX [idx_natureid]
ON [dbo].[business] (
  [natureid] ASC
)
GO


-- ----------------------------
-- Primary Key structure for table business
-- ----------------------------
ALTER TABLE [dbo].[business] ADD CONSTRAINT [PK_business] PRIMARY KEY CLUSTERED ([id])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table property
-- ----------------------------
ALTER TABLE [dbo].[property] ADD CONSTRAINT [PK__property__735BA463851C2B47] PRIMARY KEY CLUSTERED ([property_id])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Uniques structure for table property_type
-- ----------------------------
ALTER TABLE [dbo].[property_type] ADD CONSTRAINT [UQ__property__543C4FD975DD8546] UNIQUE NONCLUSTERED ([property_type_name] ASC)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table property_type
-- ----------------------------
ALTER TABLE [dbo].[property_type] ADD CONSTRAINT [PK__property__3213E83F1A20D870] PRIMARY KEY CLUSTERED ([property_type_id])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table repository
-- ----------------------------
ALTER TABLE [dbo].[repository] ADD CONSTRAINT [PK__reposito__3213E83F5D63C7B1] PRIMARY KEY CLUSTERED ([repository_id])
WITH (PAD_INDEX = OFF, FILLFACTOR = 1, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table repository_comment
-- ----------------------------
ALTER TABLE [dbo].[repository_comment] ADD CONSTRAINT [PK__reposito__3213E83F60199943] PRIMARY KEY CLUSTERED ([repository_comment_id])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table repository_details
-- ----------------------------
ALTER TABLE [dbo].[repository_details] ADD CONSTRAINT [PK__reposito__3213E83F18D01FAC] PRIMARY KEY CLUSTERED ([repository_details_id])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table StatusList
-- ----------------------------
ALTER TABLE [dbo].[StatusList] ADD CONSTRAINT [PK__StatusLi__3213E83F14402BDC] PRIMARY KEY CLUSTERED ([id])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table users
-- ----------------------------
ALTER TABLE [dbo].[users] ADD CONSTRAINT [PK__user__B9BE370FD49CE0E9] PRIMARY KEY CLUSTERED ([user_id])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Foreign Keys structure for table property
-- ----------------------------
ALTER TABLE [dbo].[property] ADD CONSTRAINT [FK__property__proper__0D7A0286] FOREIGN KEY ([property_type_id]) REFERENCES [dbo].[property_type] ([property_type_id]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO

