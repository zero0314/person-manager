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


import com.dao.YuangongqiandaoDao;
import com.entity.YuangongqiandaoEntity;
import com.service.YuangongqiandaoService;
import com.entity.vo.YuangongqiandaoVO;
import com.entity.view.YuangongqiandaoView;

@Service("yuangongqiandaoService")
public class YuangongqiandaoServiceImpl extends ServiceImpl<YuangongqiandaoDao, YuangongqiandaoEntity> implements YuangongqiandaoService {
	
	
    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<YuangongqiandaoEntity> page = this.selectPage(
                new Query<YuangongqiandaoEntity>(params).getPage(),
                new EntityWrapper<YuangongqiandaoEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<YuangongqiandaoEntity> wrapper) {
		  Page<YuangongqiandaoView> page =new Query<YuangongqiandaoView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<YuangongqiandaoVO> selectListVO(Wrapper<YuangongqiandaoEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public YuangongqiandaoVO selectVO(Wrapper<YuangongqiandaoEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<YuangongqiandaoView> selectListView(Wrapper<YuangongqiandaoEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public YuangongqiandaoView selectView(Wrapper<YuangongqiandaoEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}
