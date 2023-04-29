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


import com.dao.PeixunxuexiDao;
import com.entity.PeixunxuexiEntity;
import com.service.PeixunxuexiService;
import com.entity.vo.PeixunxuexiVO;
import com.entity.view.PeixunxuexiView;

@Service("peixunxuexiService")
public class PeixunxuexiServiceImpl extends ServiceImpl<PeixunxuexiDao, PeixunxuexiEntity> implements PeixunxuexiService {
	
	
    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<PeixunxuexiEntity> page = this.selectPage(
                new Query<PeixunxuexiEntity>(params).getPage(),
                new EntityWrapper<PeixunxuexiEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<PeixunxuexiEntity> wrapper) {
		  Page<PeixunxuexiView> page =new Query<PeixunxuexiView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<PeixunxuexiVO> selectListVO(Wrapper<PeixunxuexiEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public PeixunxuexiVO selectVO(Wrapper<PeixunxuexiEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<PeixunxuexiView> selectListView(Wrapper<PeixunxuexiEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public PeixunxuexiView selectView(Wrapper<PeixunxuexiEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}
