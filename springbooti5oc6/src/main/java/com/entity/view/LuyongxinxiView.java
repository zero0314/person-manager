package com.entity.view;

import com.entity.LuyongxinxiEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 录用信息
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2023-03-10 18:22:47
 */
@TableName("luyongxinxi")
public class LuyongxinxiView  extends LuyongxinxiEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public LuyongxinxiView(){
	}
 
 	public LuyongxinxiView(LuyongxinxiEntity luyongxinxiEntity){
 	try {
			BeanUtils.copyProperties(this, luyongxinxiEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
