package com.dao;

import com.entity.ShoujixiangmuEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.ShoujixiangmuVO;
import com.entity.view.ShoujixiangmuView;


/**
 * 手机项目
 * 
 * @author 
 * @email 
 * @date 2022-02-14 10:43:33
 */
public interface ShoujixiangmuDao extends BaseMapper<ShoujixiangmuEntity> {
	
	List<ShoujixiangmuVO> selectListVO(@Param("ew") Wrapper<ShoujixiangmuEntity> wrapper);
	
	ShoujixiangmuVO selectVO(@Param("ew") Wrapper<ShoujixiangmuEntity> wrapper);
	
	List<ShoujixiangmuView> selectListView(@Param("ew") Wrapper<ShoujixiangmuEntity> wrapper);

	List<ShoujixiangmuView> selectListView(Pagination page,@Param("ew") Wrapper<ShoujixiangmuEntity> wrapper);
	
	ShoujixiangmuView selectView(@Param("ew") Wrapper<ShoujixiangmuEntity> wrapper);
	

    List<Map<String, Object>> selectValue(@Param("params")Map<String, Object> params,@Param("ew") Wrapper<ShoujixiangmuEntity> wrapper);

    List<Map<String, Object>> selectTimeStatValue(@Param("params") Map<String, Object> params,@Param("ew") Wrapper<ShoujixiangmuEntity> wrapper);

    List<Map<String, Object>> selectGroup(@Param("params") Map<String, Object> params,@Param("ew") Wrapper<ShoujixiangmuEntity> wrapper);
}
