package com.entity;

import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.apache.commons.beanutils.BeanUtils;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.enums.FieldFill;
import com.baomidou.mybatisplus.enums.IdType;


/**
 * 面试邀请
 * 数据库通用操作实体类（普通增删改查）
 * @author 
 * @email 
 * @date 2023-03-10 18:22:47
 */
@TableName("mianshiyaoqing")
public class MianshiyaoqingEntity<T> implements Serializable {
	private static final long serialVersionUID = 1L;


	public MianshiyaoqingEntity() {
		
	}
	
	public MianshiyaoqingEntity(T t) {
		try {
			BeanUtils.copyProperties(this, t);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	/**
	 * 主键id
	 */
	@TableId
	private Long id;
	/**
	 * 求职者账号
	 */
					
	private String qiuzhizhezhanghao;
	
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
				
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd")
	@DateTimeFormat 		
	private Date yaoqingriqi;
	
	/**
	 * 邀请内容
	 */
					
	private String yaoqingneirong;
	
	
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat
	private Date addtime;

	public Date getAddtime() {
		return addtime;
	}
	public void setAddtime(Date addtime) {
		this.addtime = addtime;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
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
