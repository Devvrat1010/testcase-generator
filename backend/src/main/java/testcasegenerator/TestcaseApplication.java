package testcasegenerator;
// package com.koyeb.examplespringboot;
 
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;


@SpringBootApplication
public class TestcaseApplication {

  public static void main(String... args) {
    SpringApplication.run(TestcaseApplication.class, args);
  }
}