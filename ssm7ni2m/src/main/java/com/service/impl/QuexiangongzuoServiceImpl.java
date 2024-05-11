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


import com.dao.QuexiangongzuoDao;
import com.entity.QuexiangongzuoEntity;
import com.service.QuexiangongzuoService;
import com.entity.vo.QuexiangongzuoVO;
import com.entity.view.QuexiangongzuoView;

@Service("quexiangongzuoService")
public class QuexiangongzuoServiceImpl extends ServiceImpl<QuexiangongzuoDao, QuexiangongzuoEntity> implements QuexiangongzuoService {
	

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<QuexiangongzuoEntity> page = this.selectPage(
                new Query<QuexiangongzuoEntity>(params).getPage(),
                new EntityWrapper<QuexiangongzuoEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<QuexiangongzuoEntity> wrapper) {
		  Page<QuexiangongzuoView> page =new Query<QuexiangongzuoView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<QuexiangongzuoVO> selectListVO(Wrapper<QuexiangongzuoEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public QuexiangongzuoVO selectVO(Wrapper<QuexiangongzuoEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<QuexiangongzuoView> selectListView(Wrapper<QuexiangongzuoEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public QuexiangongzuoView selectView(Wrapper<QuexiangongzuoEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}

    @Override
    public List<Map<String, Object>> selectValue(Map<String, Object> params, Wrapper<QuexiangongzuoEntity> wrapper) {
        return baseMapper.selectValue(params, wrapper);
    }

    @Override
    public List<Map<String, Object>> selectTimeStatValue(Map<String, Object> params, Wrapper<QuexiangongzuoEntity> wrapper) {
        return baseMapper.selectTimeStatValue(params, wrapper);
    }

    @Override
    public List<Map<String, Object>> selectGroup(Map<String, Object> params, Wrapper<QuexiangongzuoEntity> wrapper) {
        return baseMapper.selectGroup(params, wrapper);
    }

}
