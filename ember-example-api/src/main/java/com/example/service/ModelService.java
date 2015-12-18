package com.example.service;

import com.example.entity.Model;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

/**
 * Created by bangnl on 11/20/15.
 */
public interface ModelService<T extends Model> {

    /**
     * save a instance Model
     *
     * @param t
     * @return
     */
    T save(T t);

    /**
     * update a instance Model
     *
     * @param t
     * @return
     */
    T update(T t, Long id);

    /**
     * delete a instance Model
     *
     * @param id
     * @return
     */
    boolean delete(Long id);

    /**
     * get a instance Model by id
     *
     * @param id
     * @return
     */
    T get(Long id);

    /**
     *get all install Model
     *
     * @return
     */
    Page<T> getAll(int page);

    /**
     *
     */
    Page<T> getAll(Pageable pageable);

}
