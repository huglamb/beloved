const resumeData = {
  seo: {
    title: "李舒畅的文字城堡 - 个人简历",
    description: "李舒畅的个人简历与作品集呈现",
  },
  theme: {
    // 您可以在此配置R2存储桶中的图片URL作为头像
    // 例如: "https://pub-your-r2-domain.r2.dev/avatar.jpg"
    // 如果留空，将使用默认的SVG占位图
    avatarUrl: "https://freezeng.top/beloved/%E6%8A%B1%E6%8A%B1%E7%BE%8Alogo-V2.jpg",
  },
  nav: {
    logoLabel: "李舒畅",
    links: [
      { label: "关于我", href: "#about" },
      { label: "文字城堡", href: "#works" },
      { label: "成长轨迹", href: "#experience" },
      { label: "树洞", href: "#contact" },
    ],
  },
  hero: {
    badge: "📖 汉语言文学学生 · 儿童文学探索者",
    title: "你好呀！我是舒畅",
    description:
      "我喜欢在文字里种植星星，用温和的童话语调，为成长中的大孩子和小孩子们编织彩色的梦境岛屿。这里是我关于文学、创意与热爱的集合地。",
    button: {
      text: "给舒畅写信",
      href: "#contact",
    },
  },
  about: {
    title: "✨ 关于我的两三事",
    cards: [
      {
        title: "🔍 我是谁",
        description:
          "我是李舒畅，现就读于师范大学汉语言文学专业，专注于**儿童文学创作与绘本策划**。我认为，好故事是一座桥梁，一端连接着世界的真实，另一端通往孩子们最纯真的想象。我致力于用简单而不单调的语言，传达深邃的温暖。",
      },
      {
        title: "🎨 随身行囊",
        description:
          "文字创作不仅是构思，更是一种观察生活的手艺。在文字之外，我还通过插画、排版和戏剧，探索故事的多种可能形态。",
        tags: [
          "童话创作",
          "绘本脚本",
          "排版美学",
          "儿童心理学",
          "戏剧戏剧课",
        ],
      },
    ],
  },
  works: {
    title: "🏰 我的文字城堡",
    items: [
      {
        title: "《月亮掉进松果里》",
        description:
          "原创儿童绘本脚本，讲述了一只迷路的小松鼠与掉落人间的半块月亮共同度过温暖秋季的治愈故事。",
        meta: "绘本策划 · 2025",
        icon: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
        styleClass: "work-thumb-1",
      },
      {
        title: "《风的旅行日记》",
        description:
          "短篇童话集，发表于多所高校联合校刊，以微风的视角记录世界各地的四季风物和感人小事。",
        meta: "短篇集 · 2024",
        icon: "https://images.unsplash.com/photo-1505322022379-7c3353ee6291?auto=format&fit=crop&w=800&q=80",
        styleClass: "work-thumb-2",
      },
      {
        title: "“织梦人”阅读沙龙",
        description:
          "作为发起人，在社区组织针对 6-10 岁儿童的绘本共读营，帮助孩子们在趣味角色扮演中体验文学乐趣。",
        meta: "社会实践 · 2025",
        icon: "https://images.unsplash.com/photo-1514068574085-f6734c11b0e3?auto=format&fit=crop&w=800&q=80",
        styleClass: "work-thumb-3",
      },
      {
        title: "《星星的回音》",
        description:
          "为少儿科普杂志撰写的系列散文，将天文学知识用拟人化的童话故事展现，深受小读者喜爱。",
        meta: "科普散文 · 2024",
        icon: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&w=800&q=80",
        styleClass: "work-thumb-1",
      },
      {
        title: "“童话马车”剧社",
        description:
          "校园戏剧节最佳原创剧本奖《寻找失落的颜色》编曲与剧本统筹，带领社团完成校内巡演。",
        meta: "戏剧改编 · 2023",
        icon: "https://images.unsplash.com/photo-1507676184212-d0330a151f15?auto=format&fit=crop&w=800&q=80",
        styleClass: "work-thumb-2",
      },
    ],
  },
  experience: {
    title: "🌱 我的成长轨迹",
    timeline: [
      {
        date: "2023 - 至今",
        title: "汉语言文学专业 · 师范大学",
        description:
          "系统修读了儿童文学导论、外国文学、创意思维等课程，并连年获得专业一等奖学金。",
      },
      {
        date: "2025 (春季)",
        title: "儿童读物出版社 · 创意策划实习生",
        description:
          "参与引进版绘本的翻译校对和本土化排版优化工作，亲身体验一个好故事是如何变成实体书籍的。",
      },
      {
        date: "2024 (暑假)",
        title: "“山行”支教团 · 创意写作课导师",
        description:
          "在山区小学开设创意日记与童话工作坊，收集了上百篇孩子们天马行空的创作，并编纂成集。",
      },
    ],
  },
  contact: {
    title: "📮 写信给舒畅的树洞",
    description:
      "不管是想一起策划一本好玩的绘本，还是只想分享一个今天抬头看到的奇特云朵，都欢迎你写信告诉我！",
    links: [
      { text: "发送邮件", href: "mailto:shuhuai@example.com", type: "mail" },
      { text: "小红书: @舒畅的树洞", href: "#", type: "social" },
      { text: "微信: Forest_Shuhuai", href: "#", type: "social" },
    ],
  },
  footer: {
    text: "© 2026 李舒畅. 由温柔的文字与莫兰迪色彩搭建",
  },
};
