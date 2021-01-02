package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.mapper.MainMapper;
import com.example.demo.vo.ProductVO;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/products")
public class MainController {

	@Autowired
	MainMapper mainMapper;
	
	@GetMapping
	public List<ProductVO> productList(){
		System.out.println(mainMapper.productList());
		System.out.println("Product 리스트 출력");
		return mainMapper.productList();
	}
	
	@PostMapping
	void insertProduct(@RequestBody ProductVO product) {
		mainMapper.insertProduct(product);
		System.out.println("Product 저장 성공");
	}

	@GetMapping("/{id}")
	public ProductVO fetchProductByID(@PathVariable int id) {
		System.out.println(mainMapper.fetchProductByID(id));
		ProductVO fetchUser = mainMapper.fetchProductByID(id);
		return fetchUser;
	}


	
	
}
