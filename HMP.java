import java.util.HashMap;

public class HMP {
    public static void main(String[] args)
    {
        HashMap<String, String> map = new HashMap<>();
        map.put("", "");
        map.put("", "");
        map.put("", "");
        
        System.out.println(map);
        if (map.containsKey("")) {
            Integer a = map.get("");
            System.out.println("value for key"
                               + " \"\" is: " + a);
        }
    }
}
