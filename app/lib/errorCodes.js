// app/lib/errorCodes.js
// ATM error code reference data for the OSO ATM support center.
//
// Solutions are written in plain language for OSO's reference. The full Hyosung
// factory reference runs ~1,434 codes; this is a curated set covering the most
// common and important errors. Add more entries (same shape) to extend coverage.
// Shape: { code, description, solution }

export const genmegaErrorCodes = [
  { code: '0', description: 'Normal status', solution: 'No error.' },
  { code: '20001', description: 'Unable to detect cassette', solution: 'Remove and reseat the cassette. Check the micro-switch on the inside left wall of the dispenser and the white plastic clips that hold the cassette in place — if broken, the cassette will not stay seated.' },
  { code: '20002', description: 'Low cash', solution: 'The low-cash sensor opens at roughly 75 bills when Low Cash Warning is enabled. Replenish the cassette, or disable Low Cash Warning in the Transaction Setup menu if you routinely stock low.' },
  { code: '20003', description: 'Reject bin is full', solution: 'Empty the reject bin, then run a Cassette Total from the settlement menu. If it persists, confirm AP, BIOS, and CDU ROM versions are compatible.' },
  { code: '20004', description: 'Vault door is open', solution: 'Close the vault door. The circuit between the mainboard and door switch is open — check the white plunger switch (upper-left of the vault or along the front edge of the cash tray) and the 2-wire connector at the rear of the mainboard.' },
  { code: '20005', description: 'CDU type mismatch', solution: 'The CDU ROM does not match the AP software. The dispenser and mainboard must share the same country code (USA/Canada). Reprogram the CDU to match the mainboard, and verify the parameters entered during CDU programming.' },
  { code: '20010', description: 'Receipt paper jam', solution: 'Release the paper drawer using the green-stickered tab on the front of the printer and clear the jam. Do not use metal objects — use a business card or stiff paper. Use only 21# paper; thinner paper jams more often.' },
  { code: '20012', description: 'Receipt printer feed lever open', solution: 'Close the feed tray. If already closed, open and close it again or use the printer reset switch. If it persists, the printer may need service.' },
  { code: '20013', description: 'Receipt paper is empty', solution: 'Replace the paper roll. If paper is present, look for jams or obstructions and try the printer reset switch. If it persists, the printer may need service.' },
  { code: '20014', description: 'Thermal printer overheated', solution: 'Usually appears when printing a long journal. Let the printer cool and retry, or use the reset button. If it persists, the printer may need service.' },
  { code: '20016', description: 'Note detected in outlet of CDU', solution: 'Clear any notes at the CDU outlet, or check the outlet sensor for obstruction or dust.' },
  { code: '20215', description: 'CDU detects bills prior to dispensing (CS2 sensor)', solution: 'A blocked sensor was detected at startup. Clear any jammed bills, blow out dust with compressed air, and reseat the belts — loose belts can slip and block sensors.' },
  { code: '21315', description: 'CDU detects bills prior to dispensing (CS13 sensor)', solution: 'A blocked CS13 sensor was detected at startup. Clear jammed bills, clean with compressed air, and check/reseat the belts.' },
  { code: '21A15', description: 'CDU detects bills prior to dispensing (CS1A sensor)', solution: 'A blocked CS1A sensor was detected at startup. Clear jammed bills, clean with compressed air, and check/reseat the belts.' },
  { code: '21B15', description: 'CDU detects bills prior to dispensing (CS1B sensor)', solution: 'A blocked CS1B sensor was detected at startup. Clear jammed bills, clean with compressed air, and check/reseat the belts.' },
  { code: '24A15', description: 'CDU detects bills prior to dispensing (CS4A sensor)', solution: 'A blocked CS4A sensor was detected at startup. Clear jammed bills, clean with compressed air, and check/reseat the belts.' },
  { code: '24B15', description: 'CDU detects bills prior to dispensing (CS4B sensor)', solution: 'A blocked CS4B sensor was detected at startup. Clear jammed bills, clean with compressed air, and check/reseat the belts.' },
  { code: '90001', description: 'Error during card swipe', solution: 'Usually a misread, not a failed reader — common in the error summary and rarely indicates a bad part. If frequent, clean the card reader and test it in diagnostics.' },
  { code: '99999', description: 'NVRAM is broken', solution: 'NVRAM was cleared (power loss or after a bootloader install). Reset the master password to default, clear NVRAM under System Setup > System Control, then reprogram the ATM. On 1800CE/5000CE/5300CE that will not clear, the I/O board battery may be dead.' },
  { code: '400400', description: 'Second cassette removed before separate rejection', solution: 'Reseat cassette #2 correctly and check the catcher inside the cassette #2 guide.' },
  { code: '972211', description: 'Field not found', solution: 'Reboot the ATM. If it persists, contact your attendant/processor.' },
  { code: '972212', description: 'Field error (field must have an initial value)', solution: 'Reboot the ATM. If it persists, contact your attendant/processor.' },
  { code: '972213', description: 'Non-indexed value for indexed field', solution: 'Reboot the ATM. If it persists, contact your attendant/processor.' },
  { code: '972214', description: 'Invalid field', solution: 'Reboot the ATM. If it persists, contact your attendant/processor.' },
  { code: 'CDN04', description: 'Phone line will not support data communication', solution: 'An inline filter may help. Excessive EMI from a nearby source (neon sign, freezer) is a common cause. Also check programming, especially the Dual Master Key setting and host processor configuration.' }
];

