package testcasegenerator;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import testcasegenerator.datatypes.HandleIntegerData;

@Entity
class Testcase {

    private @Id @GeneratedValue Long id;
    private String testcaseData;
    Testcase() {
    }

    Testcase(String testcaseData) {
        this.testcaseData = testcaseData;
    }

    public Long getId() {
        return this.id;
    }

    public String getTestcaseData(){
        return this.testcaseData;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTestcaseData(String testcaseData){
        this.testcaseData = testcaseData;
    }


    @Override
    public boolean equals(Object o) {

        if (this == o)
            return true;
        if (!(o instanceof Testcase))
            return false;
        Testcase testcase = (Testcase) o;
        return Objects.equals(this.id, testcase.id) && Objects.equals(this.testcaseData, testcase.testcaseData);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id, this.testcaseData);
    }

    @Override
    public String toString() {
        return "Testcase{" + "id=" + this.id + ",\n testcaseData='" + this.testcaseData + '}';
    }
}