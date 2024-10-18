package com.example.rest_jpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.rest_jpa.model.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {

	
	
}
