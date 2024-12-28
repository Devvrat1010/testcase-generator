package testcasegenerator.datatypes;

import java.util.HashMap;
import java.util.Random;
import org.json.JSONObject;

public class HandleIntegerData {
    
    private String[] range = new String[2];
    private int start;
    private int end;
    private int[] specificValues;

    public HandleIntegerData(JSONObject jsonObject) {
        this.range = jsonObject.has("range") ? jsonObject.getJSONArray("range").length() == 2 ?
                    new String[] { jsonObject.getJSONArray("range").getString(0),
                            jsonObject.getJSONArray("range").getString(1) } : null :null;

        this.specificValues = jsonObject.has("specificValues") ? jsonObject.getJSONArray("specificValues").length() > 0 ?
        jsonObject.getJSONArray("specificValues").toList().stream().mapToInt(i -> (int) i).toArray() : null : null; 
    }

    public Integer createTestcases(HashMap<String, Integer> map, String key) {
        Random random = new Random();

        try {
            this.start = Integer.parseInt(this.range[0]);
        } catch (NumberFormatException e) {
            this.start = map.get(this.range[0]);
        }
        catch(Exception e){
            System.out.println("Found what we were looklingh for : " + key);
            return null;
        }
        try{
            this.end = Integer.parseInt(this.range[1]);
        }
        catch(NumberFormatException e){
            this.end = map.get(this.range[1]);
        }
        catch(Exception e){
            System.out.println("Found what we were looklingh for : " + key);
            return null;
        }
        

        if(this.range != null) {
            int res = random.nextInt(this.end - this.start + 1) + this.start;
            map.put(key, res);
            return res;
        } 
        else {
            return this.specificValues[random.nextInt(this.specificValues.length)];
        }
    }

}
