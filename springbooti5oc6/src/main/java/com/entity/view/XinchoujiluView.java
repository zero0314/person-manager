package com.entity.view;

import com.entity.XinchoujiluEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 薪酬记录
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2023-03-10 18:22:47
 */
@TableName("xinchoujilu")
public class XinchoujiluView  extends XinchoujiluEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public XinchoujiluView(){
	}
 
 	public XinchoujiluView(XinchoujiluEntity xinchoujiluEntity){
 	try {
			BeanUtils.copyProperties(this, xinchoujiluEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
