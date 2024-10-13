package testcasegenerator;

class TestcaseNotFoundException extends RuntimeException {

  TestcaseNotFoundException(Long id) {
    super("Could not find employee " + id);
  }
}