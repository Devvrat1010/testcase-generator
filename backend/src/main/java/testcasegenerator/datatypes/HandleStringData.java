package testcasegenerator.datatypes;

import java.util.Random;
import org.json.JSONObject;

public class HandleStringData {
    private int length;
    private String[] lowerCaseLettersRange;
    private String lowerCaseLetters;
    private String[] upperCaseLettersRange;
    private String upperCaseLetters;
    private String[] stringNumbersRange;
    private String stringNumbers;
    private String specialCharacters;

    public HandleStringData(JSONObject jsonObject) {
        this.length = jsonObject.getInt("length");

        // handling nullpointerexception and array out of bound exception
        this.lowerCaseLettersRange = jsonObject.has("lowerCaseLettersRange")
                ? jsonObject.getJSONArray("lowerCaseLettersRange").length() == 2
                        ? new String[] { jsonObject.getJSONArray("lowerCaseLettersRange").getString(0),
                            jsonObject.getJSONArray("lowerCaseLettersRange").getString(1) }
                        : null
                    : null;

        this.lowerCaseLetters = jsonObject.optString("lowerCaseLetters", null);
        this.upperCaseLettersRange = jsonObject.has("upperCaseLettersRange")
                ? jsonObject.getJSONArray("upperCaseLettersRange").length() == 2
                        ? new String[] { jsonObject.getJSONArray("upperCaseLettersRange").getString(0),
                            jsonObject.getJSONArray("upperCaseLettersRange").getString(1) }
                        : null
                    : null;

        this.upperCaseLetters = jsonObject.optString("upperCaseLetters", null);
        this.stringNumbersRange = jsonObject.has("stringNumbersRange")
                ? jsonObject.getJSONArray("stringNumbersRange").length() == 2
                        ? new String[] { jsonObject.getJSONArray("stringNumbersRange").getString(0),
                            jsonObject.getJSONArray("stringNumbersRange").getString(1) }
                        : null
                    : null;
        this.stringNumbers = jsonObject.optString("stringNumbers", null);
        this.specialCharacters = jsonObject.optString("specialCharacters", null);
    }

    public String createTestcases() {
        StringBuilder testcase = new StringBuilder();
        Random random = new Random();

        StringBuilder allowedChars = new StringBuilder();
        if (this.lowerCaseLettersRange != null) {
            for (char c = lowerCaseLettersRange[0].charAt(0); c <= lowerCaseLettersRange[1].charAt(0); c++) {
            allowedChars.append(c);
            }
        }
        
        if (this.upperCaseLettersRange != null) {
            for (char c = upperCaseLettersRange[0].charAt(0); c <= upperCaseLettersRange[1].charAt(0); c++) {
            allowedChars.append(c);
            }
        }
        
        if (this.stringNumbersRange != null) {
            for (char c = stringNumbersRange[0].charAt(0); c <= stringNumbersRange[1].charAt(0); c++) {
            allowedChars.append(c);
            }
        }
        
        if (this.lowerCaseLetters != null)
            allowedChars.append(this.lowerCaseLetters);
        
        if (this.upperCaseLetters != null)
            allowedChars.append(this.upperCaseLetters);
        
        if (this.stringNumbers != null)
            allowedChars.append(this.stringNumbers);
        
        if (this.specialCharacters != null)
            allowedChars.append(this.specialCharacters);
        
        if (allowedChars.length() > 0)
            generateRandomCharsFromSet(testcase, random, allowedChars.toString());

        return testcase.toString();
    }

    private void generateRandomCharsFromSet(StringBuilder testcase, Random random, String charSet) {
        for (int i = 0; i < this.length; i++) {
            int randomIndex = random.nextInt(charSet.length());
            testcase.append(charSet.charAt(randomIndex));
        }
    }
}
