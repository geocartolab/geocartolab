
  function move(){
	  var gWin = document.getElementsByName("win");
	  for(var i=0;i<gWin.length;i++){
	  movewin(i);
	  }
	 }
  
	  function movewin(i) {
		        var oWin = document.getElementsByName("win")[i];
                var oH2 = oWin.getElementsByTagName("h1")[0];
                var bDrag = false;
                var disX = disY = 0;

				oH2.onmouseover = function() {
					oH2.style.cursor="move";
				}
               
                oH2.onmousedown = function(event) {
                    var event = event || window.event;
                    bDrag = true;
                    disX = event.clientX - oWin.offsetLeft;
                    disY = event.clientY - oWin.offsetTop;
                    this.setCapture && this.setCapture();
                    return false
                };
				
                oWin.onmousemove = function(event) {
                    if (!bDrag) return;
                    var event = event || window.event;
                    var iL = event.clientX - disX;
                    var iT = event.clientY - disY;
                    var maxL = document.documentElement.clientWidth - oWin.offsetWidth;
                    var maxT = document.documentElement.clientHeight - oWin.offsetHeight;
                    iL = iL < 0 ? 0 : iL;
                    iL = iL > maxL ? maxL: iL;
                    iT = iT < 0 ? 0 : iT;
                    oWin.style.marginTop = oWin.style.marginLeft = 0;
                    oWin.style.left = iL + "px";
                    oWin.style.top = iT + "px";
                    return false
                };

                oWin.onmouseup = window.onblur = oH2.onlosecapture = function() {
                    bDrag = false;
                    oH2.releaseCapture && oH2.releaseCapture();
                };
            }