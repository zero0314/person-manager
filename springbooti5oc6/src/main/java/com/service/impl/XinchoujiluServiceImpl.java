package com.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.List;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.utils.PageUtils;
import com.utils.Query;


import com.dao.XinchoujiluDao;
import com.entity.XinchoujiluEntity;
import com.service.XinchoujiluService;
import com.entity.vo.XinchoujiluVO;
import com.entity.view.XinchoujiluView;

import javax.annotation.Resource;

@Service("xinchoujiluService")
public class XinchoujiluServiceImpl extends ServiceImpl<XinchoujiluDao, XinchoujiluEntity> implements XinchoujiluService {

	@Resource
	private XinchoujiluDao xinchoujiluDao;
	
    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<XinchoujiluEntity> page = this.selectPage(
                new Query<XinchoujiluEntity>(params).getPage(),
                new EntityWrapper<XinchoujiluEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<XinchoujiluEntity> wrapper) {
		  Page<XinchoujiluView> page =new Query<XinchoujiluView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<XinchoujiluVO> selectListVO(Wrapper<XinchoujiluEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public XinchoujiluVO selectVO(Wrapper<XinchoujiluEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<XinchoujiluView> selectListView(Wrapper<XinchoujiluEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public XinchoujiluView selectView(Wrapper<XinchoujiluEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}




	@Override
	public List<Map<String, Object>> selectGroup(Map<String, Object> params, Wrapper<XinchoujiluEntity> wrapper) {
		return baseMapper.selectGroup(params, wrapper);
	}

	/**
	 * @param xinchoujilu
	 * @return
	 */
	@Override
	public List<XinchoujiluEntity> queryAll(XinchoujiluEntity xinchoujilu) {
		return xinchoujiluDao.queryAll(xinchoujilu);
	}


}
