package testcasegenerator;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
class LoadDatabase {

  private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

  @Bean
  CommandLineRunner initDatabase(TestcaseRepository repository) {

    return args -> {
      log.info("Preloading " + repository.save(new Testcase("Bilbo Baggins")));
      log.info("Preloading " + repository.save(new Testcase("Frodo Baggins")));
    };
  }
}