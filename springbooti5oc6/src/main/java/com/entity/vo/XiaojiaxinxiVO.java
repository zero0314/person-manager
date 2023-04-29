package com.entity.vo;

import com.entity.XiaojiaxinxiEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import java.util.Date;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.io.Serializable;
 

/**
 * 销假信息
 * 手机端接口返回实体辅助类 
 * （主要作用去除一些不必要的字段）
 * @author 
 * @email 
 * @date 2023-03-10 18:22:47
 */
public class XiaojiaxinxiVO  implements Serializable {
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
	 * 销假编号
	 */
	
	private String xiaojiabianhao;
		
	/**
	 * 图片
	 */
	
	private String tupian;
		
	/**
	 * 销假时间
	 */
		
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat 
	private Date xiaojiashijian;
		
	/**
	 * 销假备注
	 */
	
	private String xiaojiabeizhu;
		
	/**
	 * 是否审核
	 */
	
	private String sfsh;
		
	/**
	 * 审核回复
	 */
	
	private String shhf;
				
	
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
	 * 设置：销假编号
	 */
	 
	public void setXiaojiabianhao(String xiaojiabianhao) {
		this.xiaojiabianhao = xiaojiabianhao;
	}
	
	/**
	 * 获取：销假编号
	 */
	public String getXiaojiabianhao() {
		return xiaojiabianhao;
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
	 * 设置：销假时间
	 */
	 
	public void setXiaojiashijian(Date xiaojiashijian) {
		this.xiaojiashijian = xiaojiashijian;
	}
	
	/**
	 * 获取：销假时间
	 */
	public Date getXiaojiashijian() {
		return xiaojiashijian;
	}
				
	
	/**
	 * 设置：销假备注
	 */
	 
	public void setXiaojiabeizhu(String xiaojiabeizhu) {
		this.xiaojiabeizhu = xiaojiabeizhu;
	}
	
	/**
	 * 获取：销假备注
	 */
	public String getXiaojiabeizhu() {
		return xiaojiabeizhu;
	}
				
	
	/**
	 * 设置：是否审核
	 */
	 
	public void setSfsh(String sfsh) {
		this.sfsh = sfsh;
	}
	
	/**
	 * 获取：是否审核
	 */
	public String getSfsh() {
		return sfsh;
	}
				
	
	/**
	 * 设置：审核回复
	 */
	 
	public void setShhf(String shhf) {
		this.shhf = shhf;
	}
	
	/**
	 * 获取：审核回复
	 */
	public String getShhf() {
		return shhf;
	}
			
}
