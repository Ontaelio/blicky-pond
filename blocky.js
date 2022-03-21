var ang = 0;

while (true) {
 ang = ang + 5;
 while (scan(ang) < 70) {
  cannon(ang, scan(ang));
 }
 swim(ang); 
}

// the second one may be less effective, but certainly is more spectacular

var ang = 0; // may be 270 to target the green one first

while (1) {
  if (scan(ang) > 70) if (scan(ang+5) <70) ang = ang + 5; else ang = ang - 5;
  while (scan(ang) < 70) {
    cannon(ang, scan(ang));
  }
 swim(ang); 
}
