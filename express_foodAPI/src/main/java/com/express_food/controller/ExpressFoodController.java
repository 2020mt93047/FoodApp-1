package com.express_food.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.express_food.dto.ResponseMsg;
import com.express_food.dto.UsersDTO;
import com.express_food.repository.FoodItemRepository;
import com.express_food.repository.UsersRepository;
import com.express_food.service.MongoUserDetailsService;

@RestController
@CrossOrigin(origins = "*")
public class ExpressFoodController {
	
	@Autowired
	FoodItemRepository foodItemRepository;
	
	@Autowired
	UsersRepository usersRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private MongoUserDetailsService mongoUserDetailsService;
	
	@GetMapping("/getAllMenu")
	public @ResponseBody List getAllItems(){
		return foodItemRepository.findAll();		
	}
	
	@PostMapping(value="/register", consumes = "application/json", produces = "application/json")
	public ResponseMsg registerUser(@RequestBody UsersDTO user) {
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		if(mongoUserDetailsService.checkDuplicate(user).equals("NO_DUPLICATE")) {
			usersRepository.save(user) ;
			return new ResponseMsg("SUCCESS");
		}
		else {
			return new ResponseMsg("DUPLICATE_USER");
		}
	}
	
	@PostMapping(path= "/validateLogin", produces = "application/json", consumes = "application/json")
	public ResponseMsg validateLogin(@RequestBody UsersDTO userDTO) {
		return mongoUserDetailsService.validateUser(userDTO);
	}
	

}
