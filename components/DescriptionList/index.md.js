webpackJsonp([21],{

/***/ 1695:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "section",
    [
      "p",
      "描述列表"
    ],
    [
      "h2",
      "何时使用"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "成组展示多个只读字段，常见于详情页的信息展示。"
        ]
      ]
    ],
    [
      "p",
      "引用方式："
    ],
    [
      "pre",
      {
        "lang": "javascript",
        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> DescriptionList <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'mhc-antd-admin'</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "import { DescriptionList } from 'mhc-antd-admin';"
      ]
    ]
  ],
  "meta": {
    "category": "Components",
    "type": "Data Display",
    "subtitle": "描述列表",
    "title": "DescriptionList",
    "cols": 1,
    "filename": "components/DescriptionList/index.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#何时使用",
          "title": "何时使用"
        },
        "何时使用"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#API",
          "title": "API"
        },
        "API"
      ]
    ]
  ],
  "api": [
    "section",
    [
      "h2",
      "API"
    ],
    [
      "h3",
      "DescriptionList"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "参数"
          ],
          [
            "th",
            "说明"
          ],
          [
            "th",
            "类型"
          ],
          [
            "th",
            "默认值"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "layout"
          ],
          [
            "td",
            "布局方式"
          ],
          [
            "td",
            "Enum{'horizontal', 'vertical'}"
          ],
          [
            "td",
            "'horizontal'"
          ]
        ],
        [
          "tr",
          [
            "td",
            "col"
          ],
          [
            "td",
            "指定信息最多分几列展示，最终一行几列由 col 配置结合",
            [
              "a",
              {
                "title": null,
                "href": "/components/DescriptionList#响应式规则"
              },
              "响应式规则"
            ],
            "决定"
          ],
          [
            "td",
            "number(0 < col <= 4)"
          ],
          [
            "td",
            "3"
          ]
        ],
        [
          "tr",
          [
            "td",
            "title"
          ],
          [
            "td",
            "列表标题"
          ],
          [
            "td",
            "ReactNode"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "gutter"
          ],
          [
            "td",
            "列表项间距，单位为 ",
            [
              "code",
              "px"
            ]
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            "32"
          ]
        ],
        [
          "tr",
          [
            "td",
            "size"
          ],
          [
            "td",
            "列表型号"
          ],
          [
            "td",
            "Enum{'large', 'small'}"
          ],
          [
            "td",
            "-"
          ]
        ]
      ]
    ],
    [
      "h4",
      "响应式规则"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "窗口宽度"
          ],
          [
            "th",
            "展示列数"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            [
              "code",
              "≥768px"
            ]
          ],
          [
            "td",
            [
              "code",
              "col"
            ]
          ]
        ],
        [
          "tr",
          [
            "td",
            [
              "code",
              "≥576px"
            ]
          ],
          [
            "td",
            [
              "code",
              "col < 2 ? col : 2"
            ]
          ]
        ],
        [
          "tr",
          [
            "td",
            [
              "code",
              "<576px"
            ]
          ],
          [
            "td",
            [
              "code",
              "1"
            ]
          ]
        ]
      ]
    ],
    [
      "h3",
      "DescriptionList.Description"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "参数"
          ],
          [
            "th",
            "说明"
          ],
          [
            "th",
            "类型"
          ],
          [
            "th",
            "默认值"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "term"
          ],
          [
            "td",
            "列表项标题"
          ],
          [
            "td",
            "ReactNode"
          ],
          [
            "td",
            "-"
          ]
        ]
      ]
    ]
  ]
};

/***/ })

});
//# sourceMappingURL=index.md.js.map