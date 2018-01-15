# tpl-parser-loader

JDK版本  >jdk1.4

freemarker版本  2.3.25-incubating

velocity 

differences(https://github.com/fool2fish/velocity/blob/master/docs/differ-from-java-edition.md)


配置

    {
      test: /\.(ftl|vm)$/,
      use: [
        {
          loader: 'tpl-loader',
          options: {
            build: true, // true|false, 设置为true时将解析模板
            needCommon: true,  // true|false, 设置为true将合并 mock.common 与 mock[模板文件名]对象作为模板数据
            mock: mock,  // mock数据，js Object格式
            root: [path.resolve(__dirname, '../src/view')], // 模板解析根路径
            other: {} // 其他配置项
          }
        }
      ],
    }
