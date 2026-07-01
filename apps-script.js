// ── Money Tracker sync script ─────────────────────────────────────────────
// Deploy as Web App: Execute as Me, Access: Anyone
// Copy the deployed URL into the app Settings → Sync URL

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = getSheet();
    sheet.getRange('A1').setValue(JSON.stringify(data));
    sheet.getRange('A2').setValue(new Date().toISOString());
    return out({ok:true, ts: new Date().toISOString()});
  } catch(err) {
    return out({ok:false, error: err.message});
  }
}

function doGet(e) {
  try {
    const sheet = getSheet();
    const data = sheet.getRange('A1').getValue();
    const ts   = sheet.getRange('A2').getValue();
    if (!data) return out({ok:false, msg:'No backup yet'});
    return out({ok:true, data: data, ts: String(ts)});
  } catch(err) {
    return out({ok:false, error: err.message});
  }
}

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  return ss.getSheetByName('mt_data') || ss.insertSheet('mt_data');
}

function out(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
