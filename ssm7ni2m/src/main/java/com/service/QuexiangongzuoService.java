package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.QuexiangongzuoEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.QuexiangongzuoVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.QuexiangongzuoView;


/**
 * 缺陷工作
 *
 * @author 
 * @email 
 * @date 2022-02-14 10:43:33
 */
public interface QuexiangongzuoService extends IService<QuexiangongzuoEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<QuexiangongzuoVO> selectListVO(Wrapper<QuexiangongzuoEntity> wrapper);
   	
   	QuexiangongzuoVO selectVO(@Param("ew") Wrapper<QuexiangongzuoEntity> wrapper);
   	
   	List<QuexiangongzuoView> selectListView(Wrapper<QuexiangongzuoEntity> wrapper);
   	
   	QuexiangongzuoView selectView(@Param("ew") Wrapper<QuexiangongzuoEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<QuexiangongzuoEntity> wrapper);
   	

    List<Map<String, Object>> selectValue(Map<String, Object> params,Wrapper<QuexiangongzuoEntity> wrapper);

    List<Map<String, Object>> selectTimeStatValue(Map<String, Object> params,Wrapper<QuexiangongzuoEntity> wrapper);

    List<Map<String, Object>> selectGroup(Map<String, Object> params,Wrapper<QuexiangongzuoEntity> wrapper);
}

