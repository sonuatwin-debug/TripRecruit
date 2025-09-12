
export const MOCK_JOBS = [
  { id: '1', title: '高级软件工程师，机票业务', department: '工程部', location: '中国上海', keywords: '后端, java, 微服务' },
  { id: '2', title: '产品经理，酒店业务', department: '产品部', location: '新加坡', keywords: '产品, 酒店, 移动端' },
  { id: '3', title: 'UX/UI 设计师', department: '设计部', location: '美国山景城', keywords: '用户体验, 用户界面, figma' },
  { id: '4', title: '数据科学家', department: '数据科学', location: '中国上海', keywords: '机器学习, python, sql' },
  { id: '5', title: '市场专员，EMEA', department: '市场部', location: '英国伦敦', keywords: '数字营销, seo, 市场活动' },
  { id: '6', title: '前端工程师', department: '工程部', location: '新加坡', keywords: 'react, typescript, javascript' },
  { 
    id: '7', 
    title: '网络运维专员', 
    department: '工程部', 
    location: '迪拜', 
    keywords: '网络, 运维',
    details: {
      gender: '男',
      age: '20-30',
      nationality: '东南亚国家，华人 (暂不考虑中国、印尼、斯坦籍、俄罗斯、越南)',
      languages: '中文，英文',
      salary: '薪资待遇：12K 转 14K（试用期2个月）+转正后绩效【转正后有绩效评定，绩效范围0-3k】',
      hours: '9休4（09:00-18:00）（会有加班情况）',
      location: 'DB',
      requirements: [
        '计算机相关专业；',
        '熟悉路由器，交换机、防火墙、服务器等设备的设置与管理；熟悉SVN的配置及管理；熟悉 linux 系统，较强的解决问题的能力。；熟悉WIFI相关协议标准和性能标准，有丰富的无线协议类问题分析调试经验；',
        '熟悉三层转发；静态路由、OSPF、BGP等路由协议；熟练使用各类网络抓包工具，针对数据；',
        '具有亲和力，较强的责任感与敬业精神；思维敏捷、具有较强的沟通，协调能力及解决问题的能力；具备业务系统搭建及运维服务经验；',
        '无bc经验'
      ],
      responsibilities: [
        '负责公司电脑及电脑周边设备的日常管理及维护；日常运维支持和优化，保证各个系统稳定/高效运行，支持业务发展需要；',
        '负责公司服务器、交换机、路由器、电脑等网络设备的日常管理及维护；',
        '负责部门工作流程的建立和优化，负责监控/配置/性能容量等流程和管理平台的建设与维护；',
        '负责维护公司的网络安全/权限管理和电子文件的保密管理；',
        '完成上级安排的其他工作'
      ]
    }
  },
  { id: '8', title: '大数据工程师', department: '工程部', location: '迪拜', keywords: '大数据, hadoop, spark' },
  { id: '9', title: 'DBA工程师', department: '工程部', location: '迪拜', keywords: 'dba, mysql, oracle' },
  { id: '10', title: '安全工程师', department: '工程部', location: '迪拜', keywords: '网络安全, 信息安全' },
  { id: '11', title: '运维工程师', department: '工程部', location: '迪拜', keywords: '运维, linux, docker' },
  { id: '12', title: '高级网络工程师', department: '工程部', location: '迪拜', keywords: '网络, ccnp, ccie' },
  { id: '13', title: '运维域名工程师', department: '工程部', location: '迪拜', keywords: '运维, 域名, dns' },
  { id: '14', title: '桌面运维', department: '工程部', location: '迪拜', keywords: '桌面支持, it支持' },
  { id: '15', title: '中高级产品经理（体育）', department: '产品部', location: '迪拜', keywords: '产品经理, 体育, 游戏' },
  { id: '16', title: '招商专员', department: '市场部', location: '迪拜', keywords: '招商, 销售' },
  { id: '17', title: '招商组长', department: '市场部', location: '迪拜', keywords: '招商, 管理' },
  { id: '18', title: '代理发展专员', department: '市场部', location: '迪拜', keywords: '代理, 发展' },
  { id: '19', title: '代理发展组长', department: '市场部', location: '迪拜', keywords: '代理, 管理' },
  { id: '20', title: '代理部高管', department: '市场部', location: '迪拜', keywords: '代理, 高管' },
  { id: '21', title: '业务专员（推广）', department: '市场部', location: '迪拜', keywords: '业务, 推广' },
  { id: '22', title: '后台专员', department: '职能部', location: '迪拜', keywords: '后台' },
  { id: '23', title: '新媒体运营专员', department: '职能部', location: '迪拜', keywords: '新媒体, 运营' },
  { id: '24', title: '新媒体运营专家', department: '职能部', location: '迪拜', keywords: '新媒体, 运营, 专家' },
  { id: '25', title: '公关专员', department: '职能部', location: '迪拜', keywords: '公关' },
  { id: '26', title: '媒体公关专家', department: '职能部', location: '迪拜', keywords: '媒体, 公关, 专家' },
  { id: '27', title: '活动执行专员', department: '职能部', location: '迪拜', keywords: '活动, 执行' },
  { id: '28', title: '行政专员', department: '职能部', location: '迪拜', keywords: '行政' },
  { id: '29', title: '运维助理', department: '职能部', location: '迪拜', keywords: '运维, 助理' },
  { id: '30', title: '会计专员', department: '职能部', location: '迪拜', keywords: '会计' },
  { id: '31', title: '财务主管', department: '职能部', location: '迪拜', keywords: '财务, 主管' },
  { id: '32', title: '会计组长', department: '职能部', location: '迪拜', keywords: '会计, 组长' },
  { id: '33', title: '资金专员', department: '职能部', location: '迪拜', keywords: '资金' },
  { id: '34', title: '客服专员', department: '职能部', location: '迪拜', keywords: '客服' },
  { id: '35', title: '总监助理', department: '职能部', location: '香港', keywords: '助理, 行政' },
  { id: '36', title: '行政总务', department: '职能部', location: '日本', keywords: '行政, 总务' },
  { id: '37', title: '中高级产品经理（体育）', department: '产品部', location: '日本', keywords: '产品经理, 体育, 游戏' },
  { id: '38', title: '综管专员', department: '职能部', location: '柬埔寨', keywords: '综管' },
  { id: '39', title: '内账专员', department: '职能部', location: '柬埔寨', keywords: '内账' },
  { id: '40', title: '小组助理', department: '职能部', location: '柬埔寨', keywords: '助理' },
  { id: '41', title: '客服专员', department: '职能部', location: '柬埔寨', keywords: '客服' },
  { id: '42', title: '财务客服专员', department: '职能部', location: '柬埔寨', keywords: '财务, 客服' },
  { id: '43', title: '品牌运营', department: '职能部', location: '柬埔寨', keywords: '品牌, 运营' },
  { id: '44', title: '财务外账专员', department: '职能部', location: '柬埔寨', keywords: '财务, 外账' },
  { id: '45', title: '财务内账专员', department: '职能部', location: '柬埔寨', keywords: '财务, 内账' },
  { id: '46', title: '人力资源部主管', department: '职能部', location: '柬埔寨', keywords: '人力资源, 主管' },
  { id: '47', title: '招聘专员/主管', department: '职能部', location: '柬埔寨', keywords: '招聘' },
  { id: '48', title: '客户关系发展', department: '职能部', location: '柬埔寨', keywords: '客户关系' },
  { id: '49', title: '业务拓展', department: '职能部', location: '柬埔寨', keywords: '业务拓展' },
  { id: '50', title: '品牌助理', department: '职能部', location: '柬埔寨', keywords: '品牌, 助理' },
  { id: '51', title: '平面设计', department: '设计部', location: '柬埔寨', keywords: '设计' },
  { id: '52', title: 'UI影片剪辑专员', department: '设计部', location: '柬埔寨', keywords: 'ui, 影片剪辑' },
  { id: '53', title: '推广专员', department: '市场部', location: '柬埔寨', keywords: '推广' },
  { id: '54', title: '转化专员', department: '市场部', location: '柬埔寨', keywords: '转化' },
  { id: '55', title: 'SEO专员', department: '市场部', location: '柬埔寨', keywords: 'seo' },
  { id: '56', title: '推广维护专员', department: '市场部', location: '柬埔寨', keywords: '推广, 维护' },
  { id: '57', title: '新媒体运营', department: '市场部', location: '柬埔寨', keywords: '新媒体, 运营' },
  { id: '58', title: '自媒体专员', department: '市场部', location: '柬埔寨', keywords: '自媒体' },
  { id: '59', title: '资源专员', department: '市场部', location: '柬埔寨', keywords: '资源' },
  { id: '60', title: 'Telegram社群运营规划师', department: '市场部', location: '柬埔寨', keywords: 'telegram, 运营' },
  { id: '61', title: '社交媒体运营专员（粉丝导流方向）', department: '市场部', location: '柬埔寨', keywords: '社交媒体, 运营' },
  { id: '62', title: 'MK招商专员', department: '市场部', location: '柬埔寨', keywords: '招商' },
  { id: '63', title: '客户开发专员', department: '市场部', location: '柬埔寨', keywords: '客户开发' },
  { id: '64', title: '广告投放专员', department: '市场部', location: '柬埔寨', keywords: '广告投放' },
  { id: '65', title: '频道搭建专员', department: '市场部', location: '柬埔寨', keywords: '频道搭建' },
  { id: '66', title: '渠道开发专员', department: '市场部', location: '柬埔寨', keywords: '渠道开发' },
  { id: '67', title: '推广组长', department: '市场部', location: '柬埔寨', keywords: '推广, 组长' },
  { id: '68', title: '招商专员', department: '市场部', location: '柬埔寨', keywords: '招商' },
  { id: '69', title: '代理发展专员', department: '市场部', location: '柬埔寨', keywords: '代理发展' },
  { id: '70', title: '转化专员', department: '市场部', location: '马来西亚', keywords: '转化, 运营' },
  { id: '71', title: '自媒体运营', department: '市场部', location: '马来西亚', keywords: '自媒体, 运营' },
  { id: '72', title: '电话专员', department: '职能部', location: '斯里兰卡', keywords: '电话' },
  { id: '73', title: '运营专员', department: '职能部', location: '斯里兰卡', keywords: '运营' },
  { id: '74', title: '活动运营专员', department: '职能部', location: '斯里兰卡', keywords: '活动, 运营' },
  { id: '75', title: '红利组长', department: '职能部', location: '斯里兰卡', keywords: '红利, 组长' },
  { id: '76', title: '红利专员', department: '职能部', location: '斯里兰卡', keywords: '红利' },
  { id: '77', title: '部门助理', department: '职能部', location: '斯里兰卡', keywords: '助理' },
  { id: '78', title: '活动运营组长', department: '职能部', location: '斯里兰卡', keywords: '活动, 运营, 组长' },
  { id: '79', title: '用户运营专员', department: '职能部', location: '斯里兰卡', keywords: '用户, 运营' },
  { id: '80', title: '平台运营专员', department: '职能部', location: '斯里兰卡', keywords: '平台, 运营' },
  { id: '81', title: '财务专员', department: '职能部', location: '斯里兰卡', keywords: '财务' },
  { id: '82', title: 'B端测试专员', department: '职能部', location: '斯里兰卡', keywords: 'b端, 测试' },
  { id: '83', title: '用户反馈专员', department: '职能部', location: '斯里兰卡', keywords: '用户反馈' },
  { id: '84', title: '内控专员', department: '职能部', location: '斯里兰卡', keywords: '内控' },
  { id: '85', title: '风控专员', department: '职能部', location: '斯里兰卡', keywords: '风控' },
  { id: '86', title: '风控质检专员', department: '职能部', location: '斯里兰卡', keywords: '风控, 质检' },
  { id: '87', title: '研发专员', department: '职能部', location: '斯里兰卡', keywords: '研发' },
  { id: '88', title: '风控策略专家（体育）', department: '职能部', location: '斯里兰卡', keywords: '风控, 策略, 体育' },
  { id: '89', title: '风控策略专家（真人/彩票/棋牌等）', department: '职能部', location: '斯里兰卡', keywords: '风控, 策略' },
  { id: '90', title: 'VS虚拟体育游戏专家（中高级 / 资深专家）', department: '职能部', location: '斯里兰卡', keywords: '虚拟体育, 游戏' },
  { id: '91', title: '技术客服', department: '职能部', location: '斯里兰卡', keywords: '技术, 客服' },
  { id: '92', title: '总经办专员', department: '职能部', location: '斯里兰卡', keywords: '总经办' },
  { id: '93', title: '网管专员', department: '职能部', location: '斯里兰卡', keywords: '网管' },
  { id: '94', title: '电工', department: '职能部', location: '斯里兰卡', keywords: '电工' },
  { id: '95', title: '签证专员', department: '职能部', location: '斯里兰卡', keywords: '签证' },
  { id: '96', title: '数据分析师', department: '数据科学', location: '斯里兰卡', keywords: '数据分析' },
  { id: '97', title: '后端工程师（业务开发）', department: '工程部', location: '斯里兰卡', keywords: '后端' },
  { id: '98', title: '安卓工程师', department: '工程部', location: '斯里兰卡', keywords: '安卓' },
  { id: '99', title: 'IOS工程师', department: '工程部', location: '斯里兰卡', keywords: 'ios' },
  { id: '100', title: '前端工程师', department: '工程部', location: '斯里兰卡', keywords: '前端' },
  { id: '101', title: '桌面运维', department: '工程部', location: '斯里兰卡', keywords: '桌面运维' },
  { id: '102', title: '测试工程师', department: '工程部', location: '斯里兰卡', keywords: '测试' },
  { id: '103', title: '中高级产品经理', department: '产品部', location: '斯里兰卡', keywords: '产品经理' },
  { id: '104', title: '中高级产品经理（体育）', department: '产品部', location: '斯里兰卡', keywords: '产品经理, 体育' },
  { id: '105', title: '业务专员（推广）', department: '市场部', location: '斯里兰卡', keywords: '推广' },
  { id: '106', title: '推广专员', department: '市场部', location: '斯里兰卡', keywords: '推广' },
  { id: '107', title: '招商发展组长', department: '市场部', location: '斯里兰卡', keywords: '招商, 组长' },
  { id: '108', title: '招商发展专员', department: '市场部', location: '斯里兰卡', keywords: '招商, 专员' },
  { id: '109', title: '招商组长', department: '市场部', location: '斯里兰卡', keywords: '招商, 组长' },
  { id: '110', title: '招商专员', department: '市场部', location: '斯里兰卡', keywords: '招商, 专员' },
  { id: '111', title: '初级/中级培训师', department: '职能部', location: '泰国', keywords: '培训' },
  { id: '112', title: '面试专员', department: '职能部', location: '泰国', keywords: '面试, 招聘' },
  { id: '113', title: '招聘支持专员', department: '职能部', location: '泰国', keywords: '招聘, 支持' },
  { id: '114', title: '劳动关系专员', department: '职能部', location: '泰国', keywords: '劳动关系' },
  { id: '115', title: 'IAD业务员', department: '职能部', location: '泰国', keywords: 'IAD, 业务' },
  { id: '116', title: 'MD业务员', department: '职能部', location: '泰国', keywords: 'MD, 业务' },
  { id: '117', title: '信息统筹专员', department: '职能部', location: '泰国', keywords: '信息, 统筹' },
  { id: '118', title: '数据审查专员', department: '职能部', location: '泰国', keywords: '数据, 审查' },
  { id: '119', title: '客服维护', department: '职能部', location: '泰国', keywords: '客服, 维护' },
  { id: '120', title: '高管助理（运营和维护方向）', department: '职能部', location: '泰国', keywords: '助理, 运营, 维护' },
  { id: '121', title: '数据分析师', department: '数据科学', location: '泰国', keywords: '数据分析' },
  { id: '122', title: '游客客服专员', department: '职能部', location: '泰国', keywords: '客服, 游客' },
  { id: '123', title: '业务支持', department: '职能部', location: '泰国', keywords: '业务支持' },
  { id: '124', title: '大客专员', department: '职能部', location: '泰国', keywords: '大客户' },
  { id: '125', title: '运营专员', department: '职能部', location: '泰国', keywords: '运营' },
  { id: '126', title: '运营专员（负责棋牌）', department: '职能部', location: '泰国', keywords: '运营, 棋牌' },
  { id: '127', title: '运营组长（负责棋牌）', department: '职能部', location: '泰国', keywords: '运营, 组长, 棋牌' },
  { id: '128', title: '资深品类运营（真人方向）', department: '职能部', location: '泰国', keywords: '运营, 真人' },
  { id: '129', title: '资深品类运营（棋牌方向）', department: '职能部', location: '泰国', keywords: '运营, 棋牌' },
  { id: '130', title: '资深品类运营（电子方向）', department: '职能部', location: '泰国', keywords: '运营, 电子' },
  { id: '131', title: '调研专员（产品需求）', department: '职能部', location: '泰国', keywords: '调研, 产品' },
  { id: '132', title: '游戏体验专员', department: '职能部', location: '泰国', keywords: '游戏, 体验' },
  { id: '133', title: '平台体验组长', department: '职能部', location: '泰国', keywords: '平台, 体验, 组长' },
  { id: '134', title: '平台体验专员', department: '职能部', location: '泰国', keywords: '平台, 体验' },
  { id: '135', title: '体验测试组长', department: '职能部', location: '泰国', keywords: '测试, 体验, 组长' },
  { id: '136', title: '体验测试专员', department: '职能部', location: '泰国', keywords: '测试, 体验' },
  { id: '137', title: '综合专员（体验助理）', department: '职能部', location: '泰国', keywords: '综合, 助理' },
  { id: '138', title: '综合专员（游戏培训）', department: '职能部', location: '泰国', keywords: '综合, 游戏, 培训' },
  { id: '139', title: '技术客服', department: '职能部', location: '泰国', keywords: '技术, 客服' },
  { id: '140', title: '数据分析员', department: '数据科学', location: '泰国', keywords: '数据分析' },
  { id: '141', title: '老板家庭助理', department: '职能部', location: '泰国', keywords: '助理, 家庭' },
  { id: '142', title: '会计专员', department: '职能部', location: '泰国', keywords: '会计' },
  { id: '143', title: '会计专员', department: '职能部', location: '泰国', keywords: '会计' },
  { id: '144', title: '会计组长', department: '职能部', location: '泰国', keywords: '会计, 组长' },
  { id: '145', title: '共享服务专员', department: '职能部', location: '泰国', keywords: '共享服务' },
  { id: '146', title: '仓库管理专员', department: '职能部', location: '泰国', keywords: '仓库, 管理' },
  { id: '147', title: '财务主管', department: '职能部', location: '泰国', keywords: '财务, 主管' },
  { id: '148', title: '会计专员/组长', department: '职能部', location: '泰国', keywords: '会计, 组长' },
  { id: '149', title: 'UI/UX设计师-验收走查方向', department: '设计部', location: '泰国', keywords: 'ui, ux, 设计' },
  { id: '150', title: 'UI设计', department: '设计部', location: '泰国', keywords: 'ui, 设计' },
  { id: '151', title: '网络工程师', department: '工程部', location: '泰国', keywords: '网络, 工程' },
  { id: '152', title: '安卓开发工程师', department: '工程部', location: '泰国', keywords: '安卓, 开发' },
  { id: '153', title: '产品专家', department: '产品部', location: '泰国', keywords: '产品' },
  { id: '154', title: 'AI专员', department: '工程部', location: '泰国', keywords: 'ai, 人工智能' },
  { id: '155', title: 'SEO学徒', department: '市场部', location: '泰国', keywords: 'seo, 学徒' },
  { id: '156', title: '直播运营专员', department: '市场部', location: '泰国', keywords: '直播, 运营' },
  { id: '157', title: '直播维护专员', department: '市场部', location: '泰国', keywords: '直播, 维护' },
  { id: '158', title: '直播运营专员', department: '市场部', location: '泰国', keywords: '直播, 运营' },
  { id: '159', title: '商推专员', department: '市场部', location: '泰国', keywords: '商推' },
  { id: '160', title: '转化专员', department: '市场部', location: '泰国', keywords: '转化' },
  { id: '161', title: '推广专员', department: '市场部', location: '泰国', keywords: '推广' },
  { id_content: '162', title: 'SEO专员', department: '市场部', location: '泰国', keywords: 'seo' },
  { id: '163', title: '渗透劫持', department: '市场部', location: '泰国', keywords: '渗透, 劫持' },
  { id: '164', title: '推广维护专员', department: '市场部', location: '泰国', keywords: '推广, 维护' },
  { id: '165', title: '推广组长', department: '市场部', location: '泰国', keywords: '推广, 组长' },
  { id: '166', title: '自媒体/公众号运营', department: '市场部', location: '泰国', keywords: '自媒体, 运营' },
  { id: '167', title: '自媒体专员', department: '市场部', location: '泰国', keywords: '自媒体' },
  { id: '168', title: 'SEM', department: '市场部', location: '泰国', keywords: 'sem' },
  { id: '169', title: '渠道专员', department: '市场部', location: '泰国', keywords: '渠道' },
  { id: '170', title: '开发专员', department: '市场部', location: '泰国', keywords: '开发' },
  { id: '171', title: '自媒体推广专员', department: '市场部', location: '泰国', keywords: '自媒体, 推广' },
  { id: '172', title: '渗透学徒', department: '市场部', location: '泰国', keywords: '渗透, 学徒' },
  { id: '173', title: 'SEO组长', department: '市场部', location: '泰国', keywords: 'seo, 组长' },
  { id: '174', title: '网站站长/网站运营', department: '市场部', location: '泰国', keywords: '站长, 运营' },
  { id: '175', title: '引流专员', department: '市场部', location: '泰国', keywords: '引流' },
  { id: '176', title: '自媒体渠道专员', department: '市场部', location: '泰国', keywords: '自媒体, 渠道' }
];

