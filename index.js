// vm或freemarker模板解析
var loaderUtils = require('loader-utils')
const path = require('path');
// 模板解析器
const vmParser = require('./vmParser');
const ftlParser = require('./ftlParser');

module.exports = function(source){
    // 可配置解析是否能被缓存
    this.cacheable && this.cacheable()
    // 获取配置
    const options = loaderUtils.getLoaderConfig(this);
    var filename =path.parse(this.resourcePath).name,
        // 获取mock数据
        mock = options.mock || {},
        data = options.needCommon?Object.assign({},mock.common,mock[filename]||{}):Object.assign({},mock[filename]||{}),
        // 根据后缀调用对应模板解析
        ext = path.parse(this.resourcePath).ext;

    // 调试模式 解析并渲染模板
    if(!options.build){
        switch(ext){
            case '.vm':
                source = vmParser(source,data,options);
                break;
            case '.ftl':
                source = ftlParser(this.resourcePath,data,options);
                break;
            default:break;
        }
    }
    
    source = JSON.stringify(source);
   
    // 返回必须是webpack解析器可识别的jsmodule
    return "module.exports = " + source;
};
