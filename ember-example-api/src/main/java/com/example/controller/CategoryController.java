package com.example.controller;

import com.example.entity.Category;
import com.example.entity.Item;
import com.example.service.CategoryService;
import com.example.service.ItemService;
import com.example.until.EmberBuilder;
import com.example.wrapper.CategoryWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

/**
 * Created by bangnl on 11/21/15.
 */
@RestController
@RequestMapping("/categories")
public class CategoryController {


    @Autowired
    private CategoryService categoryService;


    @RequestMapping
    public EmberBuilder getAll(@RequestParam(defaultValue = "0") int page,
                               @RequestParam(defaultValue = "") String keyword){
        Page<Category> categories = categoryService.getAll(page, keyword);
        return new EmberBuilder.Builder<Category>(Category.class, categories).build();
    }



    @RequestMapping("/{id}")
    public EmberBuilder get(@PathVariable Long id){
        return new EmberBuilder.Builder<Category>(categoryService.get(id)).build();
    }

    @RequestMapping(method = RequestMethod.POST)
    public  EmberBuilder  saveCategory(@RequestBody CategoryWrapper wrapper){
        return new EmberBuilder.Builder<Category>(categoryService.save(wrapper.getCategory())).build();
    }


    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public EmberBuilder updateCategory(@RequestBody CategoryWrapper wrapper, @PathVariable Long id){
        return new EmberBuilder.Builder<Category>(categoryService.update(wrapper.getCategory(), id)).build();
    }


    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public boolean deleteCategory(@PathVariable Long id){
        return categoryService.delete(id);
    }
}
