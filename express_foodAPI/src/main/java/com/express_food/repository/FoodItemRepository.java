package com.express_food.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.express_food.dto.Restaurant;

@Repository
public interface FoodItemRepository extends MongoRepository<Restaurant, String> {
	
	Optional<Restaurant> findByRestaurantId(String restaurantId);

}
