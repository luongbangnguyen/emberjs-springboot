package com.example.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.example.entity.Category;
import com.example.entity.Model;

/**
 * Created by bangnl on 11/20/15.
 */
public interface CategoryService extends ModelService<Category>{
    Page<Category> getAll(int page, String keyword);
}
