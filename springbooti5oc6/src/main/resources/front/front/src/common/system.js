export function isAuth(tableName, key) {
  let role = localStorage.getItem("UserTableName");
  let menus = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-form","buttons":["新增","查看","修改","删除"],"menu":"员工","menuJump":"列表","tableName":"yuangong"}],"menu":"员工管理"},{"child":[{"appFrontIcon":"cuIcon-goodsnew","buttons":["新增","查看","修改","删除"],"menu":"求职者","menuJump":"列表","tableName":"qiuzhizhe"}],"menu":"求职者管理"},{"child":[{"appFrontIcon":"cuIcon-album","buttons":["新增","查看","修改","删除"],"menu":"薪酬记录","menuJump":"列表","tableName":"xinchoujilu"}],"menu":"薪酬记录管理"},{"child":[{"appFrontIcon":"cuIcon-clothes","buttons":["新增","查看","修改","删除"],"menu":"培训学习","menuJump":"列表","tableName":"peixunxuexi"}],"menu":"培训学习管理"},{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["新增","查看","修改","删除"],"menu":"奖惩记录","menuJump":"列表","tableName":"jiangchengjilu"}],"menu":"奖惩记录管理"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["查看","修改","删除","审核"],"menu":"员工请假","menuJump":"列表","tableName":"yuangongqingjia"}],"menu":"员工请假管理"},{"child":[{"appFrontIcon":"cuIcon-goodsnew","buttons":["查看","修改","删除","审核"],"menu":"销假信息","menuJump":"列表","tableName":"xiaojiaxinxi"}],"menu":"销假信息管理"},{"child":[{"appFrontIcon":"cuIcon-goods","buttons":["查看","修改","删除"],"menu":"员工签到","menuJump":"列表","tableName":"yuangongqiandao"}],"menu":"员工签到管理"},{"child":[{"appFrontIcon":"cuIcon-flashlightopen","buttons":["新增","查看","修改","删除","各职位招聘人数"],"menu":"招聘信息","menuJump":"列表","tableName":"zhaopinxinxi"}],"menu":"招聘信息管理"},{"child":[{"appFrontIcon":"cuIcon-pic","buttons":["查看","修改","删除","审核","每日求职人数","面试邀请","录用信息"],"menu":"求职简历","menuJump":"列表","tableName":"qiuzhijianli"}],"menu":"求职简历管理"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["查看","修改","删除","每日面试人数"],"menu":"面试邀请","menuJump":"列表","tableName":"mianshiyaoqing"}],"menu":"面试邀请管理"},{"child":[{"appFrontIcon":"cuIcon-album","buttons":["查看","修改","删除","每月录用人数"],"menu":"录用信息","menuJump":"列表","tableName":"luyongxinxi"}],"menu":"录用信息管理"},{"child":[{"appFrontIcon":"cuIcon-medal","buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"公告信息","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看"],"menu":"培训学习列表","menuJump":"列表","tableName":"peixunxuexi"}],"menu":"培训学习模块"},{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["查看"],"menu":"奖惩记录列表","menuJump":"列表","tableName":"jiangchengjilu"}],"menu":"奖惩记录模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-album","buttons":["查看"],"menu":"薪酬记录","menuJump":"列表","tableName":"xinchoujilu"}],"menu":"薪酬记录管理"},{"child":[{"appFrontIcon":"cuIcon-clothes","buttons":["查看"],"menu":"培训学习","menuJump":"列表","tableName":"peixunxuexi"}],"menu":"培训学习管理"},{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["查看"],"menu":"奖惩记录","menuJump":"列表","tableName":"jiangchengjilu"}],"menu":"奖惩记录管理"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["新增","查看","修改","删除","销假"],"menu":"员工请假","menuJump":"列表","tableName":"yuangongqingjia"}],"menu":"员工请假管理"},{"child":[{"appFrontIcon":"cuIcon-goodsnew","buttons":["查看","修改","删除"],"menu":"销假信息","menuJump":"列表","tableName":"xiaojiaxinxi"}],"menu":"销假信息管理"},{"child":[{"appFrontIcon":"cuIcon-goods","buttons":["新增","查看","修改","删除"],"menu":"员工签到","menuJump":"列表","tableName":"yuangongqiandao"}],"menu":"员工签到管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看"],"menu":"培训学习列表","menuJump":"列表","tableName":"peixunxuexi"}],"menu":"培训学习模块"},{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["查看"],"menu":"奖惩记录列表","menuJump":"列表","tableName":"jiangchengjilu"}],"menu":"奖惩记录模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"是","hasFrontRegister":"否","roleName":"员工","tableName":"yuangong"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-flashlightopen","buttons":["查看"],"menu":"招聘信息","menuJump":"列表","tableName":"zhaopinxinxi"}],"menu":"招聘信息管理"},{"child":[{"appFrontIcon":"cuIcon-pic","buttons":["查看","修改","删除"],"menu":"求职简历","menuJump":"列表","tableName":"qiuzhijianli"}],"menu":"求职简历管理"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["查看"],"menu":"面试邀请","menuJump":"列表","tableName":"mianshiyaoqing"}],"menu":"面试邀请管理"},{"child":[{"appFrontIcon":"cuIcon-album","buttons":["查看"],"menu":"录用信息","menuJump":"列表","tableName":"luyongxinxi"}],"menu":"录用信息管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看"],"menu":"培训学习列表","menuJump":"列表","tableName":"peixunxuexi"}],"menu":"培训学习模块"},{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["查看"],"menu":"奖惩记录列表","menuJump":"列表","tableName":"jiangchengjilu"}],"menu":"奖惩记录模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"求职者","tableName":"qiuzhizhe"}];
  for(let i=0;i<menus.length;i++){
    if(menus[i].tableName==role){
      for(let j=0;j<menus[i].frontMenu.length;j++){
          for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
            if(tableName==menus[i].frontMenu[j].child[k].tableName){
              let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
              return buttons.indexOf(key) !== -1 || false
            }
          }
      }
    }
  }
  return false;
}

/**
 *  * 获取当前时间（yyyy-MM-dd hh:mm:ss）
 *   */
export function getCurDateTime() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate(),
    hour = currentTime.getHours(),
    minute = currentTime.getMinutes(),
    second = currentTime.getSeconds();
    return year + "-" + month + "-" + day + " " +hour +":" +minute+":"+second;
}

/**
 *  * 获取当前日期（yyyy-MM-dd）
 *   */
export function getCurDate() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate();
    return year + "-" + month + "-" + day;
}
