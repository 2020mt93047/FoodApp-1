package com.express_food.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.express_food.dto.Category;

@Repository
public interface FoodItemRepository extends MongoRepository<Category, String> {

}
