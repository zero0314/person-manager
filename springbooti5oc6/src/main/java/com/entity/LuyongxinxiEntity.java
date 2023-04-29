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
 * 录用信息
 * 数据库通用操作实体类（普通增删改查）
 * @author 
 * @email 
 * @date 2023-03-10 18:22:47
 */
@TableName("luyongxinxi")
public class LuyongxinxiEntity<T> implements Serializable {
	private static final long serialVersionUID = 1L;


	public LuyongxinxiEntity() {
		
	}
	
	public LuyongxinxiEntity(T t) {
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
	 * 录用编号
	 */
					
	private String luyongbianhao;
	
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
				
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd")
	@DateTimeFormat 		
	private Date tongzhiriqi;
	
	/**
	 * 录用备注
	 */
					
	private String luyongbeizhu;
	
	
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
	 * 设置：录用编号
	 */
	public void setLuyongbianhao(String luyongbianhao) {
		this.luyongbianhao = luyongbianhao;
	}
	/**
	 * 获取：录用编号
	 */
	public String getLuyongbianhao() {
		return luyongbianhao;
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
