package com.entity.vo;

import com.entity.MianshiyaoqingEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import java.util.Date;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.io.Serializable;
 

/**
 * 面试邀请
 * 手机端接口返回实体辅助类 
 * （主要作用去除一些不必要的字段）
 * @author 
 * @email 
 * @date 2023-03-10 18:22:47
 */
public class MianshiyaoqingVO  implements Serializable {
	private static final long serialVersionUID = 1L;

	 			
	/**
	 * 求职者姓名
	 */
	
	private String qiuzhizhexingming;
		
	/**
	 * 联系电话
	 */
	
	private String lianxidianhua;
		
	/**
	 * 头像
	 */
	
	private String touxiang;
		
	/**
	 * 邀请标题
	 */
	
	private String yaoqingbiaoti;
		
	/**
	 * 面试地点
	 */
	
	private String mianshididian;
		
	/**
	 * 面试时间
	 */
		
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat 
	private Date mianshishijian;
		
	/**
	 * 邀请日期
	 */
		
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat 
	private Date yaoqingriqi;
		
	/**
	 * 邀请内容
	 */
	
	private String yaoqingneirong;
				
	
	/**
	 * 设置：求职者姓名
	 */
	 
	public void setQiuzhizhexingming(String qiuzhizhexingming) {
		this.qiuzhizhexingming = qiuzhizhexingming;
	}
	
	/**
	 * 获取：求职者姓名
	 */
	public String getQiuzhizhexingming() {
		return qiuzhizhexingming;
	}
				
	
	/**
	 * 设置：联系电话
	 */
	 
	public void setLianxidianhua(String lianxidianhua) {
		this.lianxidianhua = lianxidianhua;
	}
	
	/**
	 * 获取：联系电话
	 */
	public String getLianxidianhua() {
		return lianxidianhua;
	}
				
	
	/**
	 * 设置：头像
	 */
	 
	public void setTouxiang(String touxiang) {
		this.touxiang = touxiang;
	}
	
	/**
	 * 获取：头像
	 */
	public String getTouxiang() {
		return touxiang;
	}
				
	
	/**
	 * 设置：邀请标题
	 */
	 
	public void setYaoqingbiaoti(String yaoqingbiaoti) {
		this.yaoqingbiaoti = yaoqingbiaoti;
	}
	
	/**
	 * 获取：邀请标题
	 */
	public String getYaoqingbiaoti() {
		return yaoqingbiaoti;
	}
				
	
	/**
	 * 设置：面试地点
	 */
	 
	public void setMianshididian(String mianshididian) {
		this.mianshididian = mianshididian;
	}
	
	/**
	 * 获取：面试地点
	 */
	public String getMianshididian() {
		return mianshididian;
	}
				
	
	/**
	 * 设置：面试时间
	 */
	 
	public void setMianshishijian(Date mianshishijian) {
		this.mianshishijian = mianshishijian;
	}
	
	/**
	 * 获取：面试时间
	 */
	public Date getMianshishijian() {
		return mianshishijian;
	}
				
	
	/**
	 * 设置：邀请日期
	 */
	 
	public void setYaoqingriqi(Date yaoqingriqi) {
		this.yaoqingriqi = yaoqingriqi;
	}
	
	/**
	 * 获取：邀请日期
	 */
	public Date getYaoqingriqi() {
		return yaoqingriqi;
	}
				
	
	/**
	 * 设置：邀请内容
	 */
	 
	public void setYaoqingneirong(String yaoqingneirong) {
		this.yaoqingneirong = yaoqingneirong;
	}
	
	/**
	 * 获取：邀请内容
	 */
	public String getYaoqingneirong() {
		return yaoqingneirong;
	}
			
}
