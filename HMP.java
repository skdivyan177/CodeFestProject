import java.util.HashMap;

public class HMP {
    public static void main(String[] args)
    {
        HashMap<String, String> map = new HashMap<>();
        map.put("", "");
        map.put("", "");
        map.put("", "");
        
        System.out.println(map);
        if (map.containsKey("vishal")) {
            Integer a = map.get("vishal");
            System.out.println("value for key"
                               + " \"vishal\" is: " + a);
        }
    }
}
