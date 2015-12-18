package com.example.until;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import com.example.constant.ConstantSystem;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by bangnl on 11/24/15.
 */
public class PageUntil {
	public static final int PAGE_DEFAULT = 10;
	
    public static <T> Map<String, Object> getMetaEmber(Page<T> page){
        Map<String, Object> result = new HashMap<>();
        result.put("totalElements",page.getTotalElements());
        result.put("totalPages", page.getTotalPages());
        result.put("number",page.getNumber());
        result.put("numberOfElements",page.getNumberOfElements());
        return result;
    }
    public static int getPage(int page){
        return page < 0 ? 0 : page;
    }
}
