package testcasegenerator;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import testcasegenerator.datatypes.HandleArrayData;
import testcasegenerator.datatypes.HandleBooleanData;
import testcasegenerator.datatypes.HandleFloatData;
// import testcasegenerator.datatypes.HandleDatatypes;
import testcasegenerator.datatypes.HandleIntegerData;
import testcasegenerator.datatypes.HandleStringData;
// import testcasegenerator.datatypes.HandleDatatypes;

import org.apache.tomcat.util.json.JSONParser;
import org.aspectj.weaver.ast.Test;
import org.json.JSONArray;
import org.json.JSONObject;

import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
class TestcaseController {

    private final TestcaseRepository repository;
    public final HashMap<String, String> map = new HashMap<String, String>();

    TestcaseController(TestcaseRepository repository) {
        this.repository = repository;
    }

    // Aggregate root
    // tag::get-aggregate-root[]
    @GetMapping("/testcase")
    List<Testcase> all() {
        return repository.findAll();
    }
    // end::get-aggregate-root[]

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/postTestcaseData")
    String newTestcase(@RequestBody String newTestcase) {
        String jsonString = "{\"name\":\"Prem\", \"age\":22, \"city\":\"Ahmedabad\"}";

        // Convert String to JSONObject
        JSONObject jsonObject = new JSONObject(newTestcase);
        JSONObject testcaseData = new JSONObject(jsonObject.getString("testcaseData"));
        JSONArray eachLineData = new JSONArray(testcaseData.getJSONArray("eachLineData"));
        int numberOfTestcases = testcaseData.getInt("testCases");
        System.out.println(numberOfTestcases + "eachLineData");

        // String[] res;
        JSONArray res = new JSONArray();


        for (int j = 0; j < numberOfTestcases; j++) {
            // JSONObject testcase = numberOfTestcases.getJSONObject(j);
            // System.out.println(testcase + "testcase");
            // Iterate through eachLineData JSONArray
            JSONObject currTestcase = new JSONObject();
            for (int i = 0; i < eachLineData.length(); i++) {
                JSONObject eachLine = eachLineData.getJSONObject(i);

                // Iterate through eachLine JSONObject
                System.out.println(eachLine + "eachLIne");
                for (String key : eachLine.keySet()) {
                    JSONObject value = eachLine.getJSONObject(key);
                    // String testcase;
                    if (value.get("datatype").equals("string")) {
                        HandleStringData handleStringData = new HandleStringData(value.getJSONObject("varData"));
                        String testcase = handleStringData.createTestcases();
                        currTestcase.put(key, testcase);
                    } else if (value.get("datatype").equals("integer")) {
                        HandleIntegerData handleIntegerData = new HandleIntegerData(value.getJSONObject("varData"));
                        Integer testcase = handleIntegerData.createTestcases();
                        currTestcase.put(key, testcase);
                    } else if (value.get("datatype").equals("array")) {
                        HandleArrayData handleArrayData = new HandleArrayData(value.getJSONObject("varData"));
                        @SuppressWarnings("rawtypes")
                        ArrayList testcase = handleArrayData.createTestcases();
                        currTestcase.put(key, testcase);
                    } else if (value.get("datatype").equals("boolean")) {
                        HandleBooleanData handleBooleanData = new HandleBooleanData(value.getJSONObject("varData"));
                        Boolean testcase = handleBooleanData.createTestcases();
                        currTestcase.put(key, testcase);
                    } else if (value.get("datatype").equals("float")) {
                        HandleFloatData handleFloatData = new HandleFloatData(value.getJSONObject("varData"));
                        Double testcase = handleFloatData.createTestcases();
                        currTestcase.put(key, testcase);

                    } else {
                        String testcase = "Invalid datatype";
                        currTestcase.put(key, testcase);
                    }
                }
            }
            System.out.println(currTestcase + "currTestcase");
            res.put(currTestcase);
        }

        System.out.println(res + "res");
        // Testcase testcase = new Testcase(newTestcase);

        // repository.save(testcase);
        return res.toString();
    }

    @GetMapping("/testcase/{id}")
    String getTestcase(@PathVariable Long id) {
        Testcase testcase = repository.findById(id).orElseThrow(() -> new TestcaseNotFoundException(id));

        return testcase.getTestcaseData();

    }
}