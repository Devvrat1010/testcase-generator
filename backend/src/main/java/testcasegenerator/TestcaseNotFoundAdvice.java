package testcasegenerator;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
class TestcaseNotFoundAdvice {

  @ExceptionHandler(TestcaseNotFoundException.class)
  @ResponseStatus(HttpStatus.NOT_FOUND)
  String employeeNotFoundHandler(TestcaseNotFoundException ex) {
    return ex.getMessage();
  }
}