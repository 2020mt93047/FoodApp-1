package com.express_food.dto;

import org.springframework.data.mongodb.core.mapping.Field;

public class Item {
	
	@Field("id")
	private String id;
	
	private String text;
	private String type;
	private int price;
	
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	
	
	@Override
	public String toString() {
		return "Item [id=" + id + ", text=" + text + ", type=" + type + ", price=" + price + "]";
	}
	
	

}
