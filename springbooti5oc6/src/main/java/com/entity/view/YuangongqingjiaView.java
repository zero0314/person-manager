package com.entity.view;

import com.entity.YuangongqingjiaEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 员工请假
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2023-03-10 18:22:47
 */
@TableName("yuangongqingjia")
public class YuangongqingjiaView  extends YuangongqingjiaEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public YuangongqingjiaView(){
	}
 
 	public YuangongqingjiaView(YuangongqingjiaEntity yuangongqingjiaEntity){
 	try {
			BeanUtils.copyProperties(this, yuangongqingjiaEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
