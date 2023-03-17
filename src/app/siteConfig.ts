import { HttpHeaders } from "@angular/common/http";
let isLiveData:boolean=false;
let currLocationStr = window.location.href;
let currLocation:string;
if(currLocationStr.indexOf("m_")>=0 && !isLiveData){
    currLocation=currLocationStr.replace("m_","").split('#')[0]
}else if(currLocationStr.indexOf("m.")>=0 && !isLiveData){
    currLocation=currLocationStr.replace("m.","").split('#')[0]
}else{
    // currLocation = "https://192.168.0.132"
    // currLocation=currLocationStr.replace("m.","").split('#')[0]
    // currLocation = "https://digitaledu.in/spcs/"
    // currLocation = "https://pdis.digitaledu.in/"
    // currLocation = "https://digitaledu.in/dastur/"
    // currLocation = "https://bhavans.digitaledu.in/"
    // currLocation = "https://digitaledu.in/cigs/"
    // currLocation = "https://pdis.digitaledu.in/"
    // currLocation = "https://sies.digitaledu.in/"
    // currLocation = "https://kes.digitaledu.in/"
    // currLocation = "https://onlineadmissions.org.in/"
    // currLocation = "http://localhost/sims.git/"
    // currLocation = "https://kjsac.digitaledu.in/"
    // currLocation = "https://devrfid.digitaledu.in/"
    // currLocation = "https://nsseducation.digitaledu.in/"
    currLocation = "https://kbp.digitaledu.in/"
    // currLocation = "https://kbp.digitaledu.in/testing/"
    // currLocation = "https://vgvaze.digitaledu.in/"
    // currLocation = "https://ryan.digitaledu.in/"
    // currLocation = "https://collegedemo.digitaledu.in/"
    // currLocation = "https://oma.digitaledu.in/"
    // currLocation = "https://sjrs.digitaledu.in/"
    // currLocation = "https://testing2.digitaledu.in/"
    // currLocation = "https://testing4.digitaledu.in/"
    // currLocation = "https://oma.digitaledu.in/"
    // currLocation = "https://192.168.43.128/sims.git/"
    // currLocation = "https://patuck.digitaledu.in/"
    // currLocation = "https://mvcollege.digitaledu.in/"
    // currLocation = "https://gnvsiom.digitaledu.in/"
    // currLocation = "https://dnyanasadhanacollege.digitaledu.in/"
    // currLocation = "https://stmirascollege.digitaledu.in/"
    // currLocation = "https://sribalajisocietypune.digitaledu.in/"
    // currLocation = "https://gandhishikshan.digitaledu.in/"
    // currLocation = "https://vesasc.digitaledu.in/"
    // currLocation = "https://vnaikmhasala.digitaledu.in/"
    // currLocation = "https://kohinoorcollege.digitaledu.in/"
    // currLocation = "https://smshettycollege.digitaledu.in/"
    // currLocation = "https://ddvispute.digitaledu.in/"
    // currLocation = "https://bmrgirlscollege.digitaledu.in/"
    // currLocation = "https://vpmthane.digitaledu.in/"
    // currLocation = "https://tsrahaman.digitaledu.in/"
    // currLocation = "https://annasahebmagar.digitaledu.in/"

}

export const baseSitePath = currLocation;
export const headers = new HttpHeaders({'hash':'trr36pdthb9xbhcppyqkgbpkq'});
export const options = {
  headers: headers
};

export const encryptionKey = "trr36pdthb9xbhcppyqkgbpkq";
export const adm_app_year = "2020";

export const dgKey = "AIzaSyDNUVqY038q8m3lf1yiQ_Otz5xeofLZtws";