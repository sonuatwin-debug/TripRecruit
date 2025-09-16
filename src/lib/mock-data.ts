
export const MOCK_JOBS = [
  { 
    id: '7', 
    title: '网络运维专员', 
    department: '工程部', 
    location: '迪拜', 
    keywords: '网络, 运维',
    details: {
      gender: '男',
      age: '20-30岁',
      nationality: '东南亚国家华人',
      languages: '中文、英文',
      salary: '试用期 12K，转正 14K + 绩效（0-3K，转正后评定）',
      hours: '9休4（09:00-18:00），有加班情况',
      requirements: [
        '无 BC 经验；',
        '计算机相关专业；',
        '熟悉路由器、交换机、防火墙、服务器等设备的设置与管理；熟悉 SVN 的配置及管理；精通 Linux 系统，具备较强问题解决能力；熟悉 WIFI 协议标准与性能标准，具备无线协议类问题分析调试经验；',
        '熟悉三层转发，静态路由、OSPF、BGP 等路由协议；熟练使用网络抓包工具进行数据分析；',
        '具备亲和力与责任感，思维敏捷，沟通协调及问题解决能力强；',
        '具备业务系统搭建及运维服务经验。'
      ],
      responsibilities: [
        '负责公司电脑及周边设备的日常管理与维护；提供日常运维支持和优化，确保系统稳定高效运行；',
        '管理与维护公司服务器、交换机、路由器、电脑等网络设备；',
        '建立与优化部门工作流程，负责监控、配置、性能、容量等流程及管理平台的建设与维护；',
        '维护公司网络安全、权限管理及电子文件的保密管理；',
        '完成上级安排的其他工作。'
      ]
    }
  },
  { 
    id: '8', 
    title: '大数据工程师', 
    department: '工程部', 
    location: '菲律宾', 
    keywords: '大数据, hadoop, spark',
    details: {
      salary: '面议',
      hours: '13-22',
      gender: '不限',
      age: '中国籍 21-35 岁；外籍 21-30 岁',
      nationality: '中国籍、外籍',
      languages: '英文及基本中文',
      requirements: [
        '头脑清晰，对数据敏感，具备较强的学习能力',
        '了解数据库，能编写 MySQL 或 ES 常规查询语句',
        '接触过 Shell 或 Python，能编写基础数据处理脚本',
        '具备一定的 Excel 函数使用经验'
      ],
      responsibilities: [
        '关注数据告警群，排查数据波动或异常',
        '监控任务告警群，遇到任务节点异常时能从 checkpoint 正常启动',
        '根据业务需求，进行临时数据提取',
        '及时反馈线上问题并在工作群内进行预警'
      ]
    }
  },
  { 
    id: '9', 
    title: 'DBA工程师', 
    department: '工程部', 
    location: '菲律宾', 
    keywords: 'dba, mysql, oracle',
    details: {
      salary: '面议',
      hours: '13-22',
      gender: '不限',
      age: '中国籍 21-35 岁；外籍 21-30 岁',
      nationality: '中国籍、外籍',
      languages: '英文及基本中文',
      requirements: [
        '两年以上相关工作经验，责任心强，具备快速处理系统突发事件的能力',
        '较强的学习能力',
        '五年以上 MySQL 等关系型数据库维护经验',
        '深入了解数据库体系架构和工作原理',
        '精通 SQL 调优，对数据库事务、锁及高并发设计有深入理解'
      ],
      responsibilities: [
        '负责 Redis、ELK、MQ 等非关系数据库管理',
        '排查服务故障，分析和解决疑难问题',
        '监控与告警管理，漏洞修复与系统调优，实施负载均衡'
      ]
    }
  },
  { 
    id: '10', 
    title: '安全工程师', 
    department: '工程部', 
    location: '菲律宾', 
    keywords: '网络安全, 信息安全',
    details: {
      salary: '面议',
      hours: '9小时 / 周休一',
      age: '21–35岁',
      nationality: '中国籍',
      languages: '基本中文',
      gender: '不限',
      requirements: [
        '具备较强的沟通能力、团队合作能力与学习新技术的能力；工作态度认真负责。',
        '有网络安全服务或渗透测试相关工作经验。',
        '熟悉渗透测试步骤、方法与流程，能熟练使用安全工具并进行手工测试。',
        '熟悉一种或多种主流编程语言（如 Go / PHP / Python / Java 等）。',
        '在安全社区发表过技术文章或参加过攻防比赛并获奖者优先。',
        '精通 Web 攻防技术（OWASP TOP10、XSS、CSRF、SQL注入、文件上传/包含、命令注入等），能独立完成漏洞发现与修复建议。',
        '具备逆向工程能力（熟悉 ollydbg、windbg 等工具）、软件漏洞挖掘（堆栈溢出、shellcode、fuzzing 等）优先。',
        '熟悉社会工程学（信息收集、伪装、诱导等）和渗透测试流程（信息收集、扫描、验证、利用、后渗透等）。'
      ],
      responsibilities: [
        '对授权站点、应用与设备进行安全检测与渗透测试。',
        '分析常见 Web、系统与中间件漏洞，撰写漏洞分析与修复报告。',
        '研究并实践新兴安全技术，提升公司安全防护能力。',
        '配合完成公司下发的各类安全支撑与应急处置任务。'
      ]
    }
  },
  { 
    id: '11', 
    title: '运维工程师', 
    department: '工程部', 
    location: '菲律宾', 
    keywords: '运维, linux, docker',
    details: {
      salary: '面议',
      hours: '9小时，周休一',
      gender: '不限',
      age: '21-35 岁',
      nationality: '中国籍',
      languages: '基本中文',
      responsibilities: [
        '负责公司生产环境应用的运维建设，确保服务稳定性',
        '负责业务系统的发布、维护、监控、调优及故障排查',
        '跟进特定项目全生命周期的部署与上线',
        '建立运维知识库并编写相关文档'
      ],
      requirements: [
        '2年以上 Linux 系统管理经验，精通 Linux 系统维护',
        '熟悉 Zabbix / Prometheus / Grafana 等监控软件的使用',
        '熟悉各类应用服务器的部署与优化',
        '熟悉 Shell，掌握 Python / Go 者优先',
        '熟悉 Docker 容器原理与技术细节，有生产环境 CI/CD 自动化部署经验者优先',
        '责任心强，积极主动，具备良好的团队合作精神与抗压能力'
      ]
    }
  },
  { 
    id: '12', 
    title: '高级网络工程师', 
    department: '工程部', 
    location: '菲律宾', 
    keywords: '网络, ccnp, ccie',
    details: {
      salary: '30K-45K',
      hours: '9小时 / 周一休',
      gender: '男',
      nationality: '中国',
      languages: '中文听说读写',
      requirements: [
        '通信、计算机、电子类相关专业专科及以上学历，五年以上网络工程师经验',
        '五年以上金融/证券/运营商数据中心网络规划与运维管理经验',
        '熟悉 TCP/IP 与路由交换原理，掌握 BGP / OSPF 协议',
        '熟悉 ESXI、vSphere 虚拟化相关原理与配置',
        '熟悉 Cisco、华为等主流路由器、交换机及安全设备配置部署',
        '熟悉主流防火墙（Cisco、防火墙、Nexus、PaloAlto、Fortinet）及 F5 负载均衡设备配置',
        '具备独立分析网络问题与新技术扩展能力，拥有大型网络故障排查与应急处理经验',
        '具备良好的文档编写习惯、学习能力、团队合作精神与责任心',
        '须持有 CCIE 认证或同等级技术能力证书，有知名集成商或甲方工作经验者优先'
      ],
      responsibilities: [
        '负责数据中心网络及各项目中网络架构规则、方案设计评审与实施',
        '负责数据中心网络的日常巡检、监控与运维，包括设备安装、配置、调测及策略变更实施',
        '负责数据中心网络故障的分析、处理与风险规避建议',
        '负责撰写项目文档、方案制定、评审与汇报，组织协调网络异常事件处理，沟通汇报进展并提出整改建议',
        '积累运维最佳实践，制定网络运维规范与策略'
      ]
    }
  },
  { 
    id: '13', 
    title: '运维域名工程师', 
    department: '工程部', 
    location: '菲律宾', 
    keywords: '运维, 域名, dns',
    details: {
      salary: '面议',
      hours: '9小时 / 周休一',
      age: '21-35岁',
      nationality: '中国籍',
      languages: '基本中文',
      gender: '不限',
      requirements: [
        '从事过计算机和网络维护相关工作半年以上，或应届计算机/网络相关专业毕业生',
        '熟悉局域网及互联网维护工作',
        '熟悉电脑软件、硬件的安装与维护',
        '具备 Windows、Mac OS 系统运维经验',
        '能够设计并部署中小型企业网络',
        '具备团队精神，能吃苦耐劳，学习能力强',
        '熟悉 Cisco 防火墙、路由器、交换机等设备优先',
        '服从领导安排'
      ],
      responsibilities: [
        '负责公司局域网与互联网维护工作',
        '负责公司电脑软件与硬件的安装和维护',
        '完成部门领导安排的其他工作'
      ]
    }
  },
  { 
    id: '14', 
    title: '桌面运维', 
    department: '工程部', 
    location: '菲律宾', 
    keywords: '桌面支持, it支持',
    details: {
      salary: '面议',
      hours: '9小时 / 周休一',
      age: '21-35岁',
      nationality: '中国籍',
      languages: '基本中文',
      gender: '不限',
      requirements: [
        '从事过计算机和网络维护相关工作半年以上，或应届计算机/网络相关专业毕业生',
        '熟悉局域网及互联网维护工作',
        '熟悉电脑软件、硬件的安装与维护',
        '具备 Windows、Mac OS 系统运维经验',
        '能够设计并部署中小型企业网络',
        '具备团队精神，能吃苦耐劳，学习能力强',
        '熟悉 Cisco 防火墙、路由器、交换机等设备优先',
        '服从领导安排'
      ],
      responsibilities: [
        '负责公司局域网与互联网维护工作',
        '负责公司电脑软件与硬件的安装和维护',
        '完成部门领导安排的其他工作'
      ]
    }
  },
  { 
    id: '15', 
    title: '中高级产品经理（体育）', 
    department: '产品部', 
    location: '迪拜', 
    keywords: '产品经理, 体育, 游戏',
    details: {
      salary: '面议',
      hours: '9小时 / 周休一',
      age: '21–35岁',
      nationality: '仅限台湾籍',
      languages: '中文流利（HSK5及以上）',
      gender: '不限',
      requirements: [
        '5年以上互联网 Web/H5/APP 产品策划经验；',
        '具备高度自驱力，能在高压与不确定性环境下灵活应对；',
        '拥有成熟的产品方法论及同理心，能通过数据分析、用户研究洞察需求并提出优秀方案；',
        '逻辑清晰，善于深度思考，具备优秀的学习心态和能力；',
        '独立负责过大中型产品功能策划与版本项目管理；',
        '熟悉并具备支付类、金融类、直播类、资讯类等产品经验者优先；',
        '具备扎实的前后台产品设计能力优先；',
        '热爱体育运动，对篮球或足球有深入了解者优先；',
        '拥有国内一线互联网公司经验者优先。'
      ],
      responsibilities: [
        '负责体育客户端产品设计，包括体育直播、资讯、竞猜等核心功能优化，推动业务创新与迭代，提升用户体验；',
        '挖掘并理解体育用户需求，与技术和运营团队紧密合作，协调资源推动产品落地；',
        '负责产品功能、流程、界面设计，协调设计资源完成交互与原型设计；',
        '参与产品定位与决策，收集用户反馈，推动产品改进与创新；',
        '跟进APP端客户反馈，结合产品规划策略优化使用体验和竞争力；',
        '持续关注竞争对手与用户反馈，提出改进方案并推动实施；',
        '根据需求优先级制定开发顺序，确保产品目标的达成。'
      ]
    }
  },
  { 
    id: '16', 
    title: '招商专员', 
    department: '市场部', 
    location: '迪拜', 
    keywords: '招商, 销售',
    details: {
      salary: '10K-12K',
      hours: '10:00 - 20:00，10休2-4',
      gender: '男',
      age: '20-38岁',
      nationality: '中国籍',
      languages: '中文',
      requirements: [
        '配合团队工作，坚持不懈，遇到困难能迎刃而解，有交流、有担当；',
        '有发展代理经验者优先，服从上级安排，性格开朗；',
        '听话、有上进心，善于学习，有培养价值。'
      ],
      responsibilities: [
        '利用各种平台、渠道和工具进行网络推广，获取潜在客户；',
        '搜集并分析推广反馈数据，不断优化推广方法；',
        '收集同行的推广信息进行对比，提出改善或调整方案；',
        '完成上级下达的各项任务。'
      ]
    }
  },
  { 
    id: '17', 
    title: '招商组长', 
    department: '市场部', 
    location: '迪拜', 
    keywords: '招商, 管理',
    details: {
      salary: '12K 转正后 15K',
      hours: '09:00 - 19:00，10休2~4天',
      gender: '不限',
      age: '20-38岁',
      nationality: '中国籍',
      languages: '中文',
      requirements: [
        '资深招商经验，具备管理能力，有冲劲和信心带领团队前进；',
        '可接受团队加入，集团离职组长优先；',
        '有渠道投放经验者优先考虑。'
      ],
      responsibilities: [
        '在业务运营过程中，起到上传下达的作用，并能解决常规业务问题；',
        '具备较强执行力，能有条理地规划和实施业务开展；',
        '熟悉行业产品，能结合日常管理与运营，提升团队综合实力。'
      ]
    }
  },
  { 
    id: '18', 
    title: '代理发展专员', 
    department: '市场部', 
    location: '迪拜', 
    keywords: '代理, 发展',
    details: {
      salary: '10K-12K + 业绩提成',
      hours: '每日工作 10 小时，月休4天',
      gender: '不限',
      age: '20-38岁',
      nationality: '中国籍',
      languages: '中文',
      requirements: [
        '有发展代理经验者优先；',
        '配合团队工作，具备坚持精神，遇到困难能迎刃而解；',
        '服从上级安排，性格开朗，善于交流；',
        '有上进心，乐于学习，有培养潜力。'
      ],
      responsibilities: [
        '利用各类平台、渠道和工具进行网络推广，获取潜在客户；',
        '收集并分析推广反馈数据，不断优化推广方案；',
        '日常维护代理关系，合理解决代理需求；',
        '完成上级交办的各项任务。'
      ]
    }
  },
  { 
    id: '19', 
    title: '代理发展组长', 
    department: '市场部', 
    location: '迪拜', 
    keywords: '代理, 管理',
    details: {
      salary: '12K 转 15K + 提成（具体面议）',
      hours: '依部门排班，10休2-4',
      gender: '不限',
      age: '20-38岁',
      nationality: '中国籍',
      languages: '中文',
      requirements: [
        '资深招商经验，具备团队管理经验；',
        '有冲劲、有信心带领团队前进；',
        '可接受团队，集团离职组长优先录用；',
        '有投放渠道费经验者优先。'
      ],
      responsibilities: [
        '在业务运营过程中，起到上传下达作用，并能解决常规业务问题；',
        '具备较强执行力，能有条理地规划和实施业务工作；',
        '熟悉行业产品，能够结合日常管理与运营，提高团队综合实力。'
      ]
    }
  },
  { 
    id: '20', 
    title: '代理部高管', 
    department: '市场部', 
    location: '迪拜', 
    keywords: '代理, 高管',
    details: {
      salary: '面议',
      hours: '09:00-19:00，依公司安排',
      gender: '不限',
      age: '20-38岁',
      nationality: '中国籍',
      languages: '中文',
      requirements: [
        '1年以上平台代理维护 / 发展等管理经验；',
        '有代理资源，市场拓展能力强；',
        '具备较强的客户挖掘能力，熟悉市场；',
        '拥有丰富的资源和人脉关系。'
      ],
      responsibilities: [
        '具备大客户代理资源，利用定制活动挖掘大代理到平台，开发新大客户，并解决业务问题；',
        '全面负责代理部业务工作，制定招商战略并组织实施，确保完成公司业绩指标；',
        '负责团队建设与管理，包括招聘、培训、考核、激励及渠道管理，保障人力资源的有效配置；',
        '组织市场调查与经营分析，掌握竞争对手动态，制定并执行代理活动，确保市场竞争优势。'
      ]
    }
  },
  { 
    id: '21', 
    title: '业务专员（推广）', 
    department: '市场部', 
    location: '迪拜', 
    keywords: '业务, 推广',
    details: {
      salary: '10K 转正 12K + 20% 提成',
      hours: '10:00-20:00，10休3/4',
      gender: '男',
      age: '20-38岁',
      nationality: '中国籍',
      languages: '中文',
      requirements: [
        '认可并能够融入团队合作；',
        '具备良好的沟通与交际能力；',
        '熟悉行业数据，具备一定数据敏感度；',
        '有用户资源 / 懂体育者优先考虑。'
      ],
      responsibilities: [
        '负责推广引流与转化，维护新增用户，并对个人开拓的用户数据负责；',
        '按团队计划完成每月个人新增代理 / 推广团队目标；',
        '针对注册存款用户，进行每日数据汇总与汇报；',
        '协助组长整理并分析用户周期数据，及时调整策略；',
        '配合团队完成集团各阶段战略目标。'
      ]
    }
  },
  { 
    id: '22', 
    title: '后台专员', 
    department: '职能部', 
    location: '迪拜', 
    keywords: '后台',
    details: {
      salary: '12K-14K + 绩效（根据人员表现）',
      hours: '9小时 / 月休4（三班倒）',
      gender: '不限',
      age: '21-31岁',
      nationality: '台湾 / 马来 / 印尼（不要越南、缅甸）',
      languages: '中文流利',
      requirements: [
        '中文沟通无障碍，普通话流利，思维敏捷，理解能力强；',
        '有行业经验者优先，最好对体育盘口有一定了解；',
        '具备较强的服务意识，反应能力快，有耐心，独立解决问题能力佳；',
        '能接受三班倒及夜班工作，适应轮班排休制度，具备高度保密意识；',
        '熟练使用 Excel、Word 等办公软件。'
      ],
      responsibilities: [
        '负责整站线上活动的组织与策划；',
        '负责日常活动派彩、活动数据统计及分析报表制作；',
        '结合节日、赛事、热点及产品方向制定整站活动策略；',
        '推进并执行活动方案，细化工作流程，协调各部门沟通，确保活动如期上线；',
        '监控活动效果，进行总结与优化；',
        '按质、按量、按时完成上级交办的工作任务。'
      ]
    }
  },
  { 
    id: '23', 
    title: '新媒体运营专员', 
    department: '职能部', 
    location: '迪拜', 
    keywords: '新媒体, 运营',
    details: {
      salary: '综合薪资 10K-15K（转正后绩效 0-3K）',
      hours: '10休4，09:00-19:00',
      gender: '不限',
      age: '20-30岁',
      nationality: '中国及可中文对接的外籍',
      languages: '中文流利',
      requirements: [
        '对足球赛事有一定了解和认知；',
        '熟悉并经常使用抖音、快手、头条等新媒体平台；',
        '对互联网热点敏感，能够捕捉并运用热点话题；',
        '具备良好的沟通能力，能与媒体合作方、运动员代表、品牌伙伴及团队成员进行高效沟通与协调；',
        '具备较强的团队合作意识和协作能力。'
      ],
      responsibilities: [
        '负责微信、微博、抖音等新媒体账号的日常运营与管理；',
        '撰写平台产品或活动相关的软文内容；',
        '策划与执行线上活动，结合网络热点进行营销事件设计，撰写原创文案，提升品牌曝光和用户黏性；',
        '定期分析运营数据，评估效果并提出优化方案。'
      ]
    }
  },
  { 
    id: '24', 
    title: '新媒体运营专家', 
    department: '职能部', 
    location: '迪拜', 
    keywords: '新媒体, 运营, 专家',
    details: {
      salary: '综合薪资 30K-60K（具体面议）',
      hours: '10休4，09:00-19:00',
      gender: '不限',
      age: '40岁以下',
      nationality: '仅限中国籍',
      languages: '中文',
      requirements: [
        '3年以上新媒体运营经验；',
        '有抖音账号从0到1的孵化经验，熟悉流量机制；',
        '具备较强的数据分析能力；',
        '擅长拍摄，具备良好的写作功底；',
        '性格开朗，善于沟通，认真负责，热爱学习和挑战；',
        '拥有3年以上足球相关经验。'
      ],
      responsibilities: [
        '协助负责公司账号的运营与孵化，提高账号数据，诊断问题并提出改进方向；',
        '制定新媒体运营策略，包括内容选题策划、文章撰写与发布管理；',
        '研究新媒体平台和竞品的内容生产及运营模式，优化运营方案；',
        '监控每日运营数据，进行数据分析并优化运营策略；',
        '根据公司需求，配合部门推广与宣传活动。'
      ]
    }
  },
  { 
    id: '25', 
    title: '公关专员', 
    department: '职能部', 
    location: '迪拜', 
    keywords: '公关',
    details: {
      salary: '底薪 + 绩效 + 全勤，综合 12K-16K（具体面议）',
      hours: '9休4，09:00-18:00',
      gender: '不限',
      age: '20-30岁',
      nationality: '中国籍 / 台湾 / 马来西亚等',
      languages: '中文',
      requirements: [
        '大专及以上学历，应届毕业生优先；',
        '熟悉门户和百家号等自媒体，有媒体工作经验者优先；',
        '具备互联网思维，了解并熟悉当下新闻媒体行业；',
        '具备良好的沟通协调能力，踏实认真、细心耐劳；',
        '工作态度积极，具备较强学习与适应能力者优先。'
      ],
      responsibilities: [
        '负责公司媒体矩阵的内容发布，学习并熟悉各渠道发布规则；',
        '对接并拓展媒体内部及直编资源，为公司优化和扩展渠道；',
        '思维发散，具备独立思考与较强的执行力；',
        '完成领导安排的其他临时性工作。'
      ]
    }
  },
  { 
    id: '26', 
    title: '媒体公关专家', 
    department: '职能部', 
    location: '迪拜', 
    keywords: '媒体, 公关, 专家',
    details: {
      salary: '综合 30K-60K（具体面议）',
      hours: '9休4，09:00-18:00',
      gender: '不限',
      age: '20-35岁',
      nationality: '仅限中国籍',
      languages: '中文',
      requirements: [
        '3年以上媒体公关管理或相关工作经验；',
        '具备敏锐的新闻嗅觉、媒体沟通、公关策划及文字组织能力；',
        '拥有高度敬业精神和责任心；',
        '熟悉社交媒体平台的运营与管理，掌握平台规则；',
        '具备一线媒体资源（腾讯、凤凰、百度、今日头条等），并具备拓展更多有效公关资源的能力。'
      ],
      responsibilities: [
        '根据企业战略目标，建立公共关系规范与策略，构建危机管理体系；',
        '制定全年媒体公关规划，并根据品牌传播计划进行媒介投放；',
        '整合并分析媒体资源，与媒体建立和维护良好关系；',
        '策划和管理品牌宣传效果评估，快速处理舆情危机，确保品牌形象稳定。'
      ]
    }
  },
  { 
    id: '27', 
    title: '活动执行专员', 
    department: '职能部', 
    location: '迪拜', 
    keywords: '活动, 执行',
    details: {
      salary: '底薪 + 绩效 + 全勤，综合 18K-25K（优秀者可面议，转正后有绩效评定）',
      hours: '9休4，09:00-18:00',
      gender: '不限',
      age: '20-35岁',
      nationality: '台湾 / 马来西亚',
      languages: '中文、英文',
      requirements: [
        '具备商务英文口语及书写能力；',
        '具备商务资源对接与整合能力；',
        '善于沟通和理解，具备学习力和进取心；',
        '具备高度责任感和团队合作精神；',
        '符合签证要求：欧洲免签或落地签护照持有者。',
        '加分项：',
        '对视频制作从策划到落地有基础了解；',
        '具备线下活动策划与管理经验；',
        '能独立撰写脚本；',
        '有传媒相关经验；',
        '可提供中英文简历；',
        '无 BC 行业经验。'
      ],
      responsibilities: [
        '整合并对接欧洲影视团队的线下活动资源；',
        '与欧洲影视团队及体育名企沟通，确保活动及视频产出质量；',
        '参与体育行业活动策划及脚本撰写；',
        '负责拍摄计划与视频落地流程的把控；',
        '跟进并推进项目进度安排，保证活动顺利执行。'
      ]
    }
  },
  { 
    id: '28', 
    title: '行政专员', 
    department: '职能部', 
    location: '迪拜', 
    keywords: '行政',
    details: {
      salary: '面议',
      hours: '9小时，周休一',
      gender: '不限',
      age: '21-30岁',
      nationality: '马来 / 中国籍',
      languages: '中英文流利（中文 HSK5+，英语雅思 6.5+）',
      requirements: [
        '英语口语流利，能无障碍进行中英文沟通；',
        '熟悉办公室设备维护、物资采购、车辆调度，有管理保姆、保安等人员的经验；',
        '态度端正，责任心强，能适应行政岗位综合性工作。'
      ],
      responsibilities: [
        '负责公司行政管理及服务工作，主要包括办公室日常管理与车辆管理；',
        '行政工作实行 24 小时三班倒排班制，需接受夜班并服从公司安排；',
        '保持良好的沟通意愿和服务意识，确保行政工作顺畅高效。'
      ]
    }
  },
  { 
    id: '29', 
    title: '运维助理', 
    department: '职能部', 
    location: '迪拜', 
    keywords: '运维, 助理',
    details: {
      salary: '面议',
      hours: '9小时，周休一',
      gender: '女',
      age: '21-30岁',
      nationality: '不限',
      languages: '中文流利',
      requirements: [
        '大专及以上学历，专业不限，欢迎应届毕业生；',
        '工作认真负责，抗压能力强，具备良好的沟通与执行能力；',
        '熟练使用 Excel、Word、PPT 等办公软件；',
        '具备较强的文档编写、事务处理能力，有项目助理或团队助理经验优先；',
        '对移动应用、互联网行业有一定兴趣，愿意在团队中长期成长。',
        '加分项：',
        '熟悉 Jira、Confluence 等协作工具；',
        '有技术团队助理或研发支持经验；',
        '英文读写能力良好，可处理英文文档优先。'
      ],
      responsibilities: [
        '协助团队进行日常事务处理，包括会议安排、资料整理、任务跟进、物料准备等；',
        '整理并维护需求列表、开发进度表、测试记录等内部文档；',
        '协助处理跨部门沟通事项，如需求对接、问题反馈、协作协调等；',
        '跟进版本发布流程，记录版本信息、上线状态和问题汇总；',
        '支持团队人力、考勤、资产、出差等事务性工作，确保团队高效运行。'
      ]
    }
  },
  { 
    id: '30', 
    title: '会计专员', 
    department: '职能部', 
    location: '迪拜', 
    keywords: '会计',
    details: {
      salary: '试用期 10K（2个月），转正后 12K + 绩效',
      hours: '9休4，09:00-18:00（有加班情况）',
      gender: '女',
      age: '33岁以下',
      nationality: '东南亚国家华人',
      languages: '中文、英文流利',
      requirements: [
        '全日制统招大专及以上学历；',
        '中英文流利，可与各部门正常交流，具备较强的理解能力；',
        '具有亲和力，较强的责任感与敬业精神；',
        '思维敏捷，具备良好的沟通、协调及问题解决能力；',
        '具备一定的文字撰写能力及深刻理解能力；',
        '熟练使用 Office 办公软件。'
      ],
      responsibilities: [
        '审核品牌各部门各项费用与原始票据的真实性；',
        '收集、整理原始票据，每月准时交接审计；',
        '解答、核实、核对各部门录单人的相关疑问；',
        '登记会计日记账；',
        '完成上级安排的其他工作。'
      ]
    }
  },
  { _id: '31', title: '财务主管', department: '职能部', location: '迪拜', keywords: '财务, 主管', id: '31', details: { salary: '2500 - 3500 USD/月', hours: '9小时，周休1', gender: '不限', age: '21-35岁（经验丰富者可适当放宽）', nationality: '外籍（马来/印尼优先）/ 台湾籍', languages: '中文熟练，英语可基本沟通', requirements: ['独立负责财务工作小组，能根据公司制度对下属提供支持并监督日常财务工作；', '具备较强的成本管理、风险控制和财务数据分析能力，对数据敏感，发现问题及时上报；', '能执行并协调财务审核工作；', '熟悉预算管理，能统计、汇总月度预算并上报审批；', '熟练编制财务分析报表；', '具备良好的组织协调能力、表达能力及团队合作精神；', '有财务管理岗位经历。'], responsibilities: [] } },
  { _id: '32', title: '会计组长', department: '职能部', location: '迪拜', keywords: '会计, 组长', id: '32', details: { salary: '1200 - 1700 USD/月', hours: '9小时，周休1', gender: '不限', age: '21-35岁', nationality: '外籍（马来/印尼优先）/ 台湾籍', languages: '中文熟练，英语可基本沟通', requirements: [], responsibilities: ['负责公司全部日常账务处理及审查，编制各类管理报表；', '对数字敏感，具备数据分析能力，能发现并解决财务问题；', '负责应收账款与应付账款的管理与核算；', '熟练使用 Excel 及函数公式处理财务数据。'] } },
  { 
    id: '33', 
    title: '资金专员', 
    department: '职能部', 
    location: '迪拜', 
    keywords: '资金',
    details: {
      salary: '约 2100 USD/月',
      hours: '9小时',
      gender: '不限',
      age: '35岁以下',
      nationality: '外籍',
      languages: '中英文流利',
      requirements: [
        '具备一定的金融学知识，有金融支付方面的工作经历者优先；',
        '为人真诚，性格和善，服从性高；',
        '善于沟通交流，能与团队及跨部门良好协作；',
        '在菲人员需无签证问题。'
      ],
      responsibilities: [
        '负责财务部门报表编制与数据整理；',
        '参与公司资金管理及日常支付工作；',
        '确保资金操作的合规与安全；',
        '完成上级交办的其他财务相关任务。'
      ]
    }
  },
  { 
    id: '34', 
    title: '客服专员', 
    department: '职能部', 
    location: '迪拜', 
    keywords: '客服',
    details: {
      salary: '试用期 10K，转正 12K + 绩效（0-3K）',
      hours: '10休3',
      gender: '不限',
      age: '21-30岁',
      nationality: '外籍华裔',
      languages: '中文流利',
      requirements: [
        '21-30岁，口齿清晰，普通话流利，语音富有感染力；',
        '有良好的服务意识和主动服务能力；',
        '工作细致认真，责任意识强，具备一定的抗压能力；',
        '大专及以上学历，具备一年以上互联网客服工单/客服岗位经验，大型电商客服优先；',
        '外籍候选人需提供中文语音自我介绍及打字视频，中文必须流利，打字速度需达到平均 3 分钟 ≥40字；',
        '需具备客服相关经验；'
      ],
      responsibilities: [
        '负责公司大客户的维护工作，积极响应并满足客户需求；',
        '完成客户线上指导，引导客户完成公司目标业绩；',
        '维护客户关系，持续跟进并拓展业务渠道；',
        '提升高端用户粘性，通过优质服务增强客户满意度；',
        '仅处理线上文字客服，无需打电话。'
      ]
    }
  },
  { id: '35', title: '总监助理', department: '职能部', location: '香港', keywords: '助理, 行政' },
  { id: '36', title: '行政总务', department: '职能部', location: '日本', keywords: '行政, 总务' },
  { id: '37', title: '中高级产品经理（体育）', department: '产品部', location: '日本', keywords: '产品经理, 体育, 游戏' },
  {
    id: '38',
    title: '综管专员',
    department: '职能部',
    location: '柬埔寨',
    keywords: '综管',
    details: {
      salary: '10K-12K',
      hours: '9小时/天（三班倒），月休4天',
      gender: '不限',
      age: '35岁以下',
      nationality: '不限',
      languages: '中文 / 英文流利',
      requirements: [
        '头脑灵活，具备快速应变能力；',
        '有后勤 / 行政工作经验者优先；',
        '中文 / 英语沟通无障碍；',
        '具备良好的沟通意愿与服务意识；',
        '能接受三班倒工作安排。'
      ],
      responsibilities: [
        '处理部门日常相关工作；',
        '与部门沟通并跟进落实相关要求；',
        '接受部门临时安排与调动，服从管理；',
        '协助部门完成各类行政与后勤事务。'
      ]
    }
  },
  {
    id: '39',
    title: '内账专员',
    department: '职能部',
    location: '柬埔寨',
    keywords: '内账',
    details: {
      salary: '按照公司制度',
      hours: '9小时/天，月休4天',
      gender: '不限',
      age: '35岁以下',
      nationality: '外籍',
      languages: '中文 / 英语',
      requirements: [
        '头脑灵活，逻辑清晰；',
        '做事仔细认真，有责任感；',
        '具备财务相关经验者优先；',
        '具备基础公式理解能力；',
        '中文 / 英语沟通无障碍；'
      ],
      responsibilities: [
        '负责登记日常支出费用明细；',
        '协助行政后勤申请办公相关费用；',
        '分类整理发票、收据及原始凭证；',
        '接受部门临时安排与调动，服从管理；',
        '与相关部门保持良好沟通，确保账目准确。'
      ]
    }
  },
  {
    id: '40',
    title: '小组助理',
    department: '职能部',
    location: '柬埔寨',
    keywords: '助理',
    details: {
      salary: '2080U 转 2500U',
      hours: '10小时/天',
      gender: '女',
      age: '20-30岁',
      nationality: '中国籍',
      languages: '中文',
      requirements: [
        '擅长办公软件，熟悉公式运用；',
        '头脑灵活，逻辑清晰；',
        '要求内宿，服从公司安排。'
      ],
      responsibilities: [
        '负责账目与数据管理；',
        '处理冲销及核对工作；',
        '负责员工入离职流程办理；',
        '对接物业及账单相关事务；',
        '协助部门日常行政工作。'
      ]
    }
  },
  {
    id: '41',
    title: '客服专员',
    department: '职能部',
    location: '柬埔寨',
    keywords: '客服',
    details: {
      salary: '面议',
      hours: '8小时/天（三班轮更），周休1天',
      gender: '女',
      age: '21-30岁',
      nationality: '不限',
      languages: '中文流利',
      requirements: [
        '中文精通，能看懂繁体字；',
        '熟练操作电脑及办公软件，打字速度40-60字/分钟；',
        '具有良好的沟通协调能力及高度责任心；',
        '态度良好，情绪稳定，能吃苦耐劳；',
        '有体育盘口、百家乐或电竞游戏经验者优先。'
      ],
      responsibilities: [
        '通过中文线上聊天方式，为客户解答业务问题；',
        '满足客户需求，及时推广公司最新活动（无业绩要求）；',
        '维护现有客户关系，掌握需求并快速处理问题；',
        '主动服务客户，保持良好的合作关系。'
      ]
    }
  },
  {
    id: '42',
    title: '财务客服专员',
    department: '职能部',
    location: '柬埔寨',
    keywords: '财务, 客服',
    details: {
      salary: '面议',
      hours: '每周工作 48 小时',
      gender: '不限',
      nationality: '不限',
      languages: '中文流利',
      requirements: [
        '人品端正，无不良嗜好；',
        '性格开朗，自信，具备良好沟通能力；',
        '能独立完成工作，有上进心，抗压性强；',
        '有出入款经验，情商高，对数字敏感，细心稳重；',
        '熟悉现金网运作，有结账及数据分析经验者优先。'
      ],
      responsibilities: [
        '负责现金、系统出入款审核与操作，记录并复核出纳账，定时围数；',
        '处理出入款复核、资金账审核，审批系统出入款、上下分及日常流水盈利；',
        '承担日常客服服务及外部对接，传达订单至内部审核；',
        '进行资金账记录、系统上下分操作、查单及盈利统计等工作。'
      ]
    }
  },
  {
    id: '43',
    title: '品牌运营',
    department: '职能部',
    location: '柬埔寨',
    keywords: '品牌, 运营',
    details: {
      salary: '面议',
      hours: '9休6',
      gender: '不限',
      nationality: '大专及以上',
      languages: '中文',
      requirements: [
        '有活动策划或公关媒介经验者佳，能独立完成主管交办事项；',
        '懂社群运营，有大型论坛/社群运营经验优先；',
        '具备较强的沟通能力与优秀的表达能力；',
        '擅长团队协作，责任感强；',
        '三年以上相关工作经验。'
      ],
      responsibilities: [
        '协助品牌活动准备及与合作厂商沟通；',
        '根据品牌计划收集传播素材，编写传播稿件；',
        '收集行业及竞品品牌资料；',
        '追踪社会舆论与行业热点，提炼品牌传播及创意点；',
        '执行公司社群媒体推广，确保达成品牌宣传效果；',
        '提供竞品对比分析，并参与讨论提出优化方案。'
      ]
    }
  },
  {
    id: '44',
    title: '财务外账专员',
    department: '职能部',
    location: '柬埔寨',
    keywords: '财务, 外账',
    details: {
      salary: '面议',
      hours: '每周工作48小时',
      gender: '女生优先',
      nationality: '外籍',
      languages: '会中英文优先',
      requirements: [
        '人品端正，无不良嗜好；',
        '性格开朗，自信，沟通能力强；',
        '能够独立自主完成工作，有上进心，抗压能力强；',
        '熟悉 Excel 及函数，具备数据整合能力；',
        '有财务相关经验、数据分析经验者优先；',
        '具备中英文双语能力者优先考虑。'
      ],
      responsibilities: [
        '负责户口流水、开工数据、场馆消费的稽核，以及大场月结交收稽核；',
        '负责各场馆历史账务归档、整理与备份；',
        '执行日常菲柬账务的审核与月度结账稽核；',
        '整理公司所有项目数据并进行分析，为财务决策提供支持。'
      ]
    }
  },
  {
    id: '45',
    title: '财务内账专员',
    department: '职能部',
    location: '柬埔寨',
    keywords: '财务, 内账',
    details: {
      salary: '面议',
      hours: '每周工作48小时',
      gender: '女生优先',
      nationality: '外籍',
      languages: '会中英文优先',
      requirements: [
        '人品端正，无不良嗜好；',
        '性格开朗，自信，具备良好的沟通能力；',
        '能独立自主完成工作，有上进心，抗压能力强；',
        '熟悉 Excel 及函数，能自主整合数据表格；',
        '有财务相关经验、数据分析经验者优先；',
        '具备中英文双语能力者优先考虑。'
      ],
      responsibilities: [
        '协助会计主管开展公司财务会计工作；',
        '负责财务核算、审核与监督工作；',
        '按照公司及政府要求编制财务报表并报送相关部门；',
        '负责各类财务资料和档案的归集、保管与保密；',
        '审核员工报销费用，编制凭证并及时登账；',
        '填制记账凭证并执行日常账务处理；'
      ]
    }
  },
  {
    id: '46',
    title: '人力资源部主管',
    department: '职能部',
    location: '柬埔寨',
    keywords: '人力资源, 主管',
    details: {
      salary: '20K以上',
      hours: '9休6（长白班）',
      nationality: '非中国大陆',
      languages: '中英文流利',
      requirements: [
        '海外人资主管5年以上经验（以招聘为主）；',
        '具500人以上企业或厂区人资工作经验；',
        '有菲律宾工作经验者佳；',
        '熟悉菲律宾当地劳动相关法令者佳；',
        '大学以上学历，科系不限；',
        '中英文听说读写流利，会菲律宾当地语言或其他语言更佳；',
        '擅长工具：Excel、PowerPoint、Word；',
        '具备技能：项目管理、领导统御、沟通协调、资源整合；',
        '其他条件：抗压性强，思路清晰，责任感重，忠诚度高，有长期海外工作意愿。',
        '熟悉菲律宾劳动法、社保(SSS)、健保(Philhealth)、所得税法；',
        '具办理签证及工作签经验者尤佳。'
      ],
      responsibilities: [
        '监督人力资源所有职能：招聘、薪酬与福利、员工关系、绩效管理、培训与发展、组织发展、法律合规、人事记录与HR信息系统等；',
        '制定人力资源政策，建立选、训、用、留完整计划；',
        '建立完善的招聘与任用制度（岗位说明书、薪资结构、招聘流程与工具）；',
        '构建人力资源信息系统，定期分析管理性报表，为企业人力发展提供依据；',
        '制定并落实企业短中长期人力发展目标与策略；',
        '规划人才管理制度与流程，并确保执行到位；',
        '调解劳资争议，处理员工资遣解雇等特殊人力议题。'
      ]
    }
  },
  {
    id: '47',
    title: '招聘专员/主管',
    department: '职能部',
    location: '柬埔寨',
    keywords: '招聘',
    details: {
      salary: '专员：10K-15K，主管：面议',
      hours: '9休6（长白班）',
      nationality: '非中国大陆',
      languages: '中英文流利',
      requirements: [
        '具有人力资源管理及相关专业背景；',
        '热爱招聘工作，思路缜密细心，责任心强，富有亲和力，具备保密意识；',
        '了解招聘渠道，有一定的社会人脉资源；',
        '中英文听说读写流利，会菲律宾当地语言或其他语言更佳；',
        '熟练使用 Excel、PowerPoint、Word，具备基本网络知识；',
        '工作技能：项目管理、领导统御、沟通协调、资源整合；',
        '其他条件：自律，具备抗压能力，能接受长期海外工作。',
        '熟悉菲律宾劳动法、社保 (SSS)、健保 (Philhealth)、所得税法；',
        '有办理签证及工作签经验者优先；',
        '具菲律宾工作经验者佳；',
        '熟悉菲律宾当地劳动相关法规者佳。'
      ],
      responsibilities: [
        '全面负责公司人才的招聘工作；',
        '根据现有编制及业务发展需求，协助上级确定招聘目标；',
        '汇总岗位需求和人员需求，制定并执行招聘计划；',
        '建立、完善招聘渠道，高效获取人才资源；',
        '发布职位需求信息，做好公司形象宣传；',
        '收集各地区人才市场信息，有相关招聘经验者优先。'
      ]
    }
  },
  {
    id: '48',
    title: '客户关系发展',
    department: '职能部',
    location: '柬埔寨',
    keywords: '客户关系',
    details: {
      salary: '15K-22K',
      hours: '8小时（三班倒），周休1天',
      nationality: '非中国大陆',
      languages: '中文',
      requirements: [
        '一年以上服务行业相关工作经验；',
        '贵宾厅及大场经验优先；',
        '可接受应酬及饮酒场合。'
      ],
      responsibilities: [
        '推广公司各项服务与活动，与客人保持良好互动关系；',
        '学习酒类知识及客户喜好相关技能，提升客户维护质量。'
      ]
    }
  },
  {
    id: '49',
    title: '业务拓展',
    department: '职能部',
    location: '柬埔寨',
    keywords: '业务拓展',
    details: {
      salary: '15K-22K',
      hours: '8小时（三班倒），周休1天',
      nationality: '非中国大陆',
      languages: '精通中文 & 英文',
      requirements: [
        '两年以上贵宾厅或大场经验；',
        '具备良好的客户服务、组织能力及沟通技巧；',
        '能接受应酬及饮酒场合，能提供专业客户应酬服务；',
        '精通中文或英文，若精通其他语言者优先，闽南话尤佳；',
        '能接受轮班。'
      ],
      responsibilities: [
        '开发潜在客户资源，拓展业务渠道；',
        '建立并维护良好的客户关系，提升客户忠诚度；',
        '及时处理客户需求，与各部门保持良好沟通；',
        '推广公司各项服务与活动，达成业绩目标并增加公司收益。'
      ]
    }
  },
  {
    id: '50',
    title: '品牌助理',
    department: '职能部',
    location: '柬埔寨',
    keywords: '品牌, 助理',
    details: {
      salary: 'USD $500 - $800（视能力与经验而定）',
      hours: '9休6',
      nationality: '不限',
      languages: '中英文流利，会柬埔寨文（基本听说读写）',
      requirements: [
        '中英文流利，具备良好的书写与口语沟通能力；',
        '会柬埔寨文（基本听说读写）；',
        '熟悉 Microsoft Office，尤其 Excel、PowerPoint；',
        '工作态度积极，细心负责，具执行力与团队合作精神；',
        '有品牌/行销/行政助理经验者优先。',
        '提供良好的职业发展空间与品牌活动实务经验；',
        '上班时间与制度依照公司当地规定执行；',
        '需配合加班与支援品牌活动现场。'
      ],
      responsibilities: [
        '协助品牌活动、宣传计划与市场推广资料的整理与执行；',
        '负责品牌相关资料的整理、翻译与归档（中/英/柬）；',
        '协助社群媒体内容排程、简易文案撰写与报表制作；',
        '与设计、营运及其他部门协调，确保品牌形象一致性；',
        '协助主管完成日常行政及跨部门协作任务。'
      ]
    }
  },
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
  { id: '96', title: '数据分析师', department: '职能部', location: '斯里兰卡', keywords: '数据分析' },
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
  { id: '121', title: '数据分析师', department: '职能部', location: '泰国', keywords: '数据分析' },
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
        '记录和核对账本，确保数据准确无误。'
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
      nationality: '马来西亚、印尼、缅甸',
      languages: '中英文流利',
      salary: 'RMB：10K 转 12K\nUSD：1390U 转 1670U',
      hours: '9小时（弹性，根据行程安排）',
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
  { geo: '中国', title: '数据分析专员', department: '职能部', location: '菲律宾', keywords: '数据分析', id: '179' },
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
  { 
    id: '184', 
    title: '数据开发专员', 
    department: '职能部', 
    location: '菲律宾', 
    keywords: '数据开发',
    details: {
      gender: '不限',
      age: '35岁以内',
      nationality: '不限（中国大陆籍需在菲律宾本地，不要第三国人员；中国籍不要福建籍）',
      languages: '中文',
      salary: '2000-4000U',
      hours: '9小时工作制，月休4天',
      requirements: [
        '具备 SQL 和 Python 基础；',
        '逻辑思维能力强，责任心强；',
        '在菲律宾本地工作。'
      ],
      responsibilities: [
        '按要求提取数据。'
      ]
    }
  },
  { 
    id: '185', 
    title: '部门助理', 
    department: '职能部', 
    location: '菲律宾', 
    keywords: '助理',
    details: {
      gender: '女生优先',
      age: '35岁以内',
      nationality: '外籍',
      languages: '中英文流利',
      salary: '15K-17K',
      hours: '9小时工作制，月休4天',
      requirements: [
        '学历背景：大专及以上学历；',
        '工作经验：有部门助理相关工作经验；',
        '技能要求：熟练使用各类办公软件，掌握表格制作及文书处理技能；',
        '个人素质：',
        '善于沟通，具备一定的语言逻辑；',
        '服从管理，执行力强；',
        '工作热情，细心耐心，踏实稳重。'
      ],
      responsibilities: [
        '处理部门日常后勤相关工作；',
        '与各部门沟通并跟进处理需求；',
        '负责部门员工入职、离职跟进；',
        '负责部门考勤管理；',
        '完成上级领导交办的其他工作。'
      ]
    }
  },
  { 
    id: '186', 
    title: '客服维护', 
    department: '职能部', 
    location: '菲律宾', 
    keywords: '客服, 维护',
    details: {
      gender: '不限',
      age: '18-33岁',
      nationality: '不限',
      languages: '中文流利',
      salary: '试用期 10,000+，转正后享绩效提成',
      hours: '9小时工作制，月休4天（倒班制）',
      requirements: [
        '中文沟通无障碍，普通话流利，理解能力强；',
        '具备良好的沟通表达能力、情绪管理能力和抗压能力，团队协作能力强；',
        '热爱游戏，能快速了解客户心理和游戏需求；',
        '能接受轮休与排班；',
        '电脑操作及打字熟练，掌握基础办公软件；',
        '不接受推广类岗位经验；',
        '有维护经验者优先（如电销、电维、客户维护、客服等）。'
      ],
      responsibilities: [
        '负责平台客户的常规业务问题解决与回复；',
        '提供优质服务，具备服务意识和服务精神，执行力强，团队协作良好；',
        '挖掘并分析客户需求，将客户意见与建议进行整理反馈并及时跟进；',
        '快速理解客户心理和游戏需求，做好日常客户关系维护。'
      ]
    }
  },
  { 
    id: '187', 
    title: '运营专员', 
    department: '职能部', 
    location: '菲律宾', 
    keywords: '运营',
    details: {
      gender: '不限',
      age: '20-33岁',
      nationality: '中国 / 台湾 / 马来西亚 / 缅甸 / 越南\n特别说明：福建、山东、河南籍不接受',
      languages: '中文',
      salary: '1390U-1940U',
      hours: '9小时工作制，月休4天（三班倒）',
      requirements: [
        '学历要求：大专及以上',
        '不接受小白，有运营岗位经验者优先；',
        '了解运营工作，熟悉 B 端对接、平台运营、内容配置、后台操作使用等业务者优先；',
        '有与市场或职能部门对接运营工作事项经验者优先；',
        '具备上进心和积极的工作态度，责任感强，认真踏实；',
        '具备基本电脑操作常识，打字速度 ≥ 60 字/分钟；',
        '熟悉 Excel、PPT 等办公软件；',
        '必须接受跟随至第三国。'
      ],
      responsibilities: [
        '对接公司各部门，协助处理并跟踪线上反馈问题；',
        '负责三方场馆日常事务对接，建立及维护关系，处理并跟进场馆问题与维护事宜；',
        '负责平台广告图、游戏上下线、公告、站内信、域名、返水等配置及跟踪；',
        '对平台场馆、子游戏及相关运营策略进行调研与分析；',
        '监控平台异常情况，配合测试团队保障站点正常运作；',
        '监控运营数据及用户行为，进行统计、汇总、分析，挖掘异常原因，定期提交分析报告；',
        '完成日常班次交接工作。'
      ]
    }
  },
  { 
    id: '188', 
    title: '红利专员', 
    department: '职能部', 
    location: '菲律宾', 
    keywords: '红利',
    details: {
      gender: '不限',
      age: '20-33岁',
      nationality: '不限',
      languages: '中文',
      salary: '1390U-1670U',
      hours: '9小时工作制，月休4天（三班倒）',
      requirements: [
        '学历要求：大专及以上',
        '不接受小白，中文可流利表达及正常读写；',
        '无红利经验者，必须具备相关行业经验（客服 / 数据 / 运营）；',
        '具备体育相关知识背景，掌握表格基础函数；',
        '行业经验丰富，且擅长使用表格公式进行数据统计者优先。'
      ],
      responsibilities: [
        '审核优惠活动、礼品资格，派发彩金并跟进礼品派发前后问题；',
        '追踪并跟进各部门反馈的问题，直至解决；',
        '对接并及时回复、处理各部门反馈的问题。'
      ]
    }
  },
  { 
    id: '189', 
    title: '敏感信息专员', 
    department: '职能部', 
    location: '菲律宾', 
    keywords: '敏感信息',
    details: {
      gender: '不限',
      age: '35岁以下',
      nationality: '不限',
      languages: '中文读、听、写佳',
      salary: '1390U-1950U',
      hours: '9小时工作制，月休4天（三班倒）',
      requirements: [
        '学历要求：本科及以上',
        '中文打字速度 ≥ 50字/分钟，能快速响应客户；',
        '熟悉客服系统操作（如 800、achat 等），能进行客户信息记录、问题跟踪与反馈；',
        '中文电话沟通流利、顺畅；',
        '具备优秀的沟通能力，语言表达清晰、温和、专业，能准确理解客户需求；',
        '具备高度责任心，能主动跟进问题解决，不推诿、不拖延，严禁态度散漫或对客户使用不当言语。'
      ],
      responsibilities: [
        '通过软件线上回复会员，收集会员信息并根据需求解决问题；',
        '收集完会员信息后，主动致电会员进行核实，并提交上级修改会员问题；',
        '接受部门临时安排与调动，服从管理。'
      ]
    }
  },
  { 
    id: '190', 
    title: '薪酬专员', 
    department: '职能部', 
    location: '菲律宾', 
    keywords: '薪酬',
    details: {
      gender: '女',
      age: '21-35岁',
      nationality: '不限',
      languages: '中英文流利（中文 HSK5 及以上，英语雅思 6.5 及以上）',
      salary: '面议',
      hours: '9小时工作制，周休一天',
      requirements: [
        '学历要求：大专及以上学历',
        '熟悉使用各类办公软件（Excel、Word 等），并能熟练使用各种函数；',
        '能够长期稳定任职，心态平和稳重，对数字敏感；',
        '具备良好的表达与思维能力，能独立判断并处理部分问题；',
        '对接外部人员较多，需具备良好的沟通协调能力；',
        '在职期间如遇问题，需及时向部门反馈，不得先斩后奏。'
      ],
      responsibilities: [
        '对接各部门，核算薪资数据；',
        '整理与分析薪酬数据；',
        '制定并完善薪酬相关操作流程与制度。'
      ]
    }
  },
  { 
    id: '191', 
    title: '行政专员', 
    department: '职能部', 
    location: '菲律宾', 
    keywords: '行政',
    details: {
      gender: '不限',
      age: '21-30岁',
      nationality: '不限',
      languages: '中英文流利（中文 HSK5 及以上，英语雅思 6.5 及以上）',
      salary: '面议',
      hours: '9小时工作制，周休一天（三班倒，需接受夜班）',
      requirements: [
        '学历要求：大专及以上学历',
        '英语口语流利，可无障碍进行中英文沟通；',
        '态度端正，责任心强；',
        '有行政相关经验者优先。'
      ],
      responsibilities: [
        '负责公司行政管理服务，主要为办公室管理及车辆管理；',
        '负责公司办公室设备维护、物资采购、车辆调度，以及菲籍保姆、保安的日常管理；',
        '行政工作实行三班倒，需服从公司安排；',
        '保持良好的沟通意愿与服务意识。'
      ]
    }
  },
  { 
    id: '192', 
    title: '运维助理', 
    department: '职能部', 
    location: '菲律宾', 
    keywords: '运维, 助理',
    details: {
      gender: '女',
      age: '21-30岁',
      nationality: '不限',
      languages: '中文流利',
      salary: '面议',
      hours: '9小时工作制，周休一天',
      requirements: [
        '大专及以上学历，专业不限，欢迎应届毕业生；',
        '工作认真负责，抗压能力强，具备良好的沟通与执行能力；',
        '熟练使用 Excel、Word、PPT 等办公软件；',
        '具备较强的文档编写和事务处理能力，有项目助理或团队助理经验优先；',
        '对移动应用、互联网行业有一定兴趣，愿意在团队中长期成长。',
        '加分项：',
        '熟悉 Jira、Confluence 等协作工具；',
        '有技术团队助理或研发支持经验；',
        '英文读写能力良好，可处理英文文档。'
      ],
      responsibilities: [
        '协助团队进行日常事务处理，包括会议安排、资料整理、任务跟进、物料准备等；',
        '整理并维护需求列表、开发进度表、测试记录等内部文档；',
        '协助处理跨部门沟通事项，如需求对接、问题反馈、协作协调等；',
        '跟进版本发布流程，记录版本信息、上线状态和问题汇总；',
        '支持团队人力、考勤、资产、出差等事务性工作，确保团队高效运行。'
      ]
    }
  },
  { 
    id: '193', 
    title: '会计专员', 
    department: '职能部', 
    location: '菲律宾', 
    keywords: '会计',
    details: {
      gender: '不限',
      age: '21-35岁',
      nationality: '缅甸、马来西亚、印尼',
      languages: '中文流利',
      salary: '1400U-1680U',
      hours: '9小时工作制，月休4天',
      requirements: [
        '学历要求：不限',
        '熟练使用各类办公软件及财务 ERP 系统；',
        '具备一定的财务知识基础，具有全面的会计核算经验；',
        '具有 2 年以上财务工作经验；',
        '有相关行业经历者优先。'
      ],
      responsibilities: [
        '负责与对应部门对接费用事宜；',
        '负责日常费用录入 ERP 及初审工作；',
        '跟进部门费用情况，并与相关部门协作配合。'
      ]
    }
  },
  { 
    id: '194', 
    title: '会计组长', 
    department: '职能部', 
    location: '菲律宾', 
    keywords: '会计, 组长',
    details: {
      gender: '不限',
      age: '21-35岁',
      nationality: '外籍（除泰籍）',
      languages: '中文流利',
      salary: '1700U-2300U + 绩效 560U-840U + 全勤 70U（外宿有房补）',
      hours: '9小时工作制，长白班',
      requirements: [
        '熟练使用各类办公软件及财务 ERP 系统；',
        '具备一定的财务知识基础，具有全面的会计核算经验；',
        '具备 2 年以上财务工作经验；',
        '有相关工作经历者优先。'
      ],
      responsibilities: [
        '协助财务主管做好公司财务管理工作；',
        '配合完成公司部门预算的编制与汇总；',
        '定期检查部门预算执行情况，跟进解决执行中的问题，并与相关部门协作配合；',
        '负责日常费用审批工作；',
        '监督和培养所管辖会计的日常工作。'
      ]
    }
  },
  { 
    id: '195', 
    title: '出纳专员', 
    department: '职能部', 
    location: '菲律宾', 
    keywords: '出纳',
    details: {
        gender: '不限',
        age: '21-35岁',
        nationality: '马来西亚 / 印尼 / 缅甸',
        languages: '中文流利，会英语者优先',
        salary: '10k—12k',
        hours: '9小时工作制，月休4天（12:00-21:00）',
        requirements: [
            '学历要求：大专及以上（经验丰富者可放宽至高中或中专）',
            '具备财务或会计相关专业背景；',
            '具备良好的数字敏感度和精确性，能够准确处理财务数据；',
            '能熟练操作 Excel 部分函数（如 VLOOKUP）、Word 等办公软件；',
            '具备良好的沟通协调能力及团队合作精神；',
            '工作细心、耐心，责任心强。'
        ],
        responsibilities: [
            '负责日常财务数据整理、核对和归档工作；',
            '执行公司财务出纳制度，确保财务流程合规；',
            '协助上级完成其他临时性工作。'
        ]
    }
  },
  { 
    id: '196', 
    title: '信息管理专员', 
    department: '职能部', 
    location: '菲律宾', 
    keywords: '信息管理',
    details: {
      gender: '不限',
      age: '21-32岁',
      nationality: '不限',
      languages: '中文听说读写流利',
      salary: '10k-15k + 绩效 1k-5k + 全勤 500',
      hours: '9小时工作制，月休4天',
      requirements: [
        '学历要求：大专及以上',
        '具备基础办公软件使用能力，熟练操作 Excel；',
        '态度亲和，有耐心，服从上级安排与工作调配；',
        '工作细心，责任心强，能按要求完成任务；',
        '有签证相关经验者优先。'
      ],
      responsibilities: [
        '负责护照管理，包括收取护照、编辑护照页码、归类签证类型及签证时间；',
        '协助员工续签及签证办理，负责递交材料；',
        '及时维护各场地人事信息、数据和档案，确保信息有效、数据准确、档案健全；',
        '协助上级跟进并完成其他工作事项。'
      ]
    } 
  },
  { 
    id: '197', 
    title: '换汇专员', 
    department: '职能部', 
    location: '菲律宾', 
    keywords: '换汇',
    details: {
      gender: '不限',
      age: '不限',
      nationality: '外籍',
      languages: '中文流利',
      salary: '试用期：1390U + 490U（加班补贴）+ 全勤 70U\n转正：1530U + 490U（加班补贴）+ 全勤 70U + 绩效（700U / 420U / 140U）',
      hours: '9小时工作制（业绩需要时可调整为12小时，另有加班补贴）',
      requirements: [
        '有出入款经验，熟悉报表及值班流程者优先；',
        '具备良好的中文表达能力及逻辑思维能力；',
        '熟悉办公软件操作，能高效完成日常工作。'
      ],
      responsibilities: [
        '负责日常出入款操作，确保准确无误；',
        '负责相关报表制作与数据统计；',
        '参与值班，确保换汇业务顺利进行；',
        '按照上级安排完成其他相关工作。'
      ]
    }
  },
  { 
    id: '198', 
    title: '员工关系专员', 
    department: '职能部', 
    location: '菲律宾', 
    keywords: '员工关系',
    details: {
      gender: '不限',
      age: '21-32岁',
      nationality: '外籍',
      languages: '中文听说读写流利',
      salary: '10k-15k + 绩效 1k-5k + 全勤 500',
      hours: '9小时工作制，月休4天',
      requirements: [
        '大专及以上学历，有人力资源相关经验；',
        '熟悉 Excel 办公软件，会使用 Excel 公式者优先；',
        '具备良好的沟通能力、理解能力和人际相处能力；',
        '反应能力强，有耐心，能独立解决问题；',
        '可接受学习部门其他板块工作及外场地调动。'
      ],
      responsibilities: [
        '负责办理员工入职、离职、转正、岗位调动等手续；',
        '制作并汇总人员调动变化的日、月度表格；',
        '完成公司员工入离转调流程归档及报表统计上报；',
        '熟悉部门其他板块工作，如新人对接、护照管理、档案信息及工作交接；',
        '完成领导交办的其他事项。'
      ]
    }
  },
  { 
    id: '199', 
    title: '帐目专员', 
    department: '职能部', 
    location: '菲律宾', 
    keywords: '帐目',
    details: {
      gender: '不限',
      age: '21-33岁',
      nationality: '外籍',
      languages: '中文听说读写流利',
      salary: '10k-15k + 绩效 1k-5k + 全勤 500',
      hours: '9小时工作制，月休4天',
      requirements: [
        '具备一定的帐目相关工作经验；',
        '熟悉帐务流程，能够独立处理相关事务；',
        '工作细心，责任心强，具备良好的沟通与协调能力；',
        '熟练使用办公软件，具备基础数据处理能力。'
      ],
      responsibilities: [
        '负责日常帐目的处理与核对；',
        '对接帐务相关工作，确保数据准确无误；',
        '协助上级完成帐务报表的整理与分析；',
        '完成其他与帐目相关的工作任务。'
      ]
    }
  },
  { 
    id: '200', 
    title: 'OA审核/数据专员', 
    department: '职能部', 
    location: '菲律宾', 
    keywords: 'oa, 审核, 数据',
    details: {
      gender: '不限',
      age: '21-32岁',
      nationality: '外籍',
      languages: '中文听说读写流利',
      salary: '10k-15k + 绩效 1k-5k + 全勤 500',
      hours: '9小时工作制，月休4天',
      requirements: [
        '大专及以上学历，有人力资源工作经验（如员工关系、基础人事经验者优先）；',
        '熟练使用 Excel、Word、PowerPoint 等办公软件；',
        '做事认真细致，具备高度责任心；',
        '具备良好的沟通能力，中文沟通无障碍。'
      ],
      responsibilities: [
        '负责人员基础人事工作，包括入职、离职、调动、转正等手续办理及安排，并完成人事台账管理；',
        '制定并统计相关数据报表；',
        '负责公司政策的宣导与落地执行；',
        '对接行政后勤，做好人员入离职相关事宜。'
      ]
    }
  },
  { id: '201', title: '薪酬主管', department: '职能部', location: '菲律宾', keywords: '薪酬, 主管' },
  { id: '202', title: '薪酬组长', department: '职能部', location: '菲律宾', keywords: '薪酬, 组长' },
  { id: '203', title: '招聘主管', department: '职能部', location: '菲律宾', keywords: '招聘, 主管' },
  { id: '204', title: 'HRBP', department: '职能部', location: '菲律宾', keywords: 'hrbp, 人力资源' },
  { id: '205', title: '菲华行政', department: '职能部', location: '菲律宾', keywords: '行政' },
  { 
    id: '206', 
    title: '数据分析师', 
    department: '职能部', 
    location: '菲律宾', 
    keywords: '数据分析',
    details: {
      gender: '不限',
      age: '21-35岁',
      nationality: '外籍',
      languages: '中文听说读写',
      salary: '面议（20K-30K）+ 绩效 1K-5K + 全勤奖 500',
      hours: '8休4（白班）',
      requirements: [
        '中文听说读写流利',
        '有相关数据报表的经验',
        '熟练操作 Word、Excel 等办公软件',
        '细心认真，责任心强，具备团队精神，服从上级工作安排'
      ],
      responsibilities: [
        '每日完成 BW 的固定数据，并与 CWZX 其他相关部门进行对比',
        '每日进行财务数据分析',
        '协助同事及上级完成相关工作'
      ]
    }
  },
  { 
    id: '207', 
    title: '三方专员/出入款专员', 
    department: '职能部', 
    location: '菲律宾', 
    keywords: '三方, 出入款',
    details: {
      gender: '不限',
      age: '21-32岁',
      nationality: '外籍',
      languages: '中文听说读写',
      salary: '10K-12K + 绩效 1K-5K + 全勤奖 500',
      hours: '8休4（倒班）',
      requirements: [
        '中文口语流利，沟通交流无障碍',
        '电脑操作与中文打字熟练',
        '有相关客服或出入款经验者优先'
      ],
      responsibilities: [
        '负责资金下发、资金监管、账目核对、报表制作及数据统计',
        '协助提供银行卡信息给客户存款，并按要求完成游戏账号上分',
        '回复并处理各个工作群中的问题'
      ]
    }
  },
  { 
    id: '208', 
    title: '极速专员', 
    department: '职能部', 
    location: '菲律宾', 
    keywords: '极速',
    details: {
      gender: '不限',
      age: '21-33岁',
      nationality: '台湾、马来、印尼、越南、泰国、缅甸等东南亚及华裔华人',
      languages: '中文听说读写',
      salary: '10K-12K + 绩效 1K-5K + 全勤奖 500',
      hours: '8休4（倒班）',
      requirements: [
        '中文流利，打字速度快，熟悉办公室软件',
        '口齿清晰，语音富有感染力',
        '具备基础客服和客户维护经验，电脑办公能力良好',
        '人际沟通能力强，喜欢学习并能长期稳定工作',
        '工作细致认真，责任意识强，具备一定抗压能力'
      ],
      responsibilities: [
        '对接会员与商户，提供热情周到的服务，积极响应客户需求',
        '负责线上指导工作，引导客户和商户完成公司更多业绩目标'
      ]
    }
  },
  { 
    id: '209', 
    title: '客服专员', 
    department: '职能部', 
    location: '菲律宾', 
    keywords: '客服',
    details: {
      gender: '不限',
      age: '35岁以下',
      nationality: '外籍',
      languages: '中文听说读写',
      salary: '10K-12K + 加班费 3.5K',
      hours: '12休4（倒班）',
      requirements: [
        '细心负责，具备责任心',
        '熟悉基本电脑操作',
        '能适应倒班工作'
      ],
      responsibilities: [
        '负责日常转账及财务报表处理，工作简单易上手',
        '确保数据准确无误，并严格按照流程执行操作'
      ]
    }
  },
  { 
    id: '210', 
    title: '财务经理或主管', 
    department: '职能部', 
    location: '菲律宾', 
    keywords: '财务, 经理, 主管',
    details: {
      gender: '不限',
      age: '不限',
      nationality: '不限',
      languages: '不限',
      salary: '面议',
      hours: '面议',
      requirements: [
        '具备一定的金融学知识',
        '有金融支付方面的工作经历与管理经验者优先',
        '为人真诚，性格和善，服从性高',
        '如在菲律宾工作，不可有签证问题',
        '善于沟通交流'
      ],
      responsibilities: [
        '负责财务部门的组织与管理',
        '优化工作流程，培养并带领管理团队',
        '处理和解决突发财务问题',
        '完成上级交办的其他任务'
      ]
    }
  },
  { 
    id: '211', 
    title: '财务副组长', 
    department: '职能部', 
    location: '菲律宾', 
    keywords: '财务, 副组长',
    details: {
      gender: '不限',
      age: '28岁以上',
      nationality: '不限',
      languages: '中文 + 英文听说读写',
      salary: '2083-2500 美金 + 绩效 700-1050 美金',
      hours: '不限',
      requirements: [
        '熟练使用办公软件（WPS、Excel、Word 等），具备良好的电脑操作能力',
        '中文听说读写流利（外籍华侨 / 大学学历 / HSK6 以上）',
        '有相关岗位经验，有管理经验者优先',
        '能灵活处理问题，具备良好的沟通能力',
        '能承受较大的工作压力'
      ],
      responsibilities: [
        '负责组内值班及各岗位工作安排，处理工作中的上升问题',
        '监督组内各岗位工作进度，负责绩效评比与排班表',
        '日常监督业务情况，及时发现并处理问题',
        '完成上级安排的其他事项'
      ]
    }
  },
  { 
    id: '212', 
    title: '报表管理', 
    department: '职能部', 
    location: '菲律宾', 
    keywords: '报表',
    details: {
      gender: '不限',
      age: '28岁以上',
      nationality: '不限',
      languages: '中文 + 英文听说读写',
      salary: '面议',
      hours: '9休4（白班）',
      requirements: [
        '具备团队管理经验',
        '熟悉并了解推广业务费用',
        '能根据工作问题提出合理的管理建议'
      ],
      responsibilities: [
        '负责月中推广渠道收益数据分析',
        '编制月中报表账单',
        '月底更新工资数据',
        '负责各负责人账目费用的核对与确认',
        '进行推广费用的审核与审计',
        '完成其他临时安排的数据分析工作'
      ]
    }
  },
  { 
    id: '213', 
    title: 'USDT支出专员', 
    department: '职能部', 
    location: '菲律宾', 
    keywords: 'usdt, 支出',
    details: {
      gender: '不限',
      age: '不限',
      nationality: '外籍',
      languages: '中文听说读写',
      salary: '试用期：10,000 RMB + 500 RMB 全勤奖\n转正后：12,000 RMB + 500 RMB 全勤奖 + 绩效（三档：1,000 / 3,000 / 5,000 RMB）\n每6个月考评级通过后，额外增加 1,000 RMB\n转正后每月均有绩效考核（三档：1,000 / 3,000 / 5,000 RMB）',
      hours: '8休4（倒班制）',
      requirements: [
        '打字速度快，熟悉基本电脑办公工具',
        '掌握区块链基础知识',
        '中文听说读写流利',
        '严格按照流程审核并操作打款'
      ],
      responsibilities: [
        '负责USDT资金支出操作',
        '严格执行审核与打款流程',
        '确保资金操作的准确性与及时性'
      ]
    }
  },
  { 
    id: '214', 
    title: '督导专员', 
    department: '职能部', 
    location: '菲律宾', 
    keywords: '督导',
    details: {
      gender: '不限',
      age: '30岁以下',
      nationality: '缅甸籍 / 台湾籍 / 马来籍 / 越南华侨',
      languages: '中英文听说读写',
      salary: '10K-12K + 绩效 1K-5K + 全勤奖 500',
      hours: '9休4（倒班制）',
      requirements: [
        '熟练电脑操作',
        '具备会计类相关工作经验',
        '掌握表格函数基本公式'
      ],
      responsibilities: [
        '负责对接考勤',
        '监督上班纪律',
        '维护网络安全'
      ]
    }
  },
  { 
    id: '215', 
    title: '资金审核专员', 
    department: '职能部', 
    location: '菲律宾', 
    keywords: '资金, 审核',
    details: {
      gender: '不限',
      age: '21-35岁',
      nationality: '外籍（越南籍优先）',
      languages: '中文听说读写',
      salary: '人民币：10K-12K + 绩效 1K-5K + 全勤奖 500\n美金（试用期）：1390U + 全勤 70U + 补贴 490U\n美金（转正后）：1670U + 全勤 70U + 补贴 490U + 绩效（700U / 420U / 140U）',
      hours: '8休4（倒班制）',
      requirements: [
        '精通 Excel 的基本技能'
      ],
      responsibilities: [
        '每天跟进审核业务组操作是否按照流程规定执行'
      ]
    }
  },
  { 
    id: '216', 
    title: '单据专员', 
    department: '职能部', 
    location: '菲律宾', 
    keywords: '单据',
    details: {
      gender: '不限',
      age: '30岁以下',
      nationality: '外籍',
      languages: '中文听说读写',
      salary: '10K-12K + 绩效 1K-5K + 全勤奖 500',
      hours: '9休4（一班制）',
      requirements: [
        '会计相关专业优先',
        '做事细心，有责任感'
      ],
      responsibilities: [
        '单据审核'
      ]
    }
  },
  { 
    id: '217', 
    title: '运营客服', 
    department: '职能部', 
    location: '菲律宾', 
    keywords: '运营, 客服',
    details: {
      gender: '不限',
      age: '35岁以内',
      nationality: '不限',
      languages: '中文听说读写',
      salary: '10K-12K + 绩效 1K-5K + 全勤奖 500',
      hours: '8休4（倒班制）',
      requirements: [
        '具备虚拟币相关经验，并了解其他虚拟币基础知识',
        '熟练使用 WPS、Excel 等办公软件',
        '态度端正，学习能力强',
        '有值班或相关管理工作经验者优先'
      ],
      responsibilities: [
        '对接内外部商户，解答虚拟币相关问题',
        '维护商户合作，确保持续跑量',
        '根据订单笔数情况进行调整',
        '完成领导安排的其他临时性工作'
      ]
    }
  },
  { _id: '218', title: '投诉专员', department: '职能部', location: '菲律宾', keywords: '投诉', id: '218', details: { gender: '不限（女生需具备部门助理经验，熟悉办公文档及 PPT 制作）', age: '21-30岁', nationality: '中国 / 马来', languages: '中文、英文', salary: '12K-14K', hours: '9小时 / 月休4（上班与休假时间由部门安排）', requirements: ['熟练使用 Office 办公软件，擅长 PPT 和表格应用', '具备较强的逻辑思维能力、语言组织与应变能力', '性格开朗活泼，文案编辑能力佳，有一定英文基础更优'], responsibilities: ['处理各部门日常投诉与反馈', '监督并完善公司相关制度', '加强信息安全的管理与监督', '严查贪污、吸毒、暴力、赌博等行为', '协调优化各部门改进方案，收集优秀建议'] } },
  { _id: '219', title: '渠道招商人员', department: '职能部', location: '菲律宾', keywords: '渠道, 招商', id: '219', details: { gender: '不限', age: '21-35岁', nationality: '外籍（优先马来 / 香港 / 缅甸，不要台湾籍）', languages: '中英文流利，需具备流利的英文书写及口语能力', salary: '面议', hours: '9小时 / 月休4', requirements: ['管理能力出色，具备魄力与执行力', '沟通能力强，能独立完成报告制作', '大专及以上学历，统计学相关专业优先', '英文口语及书写能力需达到工作语言水平', '具备敏锐的风控意识，对资金渠道安全有判断力', '具备一定谈判、招商及社交能力', '具备开拓意识，能在现有基础上开发新渠道'], responsibilities: ['负责渠道网站的信息发布及广告推广', '专门负责开拓国际金流渠道', '能够接受出差第三国，寻找资金渠道商', '对资金渠道的安全进行判断与把控', '承担渠道招商与商务谈判工作', '在既有渠道基础上，积极开拓新的合作渠道'] } },
  { _id: '220', title: '总监助理', department: '职能部', location: '菲律宾', keywords: '总监, 助理', id: '220', details: { gender: '不限', age: '21-35岁', nationality: '外籍（优先马来 / 香港 / 缅甸，不要泰国籍 / 台湾籍）', languages: '中英文流利', salary: '面议', hours: '9小时 / 月休4', requirements: ['具备总监助理相关经验', '优先有商务洽谈经验', '接受不定时出差', '在菲律宾者优先'], responsibilities: ['协助领导进行相关商务活动及行程协调', '协调领导制定并落实各项业务发展战略和工作计划', '协助上级沟通，处理外部机构相关事宜', '制作各类报表，协助上级处理各部门日常事务', '完成上级安排的管理工作，落实下达的各项指令', '跟进业务监督及整理工作，做好上传下达与汇报'] } },
  { _id: '221', title: '资金专员', department: '职能部', location: '菲律宾', keywords: '资金', id: '221', details: { gender: '不限', age: '35岁以下', nationality: '不限', languages: '中英文流利', salary: '约 2100U', hours: '9小时', requirements: ['具备一定的金融学知识', '有金融支付方面的工作经历者优先', '为人真诚，性格和善，服从性高', '善于沟通交流'], responsibilities: ['负责财务部门报表处理', '负责资金管理与支付工作', '完成上级安排的其他任务'] } },
  { _id: '222', title: '审计专员', department: '职能部', location: '菲律宾', keywords: '审计', id: '222', details: { gender: '不限', age: '21-35岁', nationality: '外籍（马来籍优先/会英文优先），中国籍也可', languages: '中文流利，会英文优先', salary: '10K-12K', hours: '9小时，月休4（上班/休假时间根据部门安排）', requirements: ['具备优秀的跨部门沟通和协调能力', '对账目分析有良好的逻辑思维能力', '精通 Excel，熟悉函数公式并能熟练运用', '中文理解无障碍，表达清晰，抗压能力强', '未从事过业务岗位（推广、电销、招商等）', '对招聘、推广的广告推送方式有一定了解', '有财务审核经验者优先', '接受返聘，但不考虑需特批的人员', '具备高度保密意识'], responsibilities: ['协助上级对业务部门每月账目进行梳理与审查，从中发现问题，并与账目对接人沟通协调', '及时跟进上级指派的任务，做好记录与汇报'] } },
  { _id: '223', title: '资产调配专员', department: '职能部', location: '菲律宾', keywords: '资产, 调配', id: '223', details: { gender: '不限', age: '21-35岁', nationality: '不限', languages: '中英文流利', salary: '10K-12K', hours: '9小时，月休4（上班/休假时间根据部门安排）', requirements: ['在菲必须签证无问题，能正常续签，若有需要可随时派驻第三国', '熟悉数据录入、分析、比对及资产去向与库存状态的追查', '熟练操作 Office 办公软件，尤其是 Excel', '有仓库管理、仓储管理经验，长期数据分析、比对、总结经验优先', '忠诚可靠，踏实能干，吃苦耐劳，身体强健，责任感强', '具备良好的沟通能力，能积极与跨部门协作'], responsibilities: ['按照资产部要求及内部流程，配合部门安排支援各驻场资产工作（包括对接派发、回收、盘点各类资产）', '对数据录入、比对及追踪敏锐，掌握所有资产去向，并及时更新资产数据', '熟知并执行资产部各项流程与政策，确保工作规范落实', '与跨部门保持良好沟通，积极乐观，推动协作顺利开展', '对工作充满热情，责任心强，确保任务高效完成'] } },
  { _id: '224', title: '公关经理', department: '职能部', location: '菲律宾', keywords: '公关, 经理', id: '224', details: { gender: '不限', age: '25-40岁', nationality: '外籍（需具备可随时出境/出国出差的国籍，无需办理签证；不要台湾籍）', languages: '英语、普通话流利（其他语言为加分项）', salary: 'HKD 35,000 – HKD 100,000', hours: '24小时 On Call（随时待命）', requirements: ['具备跨国沟通能力，可灵活出差并适应高强度工作节奏', '熟悉公共关系与政策沟通，有与政府机构对接经验者优先', '对公共政策、法律法规及拟议立法具备研究与分析能力', '思维清晰，有较强的表达与谈判能力', '责任心强，能代表公司在正式场合发声'], responsibilities: ['建立并维护公司与政府机构的良好关系', '监督并影响地方、州和联邦各级的立法与监管动态', '制定并实施与政府合作的战略计划，推动公司使命和目标', '研究与分析公共政策、法律法规和拟议立法对公司的影响', '代表公司出席与政府官员、行业代表及相关方的会议与公开听证会', '协助公司与政府官员沟通，争取便利与资源，解决实际问题', '在政府与公司内部保持有效联络渠道', '向上级提供政策变动与政治议题的建议与简报'] } },
  { 
    id: '225', 
    title: '财务主管', 
    department: '职能部', 
    location: '菲律宾', 
    keywords: '财务, 主管' 
  },
  { 
    id: '226', 
    title: '财务主管/经理', 
    department: '职能部', 
    location: '菲律宾', 
    keywords: '财务, 主管, 经理',
    details: {
      gender: '不限',
      age: '45岁以下',
      nationality: '马来籍',
      languages: '中英文流利',
      salary: '20K – 40K',
      hours: '9小时',
      requirements: [
        '具备一定的金融学知识',
        '有金融支付工作经历及管理经验者优先',
        '善于沟通交流，为人真诚，性格和善，服从性高',
        '在菲人员需无签证问题'
      ],
      responsibilities: [
        '负责财务部门的整体组织与管理',
        '优化财务工作流程，提升部门效率',
        '培养并带领管理团队，提升团队综合能力',
        '处理和解决突发的财务问题',
        '完成上级交办的各类任务'
      ]
    }
  },
  { 
    id: '227', 
    title: '财务专员', 
    department: '职能部', 
    location: '菲律宾', 
    keywords: '财务',
    details: {
      gender: '不限',
      age: '不限',
      nationality: '不限',
      languages: '中文流利',
      salary: '试用期 1390U，转正 1690U',
      hours: '9小时',
      requirements: [
        '有财务相关工作背景者优先',
        '擅长沟通，能与跨部门保持积极顺畅的交流',
        '熟悉资产部流程及政策，能严格按规定执行',
        '具备财务或数据统计相关经验，对数字敏感',
        '工作细心负责，有责任心和上进心'
      ],
      responsibilities: [
        '按照公司财务部及部门内部流程，处理财务相关工作',
        '确保部门政策及上级要求有效传达并落实到位',
        '执行财务数据统计及分析工作，确保数据准确',
        '配合跨部门工作，提供支持与协调'
      ]
    }
  },
  { 
    id: '228', 
    title: '大数据工程师', 
    department: '工程部', 
    location: '迪拜', 
    keywords: '大数据, hadoop, spark',
    details: {
      salary: '面议',
      hours: '13-22（具体安排不限）',
      gender: '不限',
      age: '中国籍 21-35 岁；外籍 21-30 岁',
      nationality: '中国籍、外籍',
      languages: '英文及基本中文',
      requirements: [
        '头脑清晰，对数据敏感，具备较强的学习能力；',
        '熟悉数据库，能够对 MySQL 或 ES 编写常规查询语句；',
        '接触过 Shell 或 Python，能编写基础数据处理脚本；',
        '熟练使用 EXCEL 函数，有一定实操经验。'
      ],
      responsibilities: [
        '关注数据告警群，能排查数据告警是正常波动还是异常情况；',
        '关注任务告警群，对任务节点异常进行处理，确保能从 checkpoint 正常启动；',
        '根据业务部门临时需求，进行数据提取与处理；',
        '对线上问题进行及时反馈与预警，并在工作群内同步通知。'
      ]
    } 
  },
  { 
    id: '229', 
    title: 'DBA工程师', 
    department: '工程部', 
    location: '迪拜', 
    keywords: 'dba, mysql, oracle',
    details: {
      salary: '面议',
      hours: '13-22（具体安排不限）',
      gender: '不限',
      age: '中国籍 21-35 岁；外籍 21-30 岁',
      nationality: '中国籍、外籍',
      languages: '英文及基本中文',
      requirements: [
        '两年以上相关工作经验，责任心强，具备快速处理系统突发事件的能力；',
        '具备较强的学习能力；',
        '五年以上 MySQL 等关系型数据库维护经验；',
        '深入了解数据库体系架构和工作原理；',
        '熟悉 SQL 调优，对数据库事务、锁及高并发设计有深入理解。'
      ],
      responsibilities: [
        '负责 Redis、ELK、MQ 等非关系型数据库管理；',
        '排查服务故障，进行问题分析并解决疑难问题；',
        '负责数据库监控、告警、漏洞修复、性能调优及负载均衡相关工作。'
      ]
    }
  },
  { 
    id: '230', 
    title: '运维工程师', 
    department: '工程部', 
    location: '迪拜', 
    keywords: '运维, linux',
    details: {
      salary: '面议',
      hours: '9小时 / 周休一',
      age: '21–35岁',
      nationality: '中国籍/外籍',
      languages: '基本中文',
      gender: '不限',
      requirements: [
        '2年以上 Linux 系统管理经验，精通系统管理与维护。',
        '熟悉 zabbix / prometheus / grafana 等监控软件。',
        '熟悉各类应用服务器的部署与优化。',
        '熟悉 Shell，掌握 Python / Go 者优先。',
        '熟悉 Docker 容器原理与技术细节，有生产环境 CI/CD 自动化部署经验优先。',
        '责任心强，积极主动，具备良好的团队合作精神与抗压能力。'
      ],
      responsibilities: [
        '负责公司生产环境应用的运维建设，保障服务稳定性。',
        '负责业务系统的发布、维护、监控、调优及故障排查。',
        '跟进特定项目生命周期内的部署与上线。',
        '编写与维护运维知识库及相关文档。'
      ]
    }
  },
  { 
    id: '231', 
    title: '高级网络工程师', 
    department: '工程部', 
    location: '迪拜', 
    keywords: '网络, ccnp, ccie',
    details: {
      salary: '面议',
      hours: '9小时 / 周休一',
      age: '21–35岁',
      nationality: '中国籍/外籍',
      languages: '基本中文',
      gender: '不限',
      requirements: [
        '精通思科设备高级网络知识：',
        '交换：VLAN、STP、VTP、二层安全等；',
        '路由：RIP、OSPF、EIGRP、BGP、MPLS VPN 等。',
        '熟悉并能实操思科交换、路由、安全、无线，具备大中型企业网络运维及架构设计经验。',
        '掌握 H3C / 华为 / Juniper / H3C 其中至少一门交换路由技术优先。',
        '熟练操作思科、Juniper（ScreenOS / JUNOS）、华为、H3C 等任意一款防火墙产品。',
        '掌握基础的 Linux 与 Windows 系统管理知识。',
        '有网络支持维护经验，了解机房建设维护。',
        '熟悉各种 VPN 协议。',
        '能独立开展中小型集成项目的沟通、方案制作、实施及后期运维优先。',
        '3–5年相关工作经验，有三大运营商工作背景者优先。',
        '持有 CCIE证书（或同等及以上认证）必需。'
      ],
      responsibilities: []
    }
  },
  { 
    id: '232', 
    title: '运维域名工程师', 
    department: '工程部', 
    location: '迪拜', 
    keywords: '运维, 域名',
    details: {
      salary: '面议',
      hours: '9小时 / 周休一',
      age: '21–35岁',
      nationality: '中国籍/外籍',
      languages: '基本中文',
      gender: '不限',
      requirements: [
        '计算机、网络相关专业毕业或有半年以上计算机/网络维护相关工作经验；',
        '熟悉局域网、互联网维护工作；',
        '熟悉电脑软硬件安装与维护；',
        '熟练掌握 Windows、Mac OS 操作系统运维经验；',
        '能够独立设计并部署中小型企业网络；',
        '学习能力强，具备团队精神和吃苦耐劳精神；',
        '了解 Cisco 防火墙、路由器、交换机等产品有限；',
        '服从领导安排。'
      ],
      responsibilities: [
        '负责公司局域网、互联网维护工作；',
        '负责公司电脑软硬件安装与维护；',
        '完成部门领导安排的工作。'
      ]
    }
  },
  { _id: '233', title: '桌面运维', department: '工程部', location: '迪拜', keywords: '桌面运维, it支持', id: '233' },
  { 
    id: '234', 
    title: '安全工程师', 
    department: '工程部', 
    location: '迪拜', 
    keywords: '安全, 网络安全',
    details: {
      salary: '面议',
      hours: '9小时 / 周休一',
      age: '21–35岁',
      nationality: '中国籍或外籍',
      languages: '基本中文',
      gender: '不限',
      requirements: [
        '具备较强的沟通能力、团队协作能力与新技术学习能力；工作态度认真负责。',
        '有网络安全服务或渗透测试相关工作经验。',
        '熟悉渗透测试步骤、方法与流程，能熟练使用安全工具并能进行手工测试。',
        '熟悉至少一种主流编程语言（如 Go / PHP / Python / Java 等）。',
        '在安全社区发表过技术文章或参加过知名攻防比赛并获奖者优先。',
        '精通 Web 攻防技术（OWASP TOP10、XSS、CSRF、SQL 注入、文件上传/包含、命令注入等），能独立发现漏洞并给出修复建议。',
        '熟悉逆向工程（例如 ollydbg、windbg 等）、软件漏洞挖掘（堆栈溢出、shellcode、fuzzing 等）者优先。',
        '熟悉社会工程学、渗透测试全流程（信息收集、扫描、验证、利用、后渗透等）。'
      ],
      responsibilities: [
        '对授权站点、应用与设备开展安全检测与渗透测试。',
        '分析常见 Web、系统与中间件漏洞，撰写漏洞分析与修复报告。',
        '研究并实践新兴安全技术，提升公司安全防护能力。',
        '配合完成公司下发的各类安全支撑与应急处置任务。'
      ]
    }
  },
  { 
    id: '235', 
    title: '高级java开发', 
    department: '工程部', 
    location: '菲律宾', 
    keywords: 'java, spring',
    details: {
      salary: '试用期：30K–40K\n转正后：30K–45K\n绩效：A=底薪×0.5，B=底薪×0.2，C=0',
      hours: '9小时 / 周休一',
      age: '不限',
      nationality: '中国籍',
      languages: '中文听说读写',
      gender: '不限',
      requirements: [
        '本科及以上学历，互联网公司背景，5年以上工作经验；具备大型网站或高访问量业务开发经验。',
        '精通 Java 语言，深入理解 JVM、多线程、网络 IO、锁机制，并有实践经验。',
        '熟悉 MySQL 数据库及原理，熟练 SQL 编写与优化，深刻理解事务、锁、索引机制。',
        '熟悉分布式服务架构与缓存技术，能实现高并发、高可用系统。',
        '熟练掌握 Spring、Spring Boot、MyBatis、Redis、Kafka、MQ、Zookeeper、Dubbo 等开源框架。',
        '具备 Spring Cloud 微服务实战经验。',
        '5年以上 Java 项目开发经验，有大型项目经验者优先。',
        '具备良好的沟通协调能力，自我驱动力强。',
        '能带领小团队完成项目或子系统开发，并具备团队培养能力。'
      ],
      responsibilities: [
        '参与支付系统的架构设计与技术调研。',
        '搭建开发环境，完成系统方案设计、编码与单元测试。',
        '撰写系统详细设计文档，保障项目技术文档规范化。'
      ]
    }
  },
  { 
    id: '236', 
    title: '高级系统工程师', 
    department: '工程部', 
    location: '菲律宾', 
    keywords: '系统, linux',
    details: {
      salary: '25K–35K + 绩效（5-3-1）',
      hours: '9小时 / 月休4',
      gender: '男',
      age: '36岁以内',
      nationality: '中国',
      languages: '中文听说读写',
      requirements: [
        '计算机、软件工程、信息安全等相关专业，本科及以上学历。',
        '3年以上系统运维或虚拟化管理经验。',
        '熟悉 Citrix 云桌面（XenDesktop/XenApp），具备实际部署和管理经验。',
        '精通 VMware vSphere（ESXi、vCenter），具备虚拟机部署、集群管理及性能优化经验。',
        '熟悉 Windows Server（AD、DNS、DHCP、组策略）及 Linux（CentOS、Ubuntu）系统管理。',
        '了解存储（SAN/NAS）、备份（Veeam、Commvault）及高可用架构。',
        '具备一定的网络基础，熟悉 TCP/IP 协议、负载均衡、安全防护等技术。',
        '具备较强的故障分析、排查能力，能快速响应并解决问题。',
        '具备良好的沟通能力、团队协作精神，责任心强，能适应高压环境。',
        '持有 Citrix CCA-V、VMware VCP、MCSE、RHCE 等相关认证者优先。'
      ],
      responsibilities: [
        '负责公司 IT 基础架构的规划、部署及优化，确保系统的稳定性和高可用性。',
        '安装、配置、维护和优化 Citrix 云桌面（XenDesktop/XenApp）及相关虚拟化环境。',
        '管理、监控及排错 VMware vSphere（ESXi、vCenter）虚拟化平台。',
        '部署、运维及优化 Windows/Linux 服务器，保障业务系统稳定运行。',
        '管理存储（SAN/NAS）、备份及网络设备，确保数据安全与高效访问。',
        '监控系统运行状态，及时排查并解决故障，提高运维自动化能力。',
        '制定并优化运维规范、应急预案和安全策略，确保系统合规性。',
        '研究新技术，提高系统可靠性及运维效率，优化企业 IT 基础架构。'
      ]
    }
  },
  { 
    id: '237', 
    title: '技术总监', 
    department: '工程部', 
    location: '菲律宾', 
    keywords: '技术, 管理, 总监',
    details: {
      salary: '面议',
      hours: '9小时 / 周休1',
      gender: '不限',
      age: '不限',
      nationality: '不限',
      languages: '中文',
      requirements: [
        '计算机相关专业统招本科及以上学历。',
        '10年以上 Java 开发经验，熟练掌握多线程等基础类库，熟悉分布式缓存等技术。',
        '5年以上互联网行业架构经验，熟悉微服务体系技术，有 K8s 实施经验优先。',
        '熟练掌握 Spring Boot、Spring Cloud、Java 技术栈。',
        '精通 RabbitMQ、Kafka、Zookeeper、ZeroMQ 等分布式系统及架构。',
        '熟悉分布式开源技术，包括分布式事务、分布式日志、消息队列（MQ）。',
        '精通缓存机制，熟悉高并发、高性能分布式系统的设计、应用及调优。',
        '精通数据库 MySQL 及 NoSQL 存储，如 HBase、Memcached、Redis、MongoDB。',
        '熟悉 Linux 系统，能熟练掌握相关命令与工具，熟悉 Shell。',
        '至少有 2 个从 0 到 1 的大型系统设计、开发、上线、运维经验。',
        '至少 2 年 50 人以上技术团队从 0 到 1 组建经验，3 年以上总监管理经验。'
      ],
      responsibilities: [
        '负责支付系统的前瞻性技术储备，规划技术路线，制定产品技术方案。',
        '把控系统性能、可用性、扩展性、安全性及伸缩性。',
        '主导技术难点攻关，开展核心技术研究，解决各类技术问题。',
        '参与企业大型应用系统群及海量系统的架构设计。',
        '搭建技术框架，编写核心功能架构与代码模板。',
        '规划部门技术路线，探索与落地新技术，组织内部技术分享。',
        '负责技术部门团队管理，提升团队整体技术能力。'
      ]
    }
  },
  { 
    id: '238', 
    title: '自动化/功能测试工程师', 
    department: '工程部', 
    location: '菲律宾', 
    keywords: '测试, 自动化',
    details: {
      salary: '试用期：30K - 40K\n转正后：40K - 50K + 绩效（A：底薪0.5、B：底薪0.2、C：底薪*0）',
      hours: '9小时 / 周休一',
      gender: '不限',
      age: '不限',
      nationality: '不限',
      languages: '中文',
      requirements: [
        '计算机相关专业本科及以上学历，5年以上开发或测试开发经验。',
        '熟练掌握 Python/Java/Go/C++ 至少一种编程语言。',
        '具有单元测试、自动化测试、性能测试框架设计和开发经验，熟悉主流框架或工具。',
        '熟悉常见数据库与 Docker，具备测试环境搭建与维护，以及 CI/CD 流程经验。',
        '对新测试技术保持高度热情，持续关注测试工具和技术发展，并能落地实践。',
        '具备良好的沟通能力和团队协作精神，能与产品、开发、测试团队紧密合作，共同推动产品质量提升。',
        '有测试工具开发、白盒测试、安全性测试、AI测试经验者优先。'
      ],
      responsibilities: [
        '负责体育直播、区块链支付相关产品的测试与稳定性保障，包括功能测试、单元测试、自动化测试、全链路压测、故障演练和系统可用性建设。',
        '参与需求评审，制定测试计划与测试策略，设计测试方案和架构，提高测试覆盖率与效率。',
        '参与单元测试、自动化测试、性能测试框架的设计与开发，能独立编写测试脚本，确保测试可靠性和可维护性。',
        '分析评估现有测试工具和流程，持续优化测试方法和流程，提出改进建议并实施，保障软件可测试性与质量。',
        '指导与培训测试团队，分享最佳实践与专业知识。'
      ]
    }
  },
  { 
    id: '239', 
    title: '高级产品经理', 
    department: '产品部', 
    location: '菲律宾', 
    keywords: '产品, 经理',
    details: {
      salary: '40K + 绩效',
      hours: '9小时 / 周休一',
      gender: '不限',
      age: '不限',
      nationality: '中国籍',
      languages: '中文',
      requirements: [
        '5年以上互联网产品经验，3年以上高级产品经理或同岗位经验，有直播行业经验者优先。',
        '本科及以上学历，计算机、市场营销、电子商务、管理等相关专业优先。',
        '具备成功的产品规划、设计与迭代经验，能够独立负责从概念到上线的全过程。',
        '具备优秀的跨团队沟通与协调能力，能高效推动项目进展。',
        '具备强烈的责任心与主人翁意识，敏锐的市场洞察力及较强的决策能力。'
      ],
      responsibilities: [
        '产品战略策划与管理：主导产品全生命周期管理，制定并优化产品路线图，提出前瞻性的设计与技术应用。',
        '需求分析：深入研究客户需求、市场趋势及竞品，整合并提炼复杂需求。',
        '跨团队协作：负责产品发布的各项准备，协调研发、运营、市场等部门，确保按时高质量交付。',
        '数据驱动优化：基于业务数据进行深度分析，持续优化功能与用户体验，指导产品决策。',
        '团队领导：发挥核心成员作用，带领团队高效协作，提升整体战斗力。',
        '竞品分析：深入研究竞争对手与行业动态，制定应对策略，推动产品创新。'
      ]
    }
  },
  { 
    id: '240', 
    title: '技术支持', 
    department: '工程部', 
    location: '菲律宾', 
    keywords: '技术, 支持',
    details: {
      salary: '15K-20K + 绩效（A：50%，B：20%，C：0%）',
      hours: '9小时 / 周休1',
      gender: '不限',
      age: '不限',
      nationality: '不限',
      languages: '中文听说读写',
      requirements: [
        '大专及以上学历，至少1年以上互联网或技术支持工作经验；',
        '具备一定的问题分析与解决能力，能排查服务端日志及进行简单的数据库查询；',
        '具备较强的团队合作意识，积极主动，善于沟通，能服从上级领导安排。'
      ],
      responsibilities: [
        '协助研发解决线上问题，确保出现问题时能够及时响应；',
        '能理解线上告警群信息，出现报错或延时能迅速找到对应责任人解决；',
        '负责线上问题的记录、整理并形成文档，同时做好追踪。'
      ]
    }
  },
  { 
    id: '241', 
    title: '运维总监', 
    department: '工程部', 
    location: '菲律宾', 
    keywords: '运维, 管理, 总监',
    details: {
      salary: '面议',
      hours: '9小时 / 周休1',
      gender: '不限',
      age: '不限',
      nationality: '中国籍',
      languages: '中文 / 英文',
      requirements: [
        '本科学历，10年以上运维经验，3年以上运维团队管理经验；',
        '有中型或大型互联网公司工作背景，技术功底扎实；',
        '熟悉虚拟化、机房建设、网络专线相关知识；',
        '精通容器化和K8s，熟悉Java体系大型微服务系统，对PAAS/SAAS/办公安全有实际经验；',
        '熟悉海外云（AWS/GCP）全套业务，大陆云（阿里云/华为云）的云存储、CDN使用经验丰富；精通各类CDN、高防厂商差异和特点；',
        '具备优秀的沟通与方案编写能力，自驱力强，要求高标准；',
        '有加密货币、银行、金融行业背景者优先。'
      ],
      responsibilities: [
        '明确运维团队职能边界和岗位职责，制定岗位要求、考核标准和工作流程，提升团队能力与质量；',
        '负责基础架构变更、项目推进与升级迭代；',
        '确保7×24小时服务的稳定性、安全性和可用性，及时响应与处理问题；',
        '组织培训，提升团队技能与凝聚力。'
      ]
    }
  },
  { 
    id: '242', 
    title: '高级业务运维工程师', 
    department: '工程部', 
    location: '菲律宾', 
    keywords: '运维, 业务',
    details: {
      salary: '30K-45K',
      hours: '9小时 / 周休1',
      gender: '男',
      age: '不限',
      nationality: '中国籍',
      languages: '中文听说读写',
      requirements: [
        '3年以上 Kubernetes 集群管理经验，或 5年以上运维经验；',
        '精通 Linux 系统管理与故障排除，熟练掌握 Python / Shell 等至少一种编程语言；',
        '能够编写自动化脚本与工具，提升日常运维与监控效率；',
        '深入理解 Kubernetes 架构与原理，熟悉集群部署、CI/CD、镜像、网络、存储、监控与管理；',
        '熟练使用 Ansible，具备自动化运维经验，掌握 CI/CD 流水线与持续集成工具；',
        '具备大型分布式系统的部署与维护经验，能够从 0 到 1 完成搭建；',
        '有大规模线上生产集群维护经验，能快速处理线上问题；',
        '具备良好的沟通协调能力及大团队合作经验。'
      ],
      responsibilities: [
        '负责 CentOS 等主流 Linux 系统的运维管理，包括故障排查与系统优化；',
        '负责 KVM / Docker / Kubernetes 的运维支持，执行性能调优、监控与故障诊断；',
        '制定并执行系统监控方案，及时发现并解决潜在问题，提升系统性能；',
        '设计、部署与维护大规模分布式系统基础架构，确保高可用与高稳定性；',
        '自动化日常运维，编写脚本与工具简化重复任务，提高整体效率；',
        '参与制定容灾与故障恢复策略，保障系统容错能力；',
        '主动发现并优化生产环境问题与隐患；',
        '推行运维规范与流程，撰写文档并提供技术指导，协助团队成员成长。'
      ]
    }
  },
  { 
    id: '243', 
    title: '高级DBA运维工程师', 
    department: '工程部', 
    location: '菲律宾', 
    keywords: 'dba, 运维',
    details: {
      salary: '35K-45K',
      hours: '9小时 / 周休1',
      gender: '男',
      age: '不限',
      nationality: '中国籍',
      languages: '中文听说读写',
      requirements: [
        '熟悉 Linux 系统操作，掌握常见命令与工具；',
        '具备磁盘管理与性能调优能力，熟悉 IO 基线测试工具；',
        '精通 MySQL 5.7 / 8 网络协议，能熟练使用抓包工具进行解包分析；',
        '熟悉操作系统性能监测工具，具备性能调优与故障排查经验；',
        '能维护 MySQL MGR（多主复制），有提交过相关 Bug 经历者优先；',
        '熟悉 TiDB 或 OceanBase（OB），有提交官方 Bug 经验者优先；',
        '能独立使用、测试并推广 TiDB/OB 生态工具（自动部署、安全、SQL 审核、监控、告警、备份恢复、流量复制等）；',
        '具备良好的生产环境操作习惯，能清晰阐述变更与发布的关键要点与挑战；',
        '具备持续学习习惯，能展示学习笔记与成长路径；',
        '精通 Python 与 Shell 脚本，能独立完成脚本开发与自动化任务。'
      ],
      responsibilities: [
        '数据库设计与维护：进行结构设计、索引优化、存储过程等，确保数据库性能与可扩展性；',
        '数据备份与恢复：定期执行备份，制定灾备方案，保障数据安全；',
        '性能监控与优化：分析慢查询与瓶颈，进行调优（索引、查询优化、配置优化）；',
        '安全管理：配置权限、数据加密、审计日志，确保数据库安全；',
        '故障排除与支持：快速处理故障与错误，保障数据库高可用；',
        '升级与补丁管理：管理数据库升级与补丁，保证系统稳定与安全；',
        '容量规划与扩展：根据增长趋势进行扩容与规划，确保可扩展性；',
        '自动化与脚本编写：开发自动化脚本（备份、清理日志等），提升运维效率；',
        '高可用与复制：配置主从复制与集群，确保数据同步与高可用性；',
        '团队协作：与开发沟通设计需求，与运维协作保障系统稳定。'
      ]
    }
  },
  { 
    id: '244', 
    title: '中级DBA运维工程师', 
    department: '工程部', 
    location: '菲律宾', 
    keywords: 'dba, 运维',
    details: {
      salary: '20K-35K',
      hours: '9小时 / 周休1',
      gender: '男',
      nationality: '中国籍',
      languages: '中文听说读写',
      requirements: [
        '熟悉主流数据库（MySQL、Redis、ES、Kafka）；',
        '具备较强的 Shell、Python 脚本编程能力；',
        '能够监控数据库指标并进行调优与告警；',
        '能协助高级DBA部署生产监控及脚本；',
        '具备一定数据库运维经验，能独立处理日常问题。'
      ],
      responsibilities: [
        '数据库设计与维护：负责数据库结构设计、索引优化、视图、存储过程等，保障性能与可扩展性；',
        '数据备份与恢复：执行定期备份，制定灾备方案，保障数据安全与完整性；',
        '性能监控与优化：监控性能指标，分析慢查询与瓶颈，执行优化措施；',
        '安全管理：用户权限配置、加密与审计日志管理，确保数据库安全；',
        '故障排除与支持：处理数据库故障与错误，提供运维支持，保证高可用；',
        '升级与补丁管理：负责数据库升级与安全补丁，确保系统稳定与安全；',
        '容量规划与扩展：根据数据增长趋势进行扩容规划，确保可扩展性；',
        '自动化与脚本开发：编写并维护自动化脚本（备份、清理、监控等），提升运维效率；',
        '高可用与复制：配置主从复制与集群，确保系统高可用与数据同步；',
        '团队协作：与开发、运维团队配合，保障系统稳定运行。'
      ]
    }
  },
  { 
    id: '245', 
    title: '高级技术运维工程师', 
    department: '工程部', 
    location: '菲律宾', 
    keywords: '运维, 技术',
    details: {
      salary: '30K-45K',
      hours: '9小时 / 周休1',
      gender: '男',
      nationality: '中国籍',
      languages: '中文听说读写',
      requirements: [
        '3年以上 Kubernetes 集群管理经验，或5年以上运维经验；',
        '精通 Linux 系统管理与故障排除，熟练掌握 Python、Shell 等至少一种编程语言；',
        '能独立编写自动化脚本和工具，提高监控与运维效率；',
        '深入理解 Kubernetes 架构与原理，熟悉 CI/CD、镜像、网络、存储、监控等部署与管理；',
        '具备自动化运维经验，熟练使用 Ansible，熟悉 CI/CD 流水线与持续集成工具；',
        '具备大型分布式系统从 0 到 1 的部署与维护经验；',
        '有大规模线上生产集群维护经验，能快速处理线上问题；',
        '具备良好的沟通协调能力和大团队协作经验。'
      ],
      responsibilities: [
        '负责 CentOS 等主流 Linux 系统的运维管理，包括问题排错与性能优化；',
        '负责 KVM/Docker/Kubernetes 的运维支持，进行性能调优、监控和故障诊断；',
        '制定并执行系统监控方案，及时发现和解决潜在问题，提高系统性能；',
        '设计、部署和维护大规模分布式系统的基础架构，保障高可用性与稳定性；',
        '编写自动化脚本与工具，简化重复任务，提升运维效率；',
        '参与制定容灾与故障恢复策略，提升系统容错能力；',
        '主动发现并优化生产环境中的问题与隐患；',
        '编写与维护技术文档，推动团队运维流程规范化；',
        '提供技术指导与培训，协助初中级运维工程师成长。'
      ]
    }
  },
  { 
    id: '246', 
    title: '信息安全工程师', 
    department: '工程部', 
    location: '菲律宾',
    keywords: '信息安全, 网络安全',
    details: {
      salary: '试用期：10K-15K\n转正后：13K-20K + 绩效（A:1.0 / B:0.9 / C:1.0）',
      hours: '9小时 / 周休1',
      gender: '不限',
      nationality: '外籍',
      languages: '中文听说读写',
      requirements: [
        '具备基础网络支持能力；',
        '熟悉终端、云桌面及服务器平台的安全管理；',
        '具备安全告警处理与分析能力；',
        '有漏洞修复和弱口令管理经验优先。'
      ],
      responsibilities: [
        '安全巡检',
        '定期检查办公终端、云桌面的配置合规性；',
        '检查工作文档的安全设置。',
        '安全告警处理',
        '实时监控安骑士、云桌面及服务器平台的安全告警；',
        '分析告警事件并进行闭环处理，做好记录与归档。',
        '服务器上线/下线安全审批',
        '审核服务器安全配置是否合规，包括安骑士安装、口令强度、漏洞扫描等。',
        '漏洞与弱口令修复跟进',
        '定期提取漏洞与弱口令清单，并推动修复工作。'
      ]
    }
  },
  { _id: '247', title: '项目经理', department: '工程部', location: '菲律宾', keywords: '项目, 管理, pmp', id: '247' }
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



