/**
   BasicHTTPSClient.ino

    Created on: 20.08.2018

*/

#include <Arduino.h>

#include <ESP8266WiFi.h>
#include <ESP8266WiFiMulti.h>
#include <FirebaseArduino.h>
#include <ESP8266HTTPClient.h>

#include <WiFiClientSecureBearSSL.h>
// Fingerprint for demo URL, expires on June 2, 2019, needs to be updated well before this date
const uint8_t fingerprint[20] = {0x0e,0x81,0xaa,0x54,0x2c,0x1a,0xac,0xba,0x15,0xa8,0x92,0xad,0x62,0x32,0x59,0x1b,0xb2,0xe8,0x0d,0x9e};

ESP8266WiFiMulti WiFiMulti;

#define FIREBASE_HOST "dazzling-torch-8270.firebaseio.com"
#define FIREBASE_AUTH "II3bycCtijU0NplKxY7HoJ1e8YLtIY92PRYHdBRu"

void setup() {

  Serial.begin(115200);
  // Serial.setDebugOutput(true);

  Serial.println();
  Serial.println();
  Serial.println();

  for (uint8_t t = 4; t > 0; t--) {
    Serial.printf("[SETUP] WAIT %d...\n", t);
    Serial.flush();
    delay(1000);
  }

  WiFi.mode(WIFI_STA);
  WiFiMulti.addAP("Rustin", "k8084164");

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  // wait for WiFi connection
  if ((WiFiMulti.run() == WL_CONNECTED)) {

    std::unique_ptr<BearSSL::WiFiClientSecure>client(new BearSSL::WiFiClientSecure);

    //client->setFingerprint(fingerprint);
    //Firebase.setFloat("number", 42.0);

   
   
  }

  Serial.println("Wait 10s before next round...");
  //delay(10000);
   Serial.println(Firebase.getFloat("number"));
   if(Firebase.getFloat("number") == 55)
   {
    Firebase.setString("number","hello");
    Serial.println("******");
       digitalWrite(LED_BUILTIN, LOW);  
       delay(1000);                      // Wait for a second
        digitalWrite(LED_BUILTIN, HIGH);  // Turn the LED off by making the voltage HIGH
        delay(2000);      
   }
   
   }
