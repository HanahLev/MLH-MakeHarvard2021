# MLH-MakeHarvard2021

## Purpose of project
- To provide a simple way for individuals to remember and keep track of their medications
- Knows possible complications with regards to mixing of medicines
## What it does
- helps people regulate/remember medication schedules — incorporating timing, dosage, ingredient cross-referencing – by cross referencing ingredients in pills makes sure you don’t mix wrong things for bad consequences – has pictures of the medicine so it’s not overwhelming and confusing with technical names – etc. 
## Medium
### App
1. Doctor inputs medicines and dosages
2. App cross references medicine ingredients -> makes sure no issues with other medicines the user is taking
3. App will remind user when to take medicine
4. App will connect to dispenser and release proper medicines and dosages when user acknowledges the reminder
5. Also the server is in firebase with multifactor authentication to ensure data safety and ease access of data trough google home as well as the raspberry microcontroller.
### CAD
#### Dispenser design
1. Spinning release mechanism (like bubble gum machine)
2. Pushing mechanism (like pez dispenser)
3. Moving belt mechanism
    - Medicine funnels to belt
    - Belt has ridges to partition individual pills
    - Belt moves and drops pills into tray once falls off end
    - Motor coded to control how many pills dropped into tray (basically setting specific number of rotations)
4. Trap door
    - Dosages manually placed into device
    - App tells door to open and release that day/time’s medicine
    - Simplest design but requires greatest involvement of user
### Electronics (CAD and/or just drawing/listing necessary parts and how they would be connected)
1. Motors/servos
    - Two Micro servo motors
    - L298N Motor Driver
    - Arduino Uno/ Raspberry PI
2. Computation/Senosrs
    - For raspberry the debian OS based Amazon echo SDK is used to send reminders as well notification is generated in the mobile 
    - The raspberry then simulates the motor driver to rotate the servo for the pills to to be batched out to the patient.
    - Also the IR sensor in place ensures the pills comes out only when the person is in the proximity of the device
## Potential issues
- Computation and optimization of timely API call and making a modulated product requires more real time testing
- Unavailability of all the hardwares, have to consider speculated scenarios. 
- Have to compromise with the size to make the Arduino fit inside
