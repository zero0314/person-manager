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
 * 员工请假
 * 数据库通用操作实体类（普通增删改查）
 * @author 
 * @email 
 * @date 2023-03-10 18:22:47
 */
@TableName("yuangongqingjia")
public class YuangongqingjiaEntity<T> implements Serializable {
	private static final long serialVersionUID = 1L;


	public YuangongqingjiaEntity() {
		
	}
	
	public YuangongqingjiaEntity(T t) {
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
	 * 员工工号
	 */
					
	private String yuangonggonghao;
	
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
	 * 请假类型
	 */
					
	private String qingjialeixing;
	
	/**
	 * 图片
	 */
					
	private String tupian;
	
	/**
	 * 起始时间
	 */
				
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat 		
	private Date qishishijian;
	
	/**
	 * 截止时间
	 */
				
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat 		
	private Date jiezhishijian;
	
	/**
	 * 请假天数
	 */
					
	private String qingjiatianshu;
	
	/**
	 * 请假原因
	 */
					
	private String qingjiayuanyin;
	
	/**
	 * 是否审核
	 */
					
	private String sfsh;
	
	/**
	 * 审核回复
	 */
					
	private String shhf;
	
	
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
	 * 设置：员工工号
	 */
	public void setYuangonggonghao(String yuangonggonghao) {
		this.yuangonggonghao = yuangonggonghao;
	}
	/**
	 * 获取：员工工号
	 */
	public String getYuangonggonghao() {
		return yuangonggonghao;
	}
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
	 * 设置：请假类型
	 */
	public void setQingjialeixing(String qingjialeixing) {
		this.qingjialeixing = qingjialeixing;
	}
	/**
	 * 获取：请假类型
	 */
	public String getQingjialeixing() {
		return qingjialeixing;
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
	 * 设置：起始时间
	 */
	public void setQishishijian(Date qishishijian) {
		this.qishishijian = qishishijian;
	}
	/**
	 * 获取：起始时间
	 */
	public Date getQishishijian() {
		return qishishijian;
	}
	/**
	 * 设置：截止时间
	 */
	public void setJiezhishijian(Date jiezhishijian) {
		this.jiezhishijian = jiezhishijian;
	}
	/**
	 * 获取：截止时间
	 */
	public Date getJiezhishijian() {
		return jiezhishijian;
	}
	/**
	 * 设置：请假天数
	 */
	public void setQingjiatianshu(String qingjiatianshu) {
		this.qingjiatianshu = qingjiatianshu;
	}
	/**
	 * 获取：请假天数
	 */
	public String getQingjiatianshu() {
		return qingjiatianshu;
	}
	/**
	 * 设置：请假原因
	 */
	public void setQingjiayuanyin(String qingjiayuanyin) {
		this.qingjiayuanyin = qingjiayuanyin;
	}
	/**
	 * 获取：请假原因
	 */
	public String getQingjiayuanyin() {
		return qingjiayuanyin;
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
