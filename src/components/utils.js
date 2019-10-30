function getPosition(position) {
  const baseString="a"
  const index=position.lastIndexOf(baseString)>-1?parseInt(position.substring(position.lastIndexOf(baseString)+1))+1:parseInt(position)+1
  
  const times=Math.floor(Math.log10(index))
  return baseString.repeat(times)+index

}

module.exports = {
  getPosition
}