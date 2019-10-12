module.exports = {
  token: ('TOKEN' in process.env ? process.env : require('../config')).TOKEN,
  rules: {
    '632673983912738848': {
      channelId: '258314939998011393',
      isUnique: true,
      emojiRoleMap: {
        '🎉': ['542138999511187486']
      }
    },
    '632673954821177374': {
      channelId: '258314939998011393',
      isUnique: true,
      emojiRoleMap: {
        '\u0031\u20E3': ['349040254600216576'],
        '\u0032\u20E3': ['349040055525965835'],
        '\u0033\u20E3': ['349039979219124225'],
        '\u0034\u20E3': ['349039843998695425']
      }
    }
  }
};
