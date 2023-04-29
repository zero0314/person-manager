package com.controller;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Map;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Date;
import java.util.List;
import javax.servlet.http.HttpServletRequest;

import com.utils.ValidatorUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.annotation.IgnoreAuth;

import com.entity.QiuzhijianliEntity;
import com.entity.view.QiuzhijianliView;

import com.service.QiuzhijianliService;
import com.service.TokenService;
import com.utils.PageUtils;
import com.utils.R;
import com.utils.MD5Util;
import com.utils.MPUtil;
import com.utils.CommonUtil;
import java.io.IOException;

/**
 * 求职简历
 * 后端接口
 * @author 
 * @email 
 * @date 2023-03-10 18:22:47
 */
@RestController
@RequestMapping("/qiuzhijianli")
public class QiuzhijianliController {
    @Autowired
    private QiuzhijianliService qiuzhijianliService;


    


    /**
     * 后端列表
     */
    @RequestMapping("/page")
    public R page(@RequestParam Map<String, Object> params,QiuzhijianliEntity qiuzhijianli,
		HttpServletRequest request){
		String tableName = request.getSession().getAttribute("tableName").toString();
		if(tableName.equals("qiuzhizhe")) {
			qiuzhijianli.setQiuzhizhezhanghao((String)request.getSession().getAttribute("username"));
		}
        EntityWrapper<QiuzhijianliEntity> ew = new EntityWrapper<QiuzhijianliEntity>();

		PageUtils page = qiuzhijianliService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, qiuzhijianli), params), params));

        return R.ok().put("data", page);
    }
    
    /**
     * 前端列表
     */
	@IgnoreAuth
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params,QiuzhijianliEntity qiuzhijianli, 
		HttpServletRequest request){
        EntityWrapper<QiuzhijianliEntity> ew = new EntityWrapper<QiuzhijianliEntity>();

		PageUtils page = qiuzhijianliService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, qiuzhijianli), params), params));
        return R.ok().put("data", page);
    }

	/**
     * 列表
     */
    @RequestMapping("/lists")
    public R list( QiuzhijianliEntity qiuzhijianli){
       	EntityWrapper<QiuzhijianliEntity> ew = new EntityWrapper<QiuzhijianliEntity>();
      	ew.allEq(MPUtil.allEQMapPre( qiuzhijianli, "qiuzhijianli")); 
        return R.ok().put("data", qiuzhijianliService.selectListView(ew));
    }

	 /**
     * 查询
     */
    @RequestMapping("/query")
    public R query(QiuzhijianliEntity qiuzhijianli){
        EntityWrapper< QiuzhijianliEntity> ew = new EntityWrapper< QiuzhijianliEntity>();
 		ew.allEq(MPUtil.allEQMapPre( qiuzhijianli, "qiuzhijianli")); 
		QiuzhijianliView qiuzhijianliView =  qiuzhijianliService.selectView(ew);
		return R.ok("查询求职简历成功").put("data", qiuzhijianliView);
    }
	
    /**
     * 后端详情
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Long id){
        QiuzhijianliEntity qiuzhijianli = qiuzhijianliService.selectById(id);
        return R.ok().put("data", qiuzhijianli);
    }

    /**
     * 前端详情
     */
	@IgnoreAuth
    @RequestMapping("/detail/{id}")
    public R detail(@PathVariable("id") Long id){
        QiuzhijianliEntity qiuzhijianli = qiuzhijianliService.selectById(id);
        return R.ok().put("data", qiuzhijianli);
    }
    



    /**
     * 后端保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody QiuzhijianliEntity qiuzhijianli, HttpServletRequest request){
    	qiuzhijianli.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(qiuzhijianli);
        qiuzhijianliService.insert(qiuzhijianli);
        return R.ok();
    }
    
    /**
     * 前端保存
     */
    @RequestMapping("/add")
    public R add(@RequestBody QiuzhijianliEntity qiuzhijianli, HttpServletRequest request){
    	qiuzhijianli.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(qiuzhijianli);
        qiuzhijianliService.insert(qiuzhijianli);
        return R.ok();
    }



    /**
     * 修改
     */
    @RequestMapping("/update")
    @Transactional
    public R update(@RequestBody QiuzhijianliEntity qiuzhijianli, HttpServletRequest request){
        //ValidatorUtils.validateEntity(qiuzhijianli);
        qiuzhijianliService.updateById(qiuzhijianli);//全部更新
        return R.ok();
    }


    

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Long[] ids){
        qiuzhijianliService.deleteBatchIds(Arrays.asList(ids));
        return R.ok();
    }
    
    /**
     * 提醒接口
     */
	@RequestMapping("/remind/{columnName}/{type}")
	public R remindCount(@PathVariable("columnName") String columnName, HttpServletRequest request, 
						 @PathVariable("type") String type,@RequestParam Map<String, Object> map) {
		map.put("column", columnName);
		map.put("type", type);
		
		if(type.equals("2")) {
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			Calendar c = Calendar.getInstance();
			Date remindStartDate = null;
			Date remindEndDate = null;
			if(map.get("remindstart")!=null) {
				Integer remindStart = Integer.parseInt(map.get("remindstart").toString());
				c.setTime(new Date()); 
				c.add(Calendar.DAY_OF_MONTH,remindStart);
				remindStartDate = c.getTime();
				map.put("remindstart", sdf.format(remindStartDate));
			}
			if(map.get("remindend")!=null) {
				Integer remindEnd = Integer.parseInt(map.get("remindend").toString());
				c.setTime(new Date());
				c.add(Calendar.DAY_OF_MONTH,remindEnd);
				remindEndDate = c.getTime();
				map.put("remindend", sdf.format(remindEndDate));
			}
		}
		
		Wrapper<QiuzhijianliEntity> wrapper = new EntityWrapper<QiuzhijianliEntity>();
		if(map.get("remindstart")!=null) {
			wrapper.ge(columnName, map.get("remindstart"));
		}
		if(map.get("remindend")!=null) {
			wrapper.le(columnName, map.get("remindend"));
		}

		String tableName = request.getSession().getAttribute("tableName").toString();
		if(tableName.equals("qiuzhizhe")) {
			wrapper.eq("qiuzhizhezhanghao", (String)request.getSession().getAttribute("username"));
		}

		int count = qiuzhijianliService.selectCount(wrapper);
		return R.ok().put("count", count);
	}





