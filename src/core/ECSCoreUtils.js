import ECSCoreGlobals from './ECSCoreGlobals';
//
export default class ECSCoreUtils {}
//Data
ECSCoreUtils.isValidString = function(string) { return (string && string.length > 0 && !Array.isArray(string)); }
ECSCoreUtils.isValidNumber = function(number) {
  let validNumb = NaN;
  try { validNumb = parseInt(number + ""); }
  catch (e) { console.log(e) }
  return !isNaN(validNumb) && !Array.isArray(number);
}
ECSCoreUtils.capitalizeString = function(str) {
  return str.split(' ').map(w=> w.replace(/./, m=> m.toUpperCase())).join(' ');
}

//Database
ECSCoreUtils.cleanDBPrefix = function(val) {
  if (!val) return val;
  function rp(prefix) { return prefix + "::"; }
  const a = val.replace(rp(ECSCoreGlobals.DatabaseUserIDPrefix), "");
  return a;
}