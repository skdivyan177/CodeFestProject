import java.util.HashMap;
public class HMP {
    public static void main(String[] args)
    {
        // making a hash map with 2 strings here 
        HashMap<String, String> map = new HashMap<>();
        map.put("", "");
        map.put("", "");
        map.put("", "");
        System.out.println(map);
        // if the map contains the key, get it and print it
        if (map.containsKey("Key1")) {
            String a = map.get("Key1");
            System.out.println("value for key"
                               + " \"Key1\" is: " + a);
        }
    }
}
