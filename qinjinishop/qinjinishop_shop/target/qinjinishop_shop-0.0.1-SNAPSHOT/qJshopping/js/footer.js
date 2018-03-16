$(()=>{
	$.ajax({
		type:"get",
		url:"footer.html"
	}).then(data=>{
		$(".footer").html(data);
	})
	$(".footer").on("click","ul>li>a",function(e){
		e.preventDefault();
		var src="http://127.0.0.1/qJshopping/"+$(this).attr("href");
		window.location.href = src;
		$(this).addClass("on");
		console.log($(this));
	})
})