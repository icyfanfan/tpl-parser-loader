// velocity模板解析器 后缀.vm
// 依赖 velocity
const Engine = require('velocity').Engine

module.exports = function(source, mock, options){
    var _options = options||{},
    // 其他配置项merge
    config = Object.assign({template: source},_options.other);

    // root单独指定
    _options.root&&(config.root = _options.root)
    // 使用velocity解析
    var engine = new Engine(config);
    // 返回渲染结果
    return engine.render(mock)
}
