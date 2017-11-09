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
     $form.on('susess.form.bv', function (e) {
         /*禁用默认提交的事件,因为要使用ajax提交而不是默认的提交方式*/
         e.preventDefault();
         /*发送登陆的请求*/
         $.ajax({
             url: '/employee/employeeLogin',
             type: 'post',
             dataType: 'json',
             success: function (data) {
             }

         })
     })
 })