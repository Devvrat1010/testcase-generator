package testcasegenerator.datatypes;

import java.util.ArrayList;

import org.json.JSONObject;

public class HandleArrayData {
    private int length;
    private JSONObject arrayData;

    public HandleArrayData(JSONObject jsonObject) {
        this.length = jsonObject.getInt("length");
        this.arrayData = jsonObject;
    }

    @SuppressWarnings({ "unchecked", "rawtypes" })
    public ArrayList createTestcases() {
        ArrayList testcases = new ArrayList<String>();
        // StringBuilder testcase = new StringBuilder();
        // testcase.append("{");
        String datatype = arrayData.getString("datatype");

        for (int i = 0; i < length; i++) {
            switch (datatype) {
                case "integer":
                    testcases.add(new HandleIntegerData(arrayData.getJSONObject("varData")).createTestcases());
                    break;
                case "boolean":
                    testcases.add(new HandleBooleanData(arrayData.getJSONObject("varData")).createTestcases());
                    break;
                case "string":
                    testcases.add(new HandleStringData(arrayData.getJSONObject("varData")).createTestcases());
                    break;
                case "float":
                    testcases.add(new HandleFloatData(arrayData.getJSONObject("varData")).createTestcases());
                    break;
                case "array":
                    testcases.add(new HandleArrayData(arrayData.getJSONObject("varData")).createTestcases());
                    break;
                default:
                    break;
            }

        }
        return testcases;
    }
   
}
