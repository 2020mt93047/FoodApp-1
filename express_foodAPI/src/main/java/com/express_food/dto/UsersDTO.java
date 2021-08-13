package com.express_food.dto;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class UsersDTO {

	@Id
	private ObjectId id;

	private String username;
	private String password;

	public UsersDTO() {}

	public UsersDTO(ObjectId id, String username, String password) {
	    this.id = id;
	    this.username = username;
	    this.password = password;
	  }

	public void setId(ObjectId id) {
		this.id = id;
	}

	public String getId() {
		return this.id.toHexString();
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPassword() {
		return password;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getUsername() {
		return username;
	}

}
