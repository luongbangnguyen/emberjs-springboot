package com.example.service.impl;

import com.example.entity.Category;
import com.example.repository.CategoryRepository;
import com.example.service.CategoryService;
import com.example.until.PageEnum;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by root on 11/20/15.
 */
@Service
@Transactional
public class CategoryServiceImpl extends ModelServiceImpl<Category> implements CategoryService{

    private final CategoryRepository categoryRepository;

    @Autowired
    CategoryServiceImpl(CategoryRepository repository){
        super(repository);
        this.categoryRepository = repository;
    }

    @Override
    public Page<Category> getAll(int page, String keyword) {
       if(StringUtils.isNotBlank(keyword)){
           return categoryRepository.findByNameContainingIgnoreCase(keyword, PageEnum.PAGEABLE_SORT_BY_NAME.getPageable(page));
       }
       return super.getAll(PageEnum.PAGEABLE_SORT_BY_NAME.getPageable(page));
    }
}
