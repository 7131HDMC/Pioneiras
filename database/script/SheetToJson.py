import gspread 
from oauth2client.service_account import ServiceAccountCredentials
import pandas as pd
import requests
import json

from currentData import CurrentData 
from consumeDriveImage import DriveImage

class SheetToJson:
  def __init__(self):
    #url's for get Pioneras's sheet
    scope = ['https://spreadsheets.google.com/feeds','https://www.googleapis.com/auth/drive']
    #directory of API key file
    file_name = "/home/monkey/Desktop/pioneiras/UpdatePioneers/pioneiras-key.json"
    #directory of current pioneers data
    #getting remote pioneers data from google sheets 
    self.getSheet(file_name, scope)
    #removing the headers
    self.headers = self.data.pop(0)
    #getting the current data of pioneers
    self.current = CurrentData()
    self.pioneers = self.current.getData()
    self.df = pd.DataFrame(self.data, columns=self.headers)

  def getSheet(self,file_name, scope):
    credentials = ServiceAccountCredentials.from_json_keyfile_name(file_name, scope)    
    gc = gspread.authorize(credentials)
    wks = gc.open('Pioneiras').sheet1
    self.data = wks.get_all_values()
    
  def writeJson(self, file_str):
    with open(self.current.data_file, "w") as file:
      file.write(file_str)
  def loop(self): 
    pioneer_js = {"extra":[]}
    headers = len(self.df.keys())
    for pioneer in self.data: 

      for key in range(headers): #percorre os dada 
        
        if key == 9 or key == 12 or key == 15 or key == 10 or key == 13 or key == 16 or key == 17:
          continue
        self.linkValues(key=key,pioneer=pioneer,js=pioneer_js)
      self.pioneers[self.century][self.name] = pioneer_js
    str_pioneers = str(self.pioneers)
    str_pioneers = self.current.putJS(str_pioneers)
    self.writeJson(str_pioneers)
    #self.makeJson(pioneer_js)
    print(pioneer_js)
    #print("\n Putting JS \n")


  def linkValues(self,key, pioneer, js):
    if key == 1:
      self.century = self.getDataTime(pioneer[key])
    elif key == 2:
      url = pioneer[key]
      name = pioneer[5]
      type_name = "avatar.png"
      image = DriveImage(url, name, type_name)
      js["avatar"] = image.main()

    elif key == 3:
      url = pioneer[key]
      type_name = "cover.png"
      name = pioneer[5]
      image = DriveImage(url, name, type_name)
      js["cover"] = image.main()

    elif key == 5 :
      self.name = pioneer[key]
      js["name"] = self.name
    elif key == 6:
      resume = pioneer[key]
      js["flavortext"] = resume
    elif key == 7:
      bibiograph = pioneer[key]
      js["text"] = bibiograph
    elif key == 4:
      author = pioneer[key]
      js["author"] = author
    elif key == 8 or key == 11 or key == 14:
      if pioneer[key] == 'sim':
        text_extra_type = pioneer[(k+1)]
        text_extra = pioneer[(k+2)]
        js["extra"].append({"type": text_extra_type,  "content" : text_extra})
    #print(js)
      
  def getDataTime(self,datatime): 
    if '﻿Raiz (< Séc.XVI  até XVII)'== datatime: 
      return 'root' 
    if 'Tronco (Séc.XVII e XIX)' == datatime: 
      return 'body' 
    if 'Copa (Séc.XX e XXI)' == datatime: 
      return 'crown' 



