import { ActiveClientObj } from "../common-layout_i/common-layout_i";
import * as CryptoJS from 'crypto-js';
import { encryptionKey } from "src/app/siteConfig";

export function getActiveClient(): ActiveClientObj {
    let lsObj = getLocalStorageData('insync');
    // let lsObjstring = window.localStorage.getItem("insync");
    if (lsObj !== {}) {
      // let actualObj = decryptMessages(lsObjstring);
      let activeClientObj: ActiveClientObj;
      for (let eachOma in lsObj) {
        if (lsObj[eachOma].authState !== "logout") {
          activeClientObj = lsObj[eachOma];
        }
      }
      return activeClientObj;
    }
    
  }

  export function getLocalStorageData(lsKey: string) {
    let encryptedData = window.localStorage.getItem(lsKey);
    let actualObj = decryptMessages(encryptedData);
    return actualObj
  }

  export function decryptMessages(encryptedStr: string): any {
    try {
      if (encryptedStr !== null) {
        let decrypted = CryptoJS.AES.decrypt(encryptedStr, encryptionKey);
        let actualObjString = decrypted.toString(CryptoJS.enc.Utf8)
        let actualObj = JSON.parse(actualObjString);
        // let actualObj = JSON.parse(encryptedStr);
        return actualObj;
      } else {
        return {};
      }
    } catch (e) {
      return {};
    }
  }