package com.example.service.impl;

import com.example.entity.Item;
import com.example.repository.ItemRepository;
import com.example.service.ItemService;
import com.example.until.PageEnum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by bangl on 11/20/15.
 */
@Service
@Transactional
public class ItemServiceImpl extends ModelServiceImpl<Item> implements ItemService{

    private final ItemRepository itemRepository;

    @Autowired
    ItemServiceImpl(ItemRepository repository){
        super(repository);
        this.itemRepository = repository;
    }

    @Override
    public Page<Item> getItemByCatetory(Long categoryId, Integer page) {
    	
    	if(categoryId == null || categoryId == 0){
    		throw new IllegalArgumentException("Id not match");
    	}
    	Pageable pageable = PageEnum.PAGEABLE_SORT_BY_UPDATE_DATE.getPageable(page);
        return itemRepository.findByCategoryId(categoryId, pageable);
    }
}
