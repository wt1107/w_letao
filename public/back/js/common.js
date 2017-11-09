$(function(){

    // 关闭进度环
    NProgress.configure({ showSpinner: false });
    // 进度条设置
    $(document).ajaxStart(function () {
        NProgress.start();
      });      
      //所有的ajax只要结束，延迟500毫秒，结束进度条
      $(document).ajaxStop(function () {
        setTimeout(function () {
          NProgress.done();
        }, 500);
      
      });
})