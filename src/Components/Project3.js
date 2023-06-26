import React from 'react'
import Navbar1 from './Navbar1'
import Footer from './Footer'
export default function Project3() {
  return (
    <div>
      <Navbar1/>
      <p className="project1-abstract">
Abstract:

This project aims to develop a smart attendance system using the ESP8266 microcontroller, RFID (Radio Frequency Identification) technology, a buzzer, and Google Sheets integration. The system provides an automated and efficient way to track and record attendance for various applications, such as schools, offices, or events.</p>
<p className="project1-abstract">
<br/>
Hardware setup:

Connect the RFID reader to the ESP8266 board.
Connect the buzzer to the appropriate pin on the ESP8266 board.
Install necessary libraries:
Install the ESP8266 board package in your Arduino IDE if you haven't already.
Install the RFID library for ESP8266.
Install the Google Sheets library for ESP8266.
<hr/>
Create a Google Sheets document:

Create a new Google Sheets document to store the attendance data.
Note down the document ID, which is the alphanumeric code present in the URL of the document.
<hr/>
Set up Google Sheets API:

Enable the Google Sheets API for your Google account.
Create API credentials (service account) and download the JSON file containing the credentials.
Extract the necessary information from the JSON file:

Extract the client email, private key, and document ID from the downloaded JSON file. These will be used in the ESP8266 code.
<hr/>
Write the Arduino code:

Set up the RFID reader and buzzer in the Arduino code.
Connect to the Wi-Fi network using the ESP8266.
Initialize the Google Sheets library with the client email and private key.
Implement RFID card detection logic and trigger the buzzer when a card is detected.
Send the attendance data to Google Sheets using the Google Sheets library and the document ID.
<hr/>
Upload the code:

Connect the ESP8266 board to your computer.
Select the appropriate board and port in the Arduino IDE.
Upload the code to the ESP8266 board.

<hr/>Test the project:

Power on the circuit and present an RFID card to the reader.
Verify if the buzzer sounds and the attendance data is successfully sent to the Google Sheets document.
</p>
<Footer/>
    </div>
  )
}