//    sum(*)对符合条件的记录的数值列求和；
//    count（*）对符合条件的结果个数（或者记录）求和。

    /**
     * （按值统计）
     */
    @RequestMapping("/value/{xColumnName}/{yColumnName}")
    public R value(@PathVariable("yColumnName") String yColumnName, @PathVariable("xColumnName") String xColumnName,HttpServletRequest request) {
        Map<String, Object> params = new HashMap<String, Object>();
        params.put("xColumn", xColumnName);
        params.put("yColumn", yColumnName);
        EntityWrapper<QiuzhijianliEntity> ew = new EntityWrapper<QiuzhijianliEntity>();
		String tableName = request.getSession().getAttribute("tableName").toString();
		if(tableName.equals("qiuzhizhe")) {
            ew.eq("qiuzhizhezhanghao", (String)request.getSession().getAttribute("username"));
		}
        List<Map<String, Object>> result = qiuzhijianliService.selectValue(params, ew);
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        for(Map<String, Object> m : result) {
            for(String k : m.keySet()) {
                if(m.get(k) instanceof Date) {
                    m.put(k, sdf.format((Date)m.get(k)));
                }
            }
        }
        return R.ok().put("data", result);
    }

    /**
     * （按值统计）时间统计类型
     */
    @RequestMapping("/value/{xColumnName}/{yColumnName}/{timeStatType}")
    public R valueDay(@PathVariable("yColumnName") String yColumnName, @PathVariable("xColumnName") String xColumnName, @PathVariable("timeStatType") String timeStatType,HttpServletRequest request) {
        Map<String, Object> params = new HashMap<String, Object>();
        params.put("xColumn", xColumnName);
        params.put("yColumn", yColumnName);
        params.put("timeStatType", timeStatType);
        EntityWrapper<QiuzhijianliEntity> ew = new EntityWrapper<QiuzhijianliEntity>();
        String tableName = request.getSession().getAttribute("tableName").toString();
        if(tableName.equals("qiuzhizhe")) {
            ew.eq("qiuzhizhezhanghao", (String)request.getSession().getAttribute("username"));
        }
        List<Map<String, Object>> result = qiuzhijianliService.selectTimeStatValue(params, ew);
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        for(Map<String, Object> m : result) {
            for(String k : m.keySet()) {
                if(m.get(k) instanceof Date) {
                    m.put(k, sdf.format((Date)m.get(k)));
                }
            }
        }
        return R.ok().put("data", result);
    }

    /**
     * 分组统计
     */
    //分组统计，ColumnName，接收前端传过来的求职日期
    // 把其字段名放入到params里，传入到对应方法selectGroup里，查询结果，把结果集返回给前端，
    @RequestMapping("/group/{columnName}")
    public R group(@PathVariable("columnName") String columnName,HttpServletRequest request) {
        Map<String, Object> params = new HashMap<String, Object>();
        params.put("column", columnName);
        EntityWrapper<QiuzhijianliEntity> ew = new EntityWrapper<QiuzhijianliEntity>();
        List<Map<String, Object>> result = qiuzhijianliService.selectGroup(params, ew);
    //遍历，把date时间类型转换为字符串类型
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        for(Map<String, Object> m : result) {
            for(String k : m.keySet()) {
                if(m.get(k) instanceof Date) {
                    m.put(k, sdf.format((Date)m.get(k)));
                }
            }
        }
        return R.ok().put("data", result);
    }






}
