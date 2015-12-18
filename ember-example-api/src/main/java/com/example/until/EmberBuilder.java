package com.example.until;

import com.google.common.base.CaseFormat;
import org.atteo.evo.inflector.English;
import org.springframework.data.domain.Page;
import org.springframework.util.Assert;
import org.springframework.validation.annotation.Validated;

import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by bangnl on 11/23/15.
 */
public class EmberBuilder extends HashMap<String, Object> {

    private EmberBuilder(){}


    public static class Builder<T> implements Build<EmberBuilder>{

        private final Map<String, Object> data = new HashMap<>();
        private final Map<String, Object> meta = new HashMap<>();

        private Builder() {
        }

        public Builder(T t) {
            addData(t);
        }

        public Builder(Class clazz, Collection<T> collections) {
            addData(clazz, collections);
        }

        public Builder(Class clazz, Page<T> page){
            addData(clazz, page);
        }

        public Builder<T> addData(T t) {
            Assert.notNull(t);
            data.put(getClassName(t.getClass()), t);
            return this;
        }

        public Builder<T> addData(Class<T> clazz, Collection<T> collections) {
            Assert.notNull(clazz);
            data.put(getClassNamePlural(clazz), collections);
            return this;
        }

        public Builder<T> addData(Class<T> clazz, Page<T> page){
            addData(clazz, page.getContent());
            addMeta(PageUntil.getMetaEmber(page));
            return this;
        }

        public Builder<T> addMeta(Map<String, Object> value) {
            meta.put("meta", value);
            data.putAll(meta);
            return this;
        }

        public String getClassName(Class<?> clazz) {
            Assert.notNull(clazz);
            return CaseFormat.UPPER_CAMEL.to(CaseFormat.LOWER_CAMEL, clazz.getSimpleName());
        }

        public String getClassNamePlural(Class<?> clazz) {
            Assert.notNull(clazz);
            return English.plural(getClassName(clazz));
        }

        @Override
        public EmberBuilder build() {
            EmberBuilder emberBuilder = new EmberBuilder();
            emberBuilder.putAll(data);
            return emberBuilder;
        }
    }

}
