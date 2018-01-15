// freemark模板解析器 后缀.ftl
// 需要jdk正确安装 JAVA_HOME设置正确 并在PATH中加入
const path = require('path');
const Freemarker = require('freemarker.js');

module.exports = function(source, mock, options){
    var _options = options||{},
    root = (_options.root&&_options.root[0])||'/',
    // 其他配置项merge
    config = Object.assign({viewRoot: root},options.other),
    sourcePath = (root=='/')?source:path.relative(root,source),
     // 使用freemarker.js解析
    fm = new Freemarker(config);

    // 返回渲染结果
    return fm.renderSync(sourcePath, mock)
}
