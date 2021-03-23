package com.spring.boot.rocks.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.boot.rocks.model.AppUser;

@Repository
public interface AppUserJPARepository extends JpaRepository<AppUser, Long> {

	
}
