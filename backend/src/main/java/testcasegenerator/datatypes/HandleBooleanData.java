package testcasegenerator.datatypes;

import java.util.Random;
import org.json.JSONObject;

public class HandleBooleanData {
    
    private Boolean value;

    public HandleBooleanData(JSONObject jsonObject) {
        this.value = jsonObject.has("value") ? jsonObject.getBoolean("value") : null;
    }

    public Boolean createTestcases() {
        Random random = new Random();

        if(this.value == null) {
            return random.nextBoolean();
        }
        return this.value;
    }
}