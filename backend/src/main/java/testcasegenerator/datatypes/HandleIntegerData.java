package testcasegenerator.datatypes;

import java.util.Random;
import org.json.JSONObject;

public class HandleIntegerData {
    
    private int[] range;
    private int[] specificValues;

    public HandleIntegerData(JSONObject jsonObject) {
        this.range = jsonObject.has("range") ? jsonObject.getJSONArray("range").length() == 2 ?
                    new int[] { jsonObject.getJSONArray("range").getInt(0),
                            jsonObject.getJSONArray("range").getInt(1) } : null :null;

        this.specificValues = jsonObject.has("specificValues") ? jsonObject.getJSONArray("specificValues").length() > 0 ?
        jsonObject.getJSONArray("specificValues").toList().stream().mapToInt(i -> (int) i).toArray() : null : null; 
    }

    public Integer createTestcases() {
        Random random = new Random();

        if(this.range != null) {
            return random.nextInt(this.range[1] - this.range[0] + 1) + this.range[0];
        } 
        // else {
            return this.specificValues[random.nextInt(this.specificValues.length)];
        // }
        // if (this.range != null) {
        //     testcase.append(random.nextInt(this.range[1] - this.range[0] + 1) + this.range[0]);
        // } else {
        //     testcase.append(this.specificValues[random.nextInt(this.specificValues.length)]);
        // }

        // return testcase.toString();
    }

}
