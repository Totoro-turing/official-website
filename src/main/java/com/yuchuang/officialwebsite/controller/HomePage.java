package com.yuchuang.officialwebsite.controller;

import com.yuchuang.officialwebsite.bean.Test;
import com.yuchuang.officialwebsite.mapper.TestMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class HomePage {

    @Autowired
    TestMapper mapper;

    @RequestMapping("/home")
    public List<Test> getIndex() {
        return mapper.getTest();
    }

}
