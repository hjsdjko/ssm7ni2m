package com.entity.view;

import com.entity.QuexiangongzuoEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 缺陷工作
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2022-02-14 10:43:33
 */
@TableName("quexiangongzuo")
public class QuexiangongzuoView  extends QuexiangongzuoEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public QuexiangongzuoView(){
	}
 
 	public QuexiangongzuoView(QuexiangongzuoEntity quexiangongzuoEntity){
 	try {
			BeanUtils.copyProperties(this, quexiangongzuoEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
