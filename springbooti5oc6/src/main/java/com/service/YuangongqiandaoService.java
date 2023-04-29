package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.YuangongqiandaoEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.YuangongqiandaoVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.YuangongqiandaoView;


/**
 * 员工签到
 *
 * @author 
 * @email 
 * @date 2023-03-10 18:22:47
 */
public interface YuangongqiandaoService extends IService<YuangongqiandaoEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<YuangongqiandaoVO> selectListVO(Wrapper<YuangongqiandaoEntity> wrapper);
   	
   	YuangongqiandaoVO selectVO(@Param("ew") Wrapper<YuangongqiandaoEntity> wrapper);
   	
   	List<YuangongqiandaoView> selectListView(Wrapper<YuangongqiandaoEntity> wrapper);
   	
   	YuangongqiandaoView selectView(@Param("ew") Wrapper<YuangongqiandaoEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<YuangongqiandaoEntity> wrapper);
   	

}

