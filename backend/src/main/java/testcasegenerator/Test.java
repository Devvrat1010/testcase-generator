package testcasegenerator;

import org.json.JSONObject;

public class Test {
    public static void main(String[] args) {
        String jsonString = "{\"name\":\"Prem\", \"age\":22, \"city\":\"Ahmedabad\"}";
        
        // Convert String to JSONObject
        JSONObject jsonObject = new JSONObject(jsonString);
        
        // Access values from the JSON object
        String name = jsonObject.getString("name");
        int age = jsonObject.getInt("age");
        String city = jsonObject.getString("city");
        
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("City: " + city);
    }
}
