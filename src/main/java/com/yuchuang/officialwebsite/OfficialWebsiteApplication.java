package com.yuchuang.officialwebsite;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@MapperScan(value = "com.yuchuang.officialwebsite.mapper")
@SpringBootApplication
public class OfficialWebsiteApplication {

    public static void main(String[] args) {
        SpringApplication.run(OfficialWebsiteApplication.class, args);
    }

}
