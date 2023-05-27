import Vue from 'vue'
import Vuex from 'vuex'
// import register from './register'
// import goodshow from './goodsshow'
import {requestPhone} from '../internet/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    photoList:[
      {
        id:0,
        url:'		https://res.vmallres.com/uomcdn/CN/cms/202208/68D0D716D1475F8CF11DCDB2B40AE5A2.png.webp',
        name:'华为畅享 50 Pro',
        details:'5000mAh大电池',
        price:'￥1849',
        others:'23人评价 100%好评'
      },
      {
        id:1,
        url:'https://res.vmallres.com/uomcdn/CN/cms/202208/22C6B8513C1267F89D563344E9D25E81.jpg.webp',
        name:'MateBook X Pro 微绒电脑',
        details:'12代晓龙处理器',
        price:'￥12899',
        others:'1796人评价 95%好评'
      },
      {
        id:2,
        url:'	https://res.vmallres.com/uomcdn/CN/cms/202208/B379E4F6CD79CD2A490D406A46A4BA6D.png.webp',
        name:'HUAWEI FreeBuds Pro 2',
        details:'超感声原生单元元',
        price:'￥1299',
        others:'1168人评价 99%好评'
      },
      {
        id:3,
        url:'https://res.vmallres.com/uomcdn/CN/cms/202208/1BDEA639B767944478A8D2806EABEEA8.jpg.webp',
        name:'MateBook 14s 12代酷暑',
        details:'12代晓龙处理器',
        price:'￥6999',
        others:'153人评价 99%好评'
      }
    ],
    phonephotoList:[
      {
        id:0,
        url:'	https://res.vmallres.com/uomcdn/CN/cms/202208/68D0D716D1475F8CF11DCDB2B40AE5A2.png.webp',
        name:'华为畅享 50 Pro',
        details:'5000mAh大电池',
        price:'￥1849',
        others:'23人评价 100%好评'
      },
      {
        id:1,
        url:'	https://res.vmallres.com/uomcdn/CN/cms/202208/68D0D716D1475F8CF11DCDB2B40AE5A2.png.webp',
        name:'nava 10',
        details:'限时直降30元 | 赠经典耳机',
        price:'￥2969',
        others:'2075人评价 95%好评'
      },
      {
        id:2,
        url:'	https://res.vmallres.com/uomcdn/CN/cms/202208/68D0D716D1475F8CF11DCDB2B40AE5A2.png.webp',
        name:'nova 10 Pro',
        details:'限时享12期免息 | 直降 30 元',
        price:'￥3669',
        others:'970人评价 99%好评'
      },
      {
        id:3,
        url:'	https://res.vmallres.com/uomcdn/CN/cms/202208/68D0D716D1475F8CF11DCDB2B40AE5A2.png.webp',
        name:'HUAWEI Mate Xs 2',
        details:'新一代折叠旗舰',
        price:'￥9999',
        others:'2071人评价 99%好评'
      }
    ],
    computerphotoList:[
      {
        id:0,
        url:'https://res.vmallres.com/uomcdn/CN/cms/202208/22C6B8513C1267F89D563344E9D25E81.jpg.webp',
        name:'HUAWEI MateBook 13',
        details:'5000mAh大电池',
        price:'￥1849',
        others:'23人评价 100%好评'
      },
      {
        id:1,
        url:'https://res.vmallres.com/uomcdn/CN/cms/202208/22C6B8513C1267F89D563344E9D25E81.jpg.webp',
        name:'MateBook 14s',
        details:'12代晓龙处理器',
        price:'￥6999',
        others:'176人评价 95%好评'
      },
      {
        id:2,
        url:'https://res.vmallres.com/uomcdn/CN/cms/202208/22C6B8513C1267F89D563344E9D25E81.jpg.webp',
        name:'HUAWEI MateBook 12',
        details:'超感声原生单元元',
        price:'￥5399',
        others:'1168人评价 99%好评'
      },
      {
        id:3,
        url:'https://res.vmallres.com/uomcdn/CN/cms/202208/22C6B8513C1267F89D563344E9D25E81.jpg.webp',
        name:'MateBook 14s 12代酷暑',
        details:'12代晓龙处理器',
        price:'￥6999',
        others:'153人评价 99%好评'
      }
    ],
    falg1:true,
    goodsdata: ['Boluo手机', 'BoLuo电脑', '平板', '路由器', '笔记本', '家电'],
    autoServeList:[
      {
        id:0,
        // name:'Boluo手机',
        url: 'https://res.vmallres.com/uomcdn/CN/cms/202207/E9455010272B6E8852F58C6B882F6DDE.jpg',
        
      },
      {
        url: '	https://res.vmallres.com/uomcdn/CN/cms/202207/C7BB2DBD8E61CAEA6AC8580487FB8377.jpg',
        id: 1,
        // name:'Boluo'
        
      },
      {
        url: '	https://res.vmallres.com/uomcdn/CN/cms/202208/74B3243DF28AB59AED5F7DA0139909C0.png',
        id: 2,
        // name:
      },
      {
        url: '	https://res.vmallres.com/uomcdn/CN/cms/202208/8E0114B0428AF35ED8ED27D12C21EF21.jpg',
        id: 3,
        // name:
      }
    ],
    phonegoodsdata:['iPhone13','HUAWEI畅享','荣耀','小米手机','魅族','菠萝手机'],
    phoneautoServeList:[
      {
        id:0,
        // name:'Boluo手机',
        url: 'https://www.apple.com.cn/v/iphone/home/bh/images/overview/hero/iphone_13_hero__c7g09yt0mjcm_large_2x.png',
        
      },
      {
        url: '	https://img.youpin.mi-img.com/ferriswheel/5f09b380_e166_48e2_8b60_d3a8ba118aea.jpeg@base@tag=imgScale&F=webp&h=1080&q=90&w=1920',
        id: 1,
        // name:'Boluo'
        
      },
      {
        url: 'https://img.youpin.mi-img.com/ferriswheel/c1be511a_f8ac_4fd8_8a64_c02414ee4fbe.jpeg@base@tag=imgScale&F=webp&h=1080&q=90&w=1920',
        id: 2,
        // name:
      },
      {
        url: '		https://www.apple.com.cn/v/iphone/home/bh/images/overview/subhero/guided_tour__c40f88on9o8y_large_2x.jpg',
        id: 3,
        // name:
      }
    ],
    cptgoodsdata: ['HUAWEI电脑','苹果电脑','小米电脑','魅族电脑','菠萝电脑','联想电脑'],
    cptautoServeList:[
      {
        id:0,
        // name:'Boluo手机',
        url: 'https://www.apple.com.cn/v/mac/home/bp/images/overview/hero/macbook_pro_13__e3r46kd69eoi_large_2x.jpg',
        
      },
      {
        url: '	https://www.apple.com.cn/v/mac/home/bp/images/overview/hero/macbook_air_m2__r1jrymq4ftea_large_2x.jpg',
        id: 1,
        // name:'Boluo'
        
      },
      {
        url: 'https://img.youpin.mi-img.com/ferriswheel/ff008507_0972_4270_ad8a_a531c816a330.jpeg@base@tag=imgScale&F=webp&h=1080&q=90&w=1920',
        id: 2,
        // name:
      },
      {
        url: '		https://img.youpin.mi-img.com/ferriswheel/d61c7290_1a4c_4c39_96ab_7aa15df1ff73.jpeg@base@tag=imgScale&F=webp&h=1080&q=90&w=1920',
        id: 3,
        // name:
      }
    ],
    ruleForm2:[
      {
        id:0,
        username:'',
        password:''
      }
    ],
    // flag:true
    detail:[
      
    ]
  },
  getters: {
  },
  mutations: {
    add(state,obj){
        state.phonephotoList.id = obj.id
    }
  },
  actions: {
   
  },
  modules: {
  }
})
