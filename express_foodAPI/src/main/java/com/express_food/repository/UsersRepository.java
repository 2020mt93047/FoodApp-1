package com.express_food.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.express_food.dto.UsersDTO;

public interface UsersRepository extends MongoRepository<UsersDTO, String> {
	
	UsersDTO findByUsername(String username);
}
