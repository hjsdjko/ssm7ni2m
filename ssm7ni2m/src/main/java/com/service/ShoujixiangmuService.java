package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.ShoujixiangmuEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.ShoujixiangmuVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.ShoujixiangmuView;


/**
 * 手机项目
 *
 * @author 
 * @email 
 * @date 2022-02-14 10:43:33
 */
public interface ShoujixiangmuService extends IService<ShoujixiangmuEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<ShoujixiangmuVO> selectListVO(Wrapper<ShoujixiangmuEntity> wrapper);
   	
   	ShoujixiangmuVO selectVO(@Param("ew") Wrapper<ShoujixiangmuEntity> wrapper);
   	
   	List<ShoujixiangmuView> selectListView(Wrapper<ShoujixiangmuEntity> wrapper);
   	
   	ShoujixiangmuView selectView(@Param("ew") Wrapper<ShoujixiangmuEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<ShoujixiangmuEntity> wrapper);
   	

    List<Map<String, Object>> selectValue(Map<String, Object> params,Wrapper<ShoujixiangmuEntity> wrapper);

    List<Map<String, Object>> selectTimeStatValue(Map<String, Object> params,Wrapper<ShoujixiangmuEntity> wrapper);

    List<Map<String, Object>> selectGroup(Map<String, Object> params,Wrapper<ShoujixiangmuEntity> wrapper);
}

