//Demo
layui.use('form', function(){
    var form = layui.form;
    var router = layui.router();
    alert(router);

    //监听提交
    form.on('submit(formDemo)', function(data){
        $.ajax({
            type : "POST",
            url  : "http://localhost:8081/login",
            dataType: "json",
            data : {
                username:data.field.title,
                password:data.field.password
            },
            success : function(data){
                if(data.success==true){
                    //登入成功的提示与跳转
                    layer.msg('登入成功', {
                        offset: '15px'
                        ,icon: 1
                        ,time: 1000
                    }, function(){
                        location.hash = search.redirect ? decodeURIComponent(search.redirect) : '/';
                    });
                }
            },failure : function(data){
                debugger;
            }
        })
        return false;
    });
});
