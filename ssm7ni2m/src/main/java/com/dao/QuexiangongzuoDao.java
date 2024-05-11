package com.dao;

import com.entity.QuexiangongzuoEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.QuexiangongzuoVO;
import com.entity.view.QuexiangongzuoView;


/**
 * 缺陷工作
 * 
 * @author 
 * @email 
 * @date 2022-02-14 10:43:33
 */
public interface QuexiangongzuoDao extends BaseMapper<QuexiangongzuoEntity> {
	
	List<QuexiangongzuoVO> selectListVO(@Param("ew") Wrapper<QuexiangongzuoEntity> wrapper);
	
	QuexiangongzuoVO selectVO(@Param("ew") Wrapper<QuexiangongzuoEntity> wrapper);
	
	List<QuexiangongzuoView> selectListView(@Param("ew") Wrapper<QuexiangongzuoEntity> wrapper);

	List<QuexiangongzuoView> selectListView(Pagination page,@Param("ew") Wrapper<QuexiangongzuoEntity> wrapper);
	
	QuexiangongzuoView selectView(@Param("ew") Wrapper<QuexiangongzuoEntity> wrapper);
	

    List<Map<String, Object>> selectValue(@Param("params")Map<String, Object> params,@Param("ew") Wrapper<QuexiangongzuoEntity> wrapper);

    List<Map<String, Object>> selectTimeStatValue(@Param("params") Map<String, Object> params,@Param("ew") Wrapper<QuexiangongzuoEntity> wrapper);

    List<Map<String, Object>> selectGroup(@Param("params") Map<String, Object> params,@Param("ew") Wrapper<QuexiangongzuoEntity> wrapper);
}
