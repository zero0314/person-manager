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

import com.entity.PeixunxuexiEntity;
import com.entity.view.PeixunxuexiView;

import com.service.PeixunxuexiService;
import com.service.TokenService;
import com.utils.PageUtils;
import com.utils.R;
import com.utils.MD5Util;
import com.utils.MPUtil;
import com.utils.CommonUtil;
import java.io.IOException;

/**
 * 培训学习
 * 后端接口
 * @author 
 * @email 
 * @date 2023-03-10 18:22:47
 */
@RestController
@RequestMapping("/peixunxuexi")
public class PeixunxuexiController {
    @Autowired
    private PeixunxuexiService peixunxuexiService;


    


    /**
     * 后端列表
     */
    @RequestMapping("/page")
    public R page(@RequestParam Map<String, Object> params,PeixunxuexiEntity peixunxuexi,
		HttpServletRequest request){
		String tableName = request.getSession().getAttribute("tableName").toString();
		//如果是员工，获取username，放到员工工号里面
        if(tableName.equals("yuangong")) {
			peixunxuexi.setYuangonggonghao((String)request.getSession().getAttribute("username"));
		}
        EntityWrapper<PeixunxuexiEntity> ew = new EntityWrapper<PeixunxuexiEntity>();
        //获取到传过来的员工姓名，分页查询，查询之后返回前端在data里面
        PageUtils page = peixunxuexiService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, peixunxuexi), params), params));

        return R.ok().put("data", page);
    }
    
    /**
     * 前端列表
     */
	@IgnoreAuth
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params,PeixunxuexiEntity peixunxuexi, 
		HttpServletRequest request){
        EntityWrapper<PeixunxuexiEntity> ew = new EntityWrapper<PeixunxuexiEntity>();

		PageUtils page = peixunxuexiService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, peixunxuexi), params), params));
        return R.ok().put("data", page);
    }

	/**
     * 列表
     */
    @RequestMapping("/lists")
    public R list( PeixunxuexiEntity peixunxuexi){
       	EntityWrapper<PeixunxuexiEntity> ew = new EntityWrapper<PeixunxuexiEntity>();
      	ew.allEq(MPUtil.allEQMapPre( peixunxuexi, "peixunxuexi")); 
        return R.ok().put("data", peixunxuexiService.selectListView(ew));
    }

	 /**
     * 查询
     */
    @RequestMapping("/query")
    public R query(PeixunxuexiEntity peixunxuexi){
        EntityWrapper< PeixunxuexiEntity> ew = new EntityWrapper< PeixunxuexiEntity>();
 		ew.allEq(MPUtil.allEQMapPre( peixunxuexi, "peixunxuexi")); 
		PeixunxuexiView peixunxuexiView =  peixunxuexiService.selectView(ew);
		return R.ok("查询培训学习成功").put("data", peixunxuexiView);
    }
	
    /**
     * 后端详情
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Long id){
        PeixunxuexiEntity peixunxuexi = peixunxuexiService.selectById(id);
        return R.ok().put("data", peixunxuexi);
    }

    /**
     * 前端详情
     */
	@IgnoreAuth
    @RequestMapping("/detail/{id}")
    public R detail(@PathVariable("id") Long id){
        PeixunxuexiEntity peixunxuexi = peixunxuexiService.selectById(id);
        return R.ok().put("data", peixunxuexi);
    }
    



    /**
     * 后端保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody PeixunxuexiEntity peixunxuexi, HttpServletRequest request){
    	peixunxuexi.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(peixunxuexi);
        peixunxuexiService.insert(peixunxuexi);
        return R.ok();
    }
    
    /**
     * 前端保存
     */
    @RequestMapping("/add")
    public R add(@RequestBody PeixunxuexiEntity peixunxuexi, HttpServletRequest request){
    	peixunxuexi.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(peixunxuexi);
        peixunxuexiService.insert(peixunxuexi);
        return R.ok();
    }



    /**
     * 修改
     */
    @RequestMapping("/update")
    @Transactional
    public R update(@RequestBody PeixunxuexiEntity peixunxuexi, HttpServletRequest request){
        //ValidatorUtils.validateEntity(peixunxuexi);
        peixunxuexiService.updateById(peixunxuexi);//全部更新
        return R.ok();
    }


    

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Long[] ids){
        peixunxuexiService.deleteBatchIds(Arrays.asList(ids));
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
		
		Wrapper<PeixunxuexiEntity> wrapper = new EntityWrapper<PeixunxuexiEntity>();
		if(map.get("remindstart")!=null) {
			wrapper.ge(columnName, map.get("remindstart"));
		}
		if(map.get("remindend")!=null) {
			wrapper.le(columnName, map.get("remindend"));
		}

		String tableName = request.getSession().getAttribute("tableName").toString();
		if(tableName.equals("yuangong")) {
			wrapper.eq("yuangonggonghao", (String)request.getSession().getAttribute("username"));
		}

		int count = peixunxuexiService.selectCount(wrapper);
		return R.ok().put("count", count);
	}
	









}
