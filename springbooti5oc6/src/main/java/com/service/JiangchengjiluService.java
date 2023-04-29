package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.JiangchengjiluEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.JiangchengjiluVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.JiangchengjiluView;


/**
 * 奖惩记录
 *
 * @author 
 * @email 
 * @date 2023-03-10 18:22:47
 */
public interface JiangchengjiluService extends IService<JiangchengjiluEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<JiangchengjiluVO> selectListVO(Wrapper<JiangchengjiluEntity> wrapper);
   	
   	JiangchengjiluVO selectVO(@Param("ew") Wrapper<JiangchengjiluEntity> wrapper);
   	
   	List<JiangchengjiluView> selectListView(Wrapper<JiangchengjiluEntity> wrapper);
   	
   	JiangchengjiluView selectView(@Param("ew") Wrapper<JiangchengjiluEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<JiangchengjiluEntity> wrapper);
   	

}

