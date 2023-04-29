package com.entity.view;

import com.entity.QiuzhizheEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 求职者
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2023-03-10 18:22:47
 */
@TableName("qiuzhizhe")
public class QiuzhizheView  extends QiuzhizheEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public QiuzhizheView(){
	}
 
 	public QiuzhizheView(QiuzhizheEntity qiuzhizheEntity){
 	try {
			BeanUtils.copyProperties(this, qiuzhizheEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
