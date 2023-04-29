package com.entity.model;

import com.entity.JiangchengjiluEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import java.util.Date;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.io.Serializable;
 

/**
 * 奖惩记录
 * 接收传参的实体类  
 *（实际开发中配合移动端接口开发手动去掉些没用的字段， 后端一般用entity就够用了） 
 * 取自ModelAndView 的model名称
 * @author 
 * @email 
 * @date 2023-03-10 18:22:47
 */
public class JiangchengjiluModel  implements Serializable {
	private static final long serialVersionUID = 1L;

	 			
	/**
	 * 员工姓名
	 */
	
	private String yuangongxingming;
		
	/**
	 * 部门
	 */
	
	private String bumen;
		
	/**
	 * 岗位
	 */
	
	private String gangwei;
		
	/**
	 * 奖惩名称
	 */
	
	private String jiangchengmingcheng;
		
	/**
	 * 奖惩类型
	 */
	
	private String jiangchengleixing;
		
	/**
	 * 图片
	 */
	
	private String tupian;
		
	/**
	 * 日期
	 */
		
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat 
	private Date riqi;
		
	/**
	 * 奖惩原因
	 */
	
	private String jiangchengyuanyin;
				
	
	/**
	 * 设置：员工姓名
	 */
	 
	public void setYuangongxingming(String yuangongxingming) {
		this.yuangongxingming = yuangongxingming;
	}
	
	/**
	 * 获取：员工姓名
	 */
	public String getYuangongxingming() {
		return yuangongxingming;
	}
				
	
	/**
	 * 设置：部门
	 */
	 
	public void setBumen(String bumen) {
		this.bumen = bumen;
	}
	
	/**
	 * 获取：部门
	 */
	public String getBumen() {
		return bumen;
	}
				
	
	/**
	 * 设置：岗位
	 */
	 
	public void setGangwei(String gangwei) {
		this.gangwei = gangwei;
	}
	
	/**
	 * 获取：岗位
	 */
	public String getGangwei() {
		return gangwei;
	}
				
	
	/**
	 * 设置：奖惩名称
	 */
	 
	public void setJiangchengmingcheng(String jiangchengmingcheng) {
		this.jiangchengmingcheng = jiangchengmingcheng;
	}
	
	/**
	 * 获取：奖惩名称
	 */
	public String getJiangchengmingcheng() {
		return jiangchengmingcheng;
	}
				
	
	/**
	 * 设置：奖惩类型
	 */
	 
	public void setJiangchengleixing(String jiangchengleixing) {
		this.jiangchengleixing = jiangchengleixing;
	}
	
	/**
	 * 获取：奖惩类型
	 */
	public String getJiangchengleixing() {
		return jiangchengleixing;
	}
				
	
	/**
	 * 设置：图片
	 */
	 
	public void setTupian(String tupian) {
		this.tupian = tupian;
	}
	
	/**
	 * 获取：图片
	 */
	public String getTupian() {
		return tupian;
	}
				
	
	/**
	 * 设置：日期
	 */
	 
	public void setRiqi(Date riqi) {
		this.riqi = riqi;
	}
	
	/**
	 * 获取：日期
	 */
	public Date getRiqi() {
		return riqi;
	}
				
	
	/**
	 * 设置：奖惩原因
	 */
	 
	public void setJiangchengyuanyin(String jiangchengyuanyin) {
		this.jiangchengyuanyin = jiangchengyuanyin;
	}
	
	/**
	 * 获取：奖惩原因
	 */
	public String getJiangchengyuanyin() {
		return jiangchengyuanyin;
	}
			
}
