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
        
        HashMap<String, Integer> map = new HashMap<>();

        JSONObject jsonObject = new JSONObject(newTestcase);
        System.out.println(jsonObject + "jsonObject");
        JSONObject testcaseData = jsonObject.getJSONObject("testcaseData");
        JSONArray eachLineData = testcaseData.getJSONArray("eachLineData");
        int numberOfTestcases = testcaseData.getInt("testcases");

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
                    switch (value.getString("datatype")) {
                        case "string":
                            HandleStringData handleStringData = new HandleStringData(value.getJSONObject("varData"));
                            String stringTestcase = handleStringData.createTestcases(map, key);
                            currTestcase.put(key, stringTestcase);
                            break;
                        case "integer":
                            HandleIntegerData handleIntegerData = new HandleIntegerData(value.getJSONObject("varData"));
                            Integer integerTestcase = handleIntegerData.createTestcases(map, key);
                            currTestcase.put(key, integerTestcase);
                            break;
                        case "array":
                            HandleArrayData handleArrayData = new HandleArrayData(value.getJSONObject("varData"));
                            @SuppressWarnings("rawtypes")
                            ArrayList arrayTestcase = handleArrayData.createTestcases(map, key);
                            currTestcase.put(key, arrayTestcase);
                            break;
                        case "boolean":
                            HandleBooleanData handleBooleanData = new HandleBooleanData(value.getJSONObject("varData"));
                            Boolean booleanTestcase = handleBooleanData.createTestcases(map, key);
                            currTestcase.put(key, booleanTestcase);
                            break;
                        case "float":
                            HandleFloatData handleFloatData = new HandleFloatData(value.getJSONObject("varData"));
                            Double floatTestcase = handleFloatData.createTestcases(map, key);
                            currTestcase.put(key, floatTestcase);
                            break;
                        default:
                            String invalidTestcase = "Invalid datatype";
                            currTestcase.put(key, invalidTestcase);
                            break;
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