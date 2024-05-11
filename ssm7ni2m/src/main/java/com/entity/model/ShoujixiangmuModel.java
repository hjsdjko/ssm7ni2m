package com.entity.model;

import com.entity.ShoujixiangmuEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;
import org.springframework.format.annotation.DateTimeFormat;
import java.io.Serializable;
 

/**
 * 手机项目
 * 接收传参的实体类  
 *（实际开发中配合移动端接口开发手动去掉些没用的字段， 后端一般用entity就够用了） 
 * 取自ModelAndView 的model名称
 * @author 
 * @email 
 * @date 2022-02-14 10:43:33
 */
public class ShoujixiangmuModel  implements Serializable {
	private static final long serialVersionUID = 1L;

	 			
	/**
	 * 项目类型
	 */
	
	private String xiangmuleixing;
		
	/**
	 * 项目图片
	 */
	
	private String xiangmutupian;
		
	/**
	 * 项目状态
	 */
	
	private String xiangmuzhuangtai;
		
	/**
	 * 缺陷数量
	 */
	
	private Integer quexianshuliang;
		
	/**
	 * 项目信息
	 */
	
	private String xiangmuxinxi;
		
	/**
	 * 更新日期
	 */
		
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat 
	private Date gengxinriqi;
		
	/**
	 * 用户名
	 */
	
	private String yonghuming;
		
	/**
	 * 是否审核
	 */
	
	private String sfsh;
		
	/**
	 * 审核回复
	 */
	
	private String shhf;
		
	/**
	 * 用户id
	 */
	
	private Long userid;
				
	
	/**
	 * 设置：项目类型
	 */
	 
	public void setXiangmuleixing(String xiangmuleixing) {
		this.xiangmuleixing = xiangmuleixing;
	}
	
	/**
	 * 获取：项目类型
	 */
	public String getXiangmuleixing() {
		return xiangmuleixing;
	}
				
	
	/**
	 * 设置：项目图片
	 */
	 
	public void setXiangmutupian(String xiangmutupian) {
		this.xiangmutupian = xiangmutupian;
	}
	
	/**
	 * 获取：项目图片
	 */
	public String getXiangmutupian() {
		return xiangmutupian;
	}
				
	
	/**
	 * 设置：项目状态
	 */
	 
	public void setXiangmuzhuangtai(String xiangmuzhuangtai) {
		this.xiangmuzhuangtai = xiangmuzhuangtai;
	}
	
	/**
	 * 获取：项目状态
	 */
	public String getXiangmuzhuangtai() {
		return xiangmuzhuangtai;
	}
				
	
	/**
	 * 设置：缺陷数量
	 */
	 
	public void setQuexianshuliang(Integer quexianshuliang) {
		this.quexianshuliang = quexianshuliang;
	}
	
	/**
	 * 获取：缺陷数量
	 */
	public Integer getQuexianshuliang() {
		return quexianshuliang;
	}
				
	
	/**
	 * 设置：项目信息
	 */
	 
	public void setXiangmuxinxi(String xiangmuxinxi) {
		this.xiangmuxinxi = xiangmuxinxi;
	}
	
	/**
	 * 获取：项目信息
	 */
	public String getXiangmuxinxi() {
		return xiangmuxinxi;
	}
				
	
	/**
	 * 设置：更新日期
	 */
	 
	public void setGengxinriqi(Date gengxinriqi) {
		this.gengxinriqi = gengxinriqi;
	}
	
	/**
	 * 获取：更新日期
	 */
	public Date getGengxinriqi() {
		return gengxinriqi;
	}
				
	
	/**
	 * 设置：用户名
	 */
	 
	public void setYonghuming(String yonghuming) {
		this.yonghuming = yonghuming;
	}
	
	/**
	 * 获取：用户名
	 */
	public String getYonghuming() {
		return yonghuming;
	}
				
	
	/**
	 * 设置：是否审核
	 */
	 
	public void setSfsh(String sfsh) {
		this.sfsh = sfsh;
	}
	
	/**
	 * 获取：是否审核
	 */
	public String getSfsh() {
		return sfsh;
	}
				
	
	/**
	 * 设置：审核回复
	 */
	 
	public void setShhf(String shhf) {
		this.shhf = shhf;
	}
	
	/**
	 * 获取：审核回复
	 */
	public String getShhf() {
		return shhf;
	}
				
	
	/**
	 * 设置：用户id
	 */
	 
	public void setUserid(Long userid) {
		this.userid = userid;
	}
	
	/**
	 * 获取：用户id
	 */
	public Long getUserid() {
		return userid;
	}
			
}
