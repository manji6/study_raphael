$(function(){

	// create canvas 640 * 480 at 10,50
	var r = Raphael("holder",50,105);



	//x,y,width,height,values,opts
//	var chart = r.hbarchart(20,0,50,105,[59,61,114,2,2],{gutter: "20%",colors:["#ff0000","#ffff00","#ff3300","purple","yellow"]});
	var chart = r.hbarchart(0,0,50,105,[59,61,14,2,2],{gutter: "100%", colors: ["#CFBB8A","#CFBB8A","#CFBB8A","#CFBB8A","#CFBB8A"]});
	r.path("M10 10L90 10");

});
