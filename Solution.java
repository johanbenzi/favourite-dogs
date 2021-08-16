class Solution {

    public static int compareVersion(String version1, String version2) {
        String[] v1 = version1.split("\\.");
        String[] v2 = version2.split("\\.");

        int minLen = v1.length > v2.length ? v2.length : v1.length;

        for (int i = 0; i < minLen; i++) {
            if (Integer.parseInt(v1[i]) > Integer.parseInt(v2[i])) {
                return 1;
            } else if (Integer.parseInt(v1[i]) < Integer.parseInt(v2[i])) {
                return -1;
            }
        }

        if (v1.length > minLen) {
            return -1;
        } else if (v2.length > minLen) {
            return 1;
        }

        return 0;
    }

    public static void main(String[] args) {
        System.out.println("compareVersion(\"0.1\", \"1.1\") : " + compareVersion("0.1", "1.1"));
        System.out.println("compareVersion(\"1.1\", \"0.1\") : " + compareVersion("1.1", "0.1"));
        System.out.println("compareVersion(\"1.2\", \"1.3.4\") : " + compareVersion("1.2", "1.3.4"));
        System.out.println("compareVersion(\"1.2\", \"1.2.9.9\") : " + compareVersion("1.2", "1.2.9.9"));
        System.out.println("compareVersion(\"1.2.9.9\", \"1.2\") : " + compareVersion("1.2.9.9", "1.2"));
        System.out.println("compareVersion(\"1.2.9.9\", \"1.2.9.9\") : " + compareVersion("1.2.9.9", "1.2.9.9"));
    }

}

