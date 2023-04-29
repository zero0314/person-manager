package com.dao;

import com.entity.YuangongqiandaoEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.YuangongqiandaoVO;
import com.entity.view.YuangongqiandaoView;


/**
 * 员工签到
 * 
 * @author 
 * @email 
 * @date 2023-03-10 18:22:47
 */
public interface YuangongqiandaoDao extends BaseMapper<YuangongqiandaoEntity> {
	
	List<YuangongqiandaoVO> selectListVO(@Param("ew") Wrapper<YuangongqiandaoEntity> wrapper);
	
	YuangongqiandaoVO selectVO(@Param("ew") Wrapper<YuangongqiandaoEntity> wrapper);
	
	List<YuangongqiandaoView> selectListView(@Param("ew") Wrapper<YuangongqiandaoEntity> wrapper);

	List<YuangongqiandaoView> selectListView(Pagination page,@Param("ew") Wrapper<YuangongqiandaoEntity> wrapper);
	
	YuangongqiandaoView selectView(@Param("ew") Wrapper<YuangongqiandaoEntity> wrapper);
	

}
