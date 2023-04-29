package com.dao;

import com.entity.PeixunxuexiEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.PeixunxuexiVO;
import com.entity.view.PeixunxuexiView;


/**
 * 培训学习
 * 
 * @author 
 * @email 
 * @date 2023-03-10 18:22:47
 */
public interface PeixunxuexiDao extends BaseMapper<PeixunxuexiEntity> {
	
	List<PeixunxuexiVO> selectListVO(@Param("ew") Wrapper<PeixunxuexiEntity> wrapper);
	
	PeixunxuexiVO selectVO(@Param("ew") Wrapper<PeixunxuexiEntity> wrapper);
	
	List<PeixunxuexiView> selectListView(@Param("ew") Wrapper<PeixunxuexiEntity> wrapper);

	List<PeixunxuexiView> selectListView(Pagination page,@Param("ew") Wrapper<PeixunxuexiEntity> wrapper);
	
	PeixunxuexiView selectView(@Param("ew") Wrapper<PeixunxuexiEntity> wrapper);
	

}
