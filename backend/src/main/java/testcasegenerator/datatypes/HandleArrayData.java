package testcasegenerator.datatypes;

import java.util.ArrayList;
import java.util.HashMap;

import org.json.JSONObject;

public class HandleArrayData {
    private int length;
    private String strLength;
    private JSONObject arrayData;

    public HandleArrayData(JSONObject jsonObject) {
        this.strLength = jsonObject.getString("length");
        this.arrayData = jsonObject;
    }

    @SuppressWarnings({ "unchecked", "rawtypes" })
    public ArrayList createTestcases(HashMap<String, Integer> map, String key) {
        ArrayList testcases = new ArrayList<String>();
        String datatype = arrayData.getString("datatype");

        try {
            this.length = Integer.parseInt(this.strLength);
        } catch (NumberFormatException e) {
            System.out.println("Invalid length value for key: " + key);
            length = map.get(this.strLength);
        }

        for (int i = 0; i < length; i++) {
            switch (datatype) {
                case "integer":
                    testcases.add(new HandleIntegerData(arrayData.getJSONObject("varData")).createTestcases(map, key));
                    break;
                case "boolean":
                    testcases.add(new HandleBooleanData(arrayData.getJSONObject("varData")).createTestcases(map, key));
                    break;
                case "string":
                    testcases.add(new HandleStringData(arrayData.getJSONObject("varData")).createTestcases(map, key));
                    break;
                case "float":
                    testcases.add(new HandleFloatData(arrayData.getJSONObject("varData")).createTestcases(map, key));
                    break;
                case "array":
                    testcases.add(new HandleArrayData(arrayData.getJSONObject("varData")).createTestcases(map, key));
                    break;
                default:
                    break;
            }

        }
        return testcases;
    }
   
}
