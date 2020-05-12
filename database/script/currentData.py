import json

class CurrentData:
  data_file = '../database_pioneiras.js'
  def getData(self):
    with open(self.data_file) as arq:
      arq_str = arq.read()	#return file as string
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
    file = file.replace("\"),\n", ">\",\n")
    return file

  """
  file is a string 
  """
  def putJS(self,file):
    file = file.replace("\"<","require(\"")     
    file = file.replace( ">\",\n" ,"\"),\n")
    key = file.find('{')
    rest = file[:key]
    js_command = 'var res = '
    file = file.replace(' ', js_command, 1)

    file = file + '; \n export default res;'
    return file
