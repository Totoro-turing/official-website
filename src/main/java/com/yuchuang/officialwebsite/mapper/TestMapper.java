package com.yuchuang.officialwebsite.mapper;

import com.yuchuang.officialwebsite.bean.Test;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;
@Mapper
public interface TestMapper {
    @Select("select * from ty")
    public List<Test> getTest();
}
