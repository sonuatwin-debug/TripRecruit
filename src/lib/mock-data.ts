
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
  { id: '69', title: '代理发展专员', department: '市场部', location: '柬埔寨', keywords: '代理发展' }
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
