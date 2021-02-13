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
1. Motors/servos?
2. sensors?
## Potential issues
- Not very familiar with electronics
- Maybe too much for 24 hours?
