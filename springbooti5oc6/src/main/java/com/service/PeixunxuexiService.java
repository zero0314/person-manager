package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.PeixunxuexiEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.PeixunxuexiVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.PeixunxuexiView;


/**
 * 培训学习
 *
 * @author 
 * @email 
 * @date 2023-03-10 18:22:47
 */
public interface PeixunxuexiService extends IService<PeixunxuexiEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<PeixunxuexiVO> selectListVO(Wrapper<PeixunxuexiEntity> wrapper);
   	
   	PeixunxuexiVO selectVO(@Param("ew") Wrapper<PeixunxuexiEntity> wrapper);
   	
   	List<PeixunxuexiView> selectListView(Wrapper<PeixunxuexiEntity> wrapper);
   	
   	PeixunxuexiView selectView(@Param("ew") Wrapper<PeixunxuexiEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<PeixunxuexiEntity> wrapper);
   	

}

