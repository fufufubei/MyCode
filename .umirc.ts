import { IConfig } from 'umi-types';
import px2rem from 'postcss-plugin-px2rem';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: false,
      dynamicImport: false,
      title: 'UMI',
      dll: false,
      hd:true,
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
  extraPostCSSPlugins: [
    //https://www.npmjs.com/package/postcss-plugin-px2rem
    px2rem({
      rootValue: 75,//开启hd后需要换算：rootValue=designWidth*100/750,此处设计稿为1920，所以1920*100/750=256
      propBlackList:['border','border-top','border-left','border-right','border-bottom','border-radius'],//这些属性不需要转换
      selectorBlackList:['t_npx']//以包含t_npx的class不需要转换
    })
   
  ],
}

export default config;
