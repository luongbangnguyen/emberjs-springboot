package com.example.repository;

import com.example.entity.Category;
import com.example.entity.Item;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by bangnl on 11/20/15.
 */
public interface ItemRepository extends JpaRepository<Item, Long>{
	Page<Item> findByCategoryId(Long categoryId, Pageable pageable);
}
