export default {
  version: "3",
  sources: [ "test/fixtures/inner/first.js" ],
  sourcesContent: [
    "function meaningOfLife() {\n  throw new Error(42);\n}\n\nfunction boom() {\n  throw new Error('boom');\n}\n",
  ],
  names: [],
  mappings: {
    "lines": [
      {
        "mappings": [
          {
            "col": 0,
            "src": 0,
            "srcLine": 0,
            "srcCol": 0,
          },
        ],
      },
      {
        "mappings": [
          {
            "col": 0,
            "src": 0,
            "srcLine": 1,
            "srcCol": 0,
          },
        ],
      },
      {
        "mappings": [
          {
            "col": 0,
            "src": 0,
            "srcLine": 2,
            "srcCol": 0,
          },
        ],
      },
      {
        "mappings": [
          {
            "col": 0,
            "src": 0,
            "srcLine": 3,
            "srcCol": 0,
          },
        ],
      },
      {
        "mappings": [
          {
            "col": 0,
            "src": 0,
            "srcLine": 4,
            "srcCol": 0,
          },
        ],
      },
      {
        "mappings": [
          {
            "col": 0,
            "src": 0,
            "srcLine": 5,
            "srcCol": 0,
          },
        ],
      },
      {
        "mappings": [
          {
            "col": 0,
            "src": 0,
            "srcLine": 6,
            "srcCol": 0,
          },
        ],
      },
    ],
  },
  file: 'map1.js',
}
