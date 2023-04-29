package com.entity.vo;

import com.entity.ZhaopinxinxiEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import java.util.Date;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.io.Serializable;
 

/**
 * 招聘信息
 * 手机端接口返回实体辅助类 
 * （主要作用去除一些不必要的字段）
 * @author 
 * @email 
 * @date 2023-03-10 18:22:47
 */
public class ZhaopinxinxiVO  implements Serializable {
	private static final long serialVersionUID = 1L;

	 			
	/**
	 * 企业名称
	 */
	
	private String qiyemingcheng;
		
	/**
	 * 联系方式
	 */
	
	private String lianxifangshi;
		
	/**
	 * 邮箱
	 */
	
	private String youxiang;
		
	/**
	 * 招聘地区
	 */
	
	private String zhaopindiqu;
		
	/**
	 * 招聘专业
	 */
	
	private String zhaopinzhuanye;
		
	/**
	 * 招聘封面
	 */
	
	private String zhaopinfengmian;
		
	/**
	 * 招聘职位
	 */
	
	private String zhaopinzhiwei;
		
	/**
	 * 招聘人数
	 */
	
	private Integer zhaopinrenshu;
		
	/**
	 * 职位描述
	 */
	
	private String zhiweimiaoshu;
		
	/**
	 * 基本条件
	 */
	
	private String jibentiaojian;
		
	/**
	 * 工资待遇
	 */
	
	private String gongzidaiyu;
		
	/**
	 * 招聘流程
	 */
	
	private String zhaopinliucheng;
				
	
	/**
	 * 设置：企业名称
	 */
	 
	public void setQiyemingcheng(String qiyemingcheng) {
		this.qiyemingcheng = qiyemingcheng;
	}
	
	/**
	 * 获取：企业名称
	 */
	public String getQiyemingcheng() {
		return qiyemingcheng;
	}
				
	
	/**
	 * 设置：联系方式
	 */
	 
	public void setLianxifangshi(String lianxifangshi) {
		this.lianxifangshi = lianxifangshi;
	}
	
	/**
	 * 获取：联系方式
	 */
	public String getLianxifangshi() {
		return lianxifangshi;
	}
				
	
	/**
	 * 设置：邮箱
	 */
	 
	public void setYouxiang(String youxiang) {
		this.youxiang = youxiang;
	}
	
	/**
	 * 获取：邮箱
	 */
	public String getYouxiang() {
		return youxiang;
	}
				
	
	/**
	 * 设置：招聘地区
	 */
	 
	public void setZhaopindiqu(String zhaopindiqu) {
		this.zhaopindiqu = zhaopindiqu;
	}
	
	/**
	 * 获取：招聘地区
	 */
	public String getZhaopindiqu() {
		return zhaopindiqu;
	}
				
	
	/**
	 * 设置：招聘专业
	 */
	 
	public void setZhaopinzhuanye(String zhaopinzhuanye) {
		this.zhaopinzhuanye = zhaopinzhuanye;
	}
	
	/**
	 * 获取：招聘专业
	 */
	public String getZhaopinzhuanye() {
		return zhaopinzhuanye;
	}
				
	
	/**
	 * 设置：招聘封面
	 */
	 
	public void setZhaopinfengmian(String zhaopinfengmian) {
		this.zhaopinfengmian = zhaopinfengmian;
	}
	
	/**
	 * 获取：招聘封面
	 */
	public String getZhaopinfengmian() {
		return zhaopinfengmian;
	}
				
	
	/**
	 * 设置：招聘职位
	 */
	 
	public void setZhaopinzhiwei(String zhaopinzhiwei) {
		this.zhaopinzhiwei = zhaopinzhiwei;
	}
	
	/**
	 * 获取：招聘职位
	 */
	public String getZhaopinzhiwei() {
		return zhaopinzhiwei;
	}
				
	
	/**
	 * 设置：招聘人数
	 */
	 
	public void setZhaopinrenshu(Integer zhaopinrenshu) {
		this.zhaopinrenshu = zhaopinrenshu;
	}
	
	/**
	 * 获取：招聘人数
	 */
	public Integer getZhaopinrenshu() {
		return zhaopinrenshu;
	}
				
	
	/**
	 * 设置：职位描述
	 */
	 
	public void setZhiweimiaoshu(String zhiweimiaoshu) {
		this.zhiweimiaoshu = zhiweimiaoshu;
	}
	
	/**
	 * 获取：职位描述
	 */
	public String getZhiweimiaoshu() {
		return zhiweimiaoshu;
	}
				
	
	/**
	 * 设置：基本条件
	 */
	 
	public void setJibentiaojian(String jibentiaojian) {
		this.jibentiaojian = jibentiaojian;
	}
	
	/**
	 * 获取：基本条件
	 */
	public String getJibentiaojian() {
		return jibentiaojian;
	}
				
	
	/**
	 * 设置：工资待遇
	 */
	 
	public void setGongzidaiyu(String gongzidaiyu) {
		this.gongzidaiyu = gongzidaiyu;
	}
	
	/**
	 * 获取：工资待遇
	 */
	public String getGongzidaiyu() {
		return gongzidaiyu;
	}
				
	
	/**
	 * 设置：招聘流程
	 */
	 
	public void setZhaopinliucheng(String zhaopinliucheng) {
		this.zhaopinliucheng = zhaopinliucheng;
	}
	
	/**
	 * 获取：招聘流程
	 */
	public String getZhaopinliucheng() {
		return zhaopinliucheng;
	}
			
}
