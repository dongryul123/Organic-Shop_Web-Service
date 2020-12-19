package com.example.demo.vo;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import lombok.*;


@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
@Data
public class ProductVO {
	int id;
	String name;
	int price;
	int category_id;
	int on_sale;
	int on_discount;
	String img_path;
}
