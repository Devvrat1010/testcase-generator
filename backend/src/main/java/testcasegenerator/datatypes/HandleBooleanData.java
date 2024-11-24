package testcasegenerator.datatypes;

import java.util.HashMap;
import java.util.Random;
import org.json.JSONObject;

public class HandleBooleanData {
    
    private Boolean value;

    public HandleBooleanData(JSONObject jsonObject) {
        this.value = jsonObject.has("value") ? jsonObject.getBoolean("value") : null;
    }

    public Boolean createTestcases(HashMap<String, Integer> map, String key) {
        Random random = new Random();

        if(this.value == null) {
            boolean res = random.nextBoolean();
            map.put(key, res ? 1 : 0);
            return res;
        }
        return this.value;
    }
}