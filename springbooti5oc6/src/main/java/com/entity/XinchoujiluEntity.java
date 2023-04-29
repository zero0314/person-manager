package com.entity;


import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;



import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.apache.commons.beanutils.BeanUtils;


/**
 * 薪酬记录
 * 数据库通用操作实体类（普通增删改查）
 * @author 
 * @email 
 * @date 2023-03-10 18:22:47
 */
@TableName("xinchoujilu")
public class XinchoujiluEntity<T> implements Serializable {
	private static final long serialVersionUID = 1L;


	public XinchoujiluEntity() {
		
	}
	
	public XinchoujiluEntity(T t) {
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

	@Override
	public String toString() {
		return "XinchoujiluEntity{" +
				"id=" + id +
				", yuefen='" + yuefen + '\'' +
				", yuangonggonghao='" + yuangonggonghao + '\'' +
				", yuangongxingming='" + yuangongxingming + '\'' +
				", tupian='" + tupian + '\'' +
				", bumen='" + bumen + '\'' +
				", shoujihao='" + shoujihao + '\'' +
				", gangwei='" + gangwei + '\'' +
				", jibengongzi=" + jibengongzi +
				", quanqinjiangli=" + quanqinjiangli +
				", qitabuzhu=" + qitabuzhu +
				", koukuanshixiang='" + koukuanshixiang + '\'' +
				", koukuanjine=" + koukuanjine +
				", shifagongzi='" + shifagongzi + '\'' +
				", dengjishijian=" + dengjishijian +
				", addtime=" + addtime +
				'}';
	}

	/**
	 * 月份
	 */

	private String yuefen;
	
	/**
	 * 员工工号
	 */

	private String yuangonggonghao;
	
	/**
	 * 员工姓名
	 */

	private String yuangongxingming;
	
	/**
	 * 图片
	 */

	private String tupian;
	
	/**
	 * 部门
	 */

	private String bumen;
	
	/**
	 * 手机号
	 */

	private String shoujihao;
	
	/**
	 * 岗位
	 */

	private String gangwei;
	
	/**
	 * 基本工资
	 */

	private Integer jibengongzi;
	
	/**
	 * 全勤奖励
	 */

	private Integer quanqinjiangli;
	
	/**
	 * 其他补助
	 */

	private Integer qitabuzhu;
	
	/**
	 * 扣款事项
	 */

	private String koukuanshixiang;
	
	/**
	 * 扣款金额
	 */

	private Integer koukuanjine;
	
	/**
	 * 实发工资
	 */

	private String shifagongzi;
	
	/**
	 * 登记时间
	 */

	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd")
	@DateTimeFormat 		
	private Date dengjishijian;
	
	
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
	 * 设置：月份
	 */
	public void setYuefen(String yuefen) {
		this.yuefen = yuefen;
	}
	/**
	 * 获取：月份
	 */
	public String getYuefen() {
		return yuefen;
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
	 * 设置：手机号
	 */
	public void setShoujihao(String shoujihao) {
		this.shoujihao = shoujihao;
	}
	/**
	 * 获取：手机号
	 */
	public String getShoujihao() {
		return shoujihao;
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
	 * 设置：基本工资
	 */
	public void setJibengongzi(Integer jibengongzi) {
		this.jibengongzi = jibengongzi;
	}
	/**
	 * 获取：基本工资
	 */
	public Integer getJibengongzi() {
		return jibengongzi;
	}
	/**
	 * 设置：全勤奖励
	 */
	public void setQuanqinjiangli(Integer quanqinjiangli) {
		this.quanqinjiangli = quanqinjiangli;
	}
	/**
	 * 获取：全勤奖励
	 */
	public Integer getQuanqinjiangli() {
		return quanqinjiangli;
	}
	/**
	 * 设置：其他补助
	 */
	public void setQitabuzhu(Integer qitabuzhu) {
		this.qitabuzhu = qitabuzhu;
	}
	/**
	 * 获取：其他补助
	 */
	public Integer getQitabuzhu() {
		return qitabuzhu;
	}
	/**
	 * 设置：扣款事项
	 */
	public void setKoukuanshixiang(String koukuanshixiang) {
		this.koukuanshixiang = koukuanshixiang;
	}
	/**
	 * 获取：扣款事项
	 */
	public String getKoukuanshixiang() {
		return koukuanshixiang;
	}
	/**
	 * 设置：扣款金额
	 */
	public void setKoukuanjine(Integer koukuanjine) {
		this.koukuanjine = koukuanjine;
	}
	/**
	 * 获取：扣款金额
	 */
	public Integer getKoukuanjine() {
		return koukuanjine;
	}
	/**
	 * 设置：实发工资
	 */
	public void setShifagongzi(String shifagongzi) {
		this.shifagongzi = shifagongzi;
	}
	/**
	 * 获取：实发工资
	 */
	public String getShifagongzi() {
		return shifagongzi;
	}
	/**
	 * 设置：登记时间
	 */
	public void setDengjishijian(Date dengjishijian) {
		this.dengjishijian = dengjishijian;
	}
	/**
	 * 获取：登记时间
	 */
	public Date getDengjishijian() {
		return dengjishijian;
	}

}
