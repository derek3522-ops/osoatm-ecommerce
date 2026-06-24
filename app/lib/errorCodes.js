// app/lib/errorCodes.js - Complete ATM Error Code Database

const genmegaCodes = [
  {
    "code": "0",
    "description": "Normal Status",
    "solution": "None"
  },
  {
    "code": "CDN04",
    "description": "CDU Connection Failure",
    "solution": "Check cables between CDU and Mainboard, remove and re-connect. Use electrical parts contact cleaner on terminals. This error is of concern only if repeated. Outside interference may cause it (neon signs, lights)."
  },
  {
    "code": "D1704",
    "description": "Modem connection error",
    "solution": "Phone line will not support data communication. In-line filter may help. Excessive EMI emissions from outside source (neon sign, freezer) are likely causes. Check all programming (especially Dual Master Key setting and Host Processor Mode)."
  },
  {
    "code": "20001",
    "description": "Unable To Detect Cassette",
    "solution": "Remove and replace cassette. Check the micro-switch on the inside left wall of the dispenser. Adjust if needed. Check the white plastic clips that hold the cassette in place \u2014 if broken the cassette will not stay in the dispenser."
  },
  {
    "code": "20002",
    "description": "Low Cash",
    "solution": "Low cash warning sensor is open. When 'Low Cash Warning' is enabled, this sensor opens when the cassette reaches (~75 bills). If typically stocked with low bills, consider disabling this function."
  },
  {
    "code": "20003",
    "description": "Reject Bin is Full",
    "solution": "Empty reject bin. If bin is empty, do a Cassette Total from the settlement menu. If that doesn't help, check that AP, BIOS and CDU ROM versions are compatible."
  },
  {
    "code": "20004",
    "description": "Vault Door is Open",
    "solution": "Check vault door switch (white plunger switch in upper left corner of vault). Check that the black and white 2-wire connector is properly connected at rear of main board. Move the vault switch forward to aid door clearance. Check for continuity between the switch and mainboard connector."
  },
  {
    "code": "20005",
    "description": "CDU Type Mismatch",
    "solution": "CDU ROM does not match AP software. The dispenser and mainboard must share the same country code (USA or Canada). If they don't match, reprogram the CDU. Also check if wrong parameters were entered when the CDU was programmed."
  },
  {
    "code": "20010",
    "description": "Receipt Paper Jam",
    "solution": "Remove jammed paper. Release receipt paper drawer by pressing the tab with the green sticker at the front of the printer. You may have to remove the printer to locate difficult jams. Do NOT use metal objects \u2014 use a business card or stiff paper. Use only 21# paper."
  },
  {
    "code": "20012",
    "description": "Receipt printer feed lever open",
    "solution": "Close the feed tray on the printer. If already closed, try opening and closing it, try the printer reset switch. Otherwise the printer may require service."
  },
  {
    "code": "20013",
    "description": "Receipt paper is empty",
    "solution": "Replenish the paper roll. If paper is already in the printer, look for jams or obstructions. Try the printer reset switch. If error persists, the printer may require service."
  },
  {
    "code": "20014",
    "description": "Thermal printer is overheated",
    "solution": "Allow the printer to cool and try again. Try the reset button on the printer. If this error persists, the printer will require service."
  },
  {
    "code": "20215",
    "description": "CDU detects bills prior to dispensing (CS2 sensor)",
    "solution": "Remove any jammed bills from the dispenser. If no bills are present, use compressed air to clean the dispenser (a sensor may be blocked by dust). Check and reseat all belts \u2014 loose belts can slip off rollers and block sensors."
  },
  {
    "code": "21315",
    "description": "CDU detects bills prior to dispensing (CS13 sensor)",
    "solution": "Remove any jammed bills. If no bills present, use compressed air to clean the dispenser. Check and reseat all belts."
  },
  {
    "code": "21A15",
    "description": "CDU detects bills prior to dispensing (CS1A sensor)",
    "solution": "Remove any jammed bills. If no bills present, use compressed air to clean the dispenser. Check and reseat all belts."
  },
  {
    "code": "21B15",
    "description": "CDU detects bills prior to dispensing (CS1B sensor)",
    "solution": "Remove any jammed bills. If no bills present, use compressed air to clean the dispenser. Check and reseat all belts."
  },
  {
    "code": "24A15",
    "description": "CDU detects bills prior to dispensing (CS4A sensor)",
    "solution": "Remove any jammed bills. If no bills present, use compressed air to clean the dispenser. Check and reseat all belts."
  },
  {
    "code": "24B15",
    "description": "CDU detects bills prior to dispensing (CS4B sensor)",
    "solution": "Remove any jammed bills. If no bills present, use compressed air to clean the dispenser. Check and reseat all belts."
  },
  {
    "code": "90001",
    "description": "Error during card swipe",
    "solution": "Occurs when customer attempts to swipe card unsuccessfully. May indicate card reader needs cleaning, repositioning, or the customer didn't swipe properly. If persistent, clean and test the card reader in diagnostics. Very common \u2014 does not usually indicate a bad part."
  },
  {
    "code": "A0008",
    "description": "Receipt paper cutter error",
    "solution": "Remove any jammed paper. You may need to remove the printer to clear jams. Do not use metal objects \u2014 use a business card or stiff paper. Try the reset button or have the printer serviced."
  },
  {
    "code": "ADN04",
    "description": "Printer connection error",
    "solution": "Check cables between Printer and Mainboard, remove and re-connect. Use electrical parts contact cleaner on terminals. Try the reset button on the printer. If consistent, the printer or mainboard may require service."
  },
  {
    "code": "ADN0F",
    "description": "Printer connection error",
    "solution": "Check cables between Printer and Mainboard, remove and re-connect. Use electrical parts contact cleaner on terminals. Try the reset button. If consistent, printer or mainboard may require service."
  },
  {
    "code": "ADNxx",
    "description": "Printer connection error",
    "solution": "Check cables between Printer and Mainboard, remove and re-connect. Use electrical parts contact cleaner on terminals. Try the reset button. If consistent, printer or mainboard may require service."
  },
  {
    "code": "Axxx2",
    "description": "Thermal printer overheated during operation",
    "solution": "Allow the printer to cool and try again. Try the reset button. If this error persists, the printer will require service."
  },
  {
    "code": "Axxx3",
    "description": "Receipt Paper Jam",
    "solution": "Remove jammed paper. Release receipt paper drawer by pressing the tab with the green sticker. You may need to remove the printer from the ATM to access the jam. Do NOT use metal objects."
  },
  {
    "code": "Axxx4",
    "description": "Receipt paper is empty",
    "solution": "Replenish the paper roll. If roll is ok, try the reset button. Otherwise the printer needs service."
  },
  {
    "code": "Axxx5",
    "description": "Receipt paper jamming during loading",
    "solution": "Remove any jammed paper and reload. You may need to remove the printer to clear jams. Do not use metal objects. Try the reset button or have the printer serviced."
  },
  {
    "code": "C0011",
    "description": "CDU sensor is tripped",
    "solution": "During dispense, the sensor at the front of the CDU shows a blockage (CS13 or CS2). Usually a bill bouncing back from the cash tray. Check the front of the CDU and cash tray for blockage. Reinitialize the ATM to put back in service."
  },
  {
    "code": "C0014",
    "description": "CDU sensor is tripped",
    "solution": "Similar to C0011 \u2014 indicates a bill jam close to the exit of the CDU or near the reject bin. Check for jammed notes or blocked sensors."
  },
  {
    "code": "C001x",
    "description": "CDU sensor is tripped",
    "solution": "Typically a C0011 error \u2014 bill jam at the exit sensor of the Cash Dispenser. Usually caused by a customer putting fingers in the cash drawer during dispense. You can loosen the screws that hold the dispenser and slide it back."
  },
  {
    "code": "C0028",
    "description": "CDU sensor is tripped",
    "solution": "Check dispenser for jammed bills and restart the machine. If no bills present, use compressed air to clean the dispenser. Otherwise the dispenser may require service."
  },
  {
    "code": "C002x",
    "description": "CDU sensor is tripped",
    "solution": "Check dispenser for jammed bills and restart the machine. If no bills present, use compressed air to clean the dispenser. Otherwise the dispenser may require service."
  },
  {
    "code": "C0030",
    "description": "CDU motor failure",
    "solution": "Motor speed (measured at the encoder wheel) was not within spec. Verify that CS8 or encoder wheel sensor is in place and wire connection is good. Can indicate a bad motor or encoder sensor."
  },
  {
    "code": "C0031",
    "description": "CDU Gate solenoid error",
    "solution": "The CDU did not respond to its solenoid function check. Check the wiring connections to the solenoid(s) and to the CDU main board."
  },
  {
    "code": "C0032",
    "description": "Outlet solenoid error",
    "solution": "Check and verify all connections to the dispenser circuit board. Check wiring to the solenoid(s)."
  },
  {
    "code": "C0033",
    "description": "CDU Encoder error",
    "solution": "Usually caused by loss of battery power to the CDU mainboard. The only way to recover is to reprogram the CDU data. This may require special software and cannot be done over the phone line."
  },
  {
    "code": "C0034",
    "description": "Double Note detect module failure",
    "solution": "Double detect module reporting error. Check wiring to the module."
  },
  {
    "code": "C0035",
    "description": "Double Note detect module failure (2)",
    "solution": "Double detect module reporting error. Check wiring to the module."
  },
  {
    "code": "C0036",
    "description": "Detected notes in path before initializing",
    "solution": "Check for notes in the Cash Dispenser. If no bills present, use compressed air to clean the dispenser. Otherwise the dispenser may require service."
  },
  {
    "code": "C0037",
    "description": "Sensor for detecting Double covered during dispensing",
    "solution": "None"
  },
  {
    "code": "C0039",
    "description": "Gate sensor open during initializing",
    "solution": "Check the sensor activated when you close the reject bin door (2k/4k dispensers only). Check the springs on the underside of the solenoids \u2014 one may be disconnected. Otherwise the CDU will require repair/replacement."
  },
  {
    "code": "C003B",
    "description": "Notes detected during installation",
    "solution": "Check for notes in the Cash Dispenser. If no bills present, use compressed air to clean the dispenser. Otherwise the dispenser may require service."
  },
  {
    "code": "C0040",
    "description": "Cassette removed during dispense",
    "solution": "Reset the cassette. Check position of microswitch on right rear wall of cassette bay in the dispenser. Check the condition of the white plastic cassette retaining clips."
  },
  {
    "code": "C0041",
    "description": "Tried to dispense notes more than 5 times",
    "solution": "Check the condition of the cash in the cassette. Verify cash is of good quality. The CDU belts or cassette rollers may need to be cleaned (rubbing alcohol). Check that the denomination in Transaction Setup matches the actual denomination loaded."
  },
  {
    "code": "C0042",
    "description": "Note jam",
    "solution": "Check for notes in the Cash Dispenser. If no bills present, use compressed air to clean the dispenser. Otherwise the dispenser may require service."
  },
  {
    "code": "C0043",
    "description": "More than 10 notes rejected during one transaction",
    "solution": "Verify the quality of the cash. Straighten and shuffle cash in the cassette. Check the reject analysis (reports menu). If cash is good quality, try cleaning the cassette and dispenser. Otherwise service may be required."
  },
  {
    "code": "C0044",
    "description": "More than 5 notes rejected consecutively",
    "solution": "Verify the quality of the cash. Straighten and shuffle cash in the cassette. Check the reject analysis (reports menu). If cash is good quality, try cleaning. Otherwise service may be required."
  },
  {
    "code": "C0045",
    "description": "Notes Overdispensed",
    "solution": "Check NS4 Sensor."
  },
  {
    "code": "C0046",
    "description": "CDU Hardware Failure",
    "solution": "Error reported during CDU initialization. Check cabling and potential blockages and power cycle ATM."
  },
  {
    "code": "C0047",
    "description": "Feed error",
    "solution": "Dispenser attempts to pull a bill from the cassette and is unsuccessful before timing out. Can be as simple as the cassette being empty, rollers needing cleaning, or a firmware upgrade to the CDU may be needed."
  },
  {
    "code": "C0048",
    "description": "Incorrect bill count",
    "solution": "Verify cash count in the Settlement menu."
  },
  {
    "code": "C004A",
    "description": "Jammed notes",
    "solution": "Check for notes in the Cash Dispenser. If no bills present, use compressed air to clean the dispenser. Otherwise the dispenser may require service."
  },
  {
    "code": "C004B",
    "description": "Long note detected 3 times consecutively",
    "solution": "Verify the quality of the cash. Straighten and shuffle cash in the cassette. Try cleaning the cassette and dispenser. If persistent, service may be required."
  },
  {
    "code": "C004C",
    "description": "Miscount of notes between sensors",
    "solution": "Verify operation of exit gate. Check the number of dispensed notes. Clean the dispenser and test using diagnostics. Dispenser may require service."
  },
  {
    "code": "C004D",
    "description": "Cash cassette not properly set",
    "solution": "Reset the cassette. Check position of microswitch on right rear wall of cassette bay. Check condition of white plastic cassette retaining clips. MB1000: check condition of the clutch alignment screw."
  },
  {
    "code": "C004E",
    "description": "Miscount of notes between sensors",
    "solution": "Test CDU using diagnostics. Use journal to verify amount of dispensed notes versus requested notes. Clean dispenser and cassette. If error persists, dispenser may require service."
  },
  {
    "code": "C004F",
    "description": "Miscount of notes between sensors",
    "solution": "Test CDU using diagnostics. Use journal to verify dispensed notes vs requested. Clean dispenser and cassette. If error persists, dispenser may require service."
  },
  {
    "code": "C0050",
    "description": "Power failure during dispense",
    "solution": "Remove any notes from path. Before reinitializing, verify amount of dispensed notes in the cassette against the journal."
  },
  {
    "code": "C0051",
    "description": "Over 150 notes requested",
    "solution": "Possibly due to too many rejects. Check the Reject Analysis. Cash quality and condition of rollers in the cassette can affect this condition."
  },
  {
    "code": "C0052",
    "description": "Detected notes in path after dispense",
    "solution": "Remove any notes from path. Verify amount of dispensed notes. Clean dispenser. Verify bill count against the journal."
  },
  {
    "code": "C0053",
    "description": "CDU double detect module failure",
    "solution": "Double detect module may require adjustment. Check wiring and CDU mainboard connections."
  },
  {
    "code": "C0055",
    "description": "Detected long notes at outlet sensor",
    "solution": "Typically a bounce back of a bill during dispense causing the exit sensor to remain blocked longer than expected. See C0011."
  },
  {
    "code": "C0056",
    "description": "Exit gate sensor failure",
    "solution": "Check condition of exit gate and the exit gate sensor."
  },
  {
    "code": "C0057",
    "description": "Cassette information is not properly set",
    "solution": "CDU programming is not accurate or complete."
  },
  {
    "code": "C0059",
    "description": "Cash cassette 2 removed prior to dispense",
    "solution": "Set the cash cassette. Inspect the cassette detection microswitch. Reposition if necessary."
  },
  {
    "code": "C005A",
    "description": "Cash cassette 1 removed prior to dispense",
    "solution": "Set the cash cassette. Inspect the cassette detection microswitch. Reposition if necessary."
  },
  {
    "code": "C005B",
    "description": "Cash cassette 2 misfeed",
    "solution": "Check cassette for jams. Check condition of bills in cassette."
  },
  {
    "code": "C005D",
    "description": "Double detect constantly",
    "solution": "Inspect double detect module and adjust as necessary. Check and clean the cassette and rollers. Verify quality of cash."
  },
  {
    "code": "C005E",
    "description": "Dispense command size check error",
    "solution": "Re-initialize machine, verify connections to mainboard. Check for unplugged sensors."
  },
  {
    "code": "C005F",
    "description": "Dispense command error",
    "solution": "Re-initialize machine, verify connections, check for unplugged sensors."
  },
  {
    "code": "C006x",
    "description": "Sensor failure",
    "solution": "Check for notes in the Cash Dispenser. If no bills present, use compressed air to clean the dispenser. Otherwise the dispenser may require service."
  },
  {
    "code": "C007x",
    "description": "Sensor failure",
    "solution": "Check for notes in the Cash Dispenser. If no bills present, use compressed air to clean the dispenser. Otherwise the dispenser may require service."
  },
  {
    "code": "C0082",
    "description": "Shutter failure",
    "solution": "Check all wiring connections to CDU mainboard. Reinitialize CDU."
  },
  {
    "code": "C0083",
    "description": "Stacker sensor failure",
    "solution": "Check all wiring connections to CDU mainboard. Reinitialize CDU."
  },
  {
    "code": "C0084",
    "description": "Shutter close error",
    "solution": "Check all wiring connections to CDU mainboard. Reinitialize CDU."
  },
  {
    "code": "C009F",
    "description": "Cassette misfeed error",
    "solution": "Check if notes are available in cassette."
  },
  {
    "code": "C00AB",
    "description": "Notes detected before initializing",
    "solution": "Clear notes from dispenser. Possibly dust or foreign object blocking sensor."
  },
  {
    "code": "C00C7",
    "description": "CS12 Sensor blocked",
    "solution": "MB2100T: The CS12 sensor at the upper part of the cash tray was blocked while dispensing or initializing. Clear the cash tray of any bills or foreign objects. If error persists, the vault assembly may need to be removed to inspect the sensors."
  },
  {
    "code": "C00C8",
    "description": "CS14 Sensor blocked",
    "solution": "MB2100T: The CS14 sensor close to the front of the cash tray was blocked. Clear the cash tray of any bills or foreign objects. If error persists, the vault assembly may need to be removed."
  },
  {
    "code": "C00C9",
    "description": "CS12 & CS14 Sensors blocked",
    "solution": "MB2100T: Both CS12 and CS14 sensors were blocked. These sensors prevent tampering with the bill path. Clear the cash tray of any bills or foreign objects. If error persists, the vault assembly may need to be removed."
  },
  {
    "code": "C00D0",
    "description": "Sensor block while dispensing",
    "solution": "MB2100T: A blockage was detected between the CS13 (CDU exit gate) and CS12 cash tray sensors. There may be a note stuck in the upper part of the cash tray ramp. Clear the cash tray of notes or foreign objects. Open the vault and slide the dispenser back to access the exit gate area."
  },
  {
    "code": "C00D1",
    "description": "Sensor blocked while dispensing",
    "solution": "MB2100T: A blockage was detected between the CS12 (upper cash tray sensor) and CS14 (lower cash tray sensor). There may be a note stuck in the cash tray ramp. Clear the cash tray of notes or foreign objects."
  },
  {
    "code": "C00E0",
    "description": "NS2A, NS2B dark",
    "solution": "Nanocash only \u2014 verify connections to sensors. Check wiring to mainboard."
  },
  {
    "code": "C00E1",
    "description": "NS4 dark",
    "solution": "Verify connections to NS4 sensor. Check all wiring to mainboard."
  },
  {
    "code": "C00FF",
    "description": "Sensor blocked",
    "solution": "None"
  },
  {
    "code": "CANCE",
    "description": "User canceled transaction at surcharge",
    "solution": "Not an error \u2014 a statistic showing how many users respond 'no' to the surcharge notification."
  },
  {
    "code": "CDN01",
    "description": "No Response after send command",
    "solution": "None"
  },
  {
    "code": "CDN05",
    "description": "CDU connection failure",
    "solution": "Check cables between CDU and Mainboard, remove and re-connect. Use electrical parts contact cleaner on terminals. Only a concern if repeated. Outside interference may cause it (neon signs, lights)."
  },
  {
    "code": "CDN0F",
    "description": "CDU connection failure",
    "solution": "Check cables between CDU and Mainboard, remove and re-connect. Use electrical parts contact cleaner on terminals. Only a concern if repeated."
  },
  {
    "code": "CDN11",
    "description": "No Response after 3 retry of command",
    "solution": "None"
  },
  {
    "code": "CDN12",
    "description": "No Response between ENQ-ACK after 5 retry of ENQ",
    "solution": "None"
  },
  {
    "code": "CDN13",
    "description": "No Response after 5 retry due to timeout",
    "solution": "None"
  },
  {
    "code": "CDNxx",
    "description": "CDU connection failure",
    "solution": "Check cables between CDU and Mainboard, remove and re-connect. Use electrical parts contact cleaner on terminals. Only a concern if repeated."
  },
  {
    "code": "D0001",
    "description": "Modem initialization error",
    "solution": "Check modem in diagnostics or modem test. If persistent, could be a defective modem. One or two instances does not usually indicate a defective part."
  },
  {
    "code": "D0002",
    "description": "Reversal transaction failed",
    "solution": "The ATM attempted to do a reversal and could not. Check transaction with the processor. Verify CDU functionality with diagnostics. Verify phone connection. Look in error summary for D1800, D2000."
  },
  {
    "code": "D0005",
    "description": "Undefined network processing error",
    "solution": "Code reported by host processor. Contact your ISO or processor if you encounter an excessive amount of these errors or cannot complete a test transaction."
  },
  {
    "code": "D0011",
    "description": "Format error in the message",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0012",
    "description": "Invalid Transaction",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0013",
    "description": "Invalid Amount",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0014",
    "description": "Invalid Card Number",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0019",
    "description": "Reenter the entire transaction",
    "solution": "Code reported by host processor (Shazam). Contact your ISO or processor."
  },
  {
    "code": "D0020",
    "description": "Surcharge screen should have been displayed",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0024",
    "description": "Exceeds issuer withdrawal limit",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0031",
    "description": "Issuer financial institution not supported by processor",
    "solution": "Code reported by host processor (Shazam). Contact your ISO or processor."
  },
  {
    "code": "D0039",
    "description": "No credit account",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0041",
    "description": "No credit account found for the CCN",
    "solution": "Code reported by host processor (Shazam). Contact your ISO or processor."
  },
  {
    "code": "D0043",
    "description": "Stolen Card",
    "solution": "Code reported by host processor (Shazam). Contact your ISO or processor."
  },
  {
    "code": "D0050",
    "description": "Transaction is not approved",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0051",
    "description": "Insufficient funds",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0052",
    "description": "No checking account",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0053",
    "description": "No savings account",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0054",
    "description": "Expired Card",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0055",
    "description": "Invalid PIN",
    "solution": "Code reported from host processor. Verify all programming. For new installations, if master keys are not bound properly or Terminal ID is not active, this can occur. If programming appears correct, contact the processor and have them trace the Terminal ID."
  },
  {
    "code": "D0056",
    "description": "No card record found",
    "solution": "Code reported by host processor (Shazam). Contact your ISO or processor."
  },
  {
    "code": "D0057",
    "description": "Transaction not permitted \u2013 card",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0058",
    "description": "Transaction not permitted \u2013 Terminal",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0059",
    "description": "Customer should contact financial institution",
    "solution": "Code reported by host processor (Shazam). Contact your ISO or processor."
  },
  {
    "code": "D0060",
    "description": "Allowable withdrawal limit exceeded",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0061",
    "description": "Exceeded withdrawal limit",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0065",
    "description": "Exceeds withdrawal frequency limit",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0067",
    "description": "Capture card at the terminal",
    "solution": "Code reported by host processor (Shazam). Contact your ISO or processor."
  },
  {
    "code": "D0075",
    "description": "Number of PIN tries exceeded",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0078",
    "description": "No Account",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0080",
    "description": "Invalid Date",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0081",
    "description": "Timeout: response not received in time allowed",
    "solution": "Code reported by host processor (Shazam). Contact your ISO or processor."
  },
  {
    "code": "D0082",
    "description": "Cashback limit exceeded",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0083",
    "description": "Cannot verify PIN",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0084",
    "description": "Processor not available",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0086",
    "description": "Cannot verify PIN",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0090",
    "description": "Cutoff complete for terminal",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0091",
    "description": "Bank unavailable",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0092",
    "description": "System unavailable",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0093",
    "description": "Transaction serial number mismatch",
    "solution": "Verify all programming, contact host processor."
  },
  {
    "code": "D0094",
    "description": "Record format mismatch",
    "solution": "Verify all programming, contact host processor."
  },
  {
    "code": "D0095",
    "description": "Routing ID mismatch",
    "solution": "Verify Routing ID number, contact host processor."
  },
  {
    "code": "D0096",
    "description": "Terminal ID mismatch",
    "solution": "Verify Terminal ID number, contact host processor."
  },
  {
    "code": "D0097",
    "description": "Response type mismatch (reversal)",
    "solution": "Verify all programming, contact host processor."
  },
  {
    "code": "D0098",
    "description": "Response type mismatch (day-close)",
    "solution": "Verify all programming, contact host processor."
  },
  {
    "code": "D0099",
    "description": "Response type mismatch (Configuration)",
    "solution": "Verify all programming, contact host processor."
  },
  {
    "code": "D009A",
    "description": "Response type mismatch (Withdrawal, Balance, Transfer)",
    "solution": "Verify all programming, contact host processor."
  },
  {
    "code": "D009B",
    "description": "STX omitted",
    "solution": "Verify all programming, contact host processor."
  },
  {
    "code": "D009C",
    "description": "ETX omitted",
    "solution": "Verify all programming, contact host processor."
  },
  {
    "code": "D009D",
    "description": "FS omitted (after response code)",
    "solution": "Verify Mini-Bank Software version matches host processor. Contact host processor."
  },
  {
    "code": "D009E",
    "description": "FS omitted (after retrieval reference number)",
    "solution": "Verify all programming and Mini-Bank Software version. Contact host processor."
  },
  {
    "code": "D009F",
    "description": "FS omitted (after system trace audit number)",
    "solution": "Verify all programming and Mini-Bank Software version. Contact host processor."
  },
  {
    "code": "D00A0",
    "description": "FS omitted (after account balance)",
    "solution": "Verify all programming and Mini-Bank Software version. Contact host processor."
  },
  {
    "code": "D00A1",
    "description": "FS omitted (after available balance)",
    "solution": "Verify all programming and Mini-Bank Software version. Contact host processor."
  },
  {
    "code": "D00A2",
    "description": "FS omitted (after available balance)",
    "solution": "Verify all programming and Mini-Bank Software version. Contact host processor. Check T-DES Type."
  },
  {
    "code": "D00A3",
    "description": "FS omitted (after authorization response text)",
    "solution": "Verify all programming and Mini-Bank Software version. Contact host processor."
  },
  {
    "code": "D00A4",
    "description": "ETX is in wrong place",
    "solution": "Verify all programming and Mini-Bank Software version. Contact host processor."
  },
  {
    "code": "D00A5",
    "description": "FS omitted (after total cash dispense amount in day close)",
    "solution": "Verify all programming and Mini-Bank Software version. Contact host processor."
  },
  {
    "code": "D00A6",
    "description": "FS omitted (after total non cash dispense amount in day close)",
    "solution": "Verify all programming and Mini-Bank Software version. Contact host processor."
  },
  {
    "code": "D00A7",
    "description": "FS omitted (after surcharge amount in day close message)",
    "solution": "Verify all programming and Mini-Bank Software version. Contact host processor."
  },
  {
    "code": "D00A8",
    "description": "FS omitted (after surcharge amount in configuration message)",
    "solution": "Verify all programming. Check that Dual Master Key is disabled (non Coredata). Contact host processor."
  },
  {
    "code": "D00A9",
    "description": "ETX omitted (from configuration message)",
    "solution": "Verify all programming and Mini-Bank Software version. Contact host processor."
  },
  {
    "code": "D00B0",
    "description": "Invalid Terminal ID",
    "solution": "Contact host processor."
  },
  {
    "code": "D0100",
    "description": "Transaction approved",
    "solution": "None"
  },
  {
    "code": "D0101",
    "description": "Expired card",
    "solution": "None"
  },
  {
    "code": "D0102",
    "description": "Unauthorized usage",
    "solution": "None"
  },
  {
    "code": "D0103",
    "description": "PIN error",
    "solution": "None"
  },
  {
    "code": "D0104",
    "description": "Invalid PIN",
    "solution": "None"
  },
  {
    "code": "D0105",
    "description": "Bank unavailable",
    "solution": "None"
  },
  {
    "code": "D0106",
    "description": "Card not supported",
    "solution": "None"
  },
  {
    "code": "D0107",
    "description": "Insufficient funds",
    "solution": "None"
  },
  {
    "code": "D0108",
    "description": "Ineligible transaction",
    "solution": "None"
  },
  {
    "code": "D0109",
    "description": "Ineligible account",
    "solution": "None"
  },
  {
    "code": "D0110",
    "description": "Number of daily withdrawals exceeded",
    "solution": "None"
  },
  {
    "code": "D0111",
    "description": "Cannot process transaction",
    "solution": "None"
  },
  {
    "code": "D0112",
    "description": "Amount too large",
    "solution": "None"
  },
  {
    "code": "D0113",
    "description": "Account closed",
    "solution": "None"
  },
  {
    "code": "D0114",
    "description": "PIN tries exceeded",
    "solution": "None"
  },
  {
    "code": "D0115",
    "description": "Database problem",
    "solution": "None"
  },
  {
    "code": "D0116",
    "description": "Withdrawal limit already reached",
    "solution": "None"
  },
  {
    "code": "D0117",
    "description": "Invalid amount",
    "solution": "None"
  },
  {
    "code": "D0118",
    "description": "External decline",
    "solution": "None"
  },
  {
    "code": "D0119",
    "description": "System error",
    "solution": "None"
  },
  {
    "code": "D0120",
    "description": "Contact card issuer",
    "solution": "None"
  },
  {
    "code": "D0121",
    "description": "Routing lookup problem",
    "solution": "None"
  },
  {
    "code": "D0122",
    "description": "Message edit error",
    "solution": "None"
  },
  {
    "code": "D0123",
    "description": "Transaction not supported",
    "solution": "None"
  },
  {
    "code": "D0124",
    "description": "Insufficient funds",
    "solution": "None"
  },
  {
    "code": "D0125",
    "description": "Western Union sender data error",
    "solution": "None"
  },
  {
    "code": "D0126",
    "description": "Western Union receiver data error",
    "solution": "None"
  },
  {
    "code": "D0127",
    "description": "CRC error",
    "solution": "None"
  },
  {
    "code": "D0128",
    "description": "Pre-pay transaction failed",
    "solution": "None"
  },
  {
    "code": "D0129",
    "description": "Pre-pay transaction rejected",
    "solution": "None"
  },
  {
    "code": "D0130",
    "description": "Invalid mobile phone number",
    "solution": "None"
  },
  {
    "code": "D0131",
    "description": "Pre-pay account limit reached",
    "solution": "None"
  },
  {
    "code": "D0132",
    "description": "Pre-pay system unavailable",
    "solution": "None"
  },
  {
    "code": "D0133",
    "description": "Response would exceed message size limit",
    "solution": "None"
  },
  {
    "code": "D0134",
    "description": "Necessary information missing to process transaction",
    "solution": "None"
  },
  {
    "code": "D0135",
    "description": "Second Invalid PIN (one try left before deactivation)",
    "solution": "None"
  },
  {
    "code": "D0300",
    "description": "Modem is not responding",
    "solution": "Use diagnostic or modem test to test modem. If error is persistent, modem may be defective."
  },
  {
    "code": "D1000",
    "description": "No Connection",
    "solution": "Use diagnostic or modem test to test modem. If error is persistent, modem may be defective."
  },
  {
    "code": "D1100",
    "description": "ENQ not received from host",
    "solution": "Verify all programming and Mini-Bank Software version. Contact host processor."
  },
  {
    "code": "D1200",
    "description": "Transmission error",
    "solution": "Use diagnostic or modem test to test modem. If error is persistent, modem may be defective."
  },
  {
    "code": "D1300",
    "description": "NAK sent 3 times to host",
    "solution": "Verify host phone number. If persistent, it could be a defective modem."
  },
  {
    "code": "D1500",
    "description": "Modem connection timeout \u2013 host not responding",
    "solution": "Verify host phone number and modem speed. If consistent, it can be a defective modem."
  },
  {
    "code": "D1702",
    "description": "Modem connection error",
    "solution": "Phone line will not support data communication. In-line filter may help. Check for excessive EMI from outside sources (neon sign, freezer). Check all programming (especially Dual Master Key setting and Host Processor Mode)."
  },
  {
    "code": "D1706",
    "description": "Modem connection error",
    "solution": "Phone line will not support data communication. In-line filter may help. Check for excessive EMI from outside sources (neon sign, freezer). Check all programming."
  },
  {
    "code": "D170x",
    "description": "Modem cannot support connection \u2013 excessive line noise",
    "solution": "Phone line will not support data communication. In-line filter may fix this. Check for excessive EMI from outside sources. Check all programming (especially Dual Master Key setting and Host Processor Mode)."
  },
  {
    "code": "D1800",
    "description": "No dial tone",
    "solution": "Verify that incoming phone line is plugged into 'Line' rather than 'Phone' on mainboard. Phone line may be in use or shared with another device (FAX, POS, phone). This error occurs only if there is no dial tone at the mainboard."
  },
  {
    "code": "D1900",
    "description": "No answer",
    "solution": "Verify host phone number. There is no answer from the host modem."
  },
  {
    "code": "D2000",
    "description": "Phone line Busy",
    "solution": "Verify host phone number \u2014 call line with handset and check for busy signal. ATM modem is receiving a busy signal when it dials out."
  },
  {
    "code": "D2100",
    "description": "Modem initialization error",
    "solution": "Check modem in diagnostics or modem test. If persistent, could be a defective modem. One or two instances does not usually indicate a defective part."
  },
  {
    "code": "D2200",
    "description": "EOT not received from host",
    "solution": "Verify all programming and Mini-Bank Software version. Contact host processor."
  },
  {
    "code": "D2500",
    "description": "Cannot connect to the host",
    "solution": "Check the connection."
  },
  {
    "code": "D2510",
    "description": "Timeout while Sending",
    "solution": "None"
  },
  {
    "code": "D2511",
    "description": "Communication error while Sending",
    "solution": "None"
  },
  {
    "code": "D2513",
    "description": "Timeout while Receiving",
    "solution": "None"
  },
  {
    "code": "D2514",
    "description": "Communication error while Receiving",
    "solution": "None"
  },
  {
    "code": "D2515",
    "description": "Socket Error while Receiving",
    "solution": "None"
  },
  {
    "code": "D3204",
    "description": "Invalid Host phone number",
    "solution": "Verify the Host phone number is programmed correctly. Do not use spaces or dashes in the phone number string."
  },
  {
    "code": "E000x",
    "description": "RMS port failure / response timeout / modem failure / no dial tone",
    "solution": "Verify RMS settings (Host Setup)."
  },
  {
    "code": "F0001",
    "description": "Current Number of Bills is 0",
    "solution": "Load notes into the cash cassette \u2014 use Add Cassette function in Settlement."
  },
  {
    "code": "F0002",
    "description": "No Surcharge Owner set",
    "solution": "Set Surcharge owner (Customer Setup)."
  },
  {
    "code": "F0003",
    "description": "No Surcharge Amount",
    "solution": "Set Surcharge amount (Customer Setup)."
  },
  {
    "code": "F0004",
    "description": "No refresh timer set when advertisement is enabled",
    "solution": "Set refresh timer (Customer Setup)."
  },
  {
    "code": "F0005",
    "description": "No Advertisement text when advertisement is enabled",
    "solution": "Set Advertisement text (Customer Setup)."
  },
  {
    "code": "F0006",
    "description": "Dispense limit set error (must be less than 25 notes)",
    "solution": "Set Dispense limit (Transaction Setup)."
  },
  {
    "code": "F0007",
    "description": "Denomination Set error",
    "solution": "Valid Denominations are $10, $20, $50, $100 (Transaction Setup)."
  },
  {
    "code": "F0008",
    "description": "Fast Cash Set error (cannot exceed dispense limit)",
    "solution": "Check fast cash settings (Transaction Setup)."
  },
  {
    "code": "F0009",
    "description": "Master Key index is invalid",
    "solution": "Check Master Key index \u2014 verify checksum (Host Setup)."
  },
  {
    "code": "F000A",
    "description": "Master Key is empty",
    "solution": "Check Master Key checksum \u2014 reinject key (Host Setup)."
  },
  {
    "code": "F000B",
    "description": "Host Telephone Number is not set",
    "solution": "Set Host Telephone Number (Host Setup)."
  },
  {
    "code": "F000C",
    "description": "Error Retry timer is not set",
    "solution": "Set Error retry timer (Host Setup)."
  },
  {
    "code": "F000D",
    "description": "RMS Password is not set when RMS is enabled",
    "solution": "Set RMS Password (Host Setup)."
  },
  {
    "code": "F000E",
    "description": "RMS phone number is not set when RMS send is enabled",
    "solution": "Set RMS Phone number (Host Setup)."
  },
  {
    "code": "F000F",
    "description": "Terminal ID is not set",
    "solution": "Set Terminal ID number (Host Setup)."
  },
  {
    "code": "F0010",
    "description": "Routing ID is not set",
    "solution": "Set Routing ID number (Host Setup)."
  },
  {
    "code": "F0011",
    "description": "Master Key Serial number is not set",
    "solution": "Set Master Key serial number (Host Setup)."
  },
  {
    "code": "F0013",
    "description": "NVRAM Failure",
    "solution": "Fatal error, defective memory chip. Replace Mainboard."
  },
  {
    "code": "F0014",
    "description": "NVRAM Failure",
    "solution": "Fatal error, defective memory chip. Replace Mainboard."
  },
  {
    "code": "F0015",
    "description": "ATM Serial No. Empty",
    "solution": "None"
  },
  {
    "code": "F0016",
    "description": "Default Master Password is not changed",
    "solution": "None"
  },
  {
    "code": "F0020",
    "description": "Host IP Address is not inputted",
    "solution": "None"
  },
  {
    "code": "F0021",
    "description": "RMS IP or Port is not inputted in RMS Enable",
    "solution": "None"
  },
  {
    "code": "P0001",
    "description": "Deposit Error",
    "solution": "Deposit Error"
  },
  {
    "code": "P0002",
    "description": "Deposit Timeout",
    "solution": "Deposit Timeout"
  },
  {
    "code": "P0003",
    "description": "Invalid Deposit",
    "solution": "Invalid Deposit"
  },
  {
    "code": "P0004",
    "description": "Deposit Cancelled",
    "solution": "Deposit Cancelled"
  },
  {
    "code": "PDN01",
    "description": "EPP Communication Error",
    "solution": "None"
  },
  {
    "code": "W0001",
    "description": "WebRMS failed to dial into the ATM",
    "solution": "This does not mean the ATM is down \u2014 WebRMS could not dial into the ATM after three attempts. Make sure the ATM is turned on, the phone line fits securely on both ends, and is not shared with a voice phone."
  },
  {
    "code": "W0002",
    "description": "WebRMS low cash warning",
    "solution": "Courtesy alert that the total bill count is under a certain amount. Update your preferences through the website to change this warning."
  },
  {
    "code": "W0003",
    "description": "WebRMS could not retrieve the local ATM time",
    "solution": "WebRMS retrieved the journal information but could not find the ATM's local time. Make sure you are running the latest application version."
  },
  {
    "code": "W0004",
    "description": "ATM time is incorrect",
    "solution": "WebRMS detected that the ATM probably has incorrect date and time settings. Go to the ATM location and manually reset the correct date with the Master Password."
  },
  {
    "code": "W0005",
    "description": "ATM was in Operator mode during dial-in",
    "solution": "Not an error \u2014 a warning that someone was on-site at the ATM and used its Operator Function menu."
  },
  {
    "code": "W0006",
    "description": "WebRMS failed to dial into ATM for more than 3 consecutive days",
    "solution": "Check with the merchant and/or site owner to ensure the ATM is turned on at all times and not sharing the line with another device."
  }
];

