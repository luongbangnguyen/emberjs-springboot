package com.example.service;

import com.example.entity.Category;
import com.example.entity.Item;
import com.example.entity.Model;
import org.springframework.data.domain.Page;

/**
 * Created by root on 11/20/15.
 */
public interface ItemService extends ModelService<Item>{
    Page<Item> getItemByCatetory(Long categoryId, Integer page);
    
}
