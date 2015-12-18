package com.example.controller;

import com.example.entity.Item;
import com.example.service.ItemService;
import com.example.until.EmberBuilder;
import com.example.until.PageUntil;
import com.example.wrapper.ItemWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * Created by bangl on 11/20/15.
 */
@RestController
@RequestMapping("/items")
public class ItemController {

    @Autowired
    private ItemService itemService;

    @RequestMapping
    public EmberBuilder getAll(@RequestParam(defaultValue = "0") int page){
        Page<Item> items = itemService.getAll(page);
        return new EmberBuilder.Builder<Item>(Item.class, items).build();
    }

    @RequestMapping("/{id}")
    public EmberBuilder get(@PathVariable Long id){
        return new EmberBuilder.Builder<Item>(itemService.get(id)).build();
    }
    
    @RequestMapping("/category/{id}")
    public EmberBuilder getItemsByCategory( @PathVariable Long id,
    		@RequestParam(defaultValue = "0") int page){
    	
    	Page<Item> items = itemService.getItemByCatetory(id, page);
    	return new EmberBuilder.Builder<Item>(Item.class, items).build();
    }

    @RequestMapping(method = RequestMethod.POST)
    public  EmberBuilder  saveItem(@RequestBody ItemWrapper wrapper){
        return new EmberBuilder.Builder<Item>(itemService.save(wrapper.getItem())).build();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public EmberBuilder updateItem(@RequestBody ItemWrapper wrapper, @PathVariable Long id){
        return new EmberBuilder.Builder<Item>(itemService.update(wrapper.getItem(), id)).build();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public boolean deleteItem(@PathVariable Long id){
       return itemService.delete(id);
    }

    @RequestMapping(value = "/getNewItem")
    public EmberBuilder getNewItem(){
        return new EmberBuilder.Builder<Item>(new Item()).build();
    }

}
