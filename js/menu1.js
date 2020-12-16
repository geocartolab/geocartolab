var testMenu=[
    {
        "name": "▶&nbsp;&nbsp;概况",
		 "submenu": [  
		 
		 {
                "name": "卫星影像",
                "url": "main.html"
            },
			
		 {
                "name": "区域概况",
                "url": "2-3.html"
            },
		]			
       
    },
   
         {      
        "name": "▶&nbsp;&nbsp;行政区划",
        "submenu": [           
			
            {
                "name": "西藏自治区",
                "url": "6-7.html"
             },
			 
			 {
                "name": "拉萨市、山南地区",
                "url": "8-9.html"
             },
			
			 {
                "name": "阿里地区、那曲地区",
                "url": "10-11.html"
             },
			 
			 {
                "name": "日喀则地区",
                "url": "12-13.html"
             },
			 {
                "name": "昌都地区、林芝地区",
                "url": "14-15.html"
             },
			
			 {
                "name": "“一江两河”中部流域",
                "url": "16-17.html"
            },
			
        ]
    },
	
	
	 {      
        "name": "▶&nbsp;&nbsp;综合自然状况",
        "submenu": [           
			
			{
                "name": "地势",
                "url": "4-5a.html"
            },
			{
                "name": "地形",
				"url": "20-21.html"
            },
            {
                "name": "地质",
               "url": "22-23.html"
                          },
            {
                "name": "地貌",
              "url": "24-25.html"
             },
			 {
                "name": "冰川、冻土",
              "url": "26-27.html"
              },            	 
			 {
                "name": "气候",
               "url": "28-29.html"
              },
			 {
                "name": "水系",
                "url": "34-35.html"
				 },
			 {
                "name": "土壤",
               "url": "36-37.html"
				},
			 {
                "name": "土地利用",
            "url": "38-39.html"
								},
			
			 {
                "name": "植被",
              	"url": "40-41.html"
			 },
			 {
                "name": "草地",
               "url": "42-43.html"
				 },
			 {
                "name": "森林",
              "url": "44-45.html"
				},
			 {
                "name": "水土流失与草地退化",
             "url": "46-47a.html"
			},
			
			 {
                "name": "生态环境质量",
                "url": "48-49.html"
			},
       
		]
    },
	
	      {      
        "name": "▶&nbsp;&nbsp;社会经济状况",
        "submenu": [           
			
			{
                "name": "人口",
               "url": "50-51.html"
             },
            {
                "name": "综合经济",
             "url": "52-53.html"
             },
            {
                "name": "工业",
              "url": "54-55a.html"
             },
			 {
                "name": "交通网络现状",
             "url": "54-55b.html"
              },
			
			 {
                "name": "农牧业",
               "url": "56-57b.html"
               },
			 
			
        ]
    }
	
];
	$(function(){
		new AccordionMenu({menuArrs:testMenu});
	});