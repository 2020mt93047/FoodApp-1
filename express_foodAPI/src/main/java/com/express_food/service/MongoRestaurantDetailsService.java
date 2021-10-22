package com.express_food.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

import com.express_food.dto.Category;
import com.express_food.dto.Restaurant;
import com.express_food.repository.FoodItemRepository;

@Component
public class MongoRestaurantDetailsService {
	@Autowired
	private FoodItemRepository foodItemRepository;
	
	
	
	public List<Category> findMenuOfRestaurants(String restaurantId){
		
		Optional<Restaurant> restaurant = foodItemRepository.findByRestaurantId(restaurantId);
		return restaurant.get().getMenu();
	}

}
