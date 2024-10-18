package com.example.rest_jpa.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.rest_jpa.model.User;
import com.example.rest_jpa.repository.UserRepository;

@Service
public class UserService{
	
	private final UserRepository userRepository;
	
	public UserService(UserRepository userRepository) {
		this.userRepository= userRepository;
	}
	
	public void addUser(User user) {
		userRepository.save(user);
	}
	public List<User> getAllUsers(){
		return userRepository.findAll();
	}
	public User getUserById(Long id) {
		return userRepository.findById(id).orElseThrow(()-> new RuntimeException("User not found"));
	}
	
	public void updateUser(User user) {
	User existingUser= getUserById(user.getId());
	existingUser.setName(user.getName());
	existingUser.setEmail(user.getEmail());
	existingUser.setPassword(user.getPassword());
	userRepository.save(existingUser);
	}
	public void deleteUser(Long id) {
		User user = getUserById(id);
		userRepository.delete(user);
	}
}