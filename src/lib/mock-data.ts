
export const MOCK_JOBS = [
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
  { id: '101', title: '桌面运维', department: '工程部', location: '斯里兰卡', keywords: '桌面运维' },
  { id: '102', title: '测试工程师', department: '工程部', location: '斯里兰卡', keywords: '测试' },
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
  { id: '162', title: 'SEO专员', department: '市场部', location: '泰国', keywords: 'seo' },
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
  { id: '176', title: '自媒体渠道专员', department: '市场部', location: '泰国', keywords: '自媒体, 渠道' },
  { 
    id: '177', 
    title: 'RZ 账目', 
    department: '职能部', 
    location: '菲律宾', 
    keywords: 'rz, 账目',
    details: {
      gender: '不限',
      age: '21-30岁',
      nationality: '马来、越南、缅甸',
      languages: '中文沟通顺畅，懂英语者优先',
      salary: '10k 转 12k',
      hours: '9小时工作制，月休4天',
      location: '菲律宾',
      requirements: [
        '学历要求：中学及以上',
        '中文沟通无障碍，普通话流利，英语能力好者优先；',
        '理解能力强，对数字敏感；',
        '具备良好的沟通表达能力、情绪管理能力和抗压能力，团队协作能力强；',
        '有会计经验者优先；',
        '具备服务意识和服务精神，执行力强，稳定性高。'
      ],
      responsibilities: [
        '负责核实员工入职、签证费用账单；',
        '对接财务，处理相关款项问题；',
        '记录和核对账本，确保数据准确。'
      ]
    }
  },
  { 
    id: '178', 
    title: '接机专员', 
    department: '职能部', 
    location: '菲律宾', 
    keywords: '接机',
    details: {
      gender: '男',
      age: '21-35岁',
      nationality: '马来西亚、印尼、缅甸\n特别说明：\n不要人在菲律宾的；\n若在菲律宾有 POGO 记录 / 黑名单 / 13A 签证，一律不考虑；\n仅限“小白”。',
      languages: '中英文流利',
      salary: 'RMB：10K 转 12K\nUSD：1390U 转 1670U',
      hours: '9小时（弹性，根据行程安排）',
      location: '菲律宾',
      requirements: [
        '学历要求：不限',
        '工作态度积极，能额外加班完成接机任务；',
        '不晕车，时间观念强；',
        '协助搬运行李及重物；',
        '精通中英文口语和书面表达；',
        '面对面沟通自然大方，不害羞；',
        '服从上级安排的工作。'
      ],
      responsibilities: [
        '负责机场接送机；',
        '随时对接接机群，确保信息准确及时；',
        '完成领导交办的其他任务。'
      ]
    }
  },
  { 
    id: '179', 
    title: '数据分析专员', 
    department: '职能部', 
    location: '菲律宾', 
    keywords: '数据分析',
    details: {
      gender: '不限',
      age: '21-33岁',
      nationality: '外籍',
      languages: '中文流利，汉语熟练',
      salary: '10k-12k',
      hours: '9小时工作制，月休4天',
      location: '菲律宾',
      requirements: [
        '学历要求：大专及以上',
        '技能要求：熟练运用 Excel 表格'
      ],
      responsibilities: [
        '统计并整理业务部门的住宿费用；',
        '核实住宿人员信息，并提出房间优化建议；',
        '分析与统计内宿的空房率与空床率；',
        '对接并解答有关费用计算方式的疑问。'
      ]
    }
  },
  { 
    id: '180', 
    title: '劳动关系专员', 
    department: '职能部', 
    location: '菲律宾', 
    keywords: '劳动关系',
    details: {
      gender: '女',
      age: '21-30岁',
      nationality: '外籍（缅甸 / 马来 / 印尼 / 越南）',
      languages: '中文标准，无口音',
      salary: '10k-12k',
      hours: '9小时工作制，月休4天',
      location: '菲律宾',
      requirements: [
        '学历要求：本科及以上',
        '头脑灵活，善于沟通，有耐心，能服从上级安排；',
        '做事仔细、认真、有责任感；',
        '熟练掌握 Excel 基础函数与数据整理（必须会：MID、LEFT、RIGHT、VLOOKUP、HLOOKUP、IF、COUNTIF、MATCH、INDEX、数据透视表等常用公式）；',
        '中文标准，无口音；',
        '能接受偶尔出差至第三国。'
      ],
      responsibilities: [
        '对接部门及员工，处理入职、转岗、离职等手续相关工作；',
        '审批入转离流程，跟进进度并汇总数据；',
        '完成领导交办的其他工作；',
        '具备良好的沟通与服务意识。'
      ]
    }
  },
  { 
    id: '181', 
    title: '医生', 
    department: '职能部', 
    location: '菲律宾', 
    keywords: '医生',
    details: {
      gender: '不限',
      age: '不超过45岁（特殊人才可适当放宽）',
      nationality: '中籍优先，其余国籍需中文流利，中文母语级',
      languages: '中文流利，母语级',
      salary: '2w 起，具体面议',
      hours: '面议',
      location: '菲律宾',
      requirements: [
        '学历要求：医学相关专业本科及以上学历；',
        '执业资格：具有有效的《医师执业证书》及《医师资格证书》；',
        '专业方向：全科等（根据岗位实际需求）；',
        '工作经验：具备 1 年以上临床工作经验，有二级及以上医院工作经验者优先；',
        '专业能力：',
        '熟悉常见疾病的诊断与治疗；',
        '能独立完成线上 / 线下门诊工作；',
        '综合素质：',
        '具备良好的沟通能力和团队合作精神；',
        '工作责任心强，遵守职业道德；',
        '有服务意识，具备较强的应急处理能力。'
      ],
      responsibilities: []
    }
  },
  { 
    id: '182', 
    title: '护士', 
    department: '职能部', 
    location: '菲律宾', 
    keywords: '护士',
    details: {
      gender: '女',
      age: '35岁以下',
      nationality: '中籍优先，其余国籍需中文流利，中文母语级',
      languages: '中文流利，母语级',
      salary: '14k-15k，具体面议',
      hours: '面议',
      location: '菲律宾',
      requirements: [
        '学历要求：护理相关专业中专及以上学历；',
        '资格证书：持有有效的《护士执业证书》；',
        '工作经验：',
        '有临床护理工作经验者优先；',
        '专业毕业生表现优秀也可考虑；',
        '专业能力：',
        '掌握基础护理知识和操作技能；',
        '能熟练进行生命体征测量、输液、注射、换药、采血等操作；',
        '能识别和处理常见突发状况或及时上报；',
        '综合素质：',
        '工作认真细致，责任心强；',
        '具备良好的沟通能力、服务意识和团队协作精神；',
        '仪表端庄，语言表达清晰，态度亲和。'
      ],
      responsibilities: []
    }
  },
  { 
    id: '183', 
    title: '综管专员', 
    department: '职能部', 
    location: '菲律宾', 
    keywords: '综管',
    details: {
      gender: '不限',
      age: '35岁以下',
      nationality: '不限（不要台湾籍）',
      languages: '中文 / 英文流利',
      salary: '按照公司制度',
      hours: '9小时工作制，月休4天',
      location: '菲律宾',
      requirements: [
        '不要返聘人员；',
        '头脑灵活，思维清晰；',
        '有后勤 / 行政经验者优先；',
        '中文 / 英文沟通无障碍。'
      ],
      responsibilities: [
        '处理部门日常相关工作；',
        '与部门沟通并跟进落实部门提出的需求；',
        '接受部门临时安排与调动，服从管理；',
        '具备良好的沟通意愿与服务意识；',
        '能够接受三班倒。'
      ]
    }
  },
  { id: '184', title: '数据开发专员', department: '职能部', location: '菲律宾', keywords: '数据开发' },
  { id: '185', title: '部门助理', department: '职能部', location: '菲律宾', keywords: '助理' },
  { id: '186', title: '客服维护', department: '职能部', location: '菲律宾', keywords: '客服, 维护' },
  { id: '187', title: '运营专员', department: '职能部', location: '菲律宾', keywords: '运营' },
  { id: '188', title: '红利专员', department: '职能部', location: '菲律宾', keywords: '红利' },
  { id: '189', title: '敏感信息专员', department: '职能部', location: '菲律宾', keywords: '敏感信息' },
  { id: '190', title: '薪酬专员', department: '职能部', location: '菲律宾', keywords: '薪酬' },
  { id: '191', title: '行政专员', department: '职能部', location: '菲律宾', keywords: '行政' },
  { id: '192', title: '运维助理', department: '职能部', location: '菲律宾', keywords: '运维, 助理' },
  { id: '193', title: '会计专员', department: '职能部', location: '菲律宾', keywords: '会计' },
  { id: '194', title: '会计组长', department: '职能部', location: '菲律宾', keywords: '会计, 组长' },
  { id: '195', title: '出纳专员', department: '职能部', location: '菲律宾', keywords: '出纳' },
  { id: '196', title: '信息管理专员', department: '职能部', location: '菲律宾', keywords: '信息管理' },
  { id: '197', title: '换汇专员', department: '职能部', location: '菲律宾', keywords: '换汇' },
  { id: '198', title: '员工关系', department: '职能部', location: '菲律宾', keywords: '员工关系' },
  { id: '199', title: '帐目专员', department: '职能部', location: '菲律宾', keywords: '帐目' },
  { id: '200', title: 'OA审核/数据专员', department: '职能部', location: '菲律宾', keywords: 'oa, 审核, 数据' },
  { id: '201', title: '薪酬主管', department: '职能部', location: '菲律宾', keywords: '薪酬, 主管' },
  { id: '202', title: '薪酬组长', department: '职能部', location: '菲律宾', keywords: '薪酬, 组长' },
  { id: '203', title: '招聘主管', department: '职能部', location: '菲律宾', keywords: '招聘, 主管' },
  { id: '204', title: 'HRBP', department: '职能部', location: '菲律宾', keywords: 'hrbp, 人力资源' },
  { id: '205', title: '菲华行政', department: '职能部', location: '菲律宾', keywords: '行政' },
  { id: '206', title: '数据分析师', department: '数据科学', location: '菲律宾', keywords: '数据分析' },
  { id: '207', title: '三方专员/出入款专员', department: '职能部', location: '菲律宾', keywords: '三方, 出入款' },
  { id: '208', title: '极速专员', department: '职能部', location: '菲律宾', keywords: '极速' },
  { id: '209', title: '客服专员', department: '职能部', location: '菲律宾', keywords: '客服' },
  { id: '210', title: '财务经理或主管', department: '职能部', location: '菲律宾', keywords: '财务, 经理, 主管' },
  { id: '211', title: '财务副组长', department: '职能部', location: '菲律宾', keywords: '财务, 副组长' },
  { id: '212', title: '报表管理', department: '职能部', location: '菲律宾', keywords: '报表' },
  { id: '213', title: 'USDT支出专员', department: '职能部', location: '菲律宾', keywords: 'usdt, 支出' },
  { id: '214', title: '督导专员', department: '职能部', location: '菲律宾', keywords: '督导' },
  { id: '215', title: '资金审核专员', department: '职能部', location: '菲律宾', keywords: '资金, 审核' },
  { id: '216', title: '单据专员', department: '职能部', location: '菲律宾', keywords: '单据' },
  { id: '217', title: '运营客服', department: '职能部', location: '菲律宾', keywords: '运营, 客服' },
  { id: '218', title: '投诉专员', department: '职能部', location: '菲律宾', keywords: '投诉' },
  { id: '219', title: '渠道招商人员', department: '职能部', location: '菲律宾', keywords: '渠道, 招商' },
  { id: '220', title: '总监助理', department: '职能部', location: '菲律宾', keywords: '总监, 助理' },
  { id: '221', title: '资金专员', department: '职能部', location: '菲律宾', keywords: '资金' },
  { id: '222', title: '审计专员', department: '职能部', location: '菲律宾', keywords: '审计' },
  { id: '223', title: '资产调配专员', department: '职能部', location: '菲律宾', keywords: '资产, 调配' },
  { id: '224', title: '公关经理', department: '职能部', location: '菲律宾', keywords: '公关, 经理' },
  { id: '225', title: '财务主管', department: '职能部', location: '菲律宾', keywords: '财务, 主管' },
  { id: '226', title: '财务主管/经理', department: '职能部', location: '菲律宾', keywords: '财务, 主管, 经理' },
  { id: '227', title: '财务专员', department: '职能部', location: '菲律宾', keywords: '财务' },
  { id: '228', title: '大数据工程师', department: '工程部', location: '菲律宾', keywords: '大数据, hadoop, spark' },
  { id: '229', title: 'DBA工程师', department: '工程部', location: '菲律宾', keywords: 'dba, mysql, oracle' },
  { id: '230', title: '运维工程师', department: '工程部', location: '菲律宾', keywords: '运维, linux' },
  { id: '231', title: '高级网络工程师', department: '工程部', location: '菲律宾', keywords: '网络, ccnp, ccie' },
  { id: '232', title: '运维域名工程师', department: '工程部', location: '菲律宾', keywords: '运维, 域名' },
  { id: '233', title: '桌面运维', department: '工程部', location: '菲律宾', keywords: '桌面, it' },
  { id: '234', title: '安全工程师', department: '工程部', location: '菲律宾', keywords: '安全, 网络' },
  { id: '235', title: '高级java开发', department: '工程部', location: '菲律宾', keywords: 'java, spring' },
  { id: '236', title: '高级系统工程师', department: '工程部', location: '菲律宾', keywords: '系统, linux' },
  { id: '237', title: '技术总监', department: '工程部', location: '菲律宾', keywords: '技术, 管理, 总监' },
  { id: '238', title: '自动化/功能测试工程师', department: '工程部', location: '菲律宾', keywords: '测试, 自动化' },
  { id: '239', title: '高级产品经理', department: '产品部', location: '菲律宾', keywords: '产品, 经理' },
  { id: '240', title: '技术支持', department: '工程部', location: '菲律宾', keywords: '技术, 支持' },
  { id: '241', title: '运维总监', department: '工程部', location: '菲律宾', keywords: '运维, 管理, 总监' },
  { id: '242', title: '高级业务运维工程师', department: '工程部', location: '菲律宾', keywords: '运维, 业务' },
  { id: '243', title: '高级DBA运维工程师', department: '工程部', location: '菲律宾', keywords: 'dba, 运维' },
  { id: '244', title: '中级DBA运维工程师', department: '工程部', location: '菲律宾', keywords: 'dba, 运维' },
  { id: '245', title: '高级技术运维工程师', department: '工程部', location: '菲律宾', keywords: '运维, 技术' },
  { id: '246', title: '信息安全工程师', department: '工程部', location: '菲律宾', keywords: '信息安全, 网络安全' },
  { id: '247', title: '项目经理', department: '工程部', location: '菲律宾', keywords: '项目, 管理, pmp' }
];

export const MOCK_STORIES = [
    {
      name: '李伟',
      role: '软件工程师',
      story: '在携程，我们面对的是世界级的技术挑战。每一天，我都能接触到前沿的技术，和优秀的同事一起，推动旅游行业的变革。',
    },
    {
      name: '陈莎拉',
      role: '产品经理',
      story: '将一个想法变为现实，并看到它为全球数百万用户的旅行带来便利，这种成就感是无与伦比的。这里是实现你产品抱负的地方。',
    },
    {
      name: '金大卫',
      role: '数据分析师',
      story: '我们是一个数据驱动的团队，这里的合作氛围非常棒。我们共同的目标是通过数据洞察创造极致的旅行体验，这让我充满激情。',
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


