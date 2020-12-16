	

	var testMenu=[
    {
        "name": "▶&nbsp;&nbsp;地质历史时期土地沙漠化",
        "submenu": [
				            {
                                "name": "地质证据分布",
                                 "url": "2xzbh.html"
                            },	
                            {
                                "name": "地质剖面图",
                                 "url": "2xzbh1.html"
                            }								
							] 
    },
    {
        "name": "▶&nbsp;&nbsp;土地沙漠化现代过程",
        "submenu": [
				            {
                                "name": "现代风成沙来源",
									
										 "url": "100-101.html"
									
                                
                            },
							  {
                                "name": "土壤有机质含量",
                                 "url": "106-107.html"
                            },
							  {
                                "name": "冻土与沙漠化",
									"url": "106-107b.html"
										
                                 
                            },

				             {
                                 "name": "风蚀过程",
               					 "url": "102-105.html"
							},	
							           								
							] 
    },
	 {
        "name": "▶&nbsp;&nbsp;现代沙漠化成因分析",
         "submenu": [
				            {
                                "name": "成因分析及影响因素",
                                 "url": "108-109.html"
                            },
							{
                                "name": "群落演替",
                                 "url": "108-109a.html"
                            }
					] 
    },
	 {
        "name": "▶&nbsp;&nbsp;土地沙漠化趋势预测",
        "submenu": [
				            {
                                "name": "趋势预测",
                                 "url": "114-115.html"
                            }						 
							] 
	  }
	
];
	$(function(){
		new AccordionMenu({menuArrs:testMenu});
	});