export const hyosungErrorCodes = [
  { code: '1030100', description: 'DEV_PIN — key data error from host', solution: 'Contact your host/processor.' },
  { code: '1101910', description: 'Lost card (DEV_MCU)', solution: 'Informational — card was retained. No action usually required.' },
  { code: '1102910', description: 'Lost withdrawal cash (DEV_CSH)', solution: 'Informational — reconcile cash against the journal.' },
  { code: '2000100', description: 'No cassette', solution: 'Insert or reseat the cassette(s). Check the cassette sensor.' },
  { code: '2000200', description: 'Note shortage', solution: 'Replenish the cassette.' },
  { code: '2000300', description: 'Reject bin full', solution: 'Remove notes from the reject bin and run the Cassette Total function again.' },
  { code: '2000400', description: 'Vault door open', solution: 'Close the vault door and check the door switch.' },
  { code: '2000500', description: 'Cash Dispenser Unit data setting error', solution: 'Check the CDU information (currency, denomination, etc.) and verify the battery-backed SRAM.' },
  { code: '2001000', description: 'Receipt paper jam', solution: 'Remove any jammed paper from the printer.' },
  { code: '2001200', description: 'Receipt printer feed plate open', solution: 'Close the feed plate.' },
  { code: '2001300', description: 'Out of receipt paper', solution: 'Replenish the receipt paper.' },
  { code: '2001400', description: 'Printer head overheated before printing', solution: 'Check the printer head and replace if necessary.' },
  { code: '2001600', description: 'Note detected in stacker (shutter/presenter type)', solution: 'Clear any notes from the stacker.' },
  { code: '2010100', description: 'Receipt printer lever opened', solution: 'Fully close the print head lever.' },
  { code: '2010200', description: 'Receipt printer head overheated', solution: 'Wait for the head to cool, then initialize.' },
  { code: '2010300', description: 'Receipt paper jam', solution: 'Remove jammed paper between the print head and rollers.' },
  { code: '2010400', description: 'Receipt paper empty', solution: 'Replenish the paper and check the sensor and its connector.' },
  { code: '2010500', description: 'Receipt paper setting error', solution: 'Check how the paper is loaded and check the sensor and its connector.' },
  { code: '2010700', description: 'No receipt paper', solution: 'Replenish paper in the charger and check the near-end sensor and connector.' },
  { code: '2010800', description: 'Receipt paper cutting error', solution: 'Check the cutter module and confirm the print head lever is fully closed.' },
  { code: '2021500', description: 'Sensor detects note in delivery path before dispense', solution: 'Remove the note from the CDU delivery path.' },
  { code: '2131500', description: 'CS4 sensor detects note before dispense (before reject bin)', solution: 'Remove the note from the CDU delivery path.' },
  { code: '4000000', description: 'CDU received an undefined command from AP software', solution: 'Collect the trace and log files from D:\\trace, then contact your attendant/processor.' },
  { code: '4001100', description: 'CS2 dark detected (front-access reject box open)', solution: 'Remove notes on the CS2 sensor and clean CS2.' },
  { code: '4001400', description: 'CS4A detects note before/after dispense', solution: 'Remove the note from the delivery path and clean CS4A.' },
  { code: '4001500', description: 'CS2 or CS4A detects note before/after dispense', solution: 'Remove the note from the delivery path and clean CS2 and CS4A.' },
  { code: '4003000', description: 'Main motor echo check failed', solution: 'Initialize, check the main motor encoder slit and CS8 encoder sensor/cable, power-cycle, and replace the CS8 sensor if needed.' },
  { code: '4004000', description: 'Cassette removed during dispensing', solution: 'Check the cassette catcher and reseat the cassette properly.' },
  { code: '4004200', description: 'Fewer notes detected at outlet (CS13) than requested', solution: 'Check dispensed/rejected notes, clear any jam in the CDU, clean the CS13 sensor, and replace it if it misbehaves.' },
  { code: '4004300', description: 'Total reject exceeds 20 sheets', solution: 'Check notes in the reject box, realign notes in the cassette, and clean the CS1/CS15/CS31/CS41 sensors and CS5 sensor guide.' },
  { code: '4005100', description: 'Request to dispense over 150 notes', solution: 'Check the received command and communication cable, and confirm the CDU firmware version against spec.' },
  { code: '400FF00', description: 'Bill jam', solution: 'Remove the jammed notes and initialize.' },
  { code: '8216091', description: 'Cash jammed on cash dispenser', solution: 'Remove jammed notes from the return path and clean the CS1–CS4 sensors.' },
  { code: '8217091', description: 'Card in card reader', solution: 'Remove the card.' },
  { code: '9701010', description: 'EPP/PIN pad communication failure', solution: 'Check that the communication cable and COM port are connected.' },
  { code: '9701151', description: 'EPP down on Get Status command', solution: 'Reboot the ATM; if it persists, replace the pin pad.' },
  { code: '9712000', description: 'Failed to create file', solution: 'Reboot, reinstall software, and replace the hard drive if needed.' },
  { code: '9712100', description: 'Failed to read file', solution: 'Reboot and reinstall software if needed.' },
  { code: '9719400', description: 'Invalid cash unit ID', solution: 'Reconfigure the cash dispenser setup data.' },
  { code: '9720000', description: 'Receipt printer communication error during SP open', solution: 'Check that the communication cable and COM port are connected.' },
  { code: '9721124', description: 'Printer paper jammed', solution: 'Remove the jammed paper.' },
  { code: '9740000', description: 'CDU communication failure during COM port open', solution: 'Run RESET in Operator Function, then reboot the ATM.' },
  { code: '9744700', description: 'Cash pick-up failed though cassette #1 has cash', solution: 'Check for a bill jam or empty condition in cassette #1.' },
  { code: '9745500', description: 'System power off while dispensing', solution: 'Reboot the ATM and contact your attendant/processor.' },
  { code: '9799301', description: 'MCU retract over limit', solution: 'Clear the retracted-card count in Operator (OP) mode.' },
  { code: '9799499', description: 'Dispenser count error', solution: 'Check the sensors on the cash dispenser.' },
  { code: '971A000', description: 'Invalid denomination', solution: 'Reconfigure the denomination in supervisor mode.' },
  { code: '971A100', description: 'Invalid currency', solution: 'Reconfigure the currency in supervisor mode.' },
  { code: '971D100', description: 'Partial dispense', solution: 'Check the replenished amount and the notes in cassette #1, then replenish.' }
];

export const errorCodeManufacturers = [
  { id: 'genmega', label: 'Genmega', data: genmegaErrorCodes },
  { id: 'hyosung', label: 'Hyosung', data: hyosungErrorCodes }
];
