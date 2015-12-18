package com.example.initdata;

import com.example.entity.Category;
import com.example.entity.Item;
import com.example.service.CategoryService;
import com.example.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by bangnl on 11/21/15.
 */

@Configuration
public class ItemDataInit {



    @Bean
    CommandLineRunner intDataItem(ItemService itemService, CategoryService categoryService) {

        return (args) -> {
            List<Category> categories = new ArrayList<>();
            for (int i = 0; i < 100; i++) {
                Category category = new Category();
                category.setName("Category"+i);
                categoryService.save(category);
                categories.add(category);
            }
            int j = 0;
            for(Category category : categories){
               for(int i = 0; i < 100; i++){
                   Item item = new Item("Item"+i*j,23000d + i*j, 23+i*j, category);
                   itemService.save(item);
                   j++;
               }
            }
        };
    }
}
