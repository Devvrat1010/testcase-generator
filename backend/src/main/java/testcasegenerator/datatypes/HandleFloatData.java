package testcasegenerator.datatypes;

import java.util.HashMap;
import java.util.Random;

import org.json.JSONObject;

public class HandleFloatData {
        
    private float value;
    private int[] range;
    private double[] specificValues;

    public HandleFloatData(JSONObject jsonObject) {
        this.range = jsonObject.has("range") ? jsonObject.getJSONArray("range").length() == 2 ?
                    new int[] { jsonObject.getJSONArray("range").getInt(0),
                            jsonObject.getJSONArray("range").getInt(1) } : null :null;

        this.specificValues = jsonObject.has("specificValues") ? jsonObject.getJSONArray("specificValues").length() > 0 ?
                                jsonObject.getJSONArray("specificValues").toList().stream().mapToDouble(i -> (double) i).toArray() : null : null; 
    }
        public Double createTestcases(HashMap<String, Integer> map, String key) {
            Random random = new Random();
            
            if (this.range != null) {
                return random.nextDouble() * (this.range[1] - this.range[0]) + this.range[0];
                // // generate a random float number between the range
                // testcase.append(random.nextFloat() * (this.range[1] - this.range[0]) + this.range[0]);
            }
            return this.specificValues[random.nextInt(this.specificValues.length)]; 
        }
          
}
