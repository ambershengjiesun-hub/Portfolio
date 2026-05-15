// ============================
// 全局内容 & Mock 数据
// ============================

// --- 个人信息 ---
export const personal = {
  name: '孙胜洁',
  nameEn: 'Sun Shengjie',
  tags: ['高级用户研究专家', '6年+汽车智能座舱经验', '埃森哲资深顾问'],
  headline: '在复杂的汽车产品和真实的用户需求之间找到结合点。',
  phone: '15022658276',
  email: 'sunshengjie_ambre@163.com',
  website: 'sunshengjie.com',
  disclaimer: '本网站展示的项目经历均为本人真实工作成果，关键数据已做脱敏处理。',
}

// --- 访问密码 ---
// 部署后在 URL 后加 ?pw=你想设的密码 即可访问
// 例如：https://xxx.vercel.app/?pw=2024portfolio
// 面试官点击简历中的完整链接即可免密进入
export const sitePassword = 'haveaniceday'

// --- 导航 ---
export const navLinks = [
  { label: '关于我', href: '#about' },
  { label: '项目经历', href: '#projects' },
  { label: '专业能力', href: '#skills' },
  { label: '求职方向', href: '#career' },
]

// --- 关于我 ---
export const aboutText = {
  intro: [
    '我叫孙胜洁，一名专注于汽车智能座舱领域的用户研究专家。',
    '6年多来一直在做一件事——在复杂的汽车产品和真实的用户需求之间找到结合点。目前在埃森哲担任资深咨询顾问，长期驻场在德系头部车企客户的研发或质量部门，直接嵌入客户团队工作。',
    '我的核心能力跨越三个方向：用户研究（定量问卷、焦点小组、深度访谈、可用性测试）、数据分析（SQL数据提取、Power BI可视化、大模型文本挖掘）、以及工程理解（航空工程硕士背景，做过仿真测试系统集成，能和研发团队有效对话）。',
    '英语和法语都能作为工作语言。持有PMP项目管理认证。精通C-SAE等智能座舱行业评测标准。',
  ],
}

// --- 教育背景 ---
export const education = [
  {
    school: '中国民航大学',
    degree: '航空工程 · 硕士',
    period: '2015 – 2018',
    highlights: [
      '获法国CTI认证工程师学衔（历经7年严苛淘汰制，成绩前30%）',
      '国家奖学金',
      '以第一学生作者身份发表3篇高水平论文（含SCI二区、EI、中文核心）',
    ],
  },
  {
    school: '中国民航大学',
    degree: '飞行器动力工程 · 本科',
    period: '2011 – 2015',
    highlights: [],
  },
]

// --- 工作经历 ---
export const workExperience = [
  {
    company: '埃森哲（中国）有限公司北京分公司',
    role: '资深咨询顾问 / 用户研究专家',
    period: '2020.02 – 至今',
    description:
      '驻场服务大众、宝马、奥迪等德系车企客户，负责智能座舱领域的用户研究、数据诊断、评测体系搭建和产品策略项目。',
  },
  {
    company: '北京睿拓时创科技有限公司',
    role: '应用工程师（科研与方案设计）',
    period: '2018.07 – 2020.02',
    description: '',
  },
]

