package com.express_food;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;


@SpringBootApplication
@EnableAutoConfiguration
@ComponentScan("com.express_food")
@EnableMongoRepositories("com.express_food")
public class ExpressFoodApplication {

	public static void main(String[] args) {
		SpringApplication.run(ExpressFoodApplication.class, args);
	}
}
