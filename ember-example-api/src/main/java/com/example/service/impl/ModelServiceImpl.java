package com.example.service.impl;

import com.example.entity.Model;
import com.example.service.ModelService;
import com.example.until.PageEnum;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.scheduling.annotation.Async;

import java.util.Date;

/**
 * Created by bangnl on 11/20/15.
 */
public class ModelServiceImpl<T extends Model> implements ModelService<T> {


    private final JpaRepository<T, Long> repository;

    ModelServiceImpl(JpaRepository<T, Long> repository) {
        this.repository = repository;
    }

    @Override
    public T save(T t) {
        if (t == null) {
            throw new IllegalArgumentException("Model unavailable");
        }
        t.setCreateDate(new Date());
        t.setUpdateDate(new Date());
        return repository.save(t);
    }

    @Override
    public T update(T t, Long id) {
        if (t == null) {
            throw new IllegalArgumentException("Model unavailable");
        }
        t.setId(id);
        t.setUpdateDate(new Date());
        return repository.save(t);
    }

    @Override
    public boolean delete(Long id) {
        if (id == null && id.longValue() == 0) {
            throw new IllegalArgumentException("Id unavailable");
        }
        repository.delete(id);
        T t = repository.getOne(id);
        return true;
    }

    @Override
    public T get(Long id) {
        if (id == null || id.longValue() == 0) {
            throw new IllegalArgumentException("Id unavailable");
        }

        return repository.findOne(id);
    }

    @Override
    public Page<T> getAll(int page) {

        Pageable pageable = PageEnum.PAGEABLE_SORT_BY_UPDATE_DATE.getPageable(page);
        return getAll(pageable);
    }

    @Override
    public Page<T> getAll(Pageable pageable) {
        return repository.findAll(pageable);
    }


}
