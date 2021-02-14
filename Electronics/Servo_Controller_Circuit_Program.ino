#include <Servo.h>

 
Servo myservo;          
                
   
int val;
 
void setup() 
{ 
  myservo.attach(4);
  Serial.begin(9600);
       
} 
  
void loop() 
{ 
  int n;
  Serial.print("Enter the desired angular shaft position of the Servo Motor");
  while (Serial.available()==0){}
  n=Serial.parseInt();
  Serial.print(" Angle = ");
  Serial.println(n);
  val=(n*5.683);
  val=map(val, 0,1023, 0, 180);
  myservo.write(val );
  delay(15);
}