export const MOCK_STORIES = [
    {
      name: '李伟',
      role: '软件工程师',
      story: '我们在携程应对的挑战规模是巨大的。每一天都是一个新的学习机会，推动着旅游技术可能性的边界。',
    },
    {
      name: '陈莎拉',
      role: '产品经理',
      story: "我热爱我的工作，因为它直接影响着数百万的旅行者。看到自己的想法变为现实，让每个人的旅行更加顺畅，这非常有成就感。",
    },
    {
      name: '金大卫',
      role: '数据分析师',
      story: '这里的文化非常注重合作。我们都以数据为驱动，共同的使命是创造最佳的旅行体验。',
    },
];

export const MOCK_NEWS = [
  {
    title: '携程集团发布全新AI驱动的旅行助手',
    date: '2023年8月15日',
    excerpt: '新的助手名为TripGen，旨在为全球用户提供个性化的旅行行程和实时支持。',
  },
  {
    title: '公司扩大可持续旅游计划',
    date: '2023年7月22日',
    excerpt: '携程集团致力于推广环保旅行选择，并减少其运营的碳足迹。',
  }
];

export const MOCK_JOB_DESCRIPTION = `
职位名称: 高级软件工程师，机票业务
部门: 工程部
地点: 中国上海

关于团队:
机票团队是我们业务的核心，负责构建和维护每天为数百万用户提供服务的机票预订引擎。我们使用尖端技术在搞流量、分布式环境中解决复杂问题。

职责:
- 为我们的机票预订平台设计、开发和维护高性能、可扩展的后端服务。
- 与产品经理、设计师和其他工程师合作，交付新功能和改进。
- 编写简洁、可维护且经过良好测试的代码。
- 参与代码审查，为卓越的工程文化做出贡献。
- 排除和解决生产问题。

资格:
- 5年以上专业软件开发经验。
- 精通Java，并有Spring Boot经验。
- 有构建和运营分布式系统和微服务的经验。
- 对数据结构、算法和系统设计有扎实的理解。
- 计算机科学或相关领域的学士学位。
- 出色的解决问题和沟通能力。
`;

export const MOCK_USER_PROFILE = `
张三
邮箱: zhang.san@email.com
电话: +86 138 1234 5678

简介:
经验丰富的软件工程师，拥有超过6年的使用Java和Python构建可扩展后端系统的经验。对旅游技术和创造以用户为中心的产品充满热情。

经历:
- 软件工程师，科技公司 (2018至今)
  - 为大型电子商务平台开发微服务。
  - 使用Spring Boot、Kafka和PostgreSQL。
  - 领导一个项目将系统性能提高了20%。

教育:
- 加州大学伯克利分校，计算机科学学士学位 (2018)

技能:
- 语言: Java, Python, SQL
- 框架: Spring Boot, Django
- 工具: Docker, Kubernetes, Git
`;
