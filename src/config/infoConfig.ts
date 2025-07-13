export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = '鲜橙多'
export const headline = '牛逼人'
export const introduction =
  "我是上海的学生，喜欢唱，跳，rap,篮球。"
export const email = '2370984925@qq.com'
export const githubUsername = 'huxuancheng'

// about page
export const aboutMeHeadline = '不玩原神，玩codm'
export const aboutParagraphs = [
  "没啥好写的啊",
  '略略略',
  "偷懒这一块",
]

// blog
export const blogHeadLine = "使命召唤大肘子"
export const blogIntro =
  "热点大举4000+"
  "回调mg42"
  
// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Tiktok',
    icon: 'tiktok',
    href: 'https://www.douyin.com/',
  },
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com/435829538?spm_id_from=333.337.0.0',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]
