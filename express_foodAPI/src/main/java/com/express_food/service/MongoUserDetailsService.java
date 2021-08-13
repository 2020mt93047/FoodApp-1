package com.express_food.service;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.express_food.dto.ResponseMsg;
import com.express_food.dto.UsersDTO;
import com.express_food.repository.UsersRepository;

@Component
public class MongoUserDetailsService implements UserDetailsService {

	@Autowired
	private UsersRepository repository;

	@Override
	public UserDetails loadUserByUsername(String username) {
		UsersDTO user = repository.findByUsername(username);

		if (user == null) {
			throw new UsernameNotFoundException("User not found");
		}

		List<SimpleGrantedAuthority> authorities = Arrays.asList(new SimpleGrantedAuthority("user"));

		return new User(user.getUsername(), user.getPassword(), authorities);
	}
	
	public ResponseMsg validateUser(UsersDTO user) {
		UsersDTO userToValidate = repository.findByUsername(user.getUsername());
		if(userToValidate == null) {
			return new ResponseMsg("USER_NOT_FOUND");
		}
		else {
			return new ResponseMsg("SUCCESS");
		}
	}
	
	public String checkDuplicate(UsersDTO user) {
		UsersDTO userToValidate = repository.findByUsername(user.getUsername());
		if(userToValidate == null) {
			return "NO_DUPLICATE";
		}		
		else {
			return "DUPLICATE_USER";
		}
	}

}
