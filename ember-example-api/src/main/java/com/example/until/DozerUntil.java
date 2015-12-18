package com.example.until;

import org.dozer.DozerBeanMapper;
import org.dozer.Mapper;

/**
 * Created by bangnl on 12/14/15.
 */
public class DozerUntil {

    public final  static Mapper mapper = new DozerBeanMapper();

    public static <S,T> T copyObject(S source, Class<T> clazz){
      return  mapper.map(source,clazz);
    }


}
