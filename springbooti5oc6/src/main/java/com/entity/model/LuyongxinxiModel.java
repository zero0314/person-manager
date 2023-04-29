package com.entity.model;

import com.entity.LuyongxinxiEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import java.util.Date;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.io.Serializable;
 

/**
 * 录用信息
 * 接收传参的实体类  
 *（实际开发中配合移动端接口开发手动去掉些没用的字段， 后端一般用entity就够用了） 
 * 取自ModelAndView 的model名称
 * @author 
 * @email 
 * @date 2023-03-10 18:22:47
 */
public class LuyongxinxiModel  implements Serializable {
	private static final long serialVersionUID = 1L;

	 			
	/**
	 * 求职者账号
	 */
	
	private String qiuzhizhezhanghao;
		
	/**
	 * 求职者姓名
	 */
	
	private String qiuzhizhexingming;
		
	/**
	 * 专业
	 */
	
	private String zhuanye;
		
	/**
	 * 学历
	 */
	
	private String xueli;
		
	/**
	 * 联系电话
	 */
	
	private String lianxidianhua;
		
	/**
	 * 职位名称
	 */
	
	private String zhiweimingcheng;
		
	/**
	 * 录用图片
	 */
	
	private String luyongtupian;
		
	/**
	 * 就业时间
	 */
		
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat 
	private Date jiuyeshijian;
		
	/**
	 * 通知日期
	 */
		
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat 
	private Date tongzhiriqi;
		
	/**
	 * 录用备注
	 */
	
	private String luyongbeizhu;
				
	
	/**
	 * 设置：求职者账号
	 */
	 
	public void setQiuzhizhezhanghao(String qiuzhizhezhanghao) {
		this.qiuzhizhezhanghao = qiuzhizhezhanghao;
	}
	
	/**
	 * 获取：求职者账号
	 */
	public String getQiuzhizhezhanghao() {
		return qiuzhizhezhanghao;
	}
				
	
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
	 * 设置：专业
	 */
	 
	public void setZhuanye(String zhuanye) {
		this.zhuanye = zhuanye;
	}
	
	/**
	 * 获取：专业
	 */
	public String getZhuanye() {
		return zhuanye;
	}
				
	
	/**
	 * 设置：学历
	 */
	 
	public void setXueli(String xueli) {
		this.xueli = xueli;
	}
	
	/**
	 * 获取：学历
	 */
	public String getXueli() {
		return xueli;
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
	 * 设置：职位名称
	 */
	 
	public void setZhiweimingcheng(String zhiweimingcheng) {
		this.zhiweimingcheng = zhiweimingcheng;
	}
	
	/**
	 * 获取：职位名称
	 */
	public String getZhiweimingcheng() {
		return zhiweimingcheng;
	}
				
	
	/**
	 * 设置：录用图片
	 */
	 
	public void setLuyongtupian(String luyongtupian) {
		this.luyongtupian = luyongtupian;
	}
	
	/**
	 * 获取：录用图片
	 */
	public String getLuyongtupian() {
		return luyongtupian;
	}
				
	
	/**
	 * 设置：就业时间
	 */
	 
	public void setJiuyeshijian(Date jiuyeshijian) {
		this.jiuyeshijian = jiuyeshijian;
	}
	
	/**
	 * 获取：就业时间
	 */
	public Date getJiuyeshijian() {
		return jiuyeshijian;
	}
				
	
	/**
	 * 设置：通知日期
	 */
	 
	public void setTongzhiriqi(Date tongzhiriqi) {
		this.tongzhiriqi = tongzhiriqi;
	}
	
	/**
	 * 获取：通知日期
	 */
	public Date getTongzhiriqi() {
		return tongzhiriqi;
	}
				
	
	/**
	 * 设置：录用备注
	 */
	 
	public void setLuyongbeizhu(String luyongbeizhu) {
		this.luyongbeizhu = luyongbeizhu;
	}
	
	/**
	 * 获取：录用备注
	 */
	public String getLuyongbeizhu() {
		return luyongbeizhu;
	}
			
}
