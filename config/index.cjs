/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx6dc6cb74d1de3210',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'da076568435ed2ea39e633da8244a481',
  IS_SHOW_COLOR: true,
  PROVINCE: '河南',
  CITY: '洛阳',
  // 功能开关,打开：true，关闭：false
  SWITCH: {
    /** 每日天气 */
    weather: true,

    /** 节假日 */
    // 下一休息日综合提醒
    holidaytts: true,

    /** 每日N句 */
    // 金山每日一句
    CIBA: true,
    // 每日一言
    oneTalk: false,
    // 土味情话(彩虹屁)
    earthyLoveWords: false,
    // 朋友圈文案
    momentCopyrighting: false,
    // 毒鸡汤
    poisonChickenSoup: false,
    // 古诗古文
    poetry: false,

    /** 星座运势 */
    horoscope: false,

    /** 生日消息和节日消息 */
    birthdayMessage: true,

    // 学生课表
    courseSchedule: false,
  },
  USERS: [
    {
      // 想要发送的人的名字
      name: '邱天园',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ob7_d6vxQA19T0PP1NDwhQBh6H60',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '7kJZ5yGEPLdAUkg4RJJNC6iMD0MFyFcioFTH4hL0RDQ',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-12',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
       
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '节日', name: '春节', year: '2023', date: '01-22',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-08' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
    {
      name: '菲',
      id: 'ob7_d6vxQA19T0PP1NDwhQBh6H60',
      useTemplateId: '7kJZ5yGEPLdAUkg4RJJNC6iMD0MFyFcioFTH4hL0RDQ',
      province: '河南',
      city: '洛阳',
      horoscopeDate: '',
      horoscopeDateType: '',
      openUrl: 'http://qty.it-04.tk',
      festivals: [
      {
          type: '节日', name: '春节', year: '2023', date: '01-22',
        },
                 ],
      customizedDateList: [],
      courseSchedule: null
   }
    // 你可以不断按格式往下增加
    // ...
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'EG7y0vojEgZlLq0N7OknH73HV0ehkMIh1jhGNdpCgy0',

  CALLBACK_USERS: [
    {
      name: '邱天园',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ob7_d6vxQA19T0PP1NDwhQBh6H60',
    }
  ],

}

module.exports = USER_CONFIG

