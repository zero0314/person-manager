package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.QiuzhijianliEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.QiuzhijianliVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.QiuzhijianliView;


/**
 * 求职简历
 *
 * @author 
 * @email 
 * @date 2023-03-10 18:22:47
 */
public interface QiuzhijianliService extends IService<QiuzhijianliEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<QiuzhijianliVO> selectListVO(Wrapper<QiuzhijianliEntity> wrapper);
   	
   	QiuzhijianliVO selectVO(@Param("ew") Wrapper<QiuzhijianliEntity> wrapper);
   	
   	List<QiuzhijianliView> selectListView(Wrapper<QiuzhijianliEntity> wrapper);
   	
   	QiuzhijianliView selectView(@Param("ew") Wrapper<QiuzhijianliEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<QiuzhijianliEntity> wrapper);
   	

    List<Map<String, Object>> selectValue(Map<String, Object> params,Wrapper<QiuzhijianliEntity> wrapper);

    List<Map<String, Object>> selectTimeStatValue(Map<String, Object> params,Wrapper<QiuzhijianliEntity> wrapper);

    List<Map<String, Object>> selectGroup(Map<String, Object> params,Wrapper<QiuzhijianliEntity> wrapper);



}

