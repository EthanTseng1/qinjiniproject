$(function(){
    /*轮播图片的加载*/
    function loadLunBoPic(){
        $.ajx({
            type:"post",
            url:,
            data:{num:5},
            success:function(res){
                /*操作后台返回的数据*/
            },
            error:function(res){
                /*加载失败*/
                console.log(res);
            }
        })
    }
});