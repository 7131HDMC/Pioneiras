import os

class UpdateRemote:

  def gitAdd(self):
    command = 'git add . '
    _add = command 
    os.system(_add)

  def gitCommit(self):
    text = ' \"Update database of women\"'
    command = 'git commit -m '
    _commit = command + text
    os.system(_commit)

  def gitPush(self):
    self.gitAdd()
    self.gitCommit()
    command = 'git push -u origin master'
    os.system(command)
