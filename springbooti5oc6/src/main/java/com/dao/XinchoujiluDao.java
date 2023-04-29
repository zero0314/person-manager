package com.dao;

import com.entity.XinchoujiluEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.XinchoujiluVO;
import com.entity.view.XinchoujiluView;


/**
 * 薪酬记录
 * 
 * @author 
 * @email 
 * @date 2023-03-10 18:22:47
 */
public interface XinchoujiluDao extends BaseMapper<XinchoujiluEntity> {
	
	List<XinchoujiluVO> selectListVO(@Param("ew") Wrapper<XinchoujiluEntity> wrapper);
	
	XinchoujiluVO selectVO(@Param("ew") Wrapper<XinchoujiluEntity> wrapper);
	
	List<XinchoujiluView> selectListView(@Param("ew") Wrapper<XinchoujiluEntity> wrapper);

	List<XinchoujiluView> selectListView(Pagination page,@Param("ew") Wrapper<XinchoujiluEntity> wrapper);
	
	XinchoujiluView selectView(@Param("ew") Wrapper<XinchoujiluEntity> wrapper);

	List<Map<String, Object>> selectGroup(@Param("params") Map<String, Object> params,@Param("ew") Wrapper<XinchoujiluEntity> wrapper);

	List<XinchoujiluEntity> queryAll(XinchoujiluEntity xinchoujilu);

}
