package testcasegenerator;

import org.springframework.data.jpa.repository.JpaRepository;

interface TestcaseRepository extends JpaRepository<Testcase, Long> {
}