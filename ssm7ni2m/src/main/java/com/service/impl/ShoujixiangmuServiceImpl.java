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


import com.dao.ShoujixiangmuDao;
import com.entity.ShoujixiangmuEntity;
import com.service.ShoujixiangmuService;
import com.entity.vo.ShoujixiangmuVO;
import com.entity.view.ShoujixiangmuView;

@Service("shoujixiangmuService")
public class ShoujixiangmuServiceImpl extends ServiceImpl<ShoujixiangmuDao, ShoujixiangmuEntity> implements ShoujixiangmuService {
	

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<ShoujixiangmuEntity> page = this.selectPage(
                new Query<ShoujixiangmuEntity>(params).getPage(),
                new EntityWrapper<ShoujixiangmuEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<ShoujixiangmuEntity> wrapper) {
		  Page<ShoujixiangmuView> page =new Query<ShoujixiangmuView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<ShoujixiangmuVO> selectListVO(Wrapper<ShoujixiangmuEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public ShoujixiangmuVO selectVO(Wrapper<ShoujixiangmuEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<ShoujixiangmuView> selectListView(Wrapper<ShoujixiangmuEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public ShoujixiangmuView selectView(Wrapper<ShoujixiangmuEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}

    @Override
    public List<Map<String, Object>> selectValue(Map<String, Object> params, Wrapper<ShoujixiangmuEntity> wrapper) {
        return baseMapper.selectValue(params, wrapper);
    }

    @Override
    public List<Map<String, Object>> selectTimeStatValue(Map<String, Object> params, Wrapper<ShoujixiangmuEntity> wrapper) {
        return baseMapper.selectTimeStatValue(params, wrapper);
    }

    @Override
    public List<Map<String, Object>> selectGroup(Map<String, Object> params, Wrapper<ShoujixiangmuEntity> wrapper) {
        return baseMapper.selectGroup(params, wrapper);
    }

}