const hyosungCodes = [
  {
    "code": "0",
    "description": "Normal Status",
    "solution": "Normal Status"
  },
  {
    "code": "20001",
    "description": "Unable to detect a cassette",
    "solution": "Remove and replace cassette. Check the micro-switch on the inside left wall of the dispenser. Adjust if needed. Check the white plastic clips that hold the cassette in place \u2014 if broken the cassette will not stay in the dispenser."
  },
  {
    "code": "20002",
    "description": "Low Cash",
    "solution": "Low cash warning sensor is open. When 'Low Cash Warning' is enabled, this sensor opens when the cassette reaches (~75 bills). If typically stocked with low bills, consider disabling this function."
  },
  {
    "code": "20003",
    "description": "Reject Bin is Full",
    "solution": "Empty reject bin. If bin is empty, do a Cassette Total from the settlement menu. If that doesn't help, check that AP, BIOS and CDU ROM versions are compatible."
  },
  {
    "code": "20004",
    "description": "Vault Door is Open",
    "solution": "Check vault door switch (white plunger switch in upper left corner of vault). Check that the black and white 2-wire connector is properly connected at rear of main board. Move the vault switch forward to aid door clearance. Check for continuity between the switch and mainboard connector."
  },
  {
    "code": "20005",
    "description": "CDU Type Mismatch",
    "solution": "CDU ROM does not match AP software. The dispenser and mainboard must share the same country code (USA or Canada). If they don't match, reprogram the CDU. Also check if wrong parameters were entered when the CDU was programmed."
  },
  {
    "code": "20010",
    "description": "Receipt Paper Jam",
    "solution": "Remove jammed paper. Release receipt paper drawer by pressing the tab with the green sticker at the front of the printer. You may have to remove the printer to locate difficult jams. Do NOT use metal objects \u2014 use a business card or stiff paper. Use only 21# paper."
  },
  {
    "code": "20012",
    "description": "Receipt printer feed lever open",
    "solution": "Close the feed tray on the printer. If already closed, try opening and closing it, try the printer reset switch. Otherwise the printer may require service."
  },
  {
    "code": "20013",
    "description": "Receipt paper is empty",
    "solution": "Replenish the paper roll. If paper is already in the printer, look for jams or obstructions. Try the printer reset switch. If error persists, the printer may require service."
  },
  {
    "code": "20014",
    "description": "Thermal printer is overheated",
    "solution": "Allow the printer to cool and try again. Try the reset button on the printer. If this error persists, the printer will require service."
  },
  {
    "code": "20215",
    "description": "CDU detects bills prior to dispensing (CS2 sensor)",
    "solution": "Remove any jammed bills. If no bills present, use compressed air to clean the dispenser. Check and reseat all belts \u2014 loose belts can slip off rollers and block sensors."
  },
  {
    "code": "21315",
    "description": "CDU detects bills prior to dispensing (CS13 sensor)",
    "solution": "Remove any jammed bills. If no bills present, use compressed air to clean the dispenser. Check and reseat all belts."
  },
  {
    "code": "21A15",
    "description": "CDU detects bills prior to dispensing (CS1A sensor)",
    "solution": "Remove any jammed bills. If no bills present, use compressed air to clean the dispenser. Check and reseat all belts."
  },
  {
    "code": "21B15",
    "description": "CDU detects bills prior to dispensing (CS1B sensor)",
    "solution": "Remove any jammed bills. If no bills present, use compressed air to clean the dispenser. Check and reseat all belts."
  },
  {
    "code": "24A15",
    "description": "CDU detects bills prior to dispensing (CS4A sensor)",
    "solution": "Remove any jammed bills. If no bills present, use compressed air to clean the dispenser. Check and reseat all belts."
  },
  {
    "code": "24B15",
    "description": "CDU detects bills prior to dispensing (CS4B sensor)",
    "solution": "Remove any jammed bills. If no bills present, use compressed air to clean the dispenser. Check and reseat all belts."
  },
  {
    "code": "90001",
    "description": "Error during card swipe",
    "solution": "Occurs when customer attempts to swipe card unsuccessfully. May indicate card reader needs cleaning, repositioning, or the customer didn't swipe properly. If persistent, clean and test the card reader in diagnostics. Very common \u2014 does not usually indicate a bad part."
  },
  {
    "code": "A0008",
    "description": "Receipt paper cutter error",
    "solution": "Remove any jammed paper. You may need to remove the printer to clear jams. Do not use metal objects \u2014 use a business card or stiff paper. Try the reset button or have the printer serviced."
  },
  {
    "code": "A0803",
    "description": "Receipt Paper Jam",
    "solution": "Remove jammed paper. Release receipt paper drawer by pressing the tab with the green sticker. You may need to remove the printer from the ATM to access the jam. Do NOT use metal objects."
  },
  {
    "code": "A0808",
    "description": "Receipt paper cutter error",
    "solution": "Remove any jammed paper. You may need to remove the printer to clear jams. Do not use metal objects \u2014 use a business card or stiff paper. Try the reset button or have the printer serviced."
  },
  {
    "code": "ADN04",
    "description": "Printer connection error",
    "solution": "Check cables between Printer and Mainboard, remove and re-connect. Use electrical parts contact cleaner on terminals. Try the reset button on the printer. If consistent, the printer or mainboard may require service."
  },
  {
    "code": "ADN0F",
    "description": "Printer connection error",
    "solution": "Check cables between Printer and Mainboard, remove and re-connect. Use electrical parts contact cleaner on terminals. Try the reset button. If consistent, printer or mainboard may require service."
  },
  {
    "code": "ADNxx",
    "description": "Printer connection error",
    "solution": "Check cables between Printer and Mainboard, remove and re-connect. Use electrical parts contact cleaner on terminals. Try the reset button. If consistent, printer or mainboard may require service."
  },
  {
    "code": "Axxx2",
    "description": "Thermal printer overheated during operation",
    "solution": "Allow the printer to cool and try again. Try the reset button. If this error persists, the printer will require service."
  },
  {
    "code": "Axxx3",
    "description": "Receipt Paper Jam",
    "solution": "Remove jammed paper. Release receipt paper drawer by pressing the tab with the green sticker. You may need to remove the printer from the ATM to access the jam. Do NOT use metal objects."
  },
  {
    "code": "Axxx4",
    "description": "Receipt paper is empty",
    "solution": "Replenish the paper roll. If roll is ok, try the reset button. Otherwise the printer needs service."
  },
  {
    "code": "Axxx5",
    "description": "Receipt paper jamming during loading",
    "solution": "Remove any jammed paper and reload. You may need to remove the printer to clear jams. Do not use metal objects. Try the reset button or have the printer serviced."
  },
  {
    "code": "C0011",
    "description": "CDU sensor is tripped",
    "solution": "During dispense, the sensor at the front of the CDU shows a blockage (CS13 or CS2). Usually a bill bouncing back from the cash tray. Check the front of the CDU and cash tray for blockage. Reinitialize the ATM to put back in service."
  },
  {
    "code": "C0014",
    "description": "CDU sensor is tripped",
    "solution": "Similar to C0011 \u2014 indicates a bill jam close to the exit of the CDU or near the reject bin. Check for jammed notes or blocked sensors."
  },
  {
    "code": "C001x",
    "description": "CDU sensor is tripped",
    "solution": "Typically a C0011 error \u2014 bill jam at the exit sensor of the Cash Dispenser. Usually caused by a customer putting fingers in the cash drawer during dispense. You can loosen the screws that hold the dispenser and slide it back."
  },
  {
    "code": "C0028",
    "description": "CDU sensor is tripped",
    "solution": "Check dispenser for jammed bills and restart the machine. If no bills present, use compressed air to clean the dispenser. Otherwise the dispenser may require service."
  },
  {
    "code": "C002x",
    "description": "CDU sensor is tripped",
    "solution": "Check dispenser for jammed bills and restart the machine. If no bills present, use compressed air to clean the dispenser. Otherwise the dispenser may require service."
  },
  {
    "code": "C0030",
    "description": "CDU motor failure",
    "solution": "Motor speed (measured at the encoder wheel) was not within spec. Verify that CS8 or encoder wheel sensor is in place and wire connection is good. Can indicate a bad motor or encoder sensor."
  },
  {
    "code": "C0031",
    "description": "CDU Gate solenoid error",
    "solution": "The CDU did not respond to its solenoid function check. Check the wiring connections to the solenoid(s) and to the CDU main board."
  },
  {
    "code": "C0032",
    "description": "Outlet solenoid error",
    "solution": "Check and verify all connections to the dispenser circuit board. Check wiring to the solenoid(s)."
  },
  {
    "code": "C0033",
    "description": "CDU Encoder error",
    "solution": "Usually caused by loss of battery power to the CDU mainboard. The only way to recover is to reprogram the CDU data. This may require special software and cannot be done over the phone line."
  },
  {
    "code": "C0034",
    "description": "Double Note detect module failure",
    "solution": "Double detect module reporting error. Check wiring to the module."
  },
  {
    "code": "C0035",
    "description": "Double Note detect module failure (2)",
    "solution": "Double detect module reporting error. Check wiring to the module."
  },
  {
    "code": "C0036",
    "description": "Detected notes in path before initializing",
    "solution": "Check for notes in the Cash Dispenser. If no bills present, use compressed air to clean the dispenser. Otherwise the dispenser may require service."
  },
  {
    "code": "C0037",
    "description": "Sensor for detecting Double covered during dispensing",
    "solution": "Check cable running to sensors and make sure they are securely placed. These sensors are next to the feed belts where the money is picked."
  },
  {
    "code": "C0039",
    "description": "Gate sensor open during initializing",
    "solution": "Check the sensor activated when you close the reject bin door (2k/4k dispensers only). Check the springs on the underside of the solenoids \u2014 one may be disconnected. Otherwise the CDU will require repair/replacement."
  },
  {
    "code": "C003B",
    "description": "Notes detected during installation",
    "solution": "Check for notes in the Cash Dispenser. If no bills present, use compressed air to clean the dispenser. Otherwise the dispenser may require service."
  },
  {
    "code": "C0040",
    "description": "Cassette removed during dispense",
    "solution": "Reset the cassette. Check position of microswitch on right rear wall of cassette bay in the dispenser. Check the condition of the white plastic cassette retaining clips."
  },
  {
    "code": "C0041",
    "description": "Tried to dispense notes more than 5 times",
    "solution": "Check the condition of the cash in the cassette. Verify cash is of good quality. The CDU belts or cassette rollers may need to be cleaned (rubbing alcohol). Check that the denomination in Transaction Setup matches the actual denomination loaded."
  },
  {
    "code": "C0042",
    "description": "Note jam",
    "solution": "Check for notes in the Cash Dispenser. If no bills present, use compressed air to clean the dispenser. Otherwise the dispenser may require service."
  },
  {
    "code": "C0043",
    "description": "More than 10 notes rejected during one transaction",
    "solution": "Verify the quality of the cash. Straighten and shuffle cash in the cassette. Check the reject analysis (reports menu). If cash is good quality, try cleaning the cassette and dispenser. Otherwise service may be required."
  },
  {
    "code": "C0044",
    "description": "More than 5 notes rejected consecutively",
    "solution": "Verify the quality of the cash. Straighten and shuffle cash in the cassette. Check the reject analysis (reports menu). If cash is good quality, try cleaning. Otherwise service may be required."
  },
  {
    "code": "C0045",
    "description": "Notes Overdispensed",
    "solution": "Check NS4 Sensor."
  },
  {
    "code": "C0046",
    "description": "CDU Hardware Failure",
    "solution": "Error reported during CDU initialization. Check cabling and potential blockages and power cycle ATM. CDU Board may have dropped firmware."
  },
  {
    "code": "C0047",
    "description": "Feed error",
    "solution": "Dispenser attempts to pull a bill from the cassette and is unsuccessful before timing out. Can be as simple as the cassette being empty, rollers needing cleaning, or a firmware upgrade to the CDU may be needed."
  },
  {
    "code": "C0048",
    "description": "Incorrect bill count",
    "solution": "Verify cash count in the Settlement menu."
  },
  {
    "code": "C004A",
    "description": "Jammed notes",
    "solution": "Check for notes in the Cash Dispenser. If no bills present, use compressed air to clean the dispenser. Otherwise the dispenser may require service."
  },
  {
    "code": "C004B",
    "description": "Long note detected 3 times consecutively",
    "solution": "Verify the quality of the cash. Straighten and shuffle cash in the cassette. Try cleaning the cassette and dispenser. If persistent, service may be required."
  },
  {
    "code": "C004C",
    "description": "Miscount of notes between sensors",
    "solution": "Verify operation of exit gate. Check the number of dispensed notes. Clean the dispenser and test using diagnostics. Dispenser may require service."
  },
  {
    "code": "C004D",
    "description": "Cash cassette not properly set",
    "solution": "Reset the cassette. Check position of microswitch on right rear wall of cassette bay. Check condition of white plastic cassette retaining clips. MB1000: check condition of the clutch alignment screw."
  },
  {
    "code": "C004E",
    "description": "Miscount of notes between sensors",
    "solution": "Test CDU using diagnostics. Use journal to verify amount of dispensed notes versus requested notes. Clean dispenser and cassette. If error persists, dispenser may require service."
  },
  {
    "code": "C004F",
    "description": "Miscount of notes between sensors",
    "solution": "Test CDU using diagnostics. Use journal to verify dispensed notes vs requested. Clean dispenser and cassette. If error persists, dispenser may require service."
  },
  {
    "code": "C0050",
    "description": "Power failure during dispense",
    "solution": "Remove any notes from path. Before reinitializing, verify amount of dispensed notes in the cassette against the journal."
  },
  {
    "code": "C0051",
    "description": "Over 150 notes requested",
    "solution": "Possibly due to too many rejects. Check the Reject Analysis. Cash quality and condition of rollers in the cassette can affect this condition."
  },
  {
    "code": "C0052",
    "description": "Detected notes in path after dispense",
    "solution": "Remove any notes from path. Verify amount of dispensed notes. Clean dispenser. Verify bill count against the journal."
  },
  {
    "code": "C0053",
    "description": "CDU double detect module failure",
    "solution": "Double detect module may require adjustment. Check wiring and CDU mainboard connections."
  },
  {
    "code": "C0055",
    "description": "Detected long notes at outlet sensor",
    "solution": "Typically a bounce back of a bill during dispense causing the exit sensor to remain blocked longer than expected. See C0011."
  },
  {
    "code": "C0056",
    "description": "Exit gate sensor failure",
    "solution": "Check condition of exit gate and the exit gate sensor."
  },
  {
    "code": "C0057",
    "description": "Cassette information is not properly set",
    "solution": "CDU programming is not accurate or complete."
  },
  {
    "code": "C0059",
    "description": "Cash cassette 2 removed prior to dispense",
    "solution": "Set the cash cassette. Inspect the cassette detection microswitch. Reposition if necessary."
  },
  {
    "code": "C005A",
    "description": "Cash cassette 1 removed prior to dispense",
    "solution": "Set the cash cassette. Inspect the cassette detection microswitch. Reposition if necessary."
  },
  {
    "code": "C005B",
    "description": "Cash cassette 2 misfeed",
    "solution": "Check cassette for jams. Check condition of bills in cassette."
  },
  {
    "code": "C005D",
    "description": "Double detect constantly",
    "solution": "Inspect double detect module and adjust as necessary. Check and clean the cassette and rollers. Verify quality of cash."
  },
  {
    "code": "C005E",
    "description": "Dispense command size check error",
    "solution": "Re-initialize machine, verify connections to mainboard. Check for unplugged sensors."
  },
  {
    "code": "C005F",
    "description": "Dispense command error",
    "solution": "Re-initialize machine, verify connections, check for unplugged sensors."
  },
  {
    "code": "C006x",
    "description": "Sensor failure",
    "solution": "Check for notes in the Cash Dispenser. If no bills present, use compressed air to clean the dispenser. Otherwise the dispenser may require service."
  },
  {
    "code": "C007x",
    "description": "Sensor failure",
    "solution": "Check for notes in the Cash Dispenser. If no bills present, use compressed air to clean the dispenser. Otherwise the dispenser may require service."
  },
  {
    "code": "C0082",
    "description": "Shutter failure",
    "solution": "Check all wiring connections to CDU mainboard. Reinitialize CDU."
  },
  {
    "code": "C0083",
    "description": "Stacker sensor failure",
    "solution": "Check all wiring connections to CDU mainboard. Reinitialize CDU."
  },
  {
    "code": "C0084",
    "description": "Shutter close error",
    "solution": "Check all wiring connections to CDU mainboard. Reinitialize CDU."
  },
  {
    "code": "C009F",
    "description": "Cassette misfeed error",
    "solution": "Check if notes are available in cassette."
  },
  {
    "code": "C00AB",
    "description": "Notes detected before initializing",
    "solution": "Clear notes from dispenser. Possibly dust or foreign object blocking sensor."
  },
  {
    "code": "C00C1",
    "description": "Cassette 1 bill jam during dispense operation",
    "solution": "Remove bill jam."
  },
  {
    "code": "C00C7",
    "description": "CS12 Sensor blocked",
    "solution": "MB2100T: The CS12 sensor at the upper part of the cash tray was blocked while dispensing or initializing. Clear the cash tray of any bills or foreign objects. If error persists, the vault assembly may need to be removed to inspect the sensors."
  },
  {
    "code": "C00C8",
    "description": "CS14 Sensor blocked",
    "solution": "MB2100T: The CS14 sensor close to the front of the cash tray was blocked. Clear the cash tray of any bills or foreign objects. If error persists, the vault assembly may need to be removed."
  },
  {
    "code": "C00C9",
    "description": "CS12 & CS14 Sensors blocked",
    "solution": "MB2100T: Both CS12 and CS14 sensors were blocked. These sensors prevent tampering with the bill path. Clear the cash tray of any bills or foreign objects. If error persists, the vault assembly may need to be removed."
  },
  {
    "code": "C00D0",
    "description": "Sensor block while dispensing",
    "solution": "MB2100T: A blockage was detected between the CS13 (CDU exit gate) and CS12 cash tray sensors. There may be a note stuck in the upper part of the cash tray ramp. Clear the cash tray of notes or foreign objects. Open the vault and slide the dispenser back to access the exit gate area."
  },
  {
    "code": "C00D1",
    "description": "Sensor blocked while dispensing",
    "solution": "MB2100T: A blockage was detected between the CS12 (upper cash tray sensor) and CS14 (lower cash tray sensor). There may be a note stuck in the cash tray ramp. Clear the cash tray of notes or foreign objects."
  },
  {
    "code": "C00E0",
    "description": "NS2A, NS2B dark",
    "solution": "Nanocash only \u2014 verify connections to sensors. Check wiring to mainboard."
  },
  {
    "code": "C00E1",
    "description": "NS4 dark",
    "solution": "Verify connections to NS4 sensor. Check all wiring to mainboard."
  },
  {
    "code": "C00FF",
    "description": "Sensor blocked",
    "solution": "N/A"
  },
  {
    "code": "CANCE",
    "description": "User canceled transaction at surcharge",
    "solution": "Not an error \u2014 a statistic showing how many users respond 'no' to the surcharge notification."
  },
  {
    "code": "CDN01",
    "description": "No Response after send command",
    "solution": "None"
  },
  {
    "code": "CDN05",
    "description": "CDU connection failure",
    "solution": "Check cables between CDU and Mainboard, remove and re-connect. Use electrical parts contact cleaner on terminals. Only a concern if repeated. Outside interference may cause it (neon signs, lights)."
  },
  {
    "code": "CDN0F",
    "description": "CDU connection failure",
    "solution": "Check cables between CDU and Mainboard, remove and re-connect. Use electrical parts contact cleaner on terminals. Only a concern if repeated."
  },
  {
    "code": "CDN11",
    "description": "No Response after 3 retry of command",
    "solution": "None"
  },
  {
    "code": "CDN12",
    "description": "No Response between ENQ-ACK after 5 retry of ENQ",
    "solution": "None"
  },
  {
    "code": "CDN13",
    "description": "No Response after 5 retry due to timeout",
    "solution": "None"
  },
  {
    "code": "CDNxx",
    "description": "CDU connection failure",
    "solution": "Check cables between CDU and Mainboard, remove and re-connect. Use electrical parts contact cleaner on terminals. Only a concern if repeated."
  },
  {
    "code": "D0001",
    "description": "Modem initialization error",
    "solution": "Check modem in diagnostics or modem test. If persistent, could be a defective modem. Check Modem Initial String. One or two instances does not usually indicate a defective part."
  },
  {
    "code": "D0002",
    "description": "Reversal transaction failed",
    "solution": "The ATM attempted to do a reversal and could not. Check transaction with the processor. Verify CDU functionality with diagnostics. Verify phone connection. Look in error summary for D1800, D2000."
  },
  {
    "code": "D0005",
    "description": "Undefined network processing error",
    "solution": "Code reported by host processor. Contact your ISO or processor if you encounter an excessive amount of these errors or cannot complete a test transaction."
  },
  {
    "code": "D0011",
    "description": "Format error in the message",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0012",
    "description": "Invalid Transaction",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0013",
    "description": "Invalid Amount",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0014",
    "description": "Invalid Card Number",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0019",
    "description": "Reenter the entire transaction",
    "solution": "Code reported by host processor (Shazam). Contact your ISO or processor."
  },
  {
    "code": "D0020",
    "description": "Surcharge screen should have been displayed",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0024",
    "description": "Exceeds issuer withdrawal limit",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0031",
    "description": "Issuer financial institution not supported by processor",
    "solution": "Code reported by host processor (Shazam). Contact your ISO or processor."
  },
  {
    "code": "D0039",
    "description": "No credit account",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0041",
    "description": "No credit account found for the CCN",
    "solution": "Code reported by host processor (Shazam). Contact your ISO or processor."
  },
  {
    "code": "D0043",
    "description": "Stolen Card",
    "solution": "Code reported by host processor (Shazam). Contact your ISO or processor."
  },
  {
    "code": "D0050",
    "description": "Transaction is not approved",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0051",
    "description": "Insufficient funds",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0052",
    "description": "No checking account",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0053",
    "description": "No savings account",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0054",
    "description": "Expired Card",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0055",
    "description": "Invalid PIN",
    "solution": "Code reported from host processor. Verify all programming. For new installations, if master keys are not bound properly or Terminal ID is not active, this can occur. If programming appears correct, contact the processor and have them trace the Terminal ID."
  },
  {
    "code": "D0056",
    "description": "No card record found",
    "solution": "Code reported by host processor (Shazam). Contact your ISO or processor."
  },
  {
    "code": "D0057",
    "description": "Transaction not permitted \u2013 card",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0058",
    "description": "Transaction not permitted \u2013 Terminal",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0059",
    "description": "Customer should contact financial institution",
    "solution": "Code reported by host processor (Shazam). Contact your ISO or processor."
  },
  {
    "code": "D0060",
    "description": "Allowable withdrawal limit exceeded",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0061",
    "description": "Exceeded withdrawal limit",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0065",
    "description": "Exceeds withdrawal frequency limit",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0067",
    "description": "Capture card at the terminal",
    "solution": "Code reported by host processor (Shazam). Contact your ISO or processor."
  },
  {
    "code": "D0075",
    "description": "Number of PIN tries exceeded",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0078",
    "description": "No Account",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0080",
    "description": "Invalid Date",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0081",
    "description": "Timeout: response not received in time allowed",
    "solution": "Code reported by host processor (Shazam). Contact your ISO or processor."
  },
  {
    "code": "D0082",
    "description": "Cashback limit exceeded",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0083",
    "description": "Cannot verify PIN",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0084",
    "description": "Processor not available",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0086",
    "description": "Cannot verify PIN",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0090",
    "description": "Cutoff complete for terminal",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0091",
    "description": "Bank unavailable",
    "solution": "Code reported by host processor. Contact your ISO or processor."
  },
  {
    "code": "D0092",
    "description": "System unavailable",
    "solution": "Code reported by host processor. Possible Incorrect Check Digit (Master Keys). Contact your ISO or processor."
  },
  {
    "code": "D0093",
    "description": "Transaction serial number mismatch",
    "solution": "Verify all programming, contact host processor."
  },
  {
    "code": "D0094",
    "description": "Record format mismatch",
    "solution": "Verify all programming, contact host processor."
  },
  {
    "code": "D0095",
    "description": "Routing ID mismatch",
    "solution": "Verify Routing ID number, contact host processor."
  },
  {
    "code": "D0096",
    "description": "Terminal ID mismatch",
    "solution": "Verify Terminal ID number, contact host processor."
  },
  {
    "code": "D0097",
    "description": "Response type mismatch (reversal)",
    "solution": "Verify all programming, contact host processor."
  },
  {
    "code": "D0098",
    "description": "Response type mismatch (day-close)",
    "solution": "Verify all programming, contact host processor."
  },
  {
    "code": "D0099",
    "description": "Response type mismatch (Configuration)",
    "solution": "Verify all programming, contact host processor."
  },
  {
    "code": "D009A",
    "description": "Response type mismatch (Withdrawal, Balance, Transfer)",
    "solution": "Verify all programming, contact host processor."
  },
  {
    "code": "D009B",
    "description": "STX omitted",
    "solution": "Verify all programming, contact host processor."
  },
  {
    "code": "D009C",
    "description": "ETX omitted",
    "solution": "Verify all programming, contact host processor."
  },
  {
    "code": "D009D",
    "description": "FS omitted (after response code)",
    "solution": "Verify Mini-Bank Software version matches host processor. Contact host processor."
  },
  {
    "code": "D009E",
    "description": "FS omitted (after retrieval reference number)",
    "solution": "Verify all programming and Mini-Bank Software version. Contact host processor."
  },
  {
    "code": "D009F",
    "description": "FS omitted (after system trace audit number)",
    "solution": "Verify all programming and Mini-Bank Software version. Contact host processor."
  },
  {
    "code": "D00A0",
    "description": "FS omitted (after account balance)",
    "solution": "Verify all programming and Mini-Bank Software version. Contact host processor."
  },
  {
    "code": "D00A1",
    "description": "FS omitted (after available balance)",
    "solution": "Verify all programming and Mini-Bank Software version. Contact host processor."
  },
  {
    "code": "D00A2",
    "description": "FS omitted (after available balance)",
    "solution": "Verify all programming and Mini-Bank Software version. Contact host processor. Check T-DES Type."
  },
  {
    "code": "D00A3",
    "description": "FS omitted (after authorization response text)",
    "solution": "Verify all programming and Mini-Bank Software version. Contact host processor."
  },
  {
    "code": "D00A4",
    "description": "ETX is in wrong place",
    "solution": "Verify all programming and Mini-Bank Software version. Contact host processor."
  },
  {
    "code": "D00A5",
    "description": "FS omitted (after total cash dispense amount in day close)",
    "solution": "Verify all programming and Mini-Bank Software version. Contact host processor."
  },
  {
    "code": "D00A6",
    "description": "FS omitted (after total non cash dispense amount in day close)",
    "solution": "Verify all programming and Mini-Bank Software version. Contact host processor."
  },
  {
    "code": "D00A7",
    "description": "FS omitted (after surcharge amount in day close message)",
    "solution": "Verify all programming and Mini-Bank Software version. Contact host processor."
  },
  {
    "code": "D00A8",
    "description": "FS omitted (after surcharge amount in configuration message)",
    "solution": "Verify all programming. Check that Dual Master Key is disabled (non Coredata). Contact host processor."
  },
  {
    "code": "D00A9",
    "description": "ETX omitted (from configuration message)",
    "solution": "Verify all programming and Mini-Bank Software version. Contact host processor."
  },
  {
    "code": "D00B0",
    "description": "Invalid Terminal ID",
    "solution": "Contact host processor."
  },
  {
    "code": "D0100",
    "description": "Transaction approved",
    "solution": "None"
  },
  {
    "code": "D0101",
    "description": "Expired card",
    "solution": "None"
  },
  {
    "code": "D0102",
    "description": "Unauthorized usage",
    "solution": "None"
  },
  {
    "code": "D0103",
    "description": "PIN error",
    "solution": "None"
  },
  {
    "code": "D0104",
    "description": "Invalid PIN",
    "solution": "None"
  },
  {
    "code": "D0105",
    "description": "Bank unavailable",
    "solution": "None"
  },
  {
    "code": "D0106",
    "description": "Card not supported",
    "solution": "None"
  },
  {
    "code": "D0107",
    "description": "Insufficient funds",
    "solution": "None"
  },
  {
    "code": "D0108",
    "description": "Ineligible transaction",
    "solution": "None"
  },
  {
    "code": "D0109",
    "description": "Ineligible account",
    "solution": "None"
  },
  {
    "code": "D0110",
    "description": "Number of daily withdrawals exceeded",
    "solution": "None"
  },
  {
    "code": "D0111",
    "description": "Cannot process transaction",
    "solution": "None"
  },
  {
    "code": "D0112",
    "description": "Amount too large",
    "solution": "None"
  },
  {
    "code": "D0113",
    "description": "Account closed",
    "solution": "None"
  },
  {
    "code": "D0114",
    "description": "PIN tries exceeded",
    "solution": "None"
  },
  {
    "code": "D0115",
    "description": "Database problem",
    "solution": "None"
  },
  {
    "code": "D0116",
    "description": "Withdrawal limit already reached",
    "solution": "None"
  },
  {
    "code": "D0117",
    "description": "Invalid amount",
    "solution": "None"
  },
  {
    "code": "D0118",
    "description": "External decline",
    "solution": "None"
  },
  {
    "code": "D0119",
    "description": "System error",
    "solution": "None"
  },
  {
    "code": "D0120",
    "description": "Contact card issuer",
    "solution": "None"
  },
  {
    "code": "D0121",
    "description": "Routing lookup problem",
    "solution": "None"
  },
  {
    "code": "D0122",
    "description": "Message edit error",
    "solution": "None"
  },
  {
    "code": "D0123",
    "description": "Transaction not supported",
    "solution": "None"
  },
  {
    "code": "D0124",
    "description": "Insufficient funds",
    "solution": "None"
  },
  {
    "code": "D0125",
    "description": "Western Union sender data error",
    "solution": "None"
  },
  {
    "code": "D0126",
    "description": "Western Union receiver data error",
    "solution": "None"
  },
  {
    "code": "D0127",
    "description": "CRC error",
    "solution": "None"
  },
  {
    "code": "D0128",
    "description": "Pre-pay transaction failed",
    "solution": "None"
  },
  {
    "code": "D0129",
    "description": "Pre-pay transaction rejected",
    "solution": "None"
  },
  {
    "code": "D0130",
    "description": "Invalid mobile phone number",
    "solution": "None"
  },
  {
    "code": "D0131",
    "description": "Pre-pay account limit reached",
    "solution": "None"
  },
  {
    "code": "D0132",
    "description": "Pre-pay system unavailable",
    "solution": "None"
  },
  {
    "code": "D0133",
    "description": "Response would exceed message size limit",
    "solution": "None"
  },
  {
    "code": "D0134",
    "description": "Necessary information missing to process transaction",
    "solution": "None"
  },
  {
    "code": "D0135",
    "description": "Second Invalid PIN (one try left before deactivation)",
    "solution": "None"
  },
  {
    "code": "D0300",
    "description": "Modem is not responding",
    "solution": "Use diagnostic or modem test to test modem. If error is persistent, modem may be defective."
  },
  {
    "code": "D1000",
    "description": "No Connection",
    "solution": "Use diagnostic or modem test to test modem. If error is persistent, modem may be defective."
  },
  {
    "code": "D1100",
    "description": "ENQ not received from host",
    "solution": "Verify all programming and Mini-Bank Software version. Contact host processor."
  },
  {
    "code": "D1200",
    "description": "Transmission error",
    "solution": "Use diagnostic or modem test to test modem. If error is persistent, modem may be defective."
  },
  {
    "code": "D1300",
    "description": "NAK sent 3 times to host",
    "solution": "Verify host phone number. If persistent, it could be a defective modem."
  },
  {
    "code": "D1500",
    "description": "Modem connection timeout \u2013 host not responding",
    "solution": "Verify host phone number and modem speed. If consistent, it can be a defective modem."
  },
  {
    "code": "D1701",
    "description": "Stutter tone on phone line",
    "solution": "Check for stutter tone on phone line (voicemail)."
  },
  {
    "code": "D1702",
    "description": "Modem connection error",
    "solution": "Phone line will not support data communication. In-line filter may help. Check for excessive EMI from outside sources (neon sign, freezer). Check all programming (especially Dual Master Key setting and Host Processor Mode)."
  },
  {
    "code": "D1704",
    "description": "Modem connection error",
    "solution": "Phone line will not support data communication. In-line filter may help. Check for excessive EMI from outside sources. Check all programming (especially Dual Master Key setting and Host Processor Mode)."
  },
  {
    "code": "D1706",
    "description": "Modem connection error",
    "solution": "Phone line will not support data communication. In-line filter may help. Check for excessive EMI from outside sources. Check all programming."
  },
  {
    "code": "D170x",
    "description": "Modem cannot support connection \u2013 excessive line noise",
    "solution": "Phone line will not support data communication. In-line filter may fix this. Check for excessive EMI from outside sources. Check all programming (especially Dual Master Key setting and Host Processor Mode)."
  },
  {
    "code": "D1800",
    "description": "No dial tone",
    "solution": "Verify that incoming phone line is plugged into 'Line' rather than 'Phone' on mainboard. Phone line may be in use or shared with another device (FAX, POS, phone). This error occurs only if there is no dial tone at the mainboard."
  },
  {
    "code": "D1900",
    "description": "No answer",
    "solution": "Verify host phone number. There is no answer from the host modem."
  },
  {
    "code": "D2000",
    "description": "Phone line Busy",
    "solution": "Verify host phone number \u2014 call line with handset and check for busy signal. ATM modem is receiving a busy signal when it dials out."
  },
  {
    "code": "D2100",
    "description": "Modem initialization error",
    "solution": "Check modem in diagnostics or modem test. If persistent, could be a defective modem. One or two instances does not usually indicate a defective part."
  },
  {
    "code": "D2200",
    "description": "EOT not received from host",
    "solution": "Verify all programming and Mini-Bank Software version. Contact host processor."
  },
  {
    "code": "D2500",
    "description": "Cannot connect to the host",
    "solution": "Check the connection."
  },
  {
    "code": "D2510",
    "description": "Timeout while Sending",
    "solution": "None"
  },
  {
    "code": "D2511",
    "description": "Communication error while Sending",
    "solution": "None"
  },
  {
    "code": "D2513",
    "description": "Timeout while Receiving",
    "solution": "None"
  },
  {
    "code": "D2514",
    "description": "Communication error while Receiving",
    "solution": "None"
  },
  {
    "code": "D2515",
    "description": "Socket Error while Receiving",
    "solution": "None"
  },
  {
    "code": "D3203",
    "description": "Modem Initialization Error",
    "solution": "Reseat socket modem, then replace modem."
  },
  {
    "code": "D3204",
    "description": "Invalid Host phone number",
    "solution": "Verify the Host phone number is programmed correctly. Do not use spaces or dashes in the phone number string."
  },
  {
    "code": "E000x",
    "description": "RMS port failure / response timeout / modem failure / no dial tone",
    "solution": "Verify RMS settings (Host Setup)."
  },
  {
    "code": "F0001",
    "description": "Current Number of Bills is 0",
    "solution": "Load notes into the cash cassette \u2014 use Add Cassette function in Settlement."
  },
  {
    "code": "F0002",
    "description": "No Surcharge Owner set",
    "solution": "Set Surcharge owner (Customer Setup)."
  },
  {
    "code": "F0003",
    "description": "No Surcharge Amount",
    "solution": "Set Surcharge amount (Customer Setup)."
  },
  {
    "code": "F0004",
    "description": "No refresh timer set when advertisement is enabled",
    "solution": "Set refresh timer (Customer Setup)."
  },
  {
    "code": "F0005",
    "description": "No Advertisement text when advertisement is enabled",
    "solution": "Set Advertisement text (Customer Setup)."
  },
  {
    "code": "F0006",
    "description": "Dispense limit set error (must be less than 25 notes)",
    "solution": "Set Dispense limit (Transaction Setup)."
  },
  {
    "code": "F0007",
    "description": "Denomination Set error",
    "solution": "Valid Denominations are $10, $20, $50, $100 (Transaction Setup)."
  },
  {
    "code": "F0008",
    "description": "Fast Cash Set error (cannot exceed dispense limit)",
    "solution": "Check fast cash settings (Transaction Setup)."
  },
  {
    "code": "F0009",
    "description": "Master Key index is invalid",
    "solution": "Check Master Key index \u2014 verify checksum (Host Setup)."
  },
  {
    "code": "F000A",
    "description": "Master Key is empty",
    "solution": "Check Master Key checksum \u2014 reinject key (Host Setup)."
  },
  {
    "code": "F000B",
    "description": "Host Telephone Number is not set",
    "solution": "Set Host Telephone Number (Host Setup)."
  },
  {
    "code": "F000C",
    "description": "Error Retry timer is not set",
    "solution": "Set Error retry timer (Host Setup)."
  },
  {
    "code": "F000D",
    "description": "RMS Password is not set when RMS is enabled",
    "solution": "Set RMS Password (Host Setup)."
  },
  {
    "code": "F000E",
    "description": "RMS phone number is not set when RMS send is enabled",
    "solution": "Set RMS Phone number (Host Setup)."
  },
  {
    "code": "F000F",
    "description": "Terminal ID is not set",
    "solution": "Set Terminal ID number (Host Setup)."
  },
  {
    "code": "F0010",
    "description": "Routing ID is not set",
    "solution": "Set Routing ID number (Host Setup)."
  },
  {
    "code": "F0011",
    "description": "Master Key Serial number is not set",
    "solution": "Set Master Key serial number (Host Setup)."
  },
  {
    "code": "F0013",
    "description": "NVRAM Failure",
    "solution": "Fatal error, defective memory chip. Replace Mainboard."
  },
  {
    "code": "F0014",
    "description": "NVRAM Failure",
    "solution": "Fatal error, defective memory chip. Replace Mainboard."
  },
  {
    "code": "F0015",
    "description": "ATM Serial No. Empty",
    "solution": "None"
  },
  {
    "code": "F0016",
    "description": "Default Master Password is not changed",
    "solution": "None"
  },
  {
    "code": "F0020",
    "description": "Host IP Address is not inputted",
    "solution": "None"
  },
  {
    "code": "F0021",
    "description": "RMS IP or Port is not inputted in RMS Enable",
    "solution": "None"
  },
  {
    "code": "P0001",
    "description": "Deposit Error",
    "solution": "Deposit Error"
  },
  {
    "code": "P0002",
    "description": "Deposit Timeout",
    "solution": "Deposit Timeout"
  },
  {
    "code": "P0003",
    "description": "Invalid Deposit",
    "solution": "Invalid Deposit"
  },
  {
    "code": "P0004",
    "description": "Deposit Cancelled",
    "solution": "Deposit Cancelled"
  },
  {
    "code": "PDN01",
    "description": "EPP Communication Error",
    "solution": "None"
  },
  {
    "code": "W0001",
    "description": "WebRMS failed to dial into the ATM",
    "solution": "This does not mean the ATM is down \u2014 WebRMS could not dial into the ATM after three attempts. Make sure the ATM is turned on, the phone line fits securely on both ends, and is not shared with a voice phone."
  },
  {
    "code": "W0002",
    "description": "WebRMS low cash warning",
    "solution": "Courtesy alert that the total bill count is under a certain amount. Update your preferences through the website to change this warning."
  },
  {
    "code": "W0003",
    "description": "WebRMS could not retrieve the local ATM time",
    "solution": "WebRMS retrieved the journal information but could not find the ATM's local time. Make sure you are running the latest application version."
  },
  {
    "code": "W0004",
    "description": "ATM time is incorrect",
    "solution": "WebRMS detected that the ATM probably has incorrect date and time settings. Go to the ATM location and manually reset the correct date with the Master Password."
  },
  {
    "code": "W0005",
    "description": "ATM was in Operator mode during dial-in",
    "solution": "Not an error \u2014 a warning that someone was on-site at the ATM and used its Operator Function menu."
  },
  {
    "code": "W0006",
    "description": "WebRMS failed to dial into ATM for more than 3 consecutive days",
    "solution": "Check with the merchant and/or site owner to ensure the ATM is turned on at all times and not sharing the line with another device."
  }
];

export const errorCodeManufacturers = [
  { id: 'genmega', label: 'Genmega', data: genmegaCodes },
  { id: 'hyosung', label: 'Hyosung', data: hyosungCodes },
];

export default errorCodeManufacturers;
