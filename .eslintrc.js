module.exports = {
  "extends": [
      "eslint-config-alloy/react"
  ],
  "globals": {
      
  },
  "rules": {
      // 禁止出现 location.href = 'javascript:void(0)';
      'no-script-url': 'off',
      "no-debugger": 'off',
       // @fixable 一个缩进必须用两个空格替代
      'indent': [
          'error',
          2,
          {
              SwitchCase: 1,
              flatTernaryExpressions: true
          }
      ],
      // @fixable jsx 的 children 缩进必须为两个空格
      'react/jsx-indent': [
          'error',
          2
      ],
      // @fixable jsx 的 props 缩进必须为两个空格
      'react/jsx-indent-props': [
          'error',
          2
      ]
  }
}