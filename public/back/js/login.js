 $(function () {
     /**
      * 前端校验功能bootstrap validator
      * 
      * 登录表单校验
      * 1. 用户名不能为空
      * 2. 用户密码不能为空
      * 3. 密码的长度是6-12位
      */
     var $form = $('form');
     $form.bootstrapValidator({
         //配置校验时候的小图标
         feedbackIcons: {
             valid: 'glyphicon glyphicon-ok',
             invalid: 'glyphicon glyphicon-remove',
             validating: 'glyphicon glyphicon-refresh'
         },
         // 配置规则
         fields: {
             // 对应表单中的name属性
             username: {
                 // 对应的规则
                 validators: {
                     notEmpty: {
                         message: '用户名不能为空'
                     },
                     callback: {
                         message: '用户名不存在'
                     }
                 }
             },
             password: {
                 validators: {
                     notEmpty: {
                         message: '密码不能为空'
                     },
                     stringLength: {
                         min: 6,
                         max: 12,
                         message: '密码长度6-12位'
                     },
                     callback: {
                         message: '密码错误'
                     }
                 }
             }
         }
     });
    //  表单校验成功,注册表单校验成功的事件，阻止默认，使用ajax提交
     $form.on('success.form.bv', function (e) {
         /*禁用默认提交的事件,因为要使用ajax提交而不是默认的提交方式*/
         e.preventDefault();
         /*发送登陆的请求*/
         $.ajax({
             url: '/employee/employeeLogin',
             type: 'post',
             dataType: "json",
             data:$form.serialize(),
             success: function (data) {
                 console.log(data);
                /* 跳转到首页 */  
                 if(data.success){
                     location.href = 'index.html';
                 }
                //  如果error是1000，提示用户名错误
                if(data.erro == 1000){
                    $form.data("bootstrapValidator").updateStatus("username", "INVALID", "callback");
                }
                // error是1001，提示密码错误
                if(data.erro == 1001){
                    $form.data("bootstrapValidator").updateStatus("username", "INVALID", "callback");
                }
             }

         })
     })
    //  重置功能
    $("[type='reset']").on("click", function(){
        
        //重置表单样式
        #form.data("bootstrapValidator").resetForm();
        
      });
 })