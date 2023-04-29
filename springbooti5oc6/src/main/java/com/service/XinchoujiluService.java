package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.XinchoujiluEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.XinchoujiluVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.XinchoujiluView;


/**
 * 薪酬记录
 *
 * @author 
 * @email 
 * @date 2023-03-10 18:22:47
 */
public interface XinchoujiluService extends IService<XinchoujiluEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<XinchoujiluVO> selectListVO(Wrapper<XinchoujiluEntity> wrapper);
   	
   	XinchoujiluVO selectVO(@Param("ew") Wrapper<XinchoujiluEntity> wrapper);
   	
   	List<XinchoujiluView> selectListView(Wrapper<XinchoujiluEntity> wrapper);
   	
   	XinchoujiluView selectView(@Param("ew") Wrapper<XinchoujiluEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<XinchoujiluEntity> wrapper);

	List<Map<String, Object>> selectGroup(Map<String, Object> params,Wrapper<XinchoujiluEntity> wrapper);

	List<XinchoujiluEntity> queryAll(XinchoujiluEntity xinchoujilu);
}

