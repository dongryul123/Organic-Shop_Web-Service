package com.example.demo.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;

import com.example.demo.vo.ProductVO;
import com.example.demo.vo.UserVO;

@Mapper
public interface MainMapper {
	List<ProductVO> productList();
	//UserVO fetchUserByID(int id);
	//void updateUser(UserVO user);
	void insertProduct(ProductVO product);
	//void deleteUser(int id);
	
}
