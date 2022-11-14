/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxc55e81515c509910',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'cdb48465a61484538e0da52e0bd34620',

  PROVINCE: '北京',
  CITY: '昌平',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oiu645mw8DqbnEfx5uH--431hl50',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'VP6NaJjJ7aJvbnJpnCwB7LukOwWz4jkX-H8r2zTzpfA ',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1999', date: '11-17',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '韩', year: '2000', date: '05-09',
        },
        
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2017-09-18' },
        // 结婚纪念日
        
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'oiu645h7Ztg0H0RCc4d2AyfUfkns',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oiu645h7Ztg0H0RCc4d2AyfUfkns',
    }
  ],

}

module.exports = USER_CONFIG

