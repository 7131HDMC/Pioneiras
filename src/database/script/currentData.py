import json

class CurrentData:
  data_file = '../database_pioneiras.js'
  def getData(self):
    with open(self.data_file) as arq:
      arq_str = arq.read()	#return file as string
      arq_str = arq_str.replace("\'","\"")
      arq_str = self.removeJS(arq_str)
      pioneers = json.loads(arq_str)
      return pioneers 
  """
  file is a string
  """  
  def removeJS(self,file):
    #remove all before the first '{'    
    key = file.find('{')
    rest = file[:key]
    file = file.replace(rest,' ')
    #remove all after ';', with it
    key = file.find(';')
    rest = file[key:]
    file = file.replace(rest,' ')
    file = file.replace("require(\"","\"<")      
    file = file.replace("\"),", ">\",\n")
    return file

  def format(self,file):
    file = file.replace("{", "{ \n")
    file = file.replace("\"require","require")
    file =  file.replace(")\"", ")")
    return file

  """
  file is a string 
  """
  def putJS(self,file):
    file = file.replace("\'<","require(\"")     
    file = file.replace( ">\'" ,"\")")
    #key = file.find('{')
    #rest = file[:key]
    file = 'var res = ' + file 

    file = file + '; \n export default res;'
    file = self.format(file)
    #file = file.replace("\'","\"")
    return file
