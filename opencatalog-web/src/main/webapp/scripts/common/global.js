
//overrides


//defaults
Ext.Ajax.timeout = 120000;
Ext.tip.QuickTipManager.init();


//Core Uitl
var Core = {
	msgCt: false	,
			
	createBox: function createBox(t, s){
	       return '<div class="msg"><h3>' + t + '</h3><p>' + s + '</p></div>';
	},
	
	popmsg: function(title, format){
		if(!this.msgCt){
			this.msgCt = Ext.DomHelper.insertFirst(document.body, {id:'msg-div'}, true);
		}
		var s = Ext.String.format.apply(String, Array.prototype.slice.call(arguments, 1));
		var m = Ext.DomHelper.append(this.msgCt, this.createBox(title, s), true);
		m.hide();
		m.slideIn('t').ghost("t", { delay: 1000, remove: true});
        }
	
};