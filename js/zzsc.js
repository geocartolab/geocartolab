 var i=0,
	j=0;
 
 function AccordionMenu(options) {
	this.config = {
		containerCls        : '.wrap-menu',                // 外层容器
		menuArrs            :  '',                         //  JSON传进来的数据
		type                :  'click',                    // 默认为click 也可以mouseover
		renderCallBack      :  null,                       // 渲染html结构后回调
		clickItemCallBack   : null                         // 每点击某一项时候回调
	};
	this.cache = {
		
	};
	this.init(options);
 }

 
 AccordionMenu.prototype = {

	constructor: AccordionMenu,

	init: function(options){
		this.config = $.extend(this.config,options || {});
		var self = this,
			_config = self.config,
			_cache = self.cache;
		
		// 渲染html结构
		$(_config.containerCls).each(function(index,item){
			
			self._renderHTML(item);
	

			// 处理点击事件
			self._bindEnv(item);
			self._showmenu();
		});
	},
	_renderHTML: function(container){
		var self = this,
			_config = self.config,
			_cache = self.cache;
		//	i=0;
		var ulhtml = $('<ul></ul>');
		$(_config.menuArrs).each(function(index,item){
			var lihtml = $('<li><h2>'+item.name+'</h2></li>');
			var lihtml = $('<li><h2 id=_menu'+i+'>'+item.name+'</h2></li>');
	//				alert(item.name);
			i++;
			if(item.submenu && item.submenu.length > 0) {
				self._createSubMenu(item.submenu,lihtml);
			}
			$(ulhtml).append(lihtml);
		});
		$(container).append(ulhtml);
		
		_config.renderCallBack && $.isFunction(_config.renderCallBack) && _config.renderCallBack();
		
		// 处理层级缩进
		self._levelIndent(ulhtml);
	},
	/**
	 * 创建子菜单
	 * @param {array} 子菜单
	 * @param {lihtml} li项
	 */
	_createSubMenu: function(submenu,lihtml){
		var self = this,
			_config = self.config,
			_cache = self.cache;
		var subUl = $('<ul></ul>'),
			callee = arguments.callee,
			subLi;
		//	j=0;
		
		$(submenu).each(function(index,item){
			var url = item.url || 'javascript:void(0)';

			subLi = $('<li><a  id=_submenu'+j+' href="'+url+'">'+item.name+'</a></li>');
			if(item.submenu && item.submenu.length > 0) {

				$(subLi).children('a').prepend('<img src="images/blank.gif" alt=""/>');
                callee(item.submenu, subLi);
			}
			$(subUl).append(subLi);
			j++;
		});
		$(lihtml).append(subUl);
	},
	/**
	 * 处理层级缩进
	 */
	_levelIndent: function(ulList){
		var self = this,
			_config = self.config,
			_cache = self.cache,
			callee = arguments.callee;
	   
		var initTextIndent = 2,
			lev = 1,
			$oUl = $(ulList);
		
		while($oUl.find('ul').length > 0){
			initTextIndent = parseInt(initTextIndent,10) + 2 + 'em'; 
			$oUl.children().children('ul').addClass('lev-' + lev)
						.children('li').css('text-indent', initTextIndent);
			$oUl = $oUl.children().children('ul');
			lev++;
		}
		$(ulList).find('ul').hide();
		$(ulList).find('ul:first').hide();	
		/*$(ulList).find('ul:first').show(); */	
		
	},
	/**
	 * 绑定事件
	 */
	_bindEnv: function(container) {
		var self = this,
			_config = self.config;

		$('h2,a',container).unbind(_config.type);
		$('h2,a',container).bind(_config.type,function(e){
			if($(this).siblings('ul').length > 0) {
				$(this).siblings('ul').slideToggle('slow').end().children('img').toggleClass('unfold');
			}

			$(this).parent('li').siblings().find('ul').hide()
				   .end().find('img.unfold').removeClass('unfold');
			_config.clickItemCallBack && $.isFunction(_config.clickItemCallBack) && _config.clickItemCallBack($(this));

		});
	},
	

		_showmenu: function() {
		//	$("#_2").trigger("click");

	/*	var self = this,
			_config = self.config,
			_cache = self.cache,
			menuname = "▶&nbsp;&nbsp;行政区划";
		//	alert(menuname);
	//	var ulhtml = $('<ul></ul>');
		$(_config.menuArrs).each(function(index,item){
		//	alert(item.name);
	
	if(item.name == menuname)
		{
			alert(item);
		 alert(item.name);
		 $('#'+ item).trigger("click");
		}
		
		
		

		});	*/
		
	}
	
 };