// --- 核心项目 ---
export const projects = [
  {
    id: 'vw-icsd',
    title: '大众ICSD智能用户满意度数据平台重建',
    tags: ['数据诊断', '大模型升级', 'NLP'],
    background:
      '大众花了几百万开发舆情监测系统，但AI翻译用户抱怨时准确率仅60%，业务方不敢用。',
    problem:
      'AI把"刹车太硬"错误标注为"AEB功能故障"——前者是制动脚感，后者是ADAS功能。数据被分错部门，谁都用不了。',
    role: '我是项目驻场顾问，独立负责数据诊断和系统重建。',
    actions: [
      '写SQL抽检几百条数据，验证AI翻译准确性',
      '发现并定位"刹车硬→AEB故障"等典型错误模式',
      '推动大模型从ChatGLM-6B升级到DeepSeek-V3 670B',
      '引入SAE行业四级标签体系，重新映射所有功能类数据',
    ],
    results: [
      '准确率 60% → 90%+',
      '季度报告被CTO主动要求分享，在最高技术例会上向各产品线SM负责人汇报',
      'Q4报告引入四象限分析矩阵，支撑PPE/PPC新平台车型上市策略',
    ],
    reflection:
      '数据驱动决策最重要的不是算法多先进，而是数据本身是否可信。之后做任何项目，我都会先验证数据源再做分析。',
    // 仪表盘关键数据
    metricFrom: 60,
    metricTo: 90,
    metricLabel: 'AI翻译准确率',
    metricUnit: '%',
    chartData: null,
  },
  {
    id: 'vw-pq',
    title: '大众智能座舱感知质量评测体系搭建',
    tags: ['评测体系', '语音交互', '竞品对标'],
    background:
      '客户只有一张Excel指标清单，没有测试方法、评分标准或记录模板。研发在安静环境自测语音100%准确，但真实用户说"车机是智障"。',
    problem:
      '两个矛盾——不知道怎么测（无落地方法）；研发不认为有问题（自测数据完美）。',
    role: '独立负责语音交互、触控交互、AI三个核心模块。感知能力、互联能力等模块由两位大众同事配合完成。',
    actions: [
      '研读C-SAE、C-ICAP等行业标准，将指标拆解为评测体系→测试用例→记录模板→计算方法四层结构',
      '主导标准化测试设备选型和采购',
      '设计7个真实驾驶场景（不同车速、噪音、车窗空调状态），配合100+条语料（含方言、英语、多轮对话）',
      '在完全一致工况下对比小米SU7、小鹏G9等竞品',
      '全程录像+研发现场观摩取trace+测试后会议澄清',
    ],
    results: [
      '发现语音算法问题，推动某车型唤醒率 85% → 95%',
      '评测体系成为大众上市前必检标准',
      '竞品数据帮销售和市场部门理解新车竞争力',
    ],
    reflection:
      '让研发认可测试结论，最好的方法是邀请他们全程参与。亲眼看到问题发生的瞬间，亲手取到trace，他们自然会得出结论。',
    metricFrom: 85,
    metricTo: 95,
    metricLabel: '某车型唤醒率',
    metricUnit: '%',
    statCards: {
      title: '语音唤醒率提升',
      items: [
        { value: '85%', label: '改进前', sub: '研发自测100%', sentiment: 'negative' },
        { value: '95%', label: '改进后', sub: '↑ +10%', sentiment: 'positive' },
      ],
    },
  },
  {
    id: 'vw-ipd',
    title: '大众IPD/FAW场景化体验审查方案',
    tags: ['方法创新', '体验指标', '流程设计'],
    background:
      '200+项工程指标涌入，团队只有5人/1周。同事私下吐槽传统测试脱离用户场景。',
    problem:
      '无线充电的工程指标"手机放上能充电"就达标，但用户感受是"充10分钟涨1%还烫手"。指标达标≠体验达标。',
    role: '独立提出方法论，独立设计方案。',
    actions: [
      '将IPD和FAW两套200+项指标逐项映射，建立飞书多维表格知识库',
      '独创"双通道测试法"：主通道用三个行为问题（犹豫？想重复？想放弃？）快速定位痛点；辅通道仅对评分≤2分的步骤回溯工程指标',
    ],
    results: [
      '方案向客户汇报后被评价"开拓了新的思路"',
      '决定在下一个IPD开发周期中试运行',
    ],
    reflection:
      '在大组织里，重新定义问题有时比解决问题更有价值。当时没有人提出替代方案，我只是第一个说出来的人。',
    metricFrom: null,
    metricTo: null,
    metricLabel: null,
    metricUnit: null,
    chartData: null,
    // 特殊展示：双通道测试法
    methodDiagram: {
      title: '双通道测试法',
      mainChannel: {
        label: '主通道：行为观察',
        questions: ['犹豫？', '想重复？', '想放弃？'],
        action: '快速定位痛点步骤',
      },
      subChannel: {
        label: '辅通道：指标回溯',
        trigger: '仅对评分 ≤2 分的步骤',
        action: '回溯对应工程指标',
      },
    },
  },
  {
    id: 'bmw-cd',
    title: '宝马互联驾驶功能用户体验提升',
    tags: ['数据整合', '用户画像', '多源分析'],
    background:
      '宝马互联驾驶团队需要评估语音、音乐、数字钥匙三大功能的体验问题，支撑下一代产品规划。但没有新增调研预算。',
    problem:
      '没预算做新调研，但企业内散落着大量已有数据——车机埋点、客服记录、经销商反馈、APP问卷，只是没人整合。',
    role: '独立负责数据整合和分析。',
    actions: [
      '整合CCA车机埋点（ID7 DAU 26万+、ID8 DAU 2.7万）+ 463通CIC客服访谈 + 两轮经销商实地走访 + 590份APP问卷',
      '发现方言区识别率显著偏低（广东、四川是高保有量低识别率典型省份）',
      '发现互联音乐流失主因是CarPlay替代效应',
      '发现数字钥匙知晓率99%，但完全依赖者仅8%；47%的人仍习惯传统钥匙',
    ],
    results: [
      '语音改进建议纳入版本规划，触达数十万级活跃用户',
      '音乐和数字钥匙建议被采纳用于下一代产品定义',
    ],
    reflection:
      '资源有限时，先想"我已经有什么"，而不是"我需要什么"。企业里沉淀着很多有价值的数据，只是从来没人去整合解读。',
    metricFrom: null,
    metricTo: null,
    metricLabel: null,
    metricUnit: null,
    statCards: {
      title: '数字钥匙用户行为洞察',
      items: [
        { value: '99%', label: '知晓数字钥匙' },
        { value: '8%', label: '完全依赖数字钥匙' },
        { value: '47%', label: '仍习惯传统钥匙' },
      ],
    },
    dataSources: [
      { label: 'CCA车机埋点', detail: 'ID7 DAU 26万+ / ID8 DAU 2.7万' },
      { label: 'CIC客服访谈', detail: '463通' },
      { label: '经销商走访', detail: '两轮实地' },
      { label: 'APP问卷', detail: '590份' },
    ],
  },
  {
    id: 'bmw-hu',
    title: '宝马HU导航产品对标研究',
    tags: ['定量研究', '焦点小组', '竞品分析'],
    background:
      '宝马想知道自家导航和竞品的真实体验差距，不只是功能数量，更关键的是用户感受。',
    problem:
      '宝马导航有84个功能，同级别最多之一。但功能多=体验好？需要直接从用户那里听到答案。',
    role: '负责用户研究部分（定量问卷+焦点小组）。实车测试由另一团队负责。',
    actions: [
      '定量问卷回收500份有效样本',
      '焦点小组5组20位车主（每组含小鹏、蔚来、理想、特斯拉车主各1位）',
      '发现"功能多≠体验好"：宝马84个功能，惊喜时刻仅3.6%，失望时刻15.5%；小鹏79个功能，惊喜时刻27.8%，失望时刻0%',
    ],
    results: ['策略建议被采纳用于下一代导航产品定义。'],
    reflection:
      '功能数量和用户体验是两个维度，做用户研究的人有责任拆开看，避免产品团队被数量误导。',
    metricFrom: null,
    metricTo: null,
    metricLabel: null,
    metricUnit: null,
    statCards: {
      title: '惊喜时刻 vs 失望时刻',
      items: [
        { value: '3.6%', label: '宝马 · 惊喜时刻', sub: '84个功能', sentiment: 'neutral' },
        { value: '15.5%', label: '宝马 · 失望时刻', sub: '84个功能', sentiment: 'negative' },
        { value: '27.8%', label: '小鹏 · 惊喜时刻', sub: '79个功能', sentiment: 'positive' },
        { value: '0%', label: '小鹏 · 失望时刻', sub: '79个功能', sentiment: 'positive' },
      ],
    },
  },
  {
    id: 'audi-ota',
    title: '奥迪OTA推送统筹',
    tags: ['项目管理', 'OTA', '竞品追踪'],
    background:
      '奥迪中国需要向全国百万级车主推送OTA升级，涉及德国供应商和中国南北合资公司多个协作方。',
    problem: '推送节奏、用户沟通、成功率监控等环节缺乏统一协调。',
    role: '负责推送计划制定与执行追踪、竞品OTA市场调研、车主问卷设计分析。',
    actions: [
      '制定推送计划，协调德国供应商按周执行',
      '每周追踪下载率和安装成功率，动态调整推送波次',
      '持续跟踪12家竞品OTA动态，输出月度/季度分析报告',
      '设计并回收618份有效车主问卷',
    ],
    results: [
      '10个月内统筹约140万辆目标车辆推送计划',
      '安装成功率最高接近100%',
      '洞察被采纳用于后续推送策略优化',
    ],
    reflection:
      '这个项目让我理解在大组织里推动一件事落地，除了分析能力，还需要项目管理的韧性和细致。',
    metricFrom: null,
    metricTo: null,
    metricLabel: null,
    metricUnit: null,
    chartData: null,
    // 特殊展示：数字滚动
    bigNumber: { value: '140', unit: '万辆', label: '目标车辆推送计划' },
  },
]

