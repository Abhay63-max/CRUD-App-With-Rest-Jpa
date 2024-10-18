package com.example.rest_jpa.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.rest_jpa.model.User;
import com.example.rest_jpa.service.UserService;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api")
public class UserController {

	private final UserService userService;
	
	public UserController(UserService userService) {
		this.userService=userService;
	}
	
	@PostMapping("/adduser")
	public User addUser(@RequestBody User user) {
		userService.addUser(user);
		return user;
	}
	@GetMapping("/users")
	public List<User> getAllUsers(){
		return userService.getAllUsers();
	}
	@PatchMapping("/updateuser")
	public User updateUser(@RequestBody User user){	
		userService.updateUser(user);
		return user;
	}
	@DeleteMapping("/deleteuser/{id}")
	public ResponseEntity<Map<String,String>> deleteUser(@PathVariable Long id){
		userService.deleteUser(id);
		Map<String,String> response= new HashMap<>();
		response.put("message","User deleted Successfully");
		return new ResponseEntity<>(response,HttpStatus.OK);
	}
	
}
