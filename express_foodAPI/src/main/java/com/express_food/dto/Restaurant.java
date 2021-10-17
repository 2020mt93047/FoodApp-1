package com.express_food.dto;

import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "foodItems")
public class Restaurant {
	
	@Field("_id")
	private String _id;
	
	@Field("name")
	private String name;
	
	@Field("id")
	private String restaurantId;
	
	@Field("location")
	private String location;
	
	@Field("menu")
	private List<Category> menu;

	public String get_id() {
		return _id;
	}

	public void set_id(String _id) {
		this._id = _id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getRestaurantId() {
		return restaurantId;
	}

	public void setRestaurantId(String restaurantId) {
		this.restaurantId = restaurantId;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public List<Category> getMenu() {
		return menu;
	}

	public void setMenu(List<Category> menu) {
		this.menu = menu;
	}

}