// --- 专业能力 ---
export const skillCategories = [
  {
    title: '用户研究',
    skills: [
      '深度访谈',
      '焦点小组',
      '可用性测试',
      '问卷设计与抽样',
      'NPS建模',
      'KANO模型',
      '用户画像构建',
    ],
  },
  {
    title: '数据分析',
    skills: [
      'SQL数据提取与清洗',
      'Power BI可视化看板',
      '大模型文本挖掘与情感分析',
    ],
  },
  {
    title: '行业标准',
    skills: ['C-SAE', 'C-ICAP智能座舱感知质量评测标准'],
  },
  {
    title: '项目管理',
    skills: ['PMP认证', '跨国跨部门协调经验'],
  },
  {
    title: '语言',
    skills: [
      '英语商务流利（托业855）',
      '法语工作水平（DELF B2 / TEF B2）',
    ],
  },
]

// --- 求职方向 ---
export const careerDirections = [
  {
    title: '用户研究 / 消费者洞察',
    subtitle: '核心方向',
    description:
      '6年+汽车智能座舱用研经验，擅长将用户声音转化为可落地的产品改进建议。',
    icon: 'Users',
  },
  {
    title: '产品运营 / 产品策略',
    subtitle: '能力迁移方向',
    description:
      '有数据驱动的项目管理和跨部门协调经验，能从用户视角影响产品方向。',
    icon: 'Target',
  },
  {
    title: 'AI产品评估与落地',
    subtitle: '稀缺方向',
    description:
      '深度参与NLP/大模型在真实业务场景中的应用评估，理解AI能力边界和业务适配。',
    icon: 'Sparkles',
  },
  {
    title: '咨询与战略',
    subtitle: '经验变现方向',
    description:
      '埃森哲5年+顾问经验，善于在复杂组织中找到切入点，推动方案落地。',
    icon: 'Briefcase',
  },
]

// --- 关于网站 ---
export const aboutSite = {
  paragraphs: [
    '这个网站展示了6个核心项目的完整过程——从最初的背景和问题，到我的具体角色和行动，再到成果和复盘反思。',
    '做这件事，一方面是整理自己这些年的工作，另一方面也想让正在看这份材料的你更全面地了解我——不是通过几行简历摘要，而是通过真实的工作细节和专业判断。',
    '如果你对某个项目想了解更多，或者想聊聊汽车智能座舱的用户体验话题，我很乐意在面试中展开。',
  ],
}
