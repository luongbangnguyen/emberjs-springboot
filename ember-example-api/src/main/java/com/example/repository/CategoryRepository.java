package com.example.repository;

import com.example.entity.Category;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by bangnl on 11/20/15.
 */
public interface CategoryRepository extends JpaRepository<Category, Long>{
	Page<Category> findByNameContainingIgnoreCase(String name, Pageable pageable);
}
